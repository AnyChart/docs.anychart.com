{:index 6}
# Getting Data from JSON

* [Overview](#overview)
* [JSON vs JavaScript](#json_vs_javascript)
* [Samples](#samples)
 * [Data Sets](#data_sets)
 * [CSV Data](#csv_data)
* [Settings](#settings)
 * [Axes](#axes)
 * [Visualisation](#visualisation)
 * [Complex](#complex)

## Overview

AnyChart supports several ways of setting data. This article quickly demonstrates main aspects of using JSON format in AnyChart component. Last sample of this article demonstrates cartesian chart with advanced settings. For the information on other ways of setting data see [Using Data Sets](Using_Data_Sets) and [Data From XML](Data_From_XML) articles.

## JSON vs JavaScript

AnyChart provides {api:anychart#fromJson}**.fromJSON()**{api} for using data in JSON format. Snippet below represent simple instance of getting data from JSON format.

```
  var chart = anychart.fromJSON(/*put your JSON data in here*/);

  // set container and draw chart
  chart.container('container').draw();
```

Setting data using JSON format is very similar to the way of setting data in JavaScript. The name of every object in JSON config corresponds to the name of a method or parameter in JS.

```
  // JSON data
  var json = {
    // chart settings
    "chart": {
      // chart type
      "type": "column",
      // series settings
      "series": [{
        // series data
        "data": [
          {"x": "P1", "value": "128.14"},
          {"x": "P2", "value": "112.61"},
          {"x": "P3", "value": "163.21"},
          {"x": "P4", "value": "229.98"},
          {"x": "P5", "value": "90.54"}
        ]
      }],
      // chart container
      "container": "container"
    }
  };
```

JSON format has some peculiarities. JSON configuration can contain string, object, array, number, boolean and null. The variety of acceptable data formats makes the JSON structure very similar to JS. To find out any of requite method or parameter use {api:anychart}API{api}. API supplies every parameter with a structure to invoke it. This structure is the same for JSON data set.

## Samples

### Data Sets

JSON data set can contain one or several series. Sample below demonstrates chart with several series from JSON.

```
  // series settings
  "series": [{
    // first series data
    "data": [
      {"x": "P1", "value": "128.14"},
      {"x": "P2", "value": "112.61"},
      {"x": "P3", "value": "163.21"},
      {"x": "P4", "value": "229.98"},
      {"x": "P5", "value": "90.54"}
    ]
  },{
    // second series data
    "data": [
      {"x": "P1", "value": "90.54"},
      {"x": "P2", "value": "104.19"},
      {"x": "P3", "value": "150.67"},
      {"x": "P4", "value": "120.43"},
      {"x": "P5", "value": "200.34"}
    ]
  }]
```

{sample}WD\_Data\_from\_JSON\_01{sample}

### CSV Data

CSV format is easiest way to create data set. Here is a sample of CSV data set.

```
  // csv data set
  var csvData = 'January, 10000\n'+
    'February, 12000\n'+
    'March, 18000\n'+
    'April, 11000\n'+
    'May, 9000\n';
```

{sample}WD\_Data\_from\_JSON\_02{sample}

## Settings

### Axes

Data from JSON can contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. Sample below demonstrates setting axes names and adjusting scales orientation.

{sample}WD\_Data\_from\_JSON\_03{sample}

### Visualisation

Visual settings can be vital for a chart. JSON can contain almost any method and parameter for adjusting visual settings.

```
  "fill":"gold",
  "stroke": "gray",
  "hoverStroke": "darkred",
  "hatchFill": {
    "type": "diagonalbrick",
    "color": "gray"
  },
  "hoverHatchFill":{
    "type:": "diagonalbrick",
    "color": "darkred"
  }
```

{sample}WD\_Data\_from\_JSON\_04{sample}

### Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates cartesian chart with several line series, customized axes, scales, grids and titles.

{sample}WD\_Data\_from\_JSON\_05{sample}