{:index 1}
# Axis Basics

## Overview

In AnyChart axes are used to control grids, axes labels, lines and tick marks, axes themselves depend on [scales](Scales).
  
* To know what scale options are available - please see: [Scale tutorial](Scales)
* To learn how to create additional axes - [Additional axes](Additional_Axes)
* To learn how to configure axes labels - [Axes Labels](Axes_Labels_Formatting)
* To learn more about Date/Time Scale - [Date/Time Axes](Date_Time_Axes)

In this section we will demonstrate most of the axes visualization options, which are the same for Y and X axes.

## Declaration

If you want to control any of the axes settings - you should do that using {api:anychart.core.axes}Axis{api} methods:

```
var xAxis = chart.xAxis();
xAxis.title('Sample X axis name');
```

## Title

You can define a title of any axis, you can control its position and font, when specifying text. Full reference of parameters can be found in Reference: {api:anychart.core.axes.Linear#title}yAxis().title(){api} or {api:anychart.core.axes.Linear#title}xAxis().title(){api}. Here is a sample titles definition:

```
var yTitle = chart.yAxis().title();
yTitle.enabled(true);
yTitle.text("Units");
yTitle.align("bottom");

chart.xAxis().title("Sample X axis name");
```

As you can see, we've set titles both to X and Y axis.

{sample}AGST\_Axes\_Basic\_01{sample}

## Orientation

With AnyChart web charts you can place axes to any side of the chart, all you need to do is to adjust {api:anychart.core.axes.Linear#orientation}orientation(){api} parameter of {api:anychart.charts.Cartesian#yAxis}yAxis(){api} or {api:anychart.charts.Cartesian#xAxis}xAxis(){api} methods. Orientation depends on plot type and inversion of axes, you will find list of all possible orientation and inversion settings in [Axes Positioning and Inverting Templates](Axis_Orientation).

```
chart.yAxis().orientation("right");
chart.xAxis().orientation("top");
```

And here is the demonstration of this feature on the Single series column chart:

{sample}AGST\_Axes\_Basic\_02{sample}

## Labels

To enable or disable axis labels you need to specify {api:anychart.core.ui.LabelsFactory#enabled}labels().enabled(){api} parameter of an axis. You can specify how labels should look like, padding between labels and an axis line, should labels be rotated or staggered, etc.

Learn more about axes labels formatting in [Axes Labels Tutorial](Axes_Labels_Formatting)

Normal labels look like this:    

{sample}AGST\_Axes\_Basic\_03{sample}

Rotated labels:

```
chart.yAxis().labels().rotation(-90);
chart.xAxis().labels().rotation(-90);
```

{sample}AGST\_Axes\_Basic\_04{sample}

Adaptive stagger mode and with the maximum number of lines defined:

```
// enables stagger mode
chart.xAxis().staggerMode(true);
// set the maximum number lines for labels to stagger 
// if chart is able to fit labels without staggering or staggering
// in 2 or 3 lines - it will do so. It will not go over 4 lines:
chart.xAxis().staggerMaxLines(4);
```

Stagger always mode with the fixed number of lines:

```
// getter of x axis
// enables stagger mode
chart.xAxis().staggerMode(true);
// set the number of lines for labels to stagger 
chart.xAxis().staggerLines(3);
```
Here is a sample of two similar charts with adaptive and fixed stagger modes enabled, you can see that the first one uses adaptive strategy and occupies two lines, the second one always uses three lines:

{sample :height 800}AGST\_Axes\_Basic\_05{sample}

## Axis Line and Zero Line

It is possible to tune visual appearance of axis line and zero line. To do this you need to use 
{api:anychart.charts.Cartesian#lineMarker}lineMarker(){api} method.

```
var line = chart.lineMarker();
line.value(0);  
line.stroke("2 red");
```

As in any line, you can make it gradient, change opacity and thickness using {api:anychart.core.axes.Linear#stroke}stroke(){api} method. Read more about lines in [Strokes and Lines tutorial](../Appearance_Settings/Lines_Settings)

{sample}AGST\_Axes\_Basic\_06{sample}

## Tickmarks

Tickmarks are the small marks used to represent a point on an axis scale, there are major and minor ticks, first used to indicate major step of an axis scale, second - minor step. You can control their appearance and position. To enable/disable ticks set "true" or "false" to the {api:anychart.core.axes.Ticks#enabled}enabled(){api} method of the {api:anychart.core.axes.Linear#ticks}ticks(){api} or {api:anychart.core.axes.Linear#minorTicks}minorTicks(){api}

```
chart.yScale().minorTicks().enabled(true);
chart.yScale().ticks().enabled(false)
```

Ticks can be placed **inside** or **outside** relatively to the axis line. These features are controlled by {api:anychart.core.axes.Ticks#position}position(){api} attributes:

```
chart.yAxis().ticks().position("outside");
chart.xAxis().ticks().position("outside");
```

The dashboard below shows how these settings work:

{sample}AGST\_Axes\_Basic\_07{sample}

## Grids

There are two types of grid in AnyChart charting framework - major grid that can be controlled using {api:anychart.charts.Cartesian#grid}grid(){api} method and minor grid that is controlled with {api:anychart.charts.Cartesian#minorGrid}minorGrid(){api} method. To enable major grid use {api:anychart.core.grids.Linear#enabled}enabled(true){api} method for {api:anychart.charts.Cartesian#grid}grid(){api} and if you want to display minor grid use {api:anychart.core.grids.Linear#enabled}enabled(true){api} method for {api:anychart.charts.Cartesian#minorGrid}minorGrid(){api}.

```
// enable major grid
var grid = chart.grid();
grid.enabled(true);
// enable minor grid
var minorGrid = chart.minorGrid();
minorGrid.enabled(true);
```

Here is how default grid and minor grid of cartesian chart looks like:

{sample}AGST\_Axes\_Basic\_08{sample}

### Visualization

You can control visual appearance of grid lines using {api:anychart.core.grids.Linear#stroke}stroke(){api} method. Full information on lines settings can be found in [lines tutorial](../Appearance_Settings/Lines_Settings).

```
var grid = chart.grid();
grid.stroke({
  // set stroke color
  color: "#FFF",
  // set dashes and gaps length
  dash: "3 5"
});
```

{sample}AGST\_Axes\_Basic\_09{sample}

Grid's fill is controlled by two methods: {api:anychart.core.grids.Linear#evenFill}evenFill(){api} method controls inner color of all even spaces between grid lines and {api:anychart.core.grids.Linear#oddFill}oddFill(){api} method controls the color settings of all odd spaces.

```
// grid settings
var grid = chart.grid();
// set odd fill
grid.oddFill("#FFF 0.25");
// set even fill
grid.evenFill("#000 0.25");
```

{sample}AGST\_Axes\_Basic\_10{sample}

**Note**: Grid lines correlate with [ticks of the chart scale](./Scales#minor_and_major_ticks). To manage lines number adjust {api:anychart.scales.ScatterTicks#interval}interval(){api} parameter of the chart scale. Use {api:anychart.core.grids.Linear#axis}axis(){api} method to bind grid to an axis which is bound to a scale, or use {api:anychart.core.grids.Linear#scale}scale(){api} method to bind grid to a custom scale. See [Layout](#layout) section below to learn more.

### Layout

Either grids and minor grids can be placed vertically or horizontally on the chart. You can control grids placement in two ways, the first is to bind a grid to an appropriate axis using {api:anychart.core.grids.Linear#axis}axis(){api} method:

```
// create major and minor grids and bind them to X and Y axes
var y_grid = chart.grid(0);
y_grid.axis(chart.yAxis());

var x_grid = chart.grid(1);
x_grid.axis(chart.xAxis());

var y_minor_grid = chart.minorGrid(0);
y_minor_grid.axis(chart.yAxis());

var x_minor_grid = chart.minorGrid(1);
x_minor_grid.axis(chart.xAxis());  
```

In such case the grid will be bound to this axis and change its orientation and placement according to axis orientation and placement, as it is shown in the sample below: 

{sample}AGST\_Axes\_Basic\_11{sample}

Alternatively, you can control grid using {api:anychart.core.grids.Linear#layout}layout(){api} method and {api:anychart.core.grids.Linear#scale}scale(){api} methods. This can be done like shown below and is used in dashboards and charts with complex configurations:

```
var grid = chart.grid();
grid.layout("vertical");
grid.layout(chart.xScale());
```

As far as [radar](../Basic_Charts/Radar_Plot/Overview) and [polar](../Basic_Charts/Polar_Plot/Overview) charts appearance vary greatly from other chart types, these chart types have their own grid layouts. For these charts you can use the {api:anychart.grids.Radar#layout}layout(){api} method to define circular or radial grid layout.

```
// create radar chart
var chart = anychart.radar();

var grid = chart.grid();
grid.layout("circuit");
```

Here is a sample of radar chart with circular grid:

{sample}AGST\_Axes\_Basic\_12{sample}

And here is a sample of Polar chart with radial layout: 

{sample}AGST\_Axes\_Basic\_13{sample}