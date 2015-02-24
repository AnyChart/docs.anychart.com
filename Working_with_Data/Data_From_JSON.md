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

AnyChart provides {api:anychart#fromJson}**.fromJSON()**{api} parameter for using data in JSON format. Snippet below represent simple instance of getting data from JSON format.

```
  var chart = anychart.fromJSON(/*put your JSON data in here*/);

  // draw chart
  chart.draw();
```

Setting data using JSON format is very similar to the way of setting data in JavaScript. The name of every object in JSON config corresponds to the name of a method or parameter in JS.

```
  // JSON data
  var json = {
    // chart settings
    "chart": {
      // chart type
      "type": "pie",
      // chart data
      "data": [
        {"x": "Apples", "value": "128.14", fill: "green"},
        {"x": "Oranges", "value": "128.14", fill: "orange"},
      ],
      // chart container
      "container": "container"
    }
  };
```

{sample}WD\_Data\_from\_JSON\_01{sample}

Data set for pie chart 

JSON format has some peculiarities. JSON configuration can contain string, object, array, number, boolean and null. The variety of acceptable data formats makes the JSON structure very similar to JS. To find out any of require method or parameter use {api:anychart}API{api}. API supplies every parameter with a structure to invoke it. This structure is the same for JSON data set. For instance, API provides {api:anychart#column}**column()**{api} method to create column chart.

```
  anychart.column(128.14, 112.61, 163.21, 229.98).container('container').draw();
```

The same chart can be created using JSON

```
  anychart.fromJson({
      "chart": {
        "type": "column",
        "series":[{
          "data": [128.14, 112.61, 163.21, 229.98],
        }],
        "container": "container"
      }
    }).draw();
```

As you can see, JSON format isn't limited only by setting chart type and data, but can set container for the chart. 
  
  
Parameters of Y-Scale should be applied using {api:anychart.charts.Cartesian#yScale}yScale(){api} method and should be invoked using code, similar to the snippet below

```
  // create chart and set it line type
  var chart = anychart.line();
  
  chart.yScale()    // invoke y scale
    .minimum(60)    // set minimum value 
    .maximum(120);  // set maximum value
```

The snippet below shows setting the same parameters using JSON

```
  "chart": {          // create chart
    "type": "line",   // set line type
    "yScale": {       // invoke y scale
      "minimum": 60,  // set minimum value
      "maximum": 120  // set maximum value
    }
```

**Note:** Pie chart can have only one data series, thus JSON config for pie chart requires no "series" object. 


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

{sample}WD\_Data\_from\_JSON\_02{sample}

### CSV Data

CSV format is the easiest way to create plain data set. Here is a sample of CSV data set.

```
  // csv data set
  var csvData = 'January, 10000\n'+
    'February, 12000\n'+
    'March, 18000\n'+
    'April, 11000\n'+
    'May, 9000\n';
```

{sample}WD\_Data\_from\_JSON\_03{sample}

## Settings

### Axes

Data from JSON can contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. Sample below demonstrates setting axes names and adjusting scales orientation.

```
  // x axes settings
  "xAxes": [{               // settings for default x axis
    "orientation": "top",   // set axis position
    "title":{               // settings for axis title
      "enabled": false      // disable title
    }
  }],

  // y axes settings
  "yAxes": [{               // settings for default y axis
    "orientation": "right", // set axis position
    "title":{               // settings for axis title
      "enabled": false      // disable title
    }
  }],

  // y scale settings
  "yScale": {
    "inverted": true        // enable y scale inversion
  }
```

{sample}WD\_Data\_from\_JSON\_04{sample}

### Visualisation

Visual settings are vital for a chart. JSON can control any method and parameter of a chart to configure desirable chart appearance.

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

{sample}WD\_Data\_from\_JSON\_05{sample}

### Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates cartesian chart with several line series, customized axes, scales, grids and titles.

{sample}WD\_Data\_from\_JSON\_06{sample}

## Data serialization

