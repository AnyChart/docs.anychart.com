{:index 11}
# Events

This article explains how to work with the [events](../Common_Settings/Event_Listeners) of the legend and legend items. Also, it shows how to use the events of chart points to modify the legend or its items.

Please note: in multiple-series and single-series charts legend items represent different elements (series and points), and the default interactivity is also different, so the exact way of working with events depends on whether the chart type allows adding multiple series.

To learn about the default behavior of the legend, see [Basic Settings: Default interactivity](Basic_Settings#default_interactivity).

## Legend

All the events of legend are related to its [drag-and-drop mode](Basic_Settings#drag_and_drop):

<table>
<tr><th>drag</th><th></th>The legend is being dragged.</tr>
<tr><td>dragStart</td><td>The user has started dragging the legend.</td></tr>
<tr><td>dragEnd</td><td>The user has stopped dragging the legend.</td></tr>
</table>

In this sample, dragging the legend affects the background of the chart:

```
/* listen to the dragStart event
and configure the background of the chart */
legend.listen("dragStart", function() {
  chart.background().fill("#96a6a6 0.2");
});

/* listen to the dragEnd event
and reset the background of the chart */
legend.listen("dragEnd", function() {
  chart.background().fill("white");
});    
```

{sample}CS\_Legend\_Events\_01{sample}

## Legend Items

Here are the events of legend items:

<table>
<tr><th>legendItemClick</th><th></th>An item has been clicked.</tr>
<tr><td>legendItemDblclick </td><td>An item has been double-clicked.</td></tr>
<tr><td>legendItemMouseDown </td><td>A mouse button has been pressed on an item.</td></tr>
<tr><th>legendItemMouseMove </th><th></th>A mouse has is being moved over an item.</tr>
<tr><td>legendItemMouseOut </td><td>A mouse has been moved off of an item.</td></tr>
<tr><td>legendItemMouseOver </td><td>A mouse has been moved over an item.</td></tr>
<tr><th>legendItemMouseUp </th><th></th>A mouse button has been released over an item.</tr>
</table>


In the sample below, there is a multiple-series chart with the default interactivity of the legend disabled. When you click an icon, its fill color is modified, and its series, instead of being hidden / shown, is selected:

```
/* disable the default behavior of the legend
on the legendItemMouseDown event */
chart.legend().listen("legendItemMouseDown", function(e) {
  e.preventDefault();
});

/* disable the default behavior of the legend
on the legendItemMouseOver event */
chart.legend().listen("legendItemMouseOver", function(e) {
  e.preventDefault();
});

/* listen to the legendItemClick event,
select / deselect the series and configure the legend item */
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
```

{sample}CS\_Legend\_Events\_02{sample}

In the following sample, hovering over a legend item of a single-series chart changes its visual style and enables the hovered state of the point it represents.

**Note**: an individual legend item of a single-series chart can be customized only by adding special fields to the data (see [Individual Legend Items: Single Series](Individual_Legend_Items#single_series)).

```
/* listen to the legendItemMouseOver event
and enable the hover state of the point */
chart.legend().listen("legendItemMouseOver", function(e) {
  var point = chart.getPoint(e.itemIndex);
  point.hovered(true);
  point.set("legendItem", {
            fontWeight: 600, fontColor: "#455a64",
            iconStroke: "2 #455a64"
  });
});

/* listen to the legendItemMouseOut event
and disable the hover state of the point */
chart.legend().listen("legendItemMouseOut", function(e) {
  var point = chart.getPoint(e.itemIndex);
  point.hovered(false);
  point.set("legendItem", {
            fontWeight: "normal", fontColor: "#7c868e",
            iconStroke: "none"
  });
});
```

{sample}CS\_Legend\_Events\_03{sample}

## Chart Points

You can use the events of chart points to modify the legend. For example, in this sample selecting a point of a multiple-series chart or moving a mouse over it affects the appearance settings of its legend item:

```
/* listen to the pointsSelect event
and configure legend items */
chart.listen("pointsSelect", function(e) {
  e.currentPoint.series.legendItem().iconFill("#455a64");
  for (var i = 0; i < chart.getSeriesCount(); i++) {
    var series = chart.getSeriesAt(i)
    if (series.meta("selected") & series != e.currentPoint.series) {
       series.meta("selected", false);
       series.legendItem().iconFill(series.color());
    }
  }
  e.currentPoint.series.meta("selected", true);
});

/* listen to the pointMouseOver event
and configure the legend item */
chart.listen("pointMouseOver", function(e) {
  if (!e.series.meta("selected")) {
    color = anychart.color.lighten(e.series.color());
    e.series.legendItem().iconFill(color);
  }
});

/* listen to the pointMouseOut event
and restore the default settings of the legend item */
chart.listen("pointMouseOut", function(e) {
  if (!e.series.meta("selected")) {
    e.series.legendItem().iconFill(e.series.color());
  }
});
```

{sample}CS\_Legend\_Events\_04{sample}

In the next sample, when you click a point of a single-series chart, the appearance of its icon is modified.

**Note**: an individual legend item of a single-series chart can be customized only by adding special fields to the data (see [Individual Legend Items: Single Series](Individual_Legend_Items#single_series)).

```
/* listen to the pointClick event
and configure legend items */
chart.listen("pointClick", function(e) {
  if (e.point.selected()) {
    e.point.set("legendItem", {
                fontWeight: 600, fontColor: "#455a64",
                iconStroke: "2 #455a64"
               });
  } else {
    e.point.set("legendItem", {
                fontWeight: "normal", fontColor: "#7c868e"
               });
  }
});
```

{sample}CS\_Legend\_Events\_05{sample}