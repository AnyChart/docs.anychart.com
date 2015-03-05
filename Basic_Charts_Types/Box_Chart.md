#Box Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single-series)
 * [Multi-series](#multi-series)
* [Axes](#axes)
 * [Orientation](#orientation)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Padding](#padding)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)

## Overview

Sometimes it's not the best idea to describe a set of values as a single summarized measure such as a sum or average. It may be necessary to describe the values as they spread across the entire range. For example, if we want to analyze salaries in a company, we will need more information than the sum of salaries for each salary grade. Even a measure of average salary wouldn't tell us enough.
 
Box Charts allow showing the minimum and the maximum with a median (a numerical value separating the higher half of a data sample, a population, or a probability distribution, from the lower half) and quartiles, which helps making the story more complete. But still, giving only the highest, the lowest and the medium values doesn't tell the full story. So it is often useful to display the data in a way that reveals more about values' distribution.

Here it is where BoxCharts are really useful.

## Chart

Depending on data model and the visualization purpose the area chart may contain one or several series.

### Single-Series 

Let's see single series area chart created using the following data: salaries of ACME Corp. by ranges in February 2015:

<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Range</b></th>
<th width="88"><b>Min Salary</b></th>
<th width="88"><b>First Quartile</b></th>
<th width="88"><b>Median</b></th>
<th width="88"><b>Third Quartile</b></th>
<th width="88"><b>Max Salary</b></th>
</tr>
<tr>
<td>1</td>
<td>$1000</td>
<td>$1050</td>
<td>$1200</td>
<td>$1800</td>
<td>$2000</td>
</tr>
<tr>
<td>2</td>
<td>$2500</td>
<td>$3000</td>
<td>$3800</td>
<td>$3900</td>
<td>$4000</td>
</tr>
<tr>
<td>3</td>
<td>$2000</td>
<td>$2300</td>
<td>$2500</td>
<td>$2900</td>
<td>$3000</td>
</tr>
<tr>
<td>4</td>
<td>$4000</td>
<td>$5000</td>
<td>$6000</td>
<td>$6500</td>
<td>$7000</td>
</tr>
<tr>
<td>5</td>
<td>$8000</td>
<td>$8400</td>
<td>$8500</td>
<td>$8800</td>
<td>$9000</td>
</tr>
</tbody></table>
Now we need to convert this data table into the format that can be used by AnyChart. See more about formats in 
[Supported Data Formats](../Working_with_Data/Supported_Data_Formats) article.
  
In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point 
in series represents one month and sales volume. We will use the basic and the easiest method of data setting, it looks 
like this:

```
  var data = [
    {x: '1', low: 1000, q1: 1050, median: 1200, q3: 1800, high: 2000},
    {x: '2', low: 2500, q1: 3000, median: 3800, q3: 3900, high: 4000},
    {x: '3', low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000},
    {x: '4', low: 4000, q1: 5000, median: 6500, q3: 6500, high: 7000},
    {x: '5', low: 8000, q1:8400 , median: 8500, q3: 8800, high: 9000},
  ];

  //create box chart
  chart = anychart.box();

  //create box chart series with our data
  var series = chart.box(data);
```

As you can see, we've created a Data Set. Every object is a point, each has some parameters. The first column is as 
category and the second column is a value.
  
  
Here it is: AnyChart can now visualize your data. Look at the chart sample below and click on "Launch in playground" 
to see the full source code, alter and play with the sample or download it.

{sample}BCT\_BoxChart\_01{sample}

### Multi-series 

To compare two or more data sets you have to use multi-series area charts as it is shown in the sample below.
  
Now we're going to compare February 2015 salaries to January 2015 ones. Let's suppose January 2015 salaries as in the table below:

<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Range</b></th>
<th width="88"><b>Min Salary</b></th>
<th width="88"><b>First Quartile</b></th>
<th width="88"><b>Median</b></th>
<th width="88"><b>Third Quartile</b></th>
<th width="88"><b>Max Salary</b></th>
</tr>
<tr>
<td>1</td>
<td>$1300</td>
<td>$1400</td>
<td>$1700</td>
<td>$2000</td>
<td>$2100</td>
</tr>
<tr>
<td>2</td>
<td>$2500</td>
<td>$3400</td>
<td>$3500</td>
<td>$3600</td>
<td>$3700</td>
</tr>
<tr>
<td>3</td>
<td>$2000</td>
<td>$2300</td>
<td>$2500</td>
<td>$2900</td>
<td>$3000</td>
</tr>
<tr>
<td>4</td>
<td>$4000</td>
<td>$5000</td>
<td>$5500</td>
<td>$6000</td>
<td>$7000</td>
</tr>
<tr>
<td>5</td>
<td>$8100</td>
<td>$8400</td>
<td>$8500</td>
<td>$9000</td>
<td>$9500</td>
</tr>
</tbody></table>

As we do in single series area sample above we need to convert this table AnyChart format, the only difference between 
these two samples is the fact that now we have two series of the data: one series for each year, and we give proper 
names to each series and each data:

```
  var data1 = [
    {x: '1', low: 1300, q1: 1400, median: 1700, q3: 2000, high: 2100},
    {x: '2', low: 2500, q1: 3400, median: 3500, q3: 3600, high: 3700},
    {x: '3', low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000},
    {x: '4', low: 4000, q1: 5000, median: 5500, q3: 6000, high: 7000},
    {x: '5', low: 8100, q1:8400 , median: 8500, q3: 9000, high: 9500},
  ];

  //create box chart series with our data
  var series = chart.box(data);
  var series1 = chart.box(data1);
```

That's how it looks like on a chart:

{sample}BCT\_BoxChart\_02{sample}

##Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in Axes Basics, Axes Scales and Extra Axes tutorial, in this section we will quickly demonstrate how axis orientation can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

###Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust the **.orientation()** parameter of the **.yAxis()** or **.xAxis()** methods.
Position depends on plot type and inversion of axes, you will find list of all possible orientation and inversion settings in Axes Orientation Templates.

```
chart.xAxis(0).orientation('right');
chart.yAxis(0).orientation('top');
```

And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_BoxChart\_03{sample}

###Inversion

AnyChart allows scale inversion. Just add the **.inverted** method to the scale you want to invert, for example:
 
```
  // adjust y scale
    chart.yScale().inverted(true);
```

Only one string changes the view a lot:

{sample}BCT\_BoxChart\_04{sample}

###Minimum and maximum