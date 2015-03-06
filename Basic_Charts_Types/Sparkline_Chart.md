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
* [Design](#design)
  * [Colorizing Elements](#colorizing_elements)
  * [HatchFill](#hatchfill)

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
<tr>
<th rowspan=2 width="88"><b>Day</b></th>
<th colspan=2 width="88"><b>Rate</b></th>
</tr>
<tr>
<th><b>EUR/USD</b></th>
<th><b>GBP/USD</b></th>
</tr>
<tr>
<td>25.02</td>
<td>1,1371</td>
<td>1,5500</td>
</tr>
<tr>
<td>24.02</td>
<td>1,1341</td>
<td>1,5458</td>
</tr>
<tr>
<td>23.02</td>
<td>1,1132</td>
<td>1,5463</td>
</tr>
<tr>
<td>21.02</td>
<td>1,1381</td>
<td>1,5397</td>
</tr>
<tr>
<td>20.02</td>
<td>1,1371</td>
<td>1,5385</td>
</tr>
</tbody></table>

Now we need to convert this data table into an acceptable format. In terms of AnyChart data model we have 2 charts with one series of data (rates) each with dates as categories. Each point in series represents one date and the rate. Converted Data looks like:

```
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

  //set charts dimensions and position
  chart1.bounds(0, 0, 90, 20);
  chart2.bounds(0, 25, 90, 20);
  
  //initiate chart drawing
  chart1.draw();
  chart2.draw();
 ```
  
As you can see, we defined only the values, no categories are mentioned in the code. 

That's how the charts will look like:

{sample :width 600 :height 50}BCT\_Sparkline\_Chart\_01{sample}

All titles are disabled by default, so we have to put them in visible mode and set.

```
  //setting the titles
  chart1.title(true);
  chart1.title().text('EUR/USD');
  chart2.title(true);
  chart2.title().text('GBP/USD');

 ```
That's how it looks with titles:

{sample :width 600 :height 50}BCT\_Sparkline\_Chart\_02{sample}

### Area Sparkline Chart

An area sparkline is a line sparkline with the area between its points and the horizontal axis colored in. Now let's use the same data as we used for the sample above, but this time define both charts as area.  

```
  //set series type
  chart1.type('area');
  chart2.type('area');
```


{sample :width 600 :height 50}BCT\_Sparkline\_Chart\_03{sample}

### Column Sparkline Chart

A Column Sparkline is a kind of column chart with minimum funcionality enabled by default. This type of spaklines is worth using when we analyze something that might have negative values: for example, profit of a company, or sum of positive and negative review for a product.

You can easily switch types: 

```
  //set series type
  chart1.type('column');
```

Currency rates are not the best example for Columns, so let's take sum of + and - reviews for an Ebay seller as an exapmle.

{sample :width 600 :height 50}BCT\_Sparkline\_Chart\_04{sample}

### WinLoss Sparkline Chart

A WinLoss is a type used predominantly for scores in sports, games, etc. It shows no values but positive and negative positions.

That's how we swap types:
```
  //set series type
  chart1.type('wl');
```

{sample :width 600 :height 50}BCT\_Sparkline\_Chart\_05{sample}

Note that there's no difference for a w/l chart how big the value is - only sign of the value means.

##Axes

Sparklines have no axes to be shown, but scales can be controlled. AnyChart allows to invert any scale: Y, X or any extra. Inversion is controlled by **.inverted()** method:

```
    chart.yScale().inverted(true);
```

And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample :width 600 :height 50}BCT\_Sparkline\_Chart\_06{sample}

<!--что-то здесь не так, почти ничто не инвертится--!>

##Visualisation

Here you will find some information about main parts of  the sparkline chart style and see the demonstration of style applying.

###Missed Points

Sometimes we need to show the absence of a value or we don't have enough data. In this case we define one of the data points as "miss":

```
  chart1.data([1.1371,1.1341, 'miss', 1.1132,1.1381,1.1371]);
  chart2.data([1.5500,1.5458,1.5463, 'miss', 1.5397,1.5385]);
```

There's no difference in what you write instead of the point you need to be missed. This only applies to strings - be careful and don't use numerical values here. 
Now let's just connect the points surrounding the missing ones. We use the **.connectMissingPoints()** method for this:

```
chart2.data([1.5500,1.5458,1.5463, 'miss', 1.5397,1.5385]).connectMissingPoints(true);
```
In this sample you can see how it looks with a missing point and compare with a chart below, where this point is simply connected.

{sample :width 600 :height 200}BCT\_Sparkline\_Chart\_07{sample}

###Clip

If you wish not to accent the range of values but cut all unwanted ones off, use the **.clip** method. 

```
 chart.clip(new acgraph.math.Rect(x, y, width, height));
```
{sample :width 600 :height 200}BCT\_Sparkline\_Chart\_08{sample}

###Pointwidth

For some reasons you may need to make your columns look thiner or wider. It is possible to variate the width of a column using the **.pointWidth()** method:

```
    chart1.pointWidth('50%');
    chart2.pointWidth(25);
```
Note that you can define pointWidth values as percent or in pixels.
This feature can be applied to Column and WinLoss Sparklines. Let's adjust columns in a couple of our previous examples:

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_09{sample}

##Label

In this section we will explain how to add and configure data labels. 

If you want to configure data labels for all series - you should do that in the {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} method. You can tune their visual appearance, positioning and format.

The following code enables only the general chart label, i.e. name:

```
    chart.label().enabled(true);
```

To enable the labels for the points, you shall write the following:

```
    chart.labels().enabled(true);
```

That's how it looks when we adjust the previous code for our sample:

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_10{sample}

##Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. 
AnyChart allows to add markers to any data element including lines.

###RangeMarker

Although being rather small, sparklines can be quite informative. Range is a light colored rectangle with its lowest and highest levels representing the least and the highest acceptable value, e.g. an acceptable number of defects while production.

```
chart.rangeMarker()
    .scale(chart.yScale()) //you may change the scale
    .from(-50) // the value of the minimum of the range
    .to(250) // the value of the maximum of the range
    .fill('black'); 
```

This is an example where we use the data about the Ebay seller. Let's define +250 as the minimum sum of negative and positive reviews to get a new "star" and the maximum for saving the current score, and -10 as the maximum for losing a "star" and the minimum for saving the current score.

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_11{sample}


###LineMarker

LineMarker is similar to RangeMarker, but there's no area to be shown with LineMarkers - only single lines, which can represent some limits.

The following code will help you to add a LineMarker to your chart:

```
  chart.lineMarker()
    .scale(chart.yScale()) //you may change the scale
    .value(<value>);
```

That's how it all looks in the example:

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_12{sample}                                   
 

##Design

AnyChart uses default color palette to colorize data elements of chart automatically if you have not define special colors. But you can set and apply the color to exact data series or data point.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set {api:anychart.graphics.vector.Stroke}**.stroke()**{api} parameter for Line or Area series and {api:anychart.graphics.vector.Fill}**.fill()**{api} for  Area, Column and WinLoss. In the sample below we have 4 charts of each type demonstrating the applied colors and fills. We have colored the maximum and the minimum values in the column chart and only negatives in winloss. Here is the sample:

{sample :width 600 :height 200}BCT\_Sparkline\_Chart\_13{sample}   

The code for the example above is the following:

```
	//colorize our charts
	chart1.stroke('red');
	chart2.stroke('yellow');
	chart2.fill('#996633');
	chart3.maxFill('green');
	chart3.minFill('red');
	chart4.negativeFill('darkred');
```

Actually, it's better to use color in Sparklines to put your customers' attention to some facts, using charts of the same type. You can emphasize the first and the last points, the max and the min ones, negative or normal points - this will make the comparison much easier.

Let's have a look on two different line sparklines with negative points emphasized:

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_14{sample} 

That's what we should write to color our negative points in green and stroke them in red:
```
	chart1.negativeMarkers().enabled(true).stroke('1 red').fill('green').size(3);
	chart2.negativeMarkers().enabled(true).stroke('1 red').fill('green').size(3);
```

Now let's color the first and the last columns of two different column Sparklines:

```
  //colorize our charts
  chart1.firstFill('darkRed');
  chart1.lastFill('blue');
  chart2.firstFill('blue');
  chart2.lastFill('blue');
```

That's how it looks like on the board:

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_15{sample}

You can add labels not to all points, but to the maximum and the minimum ones, like it is done in the example below:

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_16{sample}

You only need to enable the max or minLables to do it as in the sample above:

```
  chart.maxLabels().enabled(true);
  chart.minLabels().enabled(true);
```

###HatchFill

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see Hatch Fill tutorial.
Downwards you can see a couple of WinLoss Sparklines which we've colored with hatchFills using **.hatchFill()** parameter opposite to **fill()** parameter used to colorize the series and set all series in light grey color.

```
  //colorize our charts
  chart1.negativeHatchFill('diagonal');
  chart1.negativeFill('lightGray');
  chart1.fill('lightGray');
  chart2.negativeFill('lightGray');
  chart2.negativeHatchFill('diagonal');
  chart2.fill('lightGray');
```

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_17{sample}

It's also possible to add a hatchfill to a point though the data. You need to define the data as the array in this case:

```
  chart2.data([{value: 20, hatchFill: {type: 'checkerboard'}}, 30, -10, {value: 20,hatchFill: {type: 'checkerboard'}}, -35, {value: -15, hatchFill: {type: 'checkerboard'}}, -40, 50]);
```

{sample :width 600 :height 100}BCT\_Sparkline\_Chart\_18{sample}

