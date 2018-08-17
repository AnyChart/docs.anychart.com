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

{sample}CS\_Legend\_Events\_02{sample}

```

```

{sample}CS\_Legend\_Events\_03{sample}

```
/* listen to the legendItemMouseOver event and
configure the font and icon size of the legend item*/
chart.legend().listen("legendItemMouseOver", function(e) {
  var item = chart.getSeriesAt(e.itemIndex).legendItem();
  item.iconSize(20);
  item.iconStroke("black", 2);
  item.fontColor("black");
  item.fontWeight(600);
});

/*  listen to the legendItemMouseOut event and
restore the default settings of the legend item*/
chart.legend().listen("legendItemMouseOut", function(e) {
  var item = chart.getSeriesAt(e.itemIndex).legendItem();
  item.iconSize(15);
  item.iconStroke("none");
  item.fontColor("#7c868e");
  item.fontWeight("normal");
});
```

{sample}CS\_Legend\_Events\_04{sample}

```

```

## ???