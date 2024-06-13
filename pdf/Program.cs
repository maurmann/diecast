using pdf;
using QuestPDF.Infrastructure;

QuestPDF.Settings.License = LicenseType.Community;

Console.WriteLine("Generating pdf...");
Builder.Build();