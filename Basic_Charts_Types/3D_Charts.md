#3D Chart

* [Overview](#overview)
<!--* [Chart](#chart)-->
* [Single Series](#single_series)
 * [Area](#area)
 * [Bar](#bar)
 * [Column](#column)
 * [Pie](#pie)
* [Multiple Series](#multiple_series)
 * [Multi-Series](#multi-series)
 * [Value Stacked](#value_stacked)
 * [Percent Stacked](#percent_stacked)
 

## Overview

Even though there are quite a few types of charts that can be used for data visualization, AnyChart always tries to achieve more. Using AnyChart component you can create 3d versions of some chart types. 3D mode was created as alternative visual appearance of the common types of charts. Please, do not abuse this feature cause it may be misleading.

## Charts

Depending on the data model and visualization purpose you can use different 3d chart types. This section contains information on every 3d chart type.

### Area

Area charts emphasize the magnitude of change over time, and can be used to draw attention to the total value across a trend. Method {api:anychart#area3d}**.area3d()**{api} 3D plot for your series. Use your data as parameter for {api:anychart.core.radar.series.Area3d}**.area3d()**{api} method to visualize it as 3D area series.

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
  chart.area3d(data);
```

Here is a sample how simple 3d area looks like:

{sample}BCT\_3d\_01{sample}

### Bar

3D bar chart can be created as area chart. Firstly, you have to create 3d chart plot using {api:anychart#bar3d}**.bar3d()**{api} method. After creating the plot pass data to {api:anychart.core.radar.series.Bar3d}**.bar3d()**{api} method just like that:

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
  chart.bar3d(data);
```

And here is a sample with the settings from above:

{sample}BCT\_3d\_02{sample}

### Column

3D column chart is very similar to 3D bar chart and it is a kind of vertically orientated 3D bar plot. 3D column plot is controlled by {api:anychart#column3d}**.column3d()**{api} method. Series creating works pretty much the same way as it does for 3D area and 3D bar series - you just pass your data to {api:anychart.core.radar.series.Column3d}**.column3d()**{api} method.

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
  chart.column3d(data); 
```

{sample}BCT\_3d\_03{sample}

### Pie

3D pie chart is a of presenting single series of data. Use **.pie3d()** method to enable 3D mode for pie chart.

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

{sample}BCT\_3d\_07{sample}

## Multiple Series

Multiple series on a single data plot can be created as easy as a single one. There are several ways to display multiple series on a 3D chart's plot. This section discloses most of them. 

### Multi-Series

One of the most simplest way to create multiple series on a chart is to invoke method for creating desirable type of series for each data set you have. 

```
  // data set
  var data = anychart.data.set([
    ["Department Stores", 637166, 737166],
    ["Discount Stores", 721630, 537166],
    ["Men's/Women's Specialty Stores", 148662, 188662],
    ["Juvenile Specialty Stores", 78662, 178662],
    ["All other outlets", 90000, 89000]
  ]);

  // map data for further using
  var Sales2003 = data.mapAs({x: [0], value: [1]});
  var Sales2004 = data.mapAs({x: [0], value: [2]});

  // define chart type
  var chart = anychart.bar3d();

  // set data
  chart.bar3d(Sales2003);
  chart.bar3d(Sales2004);
```

Here is a sample of multi-series bar chart

{sample}BCT\_3d\_04{sample}

### Value Stacked

Value stacked 3d charts are multi-series charts that display series point value upon the same point of the previous series. To enable value stacked mode you need to call {api:anychart.scales.Linear#stackMode}**.stackMode()**{api} method with **value** parameter. The {api:anychart.scales.Linear#stackMode}**.stackMode()**{api} method should be invoked for chart's y scale. Chart's y scale is controlled by {api:anychart.charts.Cartesian3d#yScale}**.yScale()**{api} method. Here is a snippet of setting value stacked mode:

```
  var chart = anychart.area3d();
  var yScale = chart.yScale();
  yScale.stackMode("value");
```

Here is a sample of 3D stacked area chart:

{sample}BCT\_3d\_05{sample}

### Percent Stacked

Percent Stacked 3d charts is quite similar to simple 2d percent stacked chart. Information about percent stacked area charts can be found in [percent stacked area-splineArea charts tutorial](../Basic_Charts_Types/Percent_Stacked_Area-SplineArea_Charts) and information about percent stacked bars and columns can be found in [percent stacked bar-column charts tutorial](../Basic_Charts_Types/Percent_Stacked_Area-SplineArea_Charts).
  
  
To enable percent stacked mode you have to use {api:anychart.scales.Linear#stackMode}**.stackMode()**{api} method with **percent** parameter for chart's y scale.

```
  var chart = anychart.column3d();
  var yScale = chart.yScale();
  yScale.stackMode("percent");
```

Let's see, how percent stacked 3d column chart looks like:

{sample}BCT\_3d\_06{sample}

