{:index 4}
# Scales

## Overview

In AnyChart scales control calculations and modes while Axes control axes labels, lines and tick marks. Learn more about basis Axes options available (like tickmarks, axis line and so on) see [Axes](Axes Tutorial), to learn more about basic scale options (like maximum, minimum, scale modes and so on) see [Scale tutorial](../Axes_and_Grids/Scales).

In this section we will demonstrate only the differences of AnyStock scales from basic charts' ones.

## Stock Scales Features

The biggest difference between scales in basic charts and stocks is the fact that you have scales in every plot and have to configure them accorindgly - in different plots. If there is a reason, you can create shared scales, but in most cases configuration goes like this:

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

In the "percent" mode the changes are displayed in percent.

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

The stacked charts are a popular visual aid used for categorizing and comparing the parts of a whole. Each element in the chart represents a whole, and the segments represent parts of that whole. Different colors used for the segments distinguish the categories. Stacked charts are also known as stacked graphs.

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
