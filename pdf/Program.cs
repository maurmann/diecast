using pdf;
using QuestPDF.Infrastructure;

QuestPDF.Settings.License = LicenseType.Community;

string layout = Constants.GenerateByBrand;

if (args.Length > 0 && (
    args[0].Equals(Constants.GenerateByBrand, StringComparison.CurrentCultureIgnoreCase) ||
    args[0].Equals(Constants.GenerateByManufacturer, StringComparison.CurrentCultureIgnoreCase)))
{
    layout = args[0];
}

Console.WriteLine("Use args 'manufacturer' or 'brand'. Default is 'brand'");
Console.WriteLine($"Generating pdf by {layout}");

Builder.Build(layout);