{:index 1}
#Stacked Charts

* [Overview](#overview)
* [Value Stacking](#value_stacking)
* [Percent Stacking](#percent_stacking)
 * [Scale Interval](#scale_interval)
 * [Axis Percent Labels](#axis_percent_labels)
 * [Tooltips and Labels](#tooltips_and_labels)
* [Combination](#combination)
 * [Clustered](#clusteretd)
 * [Overlay](#overlay)
 * [With unstackable series](#with_unstackable_series)
* [Supported Series Samples](#supported_series_samples)

## Overview

The stacked charts are a popular visual aid used for categorizing and comparing the parts of a whole. Each element in the chart represents a whole, and the segments represent parts of that whole. Different colors used for the segments distinguish the categories. Stacked charts are also known as stacked graphs. 

In AnyChart stacking is a [special mode of a Scale](/Axes_and_Grids/Scales#stack_mode) set by {api:anychart.scales.Linear#stackMode}stackMode(){api} method, and [several types of series](#supported_series_samples) are compatible with this mode. If a series can not be stacked it simply [ignores the mode](#with_unstackable_series).

There are two modes of stacking: **value** and **percent**. These article explains everything there is to know about stacking settings and options.

## Value Stacking

To create a **value stacked** chart you need to set scale stackMode to "value":

```
// create a chart
var chart = anychart.column();

// set stacking mode for the default primary value scale
chart.yScale().stackMode("value");
```

Here is a basic sample of a stacked column chart:

{sample}BCT\_Stacking\_01{sample}

## Percent Stacking

To create a **percent stacked** chart you need to set scale stackMode to "percent":

```
// create a chart
var chart = anychart.column();

// set stacking mode for the default primary value scale
chart.yScale().stackMode("percent");
```

Percent stacked charts usually need some fine tuning to get going:

### Scale Interval

Setting scale to percent stacked mode will force it's [minimum and maximum](/Axes_and_Grids/Scales#minimum_and_maximum) to 0 and 100 but tick interval will remain auto-calculated. If you want to change interval use ticks interval settings:

```
// set stacking mode for the default primary value scale
chart.yScale().stackMode("value");
// change interval
chart.yScale().ticks().interval(25);
```

### Axis Percent Labels

To add percent symbol to axis labels use [Axes Labels](/Axes_and_Grids/Axes_Labels_Formatting) formatting:

```
// set axis labels formatting
chart.yAxis().labels().textFormatter("{%Value}%");
```

### Tooltips and Labels

To add percent symbol and show percentage instead (or in addition to) in tooltips and labels use [Text Formatters](/Common_Settings/Text_Formatters):

```
// set tooltip formatting
chart.tooltip().textFormatter("{%yPercentOfCategory}%");
```

Here is a sample percent stacked chart with all typical settings put together:

{sample}BCT\_Stacking\_02{sample}

## Combination

### Clustered

With column, bar or stick series types it is possible to create so-called "clustered stacks". To do so you should create a scale for each stacked cluster and assign it to series in this cluster.  You also need to take care of axes manually in this case. 

Here us a sample of percent stacked clustered chart:

```
// create a chart
var chart = anychart.column();

// create scales and set stacking modes
yScale1 = anychart.scales.linear();
yScale1.stackMode("percent");

yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");

yScale3 = anychart.scales.linear();
yScale3.stackMode("percent");

// create the series and assign different scales:
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
// set minimums and maximums
// create scales and set stacking modes
yScale1 = anychart.scales.linear();
yScale1.stackMode("value");
yScale1.maximum(20);
yScale1.minimum(0);

yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");
yScale2.maximum(20);
yScale2.minimum(0);
```

But you can also sync scales after they auto-calculate their minimums and maximums, it can be done like that in case of two scales:

```
// sync scales minimums and maximums
if (yScale1.maximum() > yScale2.maximum())
    yScale2.maximum(yScale1.maximum());
else
    yScale1.maximum(yScale2.maximum());


if (yScale1.minimum() < yScale2.minimum())
    yScale2.minimum(yScale1.minimum());
else
    yScale1.minimum(yScale2.minimum());
```

Here is a sample of clustered value stacked column chart with synced scales:

{sample}BCT\_Stacking\_04{sample}


### Overlay

If you want to display several stacks of different type at once you have to create a scale for each stack and properly link series from each stack to a scale. You also need to take care of axes manually in this case.

```
// create a chart
var chart = anychart.column();

// create scales and set stacking modes
yScale1 = anychart.scales.linear();
yScale1.stackMode("percent");

yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");

// create the series and assign different scales:
chart.area(seriesData_1).yScale(yScale1);
chart.area(seriesData_2).yScale(yScale1);

chart.column(seriesData_3).yScale(yScale2);
chart.column(seriesData_4).yScale(yScale2);
```

{sample}BCT\_Stacking\_05{sample}

### With unstackable series

When you combine a set of stackable series with any number of series if unstackable type the stackable series form a stack and unstackable series are displayed as always. This way you can show a trend over a stack without creating any extra scales. Please see a sample below:

```
// set stack mode
chart.yScale().stackMode("value");

// create series
chart.column(seriesData_1);
chart.column(seriesData_2);
chart.line(seriesData_3);
```

{sample}BCT\_Stacking\_06{sample}

## Supported Series Samples

* [Stacked Area Chart](./Value/Area_Chart)
* [Stacked Bar Chart](./Value/Bar_Chart)
* [Stacked Column Chart](./Value/Column_Chart)
* [Stacked Step Area Chart](./Value/Step_Area_Chart)
* [Stacked Stick Chart](./Value/Stick_Chart)
* [Percent Stacked Area Chart](./Percent/Area_Chart)
* [Percent Stacked Bar Chart](./Percent/Bar_Chart)
* [Percent Stacked Column Chart](./Percent/Column_Chart)
* [Percent Stacked Step Area Chart](./Percent/Step_Area_Chart)
* [Percent Stacked Stick Chart](./Percent/Stick_Chart)
