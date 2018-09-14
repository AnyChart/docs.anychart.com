{:index 2}
# Basic Settings

## Overview

To access the legend, use the {api:?entry=legend}legend(){api} method of the chart. For example, with Cartesian charts you should use {api:anychart.charts.Cartesian#legend}legend(){api}.

The legend is defined as an instance of the {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api} class – its methods allow adjusting most legend settings. This article includes those settings that affect the legend as a whole: its layout, size, position, and so on.

## Default Legend

### Enabling / Disabling

Most of the chart types require you to enable the legend manually. But there are some exceptions, for example the following types: [Pie](../../Basic_Charts/Pie_Chart), [Doughnut](../../Basic_Charts/Doughnut_Chart), [Funnel](../../Basic_Charts/Funnel_Chart), [Pyramid](../../Basic_Charts/Pyramid_Chart), [Venn](../../Basic_Charts/Venn_Diagram), [Waterfall](../../Basic_Charts/Waterfall_Chart).

To enable or disable the legend, pass `true` / `false` either to the {api:?entry=legend}legend(){api} method of the chart or to the {api:anychart.core.ui.Legend#enabled}enabled(){api} method of the legend:

```
// create a chart
var chart = anychart.line();

// enable the legend
chart.legend(true);
```

```
// create a chart
var chart = anychart.line();

// enable the legend
chart.legend().enabled(true);
```

This sample shows how to enable the legend of a multiple-series line chart by using the {api:anychart.charts.Cartesian#legend}legend(){api} method:

{sample}CS\_Legend\_Basic\_01{sample}

### Default Interactivity

When you click on a [legend item](Legend_Items) of a multiple-series chart, the series of the chart it represents is shown / hidden, and when you hover over an item, the series is hovered. As for single-series chart types, their legend items represent points, and the behavior of the legend varies with the type.

**Note:** To learn how to change the default interactivity settings of the legend, see the [Events](Events) section.

In the sample below, the last series of a multiple-series chart is initially disabled, but its icon is shown in the legend, and you can make the series appear by clicking on the icon:

```
// create a chart
var chart = anychart.line();

// create series and set the data
var series1 = chart.line(seriesData1);
var series2 = chart.line(seriesData2);
var series3 = chart.line(seriesData3);
var series4 = chart.line(seriesData4);

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

**Note 1:** In this case, the 
[default interactivity settings](#default_interactivity) do not apply. To bind legend items to elements of the chart, you have to use [events](Events).

**Note 2:** Also, you can create [custom legend items](Individual_Legend_Items#custom_items) and bind them to chart elements of your choice – for example, to chart points. To access such advanced options as as linking the legend to several charts at once or showing multiple legends on one chart, use the [standalone legend](Standalone_Legend).

Setting the source to `"categories"` may be reasonable if there is only one series:

{sample}CS\_Legend\_Basic\_03{sample}

## Layout

The default legend is oriented horizontally. To change its layout, call the {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} method with one of the parameters listed in {api:anychart.enums.LegendLayout}anychart.enums.LegendLayout{api}:

* `"horizontal"` (default)
* `"vertical"`
* `"horizontal-expandable"`
* `"vertical-expandable"`


```
// set the layout of the legend
chart.legend().itemsLayout("vertical");
```

The following sample shows the difference between the `"horizontal"` and `"vertical"` layouts:

{sample}CS\_Legend\_Basic\_04{sample}

Sometimes there are too many legend items, and the space they would take up if they were shown simultaneously exceeds the [size](#size) of the legend. The layout affects the behavior of the legend in this situation:

If the layout is set to `"horizontal"` / `"vertical"`, only a part of the items is shown at once, and the legend paginator is automatically enabled, allowing you to flip through them.

When the layout is `"horizontal-expandable"` / `"vertical-expandable"`, the legend expands, and the chart takes up a smaller space.

**Note 1:** The paginator can be configured: read the [Paginator](Paginator) article to learn more.

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
// set the maximum height and width of the legend
chart.legend().maxHeight("30%");
chart.legend().maxWidth("50%");
```

{sample :width 500 :height 500}CS\_Legend\_Basic\_06{sample}

## Position

### Position + Alignment

You can position the legend relative to the chart by calling the {api:anychart.core.ui.Legend#position}position(){api} method with of the parameters listed in {api:anychart.enums.Orientation}anychart.enums.Orientation{api}:

* `top`
* `bottom`
* `right`
* `left`

To align the legend, call {api:anychart.core.ui.Legend#align}align(){api} with one of the parameters listed in {api:anychart.enums.Align}anychart.enums.Align{api}:

* `center`
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
// enable the drag-and-drop mode of the legend
chart.legend().drag(true);
```

**Note 1:** The drag-and-drop mode works within the limits set by the position mode, which places the legend [outside or inside](#outside_/_inside) the area limited by the axes. If the position mode is the default `outside`, an additional limit is set by the [position](#position_+_alignment) of the legend relative to the chart.

**Note 2:** When the drag-and-drop mode is enabled, you can use special events of the legend. See the [Events: Legend](Events#legend) section.

This sample demonstrates the drag-and-drop mode, applied to a legend with the position mode set to [inside](#outside_/_inside) (also, the [background](Background) is enabled):

{sample}CS\_Legend\_Basic\_09{sample}