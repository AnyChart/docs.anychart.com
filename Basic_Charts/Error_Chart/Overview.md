{:index 1}
# Error Chart

## Overview

Error bars are visual representations of the variability of data: they indicate the error or uncertainty in a measurement or calculation. The length of bars shows how far from the reported value the true value might be.

This feature is often used with scatter charts, but Cartesian charts in AnyChart also support error bars – see the [Supported Types](#supported_types) section.

This article explains how to create and configure error bars on both Cartesian and scatter charts.

## Quick Start

To add error bars to a series, use the {api:anychart.core.cartesian.series.Base#error}error(){api} method with a parameter specifying the length of bars (either in percent or in pixels).

Here is a basic sample showing how to create a Column chart with error bars:

```
// create data
var data = [
  ["January", 10000],
  ["February", 12000],
  ["March", 13000],
  ["April", 10000],
  ["May", 9000]
];

// create a chart
chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);

// create error bars
series.error("10%");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Error\_Chart\_01{sample}

## Lower and Upper Bars

### On Cartesian Charts

Cartesian charts support error bars along the Y-axis. The {api:anychart.core.cartesian.series.Base#error}error(){api} method adds error bars to all points of a series and sets lower and upper bars as equal, but you can also use the following methods to fine-tune them:

* {api:anychart.core.utils.Error#valueError}valueError(){api} sets lower and upper bars as equal
* {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} sets lower bars
* {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} sets upper bars

**Note:** The {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} and {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} methods have priority over {api:anychart.core.utils.Error#valueError}valueError(){api}.

In the sample below, there are two Column series with different lower and upper error bars:

```
// create error bars on the first series
series1.error().valueError(400);

// create error bars on the second series
series2.error().valueLowerError(700);
series2.error().valueUpperError(200);
```

{sample}BCT\_Error\_Chart\_02{sample}

The next sample shows how to add customized error bars to particular points of a Cartesian series:

```
// create data
var data = [
  {x: "A", value: 10000, valueError: "6%"},
  {x: "B", value: 12000},
  {x: "C", value: 13000, valueLowerError: 700, valueUpperError: 200},
  {x: "D", value: 10000, valueUpperError: 600},
  {x: "E", value: 9000}
];
```

{sample}BCT\_Error\_Chart\_03{sample}

### On Scatter Charts

The key feature of error bars on scatter charts is that errors can be set both along the X- and Y-axes.

The {api:anychart.core.cartesian.series.Base#error}error(){api} method adds error bars to all points of a series and sets lower/upper and right/left bars as equal, but you can also use the methods below to fine-tune them.

Here are the methods configuring error bars along the Y-axis:

* {api:anychart.core.utils.Error#valueError}valueError(){api} sets lower and upper Y-bars as equal
* {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} sets lower Y-bars
* {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} sets upper Y-bars

And these methods configure error bars along the X-axis:

* {api:anychart.core.utils.Error#xError}xError(){api} sets left and right X-bars as equal
* {api:anychart.core.utils.Error#xLowerError}xLowerError(){api} sets left X-bars
* {api:anychart.core.utils.Error#xUpperError}xUpperError(){api} sets right X-bars

**Note:** The {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api}, {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api}, {api:anychart.core.utils.Error#xLowerError}xLowerError(){api}, and {api:anychart.core.utils.Error#xUpperError}xUpperError(){api} methods have priority over {api:anychart.core.utils.Error#valueError}valueError(){api} and {api:anychart.core.utils.Error#xError}xError(){api}.

In the following sample, there is a scatter chart with two Marker series and customized lower/upper and right/left error bars:

```
// create error bars on the first series
series1.error().valueError(8);
series1.error().xError(0.4);

// create error bars on the second series
var error2 = series2.error(); 
error2.valueLowerError(7);
error2.valueUpperError(4);
error2.xLowerError(0.1);
error2.xUpperError(0.2);
```
{sample}BCT\_Error\_Chart\_04{sample}

This sample shows how to add customized error bars to particular points of a series on a scatter chart:

```
// create data
var data = [
  {x: 0.6, value: 22, valueError: 8, xError: 0.2},
  {x: 1.7, value: 55, xLowerError: "6%", xUpperError:  "10%"},
  {x: 2.3, value: 50, valueError: "12%"},
  {x: 2.6, value: 76, valueUpperError: 7},
  {x: 2.7, value: 64},
  {x: 4, value: 71},
  {x: 4, value: 88, valueLowerError: 6, valueUpperError: 4, xError: 0.4},
  {x: 4.5, value: 74},
  {x: 4.9, value: 83}
];
```

{sample}BCT\_Error\_Chart\_05{sample}

## Error Mode

The {api:anychart.core.utils.Error#mode}mode(){api} method allows you to change the error mode of a series (to enable or disable error bars on it). There are four possible error modes that are set by these parameters:

* `"both"` enables both X- and Y-error bars
* `"none"` disables all error bars
* `"value"` shows only Y-bars
* `"x"` shows only X-bars

```
// create and configure error bars
var error = series.error();
error.xLowerError(0.1);
error.xUpperError(0.2);
error.valueUpperError(5);
error.valueLowerError(8);

// show only value error bars 
error.mode("value");
```

{sample}BCT\_Error\_Chart\_06{sample}

## Appearance

Here is a full list of methods used to configure the appearance of error bars:

* {api:anychart.core.utils.Error#valueErrorWidth}valueErrorWidth(){api} sets the width of Y-bars
* {api:anychart.core.utils.Error#xErrorWidth}xErrorWidth(){api} sets the width of X-bars
* {api:anychart.core.utils.Error#valueErrorStroke}valueErrorStroke(){api} sets the stroke of Y-bars
* {api:anychart.core.utils.Error#xErrorStroke}xErrorStroke(){api} sets the stroke of X-bars

Each of the series types that support error bars has its own visual settings – see the [Supported Types](#supported_types) section. Also, you can learn more from the [Appearance Settings](../../Appearance_Settings) section.

In the sample below, there is scatter chart with two Marker series and error bars on both of them, some of the appearance settings configured:

```
// create error bars on the first series
var error1 = series1.error();
error1.valueError(8);
error1.xError(0.4);

// configure the appearance of error bars on the first series
error1.valueErrorWidth(6);
error1.xErrorWidth(0);
error1.valueErrorStroke("#6fb6ee", 2);
error1.xErrorStroke("#6fb6ee", 2, "2 2", "round");

// create error bars on the second series
var error2 = series2.error(); 
error2.valueLowerError(7);
error2.valueUpperError(4);
error2.xLowerError(0.1);
error2.xUpperError(0.2);

// configure the appearance of error bars on the second series
error2.valueErrorWidth(6);
error2.xErrorWidth(6);
error2.valueErrorStroke("black", 0.5);
error2.xErrorStroke("black", 0.5);
```

{sample}BCT\_Error\_Chart\_07{sample}

## Labels and Tooltips

[Labels](../../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../../Common_Settings/Text_Formatters) are available.

A [Tooltip](../../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

### Tokens

To change the text of labels, combine the **labels()** method of the series (or the chart if it is a scatter chart) and {api:anychart.core.ui.LabelsFactory#format}format(){api} with [tokens](../../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the **tooltip()** and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Besides tokens that work everywhere, there are tokens that are specific to error bars:

* `{%valueLowerError}`
* `{%valueUpperError}`
* `{%xLowerError}`
* `{%xUpperError}`

That is how they can be used to customize labels and tooltips:

```
//configure labels
series.labels().enabled(true);
series.labels().format("{%value} (±{%valueUpperError})");
series.labels().offsetY(+35);

//configure tooltips
series.tooltip().format("{%value} (±{%valueUpperError})");
```

{sample}BCT\_Error\_Chart\_08{sample}

### Formatting Functions

Labels and tooltips are also configured with the help of [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions) and the following fields (in addition to the default ones):

* `valueLowerError`
* `valueUpperError`
* `xLowerError`
* `xUpperError`

In the sample below they are used to customize tooltips:

```
// configure tooltips
chart.tooltip().format(function (){
  var output = "";
  if (this.xUpperError != 0)
     output = "xUpperError: " + this.xUpperError;
  if (this.xLowerError != 0)
     output = output + "\nxUpperError: " + this.xLowerError;
  if (this.valueLowerError != 0)
     output = output + "\nxUpperError: " + this.valueLowerError;
  if (this.valueUpperError != 0)
     output = output + "\nxUpperError: " + this.valueUpperError;
  if (output == "") return "NO ERRORS";
  return output;
});
```

{sample}BCT\_Error\_Chart\_09{sample}

## Supported Types

Here is the list of Cartesian chart types that can be combined with error bars:

* [Area with Error Bars](Area_Chart)
* [Bar with Error Bars](Bar_Chart)
* [Column with Error Bars](Column_Chart)
* [Jump Line with Error Bars](Jump_Line_Chart)
* [Line with Error Bars](Line_Chart)
* [Marker with Error Bars](Marker_Chart)
* [Spline with Error Bars](Spline_Chart)
* [Spline Area with Error Bars](Spline_Area_Chart)
* [Step Area with Error Bars](Step_Area_Chart)
* [Step Line with Error Bars](Step_Line_Chart)
* [Stick with Error Bars](Stick_Chart)

Scatter charts compatible with error bars include:

* [Scatter Line with Error Bars](Scatter_Line_Chart)
* [Scatter Marker with Error Bars](Scatter_Marker_Chart)