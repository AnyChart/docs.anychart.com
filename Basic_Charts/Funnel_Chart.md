{:index 1}
#Funnel Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Head](#head)
  * [Neck](#neck)
  * [Appearance](#appearance)
  * [Labels](#labels)
   * [Connectors](#connectors)
   * [Position](#position)
   * [Overlapping](#overlapping)
  * [Tooltips](#tooltips)

## Overview

Funnel charts are so-called Accumulation charts and they show percentage ratio. Funnel charts are often used to represent stages in a sales process and show the amount of potential revenue for each stage. This type of chart can also be useful in identifying potential problem areas in an organization’s sales processes. A Funnel chart is somewhat similar to a [Waterfall chart](Waterfall_Chart).

This article explains how to create a basic Funnel chart as well as configure settings that are specific to the type. The table below gives a brief overview of the Funnel chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Funnel}anychart.charts.Funnel{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[name, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[NO](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Pie](Pie_Chart)</td></tr>
<tr><td></td><td>[Pyramid](Pyramid_Chart)</td></tr>
<tr><td></td><td>[Stacked](Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="http://www.anychart.com/chartopedia/chart-types/funnel-chart/" target="_blank">Chartopedia: Funnel Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Funnel chart, use the {api:anychart#funnel}anychart.funnel(){api} chart constructor. If you pass the data to this chart constructor, it will create a Funnel series. Another way to create the Funnel Chart is to call the {api:anychart.charts.Funnel}funnel(){api} method. Funnel charts does not have series due to its specific, like Pie or Pyramid charts.


The following sample demonstrates how a basic Funnel chart is created:

```
var data = [
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
];

chart = anychart.funnel(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Funnel\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Head

Head (or base) is the upper part of a Funnel, where the difference between areas is significant (in percentage value) and is demonstrated by areas' size. To adjust the width of the Funnel Head, use the {api:anychart.charts.Funnel#baseWidth}baseWidth(){api} method.

```
// set the base width
chart.baseWidth("50%");
```

{sample}BCT\_Funnel\_Chart\_02{sample}


### Neck

Neck is a lower part of a Funnel. All values under the neck look like a Stacked Column, which means that the difference between them is not really important. The default value of the Neck height is 25%. The {api:anychart.charts.Funnel#neckWidth}neckWidth(){api} and {api:anychart.charts.Funnel#width}width(){api} will help to adjust the neck width, and the {api:anychart.charts.Funnel#neckHeight}neckHeight(){api} method is used for setting the Funnel chart neck's height.

```
// adjust the funnels neck
chart.neckWidth("20%");
chart.neckHeight("35%");
```

{sample}BCT\_Funnel\_Chart\_03{sample}

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Funnel Chart:

* {api:anychart.charts.Funnel#fill}fill(){api}, {api:anychart.charts.Funnel#hatchFill}hatchFill(){api}, {api:anychart.charts.Funnel#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.charts.Funnel#hoverFill}hoverFill(){api}, {api:anychart.charts.Funnel#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.charts.Funnel#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.charts.Funnel#selectFill}selectFill(){api}, {api:anychart.charts.Funnel#selectHatchFill}selectHatchFill(){api}, {api:anychart.charts.Funnel#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there is a Funnel chart with some of the appearance settings configured:

```
// adjust appearance
chart.fill("#DEB887");
chart.hoverFill("#FFEBCD");
chart.selectFill("#A0522D");
chart.hatchFill("forwardDiagonal");
chart.hoverHatchFill("#backwardDiagonal");
chart.selectHatchFill("diagonalCross");
chart.stroke("#fff");
chart.hoverStroke("#fff", 2);
chart.selectStroke("fff", 4);
```

{sample}BCT\_Funnel\_Chart\_04{sample}

Note that when you set colors through the methods, it is not possible to set different colors to the points. In this case, use the dataset, so you can adjust any settings you need for each point particularly.

```
var data = [
  {name: "January", value: 10000, fill: "#1E90FF", selectFill: "#00008B", stroke: "#fff", selectStroke: "#00008B", hatchFill: "diagonalCross"},
  {name: "February", value: 12000, fill: "#00BFFF", selectFill: "#1E90FF", stroke: "#fff", selectStroke: "#00008B"},
  {name: "March", value: 18000, fill: "#87CEFA", selectFill: "#00BFFF", stroke: "#fff", selectStroke: "#00008B", hatchFill: "diagonalCross"},
  {name: "April", value: 11000, fill: "#B0E0E6", selectFill: "#87CEFA", stroke: "#fff", selectStroke: "#00008B"},
  {name: "May", value: 9000, fill: "#7FFFD4 0.5", selectFill: "#B0E0E6", stroke: "#fff", selectStroke: "#00008B", hatchFill: "diagonalCross"}
];
```

{sample}BCT\_Funnel\_Chart\_05{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

#### Connectors

The line that joins a label with a particular funnel point is called a connector. Tune connectors' visual appearance with the {api:anychart.charts.Funnel#connectorStroke}connectorStroke(){api} method. 

```
chart.connectorStroke({
  // set thickness of the connectors
  thickness: 2,
  // set color of the connectors
  color: "#444",
  // set dashed connectors. Dashes are 4px and gaps are 2px
  dash: "4 2"
});
```

Find more information about lines in [Line Settings tutorial](../Appearance_Settings/Lines_Settings). Here is the funnel with tuned connectors.

{sample}BCT\_Funnel\_Chart\_06{sample}

**Note:** to hide connectors, set **null** value for {api:anychart.charts.Funnel#connectorStroke}connectorStroke(){api} method.


#### Position

Position of the labels is controlled by the {api:anychart.core.ui.LabelsFactory#position}position(){api} method. There are five acceptable values for funnel labels:
* **inside** - place labels inside each funnel point.
* **outsideLeftInColumn** - place labels to the left of the funnel and align them in a column.
* **outsideRightInColumn** - place labels to the right of the funnel and align them in a column.
* **outsideLeft** - place labels to the left of the funnel.
* **outsideRight** - place labels to the right of the funnel.

If you use **outsideLeft** or **outsideRight**, it becomes possible to adjust length of labels connectors. Use {api:anychart.charts.Funnel#connectorLength}connectorLength(){api} parameter to set custom length for all labels connectors.

```
// place labels to the right
var labels = chart.labels();
labels.position("outsideRight");

// set 45px connectors length
chart.connectorLength(45);
```

{sample}BCT\_Funnel\_Chart\_07{sample}

The content of the labels is adjusted with the {api:anychart.ui.LabelsFactory#textFormatter}textFormatter(){api} method. Read more about text formatting in the [Labels Text Formatting article](../Common_Settings/Labels#format_text).


#### Overlapping

After adjusting content of the funnel labels some of them can overlap others. To control or prevent overlapping use the {api:anychart.charts.Funnel#overlapMode}overlapMode(){api} method. Sample below demonstrates labels with "allowed" overlapping state.

```
// allow labels overlapping
chart.overlapMode("allowOverlap");
```

{sample}BCT\_Funnel\_Chart\_08{sample}


### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.













* [Overview](#overview)
* [Chart](#chart)
* [Neck and Head](#neck_and_head)
* [Padding](#padding)
* [Visualization](#visualization)
* [Labels](#labels)
 * [Connectors](#connectors)
 * [Position](#position)
 * [Overlapping](#overlapping)
* [Tooltip](#tooltip)
* [Markers](#markers)
* [Colors](#colors)
* [Hatch Fills](#hatch_fills)
* [Samples](#samples)

## Overview

Funnel charts are so-called Accumulation charts and they show percentage ratio. Funnel charts are often used to represent stages in a sales process and show the amount of potential revenue for each stage. This type of chart can also be useful in identifying potential problem areas in an organization’s sales processes. A funnel chart is somewhat similar to a [stacked](Stacked/Overview) column chart.

## Chart

To create Funnel chart with AnyChart charting framework you have to set {api:anychart#funnel}funnel(){api} method.

```
var chart = anychart.funnel();
```

Let's take a look at the sample data set that shows the number of different genres sold in local bookstore «Nerds Inc.» in 2005.


<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Genre</b></th>
<th width="88"><b>Quantity</b></th>
</tr>
<tr>
<td>Fantasy</td>
<td>637166</td>
</tr>
<tr>
<td>Science Fiction</td>
<td>721630</td>
</tr>
<tr>
<td>Detective</td>
<td>148662</td>
</tr>
<tr>
<td>Classics</td>
<td>78662</td>
</tr>
<tr>
<td>Textbooks</td>
<td>90000</td>
</tr>
</tbody></table>

Now we need to convert this data table into the format that can be used by AnyChart. Here is a snippet with the data in acceptable format.

```
var chart = anychart.funnel([
  {name: "Fantasy", value: 637166},
  {name: "Science Fiction", value: 721630},
  {name: "Detective", value: 148662},
  {name: "Classics", value: 78662},
  {name: "Textbooks", value: 90000}
]);
```

You can see the funnel chart with this configuration below.

{sample}BCT\_FunnelChart\_01{sample}

## Neck and Head

As you can see, any funnel consist of two parts: the higher part which called head or base and the lower part which called neck. Size of these parts can be tuned separately. Using {api:anychart.charts.Funnel#neckWidth}neckWidth(){api} and {api:anychart.charts.Funnel#baseWidth}baseWidth(){api} methods along with {api:anychart.charts.Funnel#width}width(){api} method gives a full control over the width of the funnel. Height of the neck can be adjusted using {api:anychart.charts.Funnel#neckHeight}neckHeight(){api} method and the height of the whole funnel can be set using {api:anychart.charts.Funnel#neckWidth}height(){api} method.

```
var chart = anychart.funnel(data);

// set 100 percents height of the funnel
chart.height("100%");
// set 100 percents width of the funnel
chart.width("100%");
// set neck width 40px
chart.neckWidth(40);
// set neck height equal to half of the funnel's height
chart.neckHeight("50%");
// set head width 170px
chart.baseWidth(170);
```

As you can see, you can set fixed or flexible size for any method that controls funnel size. Use number as a value for a method to define fixed size and string value to set size as a percentage of a container's size. Let's apply settings from above to a funnel.

{sample}BCT\_FunnelChart\_02{sample}

## Padding

As you can see, each part of a funnel is separated from another with some space. The space between each part of funnel chart is controlled by a {api:anychart.charts.Funnel#pointsPadding}pointsPadding(){api} parameter. Next sample of the funnel chart has no spacing.

```
// disable spacing between parts of the chart
chart.pointSpacing(0);
```

Here is how the funnel chart without spacing looks like.

{sample}BCT\_FunnelChart\_03{sample}

## Visualization

In this section we will describe main parts of funnel chart visualization and ways to adjust it. Let's look how to apply a simple style to the chart.

```
// define chart type and set data
var chart = anychart.funnel(data);
  
// set chart inner color
chart.fill("gold");
// chart inner color on hover
chart.hoverFill("darkred");
// chart stroke
chart.stroke("darkred");
// chart stroke on hover
chart.hoverStroke("gold");
// set hatch type and color
chart.hatchFill("diagonalbrick", "darkred");
// adjust hatch type and color on hover
chart.hoverHatchFill("diagonalbrick", "gold");
```

Using such settings we've created a funnel colored in Gold, dark red border and set DiagonalBrick hatch fill. Also, we've defined that when the funnel is hovered it's hatch will be highlighted with gold and the chart will be filled with dark red. Now let's apply this style to the chart:

{sample}BCT\_FunnelChart\_04{sample}

## Labels
 
Labels of a funnel are text boxes with additional information for presented data. You can tune labels using {api:anychart.charts.Funnel#labels}labels(){api} method.

### Connectors

The line that joins a label with a particular funnel point is called connector. You can tune connectors visual appearance using {api:anychart.charts.Funnel#connectorStroke}connectorStroke(){api} method. 

```
var chart = anychart.funnel(data);

chart.connectorStroke({
  // set thickness of the connectors
  thickness: 2,
  // set color of the connectors
  color: "#444",
  // set dashed connectors. Dashes are 4px and gaps are 2px
  dash: "4 2"
});
```

You can find more information about lines in [Line Settings tutorial](../Appearance_Settings/Lines_Settings). Here is the funnel with tuned connectors.

{sample}BCT\_FunnelChart\_05{sample}

### Position

Position of the labels is controlled by {api:anychart.core.ui.LabelsFactory#position}position(){api} method. There are five acceptable values for funnel labels:
* **inside** - place labels inside each funnel point.
* **outsideLeftInColumn** - place labels to the left of the funnel and align them in a column.
* **outsideRightInColumn** - place labels to the right of the funnel and align them in a column.
* **outsideLeft** - place labels to the left of the funnel.
* **outsideRight** - place labels to the right of the funnel.

If you are using **outsideLeft** or **outsideRight** you can adjust length of labels connectors. Use {api:anychart.charts.Funnel#connectorLength}connectorLength(){api} parameter to set custom length for all labels connectors.

```
var chart = anychart.funnel(data);

// place labels to the right
var labels = chart.labels();
labels.position("outsideRight");

// set 45px connectors length
chart.connectorLength(45);
```

Using these settings we have set each label 45px to the right from the each funnel point. Using {api:anychart.ui.LabelsFactory#textFormatter}textFormatter(){api} method we can adjust content for the labels.

{sample}BCT\_FunnelChart\_06{sample}

### Overlapping

After adjusting content of the funnel labels some of them moved to prevent overlapping. You can control overlapping using {api:anychart.charts.Funnel#overlapMode}overlapMode(){api}. Sample below demonstrates labels with allowed overlapping state.

```
var chart = anychart.funnel(data);
// allow labels overlapping
chart.overlapMode("allowOverlap");
```

**Note:** if you want to hide connectors set **null** value for {api:anychart.charts.Funnel#connectorStroke}connectorStroke(){api} method.

{sample}BCT\_FunnelChart\_07{sample}

## Tooltip

In this section we will explain how to tune funnel tooltip. {api:anychart.charts.Funnel#tooltip}tooltip(){api} method controls tooltip of the funnel. With the following example let's force tooltip to show detailed description of the funnel.

{sample}BCT\_FunnelChart\_08{sample}

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including columns.
  
  
In the sample below we take single-series data described above and mark the highest column in series with a "Star5" of the "Gold" color.
  
  
To make marker visually appealing we set its size to 12 pixels in normal state, and 15px while hovered.

```
var chart = anychart.funnel([
  {name: "Fantasy", value: 637166},
  {
    name: "Science Fiction",
    value: 721630,
    // marker settings
    marker:{
      // enable marker
      enabled: true,
      // marker type
      type:"star5",
      // marker inner color
      fill:"gold",
      // marker size
      size: 12,
      // marker position
      position: "center",
      // marker anchor
      anchor: "center"
    },
    hoverMarker: {
      // marker size if mouse is over
      size: 15
    }
  },
  {name: "Detective", value: 148662},
  {name: "Classics", value: 78662},
  {name: "Textbooks", value: 90000}
]);
```

And here is a result - it's easy to notice that Science Fiction is the most popular genre and we are showing this on the chart:

{sample}BCT\_FunnelChart\_09{sample}

## Colors

Let's demonstrate how to apply different colors to different parts of funnel. To apply the color to the exact point we need to set the fill parameter. In the sample below each point of the funnel chart has custom color.

{sample}BCT\_FunnelChart\_10{sample}

## Hatch Fills

AnyChart html5 charting solution allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see [Hatch tutorial](../Appearance_Settings/Hatch_Fill).
  
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have funnel chart with 10 points in it. For every point we've applied different hatch fills parameter. That’s how we did it in our code:

```
  var chart = anychart.pieChart([
    // point value   hatch fill type
    {value: 232,    hatchFill: "diagonalcross"},
    {value: 224,    hatchFill: "zigzag"},
    {value: 252,    hatchFill: "horizontal"},
    {value: 219,    hatchFill: "vertical"},
    {value: 169,    hatchFill: "dashedbackwarddiagonal"},
    {value: 217,    hatchFill: "grid"},
    {value: 175,    hatchFill: "dashedforwarddiagonal"},
    {value: 199,    hatchFill: "dashedhorizontal"},
    {value: 297,    hatchFill: "plaid"},
    {value: 317,    hatchFill: "weave"}
  ]);
```

{sample}BCT\_FunnelChart\_11{sample}

## Samples

You can see a lot of other samples in [AnyChart Web Accumulation Charts Gallery](http://anychart.com/products/anychart/gallery/Accumulation_Charts/).
