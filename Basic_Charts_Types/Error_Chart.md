#Error Chart

* [Overview](#overview)
* [Supported Chart Types](#supported_chart_types)
* [Chart](#chart)
 * [Cartesian](#cartesian)
 * [Scatter Plot](#scatter_plot)
 * [Error Mode](#error_mode)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)

## Overview

Error charts are defined as part of the series and are used on graphs to indicate the error, or uncertainty in a reported measurement.

## Supported Chart Types

Here is the supported series types you can use to create the error charts:

<b>Cartesian</b>
* line
* spline
* stepline
* area
* splinearea
* steparea
* marker
* column
* bar

<b>Scatter</b>

* line
* marker

{тут ссылки и большие буквы}

## Chart

### Cartesian

You can start to configure your errors with special method error() {ссылка на API}

```
//create chart
var chart = anychart.line();
//set data
var line = chart.line([4, 2, 3, 1]);
//set error value
line.error(1);
```

<br>To define an error, you need to use these properties:

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

<br>AnyChart allows you to set an error value in different formats:

```
//you can set the value in pixels
series.error().valueError(7);

//or set it in percentage
series.error().valueError('15%')
```

<br>{sample}

<br>Also it should be noted that you can do the same using the error() method {ссылка API}

```
//to set the error value in pixels
series.error(7);

//or set it in percentage
series.error('15%')
```

<br>
{samples}

в примерах максимально раскрыть сочетания настроек. ну и вынести ключевой код перед ними

### Scatter

Error can be displayed for the series x value, y value or both. To set the low and high values for the series x value, you should use the next methods:

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

<br>Y error value must be defined in pixels (fixed) or percentage of y value:

```
//you can set the x error value in pixels
series.error().xError(10);

//or set it in percentage
series.error().xError('15%')
```

{sample}

### Error Mode

If you want to configure an error displaying - you should define the errorMode() method:

<table width="400" border="1" class="dtTABLE">
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

<br>{samples} код перед + пара примеров

## Visualization

There are some methods that allow you to configure an error view. If you want to customize the error width you should use these methods:

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
series.error().valueErrorWidth('6');
```

<br>{sample}

<br>To change the error color you have to use these methods:

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
                .xErrorStroke(['red', 'green'],2)
                .valueErrorStroke(['green','blue'],2);
```

<br>or you can define them as an object:

```
series.error({
            xErrorStroke: 'blue',
            valueErrorStroke: 'green'
        });
```

<br>{sample}