with grouped as (
	select b.name,count(*) as rows,1 as sorting
	from model m join brand b on m.brand_id = b.id
	group by b.name 
	order by count(*) desc
	limit 5),
total as (
	select 'total' as name,count(*) as rows from model m)

select * from grouped 
union 
select 'other' as name,
(
	(select sum(total.rows) as rows from total)
	- 
	(select sum(grouped.rows) as rows from grouped) 
) as rows,2 as sorting 

order by sorting asc,rows desc





