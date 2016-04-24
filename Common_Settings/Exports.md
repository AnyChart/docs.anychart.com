{:index 3}
Exports
======================

* [Chart](#chart)
* [Data](#data)

## Chart

AnyChart js charting library allows to save charts in different formats: {api:anychart.graphics.vector.Stage#saveAsSvg}**SVG**{api}, {api:anychart.graphics.vector.Stage#saveAsPng}**PNG**{api}, {api:anychart.graphics.vector.Stage#saveAsJpg}**JPG**{api} and {api:anychart.graphics.vector.Stage#saveAsPdf}**PDF**{api}.

To launch the export you need to use these methods as shown:

```
  // this method will save the chart in SVG format
  chart.saveAsSvg();
  // this method will save the chart in PNG format
  chart.saveAsPng();
  // this method will save the chart in JPG format
  chart.saveAsJpg();
  // this method will save the chart in PDF format
  chart.saveAsPdf();
```

And here is a sample where you can see all methods in action:

{sample}Exports\_01{sample}

## Data

From the first glance it seems that the visual presentation is the main part of a chart. But in some cases it appears that the chart's data is utterly important, thus AnyChart provides several methods for saving current chart's data. Possible output formats are {api:anychart.core.Chart#saveAsXml}**XML**{api}, {api:anychart.core.Chart#saveAsCsv}**CSV**{api}, {api:anychart.core.Chart#saveAsXlsx}**XLSX**{api} (excel file) and {api:anychart.core.Chart#saveAsJson}**JSON**{api}.

```
  // this method will chart's data in XML format
  chart.saveAsXml();
  // this method will chart's data in CSV format
  chart.saveAsCsv();
  // this method will chart's data in Xlsx format
  chart.saveAsXlsx();
  // this method will chart's data in Json format
  chart.saveAsJson();
```

{sample}Exports\_05{sample}

### Output Settings

Each of the methods for saving data uses parameters for managing output file. Here are the sample of usage data saving methods with parameters:
 
```
  var chart = anychart.bar();
  
  chart.saveAsXml(
    // include current theme
    true,
    // custom file name
    "output_name"
  );
  
  chart.saveAsCsv(
    // csv mode
    "raw",
    true,
    // custom file name
    "output_name"
  );
  
  chart.saveAsJson(
    // include current theme
    true,
    // custom file name
    "output_name"
  );
  
  chart.saveAsXlsx(
    // csv mode
    "raw",
    // custom file name
    "output_name"
  );
```

Here is a sample that demonstrates the saving of data with custom file name:

{sample}Exports\_06{sample}

**Note**: all data saving methods are available in the context menu.
