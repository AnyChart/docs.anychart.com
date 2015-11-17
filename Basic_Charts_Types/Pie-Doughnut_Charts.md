#Pie and Doughnut Chart
                                                               
* [Overview](#overview)
* [Chart](#chart)
  * [Pie Chart](#pie_chart)
  * [Doughnut Chart](#doughnut_chart)
  * [3D Pie Chart](#3d_pie_chart)
* [Start Angle](#start_angle)
* [Slices Sorting](#slices_sorting)
* [Exploded Slices](#exploded_slices)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
<!--* [Using markers](#using_markers)-->
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)

## Overview

Data that is arranged in a one column or an only row can be plotted on a pie chart. The data points in a pie chart are displayed as a percentage of the whole pie.
  
  
Use a pie chart when:
  
  
* You only have one data series that you want to plot.
* None of the values that you want to plot are negative.
* Almost none of the values that you want to plot are zero values.
* You've got no more than seven categories.
* The categories represent parts of the whole.
  
  
Doughnut chart are functionally identical to pie charts, the only difference is that the first one has a hole in the middle (which may be used, for example, as a place for the chart name).

## Chart

Pie chart may contain only single-series data and can be either ordinary pie chart or doughnut chart.

### Pie Chart

Let's see pie chart created using the following data - sales of ACME Corp. apparel through different retail channels in one year:

<table width="328" border="1" class="dtTABLE">
<tbody><tr>
<th width="210"><b>Retail Channel</b></th>
<th width="102"><b>Sales</b></th>
</tr>
<tr>
<td>Department Stores</td>
<td>$637.166</td>
</tr>
<tr>
<td>Discount Stores</td>
<td> $721.630</td>
</tr>
<tr>
<td>Men's/Women's Specialty Stores</td>
<td> $148.662</td>
</tr>
<tr>
<td>Juvenile Specialty Stores</td>
<td> $78.662</td>
</tr>
<tr>
<td>All other outlets</td>
<td> $90.000</td>
</tr>
</tbody></table>

Now we need to convert this data table into js format to make it acceptable by AnyChart. In terms of AnyChart data model we’ve got one series of data (Sales) with categories that hold Retail channels names. The data in JavaScript format looks like:

```
  chart = anychart.pie([
    ["Department Stores", 637166],
    ["Discount Stores", 721630],
    ["Men's/Women's Stores", 148662],
    ["Juvenile Specialty Stores", 78662],
    ["All other outlets", 90000]
  ]);
```

As you can see, we've used {api:anychart.charts.Pie}**anychart.pie()**{api} method to create pie chart. First column defines category and another one defines slice value.
  
  
Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on it to see preview and full configured data in the playground.

{sample}BCT\_PieDoughnutChart\_01{sample}

### Doughnut Chart

Doughnut chart is almost the same as Pie chart, the only difference is in appearance: Doughnut charts have a hole in the middle. All you need to turn pie chart into doughnut chart is to set {api:anychart.charts.Pie#innerRadius}**innerRadius()**{api} parameter more than 0:

```
  chart.innerRadius("30%");
```

And here is the same data as above in the form of a Doughnut chart:

{sample}BCT\_PieDoughnutChart\_02{sample}

### 3D Pie Chart

It is very easy to display the data from the sample above in 3D mode - just use {api:anychart#pie3d}**.pie3d()**{api} and the pie will become 3D.

{sample}BCT\_PieDoughnutChart\_03{sample}

##Start Angle

You can set starting angle for the first slice of the pie using {api:anychart.charts.Pie#startAngle}**.startAngle()**{api} method. In the sample below the start angle is shifted to 45°.

```
  chart.startAngle(45);
```

{sample}BCT\_PieDoughnutChart\_04{sample}

## Slices Sorting

In Pie/Doughnut web charts, it is possible to sort the series by ascending or descending. This feature is controlled using {api:anychart.charts.Pie#sort}**.sort()**{api} parameter. In the sample below three pie charts with identical series are shown, first isn't sorted, the second is sorted ascending and the third - descending.

{sample :width 690 :height 230}BCT\_PieDoughnutChart\_05{sample}


## Exploded Slices

You can set pie and doughnut chart slices to be exploded when user clicks on it and you can set certain slices to be exploded by default.
  
  
{api:anychart.charts.Pie#explode}**.explode()**{api} parameter defines how far slices are exploded. To disable exploding, set {api:anychart.charts.Pie#explode}**.explode()**{api} value to 0.

```
  chart.explode(30);
```

To explode only one slice set an “explode” value to a point:

```
  chart.explodeSlice(0, true); 
```
The first parameter is the number of the slice and the second one is boolean responsible for activating the explosion. Note that number of the slice is to be counted from 0.
  
  
Sample chart below has the first slice exploded by default.

{sample}BCT\_PieDoughnutChart\_06{sample}

Also it's possible to define explosion with the data itself if you set the data as an object:

```
  var chart = anychart.pieChart([
    {name: "Department Stores", value: 637166, exploded: true},
    ["Discount Stores", 721630],
    ["Men's/Women's Stores", 148662],
    ["Juvenile Specialty Stores", 78662],
    ["All other outlets", 90000]
  ]);
```

{sample}BCT\_PieDoughnutChart\_07{sample}

## Visualization

In this section we will describe the main parts of a pie chart style and demonstrate how to apply a style.
  
  
Also, you can use styles to make charts interactive: you can define each element’s appearance and behavior by default, while hovered, etc.
<!--More information about these features can be found in Interactivity tutorial.-->

### Basic Sample

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is a structure:

```
  chart.fill("Gold")
  chart.hoverHatchFill("diagonalbrick", "darkred")
  chart.stroke("4 Rgb(86,86,26)")
  chart.hoverStroke("4 darkred")
  chart.hatchFill("diagonalbrick", "gray");
```

Using such settings we've created a style that defines slices of gold color with rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user moves cursor over an element its border and hatch fill will be highlighted with dark red color.

{sample}BCT\_PieDoughnutChart\_08{sample}

### Aquastyle

Since version 7.4.0 you can use so-called “Aquastyle” to color pie charts, set the following to get this effect:

```
  chart.fill("aquastyle");
```

That's how a chart with Aquastyle set looks like: 

{sample}BCT\_PieDoughnutChart\_09{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
<!--Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.-->
To configure data labels and tooltips for all series use {api:anychart.charts.Pie#labels}**.labels()**{api} and {api:anychart.charts.Pie#tooltip}**.tooltip()**{api} methods. These will help you to adjust visual appearance, positioning and format.

### Labels

Labels are text boxes with additional information for presented data. You can tune labels using {api:anychart.charts.Pie#labels}**.labels()**{api} method.
  
  
You can place labels inside or outside pie slices using {api:anychart.ui.Label#position}**.position()**{api} method.

```
  var labels = chart.labels();
  labels.position('outside');
```
  
{sample}BCT\_PieDoughnutChart\_10{sample}
  
The line that joins the label with the slice of the pie is called connector. You can tune connectors visual appearance using {api:anychart.charts.Pie#connectorStroke}**.connectorStroke()**{api} method.

```
  chart.connectorStroke(
    // set 2px thickness and #444 color
    "2 #444",
    // set lines opacity
    1,
    // dashes and gaps settings
    "4 2"
  );
```

You can find more information about lines in [Line Settings tutorial](../Appearance_Settings/Lines_Settings). Here is the pie with tuned connectors.

{sample}BCT\_PieDoughnutChart\_11{sample}



###Tooltips

In this section we will explain how to tune pie tooltip. Method {api:anychart.charts.Pie#tooltip}**.tooltip()**{api} controls tooltip of the pie. 

```
  // get tooltip title
  var tooltip = chart.tooltip();
  
  // set tooltip title text
  tooltip.title("Information");
  
  // set tooltip content
  tooltip.textFormatter(function(){
  
    // get name of each slice
    var name = this.name;
    // get value of each slice
    var value = this.value
    
    // content to show
    return "Chanel: " + name + "\nSales: " + value + "\nPeriod: Year 2003";
  });
```

With the following example let's force tooltip to show detailed description for each pie slice.

{sample}BCT\_PieDoughnutChart\_12{sample}

## Colors

AnyChart uses default colors to colorize data elements of a chart automatically if you have not defined special colors, though it allows you to specify colors for the points.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.charts.Pie#fill}**.fill()**{api} parameter. In the sample below there are some series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_PieDoughnutChart\_13{sample}

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart charting library has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see [Hatch](../Appearance_Settings/Hatch_Fill) tutorial tutorial.
  
  
To demonstrate hatch fill feature we've prepared the following sample. We have pie chart with 6 points. For every point we've applied different hatch fills by setting a hatch type for{api:anychart.charts.Pie#hatchFill}**.hatchFill()**{api} parameter.
  
  
That’s how we did it in our code:

```
  var chart = anychart.pieChart([
    {x: "P1", value: 232, hatchFill: "diagonalcross"},
    {x: "P2", value: 224, hatchFill: "zigzag"},
    {x: "P3", value: 252, hatchFill: "horizontal"},
    {x: "P4", value: 219, hatchFill: "vertical"},
    {x: "P5", value: 169, hatchFill: "dashedbackwarddiagonal"},
    {x: "P6", value: 217, hatchFill: "grid"}
  ]);
```

{sample}BCT\_PieDoughnutChart\_14{sample}
