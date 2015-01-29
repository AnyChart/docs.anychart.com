{:index 6}
# Getting Data from JSON

* [Overview](#overview)
 * [Create](#create)
 * [Read](#read)
 * [Update](#update)
 * [Delete](#delete)
 * [Insert](#insert)

## Overview

AnyChart provides variate of possibilities for translating data into Anychart JavaScript library. Constant usage of java scrtipt solutions may appear to be unproductive in some cases. Aiming to makes our component more comfortable our partners, Anychart provides opportunities to use data from JSON file. This article is divided to usage of JSONs as source of information and chart style setter.

For feeding JSON files to anychart, use {api:anychart#fromJson}**.fromJSON()**{api} parameter.

```
  var chart = anychart.fromJSON(/*put your JSON data in here*/);

  // set container and draw chart
  chart.container('container').draw();
```

Snippet above demonstrates getting data from JSON but avoid illuminating JSON structure itself. Snippet below represents simple structure of acceptable JSON.

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

{sample}WD\_Data\_from\_JSON\_01{sample}

## Multiple Series

Charts with multiple series are not much different from the charts with single one. Snippet below demonstrates main aspects of multi-series data from JSON.

```
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

## Axis

Data from JSON may contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. In this section we will quickly demonstrate how axis orientation can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

### Orientation


With AnyChart you can place axes to any side of the chart, all you need to do is to adjust {api:anychart.enums.Orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.

Orientation depends on plot type and inversion of axes, you will find list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) tutorial.

```
  // x axes settings
  "xAxes": [{
    "orientation": "top"
  }],

  // y axes settings
  "yAxes": [{
    "orientation": "right"
  }]
```

Look at the demonstration of this feature on the Single-series sample:

{sample}WD\_Data\_from\_JSON\_03{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis **.inverted()**:

```
  // y scale settings
  "yScale": [{
    "inverted": true
  }],
```
Look at the demonstration of Y Axis inversion on the Single-series sample:

{sample}WD\_Data\_from\_JSON\_04{sample}

## Logarithmic Scale

Logarithmic scale can be used for improving visual appearance of data with great range of values.

```
```