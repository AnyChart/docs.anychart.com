{:index 1}
# Surface Chart

## Overview

A Surface chart (or 3D Surface plot) is a chart type used for finding the optimum combinations between two sets of data. As in a topographic map, the colors and patterns indicate the areas that are in the same range of values.

This article explains how to create a basic Surface chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Word Tree's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Surface](../Quick_Start/Modules#surface)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Surface}anychart.charts.Surface{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, y, z](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>No</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[3D Area Chart](../Basic_Charts/3D/Area_Chart)</td></tr>
<tr><td></td><td>[3D Bar Chart](../Basic_Charts/3D/Area_Chart)</td></tr>
<tr><td></td><td>[3D Column Chart](../Basic_Charts/3D/Column_Chart)</td></tr>
<tr><td></td><td>[3D Doughnut Chart](../Basic_Charts/3D/Doughnut_Chart)</td></tr>
<tr><td></td><td>[3D Line Chart](../Basic_Charts/3D/Line_Chart)</td></tr>
<tr><td></td><td>[3D Pie Chart](../Basic_Charts/3D/Pie_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Surface Chart](https://www.anychart.com/chartopedia/chart-types/surface-chart/)</td></tr>
</table>

## Modules

The Surface chart requires adding the [Core](../Quick_Start/Modules#core) and [Surface Chart](../Quick_Start/Modules#surface) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-surface.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Surface chart, use the {api:anychart#surface}anychart.surface(){api} chart constructor. If you pass the data to this constructor, it creates a surface chart.

The following sample demonstrates how a basic Surface chart is created:

```
// create data
var data = [
    [-1, -1, 1],
    [-1, 0, 1],
    [-1, 1, 1],
    [0, -1, 1],
    [0, 0, 1],
    [0, 1, 1],
    [1, -1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

// create surface chart and set data
var chart = anychart.surface(data);

// set chart title
chart.title("Surface Chart: Basic Sample");

// set chart container id
chart.container('container');

// initiate drawing the chart
chart.draw();
```

{sample}Surface\_Chart\_01{sample}

## Data

There are two ways to set data to a Surface chart: pass an array to the {api:anychart#surface}anychart.surface(){api} chart constructor, like in the [Quick Start](#quick_start) sample, or to the {api:anychart.charts.Surface#data}data(){api} method.

It is possible populate the array with generated data. See the sample below, where mathematical functions with different precision are used to create data.

Also, please keep in mind that AnyChart Surface charts have no series objects and in the current version can display only one surface.

{sample}Surface\_Chart\_02{sample}

*Note:* At the moment AnyChart Surface Chart module can handle data sets of 5.000 points or less on the average PC. Adding data sets with more points leads to chart breaking down and showing nothing.

## Appearance

The plotted surface is colored according to the color scale: set a sequence of colors to be evenly distributed or specify value ranges and colors. You can configure the color of the mesh, as well as axes, grids, labels, and other visual elements.

### Color Scale

To color the surface, you can use AnyChart color scales. 

The **linear color scale** is created with the {api:anychart.scales#linearColor}anychart.scales.linearColor(){api} method. It accepts an array of colors, which are evenly distributed along the Z-value change:

```
var colorScale = anychart.scales.linearColor();
colorScale.colors(['#2bc0e4', '#eAecc6', '#dd2c00']);

// Set color scale.
chart.colorScale(colorScale);
```

{sample}Surface\_Chart\_03{sample}

With the **ordinal color color scale**, you can specify the coloring range and color to be used to color parts of the surface that fall within the given range. This scale is created with the help of the {api:anychart.scales#ordinalColor}anychart.scales.ordinalColor(){api} method:

```
// create color scale
var colorScale = anychart.scales.ordinalColor();

// set ranges
colorScale.ranges([
    {less: -10, color: "#dd2c00"},
    {from: -10, to: 5, color: "#ffd54f"},
    {greater: 5,color: "#00bfa5" }
]);

// set color scale
chart.colorScale(colorScale);
```

{sample}Surface\_Chart\_04{sample}

### Mesh

To configure the surface mesh, call the {api:anychart.charts.Surface#stroke}stroke(){api} method of the chart:

```
chart.stroke({color: '#ff4040', thickness: 3, dash: '5 5'});
```

{sample}Surface\_Chart\_05{sample}

### Axes

Surface plot has three axes, and each of them can be configured separately by using {api:anychart.charts.Surface#xAxis}xAxis{api}, {api:anychart.charts.Surface#yAxis}yAxis{api}, and {api:anychart.charts.Surface#zAxis}zAxis{api} methods:

```
// configure axes
chart.zAxis().stroke(null); 
chart.zAxis().ticks().stroke("1 lightgray");    
chart.xAxis().labels(false);
chart.yAxis().labels(false);
```

### Grids

Surface plot has three grids, each of them can be configured separately by using {api:anychart.charts.Surface#xGrid}xGrid{api}, {api:anychart.charts.Surface#yGrid}yGrid{api}, and {api:anychart.charts.Surface#zGrid}zGrid{api} methods.

```
// configure grids
gridStroke = {color: 'lightgray', thickness: 1, dash: '5 5'};
chart.xGrid().stroke(gridStroke);
chart.yGrid().stroke(gridStroke);
chart.zGrid().stroke(gridStroke);
```

### Box

The box is the set of twelve lines that surrounds the surface plot. You can disable it by passing `null` to the {api:anychart.charts.Surface#box}box{api} method or set the stroke color and properties.

```
chart.box({color: 'lightgray', thickness: 1});
```

The sample below features grids, axes, and box configurations:

{sample}Surface\_Chart\_06{sample}

### Rotation

Surface charts can be rotated simply by dragging them with the mouse. Alternatively, you can set angles of rotation: call the {api:anychart.charts.Surface#rotationZ}rotationZ{api} and {api:anychart.charts.Surface#rotationY}rotationY{api} methods.

The sample below shows how to work with them: 

{sample}Surface\_Chart\_07{sample}

## Special Settings

### Color Range

When color scale is used, you can add the color range element to make chart more readable. It is created with the {api:anychart.charts.Surface#colorRange}colorRange(){api} method:

```
// enable and configure color range
var colorRange = chart.colorRange();
colorRange.enabled(true);
colorRange.orientation('right');
```

{sample}Surface\_Chart\_08{sample}