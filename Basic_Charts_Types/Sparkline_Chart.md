#Sparkline Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
* [Scales](#scales)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels](#labels)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)

## Overview

In some cases it might be necessary to represent a lot of similar data over a long period of time, such as currency trends. Up and down arrows are used for this purpose quite often, but they cannot give the whole picture of the trends. That's where sparklines come to the fore.

Sparkline charts are rather small with neither axes nor grids, amount of additional information is minimized, but they tell a richer story than trend arrows: we can make a chart display not just the current situation, but its changing over time. Sometimes sparklines can be even more informative than any of usual chart types - just because of its simplicity.

## Chart

As sparklines are very simple and their main purpose is showing the trend of something unique, there's no possibilty (and no need) to make them multi-series.

Sparkline series can be of 4 types: line, area, column and win/loss. 

### Line Sparkline Chart

Let's build an example with 2 single-series line charts using the following data - trends of EUR/USD and GBP/USD currency rate.

<table width="287" border="1" class="dtTABLE">
<tbody>
<tr><th colspan=2>EUR/USD</th></tr>
<tr>
<th width="88"><b>Day</b></th>
<th width="88"><b>Rate</b></th>
</tr>
<tr>
<td>25.02</td>
<td>1,1371</td>
</tr>
<tr>
<td>24.02</td>
<td>1,1341</td>
</tr>
<tr>
<td>23.02</td>
<td>1,1132</td>
</tr>
<tr>
<td>21.02</td>
<td>1,1381</td>
</tr>
<tr>
<td>20.02</td>
<td>1,1371</td>
</tr>
</tbody></table>

<table width="287" border="1" class="dtTABLE">
<tbody>
<tr><th colspan=2>GBP/USD</th></tr>
<tr>
<th width="88"><b>Day</b></th>
<th width="88"><b>Rate</b></th>
</tr>
<tr>
<td>25.02</td>
<td>1,5500</td>
</tr>
<tr>
<td>24.02</td>
<td>1,5458</td>
</tr>
<tr>
<td>23.02</td>
<td>1,5463</td>
</tr>
<tr>
<td>21.02</td>
<td>1,5397</td>
</tr>
<tr>
<td>20.02</td>
<td>1,5385</td>
</tr>
</tbody></table>

Now we need to convert this data table into an acceptable format. In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point in series represents one month and sales volume. Converted Data looks like:

```
anychart.onDocumentReady(function() {
    var stage = anychart.graphics.create('container');
    
  //create charts
  chart1 = anychart.sparkline();
  chart2 = anychart.sparkline();

  //set container id for the charts
  chart1.container(stage);
  chart2.container(stage);

  //create data for both charts
  chart1.data([1.1371,1.1341,1.1132,1.1381,1.1371]);
  chart2.data([1.5500,1.5458,1.5463,1.5397,1.5385]);

  //set charts dimensions and postition
  chart1.bounds(0, 0, 90, 20);
  chart2.bounds(0, 25, 90, 20);
  
  //initiate chart drawing
  chart1.draw();
  chart2.draw();
});
 ```
  
As you can see, we defined only the values, no categories are mentioned in the code. 

That's how the charts will look like:

{sample}BCT\_Sparkline\_Chart\_01{sample}

All titles are disabled by default, so we have to put them in visible mode and set.

```
  //setting the titles
  chart1.title(true);
  chart1.title().text('EUR/USD');
  chart2.title(true);
  chart2.title().text('GBP/USD');

 ```
That's how it looks with titles:

{sample}BCT\_Sparkline\_Chart\_02{sample}

### Area Sparkline Chart

An area sparkline is a line sparkline with the area between its points and the horizontal axis colored in. Now let's use the same data as we used for the sample above, but this time define both charts as area.  

```
  //set series type
  chart1.type('area');
  chart2.type('area');
```


{sample}BCT\_Sparkline\_Chart\_03{sample}

### Column Sparkline Chart

A Column Sparkline is a kind of column chart with minimum funcionality enabled by default. This type of spaklines is worth using when we analyze something that might have negative values: for example, profit of a company, or sum of positive and negative review for a product.

You can easily switch types: 

```
  //set series type
  chart1.type('column');
```

Currency rates are not the best example for Columns, so let's take sum of + and - reviews for an Ebay seller as an exapmle.

{sample}BCT\_Sparkline\_Chart\_04{sample}

### WinLoss Sparkline Chart

A WinLoss is a type used predominantly for scores in sports, games, etc. It shows no values but positive and negative positions.

That's how we swap types:
```
  //set series type
  chart1.type('wl');
```

{sample}BCT\_Sparkline\_Chart\_05{sample}

Note that there's no difference for a w/l chart how big the value is - only sign of the value means.

##Axes

Sparklines have no axes to be shown, despite scales can be inverted. AnyChart allows to invert any scale: Y, X or any extra. Inversion is controlled by **.inverted()** method:

```
    chart.yScale().inverted(true);
```

And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_Sparkline\_06{sample}

<!--что-то здесь не так, почти ничто не инвертится--!>

##Visualisation

Here you will find some information about main parts of  the sparkline chart style and see the demonstration of style applying.

###Title
<!--может, сюда про тайтл?--!>

###Range

###MissedPoints

###Clip

###Pointwidth

##Label

##Marker

##Colors 

###Stroke

###Fill

