using Dapper;
using Npgsql;
using System.Configuration;

namespace pdf
{
    internal class Database
    {
        private NpgsqlConnection Connect()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["postgres"].ConnectionString;
            var connection = new NpgsqlConnection(connectionString);
            connection.Open();

            return connection;
        }

        internal IEnumerable<Data> Read()
        {
            using (var connection = this.Connect())
            {
                var data = connection.Query<Data>(Query());
                return data;
            }
        }

        internal string Query()
        {
            return @"   select m.name model,m.code,b.name brand
                        from model m 
                        join brand b on m.brand_id = b.id
                        where b.id in (1,2) and m.code is not null
                        order by 3,2";
        }
    }
}
