{:index 12}
# Standalone Legend

## Overview

* [Standalones](../../Dashboards/Standalones)
* {api:anychart.standalones.Legend}anychart.standalones.Legend{api}
* {api:anychart.standalones.Legend#itemsSource}itemsSource(){api}
* ...

## 1 Legend – Multiple Charts

### One Series

```
// create a standalone legend
var legend = anychart.standalones.legend();

// set the source of legend items
legend.itemsSource([chart1, chart2]);

// set the container for the legend
legend.container(stage);

// draw the legend
legend.draw();
```

{sample}CS\_Legend\_Standalone\_01{sample}

### Multiple Series

```
// create a standalone legend
var legend = anychart.standalones.legend();

// enable the legend
legend.enabled(true);

// add custom legend items
legend.items([
  {
    text: "John",
    iconType: "spline",
    iconStroke: "3 #64b5f6"
  },
  {
    text: "Larry",
    iconType: "spline",
    iconStroke: "3 #1976d2"
  },
  {
    text: "Marta",
    iconType: "spline",
    iconStroke: "3 #ef6c00"
  }
]);

/* when a legend item is clicked on,
enable / disable the series it represents */
legend.listen("legendItemClick", function(e) {
  var series1 = chart1.getSeriesAt(e.itemIndex);
  var series2 = chart2.getSeriesAt(e.itemIndex);
  if (series1.enabled()) {
    series1.enabled(false);
    series2.enabled(false);
  } else {
    series1.enabled(true);
    series2.enabled(true);
  }
});

/* when a mouse is moved over a legend item,
configure the appearance of the series it represents */
legend.listen("legendItemMouseOver", function(e) {
  var series1 = chart1.getSeriesAt(e.itemIndex);
  var series2 = chart2.getSeriesAt(e.itemIndex);
  series1.stroke(anychart.color.lighten(series1.color()), 5);
  series2.stroke(anychart.color.lighten(series2.color()), 5);
});

/* when a mouse is moved off a legend item,
restore the default settings of the series it represents */
legend.listen("legendItemMouseOut", function(e) {
  var series1 = chart1.getSeriesAt(e.itemIndex);
  var series2 = chart2.getSeriesAt(e.itemIndex);
  series1.stroke(series1.color(), 1.5);
  series2.stroke(series2.color(), 1.5);
});

// set the container for the legend
legend.container(stage);

// draw the legend
legend.draw();
```

{sample}CS\_Legend\_Standalone\_02{sample}

## 1 Chart – Multiple Legends

```

```

{sample}CS\_Legend\_Standalone\_03{sample}