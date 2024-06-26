import { Injectable } from '@nestjs/common';
import { PieChart } from './pie.chart';
import { PrismaService } from 'src/prisma.service';
import { Statistic } from './statistic';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  openQueryForPie() {
    return `with grouped as (`;
  }

  closeQueryForPie() {
    return `),
            total as (
                select 
                    'total' as name, count(*) as value 
                from 
                    model m),
            other as (
                select 'Other' as name,
                    (
                        (select sum(total.value) as value from total) - 
                        (select sum(grouped.value) as value from grouped) 
                    ) as value,2 as sorting 
            ),
            data as (
                select name,value,sorting from grouped
                union 
                select name,value,sorting from other
                order by sorting asc, value desc
            ) 
        select 
            name,value::integer 
        from data`;
  }

  async getBrandPieChart(): Promise<PieChart[]> {
    return await this.prisma.$queryRawUnsafe(`
            ${this.openQueryForPie()}
                select
                    b.name, count(*) as value, 1 as sorting
                from 
                    model m 
                join 
                    brand b on m.brand_id = b.id
                group by 
                    b.name 
                order by 
                    count(*) desc
                limit 5
            ${this.closeQueryForPie()}
        `);
  }

  async getManufacturerPieChart(): Promise<PieChart[]> {
    return await this.prisma.$queryRawUnsafe(`
            ${this.openQueryForPie()}
                select
                    ma.name, count(*) as value, 1 as sorting
                from 
                    model mo 
                join 
                    manufacturer ma on mo.manufacturer_id = ma.id
                group by 
                    ma.name 
                order by 
                    count(*) desc
                limit 5
            ${this.closeQueryForPie()}
        `);
  }

  async getCategoryPieChart(): Promise<PieChart[]> {
    return await this.prisma.$queryRawUnsafe(`
        ${this.openQueryForPie()}
        select
            ca.name, count(*) as value, 1 as sorting
        from 
            model mo 
        join 
            category ca on mo.category_id = ca.id
        where
            mo.category_id is not null
        group by 
            ca.name 
        order by 
            count(*) desc
        limit 15
        ${this.closeQueryForPie()}
    `);
  }

  async getBrandAndSeriesStatistics(): Promise<Statistic[]> {
    return await this.prisma.$queryRaw`select 
            b.name as category,
            coalesce(s.name,'N/A') as subcategory,
            count(*)::integer as value
        from model m 
            join brand b on m.brand_id = b.id
            left join series s on m.series_id = s.id
        group by 
            b.name,s.name 
        order by 
            count(*) desc`;
  }
}
