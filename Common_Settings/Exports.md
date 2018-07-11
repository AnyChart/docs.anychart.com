# Exports

## Overview

AnyChart provides you with ability to export charts to images (SVG, PNG, JPG), PDF or data files (CSV, Excel). These options are available both via [Context menu](./UI_Controls/Context_Menu) and API. Every export has some fine tune options, including an ability to change file name. There is also a special option to save chart [configuration](#chart_configuration) which may be used to debug charts and report issues.

## Modules

To enable export, add the [Core](../Quick_Start/Modules#core) and [Exports](../Quick_Start/Modules#exports) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-exports.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Export server

**IMPORTANT, DO NOT SKIP THIS PART**

AnyChart "save as" features work via [AnyChart Export Server](Server-Side_Rendering), which is hosted at AnyChart.Com server. Although we do our best to keep AnyChart site up and running 24x7x365 - we **do not guarantee** export server availability. If you want to have full control over the ability of the component to export images, or just don't want to use  AnyChart Server due to the security or accessibility concerns - just run Export Server in server mode on the server you control and trust and configure your charts to custom server.

Custom server address is set using the {api:anychart.exports#server}anychart.exports.server(){api} method:

```
anychart.exports.server("http://localhost:2000");
```

You can read all about AnyChart Export Server and Server-side rendering in [AnyChart Export Server](Server-Side_Rendering) article.

## File name

If you want to change default file name for all exports at once you can use {api:anychart.exports#filename}anychart.exports.filename(){api} method:

```
anychart.exports.filename('custom_name');
```

After you do so, all files, images, pdf and data, will be saved under this name, unless you override it when calling specific methods or for the specific chart. To set how a specific chart should be named when exporting set:

```
chart.exports.filename('custom_name');
```

## Image

AnyChart JS charting library allows to save charts in 3 different image formats: SVG, PNG and JPG:

- {api:anychart.core.Chart#saveAsSvg}saveAsSvg(){api}, 
- {api:anychart.core.Chart#saveAsPng}saveAsPng(){api},
- {api:anychart.core.Chart#saveAsJpg}saveAsJpg(){api}.

### SVG

{api:anychart.core.Chart#saveAsSvg}saveAsSvg(){api} can be launched in two modes, one with width and height passed:

```
saveAsSvg({"width": 360,
	       "height": 500,
	       "filename": 'My Chart SVG'})
```

And another one with paper size and page orientation set:

```
saveAsSvg({"paperSize": "A4",
           "landscape": false,
           "filename": "My Chart SVG"});  
```

### PNG

With {api:anychart.core.Chart#saveAsPng}saveAsPng(){api} you can set width, height and quality in addition to file name:

```
saveAsPng({"width": 360,
           "height": 500,
           "quality": 0.3,
           "filename": "My Chart PNG"});
```

### JPG

With {api:anychart.core.Chart#saveAsJpg}saveAsJpg(){api} you can set width, height, quality and forceTransparentWhite flag and in addition to file name:

```
saveAsJpg({"width": 360,
           "height": 500,
           "quality": 0.3,
           "forceTransparentWhite": false,
           "filename": "My Chart JPG"});
```

To launch the export you need to use these methods as shown:

```
// save the chart in svg format
chart.saveAsSvg();
// save the chart in png format
chart.saveAsPng();
// save the chart in jpg format
chart.saveAsJpg();
```

And here is a sample where you can see all methods in action:

{sample}Exports\_01{sample}

## PDF

To save chart in Pdf format use: {api:anychart.core.Chart#saveAsPdf}saveAsPdf{api} method:

```
// save the chart in pdf format
chart.saveAsPdf();
```

{sample}Exports\_02{sample}

## Data

AnyChart provides several methods for saving current chart's data. Output formats are {api:anychart.core.Chart#saveAsCsv}CSV{api} and {api:anychart.core.Chart#saveAsXlsx}saveAsXlsx(){api} (Excel file).

{api:anychart.enums.ChartDataExportMode}ChartDataExportMode{api} parameter defines what data is exported: only the data used by chart (`"specific"`), all data in the data set (`"raw"`) and a special mode for stock charts allows to export grouped data (`"grouped"`).

### CSV

With {api:anychart.core.Chart#saveAsCsv}saveAsCsv(){api} you can set how you export data and file name:

```
saveAsCsv("raw",
          {"rowsSeparator": "\n",
          "columnsSeparator": ","},
          filename: "csv_file");
```

CSV has several export modes that depend on chart type, see {api:anychart.enums.ChartDataExportMode}anychart.enums.ChartDataExportMode{api} to learn more.

### Excel

With {api:anychart.core.Chart#saveAsXlsx}saveAsXlsx(){api} you can set how you export data and file name:

```
// save chart data in xlsx format
chart.saveAsXlsx('default', "excel");
```

Excel has several export modes that depend on chart type, see {api:anychart.enums.ChartDataExportMode}anychart.enums.ChartDataExportMode{api} to learn more.

To launch the export you need to use these methods as shown:

```
// save chart data in xlsx format
chart.saveAsXlsx();
// save chart data in csv format
chart.saveAsCsv();
```

{sample}Exports\_03{sample}

## Chart Configuration

Chart config may be saved using {api:anychart.core.Chart#saveAsXml}XML{api} and {api:anychart.core.Chart#saveAsJson}JSON{api} methods, this feature may be very useful in debug process or if you want to create some kind of import/export functionality for chart themselves. These methods get output of {api:anychart.core.Chart#toJson}toJson(){api} and {api:anychart.core.Chart#toXml}toXml(){api} methods and allow to save it as file.

### XML

```
// save chart data and configuration in xml format
chart.saveAsXml("chart_xml");
```

### JSON

```
// save chart data and configuration in json format
chart.saveAsJson("json_config");
```

Here is a sample of chart save as XML and save as JSON methods:

{sample}Exports\_04{sample}
