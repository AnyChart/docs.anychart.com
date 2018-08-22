{:index 11}
# Events

## Legend

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