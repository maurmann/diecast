using Npgsql;
using System.Configuration;

namespace pdf.Database
{
    abstract internal class PostgresDb<T> where T : class
    {
        internal NpgsqlConnection Connect()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["postgres"].ConnectionString;
            var connection = new NpgsqlConnection(connectionString);
            connection.Open();

            return connection;
        }

        abstract internal IEnumerable<T> Read();
        abstract internal string Query();
    }
}
