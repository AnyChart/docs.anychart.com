{:index 2}
#Pyramid Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Base](#base)
  * [Orientation](#orientation)
  * [Padding](#padding)
  * [Labels](#labels)
   * [Connectors](#connectors)
   * [Position](#position)
   * [Overlapping](#overlapping)
  * [Tooltips](#tooltips)


## Overview

Pyramid chart is a kind of [Funnel chart](Funnel_Chart) that presents data in the similar way the funnel does. The main different of the pyramid chart from the funnel is an absence of the neck part. 

This article explains how to create a basic Pyramid Chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Pyramid chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Pyramid}anychart.charts.Pyramid{api}</td></tr>
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
<tr><td></td><td>[Funnel](Funnel_Chart)</td></tr>
<tr><td></td><td>[Pie](Pie_Chart)</td></tr>
<tr><td></td><td>[Stacked](Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/pyramid-chart/" target="_blank">Chartopedia: Pyramid Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Pyramid Chart, use the {api:anychart#pyramid}anychart.pyramid(){api} chart constructor. Another way to create a Pyramid Chart is to use the {api:anychart.charts.Pyramid}anychart.charts.Pyramid{api} class constructor.

The following sample demonstrates how a basic Pyramid chart is created:

```
chart = anychart.pyramid([
  {name: "Fantasy", value: 637166},
  {name: "Science Fiction", value: 721630},
  {name: "Detective", value: 148662},
  {name: "Classics", value: 78662},
  {name: "Textbooks", value: 90000}
]);

// draw chart
chart.container("container");
chart.draw();
```

{sample}BCT\_Pyramid\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Pyramid Chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Area series:

* {api:anychart.charts.Pyramid#fill}fill(){api}, {api:anychart.charts.Pyramid#hatchFill}hatchFill(){api}, {api:anychart.charts.Pyramid#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.charts.Pyramid#hoverFill}hoverFill(){api}, {api:anychart.charts.Pyramid#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.charts.Pyramid#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.charts.Pyramid#selectFill}selectFill(){api}, {api:anychart.charts.Pyramid#selectHatchFill}selectHatchFill(){api}, {api:anychart.charts.Pyramid#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there is a Pyramid Chart with some of the appearance settings configured:

```
// edit appearance settings
chart.fill("#8B4513", 0.6);
chart.hoverFill("#8B4513", 0.3);
chart.selectFill("#8B4513", 0.8);
chart.stroke("#fff", 1);
chart.hoverStroke("#fff", 2);
chart.selectStroke("#fff", 3);
```

{sample}BCT\_Pyramid\_Chart\_02{sample}

**Note**: setting colors for the chart does not visually separate blocks between each other. So, there is another way to set colors for the pyramid blocks: use the dataset and set the filling and stroking colors directly to each block. Notice that it is not necessary to adjust all appearance settings for a point.

```
chart = anychart.pyramid([
  {name: "Fantasy", value: 637166},
  {name: "Science Fiction", value: 721630, fill: "#1976d2", selectFill: "#1976d2", hatchFill: "backwardDiagonal", hoverHatchFill:"forwardDiagonal", selectHatchFill: "diagonalCross", stroke: "#455a64"},
  {name: "Detective", value: 148662},
  {name: "Classics", value: 78662},
  {name: "Textbooks", value: 90000}
]);
```

{sample}BCT\_Pyramid\_Chart\_03{sample}

### Base

The base of a pyramid is the largest horizontal line of the pyramid chart. In this section, we will quickly demonstrate how we can set the custom base width and invert base position.

You can set base size in pixels or in percentage ratio. Use string value for {api:anychart.charts.Pyramid#baseWidth}baseWidth(){api} to define flexible base size in percentage ratio.

```
// set base width to 50% of the container width
chart.baseWidth("50%")
```

{sample}BCT\_Pyramid\_Chart\_04{sample}

*Note:* Define an integer value of {api:anychart.charts.Pyramid#baseWidth}baseWidth(){api} to set fixed size of the base.


### Orientation

By default, the base of the pyramid is placed at the bottom of the chart. Use the {api:anychart.charts.Pyramid#reversed}reversed(){api} method to turn the pyramid upside down.

```
// turn the pyramid upside-down
chart.reversed(true);
```

Here is how reversed pyramid looks like:

{sample}BCT\_Pyramid\_Chart\_05{sample}


### Padding

As you can see, each part of a pyramid is separated from another with some space. The space between each part of pyramid chart is controlled by a {api:anychart.charts.Pyramid#pointsPadding}pointsPadding(){api} parameter. 

```
// set space between pyramid blocks
chart.pointsPadding(5);
```

Here is how the pyramid chart with a significant spacing looks like.

{sample}BCT\_Pyramid\_Chart\_06{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

#### Connectors

The line that joins a label with a particular pyramid point is called a connector. You can tune connectors visual appearance using the {api:anychart.charts.Pyramid#connectorStroke}connectorsStroke(){api} method. 

```
chart.connectorStroke({
  // set thickness of the connectors
  thickness: 2,
  // set color of the connectors
  color: '#444',
  // set dashed connectors. Dashes are 4px and gaps are 2px
  dash: '4 2'
});
```

{sample}BCT\_Pyramid\_Chart\_07{sample}

Find more information about lines in [Line Settings tutorial](../Appearance_Settings/Lines_Settings).

*Note:* if you want to hide connectors set the **null** value for {api:anychart.charts.Pyramid#connectorStroke}connectorsStroke(){api} method.

#### Position

The position of the labels is controlled by the {api:anychart.core.ui.LabelsFactory#position}position(){api} method. There are five acceptable values for pyramid labels:
* **inside** - place labels inside each pyramid point.
* **outsideLeftInColumn** - place labels to the left of the pyramid and align them in a column.
* **outsideRightInColumn** - place labels to the right of the pyramid and align them in a column.
* **outsideLeft** - place labels to the left of the pyramid.
* **outsideRight** - place labels to the right of the pyramid.

If you use **outsideLeft** or **outsideRight** it will be possible to adjust the length of labels connectors. Use {api:anychart.charts.Pyramid#connectorLength}connectorsLength(){api} parameter to set custom length for all labels connectors.

```
// change the labels position
chart.labels().position('outsideRight');  // place labels to the right    
chart.connectorLength(45);    // set 45px connectors length
```

These settings set each label's position as 45px to the right from each pyramid point. The {api:anychart.core.ui.LabelsFactory#format}format(){api} method is to be used for adjusting the labels' content.

```
// format the labels text
chart.labels().format("{%name}: {%Value}");
```

{sample}BCT\_Pyramid\_Chart\_08{sample}

#### Overlapping

After adjusting the content of the pyramid labels some of them moved to prevent overlapping. You can control overlapping using {api:anychart.charts.Pyramid#overlapMode}overlapMode(){api}. The code sample below demonstrates setting labels with overlapping allowed.

```
// allow labels overlapping
chart.overlapMode("allowOverlap");
```


### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a chart point is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

