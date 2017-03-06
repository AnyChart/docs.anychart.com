{:index 1}
#3D Charts

* [Overview](#overview)
* [Single Series](#single_series)
* [Multiple Series](#multiple_series)
 * [Multi-Series](#multi-series)
 * [Z Distribution](#z_distribution) 
* [Visualization](#visualization)
 * [Angle](#angle)
 * [Aspect](#aspect)

## Overview

Even though there are quite a few types of charts that can be used for data visualization, AnyChart always tries to achieve more. Using AnyChart component you can create 3d versions of some chart types. 3D mode was created as alternative visual appearance of the common types of charts. Please, do not abuse this feature cause it may be misleading.

To make 3D Effect more appealing don't forget to turn on grids.

## Single Series

Depending on the data model and visualization purpose you can use different 3d chart types. This section contains information on every 3d chart type.

```

```
{sample}BCT\_3d\_01{sample}

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

{sample}BCT\_3d\_02{sample}

### Z Distribution

Common 2D chart distributes series along X axis, by default 3D multi-series charts do the same, but you can set distribution along Z axis for 3d charts using {api:anychart.charts.Cartesian3d#zDistribution}zDistribution(){api} method. Use *true* parameter to enable z axis distribution and *false* for x axis distribution.

```
// Turn on Z Distribution
chart.zDistribution(true);
```

Here is a sample of a Multi-series chart with Z Distribution enabled:

{sample}BCT\_3d\_03{sample}

## Visualization

3D charts have much more interesting appearance than 2d charts and have special methods to control visualization. This section describes methods of tuning visual appearance of a 3d plot.

### Angle

As far as 3d implements observing chart from different angles, it is important to tune viewing angle. Use desirable angle as a parameter for {api:anychart.charts.Cartesian3d#zAngle}zAngle(){api} method to adjust it.

```
var chart = anychart.column3d();
chart.column(data);

// change angle
chart.zAngle(20);
```

**Note**: {api:anychart.charts.Cartesian3d#zAngle}zAngle(){api} range is limited and can't be less than 0 and greater than 90.

{sample}BCT\_3d\_04{sample}

### Aspect

For three- imensional charts it might be necessary to adjust depth of the plot. The {api:anychart.charts.Cartesian3d#zAspect}zAspect(){api} method controls depth of the 3D chart's plot.

```
var chart = anychart.column3d();
chart.column(data);

// change aspect and angle
chart.zAspect(90);
chart.zAngle(70);
```

Let's use these settings and create 3d chart with 40px depth and adjusted angle of view:

{sample}BCT\_3d\_05{sample}

**Note**: the plot's depth can be set in pixels using a numeric parameter for {api:anychart.charts.Cartesian3d#zAspect}zAspect(){api} method or in percentage depending on the size of the least points side.


