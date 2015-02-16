{:index 6}
# Getting Data from XML

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
* [Supported Chart Types](#supported_chart_types)

## Overview

AnyChart supports several ways of setting data. This article quickly demonstrates main aspects of using XML format in AnyChart component. Last sample of this article demonstrates cartesian chart with advanced settings. For the information on other ways of setting data see [Using Data Sets](Using_Data_Sets) and [Data From JSON](Data_From_JSON) articles.

## XML vs JavaScript

AnyChart provides {api:anychart#fromXml}**.fromXML()**{api} for using data in XML format. Snippet below represent simple instance of setting data in XML format

```
  var chart = anychart.fromXML(/*put your XML data in here*/);

  // set container and draw chart
  chart.container('container').draw();
```

Setting data using XML format is very similar to the way of setting data in JavaScript. The name of each tag in XML config corresponds to the name of a method and names of parameters for tags correspond to parameter in JS.

```
  // xml data
  var xml = '<?xml version="1.0" encoding="utf-8"?>' +
    '<anychart xmlns="http://anychart.com/products/anychart7/schemas/7.3.0/schema.xsd">' +
      // set chart type and chart container
      '<chart type="column" container="container">' +
        // series for this chart
        '<series_list>'+
          // series settings
          '<series>' +
            // data set
            '<data>' +
              '<point x="P1" value="128.14"/>'+
              '<point x="P2" value="112.61"/>'+
              '<point x="P3" value="163.21"/>'+
              '<point x="P4" value="229.98"/>'+
              '<point x="P5" value="90.54"/>'+
            '</data>'+
          '</series>'+
        '</series_list>'+
      '</chart>'+
    '</anychart>';
```

**Note:** Use {api:anychart}AnyChart API{api} to adjust any parameter of a chart. XML config uses the same names as methods and parameters do and it is quite easy to set any required parameter with XML data set.

## Samples

### Data Sets

XML data set can contain one or several series. Sample below demonstrates chart with several series from XML.

```
  // list of series for this chart
  '<series_list>'+
    // series settings
    '<series>' +
      // data for first series
      '<data>' +
        '<point x="P1" value="128.14"/>'+
        '<point x="P2" value="112.61"/>'+
        '<point x="P3" value="163.21"/>'+
        '<point x="P4" value="229.98"/>'+
        '<point x="P5" value="90.54"/>'+
      '</data>'+
    '</series>'+
    '<series>' +
      // data for second series
      '<data>' +
        '<point x="P1" value="90.54"/>'+
        '<point x="P2" value="104.19"/>'+
        '<point x="P3" value="150.67"/>'+
        '<point x="P4" value="120.43"/>'+
        '<point x="P5" value="200.34"/>'+
      '</data>'+
    '</series>'+
  '</series_list>'
```

{sample}WD\_Data\_from\_XML\_01{sample}

## Settings

### Axes

Data from XML can contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. Sample below demonstrates setting axes names and adjusting scales orientation.

{sample}WD\_Data\_from\_XML\_02{sample}

### Visualisation

Visual settings can be vital for a chart. XML can contain almost any method and parameter for adjusting visual settings.

```
  // series settings
  '<series fill="gold" stroke="gray" hover_stroke="darkred" hatch_fill="diagonalbrick">' +

    // customize hover hatch fill
    '<hover_hatch_fill type="diagonalbrick" color="darkred"/>'+

  '</series>'
```

{sample}WD\_Data\_from\_XML\_04{sample}

### Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates cartesian chart with several different series and customized chart elements.

{sample}WD\_Data\_from\_XML\_05{sample}


<!--



















AnyChart provides variate of possibilities for translating data into Anychart JavaScript library. Constant usage of java script solutions may appear to be unproductive and even impossible in some cases. Aiming to makes our component more comfortable for our partners, Anychart provides opportunities to use data from XML file. This article is divided to usage of XML format as source of information and chart style setter.

For feeding XML files to anychart, use {api:anychart#fromXml}**.fromXML()**{api} parameter.

```
  var chart = anychart.fromXml(/*put your XML data in here*/);

  // set container and draw chart
  chart.container('container').draw();
```

Snippet above demonstrates getting data from XML but avoid illuminating XML structure itself. Snippet below represents simple structure of acceptable XML.

```
  // xml data
  var xml = '<?xml version="1.0" encoding="utf-8"?>' +
    '<anychart xmlns="http://anychart.com/products/anychart7/schemas/7.3.0/schema.xsd">' +
      // set chart type and chart container
      '<chart type="column" container="container">' +
        // series for this chart
        '<series_list>'+
          // series settings
          '<series>' +
            // data set
            '<data>' +
              '<point x="P1" value="128.14"/>'+
              '<point x="P2" value="112.61"/>'+
              '<point x="P3" value="163.21"/>'+
              '<point x="P4" value="229.98"/>'+
              '<point x="P5" value="90.54"/>'+
            '</data>'+
          '</series>'+
        '</series_list>'+
      '</chart>'+
    '</anychart>';
```

{sample}WD\_Data\_from\_XML\_01{sample}

## Multiple Series

Charts with multiple series are not much different from the charts with single one. Snippet below demonstrates main aspects of multi-series data from XML.

```
  <series_list>
    <series>
      <data>
        <point x="P1" value="128.14"/>
        <point x="P2" value="112.61"/>
        <point x="P3" value="163.21"/>
        <point x="P4" value="229.98"/>
        <point x="P5" value="90.54"/>
      </data>
    </series>
    <series>
      <data>
        <point x="P1" value="90.54"/>
        <point x="P2" value="104.19"/>
        <point x="P3" value="150.67"/>
        <point x="P4" value="120.43"/>
        <point x="P5" value="200.34"/>
      </data>
    </series>
  </series_list>
```

{sample}WD\_Data\_from\_XML\_02{sample}

## Axis

Data from XML may contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. In this section we will quickly demonstrate how axis orientation can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust {api:anychart.enums.Orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.

Orientation depends on plot type and inversion of axes, you will find list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) tutorial.

```
  // x axes setting
  '<x_axes>'+
    // adjust default x axis
    '<axis orientation="top" title="false"/>'+
  '</x_axes>'+
  // y axes settings
  '<y_axes>' +
    // adjust default y axis
    '<axis orientation="right" title="false"/>'+
  '</y_axes>'
```

Look at the demonstration of this feature on the Single-series sample:

{sample}WD\_Data\_from\_XML\_03{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis **.inverted()**:

```
  '<y_scale inverted="true"/>'
```

Look at the demonstration of Y Axis inversion on the Single-series sample:

{sample}WD\_Data\_from\_XML\_04{sample}

### Logarithmic Scale

Logarithmic scale can be used for improving visual appearance of data with great range of values.

```
  '<y_scale type="log"/>'
```

{sample}WD\_Data\_from\_XML\_05{sample}

More information on scales can be found in [Scales article](../Axes_and_Grids/Scales).

## Visualization

In this section we will describe main parts of charts visual appearance using XML.

```
  // series settings
  '<series fill="gold" stroke="gray" hover_stroke="darkred" hatch_fill="diagonalbrick">' +

    // customize hover hatch fill
    '<hover_hatch_fill type="diagonalbrick" color="darkred"/>'+

  '</series>'
```

Using such settings we've created a style that defines columns of Gold color with gray border and hatch filled with DiagonalBrick. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed border and hatch fill colored DarkRed too.
Now we will take a sample single series chart described above and apply it to all chart elements.

{sample}WD\_Data\_from\_XML\_06{sample}

### Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including columns.


In the sample below we will take single-series data described above and mark the highest column in series with a "Star5" of the "Gold" color.


To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 12 pixels in normal state, and make it bigger (12 pixels) when user moves cursor over an element.

```
  '<series>' +
    // data set
    '<data>' +
      '<point x="P1" value="128.14"/>'+
      '<point x="P2" value="112.61"/>'+
      '<point x="P3" value="163.21"/>'+
      '<point x="P4" value="229.98">'+
        // marker settings
        '<marker enabled="true" type="star5" fill="gold" size="12"/>'+
        // marker settings on mouse over
        '<hover_marker size="15"/>'+
      '</point>'+
      '<point x="P5" value="90.54"/>'+
    '</data>'+
  '</series>'
```

Result of this code is shown below

{sample}WD\_Data\_from\_XML\_07{sample}

### Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not defined special colors.

### Coloring Series

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set {api:anychart.graphics.vector.Fill}**.fill()**{api} parameters in the {api:anychart.core.cartesian.series}**series**{api}. In the sample below we have 5 series with sample data and we'll color each series in different color. Here is the sample:

{sample}WD\_Data\_from\_XML\_08{sample}

### Coloring Elements

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting {api:anychart.graphics.vector.Fill}**".fill()"**{api} method for a **point**.

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting {api:anychart.graphics.vector.Fill}**".fill()"**{api} method for a **point**.

{sample}WD\_Data\_from\_XML\_09{sample}

 **Important Note:**
AnyChart seriously takes care of visualization and users convenience - that is why we have a number of ways to set
colors, for example, instead of "Rgb(180,77,77)" you can set "HSB" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this it is not all about colors in AnyChart. Read more about setting colors below and in the following Help Sections:
  * [Color management](../Appearance_Settings/Color_Management)

## Hatch Fills

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings. To see the whole range of available hatch types see [Hatch](../Appearance_Settings/Hatch_Fill) tutorial.


To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting {api:anychart.charts.Cartesian#hatchFillPalette}**.hatchFill()**{api} parameter for series.

{sample}WD\_Data\_from\_XML\_10{sample}

## Advanced Settings

All mentioned settings in this articles were demonstrated on the column chart. Column chart has multiple predefined parameters thus can't fully represent all variety of tunable settings and options. Next sample fixes this drawback. It demonstrates cartesian chart with several different series and customized chart elements.

{sample}WD\_Data\_from\_XML\_11{sample}

## Supported Chart Types

As far as XML is just a way of setting data and chart configuration, any type of charts from list of [Supported Chart Types](../Quick_Start/Supported_Chart_Types). Here is a sample of polar chart with all configuration settings from XML.

{sample}WD\_Data\_from\_XML\_12{sample}
-->