{:index 1}
#Error Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Lower and Upper Bars](#lower_and_upper_bars)
  * [On Cartesian Charts](#on_cartesian_charts)
  * [On Scatter Charts](#on_scatter_charts)
* [Error Mode](#error_mode)
* [Appearance](#appearance)
* [Labels And Tooltips](#labels_and_tooltips)
* [Supported Types](#supported_types)

## Overview

## Quick Start

??? {api:anychart.core.cartesian.series.Base#error}error(){api}

```
// create a data set
var data = anychart.data.set([
  ["A", 10000],
  ["B", 12000],
  ["C", 13000],
  ["D", 10000],
  ["E", 9000]
]);

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

* {api:anychart.core.utils.Error#valueError}valueError(){api} sets lower and upper bars as equal
* {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} sets lower bars
* {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} sets upper bars

```
// create error bars on the first series
series1.error().valueError(400);

// create error bars on the second series
series2.error().valueLowerError(700);
series2.error().valueUpperError(200);
```

{sample}BCT\_Error\_Chart\_02{sample}

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

Here are the methods configuring error bars along the Y-axis:

* {api:anychart.core.utils.Error#valueError}valueError(){api} sets lower and upper Y-bars as equal
* {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} sets lower Y-bars
* {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} sets upper Y-bars

And these methods configure error bars along the X-axis:

* {api:anychart.core.utils.Error#xError}xError(){api} sets lower and upper X-bars as equal
* {api:anychart.core.utils.Error#xLowerError}xLowerError(){api} sets lower X-bars
* {api:anychart.core.utils.Error#xUpperError}xUpperError(){api} sets upper X-bars

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

{api:anychart.core.utils.Error#mode}mode(){api}

```
???
```

{sample}BCT\_Error\_Chart\_06{sample}

## Appearance

{api:anychart.core.utils.Error#xErrorWidth}xErrorWidth(){api}
{api:anychart.core.utils.Error#valueErrorWidth}valueErrorWidth(){api}

{api:anychart.core.utils.Error#xErrorStroke}xErrorStroke(){api}
{api:anychart.core.utils.Error#valueErrorStroke}valueErrorStroke(){api}

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

## Labels And Tooltips

{api:core.cartesian.series.Base#label}label(){api}

```
//configure labels
var labels = series.labels();
labels.enabled(true);
series.labels().format("{%Value}(±{%ValueUpperError})");
series.labels().offsetY(+100);
```

{sample}BCT\_Error\_Chart\_08{sample}

{api:core.cartesian.series.Base#tooltip}tooltip(){api}

```
// configure tooltips
var tooltip = series.tooltip();
tooltip.format(function(point){
  return "\nxUpperError – " + point.xUpperError
  + "\nxLowerError – " + point.xLowerError
  + "\nvalueLowerError – " + point.valueLowerError
  + "\nvalueUpperError – " + point.valueUpperError
});
```

{sample}BCT\_Error\_Chart\_09{sample}

## Supported Types

Here is the list of Cartesian chart types that can be combined with error bars:

* [Area with Error Bars](Area_Chart)
* [Marker with Error Bars](Marker_Chart)
* [Column with Error Bars](Column_Chart)
* [Jump Line with Error Bars](Jump_Line_Chart)
* [Line with Error Bars](Line_Chart)
* [Marker with Error Bars](Marker_Chart)
* [Spline Area with Error Bars](Spine_Area_Chart)
* [Spline with Error Bars](Spline_Chart)
* [Step Area with Error Bars](Step_Area_Chart)
* [Step Line with Error Bars](Step_Line_Chart)

Scatter charts compatible with error bars include:

* [Scatter Line with Error Bars](Scatter_Line_Chart)
* [Scatter Marker with Error Bars](Scatter_Marker_Chart)