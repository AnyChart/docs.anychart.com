#Pyramid Chart

* [Overview](#overview)
* [Chart](#chart)
* [Base Position](#base_position)
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

## Overview

Pyramid chart is a kind of [Funnel chart](../Basic_Charts_Types/Funnel_Chart) that presents data in the similar way the funnel does. The main different of the pyramid chart from the funnel is an absence of the neck part. 

## Chart

To create Pyramid chart with AnyChart you have to set {api:anychart#pyramid}**.pyramid()**{api} method.

```
  var chart = anychart.pyramid();
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
  var chart = anychart.pyramid([
    {name: "Fantasy", value: 637166},
    {name: "Science Fiction", value: 721630},
    {name: "Detective", value: 148662},
    {name: "Classics", value: 78662},
    {name: "Textbooks", value: 90000}
  ]);
```

You can see the pyramid chart with this configuration below.

{sample}BCT\_PyramidChart\_01{sample}

## Base

Base of a pyramid is the largest horizontal line of the pyramid chart. In this section we will quickly demonstrate how we can set custom base width and invert base position.

### Size

You can set base size in pixels or in percentage ratio. Use string value for {api:anychart.charts.Pyramid#baseWidth}**.baseWidth()**{api} to define flexible base size in percentage ratio.

```
  var chart = anychart.pyramid(data);
  
  // set base width to 50% of the container width
  chart.basWidth("50%")
```

{sample}BCT\_PyramidChart\_02{sample}

*Note:* Define value of {api:anychart.charts.Pyramid#baseWidth}**.baseWidth()**{api} using numbers to set fixed size of the base.

## Position

By default, base of the pyramid is placed at the bottom of the chart. Use {api:anychart.charts.Pyramid#reversed}**.reversed()**{api} method to turn the pyramid upside down.

```
  var chart = anychart.pyramid(data);

  // upend the pyramid
  chart.reversed(true);
```

Here is how reversed pyramid looks like:

{sample}BCT\_PyramidChart\_03{sample}

## Padding

As you can see, each part of a pyramid is separated from another with some space. The space between each part of pyramid chart is controlled by a {api:anychart.charts.Pyramid#pointsPadding}**.pointsPadding()**{api} parameter. Next sample of the pyramid chart has no spacing.

```
  // disable spacing between parts of the chart
  chart.pointSpacing(0);
```

Here is how the pyramid chart without spacing looks like.

{sample}BCT\_PyramidChart\_04{sample}

## Visualization

In this section we will describe main parts of pyramid chart visualization and ways to adjust it. Let's look how to apply a simple style to the chart.

```
  // define chart type and set data
  var chart = anychart.pyramid(data);
  
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

Using such settings we've created a pyramid colored in Gold, dark red border and set DiagonalBrick hatch fill. Also, we've defined that when the pyramid is hovered it's hatch will be highlighted with gold and the chart will be filled with dark red. Now let's apply this style to the chart:

{sample}BCT\_PyramidChart\_05{sample}

## Labels
 
Labels of a pyramid are text boxes with additional information for presented data. You can tune labels using {api:anychart.charts.Pyramid#labels}**.labels()**{api} method.

### Connectors

THe line that joins a label with a particular pyramid point is called connector. You can tune connectors visual appearance using {api:anychart.charts.Pyramid#connectorStroke}**.connectorsStroke()**{api} method. 

```
  var chart = anychart.pyramid(data);

  chart.connectorStroke({
    // set thickness of the connectors
    thickness: 2,
    // set color of the connectors
    color: '#444',
    // set dashed connectors. Dashes are 4px and gaps are 2px
    dash: '4 2'
  });
```

You can find more information about lines in [Line Settings tutorial](../Appearance_Settings/Lines_Settings). Here is the pyramid with tuned connectors.

{sample}BCT\_PyramidChart\_06{sample}

### Position

Position of the labels is controlled by {api:anychart.core.ui.LabelsFactory#position}**.position()**{api} method. There are five acceptable values for pyramid labels:
* **inside** - place labels inside each pyramid point.
* **outsideLeftInColumn** - place labels to the left of the pyramid and align them in a column.
* **outsideRightInColumn** - place labels to the right of the pyramid and align them in a column.
* **outsideLeft** - place labels to the left of the pyramid.
* **outsideRight** - place labels to the right of the pyramid.

If you are using **outsideLeft** or **outsideRight** you can adjust length of labels connectors. Use {api:anychart.charts.Pyramid#connectorLength}**.connectorsLength()**{api} parameter to set custom length for all labels connectors.

```
  var chart = anychart.pyramid(data);
  
  chart.labels()
    .position('outsideRight');  // place labels to the right
    
  chart.connectorLength(45);    // set 45px connectors length
```

Using these settings we have set each label 45px to the right from the each pyramid point. Using {api:anychart.ui.LabelsFactory#textFormatter}**.textFormatter()**{api} method we can adjust content for the labels.

{sample}BCT\_PyramidChart\_07{sample}

### Overlapping

After adjusting content of the pyramid labels some of them moved to prevent overlapping. You can control overlapping using {api:anychart.charts.Pyramid#overlapMode}**.overlapMode()**{api}. Sample below demonstrates labels with allowed overlapping state.

```
  var chart = anychart.pyramid(data);
  // allow labels overlapping
  chart.overlapMode("allowOverlap");
```

*Note:* if you want to hide connectors set **null** value for {api:anychart.charts.Pyramid#connectorStroke}**.connectorsStroke()**{api} method.

{sample}BCT\_PyramidChart\_08{sample}

## Tooltip

In this section we will explain how to tune pyramid tooltip. Method {api:anychart.charts.Pyramid#tooltip}**.tooltip()**{api} controls tooltip of the pyramid. With the following example let's force tooltip to show detailed description of the pyramid.

{sample}BCT\_PyramidChart\_09{sample}

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including columns.
  
  
In the sample below we take single-series data described above and mark the highest column in series with a "Star5" of the "Gold" color.
  
  
To make marker visually appealing we set its size to 12 pixels in normal state, and 15px while hovered.

```
  var chart = pyramid([
    {name: "Fantasy", value: 637166},
    {
      name: "Science Fiction", 
      value: 721630,
       // marker settings
      marker:{
       // enable marker
        enabled: true,
         // marker type
        type: "star5",
         // marker inner color
        fill: "gold",
         // marker size
        size: 12,
         // marker position
        position: "center",
         // marker anchor
        anchor: "center"
      },
      // marker size if mouse is over
      hoverMarker: {
        size: 15
      }
    },
    {name: "Detective", value: 148662},
    {name: "Classics", value: 78662},
    {name: "Textbooks", value: 90000}
  ]);
```

And here is a result - it's easy to notice that Science Fiction is the most popular genre and we are showing this on the chart:

{sample}BCT\_PyramidChart\_10{sample}

## Colors

Let's demonstrate how to apply different colors to different parts of pyramid. To apply the color to the exact point we need to set the fill parameter. In the sample below each point of the pyramid chart has custom color.

{sample}BCT\_PyramidChart\_11{sample}

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see [Hatch tutorial](../Appearance_Settings/Hatch_Fill). 
  
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have pyramid chart with 10 points in it. For every point we've applied different hatch fills parameter. That’s how we did it in our code:

```
  var chart = anychart.pyramid([
  // point value    hatch fill type
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

{sample}BCT\_PyramidChart\_12{sample}