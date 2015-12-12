#3D Chart

* [Overview](#overview)
<!--* [Chart](#chart)-->
* [Single Series](#single_series)
 * [Area](#area)
 * [Bar](#bar)
 * [Column](#column)
* [Multiple Series](#multiple_series)
 * [Multi-Series](#multi-series)
 * [Value Stacked](#value_stacked)
 * [Percent Stacked](#percent_stacked)
 

## Overview

Even though there are quite a few types of charts that can be used for data visualization, AnyChart always tries to achieve more. Using AnyChart component you can create 3d versions of some of chart types. 3D mode was created as alternative visual appearance of the common types of charts. Please, do not abuse this feature cause it may mislead.

## Charts

Depending on the data model and visualization purpose you can use different 3d chart types. This section contains information on every 3d chart type.

### Area

Area charts emphasize the magnitude of change over time, and can be used to draw attention to the total value across a trend. Method **.area3d()** 3D plot for your series.
Use your data as parameter for **.area3d()** method to visualize it as 3D area series.

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

3D bar chart can be created as area chart. Firstly, you have to create 3d chart plot using **.bar3d()** method. After creating the plot pass data to **.bar3d()** method just like that:

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

3D column chart is very similar to 3D bar chart and it is a kind of vertically orientated 3D bar plot. 3D column plot is controlled by **.column3d()** method. Series creating works pretty much the same way as it does for 3D area and 3D bar series - you just pass your data to **.column3d()** method.

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

## Multiple Series

Multiple series on a single data plot can be created as easy as a single one. There are several ways to display multiple series on a 3D chart's plot. This section discloses most of them.

### Multi-Series


