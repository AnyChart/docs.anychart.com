{:index 5}
# Loading Google Spreadsheet

## Overview

Ability to [load data from Google Spreadsheet](#loading_spreadsheet) is one of the features [Data Adapter](Overview) provides.

To work with the features Data Adapter provides you need to plug it in along with AnyChart Library:

```
<!-- Include the data adapter -->
<script src="https://cdn.anychart.com/js/latest/data-adapter.min.js"></script>
```

When the Data Adapter is plugged in, you can use the {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){api} method.

## Spreadsheet format and Access

AnyChart Data Adapter can be used to load only Google Spreadsheets that are:

- Published to the Web: File > Publish to the web
<img alt="how to publish google spreadsheet to web to use in anychart data adapter" src="https://static.anychart.com/images/docs/data-adapter-google-spreadsheet-publish-1.png"/>
<img alt="how to publish google spreadsheet to web to use in anychart data adapter" src="https://static.anychart.com/images/docs/data-adapter-google-spreadsheet-publish-2.png"/>


- Follow the certain format, where the first row **must** contain series names and first column - arguments:
<img alt="format for google spreadsheet to be used in anychart data adapter" src="https://static.anychart.com/images/docs/data-adapter-google-spreadsheet-format.png"/>

## Loading Spreadsheet

Use {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){api} to load a spreadsheet:

```
anychart.data.loadGoogleSpreadsheet('1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU', function(data) {
	// the data default sheet is loaded into the "data" variable
});
```

### Key

A spreadsheet is identified and load by key, which is a part of sharing URL, for example, for this sharing URL:

```
https://docs.google.com/spreadsheets/d/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/pubhtml
```

The key is `1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU`, it should be passed as the first parameter to {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){api} method.

### Sheet

By default the {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){api} method loads the default sheet, to load any other sheet you need to pass either the index of the sheet:

```
anychart.data.loadGoogleSpreadsheet({key: 1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU', sheet: '2'}, function(data) {
	// the data from the sheet #2 is loaded into the "data" variable
});
```

Or you need to specify the unique identifier of the sheet, the only way to figure out the identifier is to proceed to spreadsheet XML that follows **http://schemas.google.com/spreadsheets/2006** schema and locate `<id>` tag in `<entry>` tag. For example, for our sample sheet, [https://spreadsheets.google.com/feeds/worksheets/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/public/basic](https://spreadsheets.google.com/feeds/worksheets/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/public/basic), the `<entry>` for the second sheet looks like this:

```
<entry>
<id>
https://spreadsheets.google.com/feeds/worksheets/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/public/basic/obqmz8q
</id>
<updated>2017-05-28T13:09:46.163Z</updated>
<category scheme="http://schemas.google.com/spreadsheets/2006" term="http://schemas.google.com/spreadsheets/2006#worksheet"/>
<title type="text">Sales: Vegetables</title>
<content type="text">Sales: Vegetables</content>
<link rel="http://schemas.google.com/spreadsheets/2006#listfeed" type="application/atom+xml" href="https://spreadsheets.google.com/feeds/list/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/obqmz8q/public/basic"/>
<link rel="http://schemas.google.com/spreadsheets/2006#cellsfeed" type="application/atom+xml" href="https://spreadsheets.google.com/feeds/cells/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/obqmz8q/public/basic"/>
<link rel="http://schemas.google.com/visualization/2008#visualizationApi" type="application/atom+xml" href="https://docs.google.com/spreadsheets/d/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/gviz/tq?gid=709869616&pub=1"/>
<link rel="http://schemas.google.com/spreadsheets/2006#exportcsv" type="text/csv" href="https://docs.google.com/spreadsheets/d/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/export?gid=709869616&format=csv"/>
<link rel="self" type="application/atom+xml" href="https://spreadsheets.google.com/feeds/worksheets/1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU/public/basic/obqmz8q"/>
<gs:colCount>26</gs:colCount>
<gs:rowCount>1000</gs:rowCount>
</entry>
```

Which means that sheet unique identifier is `obqmz8q` and it can be loaded like that:

```
anychart.data.loadGoogleSpreadsheet({key: 1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU', sheet: 'obqmz8q'}, function(data) {
	// the data from the sheet with 'obqmz8q' id is loaded into the "data" variable
});
```

## Setting Data

The {api:anychart.data#loadGoogleSpreadsheet}loadGoogleSpreadsheet(){api} method just loads the data into a variable, the data is stored in {api:anychart.data.DataSettings}anychart.data.DataSettings{api} format, which is also used when data is loaded from [HTML Tables](Parsing_HTML_Table).

You have to create a chart yourself and then pass data to a chart. Please see a set of samples below.

### From the default sheet

Create a multi-series [Column chart](../../Basic_Charts/Column_Chart) from a default sheet:

```
anychart.data.loadGoogleSpreadsheet('1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU', function(data) {
	// the data default sheet is loaded into the "data" variable
	// create a chart
	chart = anychart.column();
	// set data
	chart.data(data);
	// display a chart
	chart.container('container');
	chart.draw();	
});
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_Spreadsheet\_01{sample}

### From a sheet by index

Create a multi-series [Line chart](../../Basic_Charts/Line_Chart) from the second sheet:

```
anychart.data.loadGoogleSpreadsheet({key: '1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU', sheet: '2'}, function(data) {
	// the data from the sheet #2 is loaded into the "data" variable
	// create a chart
	chart = anychart.line();
	// set data
	chart.data(data);
	// display a chart
	chart.container('container');
	chart.draw();
});
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_Spreadsheet\_02{sample}

### From a sheet by id

Create a single-series [Pie chart](../../Basic_Charts/Pie_Chart) from the second sheet by id:

```
anychart.data.loadGoogleSpreadsheet({key: '1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU', sheet: 'obqmz8q'}, function(data) {
	// the data from the sheet with 'obqmz8q' id is loaded into the "data" variable
	// create a chart
	chart = anychart.pie();
	// set data
	chart.data(data);
	// display a chart
	chart.container('container');
	chart.draw();
});
```

Here is a live sample:

{sample}WD\_Data\_Adapter\_Spreadsheet\_03{sample}

