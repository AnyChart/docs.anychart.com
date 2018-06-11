{:index 1}
# Axis Basics

## Overview

In AnyChart axes are used to control grids, axes labels, lines and tick marks, axes themselves depend on [scales](Scales).
  
* To know what scale options are available - please see: [Scale tutorial](Scales)
* To learn how to create additional axes - [Additional axes](Additional_Axes)
* To learn how to configure axes labels - [Axes Labels](Axes_Labels_Formatting)
* To learn more about Date/Time Scale - [Date/Time Axes](Date_Time_Axes)

In this section we will demonstrate most of the axes visualization options, which are the same for the Y- and X-axes.

## Declaration

If you want to control any of the axes settings - you should do that using {api:anychart.core.axes}Axis{api} methods:

```
chart.xAxis().title('Sample X-Axis Name');
```

## Title

You can define a title of any axis, you can control its position and font, when specifying text. Full reference of parameters can be found in Reference: {api:anychart.core.axes.Linear#title}yAxis().title(){api} or {api:anychart.core.axes.Linear#title}xAxis().title(){api}. Here is a sample titles definition:

```
var yTitle = chart.yAxis().title();
yTitle.enabled(true);
yTitle.text("Units");
yTitle.align("bottom");

chart.xAxis().title("Sample X-Axis Name");
```

As you can see, we've set titles both to the X- and Y-axes.

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
// enable stagger mode
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

Tickmarks are the small marks used to represent a point on an axis scale, there are major and minor ticks, first used to indicate major step of an axis scale, second - minor step. You can control their appearance and position. To enable/disable ticks set `true` or `false` to the {api:anychart.core.axes.Ticks#enabled}enabled(){api} method of the {api:anychart.core.axes.Linear#ticks}ticks(){api} or {api:anychart.core.axes.Linear#minorTicks}minorTicks(){api}

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

There are two types of grid in AnyChart charting framework - major grids that can be controlled using {api:anychart.charts.Cartesian#xGrid}xGrid(){api} and {api:anychart.charts.Cartesian#yGrid}yGrid(){api} methods and minor grids that is controlled with {api:anychart.charts.Cartesian#xMinorGrid}xMinorGrid(){api} and {api:anychart.charts.Cartesian#yMinorGrid}yMinorGrid(){api} method. 

**Note**: Grid lines correlate with [ticks of the chart scale](./Scales#minor_and_major_ticks). To manage the number of ticks use {api:anychart.scales.ScatterTicks#interval}interval(){api} parameter of the corresponding scale.

To enable grids use {api:anychart.core.grids.Linear#enabled}enabled(true){api} method.

```
// enable major grids
chart.xGrid().enabled(true);
chart.yGrid().enabled(true);
// enable minor grids
chart.xMinorGrid().enabled(true);
chart.yMinorGrid().enabled(true);
```

Here is how default major and and minor grids of a columne chart look like:

{sample}AGST\_Axes\_Basic\_08{sample}

### Visualization

#### Lines

You can control visual appearance of grid lines using {api:anychart.core.grids.Linear#stroke}stroke(){api} method. Full information on lines settings can be found in [lines tutorial](../Appearance_Settings/Lines_Settings).

```
chart.xGrid().stroke({
  // set stroke color
  color: "#fff000",
  // set dashes and gaps length
  dash: "3 5"
});
```

Please take a look at the sample where chart settings are dramatically modified and grids are adjusted accordingly:

{sample}AGST\_Axes\_Basic\_09{sample}

#### Interlace

Grid's fill is controlled by {api:anychart.core.grids.Linear#palette}palette(){api} method. It can be used to create solid and interlaced effects.

```
// interlace settings
chart.yGrid().palette(["#FFF 0.25", "#000 0.25"]);
```

{sample}AGST\_Axes\_Basic\_10{sample}

You can use either a simple array of colors, containing any number of elements, or {api:anychart.palettes.RangeColors}anychart.palettes.RangeColors{api} or {api:anychart.palettes.DistinctColors}anychart.palettes.DistinctColors{api} described in [Palettes](../Appearance_Settings/Palettes).

Here is a sample where grid coloring is used to highlight value zones:

{sample}AGST\_Axes\_Basic\_11{sample}

**Note:** To fill the background of the data area (the area limited by the axes) with one color, you do not need to use data grids – see the [Data Area](../Appearance_Settings/Background#data_area) section.