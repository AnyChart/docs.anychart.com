{:index 4}
# Scales

## Overview

In AnyChart scales control calculations and modes while Axes control axes labels, lines and tick marks. Learn more about basis Axes options available (like tickmarks, axis line and so on) see [Axes](Axes Tutorial), to learn more about basic scale options (like maximum, minimum, scale modes and so on) see [Scale tutorial](../Axes_and_Grids/Scales).

In this section we will demonstrate only the differences of AnyStock scales from basic charts' ones.

## Stock Scales Features

The biggest difference between scales in basic charts and stocks is the fact that you have scales in every plot and have to configure them accordingly - in different plots. If there is a reason, you can create shared scales, but in most cases configuration goes like this:

```
// get a plot scale
yScale = chart.plot(0).yScale();

// set minimum/maximum and inversion
yScale.minimum(1000000);
yScale.maximum(350000000);
yScale.inverted(true);

// create a logarithmic scale
var logScale = anychart.scales.log();
chart.plot(1).yScale(logScale);
```

The result of the configuration shown above, along with some [axes](Axes) tuning can be seen on a sample below:

{sample}STOCK\_Scales\_01{sample}

## Multiple scales and axes

## Comparison Mode

AnyChart Stock supports the "Comparison Mode" scale - a very important feature for showing stocks-related information that allows comparing changes in series values. You can compare with the first visible value, series first value and a custom date, see [Comparison base](#comparison_base) section below to learn more.  

To enable this mode use {api:anychart.scales.Linear#comparisonMode}comparisonMode(){api} method that accepts 
values of {api:anychart.enums.ScaleComparisonMode}anychart.enums.ScaleComparisonMode{api} enum as a parameter value. Possible values:

<table><tr><th>Mode</th><th>Value</th><tr>
<tr><td>No changes, values displayed</td><td>"none"</td></tr>
<tr><td>Percent Changes Displayed</td><td>"percent"</td></tr>
<tr><td>Value Changes Displayes</td><td>"value"</td></tr>
</table>

### Values

In "value" mode the changes are displayed in original scale units.

```
chart = anychart.stock();
chart.plot(0).yScale().comparisonMode("value");
```

### Percents

In the "percent" mode the changes are displayed as a percentage.

```
chart = anychart.stock();
chart.plot(0).yScale().comparisonMode("percent");
```

Sample below shows three plots, all three display the same series, but scale comparison mode is set to "None", "Value" and "Percent" to the first, the second and the third plot respectively:

{sample}STOCK\_Scales\_02{sample}

### Comparison Base

When you work with a scale in Comparison Mode you can choose what value is used as the comparison base. It is done using {api:anychart.scales.Linear#compareWith}compareWith(){api} method which accepts values from  {api:anychart.enums.ScaleCompareWithMode}anychart.enums.ScaleCompareWithMode{api} enum or a date/number representation of a custom date.

```
chart = anychart.stock();
// percent mode with series start as the comparison base
chart.plot(0).yScale().comparisonMode("percent");
chart.plot(0).yScale().compareWith("seriesStart");

// value mode with custom date as the comparison date
// date is 24 of April 2008, set as a JavaScript Timestamp 
chart.plot(1).yScale().comparisonMode("value");
chart.plot(1).yScale().compareWith(1209081600000);
// the following line gives the same result
// chart.plot(1).yScale().compareWith(Date.UTC(2008, 3, 25));
```

{sample}STOCK\_Scales\_03{sample}

## Stacked Mode

The stacked charts are a popular visual aid used for categorizing and comparing the parts of a whole. Each element in the chart represents a whole, and the segments represent parts of that whole. Different colors used for the segments distinguish the categories. Stacked charts are otherwise known as stacked graphs.

Stacking is a special mode of a Scale set by {api:?entry=stackMode}stackMode(){api} method, and several types of series are compatible with this mode. If a series can not be stacked it simply ignores the mode.

There are two modes of stacking: value and percent.

### Value

To create a value stacked chart you need to set scale stackMode to "value":

```
chart = anychart.stock();
chart.plot(0).yScale().stackMode("value");
```

{sample}STOCK\_Scales\_04{sample}

### Percent

To create a value stacked chart you need to set scale stackMode to "percent":

```
chart = anychart.stock();
chart.plot(0).yScale().stackMode("percent");
```

{sample}STOCK\_Scales\_05{sample}

## X Scale

### Types

AnyStock Supports two types of X Time Scale: {api:anychart.scales.StockOrdinalDateTime}StockOrdinalDateTime{api} and {api:anychart.scales.StockScatterDateTime}StockScatterDateTime{api}.

The difference between these two types is the following: `'ordinal'` (default) time scale is created for the data sets with regular intervals, say daily, monthly, or yearly sets. This scale type ignores the distance between dates - points are evenly distributed and go one after another as they go in the table. The scale of `'scatter'` type takes into account the distance between dates.

In the following sample we will display the following data set:

```
// create data table
var table = anychart.data.table();
// add data
table.addData([
    ['2015-12-01', 511.53, 514.98, 505.79, 506.40],
    ['2015-12-12', 512.53, 514.88, 505.69, 510.34],
    ['2015-12-26', 511.83, 514.98, 505.59, 507.23],
    ['2015-12-27', 511.22, 515.30, 505.49, 506.47],
    ['2015-12-28', 511.53, 514.98, 505.79, 506.40],
    ['2015-12-29', 512.53, 513.88, 505.69, 510.34],
    ['2015-12-30', 511.83, 512.98, 502.59, 503.23],
    ['2015-12-31', 511.22, 515.30, 505.49, 506.47]
]);
```

And display it on two charts with different time scales:

{sample}STOCK\_Scales\_06{sample}

### Gaps

If you need to add empty space in the beggining or at the end of time scale in stock charts you need to use the {api:anychart.scales.StockScatterDateTime#minimumGap}minimumGap(){api} and {api:anychart.scales.StockScatterDateTime#maximumGap}maximumGap{api} methods.

These methods does not (unlike gap methods for other scales) accept ratio values, you need to use objects of {api:anychart.scales.StockScatterDateTime.GapConfig}anychart.scales.StockScatterDateTime.GapConfig{api} type. 

You need to specify how many intervals and of what type should be added. See a sample below.

```
var scale = chart.xScale();

// Set minimum gap
scale.minimumGap({intervalsCount: 3, unitType: 'day', unitCount: 3});

// Set maximum gap
scale.maximumGap({intervalsCount: 2, unitType: 'weeks', unitCount: 1});
```

{sample}STOCK\_Scales\_07{sample}