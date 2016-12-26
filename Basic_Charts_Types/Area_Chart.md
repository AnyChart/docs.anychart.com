{:index 1}
#Area Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

An Area Chart is...

## Basic Settings

To create an Area chart, use the {api:anychart#Area}anychart.Area(){api} chart constructor, and to create an Area series, call the {api:anychart.core.cartesian.series.Area}Area{api} method. By default, if you just pass the data to the Area chart constructor, it draws an Area series.

Here is a sample demonstrating how a basic Area Chart is created:

```
// create a data set
var data = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
]);

// set the chart type
var chart = anychart.area();

// create an area series and set the data
chart.area(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_AreaChart\_01{sample}

## Visual Settings

Here is a full list of methods used for configuring visual settings that are available for Area series:

* {api:anychart.core.cartesian.series.Area#color}color(){api}, {api:anychart.core.cartesian.series.Area#fill}fill(){api}, {api:anychart.core.cartesian.series.Area#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Area#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Area#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Area#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Area#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.Area#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Area#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Area#selectStroke}selectStroke(){api} configure the visual settings on select

In the sample below, there are two Spline Area series with some of the visual settings configured:

```
// create the first series (spline area)
var series1 = chart.splineArea(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series (spline area) 
var series2 = chart.splineArea(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_AreaChart\_02{sample}


{api:anychart.xxx}XXX(){api} 


а)
#Title

б)
Title
=====

* [Section 1](#section_1)
* [Section 2](#section_2)
  * [Subsection 1](#subsection_1)
  * [Subsection 1](#subsection_1)

## Section 1

<a name='section\_1'></a>
## Section 1

### Subsection 1