using Dapper;
using pdf.Entities;

namespace pdf.Database
{
    internal class BrandDb : PostgresDb<Brand>
    {
        internal override IEnumerable<Brand> Read()
        {
            using (var connection = Connect())
            {
                var brands = connection.Query<Brand>(Query());
                return brands;
            }
        }

        internal override string Query()
        {
            return "select id,name from brand";
        }
    }
}
