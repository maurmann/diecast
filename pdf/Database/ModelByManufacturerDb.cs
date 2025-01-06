using Dapper;
using pdf.Dto;

namespace pdf.Database
{
    internal class ModelByManufacturerDb : PostgresDb<ModelByManufacturer>
    {
        internal override string Query()
        {
            return @"   select ma.name as manufacturer,mo.name as model,mo.year,mo.detail,mo.id nbr ,br.name as brand
                        from model mo
                        join manufacturer ma on mo.manufacturer_id = ma.id
                        join brand br on mo.brand_id = br.id
                        where mo.manufacturer_id is not null
                        order by ma.name,mo.name,mo.year,br.name";
        }

        internal override IEnumerable<ModelByManufacturer> Read()
        {
            using (var connection = Connect())
            {
                var models = connection.Query<ModelByManufacturer>(Query());
                return models;
            }
        }
    }
}
