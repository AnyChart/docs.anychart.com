{:index 2}
# Basic Settings

## Overview

* (?) The legend is defined as an instance of the {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api} class.
* [Stock Charts (Legend)](../../Stock_Charts/Legend)
* (?) color range (color legend) (но куда ссылаться?)

## Default Legend

### Enabling

Most of the chart types require you to enable the legend manually. But there are some exceptions, for example the following types: [Pie](../../Basic_Charts/Pie_Chart), [Doughnut](../../Basic_Charts/Doughnut_Chart), [Funnel](../../Basic_Charts/Funnel_Chart), [Pyramid](../../Basic_Charts/Pyramid_Chart), [Venn](../../Basic_Charts/Venn_Diagram), [Waterfall](../../Basic_Charts/Waterfall_Chart). (?)

To enable / disable the legend, pass `true` / `false` to the **legend()** method of the chart – for example, with Cartesian charts you should use {api:anychart.charts.Cartesian#legend}legend(){api}:

```
// create a chart
var chart = anychart.line();

// enable the legend
chart.legend(true);
```

You can also pass `true` / `false` to the {api:anychart.core.ui.Legend#enabled}enabled(){api} method of the legend:

```
// create a chart
var chart = anychart.line();

// enable the legend
chart.legend().enabled(true);
```

This sample shows how to enable the legend of a multi-series line chart:

{sample}CS\_Legend\_Basic\_01{sample}

### Default Interactivity

When you click a [legend item](Legend_Items), the series of the chart it represents is shown / hidden.

In the sample below, the last series is initially disabled, but its icon is shown in the legend, and you can make the series appear by clicking the icon:

```
// create a chart
var chart = anychart.line();

// create series and set the data
var series1 = chart.line(seriesData_1);
var series2 = chart.line(seriesData_2);
var series3 = chart.line(seriesData_3);
var series4 = chart.line(seriesData_4);

// hide the last series
series4.enabled(false);
```

{sample}CS\_Legend\_Basic\_02{sample}

## Source

By default, each legend item represents one of the series of the chart.

You can set the source of the items by using the {api:anychart.core.ui.Legend#itemsSourceMode}itemsSourceMode(){api} method with `"series"` (default) or `"categories"` as a parameter – see {api:anychart.enums.LegendItemsSourceMode}anychart.enums.LegendItemsSourceMode{api}:


```
// set the legend source mode
chart.legend().itemsSourceMode("categories");
```

Setting the source to `"categories"` is reasonable if there is only one series:

{sample}CS\_Legend\_Basic\_03{sample}

**Note:** You can also create a standalone legend to access advanced options, such as binding one legend to several charts. (?) See the [Standalone Legend](Standalone_Legend) article.

## Layout

The default legend is oriented horizontally. To change its layout, call the {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} method with one of the parameters listed in {api:anychart.enums.LegendLayout}anychart.enums.LegendLayout{api}:

* `"horizontal"` (default)
* `"vertical"`
* `"horizontal-expandable"`
* `"vertical-expandable"`


```
chart.legend().itemsLayout("vertical")
```

The following sample shows the difference between the `"horizontal"` and `"vertical"` layouts:

{sample}CS\_Legend\_Basic\_04{sample}

Sometimes there are too many legend items, and the space they would take up if they were shown simultaneously exceeds the [size](#size) of the legend. The layout affects the behavior of the legend in this situation:

If the layout set to `"horizontal"` / `"vertical"`, only a part of the items is shown at once, and the legend paginator appears, allowing you to flip through them.

When the layout is `"horizontal-expandable"` / `"vertical-expandable"`, the legend is expanded, and the chart takes up a smaller space.

**Note 1:** The paginator can be configured: read [Advanced Settings: Paginator](Advanced_Settings#paginator) to learn more.

**Note 2:** You can set a limit to the expansion – see the [Size: Expandable](#expandable) section.

{sample :width 500 :height 500}CS\_Legend\_Basic\_05{sample}

## Position

### Position + Alignment

You can position the legend relative to the chart by calling the {api:anychart.core.ui.Legend#position}position(){api} method with of the parameters listed in {api:anychart.enums.Orientation}anychart.enums.Orientation{api}:

* `top` (default)
* `bottom`
* `right`
* `left`

To align the legend, call {api:anychart.core.ui.Legend#align}align(){api} with one of the parameters listed in {api:anychart.enums.Align}anychart.enums.Align{api}:

* `center` (default)
* `top`
* `bottom`
* `right`
* `left`


```
// set the position of the legend
legend.position("right");

// set the alignment of the legend
legend.align("top");
```

The sample below shows how these methods affect the legend with a vertical [layout](#layout):

{sample}CS\_Legend\_Basic\_06{sample}

### Outside / Inside

The {api:anychart.core.ui.Legend#positionMode}positionMode(){api} method allows you to set the position mode of the legend: you can place it outside or inside the the area limited by the axes. (?) This method accepts the parameters listed in {api:anychart.enums.LegendPositionMode}anychart.enums.LegendPositionMode{api}:
* `outside` (default)
* `inside`


```
// set the position mode of the legend
legend.positionMode("inside");
```

In the following sample, these two modes are applied to the legend with a vertical [layout](#layout) and [position & alignment](#position_+_alignment) configured:

{sample}CS\_Legend\_Basic\_07{sample}

### Drag and Drop

The {api:anychart.core.ui.Legend#drag}drag(){api} method with `true` as a parameter enables the drag-and-drop mode, allowing users to drag the legend to any position:

```
// enable the drag and drop mode of the legend
legend.drag(true);
```

**Note 1:** The drag-and-drop mode works within the limits set by the position mode, which places the legend [outside or inside](#outside_/_inside) the area limited by the axes. If the position mode is the default `outside`, an additional limit is set by the [position](#position_+_alignment) of the legend relative to the chart.

**Note 2:** [Events](Events) (?)

This sample demonstrates the drag-and-drop mode, applied to the legend with the position mode set to [inside](#outside_/_inside) and [background](#background) configured:

{sample}CS\_Legend\_Basic\_08{sample}

## Size

### Fixed

To configure the size of the legend, use the following methods:

* {api:anychart.core.ui.Legend#height}height(){api}
* {api:anychart.core.ui.Legend#width}width(){api}
* {api:anychart.core.ui.Legend#padding}padding(){api}
* {api:anychart.core.ui.Legend#margin}margin(){api}

The {api:anychart.core.ui.Legend#height}height(){api} and {api:anychart.core.ui.Legend#width}width(){api} work as an absolute limit: if there are too many items, the legend is [paged](Advanced_Settings#paginator).

However, this is true only when the [layout](#layout) is set to `"horizontal"` or `"vertical"`. The `"horizontal-expandable"` and `"vertical-expandable"` layouts ignore these settings.

Also, the legend always takes up the full height and width, even if the number of items requires a smaller space. The layout does not matter.

In the sample below, there is a legend with custom width and height and the [background](#background) configured to visualize its size:

```
// set the width and height of the legend
cgart.legend().height("30%");
cgart.legend().width("40%");
```

{sample :width 500 :height 500}CS\_Legend\_Basic\_09{sample}

### Expandable

The {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api} and {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api} methods allow setting a flexible legend size.

If the [layout](#layout) of the legend is `"horizontal"` or `"vertical"`, the legend occupies the minimal possible space within the limits set by these methods. If the legend does not fit the limits, it is [paged](Advanced_Settings#paginator).

The {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api} methods {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api}...

* {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api}
* {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api}
* [Layout](#layout)
* [Paginator](Advanced_Settings#paginator)

```
// set the max width and height of the legend
chart.legend().maxHeight("30%");
chart.legend().maxWidth("40%");
```

{sample :width 500 :height 500}CS\_Legend\_Basic\_10{sample}

## Background

* {api:anychart.core.ui.Legend#background}background(){api}
* (?) {api:anychart.core.ui.Background}anychart.core.ui.Background{api}
* [Background](../../Appearance_Settings/Background)
* [Legend Items](Legend_Items)

```
// configure the background of the legend
var background = chart.legend().background();
background.enabled(true);
background.fill("#96a6a6 0.3");
background.stroke("#96a6a6");
background.cornerType("round");
background.corners(10);
```

{sample}CS\_Legend\_Basic\_11{sample}