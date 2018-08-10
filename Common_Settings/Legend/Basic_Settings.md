{:index 2}
# Basic Settings

## Overview

* (?) The legend is defined as an instance of the {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api} class.

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
// set source mode of the legend
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
// set the layout of the legend
chart.legend().itemsLayout("vertical")
```

The following sample shows the difference between the `"horizontal"` and `"vertical"` layouts:

{sample}CS\_Legend\_Basic\_04{sample}

Sometimes there are too many legend items, and the space they would take up if they were shown simultaneously exceeds the [size](#size) of the legend. The layout affects the behavior of the legend in this situation:

If the layout is set to `"horizontal"` / `"vertical"`, only a part of the items is shown at once, and the legend paginator is automatically enabled, allowing you to flip through them.

When the layout is `"horizontal-expandable"` / `"vertical-expandable"`, the legend expands, and the chart takes up a smaller space.

**Note 1:** The paginator can be configured: read [Advanced Settings: Paginator](Advanced_Settings#paginator) to learn more.

**Note 2:** You can set a limit to the expansion of the legend – see the [Size: Expandable](#expandable) section.

{sample :width 500 :height 500}CS\_Legend\_Basic\_05{sample}

## Size

### Fixed

To set a fixed legend size, use the following methods:

* {api:anychart.core.ui.Legend#height}height(){api}
* {api:anychart.core.ui.Legend#width}width(){api}
* {api:anychart.core.ui.Legend#padding}padding(){api}
* {api:anychart.core.ui.Legend#margin}margin(){api}

### Expandable

You can set a flexible legend size. Use the `"horizontal-expandable"` or `"vertical-expandable"` [layout](#layout) to allow the legend to expand. Then call the {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api} and {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api} methods, which limit the extent to which it expands. Please note that the maximum height and width are set either in pixels or as a percentage.

In the following sample, the maximum height and width are applied to a horizontally oriented expandable legend. You can add a few items to the chart to see when the legend stops expanding:

```
// set the max height and width of the legend
chart.legend().maxHeight("30%");
chart.legend().maxWidth("50%");
```

{sample :width 500 :height 500}CS\_Legend\_Basic\_06{sample}

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
chart.legend().position("right");

// set the alignment of the legend
chart.legend().align("top");
```

The sample below shows how these methods affect a legend with a vertical [layout](#layout):

{sample}CS\_Legend\_Basic\_07{sample}

### Outside / Inside

The {api:anychart.core.ui.Legend#positionMode}positionMode(){api} method allows you to set the position mode of the legend: you can place it outside or inside the data area. This method accepts the parameters listed in {api:anychart.enums.LegendPositionMode}anychart.enums.LegendPositionMode{api}:
* `outside` (default)
* `inside`


```
// set the position mode of the legend
chart.legend().positionMode("inside");
```

In the following sample, these two modes are applied to a legend with a vertical [layout](#layout) and [position & alignment](#position_+_alignment) configured:

{sample}CS\_Legend\_Basic\_08{sample}

### Drag and Drop

The {api:anychart.core.ui.Legend#drag}drag(){api} method with `true` as a parameter enables the drag-and-drop mode, allowing users to drag the legend to any position:

```
// enable the drag and drop mode of the legend
chart.legend().drag(true);
```

**Note 1:** The drag-and-drop mode works within the limits set by the position mode, which places the legend [outside or inside](#outside_/_inside) the area limited by the axes. If the position mode is the default `outside`, an additional limit is set by the [position](#position_+_alignment) of the legend relative to the chart.

**Note 2:** [Events](Events) (?)

This sample demonstrates the drag-and-drop mode, applied to a legend with the position mode set to [inside](#outside_/_inside) (also, the [background](#background) is enabled):

{sample}CS\_Legend\_Basic\_09{sample}

## Background

To enable and configure the background of the legend, use the  {api:anychart.core.ui.Legend#background}background(){api} method, combined with the methods of the {api:anychart.core.ui.Background}anychart.core.ui.Background{api} class. You can adjust the fill, stroke, and corners: 

```
// configure the background of the legend
var background = chart.legend().background();
background.enabled(true);
background.fill("#96a6a6 0.3");
background.stroke("#96a6a6");
background.cornerType("round");
background.corners(10);
```

Read more: [Background](../../Appearance_Settings/Background).

{sample}CS\_Legend\_Basic\_10{sample}