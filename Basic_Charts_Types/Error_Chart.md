#Error Chart

* [Overview](#overview)
* [Supported Chart Types](#supported_chart_types)
* [Chart](#chart)
 * [Cartesian](#cartesian)
 * [Scatter Plot](#scatter_plot)
 * [Error Mode](#error_mode)
* [Visualization](#visualization)

## Overview

Error charts are defined as part of the series and are used on graphs to indicate the error, or uncertainty in a reported measurement.

## Supported Chart Types

Here is the supported series types you can use to create the error charts:

<br><b>Cartesian</b>
* [Line](Line-Spline-StepLine_Charts#single_series_line_chart)
* [Spline](Line-Spline-StepLine_Charts#single_series_spline_chart)
* [StepLine](Line-Spline-StepLine_Charts#single_series_step_line_chart)
* [Area](Area_Chart#single_series_area_chart)
* [SplineArea](Area_Chart#single_series_spline_area_chart)
* [StepArea](Stacked_Area-SplineArea_Charts#step_stacked_area)
* [Marker](Marker_Chart#single_series)
* [Column](Column_Chart)
* [Bar](Bar_Chart)

<b>Scatter</b>

* [Line](Scatter_Chart#line_chart)
* [Marker](Scatter_Chart#marker_chart)

## Chart

### Cartesian

You can start to configure your errors with special method <b>error()</b>.

```
//create chart
var chart = anychart.line();
//set data
var line = chart.line([4, 2, 3, 1]);
//set error value
line.error(1);
```

<br>To define an error, you should use special settings:

<table width="400" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Methods</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>valueError</td>
<td>Used to set a common error value</td>
</tr>
<tr>
<td>valueLowerError</td>
<td>Used to set a lower error value</td>
</tr>
<tr>
<td>valueUpperError</td>
<td>Used to set an upper error value</td>
</tr>
</tbody></table>

<br>If you use only the valueError() method, the upper and lower values will be equal to half of the specified value. The method valueError() usage has priority over that of valueLowerError() or valueUpperError() usage. The code below demonstrates an error where the upper and lower values are equal to 3.

```
series.error().valueUpperError(2).valueLowerError(6).valueError(6);
```

<br>{sample}Error\_Chart\_03{sample}

<br>AnyChart allows you to set an error value in different formats:

```
//you can set the value in pixels
series.error().valueError(7);

//or set it in percentage
series.error().valueError('15%')
```

<br>As you can see we've created an error on a chart using the settings listed in the above table:
{sample}Error\_Chart\_01{sample}

<br>Also it should be noted that you can do the same using the <b>error()</b> method.

```
//to set the error value in pixels
series.error(7);

//or set it in percentage
series.error('15%')
```

<br>
{sample}Error\_Chart\_02{sample}

### Scatter

Error can be displayed for the series x value, y value or both. You should use an appropriate set of methods to set the low and high values for the series x value:

<table width="400" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Methods</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>xError</td>
<td>Used to set a common series x error value</td>
</tr>
<tr>
<td>xLowerError</td>
<td>Used to set a lower x error value</td>
</tr>
<tr>
<td>xUpperError</td>
<td>Used to set an upper x error value</td>
</tr>
</tbody></table>

<br>And now we have an error defined on a scatter plot.
{sample}Error\_Chart\_05{sample}

<br>Y error value must be defined in pixels (fixed) or percentage of common value.
```
//you can set the x error value in pixels
series.error().xError(10);

//or set it in percentage
series.error().xError('15%')
```

<br>The same rules can be applied in case of scatter plot. Below is a demonstration of error defined with the foreground xError() method.
{sample}Error\_Chart\_04{sample}

### Error Mode

If you want to configure an error displaying - you should define the errorMode() method:

<table width="430" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Value</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>errorMode('none')</td>
<td>Error won't be displayed</td>
</tr>
<tr>
<td>errorMode('value')</td>
<td>Error will be displayed for y value</td>
</tr>
<tr>
<td>errorMode('x')</td>
<td>Error will be displayed for x value</td>
</tr>
<tr>
<td>errorMode('both')</td>
<td>Error will be displayed for both x and y values</td>
</tr>
</tbody></table>

<br>Let's take a look at this part of code. As we can see the both values are defined here, but since we configured the error mode as "none", nothing will be rendered.
```
series.error({
            xLowerError: '9%',
            xUpperError: 2,
            valueUpperError: 7,
            valueLowerError: '5%'
        });

series.error().errorMode('none');
```
<br>{sample}Error\_Chart\_06{sample}

<br>Or you can use only 'x' error mode with the same error settings:
```
series.error({
            xLowerError: '9%',
            xUpperError: 2,
            valueUpperError: 7,
            valueLowerError: '5%',
            errorMode: 'x'
        });
```

<br>And the chart looks appropriate:
{sample}Error\_Chart\_07{sample}

## Visualization

AnyChart provides a few opportunities to configure an error view. If you want to customize the error width you should use these methods:

<table width="400" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Method</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>xErrorWidth</td>
<td>Used to set a series x value error width</td>
</tr>
<tr>
<td>valueErrorWidth</td>
<td>Used to set an y value error width</td>
</tr>
</tbody></table>

<br>
```
series.error().xErrorWidth('15');
series.error().valueErrorWidth('6%');
```

<br>Here is the demonstration of this feature on the Scatter Line Chart:
{sample}Error\_Chart\_08{sample}

<br>To change the error color you have to use the following settings:

<table width="400" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Method</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>xErrorStroke</td>
<td>Used to configure an x error stroke</td>
</tr>
<tr>
<td>valueErrorStroke</td>
<td>Used to configre a series error stroke</td>
</tr>
</tbody></table>

<br>Here is a simple code to illustrate how to apply these settings:
```
series.error()
            .valueErrorStroke('2 red .9')
            .xErrorStroke('4px green .4');
```

<br>Look at the chart sample below and click on it to see it's javascript source.

{sample}Error\_Chart\_09{sample}