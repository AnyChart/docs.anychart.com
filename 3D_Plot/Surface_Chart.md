{:index 1}
# Surface Chart

## Overview

Surface charts (or 3D Surface plot) are useful when you want to find the optimum combinations between two sets of data. As in a topographic map, the colors and patterns indicate the areas that are in the same range of values.

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

The Surface chart requires adding the [Core](../Quick_Start/Modules#core) and [Surface Chart](../Quick_Start/Modules#surface_chart) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-surface.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Surface chart, use the {api:anychart#surface}anychart.surface(){api} chart constructor. If you pass the data to this chart constructor, it creates a surface chart.

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

There are two ways to set data to a surface chart: pass an array to the {api:anychart#surface}surface chart constructor{api} (shown in [surface chart quick start sample](#quick_start) above) or use the {api:anychart.charts.Surface#data}data(){api} method.

AnyChart Surface Charts have no series objects and in the current version can display only one surface.

You can use ready to use array or populate it with the data using functions and code. The sample below shows how to populate an array using mathematical functions with different precision.

*Note:* at the moment AnyChart Surface Chart module can handle data sets of 5.000 points or less on the average PC. The chart will break down and show nothing if more points are used.

{sample}Surface\_Chart\_02{sample}

## Appearance

The plotted surface is colored according to the color scale, you can either set a sequence of colors which will be evenly distributed or specify value ranges and colors. You can configure the color of the mesh, as well as axes, grids, labels and other visual elements.

### Color Scale

To color the surface you can use AnyChart color scales. 

The linear color color scale uses the set of color which will be evenly distributed along the z value change:

```
var customColorScale = anychart.scales.linearColor();
customColorScale.colors(['#2BC0E4', '#EAECC6']);

// Set color scale.
chart.colorScale(customColorScale);
```

{sample}Surface\_Chart\_03{sample}

With the ordinal color color scale you can specify the coloring range and color to be used to color parts of the surface that fall in the provided range:

```
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
    {less: -1.5, color: "red"},
    {from: -1.5, to: 0, color: "yellow"},
    {greater: 0,color: "green" }
]);

// Set color scale.
chart.colorScale(customColorScale);
```

{sample}Surface\_Chart\_04{sample}

### Mesh

To configure the surface mesh use the {api:}stroke(){api}

```
chart.stroke({color: '#ff4040', thickness: 3, dash: '5 5'});
```

{sample}Surface\_Chart\_05{sample}

### Axes

Surface plot has three axes, each of them can be confugured separately using xAxis, yAxis, and zAxis methods:

```
chart.xAxis(true);
chart.yAxis(true);
chart.zAxis(true);
```

### Grids

Surface plot has three grids, each of them can be configured separately using xGrid, yGrid, and zGrid methods.

```
chart.xGrid(true);
chart.yGrid(true);
chart.zGrid(true);
```

### Box

The box is the set of twelve lines that surrounds the surface plot. You can disable it by passing `null` to the box method, or set the stroke color and properties.

```
chart.box('#F44336', 2, '5 2', 'round');
```

The sample 

{sample}Surface\_Chart\_06{sample}

### Rotation

Surface charts can be rotated simply by dragging them with the mouse or you can set angles of rotation using rotationZ and rotationY methods.

The sample below shows how to work with these methods.

```
rotationZ
rotationY
```

{sample}Surface\_Chart\_07{sample}