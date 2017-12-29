{:index 1}
# Stacked Charts

## Overview

The stacked charts are a popular visual aid used for categorizing and comparing the parts of a whole. Each element in the chart represents a whole, and the segments represent parts of that whole. Different colors used for the segments distinguish the categories. Stacked charts are also known as stacked graphs. 

In AnyChart stacking is a [special mode of a Scale](../../Axes_and_Grids/Scales#stack_mode) set by {api:?entry=stackMode}stackMode(){api} method, and [several types of series](#supported_types) are compatible with this mode. If a series can not be stacked it simply [ignores the mode](#with_unstackable_series).

There are two modes of stacking: **value** and **percent**. These article explains everything there is to know about stacking settings and options.

## Value Stacking

To create a **value stacked** chart you need to set scale stackMode to "value":

```
// create a chart
chart = anychart.column();

/* enable the value stacking mode
on the default primary value scale*/
chart.yScale().stackMode("value");
```

Here is a basic sample of a stacked column chart:

{sample}BCT\_Stacking\_01{sample}

## Percent Stacking

To create a **percent stacked** chart you need to set scale stackMode to "percent":

```
// create a chart
chart = anychart.column();

/* enable the percent stacking mode
on the default primary value scale*/
chart.yScale().stackMode("percent");
```

Percent stacked charts usually need some fine tuning to get going:

### Scale Interval

Setting scale to percent stacked mode will force it's [minimum and maximum](../../Axes_and_Grids/Scales#minimum_and_maximum) to 0 and 100 but tick interval will remain auto-calculated. If you want to change interval use ticks interval settings:

```
/* enable the value stacking mode
on the default primary value scale*/
chart.yScale().stackMode("value");

// set the tick interval on the value scale
chart.yScale().ticks().interval(20);
```

### Axis Percent Labels

To add the percent symbol to axis labels, use [Axes Labels](../../Axes_and_Grids/Axes_Labels_Formatting) formatting:

```
// configure labels on the y-axis
chart.yAxis().labels().format("{%value}%");
```

### Labels and Tooltips

To add the percent symbol to labels and tooltips, use [Text Formatters](../../Common_Settings/Text_Formatters):

```
// configure tooltips
chart.tooltip().format("{%yPercentOfCategory}%");
```

Here is a sample percent stacked chart with all typical settings put together:

{sample}BCT\_Stacking\_02{sample}

## Combination

### Clustered

With column, bar or stick series types it is possible to create so-called "clustered stacks". To do so you should create a scale for each stacked cluster and assign it to series in this cluster.  You also need to take care of axes manually in this case. 

Here us a sample of percent stacked clustered chart:

```
// create scales and set stacking modes
var yScale1 = anychart.scales.linear();
yScale1.stackMode("percent");

var yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");

var yScale3 = anychart.scales.linear();
yScale3.stackMode("percent");

// create column series and bind them to different scales:
chart.column(seriesData_1).yScale(yScale1);
chart.column(seriesData_2).yScale(yScale1);

chart.column(seriesData_3).yScale(yScale2);
chart.column(seriesData_4).yScale(yScale2);

chart.column(seriesData_5).yScale(yScale3);
chart.column(seriesData_6).yScale(yScale3);
```

{sample}BCT\_Stacking\_03{sample}

If you do this with value stacking mode you should not forget about minimum and maximum auto-calculation and sync axes. The easiest way is to set the same values to minimums and maximums:

```
// create scales and set stacking modes
// set maximums and minimums
yScale1 = anychart.scales.linear();
yScale1.stackMode("value");
yScale1.maximum(20);
yScale1.minimum(0);

yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");
yScale2.maximum(20);
yScale2.minimum(0);
```

But you can also [sync scales](../../Axes_and_Grids/Scales#synchronization) after they auto-calculate their minimums and maximums, it can be done like that:

```
// sync minimums and maximums of the scales
globalMax = chart.getStat("yScalesMax");
globalMin = chart.getStat("yScalesMin");
// get all y scales
var yScales = chart.getYScales();
// set the same minimum and maximum
for (var i = 0; i < yScales.length; i++) {
   yScales[i].minimum(globalMin);
   yScales[i].maximum(globalMax);
}  
```

Here is a sample of clustered value stacked column chart with [synced scales](../../Axes_and_Grids/Scales#synchronization):

{sample}BCT\_Stacking\_04{sample}

### Overlay

If you want to display several stacks of different type at once you have to create a scale for each stack and properly link series from each stack to a scale. You also need to take care of axes manually in this case.

```
// create a chart
chart = anychart.column();

// create scales and set stacking modes
yScale1 = anychart.scales.linear();
yScale1.stackMode("percent");

yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");

// create area and column series
//bind them to different scales:
chart.area(seriesData_1).yScale(yScale1);
chart.area(seriesData_2).yScale(yScale1);

chart.column(seriesData_3).yScale(yScale2);
chart.column(seriesData_4).yScale(yScale2);
```

{sample}BCT\_Stacking\_05{sample}

### With Unstackable Series

When you combine a set of stackable series with any number of series if unstackable type the stackable series form a stack and unstackable series are displayed as always. This way you can show a trend over a stack without creating any extra scales. Please see a sample below:

```
/* enable the value stacking mode
on the default primary value scale*/
chart.yScale().stackMode("value");

// create column and line series
chart.column(seriesData_1);
chart.column(seriesData_2);
chart.line(seriesData_3);
```

{sample}BCT\_Stacking\_06{sample}

## Stacking Order

You can change the order of stacking using the {api:anychart.scales.Linear#stackDirection}stackDirection(){api} method:

```
yScale().stackMode("value");

// Set the stacking direction.
yScale().stackDirection("reverse")
```

Here is a sample that shows both stacking order directions"

{sample}BCT\_Stacking\_07{sample}

## Supported Types

Here is the list of supported stacked charts:

* [Stacked Area](./Value/Area_Chart)
* [Stacked Bar](./Value/Bar_Chart)
* [Stacked Column](./Value/Column_Chart)
* [Stacked Spline Area](./Value/Spline_Area_Chart)
* [Stacked Step Area](./Value/Step_Area_Chart)
* [Stacked Stick](./Value/Stick_Chart)
* [Percent Stacked Area](./Percent/Area_Chart)
* [Percent Stacked Bar](./Percent/Bar_Chart)
* [Percent Stacked Column](./Percent/Column_Chart)
* [Percent Stacked Spline Area](./Percent/Spline_Area_Chart)
* [Percent Stacked Step Area](./Percent/Step_Area_Chart)
* [Percent Stacked Stick](./Percent/Stick_Chart)

See also [polar](../Polar_Plot/Overview) and [radar](../Radar_Plot/Overview) stacked charts:

* [Polar Stacked Area](./Value/Polar_Area_Chart)
* [Polar Stacked Column](./Value/Polar_Column_Chart)
* [Stacked Polygon](./Value/Polygon_Chart)
* [Polar Percent Stacked Area](./Percent/Polar_Area_Chart)
* [Polar Percent Stacked Column](./Percent/Polar_Column_Chart)
* [Percent Stacked Polygon](./Percent/Polygon_Chart)
* [Radar Stacked Area](./Value/Radar_Area_Chart)
* [Radar Percent Stacked Area](./Percent/Radar_Area_Chart)

and [Vertical](../Vertical/Overview) and [3D](../3D/Overview) stacked charts:

* [Vertical Stacked Area](./Value/Vertical_Area_Chart)
* [Vertical Stacked Spline](./Value/Vertical_Spline_Area_Chart)
* [Vertical Stacked Step Area](./Value/Vertical_Step_Area_Chart)
* [Vertical Stacked Stick](./Value/Vertical_Stick_Chart)
* [Vertical Percent Stacked Area](./Percent/Vertical_Area_Chart)
* [Vertical Percent Stacked Area](./Percent/Vertical_Spline_Area_Chart)
* [Vertical Percent Stacked Step Area](./Percent/Vertical_Step_Area_Chart)
* [Vertical Percent Stacked Stick](./Percent/Vertical_Stick_Chart)
* [3D Stacked Area](./Value/3D_Area_Chart)
* [3D Stacked Bar](./Value/3D_Bar_Chart)
* [3D Stacked Column](./Value/3D_Column_Chart)
* [3D Percent Stacked Area](./Percent/3D_Area_Chart)
* [3D Percent Stacked Bar](./Percent/3D_Bar_Chart)
* [3D Percent Stacked Column](./Percent/3D_Column_Chart)

## Marimekko Charts

Marimekko charts are a special type of stacked charts and though very similar, still are different. Please refer to [Marimekko Chart](../Marimekko_Chart/Mekko_Chart) articles to learn how to build them with AnyChart.

* [Mekko Chart](../Marimekko_Chart/Mekko_Chart)
* [BarMekko Chart](../Marimekko_Chart/BarMekko_Chart)
* [Mosaic Chart](../Marimekko_Chart/Mosaic_Chart)

