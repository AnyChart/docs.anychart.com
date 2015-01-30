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

### Logarithmic Scale

Logarithmic scale can be used for improving visual appearance of data with great range of values.

```
  "yScale": {
    "type": "log"
  }
```

{sample}WD\_Data\_from\_JSON\_05{sample}

More information on scales can be found in [Scales article](../Axes_and_Grids/Scales).

## Visualization

In this section we will describe main parts of charts visual appearance using JSON.

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

Using such settings we've created a style that defines columns of Gold color with gray border and hatch filled with DiagonalBrick. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed border and hatch fill colored DarkRed too.
Now we will take a sample single series chart described above and apply it to all chart elements.

{sample}WD\_Data\_from\_JSON\_06{sample}

### Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including columns.


In the sample below we will take single-series data described above and mark the highest column in series with a "Star5" of the "Gold" color.


To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 12 pixels in normal state, and make it bigger (12 pixels) when user moves cursor over an element.

```
  "series": [{
    "data": [
      {"x": "P1", "value": "128.14"},
      {"x": "P2", "value": "112.61"},
      {"x": "P3", "value": "163.21"},
      {"x": "P4", "value": "229.98",
        // marker settings
        marker:{
          type:'star5', // marker type
          fill:'gold',  // marker color
          size: 12,     // marker size
          enabled: true // enable marker
        },
        // setting for marker on mouse over
        hoverMarker: {
          size: 22      // marker size
        }
      },
      {"x": "P5", "value": "90.54"}
    ],
  }]
```

Result of this code is shown below

{sample}WD\_Data\_from\_JSON\_07{sample}

### Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not defined special colors.

### Coloring Series



### Coloring elements

## Hatch Fills
