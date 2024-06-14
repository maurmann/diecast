using pdf.Database;
using pdf.Entities;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace pdf
{
    internal class Builder
    {
        public static void Build()
        {
            BrandDb brandDb = new BrandDb();
            var brands = brandDb.Read();

            ModelDb modelDb = new ModelDb();
            foreach (var brand in brands)
            {
                modelDb.BrandId = brand.Id;
                var models = modelDb.Read();
                BuildByBrand(models, brand);
            }
        }

        private static void BuildByBrand(IEnumerable<Model> models, Brand brand)
        {
            Document.Create(container =>
            {
                container.Page(page =>
                {
                    page.Size(PageSizes.A4);
                    page.Margin(2, Unit.Centimetre);
                    page.PageColor(Colors.White);
                    page.DefaultTextStyle(x => x.FontSize(10));

                    page.Header()
                        .Text($"{brand.Name} - {DateTime.Now.ToString("dd/MM/yyyy")}")
                        .SemiBold()
                        .FontSize(16);

                    page.Content()
                        .PaddingVertical(1, Unit.Centimetre)
                        .Table(table =>
                        {
                            table.ColumnsDefinition(columns =>
                            {
                                columns.ConstantColumn(2, Unit.Centimetre);
                                columns.ConstantColumn(9, Unit.Centimetre);
                                columns.ConstantColumn(4, Unit.Centimetre);
                                columns.ConstantColumn(2, Unit.Centimetre);
                            });

                            uint row = 1;
                            foreach (var model in models)
                            {
                                table.Cell().Row(row).Column(1).Text(model.Code);
                                table.Cell().Row(row).Column(2).Text(model.Name);
                                table.Cell().Row(row).Column(3).Text(model.Manufacturer);
                                table.Cell().Row(row).Column(4).Text(model.Year);
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
            .GeneratePdf(GetFileNameAndPath(brand));
        }

        private static string GetFileNameAndPath(Brand brand)
        {
            return $"{GetPath()}{brand.Name}.pdf";
        }

        private static string GetPath()
        {
            var path = Constants.DEFAULT_PATH;
            if (!path.EndsWith(@"\"))
                path += @"\";

            return path;
        }
    }
}
