{:index 999}
#3D Chart

* [Overview](#overview)
* [Single Series](#single_series)
 * [Area](#area)
 * [Bar](#bar_chart)
 * [Column](#column)
 * [Pie](#pie)
* [Multiple Series](#multiple_series)
 * [Multi-Series](#multi-series)
 * [Z Distribution](#z_distribution) 
 * [Value Stacked](#value_stacked)
 * [Percent Stacked](#percent_stacked)
* [Visualization](#visualization)
 * [Angle](#angle)
<!-- * [Padding](#padding)-->

## Overview

Even though there are quite a few types of charts that can be used for data visualization, AnyChart always tries to achieve more. Using AnyChart component you can create 3d versions of some chart types. 3D mode was created as alternative visual appearance of the common types of charts. Please, do not abuse this feature cause it may be misleading.

## Single Series

Depending on the data model and visualization purpose you can use different 3d chart types. This section contains information on every 3d chart type.

### Area

Area charts emphasize the magnitude of change over time, and can be used to draw attention to the total value across a trend. Method {api:anychart#area3d}**.area3d()**{api} creates 3D plot for your series. Use your data as a parameter for {api:anychart.core.cartesian.series.Area3d}**.area()**{api} method to visualize it as 3D area series.

```
// define data set
var data = anychart.data.set([
  ["Department Stores", 637166],
  ["Discount Stores", 721630],
  ["Men's/Women's Specialty Stores", 148662],
  ["All other outlets", 90000]
]);

// create 3D chart's plot
var chart = anychart.area3d();

// create series
chart.area(data);
```

Here is a sample how simple 3d area looks like:

{sample}BCT\_3d\_01{sample}

<a name="bar_chart"></a>
### Bar

3D bar chart can be created as easy as area chart. Firstly, you have to create 3d chart plot using {api:anychart#bar3d}**.bar3d()**{api} method. After creating the plot pass your data to {api:anychart.core.cartesian.series.Bar3d}**.bar()**{api} method just like that:

```
// define data set
var data = anychart.data.set([
  ["Department Stores", 637166],
  ["Discount Stores", 721630],
  ["Men's/Women's Specialty Stores", 148662],
  ["All other outlets", 90000]
]);

// create chart
var chart = anychart.bar3d();

// create series
chart.bar(data);
```

And here is a sample with the settings from above:

{sample}BCT\_3d\_02{sample}

### Column

3D column chart is very similar to 3D bar chart and it is a kind of vertically orientated 3D bar plot. 3D column plot is controlled by {api:anychart#column3d}**.column3d()**{api} method. After creating chart’s plot you need to pass your data to {api:anychart.core.cartesian.series.Column3d}**.column()**{api} method to create 3d column series.

```
// define data set
var data = anychart.data.set([
  ["Department Stores", 637166],
  ["Discount Stores", 721630],
  ["Men's/Women's Specialty Stores", 148662],
  ["All other outlets", 90000]
]);

// create chart
var chart = anychart.column3d();

// create series
chart.column(data); 
```

{sample}BCT\_3d\_03{sample}

### Pie

3D pie chart is a way of presenting single series of data as a percentage of the whole pie. Use {api:anychart#pie3d}**.pie3d()**{api} method to enable 3D mode for pie chart.

```
// define data set
var data = anychart.data.set([
  ["Department Stores", 637166],
  ["Discount Stores", 721630],
  ["Men's/Women's Specialty Stores", 148662],
  ["All other outlets", 90000]
]);

// create 3d pie chart
var chart = anychart.pie3d(data);
```

More information about pie charts can be found in [pie and doughnut chart article](../Basic_Charts_Types/Pie-Doughnut_Charts).
  
  
Here is a sample of 3d pie chart:

{sample}BCT\_3d\_04{sample}

## Multiple Series

Multiple series on a single data plot can be created as easy as a single one. There are several ways to display multiple series on a 3D chart's plot. This section discloses most of them.

### Multi-Series

One of the most simplest way to create multiple series on a chart is to invoke method for creating desirable type of series for each data set you have. 

```
  // data
  var data = anychart.data.set([
    ["Department Stores", 637166, 737166],
    ["Discount Stores", 721630, 537166],
    ["Men's/Women's Specialty Stores", 148662, 188662],
    ["Juvenile Specialty Stores", 78662, 178662],
    ["All other outlets", 90000, 89000]
  ]);

  // map data for data sets
  var Sales2003 = data.mapAs({x: [0], value: [1]});
  var Sales2004 = data.mapAs({x: [0], value: [2]});

  // define chart type
  var chart = anychart.column3d();

  // set data
  chart.column(Sales2003);
  chart.column(Sales2004);
```

Here is a sample of multi-series bar chart

{sample}BCT\_3d\_05{sample}

### Distribution

Common 2D chart distributes series along X axis, by default 3D multi-series charts do the same, but you can set distribution along Z axis for 3d charts using {api:anychart.charts.Cartesian3d#zDistribution}**.zDistribution()**{api} method. Use *true* parameter to enable z axis distribution and *false* for x axis distribution.

```
// Turn on Z Distribution
chart.zDistribution(true);
```

Here is a sample of a Multi-series chart with Z Distribution enabled:

{sample}BCT\_3d\_09{sample}

### Value Stacked

Value stacked 3d charts are multi-series charts that display series point value upon the same point of the previous series. To enable value stacked mode you need to call {api:anychart.scales.Linear#stackMode}**.stackMode()**{api} method with **value** parameter. The {api:anychart.scales.Linear#stackMode}**.stackMode()**{api} method should be invoked for chart's y scale. Chart's y scale is controlled by {api:anychart.charts.Cartesian3d#yScale}**.yScale()**{api} method. Here is a snippet of setting value stacked mode:

```
  // create chart 3d plot
  var chart = anychart.area3d();
  // getter for y scale
  var yScale = chart.yScale();
  // set "value" stacked mode
  yScale.stackMode("value");
```

Here is a sample of 3D stacked area chart:

{sample}BCT\_3d\_06{sample}

### Percent Stacked

Percent Stacked 3d charts is quite similar to a simple 2d percent stacked chart. Information about percent stacked area charts can be found in [percent stacked area-splineArea charts tutorial](../Basic_Charts_Types/Percent_Stacked_Area-SplineArea_Charts) and information about percent stacked bars and columns can be found in [percent stacked bar-column charts tutorial](../Basic_Charts_Types/Percent_Stacked_Area-SplineArea_Charts).
  
  
To enable percent stacked mode you have to use {api:anychart.scales.Linear#stackMode}**.stackMode()**{api} method with **percent** parameter for chart's y scale.

```
  // create chart 3d plot
  var chart = anychart.area3d();
  // getter for y scale
  var yScale = chart.yScale();
  // set "percent" stacked mode
  yScale.stackMode("percent");
```

Let's see, how percent stacked 3d column chart looks like:

{sample}BCT\_3d\_07{sample}

## Visualization

3D charts have a much more interesting appearance than a 2d charts and it requires a bit more methods to control this unusual type of charts. This section describes several methods of tuning visual appearance of a 3d plot.

### Angle

As far as 3d implements observing chart from different angles, it is important to tune viewing angle. Use desirable angle as a parameter for {api:anychart.charts.Cartesian3d#zAngle}**.zAngle()**{api} method to adjust it.

```
  var chart = anychart.bar3d();
  chart.bar(data);

  // decrease default angle two times
  chart.zAngle(20);
```

**Note**: {api:anychart.charts.Cartesian3d#zAngle}**.zAngle()**{api} range is limited and can't be less than 0 and greater than 90.

### Aspect

For 3 dimensional charts it might be necessary to adjust depth of the plot. The {api:anychart.charts.Cartesian3d#zAspect}**.zAspect()**{api} method controls depth of the 3D chart's plot.

```
  var chart = anychart.bar3d();
  chart.bar(data);

  // increase default depth four times
  chart.zAspect(40);
  chart.zAngle(20);
```

Let's use these settings and create 3d chart with 40px depth and adjusted angle of view:

{sample}BCT\_3d\_08{sample}

**Note**: the plot's depth can be set in pixels using a numeric parameter for {api:anychart.charts.Cartesian3d#zAspect}**.zAspect()**{api} method or in percentage depending on the size of the least points side.


