{:index 12}
# Standalone Legend

## Overview

* [Standalones](../../Dashboards/Standalones)
* {api:anychart.standalones.Legend}anychart.standalones.Legend{api}
* {api:anychart.standalones.Legend#itemsSource}itemsSource(){api}
* ...

## 1

* {api:anychart.standalones.Legend#itemsSource}itemsSource(){api}


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

## 2

* [Events: Legend Items](Events#legend_items)
* ...


```
// create a standalone legend
var legend = anychart.standalones.legend();

// create an array for storing legend items
var legendItems = [];

// push legend items to the array
for (var i = 0; i < chart1.getSeriesCount(); i++) {
  var series = chart1.getSeriesAt(i);
  legendItems.push({
    text: series.name(),
    iconType: "spline",
    iconStroke: {color: series.color(), thickness: 3}
  });
}

// add items to the legend
legend.items(legendItems);

// set the container for the legend
legend.container(stage);

// draw the legend
legend.draw();
```

{sample}CS\_Legend\_Standalone\_02{sample}

## 3

* [Events: Legend Items](Events#legend_items)
* ...


```
// a function for creating legends
function createLegend(dataRow, alignment) {
  // create a standalone legend
  var legend = anychart.standalones.legend();

  // create an array for storing legend items
  var legendItems = [];
  // get the palette of the chart
  var palette = chart.palette().items();
  // push legend items to the array
  for (var i = 1; i < data.data()[dataRow].length; i++) {
    legendItems.push({
      text: "$" + data.data()[dataRow][i],
      iconFill: palette[i-1],
    });
  }
  // add items to the legend
  legend.items(legendItems);

  // set the alignment of the legend
  legend.align(alignment);

  // set the legend title
  legend.title(data.data()[dataRow][0]);

  // set the container for the legend
  legend.container(stage);
  // draw the legend
  legend.draw();

  return legend;
}

// create the first standalone legend
var legend1 = createLegend(0, "top");

// create the second standalone legend
var legend2 = createLegend(1, "center");

// create the third standalone legend
var legend3 = createLegend(2, "bottom");
```

{sample}CS\_Legend\_Standalone\_03{sample}