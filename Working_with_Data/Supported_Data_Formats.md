{:index 1}
# Supported Data Formats

## Introduction

AnyChart charting library supports a lot of ways to set data to your charts. You can choose which one suits your task the best:

- [JavaScript API](#javascript_api)
- [XML](#xml)
- [JSON](#json)
- [CSV](#csv)
- [Google Spreadsheet](#google_spreadsheet)
- [HTML Table](#html_table)

Each way has some strengths and weaknesses. We recommend JavaScript API - this option is generally the most flexible and most of the sample you will see in [AnyChart JavaScript Charts Documentation](https://docs.anychart.com/) and [AnyChart JavaScript Charts API](https://api.anychart.com/) use this format.

## JavaScript API

JavaScript API helps you the best when you need to [Create, Read, Update, and Delete](./Data_Manipulation) data points dynamically.

We recommend to use [Data Sets](./Data_Sets) when you work with data in JavaScipt but you can also pass data directly to a chart:

```
// create a pie chart
var chart = anychart.pie([
    ['Product A', 1222],
    ['Product B', 2431],
    ['Product C', 3624],
    ['Product D', 5243],
    ['Product E', 8813]
]);

// set container id for the chart
chart.container('container');

// initiate chart drawing
chart.draw();
```

See details on [Data Sets](./Data_Sets) article.

## XML

XML format is your choice if you prefer the declarative style for chart configurations.  
Also, all previous versions of AnyChart were XML-based, so this way of setting data may be the one you've got used to. XML format has a little bit less perfect performance and is not as flexible in terms of customization as JS API.

```
// create an XML string
var xmlString = '<xml>' +
                '<chart type="pie" >' +
                  '<data>' +
                    '<point name="Product A" value="1222"/>' +
                    '<point name="Product B" value="2431"/>' +
                    '<point name="Product C" value="3624"/>' +
                    '<point name="Product D" value="5243"/>' +
                    '<point name="Product E" value="8813"/>' +
                  '</data>' +
                '</chart>' +
              '</xml>';
              
// create a chart from xml config              
var chart = anychart.fromXml(xmlString);

// set container id for the chart
chart.container('container');

// initiate chart drawing
chart.draw();
```

See detailed description in:
- [Data From XML](./Data_From_XML) article
- [Loading XML Files](./Data_Adapter/Loading_XML_File) article

## JSON

JSON basically has the same purpose and drawbacks as the XML format. JSON doesn't have as 
perfect performance as JS API and is less flexible also.

```
// create json data
var json = {
    "chart": {
        "type": "pie",
        "data": [
            ["Product A", 1222],
            ["Product B", 2431],
            ["Product C", 3624],
            ["Product D", 5243],
            ["Product E", 8813]
        ]
    }
};

// create chart from json config              
var chart = anychart.fromJson(json);

// display a chart
chart.container('container').draw();
```

See detailed description in:
- [Data From XML](./Data_From_JSON) article
- [Loading XML Files](./Data_Adapter/Loading_JSON_File) article

## CSV  

CSV is obviously the best solution when you need to minimize the size of data input. It is as easy in use as any other format but CSV also lacks flexibility of JS API.

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

See detailed description in:
- [Data From CSV](./Data_From_CSV) article
- [Loading CSV Files](./Data_Adapter/Loading_CSV_File) article

## Google Spreadsheet

You have an option to use Google Spreadsheet as the data source using [Data Adapter](./Data_Adapter/Overview), see:
- [Loading Google Spreadsheet Files](./Data_Adapter/Loading_Google_Spreadsheet) article.

## HTML Table

You have an option to load data from HTML table on a page using [Data Adapter](./Data_Adapter/Overview), see:
- [Loading Google Spreadsheet Files](./Data_Adapter/Parsing_HTML_Table) article.

