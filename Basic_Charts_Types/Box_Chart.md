#Box Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
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
 
Box Charts allow showing the minimum and the maximum with a median (a numerical value separating the higher half of a data sample, a population, or a probability distribution, from the lower half), which helps making the story more complete. But still, giving only the highest, the lowest and the medium values doesn't tell the full story. So it is often useful to display the data in a way that reveals more about values' distribution.

Here it is where BoxCharts are really useful.

## Chart

Depending on data model and the visualization purpose the area chart may contain one or several series.

### Single Series Area Chart

Let's see single series area chart created using the following data: salaries of ACME Corp. by ranges:

<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Range</b></th>
<th width="88"><b>Max Salary</b></th>
<th width="88"><b>Min Salary</b></th>
<th width="88"><b>Median</b></th>
</tr>
<tr>
<td>1</td>
<td>$2000</td>
<td>$1000</td>
<td>$1200</td>
</tr>
<tr>
<td>2</td>
<td>$4000</td>
<td>$2500</td>
<td>$3800</td>
</tr>
<tr>
<td>3</td>
<td>$3000</td>
<td>$2000</td>
<td>$2500</td>
</tr>
<tr>
<td>4</td>
<td>$7000</td>
<td>$4000</td>
<td>$6500</td>
</tr>
<tr>
<td>5</td>
<td>$9000</td>
<td>$8000</td>
<td>$8500</td>
</tr>
</tbody></table>
Now we need to convert this data table into the format that can be used by AnyChart. See more about formats in 
[Supported Data Formats](../Working_with_Data/Supported_Data_Formats) article.
  
In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point 
in series represents one month and sales volume. We will use the basic and the easiest method of data setting, it looks 
like this:

```
    anychart.data.set([
        ['January', 10000],
        ['February', 12000],
        ['March', 18000],
        ['April', 11000],
        ['May', 9000]
    ]);
    chart = anychart.areaChart();
    chart.area(data);
```

As you can see, we've created a Data Set. Every object is a point, each has some parameters. The first column is as 
category and the second column is a value.
  
  
Here it is: AnyChart can now visualize your data. Look at the chart sample below and click on "Launch in playground" 
to see the full source code, alter and play with the sample or download it.

{sample}BCT\_BoxChart\_01{sample}

### Single Series Spline Area Chart

For better look and feel of your charts you can use SplineArea chart type:

```
    anychart.data.set([
        ['January', 10000],
        ['February', 12000],
        ['March', 18000],
        ['April', 11000],
        ['May', 9000]
    ]);
    chart = anychart.areaChart();
    chart.splineArea(data);
```

Here is the same chart as shown above, but in Spline mode:

{sample}BCT\_BoxChart\_02{sample}

### Multi-series

To compare two or more data sets you have to use multi-series area charts as it is shown in the sample below.
  
Let's compare 2003 sales to 2004 sales:

<table width="375" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="88"><b>Month</b></th>
<th width="88"><b>2003 Sales</b></th>
<th width="88"><b>2004 Sales</b></th>
</tr>
<tr>
<td>January</td>
<td>$10000</td>
<td>$12000</td>
</tr>
<tr>
<td>February</td>
<td> $12000</td>
<td> $15000</td>
</tr>
<tr>
<td>March</td>
<td> $18000</td>
<td> $16000</td>
</tr>
<tr>
<td>April</td>
<td> $11000</td>
<td> $15000</td>
</tr>
<tr>
<td>May</td>
<td> $9000</td>
<td> $14000</td>
</tr>
</tbody>
</table>

As we do in single series area sample above we need to convert this table AnyChart format, the only difference between 
these two samples is the fact that now we have two series of the data: one series for each year, and we give proper 
names to each series:

```
    var dataSet = anychart.data.set([
        ['January', '10000', '12000'],
        ['February', '12000', '15000'],
        ['March', '18000', '16000'],
        ['April', '11000', '15000'],
        ['May', '9000', '14000'],
    ]);
    var seriesData_1 = dataSet.mapAs({x: [0], value: [1]});
    var seriesData_2 = dataSet.mapAs({x: [0], value: [2]});
    chart.area(seriesData_1).name('2004');
    chart.area(seriesData_2).name('2005');
```

As we now have multi-series chart we don't want to set **type of chart** for each series individually (there can be 
much more than two series in multi-series chart), so we set **chart** as {api:anychart#area}**anychart.areaChart()**{api}. Now all series in
the chart will be of Area type by default.

{sample}BCT\_BoxChart\_03{sample}