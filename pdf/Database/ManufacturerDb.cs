using Dapper;
using pdf.Entities;

namespace pdf.Database
{
    internal class ManufacturerDb : PostgresDb<Manufacturer>
    {
        internal override string Query()
        {
            return "select id,name from manufacturer";
        }

        internal override IEnumerable<Manufacturer> Read()
        {
            using (var connection = Connect())
            {
                var manufacturers = connection.Query<Manufacturer>(Query());
                return manufacturers;
            }
        }
    }
}
