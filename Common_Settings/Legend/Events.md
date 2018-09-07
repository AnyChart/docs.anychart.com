{:index 11}
# Events

## Overview

This article explains how to work with the events of the legend and legend items. Also, it shows how to use the events of chart points to modify the legend or its items.

Please note: the [default interactivity](Basic_Settings#default_interactivity) of multiple-series charts differs from that of single-series charts, so the exact way of working with events depends on whether the chart type allows adding multiple series.

See [Event Listeners](../Event_Listeners) and [Interactivity](../Interactivity) to learn more.

## Legend

When the [drag-and-drop mode](Basic_Settings#drag_and_drop) of the legend is enabled, you can use the following events:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>drag</td><td>The legend is being dragged.</td></tr>
<tr><td>dragStart</td><td>The user has started dragging the legend.</td></tr>
<tr><td>dragEnd</td><td>The user has stopped dragging the legend.</td></tr>
</table>

In this sample, dragging the legend affects the background of the chart:

```
/* listen to the dragStart event
and configure the background of the chart */
chart.legend().listen("dragStart", function() {
  chart.background().fill("#96a6a6 0.2");
});

/* listen to the dragEnd event
and reset the background of the chart */
chart.legend().listen("dragEnd", function() {
  chart.background().fill("white");
});    
```

{sample}CS\_Legend\_Events\_01{sample}

## Legend Items

Here are the events of legend items:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>legendItemClick</td><td>An item has been clicked on.</td></tr>
<tr><td>legendItemDblclick</td><td>An item has been double-clicked on.</td></tr>
<tr><td>legendItemMouseDown</td><td>A mouse button has been pressed on an item.</td></tr>
<tr><td>legendItemMouseMove</td><td>A mouse has been moved over an item.</td></tr>
<tr><td>legendItemMouseOut</td><td>A mouse has been moved off an item.</td></tr>
<tr><td>legendItemMouseOver</td><td>A mouse has been moved over an item.</td></tr>
<tr><td>legendItemMouseUp</td><td>A mouse button has been released over an item.</td></tr>
</table>

In the sample below, there is a multiple-series chart with the interactivity of the legend modified: when you click on an icon, its fill color is changed, and its series, instead of being hidden / shown, is selected.

**Note:** The methods allowing you to configure legend items individually can be found in the [Individual Legend Items](Individual_Legend_Items) section.

```
/* disable the default behavior of the legend
on the legendItemMouseDown event */
chart.legend().listen("legendItemMouseDown", function(e) {
  e.preventDefault();
});

/* listen to the legendItemClick event,
select / deselect the series,
and configure the appearance of the legend item */
chart.legend().listen("legendItemClick", function(e) {
  var series = chart.getSeriesAt(e.itemIndex);
  var selected = series.meta("selected");
  if (!selected) {
    series.select();
    series.legendItem().iconFill("#455a64");
  } else {
    series.unselect();
    series.legendItem().iconFill(series.color());
  }
  series.meta("selected", !selected);
});

/* listen to the legendItemMouseOver event
and prevent the default behavior of the legend
if the series is selected */
chart.legend().listen("legendItemMouseOver", function(e) {
   if (chart.getSeriesAt(e.itemIndex).meta("selected")) {
     e.preventDefault();
   }
});
```

{sample}CS\_Legend\_Events\_02{sample}

In the following sample, hovering over a legend item of a single-series chart changes its visual style and enables the hover state of the point it represents (which does not occur by default).

**Note**: An individual legend item of a single-series chart can be customized only by adding special fields to the data – see [Individual Legend Items: Single Series](Individual_Legend_Items#single_series).

```
/* listen to the legendItemMouseOver event,
enable the hover state of the chart point,
and configure the appearance of the legend item */
chart.legend().listen("legendItemMouseOver", function(e) {
  var point = chart.getPoint(e.itemIndex);
  point.hovered(true);
  point.set("legendItem", {iconFill: "#455a64"});
});

/* listen to the legendItemMouseOut event,
disable the hover state of the chart point
and reset the appearance of the legend item */
chart.legend().listen("legendItemMouseOut", function(e) {
  var point = chart.getPoint(e.itemIndex);
  point.hovered(false);
  point.set("legendItem", null);
});
```

{sample}CS\_Legend\_Events\_03{sample}

## Chart Points

By default, the events of legend items affect the chart: for example, when a legend item of a multiple-series chart is clicked on, the series it represents is enabled or disabled. Conversely, you can use the [events of chart points](../Event_Listeners#point-related) to modify the legend and its items.

In this sample, selecting a point of a multiple-series chart or moving a mouse over it affects the appearance settings of the legend item representing its series. The `pointsSelect`, `pointMouseOver`, and `pointMouseOut` events are used.

**Note:** The methods allowing you to configure legend items individually can be found in the [Individual Legend Items](Individual_Legend_Items) section.

```
/* listen to the pointsSelect event
and configure the appearance of the legend item */
chart.listen("pointsSelect", function(e) {
  e.currentPoint.series.legendItem().iconFill("#455a64");
  for (var i = 0; i < chart.getSeriesCount(); i++) {
    var series = chart.getSeriesAt(i);
    if (series.meta("selected") & series != e.currentPoint.series) {
       series.meta("selected", false);
       series.legendItem().iconFill(series.color());
    }
  }
  e.currentPoint.series.meta("selected", true);
});

/* listen to the pointMouseOver event
and configure the appearance of the legend item */
chart.listen("pointMouseOver", function(e) {
  if (!e.series.meta("selected")) {
    color = anychart.color.lighten(e.series.color());
    e.series.legendItem().iconFill(color);
  }
});

/* listen to the pointMouseOut event
and reset the appearance of the legend item */
chart.listen("pointMouseOut", function(e) {
  if (!e.series.meta("selected")) {
    e.series.legendItem().iconFill(e.series.color());
  }
});
```

{sample}CS\_Legend\_Events\_04{sample}

In the following sample, when you click on a point of a single-series chart, the appearance of its icon is modified. The `pointClick` event is used.

**Note**: an individual legend item of a single-series chart can be customized only by adding special fields to the data – see [Individual Legend Items: Single Series](Individual_Legend_Items#single_series).

```
/* listen to the pointClick event
and configure the appearance of the legend item */
chart.listen("pointClick", function(e) {
  if (e.point.selected()) {
    e.point.set("legendItem", {iconFill: "#455a64"});
  } else {
    e.point.set("legendItem", null);
  }
});
```

{sample}CS\_Legend\_Events\_05{sample}