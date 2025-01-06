using Dapper;
using pdf.Entities;

namespace pdf.Database
{
    internal class ModelByBrandDb : PostgresDb<Model>
    {
        public int BrandId { get; set; }
        
        internal override IEnumerable<Model> Read()
        {
            using (var connection = Connect())
            {
                var models = connection.Query<Model>(Query(), new { brand_id = this.BrandId });
                return models;
            }
        }

        internal override string Query()
        {
            return @"   select mo.code,mo.name,mo.year,mo.detail,ma.name manufacturer
                        from model mo
                        join manufacturer ma on mo.manufacturer_id = ma.id
                        where mo.brand_id = @brand_id 
                        order by 1,2";
        }
    }
}
