using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace pdf
{
    internal class Builder
    {
        public static  void Build()
        {
            Database database = new Database();
            var data = database.Read();
            CreatePdf(data);
        }

        private static void CreatePdf(IEnumerable<Data> data)
        {
            Document.Create(container =>
            {
                container.Page(page =>
                {
                    page.Size(PageSizes.A4);
                    page.Margin(2, Unit.Centimetre);
                    page.PageColor(Colors.White);
                    page.DefaultTextStyle(x => x.FontSize(12));

                    page.Header()
                        .Text($"Diecast Collection - {DateTime.Now}")
                        .SemiBold()
                        .FontSize(16);

                    page.Content()
                        .PaddingVertical(1, Unit.Centimetre)
                        .Table(table =>
                        {
                            table.ColumnsDefinition(columns =>
                            {
                                columns.ConstantColumn(10, Unit.Centimetre);
                                columns.ConstantColumn(3, Unit.Centimetre);
                                columns.ConstantColumn(3,Unit.Centimetre);
                            });

                            uint row = 1;
                            foreach (var item in data) 
                            {
                                table.Cell().Row(row).Column(1).Text(item.Model);
                                table.Cell().Row(row).Column(2).Text(item.Brand);
                                table.Cell().Row(row).Column(3).Text(item.Code);
                                row++;
                            }
                        });

                    page.Footer()
                        .AlignCenter()
                        .Text(x =>
                        {
                            x.Span("Page ");
                            x.CurrentPageNumber();
                        });
                });
            })
            .GeneratePdf("C:\\Users\\adria\\OneDrive\\Desktop\\models.pdf");
        }

    }
}
