with 
	grouped as (
		select
			b.name,
			count(*) as value,
			1 as sorting
		from 
			model m 
		join 
			brand b on m.brand_id = b.id
		group by 
			b.name 
		order by 
			count(*) desc
		limit 5),
	total as (
		select 
			'total' as name,
			count(*) as value 
		from 
			model m),
	other as (
		select 'other' as name,
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
select name,value::integer from data







