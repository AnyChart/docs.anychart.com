{:index 4.1}
# Sparkline Chart

## Overview

In some cases it might be necessary to represent a lot of similar data over a long period of time, such as currency trends. Up and down arrows are used for this purpose quite often, but they cannot give the whole picture of the trends. That's where sparklines come to the fore.

Sparkline charts are rather small with neither axes nor grids, amount of additional information is minimized, but they tell a richer story than trend arrows: we can make a chart display not just the current situation, but its changing over time. Sometimes sparklines can be even more informative than any of usual chart types - just because of its simplicity.

## Modules

The Sparkline chart requires adding the [Core](../Quick_Start/Modules#core) and [Sparkline](../Quick_Start/Modules#sparkline) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sparkline.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Chart

As sparklines are very simple and their main purpose is showing the trend of something unique, there's no possibility (and no need) to make them multiple-series.

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
<td>21.02</td>
<td>1,1371</td>
<td>1,5500</td>
</tr>
<tr>
<td>22.02</td>
<td>1,1341</td>
<td>1,5458</td>
</tr>
<tr>
<td>23.02</td>
<td>1,1132</td>
<td>1,5463</td>
</tr>
<tr>
<td>24.02</td>
<td>1,1381</td>
<td>1,5397</td>
</tr>
<tr>
<td>25.02</td>
<td>1,1371</td>
<td>1,5385</td>
</tr>
</tbody></table>

Now we need to convert this data table into an acceptable format. In terms of AnyChart data model we have 2 charts with one series of data (rates) each with dates as categories. Each point in series represents one date and the rate. Converted data looks like:

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

{sample :width 688 :height 50}BCT\_Sparkline\_Chart\_01{sample}

All titles are disabled by default, so we have to put them in visible mode.

```
//setting the titles
chart1.title('EUR/USD');
chart2.title('GBP/USD');
```

That's how it looks with titles:

{sample :width 688 :height 50}BCT\_Sparkline\_Chart\_02{sample}

### Area Sparkline Chart

An area sparkline is a line sparkline with the area between its points and the horizontal axis colored in. Now let's use the same data as we used for the sample above, but this time define both charts as area.  

```
//set series type
chart1.type('area');
chart2.type('area');
```


{sample :width 688 :height 50}BCT\_Sparkline\_Chart\_03{sample}

### Column Sparkline Chart

A Column Sparkline is a kind of column chart with minimum number of options enabled by default. This type of spaklines is worth using when we analyze something that might have negative values: for example, profit of a company, or sum of positive and negative review for a product.

You can easily switch types: 

```
//set series type
chart1.type('column');
```

Currency rates are not the best example for Columns, so let's take the sum of positive and negative reviews for an Ebay seller as an example.

{sample :width 688 :height 50}BCT\_Sparkline\_Chart\_04{sample}

### WinLoss Sparkline Chart

A WinLoss is a type used predominantly for scores in sports, games, etc. It shows no values but positive and negative positions.

That's how we swap types:

```
//set series type
chart1.type('wl');
```

{sample :width 688 :height 50}BCT\_Sparkline\_Chart\_05{sample}

Note that there's no difference for a WinLoss chart how big the value is - only sign of the value means.

## Axes

Axes in Sparklines are invisible, but still you can control the scales as you can do it with other chart types. You can invert any scale, change its orientation, change the scale type or define the minimum and the maximum values on a scale. For more information about scales look up the [Scales tutorial](../Axes_and_Grids/Scales). 

Let's change the Y-scale type to logarithmic and define the min and the max values for one chart and show the sparkline with the default scale below to make the  difference between the plain and the tuned charts clear:

```
//change scales
chart1.yScale(anychart.scales.log());
chart1.yScale().minimum('79').maximum('10445');
```

{sample :width 688 :height 50}BCT\_Sparkline\_Chart\_06{sample}
 

## Missing Points

Sometimes we need to show the absence of a value or we don't have enough data. In this case we define one of the data points as "miss":

```
chart1.data([1.1371,1.1341, 'miss', 1.1132,1.1381,1.1371]);
chart2.data([1.5500,1.5458,1.5463, 'miss', 1.5397,1.5385]);
```

There's no difference in what you write instead of the point you need to be missed. This only applies to strings - be careful and don't use numerical values here. 
Now let's just connect the points surrounding the missing ones. We use the {api:anychart.charts.Sparkline#connectMissingPoints}connectMissingPoints(){api} method for this:

```
chart2.data([1.5500,1.5458,1.5463, 'miss', 1.5397,1.5385]).connectMissingPoints(true);
```
In this sample you can see how it looks with a missing point and compare with a chart below, where this point is simply connected.

{sample :width 688 :height 200}BCT\_Sparkline\_Chart\_07{sample}

## Visualisation

Here you will find some information about main parts of the sparkline chart style and see the demonstration of style applying.

### Point width

For some reasons you may need to make your columns look thiner or wider. It is possible to variate the width of a column using the {api:?entry=pointWidth}pointWidth(){api} method:

```
chart1.pointWidth('50%');
chart2.pointWidth(25);
```

Note that you can define pointWidth values as a percentage or in pixels.
This feature can be applied to Column and WinLoss Sparklines. Let's adjust columns in a couple of our previous examples:

{sample :width 688 :height 100}BCT\_Sparkline\_Chart\_09{sample}

See also: [Point Size](../Common_Settings/Point_Size).

## Labels

In this section we will explain how to add and configure data labels. 

If you want to configure data labels for all series - you should do that in the {api:anychart.core.cartesian.series.Base#labels}labels(){api} method. You can tune their visual appearance, positioning and format.

The following code enables only the general chart label, i.e. name:

```
chart.label().enabled(true);
```

To enable the labels for the points, you shall write the following:

```
chart.labels().enabled(true);
```

That's how it looks when we adjust the previous code for our sample:

{sample :width 688 :height 80}BCT\_Sparkline\_Chart\_10{sample}

## Axes Markers

### Range Marker

Although being rather small, sparklines can be quite informative. Range is a light colored rectangle with its lowest and highest levels representing the least and the highest acceptable value, e.g., an acceptable number of defects while production. To set any parameters to this marker, use the {api:anychart.core.axisMarkers.Range}rangeMarker(){api} method.

```
chart.rangeMarker()
    .scale(chart.yScale()) //you may change the scale
    .from(-50) // the value of the minimum of the range
    .to(250) // the value of the maximum of the range
    .fill('black'); 
```

This is an example where we use the data about the Ebay seller. Let's define +250 as the minimum sum of negative and positive reviews to get a new "star" and the maximum for saving the current score, and -10 as the maximum for losing a "star" and the minimum for saving the current score.

{sample :width 688 :height 80}BCT\_Sparkline\_Chart\_11{sample}


### Line Marker

Line Marker is similar to Range Marker, but there's no area to be shown with Line Markers - only single lines, which can represent some limits. To set any parameters to this marker, use the {api:anychart.core.axisMarkers.Line}lineMarker(){api} method.

The following code will help you to add a Line Marker to your chart:

```
chart.lineMarker()
  .scale(chart.yScale()) //you may change the scale
  .value(-50);
```

That's how it all looks in the example:

{sample :width 688 :height 80}BCT\_Sparkline\_Chart\_12{sample}                                   
 

## Colorizing elements

AnyChart charting framework uses default color palette to colorize data elements of chart automatically if you have not define special colors. But you can set and apply the color to exact data series or data point.

### General

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set {api:anychart.graphics.vector.Stroke}stroke(){api} parameter for Line or Area series and {api:anychart.graphics.vector.Fill}fill(){api} for  Area, Column and WinLoss. In the sample below we have 4 charts of each type demonstrating the applied colors and fills. We have colored the maximum and the minimum values in the column chart and only negatives in winloss. Here is the sample:

{sample :width 688 :height 200}BCT\_Sparkline\_Chart\_13{sample}   

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

### Special points 

Actually, the main purpose of colorizing Sparklines is to put your customers' attention to some facts, using charts of the same type. You can emphasize the special points - this will make the comparison much easier.

Those special points are: the first, the last, the max, the min and negative ones. The rest are normal.

Here's a table of the methods avaliable for these points. You can find the description of the methods below.

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="140"><b></b></th>
<th width="140"><b>Fill</b></th>
<th width="140"><b>hatchFill</b></th>
<th width="140"><b>Labels</b></th>
<th width="140"><b>Markers</b></th>
</tr>
<tr>
<td>first</td>
<td>{api:anychart.charts.Sparkline#firstFill}firstFill{api}</td>
<td>{api:anychart.charts.Sparkline#firstHatchFill}firstHatchFill{api}</td>
<td>{api:anychart.charts.Sparkline#firstLabels}firstLabels{api}</td>
<td>{api:anychart.charts.Sparkline#firstMarkers}firstMarkers{api}</td>
</tr>
<tr>
<td>last</td>
<td>{api:anychart.charts.Sparkline#lastFill}lastFill{api}</td>
<td>{api:anychart.charts.Sparkline#lastHatchFill}lastHatchFill{api}</td>
<td>{api:anychart.charts.Sparkline#lastLabels}lastLabels{api}</td>
<td>{api:anychart.charts.Sparkline#lastMarkers}lastMarkers{api}</td>
</tr>
<tr>
<td>max</td>
<td>{api:anychart.charts.Sparkline#maxFill}maxFill{api}</td>
<td>{api:anychart.charts.Sparkline#maxHatchFill}maxHatchFill{api}</td>
<td>{api:anychart.charts.Sparkline#maxLabels}maxLabels{api}</td>
<td>{api:anychart.charts.Sparkline#maxMarkers}maxMarkers{api}</td>
</tr>
<tr>
<td>min</td>
<td>{api:anychart.charts.Sparkline#minFill}minFill{api}</td>
<td>{api:anychart.charts.Sparkline#minHatchFill}minHatchFill{api}</td>
<td>{api:anychart.charts.Sparkline#minLabels}minLabels{api}</td>
<td>{api:anychart.charts.Sparkline#minMarkers}minMarkers{api}</td>
</tr>
<tr>
<td>negative</td>
<td>{api:anychart.charts.Sparkline#negativeFill}negativeFill{api}</td>
<td>{api:anychart.charts.Sparkline#negativeHatchFill}negativeHatchFill{api}</td>
<td>{api:anychart.charts.Sparkline#negativeLabels}negativeLabels{api}</td>
<td>{api:anychart.charts.Sparkline#negativeMarkers}negativeMarkers{api}</td>
</tr>
<tr>
<td>all</td>
<td>{api:anychart.charts.Sparkline#fill}fill{api}</td>
<td>{api:anychart.charts.Sparkline#hatchFill}hatchFill{api}</td>
<td>{api:anychart.charts.Sparkline#labels}labels{api}</td>
<td>{api:anychart.charts.Sparkline#markers}markers{api}</td>
</tr>
</tbody></table>

Using the {api:anychart.graphics.vector.Stroke}stroke(){api} and {api:anychart.graphics.vector.Fill}fill(){api} paramenters, we can change these points' stroke and color accordingly. As a method of highlighting the point we can also enable labels, markers and hatchFills (see next section for hatchFills).

Let's have a look on two different line sparklines with negative points emphasized with color:

{sample :width 688 :height 100}BCT\_Sparkline\_Chart\_14{sample} 

That's what we should write to color our negative points in green and stroke them in red:

```
chart1.negativeMarkers().enabled(true).stroke('1 red').fill('green').size(3);
chart2.negativeMarkers().enabled(true).stroke('1 red').fill('green').size(3);
```

Now let's color the first and the last columns of two different column Sparklines. For that we use special methods {api:anychart.charts.Sparkline#firstFill}firstFill(){api} and {api:anychart.charts.Sparkline#lastFill}lastFill(){api} accordingly:

```
//colorize our charts
chart1.firstFill('darkRed');
chart1.lastFill('green');
chart2.firstFill('darkRed');
chart2.lastFill('green');
```

That's how it looks like on the board: 

{sample :width 688 :height 100}BCT\_Sparkline\_Chart\_15{sample}
You may notice that other points are now in one color. We've colored them in one low-opacity color to make the special points of the data more noticeable.

You can add labels not to all points, but to special ones, e.g., for the maximum and the minimum ones, like it is done in the example below. You only need to enable the max and the min lables using the {api:anychart.charts.Sparkline#maxLabels}maxLabels(){api} and {api:anychart.charts.Sparkline#minLabels}minLabels(){api} methods:

```
chart1.maxLabels().enabled(true);
chart1.minLabels().enabled(true);
chart2.maxLabels().enabled(true);
chart2.minLabels().enabled(true);
```

{sample :width 688 :height 240}BCT\_Sparkline\_Chart\_16{sample}

Note that the min and the max values are counted by themselves.

### Any point

It's also possible to emphasize any other point besides the special ones. To colorize any normal point, define the color for this point while setting the data:

```
//create data for both charts
chart1.data([-20, 30, 50, -10, {value:'25', fill:'green'}, -50, 70, 10]);
chart2.data([20, 30, -10, 20, {value:'-25', fill:'green'}, -5, -30, 50]);
```

{sample :width 688 :height 240}BCT\_Sparkline\_Chart\_20{sample}

### HatchFill

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see [Hatch Fill tutorial](../Graphics/Hatch_Fill_Settings).
Downwards you can see a couple of WinLoss Sparklines which we've colored with hatchFills using  special parameters such as {api:anychart.charts.Sparkline#negativeFill}negativeFill(){api}, {api:anychart.charts.Sparkline#negativeHatchFill}negativeHatchFill{api} parameter opposite to {api:anychart.graphics.vector.Fill}fill(){api} parameter used to colorize the series and set all series in light grey color.

```
//colorize our charts
chart1.negativeHatchFill('diagonal');
chart1.negativeFill('lightGray');
chart1.fill('lightGray');
chart2.negativeFill('lightGray');
chart2.negativeHatchFill('diagonal');
chart2.fill('lightGray');
```

{sample :width 688 :height 100}BCT\_Sparkline\_Chart\_17{sample}

It's also possible to add a hatchfill to a point through the data - if you need to emphasize how the same numbered points differ. You need to define the data as the array in this case:

```
chart2.data([{value: 20, hatchFill: {type: 'checkerboard'}}, 30, -10, {value: 20,hatchFill: {type: 'checkerboard'}}, -35, {value: -15, hatchFill: {type: 'checkerboard'}}, -40, 50]);
```

{sample :width 688 :height 100}BCT\_Sparkline\_Chart\_18{sample}

To learn more about hatch fills visit the [Hatch Tutorial](../Graphics/Hatch_Fill_Settings) page.

## Layout

Sparklines are designed to fit a lot of them in tiny space. We can do it through the stage using bounds (as done with the samples above):

```
//set container id for the charts
chart1.container(stage);
chart2.container(stage);
 
//set charts dimensions and position
chart1.bounds(0, 0, 90, 20); //parameters: left padding, top padding, width, height
chart2.bounds(0, 25, 90, 20);
```

Another way to place a lot of sparklines is to use the [AnyChart table](../Dashboards/Table_Layout):

```
// create table
var table = anychart.ui.table();

// set table content
table.contents([
  [
    null,
    'February',
    'June'
  ],[
    'EUR/USD',
    chart1,
    chart4
  ],[
    'GBP/USD',
    chart2,
    chart5
  ],[
    'CNY/USD',
    chart3,
    chart6
  ]
]);

table.getRow(0).height('25%');  // Get first row and set height 25%
table.getCol(0).width(70);      // Get first column and set width 70 px

table
  .cellBorder('#B8B8B8')        // Adjust table border
  .vAlign('center')             // Position text into the center
  .hAlign('center')             // Position text into the center
  .fontWeight(900)              // Bold text
  .height(100)                  // Set table height
  .width(200);                  // Set table width

// set table container and initiate draw
table.container('container').draw();
```

{sample :width 688 :height 100}BCT\_Sparkline\_Chart\_19{sample}

