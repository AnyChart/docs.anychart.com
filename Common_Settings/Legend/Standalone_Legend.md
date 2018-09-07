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

/* listen to the legendItemClick event,
enable / disable the series on both charts,
and configure the appearance of the legend item */
legend.listen("legendItemClick", function(e) {
  var index = e.itemIndex;
  var series1 = chart1.getSeriesAt(index);
  var series2 = chart2.getSeriesAt(index);
  if (series1.enabled()) {
    series1.enabled(false);
    series2.enabled(false);
    legendItems[index].iconStroke = "3 #999999";
    legendItems[index].fontColor = "#999999";
    legend.itemsFormatter(function() {return legendItems});
  } else {
    series1.enabled(true);
    series2.enabled(true);
    legendItems[index].iconStroke = {
      color: series1.color(),
      thickness: 3
    };
    legendItems[index].fontColor = series1.color();
    legend.itemsFormatter(function() {return legendItems});
  }
});

/* listen to the legendItemMouseOver event
and configure the appearance of the series on both charts */
legend.listen("legendItemMouseOver", function(e) {
  var series1 = chart1.getSeriesAt(e.itemIndex);
  var series2 = chart2.getSeriesAt(e.itemIndex);
  series1.stroke(anychart.color.lighten(series1.color()), 5);
  series2.stroke(anychart.color.lighten(series2.color()), 5);
});

/* listen to the legendItemMouseOver event
and reset the appearance of the series on both charts */
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

  /* listen to the legendItemClick event,
  select / deselect the point,
  and configure the appearance of the legend item */
  legend.listen("legendItemClick", function(e) {
    var index = e.itemIndex;
    var chartPoint = chart.getSeriesAt(index).getPoint(dataRow);
    if (!chartPoint.selected()) {
      chartPoint.selected(true);
      legendItems[index].iconFill = "#455a64";
      legend.itemsFormatter(function() {return legendItems});
    } else {
      chartPoint.selected(false);
      legendItems[index].iconFill = palette[index];
      legend.itemsFormatter(function() {return legendItems});
    }
  });

  /* listen to the legendItemMouseOver event
  and enable the hover mode of the chart point */
  legend.listen("legendItemMouseOver", function(e) {
    var index = e.itemIndex;
    var point = chart.getSeriesAt(index).getPoint(dataRow);
    point.hovered(true);
    /* if the chart point is selected,
    prevent the default behavior of the legend */
    if (point.selected()) {e.preventDefault();}
  });

  /* listen to the legendItemMouseOut event
  and disable the hover mode of the chart point */
  legend.listen("legendItemMouseOut", function(e) {
    var index = e.itemIndex;
    var point = chart.getSeriesAt(index).getPoint(dataRow);
    point.hovered(false);
  });

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