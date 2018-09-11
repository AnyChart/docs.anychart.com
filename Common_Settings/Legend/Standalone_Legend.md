{:index 12}
# Standalone Legend

## Overview

The standalone legend is one of [Standalones](../../Dashboards/Standalones) – building blocks, independent from the chart, that allow creating advanced data visualizations. For example, you can bind one legend to [multiple charts](#multiple_charts) or add [multiple legends](#multiple_legends) to a chart. See the sections below to learn more.

## Basics

### Legend

The standalone legend is defined as an instance of the {api:anychart.standalones.Legend}anychart.standalones.Legend{api} class.

To add a standalone legend to the chart, use the {api:anychart.standalones#legend}anychart.standalones.legend(){api} constructor:

```
// create a standalone legend
var legend = anychart.standalones.legend();
```

After the legend is adjusted and items are added, it should be drawn:

```
// set the container for the legend
legend.container(stage);

// draw the legend
legend.draw();
```

To adjust a standalone legend, use methods of the {api:anychart.standalones.Legend}anychart.standalones.Legend{api} class. The available settings generally correspond to the settings of the default legend and its elements, which can be found in [Basic Settings](Basic_Settings) and other articles in the [Legend](Overview) folder.

### Legend Items

**You can add items automatically** by using the {api:anychart.standalones.Legend#itemsSource}itemsSource(){api} method and specifying a chart or an array of charts you want the legend to be bound to. This method adds items representing series or points of charts, like in the following sample: [Item = Series / Point](#item_=_series_/_point).

```
// set the source of legend items
legend.itemsSource([chart1, chart2]);
```

**Also, you can add items manually**. Call the {api:anychart.standalones.Legend#itemsFormatter}itemsFormatter(){api} method with an array of items or a function as the parameter, or {api:anychart.standalones.Legend#items}items(){api} with an array as the parameter. Samples in the [Item = Multiple Series](#item_=_multiple_series) and [Multiple Legends](#multiple_legends) sections show how to use these methods.

```
// add items to the legend
legend.items([item1, item2, item3]);
```

**To adjust legend items**, use the methods of the {api:anychart.standalones.Legend}anychart.standalones.Legend{api} class that affect items. The items of the default legend have similar settings – see [Legend Items](Legend_Items).

The settings available for individual items are described in the [Individual Legend Items](Individual_Legend_Items) article. You should keep in mind that the way of adjusting an individual item depends on the way how items are added:

**1.** If legend items are added automatically and the chart type allows adding multiple series, you can adjust an individual legend item by calling the {api:?entry=legendItem}legendItem(){api} method of the series represented by this item. Combine it with the methods of the {api:anychart.core.utils.LegendItemSettings}anychart.core.utils.LegendItemSettings{api} class. 

**2.** If the legend is automatic, but the chart is single-series, for example Pie, individual items are customized by adding special fields to the data. Learn more: [Individual Items: Single Series](Individual_Legend_Items#single_series).

**3.** In case items are added manually, individual settings are specified right in the array of items that is passed to {api:anychart.standalones.Legend#itemsFormatter}itemsFormatter(){api} or {api:anychart.standalones.Legend#items}items(){api}. The available settings are listed in {api:anychart.core.ui.Legend.LegendItemProvider}anychart.core.ui.Legend.LegendItemProvider{api}.

Please note that configuring an individual item on the fly requires rewriting the whole array. The {api:anychart.standalones.Legend#itemsFormatter}itemsFormatter(){api} method should be used, like in the [Item = Multiple Series](#item_=_multiple_series) and [Multiple Legends](#multiple_legends) samples (see how the `legendItemClick` event is handled in both).

### Interactivity

A standalone legend with automatically added items is interactive by default. If legend items are added manually, you have to manually bind them to elements of the chart with the help of [events](../Event_Listeners). For further information, take a look at samples in the [Item = Multiple Series](#item_=_multiple_series) and [Multiple Legends](#multiple_legends) sections and read the [Events: Legend Items](Events#legend_items) article.

## Multiple Charts

### Item = Series / Point

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

### Item = Multiple Series

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

## Multiple Legends

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