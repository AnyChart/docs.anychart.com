{:index 8.5}
# Getting Data from CSV

## Overview

AnyChart js charting library supports several ways of setting data. This article tells  how [Comma-Separated Values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) format can be used in AnyChart component. 

CSV is the best solution when you need to minimize the size of data input or when you are connecting to a data source that is already in CSV format. 

For the information on other ways of setting data see [Data Sets](Data_Sets) and [Supported Data Formats](Supported_Data_Formats) articles.

Almost all charts and data methods in AnyChart can get data in CSV format without any problems, like this:

```
// create CSV string
var csvString = '2009-02-05,6764.81\n' +
      '2009-02-07,7056.48\n' +
      '2009-02-18,7180.97\n' +
      '2009-02-26,7269.06\n' +
      '2009-02-25,7349.58\n' +
      '2009-02-24,7115.34\n' +
      '2009-02-23,7365.99\n' +
      '2009-02-20,7461.49\n' +
      '2009-02-19,7555.23';
      
// create an area chart      
var chart = anychart.area();

// create the area series based on CSV data
chart.area(csvString);

// display a chart
chart.container('container').draw();
```

Here is a live sample:

{sample}WD\_Data\_from\_CSV\_01{sample}

## CSV Parsing Settings

By default AnyChart considers a comma to be a column separator, line break to be rows separator and first line is considered to be a line with the data justa as any other. This can be tuned using {api:anychart.data.TextParsingSettings}anychart.data.TextParsingSettings{api}.

You can change CSV parsing settings by passing an object with the settings as the second parameter when you pass CSV data. Here is an object format:

```
csvSettings = {ignoreFirstRow: true, columnsSeparator: ";", rowsSeparator: "*"};
```

And here is a sample code:

```
// create CSV string
var csvString = 'Dates;Price*' +
	'2009-02-05;6764.81*' +
	'2009-02-07;7056.48*' +
	'2009-02-18;7180.97*' +
	'2009-02-26;7269.06*' +
	'2009-02-25;7349.58*' +
	'2009-02-24;7115.34*' +
	'2009-02-23;7365.99*' +
	'2009-02-20;7461.49*' +
	'2009-02-19;7555.23';
      
// create an area chart      
var chart = anychart.line();

// create the area series based on CSV data
chart.line(csvString, {ignoreFirstRow: true, columnsSeparator: ";", rowsSeparator: "*"});

// display a chart
chart.container('container').draw();
```

See it live:

{sample}WD\_Data\_from\_CSV\_02{sample}

## Loading CSV Files

You can also load CSV data from files using [Data Adapter](./Data_Adapter/Overview) as described in [Data Adapter](./Data_Adapter/Loading_CSV_File).

