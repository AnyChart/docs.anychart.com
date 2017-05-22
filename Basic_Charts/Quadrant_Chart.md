{:index 1}
#Quadrant Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Quarters](#quarters)
  * [Crossing](#crossing)
  * [Scales](#scales)
  * [Axes](#axes)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A quadrant chart...

The quadrant chart...

This article explains how to create a basic Quadrant chart as well as configure settings that are specific to the type.

## Quick Start

To create a Quadrant chart, use the {api:anychart#quadrant}anychart.quadrant(){api} chart constructor.

This constructor creates a scatter chart with some predefined settings:
* The chart is framed with two X and Y axes.
* Ticks and labels on the axes are disabled.
* There are no grids.
* The minimum and maximum values of the scales are 0 and 100.
* The right-top and left-bottom quarters are colored.

If you just pass the data to the chart constructor, it creates a Marker series. But you can also create a Marker, Bubble, or Line series explicitly by using one these methods:

{api:anychart.charts.Scatter#marker}marker(){api}
{api:anychart.charts.Scatter#bubble}bubble(){api}
{api:anychart.charts.Scatter#marker}line(){api}

The following sample demonstrates how a basic Quadrant chart is created:

```
// create data
var data = [
  {x: 4, value: 42},
  {x: 13, value: 59},
  {x: 25, value: 68},
  {x: 25, value: 63},
  {x: 44, value: 54},
  {x: 55, value: 58},
  {x: 56, value: 46},
  {x: 60, value: 54},
  {x: 72, value: 73}
];

// create a chart
chart = anychart.quadrant(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Quadrant\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Quadrant chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Each of the supported series types has its own visual settings – see the following articles:

* [Marker Chart](Marker_Chart#appearance)
* [Bubble Chart](Bubble_Chart#appearance)
* [Line Chart](Line_Chart#appearance)

Also, you can learn more from the [Appearance Settings](../Appearance_Settings) section.

In this sample there are three series (Marker, Line, and Bubble) with some of the appearance settings configured:

```
// create the first series (marker) and set the data
var series1 = chart.marker(data_1);

// configure the visual settings of the first series
series1.fill("black", 0.3);
series1.hoverFill("black", 0.3);
series1.selectFill("black", 0.5);
series1.stroke("black", 1);
series1.hoverStroke("black", 2);
series1.selectStroke("black", 4);

// create the second series (line) and set the data
var series2 = chart.line(data_2);

// configure the visual settings of the second series
series2.stroke("#00cc99", 3, "10 5", "round");

// create the third series (bubble) and set the data
var series3 = chart.bubble(data_3);

// configure the visual settings of the third series
series3.fill("#0066cc", 0.3);
series3.hoverFill("#0066cc", 0.3);
series3.selectFill("#0066cc", 0.5);
series3.stroke("#0066cc");
series3.hoverStroke("#0066cc", 2);
series3.selectStroke("#0066cc", 4);
```

{sample}BCT\_Quadrant\_Chart\_02{sample}

### Quarters

Each Quadrant chart has four quarters, which can be configured separately. Use these methods to refer to them:

* {api:anychart.core.utils.QuarterSettings#leftBottom}leftBottom(){api}
* {api:anychart.core.utils.QuarterSettings#leftTop}leftTop(){api}
* {api:anychart.core.utils.QuarterSettings#rightBottom}rightBottom(){api}
* {api:anychart.core.utils.QuarterSettings#rightTop}rightTop(){api}

The following methods configure visual settings of quartes:

* {api:anychart.core.utils.Quarter#fill}fill(){api} and {api:anychart.core.utils.Quarter#stroke}stroke(){api} set the fill and stroke
* {api:anychart.core.utils.Quarter#bottomStroke}bottomStroke(){api}, {api:anychart.core.utils.Quarter#leftStroke}leftStroke(){api}, {api:anychart.core.utils.Quarter#rightStroke}rightStroke(){api}, {api:anychart.core.utils.Quarter#topStroke}topStroke(){api} set strokes on particular sides
* {api:anychart.core.utils.Quarter#cornerType}cornerType(){api} and {api:anychart.core.utils.Quarter#corner}corner(){api} set the type and radius of corners

The sample below shows how to configure the fill and corners:

```
// configure quarters
chart.quarters(
        {
            rightTop: {
                fill: "#ccfff2",
                corners: 30,
                cornerType: "cut"
            },
            rightBottom: {
                fill: "#e6f9ff",
                corners: 30,
                cornerType: "cut"
            },
            leftTop: {
                fill: "#fff9e6",
                corners: 30,
                cornerType: "cut"
            },
            leftBottom: {
                fill: "#f9e6ff",
                corners: 30,
                cornerType: "cut"
            },
        }
);
```

{sample}BCT\_Quadrant\_Chart\_03{sample}

You can also configure titles, margins, paddings, and labels of quarters (see the [Labels](#labels) section of this article to find more information about configuring lables):

* {api:anychart.core.utils.Quarter#title}title(){api}
* {api:anychart.core.utils.Quarter#margin}margin(){api}
* {api:anychart.core.utils.Quarter#padding}padding(){api}
* {api:anychart.core.utils.Quarter#label}label(){api}

The following sample shows how to set titles:

```
// configure quarters
chart.quarters(
        {
            rightTop: {
                title: {
                    text: "Right Top",
                    fontSize: "24",
                    fontWeight: "bold",
                    fontColor: "#fa8072"
                }
            },
            rightBottom: {
                title: {
                    text: "Right Bottom",
                    fontSize: "24",
                    fontWeight: "bold",
                    fontColor: "#72fa80"
                }
            },
            leftTop: {
                title: {
                    text: "Left Top",
                    fontSize: "24",
                    fontWeight: "bold",
                    fontColor: "#72fa80"
                }
            },
            leftBottom: {
                title: {
                    text: "Left Bottom",
                    fontSize: "24",
                    fontWeight: "bold",
                    fontColor: "#fa8072"
                }
            },
        }
);
```

{sample}BCT\_Quadrant\_Chart\_04{sample}

### Crossing

To configure the intersecting lines ("crossing") in the center of a Quadrant chart, use the {api:anychart.core.utils.Crossing#stroke}stroke(){api} method:

```
// configure the crossing
chart.crossing().stroke("grey", 3, "7 3", "round");3
```

{sample}BCT\_Quadrant\_Chart\_05{sample}

### Scales

In Quadrant charts data do not affect scales: the data falling outside scales just are not displayed.

By default, the minimum and maximum values of the X and Y scales are 0 and 100, but you can change these settings (read more in the [Scales](../Axes_and_Grids/Scales) article):

```
// configure scales
chart.yScale()
        .minimum(-100)
        .maximum(100);
chart.xScale()
        .minimum(-100)
        .maximum(100);
```

Please note that quarters always divide scales in two parts, no matter what the minimum and maximum values are. So, the lines in the center of the chart ("crossing") intersect in the <a href="https://en.wikipedia.org/wiki/Origin_(mathematics)" target="_blank">origin</a> only in one case: if the minimum and maximum values are of the same absolute value, like in the sample code above. You can go to the [Axes](#axes) section to see how it looks like.

### Axes

The Quadrant chart is framed by two X and Y axes, which can be referred to by indexes (0 and 1). By default, ticks, labels, and titles are disabled, but you can enable them – read more in the [Axes and Grids](../Axes_and_Grids) article:

```
// configure axes
chart.xAxis(0, {ticks: true, labels: true});
chart.xAxis(1, {ticks: true, labels: true});
chart.yAxis(0, {ticks: true, labels: true});
chart.yAxis(1, {ticks: true, labels: true});
```
{sample}BCT\_Quadrant\_Chart\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

Labels of series are configured according to the rules of the series type. For example, see the [Maker Chart](Marker_Chart#labels) article.

You can also configure labels of quartes: use the {api:anychart.core.utils.Quarter#label}label(){api} method. A quarter can have more than one label.

The sample below shows how to create and adjust quarter labels:

```
// create a label on the left-top quarter
var labelLTop = chart.quarters().leftTop().label();
labelLTop.text("1");
labelLTop.fontColor("grey");
labelLTop.fontWeight("bold");
labelLTop.fontSize(16);
labelLTop.position("rightBottom");
labelLTop.offsetX(-20);
labelLTop.offsetY(-20);

// create a label on the right-top quarter
var labelRTop = chart.quarters().rightTop().label();
labelRTop.text("2");
labelRTop.fontColor("grey");
labelRTop.fontWeight("bold");
labelRTop.fontSize(16);
labelRTop.position("leftBottom");
labelRTop.offsetX(20);
labelRTop.offsetY(-20);

// create the first label on the left-bottom quarter
var labelLBottom1 = chart.quarters().leftBottom().label(0);
labelLBottom1.text("3");
labelLBottom1.fontColor("grey");
labelLBottom1.fontWeight("bold");
labelLBottom1.position("rightTop");
labelLBottom1.fontSize(16);
labelLBottom1.offsetX(-20);
labelLBottom1.offsetY(20);

// create the second label on the left-bottom quarter
var labelLBottom2 = chart.quarters().leftBottom().label(1);
labelLBottom2.useHtml(true);
labelLBottom2.text("Important / Not Important &#8594;");
labelLBottom2.position("leftBottom");
labelLBottom2.offsetX(-20);
labelLBottom2.offsetY(-100);
labelLBottom2.rotation(-90);

// create the third label on the left-bottom quarter
var labelLBottom2 = chart.quarters().leftBottom().label(3);
labelLBottom2.useHtml(true);
labelLBottom2.text("Urgent / Not Urgent &#8594;");
labelLBottom2.position("leftBottom");
labelLBottom2.offsetX(80);
labelLBottom2.offsetY(20);

// create a label on the right-bottom quarter
var labelRBottom = chart.quarters().rightBottom().label();

labelRBottom.text("4");
labelRBottom.fontColor("grey");
labelRBottom.fontWeight("bold");
labelRBottom.fontSize(16);
labelRBottom.position("leftTop");
labelRBottom.offsetX(20);
labelRBottom.offsetY(20);
```

{sample}BCT\_Quadrant\_Chart\_07{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.