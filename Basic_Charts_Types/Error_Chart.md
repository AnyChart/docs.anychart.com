#Error Chart

* [Overview](#overview)
* [Supported Chart Types](#supported_chart_types)
* [Chart](#chart)
 * [Cartesian](#cartesian)
 * [Scatter](#scatter)
 * [Error Mode](#error_mode)
* [Visualization](#visualization)
* [Labels And Tooltips](#labels_and_tooltips)
* [Samples](#samples)

## Overview

Error Charts are defined as part of the series and are used on graphs to indicate the error, or uncertainty in a reported measurement. Error bars often represent one standard deviation of uncertainty, one standard error (standard deviation of the sampling distribution of a statistic), or a certain confidence interval (e.g., a 95% interval).

## Supported Chart Types

Here is the list of series compatible with error bars:
  
  
**Cartesian**: [Area](Area_Chart), [Bar](Bar_Chart), [Column](Column_Chart), [Line](Line-Spline-StepLine_Charts), [Marker](Marker_Chart), [Spline](Line-Spline-StepLine_Charts), [SplineArea](Area_Chart), [StepArea](Stacked_Area-SplineArea_Charts), [StepLine](Line-Spline-StepLine_Charts); 
  
  
[**Scatter**](Scatter_Chart): [Line](Scatter_Chart#line_chart), [Marker](Scatter_Chart#marker_chart).

## Chart

### Cartesian

To start configuration of error lines you can go with {api:anychart.core.cartesian.series.Base#error}**.error()**{api} method:

```
  //create chart
  var chart = anychart.line();
  //set data
  var line = chart.line([4, 2, 3, 1]);
  //set error value
  line.error(1);
```

If you want to define a total error value and/or the upper and lower error values, you should use the special methods:

<table width="400" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Methods</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#valueError}**.valueError()**{api}</td>
<td>Used to set a total error value</td>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#valueLowerError}**.valueLowerError()**{api}</td>
<td>Used to set a lower error value</td>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#valueUpperError}**.valueUpperError()**{api}</td>
<td>Used to set an upper error value</td>
</tr>
</tbody>
</table>

If you need different error lines for each data point, you can add values to a data set:

```
  chart.line([
    {x: "2005", value: 20, valueError: "3%"},
    {x: "2006", value: 23, valueError: "4%"},
    {x: "2007", value: 22, valueError: "3%"},
    {x: "2008", value: 19, valueError: 1},
    {x: "2009", value: 23, valueError: 1}
  ]);
```

{sample}Error\_Chart\_10{sample}

If you use only the {api:anychart.core.utils.Error#valueError}**.valueError()**{api} method, the upper and lower values will be equal to half of the specified value. The method {api:anychart.core.utils.Error#valueError}**.valueError()**{api} usage has priority over that of {api:anychart.core.utils.Error#valueLowerError}**.valueLowerError()**{api} or {api:anychart.core.utils.Error#valueUpperError}**.valueUpperError()**{api} usage. The code below demonstrates an error where the upper and lower values are equal to 3.

```
  var error = series.error();
  error.valueUpperError(2);
  error.valueLowerError(6);
  error.valueError(6);
```

{sample}Error\_Chart\_03{sample}

AnyChart html5 charting library allows you to set an error value in different ways, e.g. as absolute numbers or as a percentage:

```
  // variable for errors
  var error = series.error();
  
  //set the value in numbers
  error.valueError(6);
  
  //or set it in percentage
  error.valueError("15%")
```

As you can see we've created the error bars on a chart using the settings listed in the above table:

{sample}Error\_Chart\_01{sample}

Also it should be noted that you can do the same using the {api:anychart.core.cartesian.series.Base#error}**.error()**{api} method. The sample below demonstrates how to apply a total error to a full data set.

```
  //set the error value in numbers
  series.error(7);

  //or set it in percentage
  series.error("12%");
```

{sample}Error\_Chart\_02{sample}

**Note**: You can show error bars for x values in the case of e.g. an error in measurement of the data set. Have a look at the section below to learn more how to define an error on a series x value.

{sample}Error\_Chart\_12{sample}

### Scatter

Error bars can be displayed for the series x value, y value or both. You should use an appropriate set of methods to set the low and high values for the series x error value:

<table width="400" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Methods</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#xError}**.xError()**{api}</td>
<td>Used to set a common series x error value</td>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#xLowerError}**.xLowerError()**{api}</td>
<td>Used to set a lower x error value</td>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#xUpperError}**.xUpperError()**{api}</td>
<td>Used to set an upper x error value</td>
</tr>
</tbody>
</table>

And now we have an error defined on a scatter plot.

{sample}Error\_Chart\_05{sample}

X value error value must be defined in numbers or percentage of total value.

```
  var error = series.error();
  
  //you can set the x error value
  error.xError(10);
  
  //or set it in percentage
  error.xError("15%")
```

The same rules can be applied in case of scatter plot. Below is a demonstration of error defined with the foreground {api:anychart.core.utils.Error#xError}**.xError()**{api} method.

{sample}Error\_Chart\_04{sample}

It is also possible to apply a separate error bar to each data point within a series on a scatter plot:

{sample}Error\_Chart\_11{sample}

### Error Mode

If you want to specify the visibility of the upper and lower error values - you should use the {api:anychart.core.utils.Error#mode}**.mode()**{api} method:

<table width="430" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Value</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td><b>none</b></td>
<td>Error won't be displayed</td>
</tr>
<tr>
<td><b>value</b></td>
<td>Error will be displayed for y value</td>
</tr>
<tr>
<td><b>x</b></td>
<td>Error will be displayed for x value</td>
</tr>
<tr>
<td><b>both</b></td>
<td>Error will be displayed for both x and y values</td>
</tr>
</tbody>
</table>

Let's take a look at this part of code. As we can see the both error values are defined for some points (see the chart above), but since we configured the error mode as **"none"**, nothing will be rendered.

```
  var series = chart.marker([
    {x: 192, y: 9, xUpperError: "2%", xLowerError: "1%"},
    {x: 168, y: 24, xUpperError: "3%", xLowerError: "3%", valueUpperError: 3},
    {x: 154, y: 30, xError: 6},
    {x: 132, y: 41, xUpperError: "3%", xLowerError: "3%"},
    {x: 114, y: 53, xUpperError: 2, xLowerError: "3%", valueLowerError: "7%"},
    {x: 94, y: 74, xError: "4%", "valueError": "6%"},
    {x: 83, y: 85, xUpperError: "3%", xLowerError: "5%", valueUpperError: "5%", valueLowerError: "2%"}
  ]);

  var error = series.error();
  error.mode("none");
```

{sample}Error\_Chart\_06{sample}

Or you can use only **"value"** error mode with the same error settings:

```
  var error = series.error();
  error.xLowerError("2%");
  error.xUpperError("2%");
  error.valueUpperError(8);
  error.valueLowerError("4%");
  error.mode("value");
```

And the chart looks appropriate:

{sample}Error\_Chart\_07{sample}

## Visualization

AnyChart html5 charting framework provides a few opportunities to configure an error view. If you want to customize the error width you should use these methods:

<table width="400" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Method</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#xErrorWidth}**.xErrorWidth()**{api}</td>
<td>Used to set a series x value error width</td>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#valueErrorWidth}**.valueErrorWidth()**{api}</td>
<td>Used to set an y value error width</td>
</tr>
</tbody>
</table>

```
  var error = series.error();
  error.xErrorWidth(30);
  error.valueErrorWidth("6%");
```

Here is the simple demonstration of this feature on the Scatter Line Chart:

{sample}Error\_Chart\_08{sample}

To change the error color you have to use the following settings:

<table width="400" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Method</b></th>
<th width="88"><b>Description</b></th>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#xErrorStroke}**.xErrorStroke()**{api}</td>
<td>Used to configure an x error stroke</td>
</tr>
<tr>
<td>{api:anychart.core.utils.Error#valueErrorStroke}**.valueErrorStroke()**{api}</td>
<td>Used to configre a series error stroke</td>
</tr>
</tbody>
</table>

Here is a simple code to illustrate how to apply these settings:

```
  // set to the series
  var error = series.error();
  error.valueErrorStroke("2 red .9");
  error.xErrorStroke("4px green .4");

  // apply to the specific point
  {
    x: 94,
    value: 74,
    xError: 6,
    valueError: 4,
    valueErrorStroke: "red",
    xErrorStroke: "green"
  },
```

Look at the chart sample below and click on it to see it's javascript source.

{sample}Error\_Chart\_09{sample}

## Labels And Tooltips

If you want to configure data labels and tooltips to display information about the error bars - you should do that in {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltips}**.tooltips()**{api} methods. You can tune their visual appearance, positioning and format.

{sample}Error\_Chart\_13{sample}

## Samples

You can see a lot of other samples in [AnyChart Web Error Charts Gallery](https://anychart.com/products/anychart/gallery/Error_Charts/).