{:index 6}
# Getting Data from JSON

* [Overview](#overview)
* [Multiple Series](#multiple_series)
* [Axis](#axis)
 * [Orientation](#orientation)
 * [Inversion](#inversion)
 * [Logarithmic Scale](#logarithmic_scale)
* [Visualization](#visualization)
 * [Markers](#markers)
 * [Colors](#colors)
 * [Coloring Series](#coloring_series)
 * [Coloring Elements](#coloring_elements)
 * [Hatch Fills](#hatch_fills)
 * [Advanced Settings](#advanced_settings)

## Overview

AnyChart provides variate of possibilities for translating data into Anychart JavaScript library. Constant usage of java script solutions may appear to be unproductive in some cases. Aiming to makes our component more comfortable our partners, Anychart provides opportunities to use data from JSON file. This article is divided to usage of JSONs as source of information and chart style setter.

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

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set {api:anychart.graphics.vector.Fill}**.fill()**{api} parameters in the {api:anychart.core.cartesian.series}**series**{api}. In the sample below we have 5 series with sample data and we'll color each series in different color. Here is the sample:

{sample}WD\_Data\_from\_JSON\_08{sample}

### Coloring Elements

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting {api:anychart.graphics.vector.Fill}**".fill()"**{api} method for a **point**.

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting {api:anychart.graphics.vector.Fill}**".fill()"**{api} method for a **point**.

{sample}WD\_Data\_from\_JSON\_09{sample}

 **Important Note:**
AnyChart seriously takes care of visualization and users convenience - that is why we have a number of ways to set
colors, for example, instead of "Rgb(180,77,77)" you can set "HSB" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this it is not all about colors in AnyChart. Read more about setting colors below and in the following Help Sections:
  * [Color management](../Appearance_Settings/Color_Management)

## Hatch Fills

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings. To see the whole range of available hatch types see [Hatch](../Appearance_Settings/Hatch_Fill) tutorial.


To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting {api:anychart.charts.Cartesian#hatchFillPalette}**.hatchFill()**{api} parameter for series.

{sample}WD\_Data\_from\_JSON\_10{sample}

## Advanced Settings

All mentioned settings in this articles were demonstrated on the column chart. Colum chart has multiple predefined parameters thus can't fully represent all variety of tunable settings and options. Next sample fixes this drawback. It demonstrates cartesian chart with several different series, customized axes, legend, scales and titles.

{sample}WD\_Data\_from\_JSON\_11{sample}