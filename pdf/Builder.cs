using pdf.Database;
using pdf.Dto;
using pdf.Entities;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace pdf
{
    public abstract class Builder
    {
        public static void Build(string layout)
        {
            switch (layout)
            {
                case Constants.GenerateByBrand:
                    BuildByBrand();
                    break;
                case Constants.GenerateByManufacturer:
                    BuildByManufacturer();
                    break;
                default:
                    throw new NotImplementedException("The selected layout is not implemented");
            }
        }

        private static void BuildByManufacturer()
        {
            ModelByManufacturerDb db = new ModelByManufacturerDb();
            var models = db.Read();
            GeneratePdfByManufacturer(models);
        }

        private static void BuildByBrand()
        {
            BrandDb brandDb = new BrandDb();
            var brands = brandDb.Read();

            ModelByBrandDb modelDb = new ModelByBrandDb();
            foreach (var brand in brands)
            {
                modelDb.BrandId = brand.Id;
                var models = modelDb.Read();
                GeneratePdfByBrand(models, brand);
            }
        }

        private static void GeneratePdfByBrand(IEnumerable<Model> models, Brand brand)
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

        private static string GetFileNameAndPath()
        {
            return $"{GetPath()}ModelsByManufacturer.pdf";
        }

        private static string GetPath()
        {
            var path = Constants.DefaultPath;
            if (!path.EndsWith(@"\"))
                path += @"\";

            return path;
        }

        private static void GeneratePdfByManufacturer(IEnumerable<ModelByManufacturer> models)
        {
            Document.Create(container =>
            {
                container.Page(page =>
                {
                    page.Size(PageSizes.A4);
                    page.Margin(1, Unit.Centimetre);
                    page.PageColor(Colors.White);
                    page.DefaultTextStyle(x => x.FontSize(10));

                    page.Header()
                        .Text($"Models by Manufacturer - {DateTime.Now.ToString("dd/MM/yyyy")}")
                        .SemiBold()
                        .FontSize(14);

                    page.Content()
                        .PaddingVertical(1, Unit.Centimetre)
                        .Table(table =>
                        {
                            table.ColumnsDefinition(columns =>
                            {
                                columns.ConstantColumn(3, Unit.Centimetre);
                                columns.ConstantColumn(7, Unit.Centimetre);
                                columns.ConstantColumn(2, Unit.Centimetre);
                                columns.ConstantColumn(6, Unit.Centimetre);
                            });

                            

                            uint row = 1;
                            foreach (var model in models)
                            {
                                
                                table.Cell().Row(row).Column(1).Text(model.Manufacturer??"");
                                table.Cell().Row(row).Column(2).Text(model.Model??"");
                                table.Cell().Row(row).Column(3).Text(model.Year.ToString());
                                table.Cell().Row(row).Column(4).Text(model.Detail);
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
            .GeneratePdf(GetFileNameAndPath());

        }
    }
}
