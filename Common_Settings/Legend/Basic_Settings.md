{:index 2}
# Basic Settings

## Overview

* (?) The legend is defined as an instance of the {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api} class.
* [Stock Charts (Legend)](../../Stock_Charts/Legend)
* (?) color range (color legend) (но куда ссылаться?)

## Default Legend

### Enabling

Most of the chart types require you to enable the legend manually. But there are some exceptions, for example the following types: [Pie](../../Basic_Charts/Pie_Chart), [Doughnut](../../Basic_Charts/Doughnut_Chart), [Funnel](../../Basic_Charts/Funnel_Chart), [Pyramid](../../Basic_Charts/Pyramid_Chart), [Venn](../../Basic_Charts/Venn_Diagram), [Waterfall](../../Basic_Charts/Waterfall_Chart).

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

By default, each legend item represents one of the series on the chart.

You can set the source of the items by using the {api:anychart.core.ui.Legend#itemsSourceMode}itemsSourceMode(){api} method with `"series"` (default) or `"categories"` as a parameter – see {api:anychart.enums.LegendItemsSourceMode}anychart.enums.LegendItemsSourceMode{api}:


```
// set the legend source mode
chart.legend().itemsSourceMode("categories");
```

Setting the source to `"categories"` is reasonable if there is only one series:

{sample}CS\_Legend\_Basic\_03{sample}

You can also create a standalone legend to access advanced options, such as binding one legend to several charts. (?) See the [Standalone Legend](Standalone_Legend) article.

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

Sometimes there are too many legend items, and the space they would take up if they were shown simultaneously exceeds the [size](#size) of the legend.

In this case, with the layout set to `"horizontal"` / `"vertical"`, only a part of the items is shown at once, and a paginator appears, allowing you to flip through them. The paginator can be configured: read [Advanced Settings (Paginator)](Advanced_Settings#paginator) to learn more.

If the layout is `"horizontal-expandable"` / `"vertical-expandable"`, the legend is expanded, and the chart takes up a smaller space. Please note that you can set a limit to the expansion – see the [Size (Expandable)](#expandable) section.

{sample :width 500 :height 500}CS\_Legend\_Basic\_05{sample}

## Position

### Position + Alignment

* {api:anychart.core.ui.Legend#position}position(){api}
* {api:anychart.core.ui.Legend#align}align(){api}
* [Layout](#layout)

{api:anychart.enums.Orientation}anychart.enums.Orientation{api}:

* `top` (default)
* `bottom`
* `right`
* `left`

{api:anychart.enums.Align}anychart.enums.Align{api}:

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

{sample}CS\_Legend\_Basic\_06{sample}

### Outside / Inside

* {api:anychart.core.ui.Legend#positionMode}positionMode(){api}
* {api:anychart.enums.LegendPositionMode}anychart.enums.LegendPositionMode{api}
* `outside` (default)
* `inside`
* [Layout](#layout)

```
// set the position mode of the legend
legend.positionMode("inside");
```

{sample}CS\_Legend\_Basic\_07{sample}

### Drag and Drop

* {api:anychart.core.ui.Legend#drag}drag(){api}
* [Events](Events)
* [Inside / Outside](#outside_/_inside)
* [Background](#background)

```
// enable the drag and drop mode of the legend
legend.drag(true);
```

{sample}CS\_Legend\_Basic\_08{sample}

## Size

### Fixed

* {api:anychart.core.ui.Legend#height}height(){api}
* {api:anychart.core.ui.Legend#width}width(){api}
* {api:anychart.core.ui.Legend#padding}padding(){api}
* {api:anychart.core.ui.Legend#margin}margin(){api}

### Expandable

* {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api}
* {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api}
* [Layout](#layout)
* [Paginator](Advanced_Settings#paginator)

```
// set the max width and height of the legend
chart.legend().maxHeight("30%");
chart.legend().maxWidth("40%");
```

{sample :width 500 :height 500}CS\_Legend\_Basic\_09{sample}

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

{sample}CS\_Legend\_Basic\_10{sample}