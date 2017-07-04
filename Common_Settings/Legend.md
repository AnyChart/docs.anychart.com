# Legend

* [Overview](#overview)
* [Auto Legend](#auto_legend)
 * [Single Series](#single_series)
* [Title](#title)
* [Positioning](#positioning)
 * [Outside](#outside)
 * [Inside](#inside)
 * [Drag and Drop](#drag_and_drop)
* [Layout](#layout)
* [Size](#size)
 * [Expandable](#expandable)
 * [Fixed](#fixed)
* [Paging](#paging)
* [Visualization](#visualization)
 * [Background](#background)
 * [Marker Symbol](#marker_symbol)
 * [Mouse Cursor](#mouse_cursor)
 * [Tooltip](#tooltip)
* [Series Management](#series_management)
* [Custom Item](#custom_item)
* [Custom Legend](#custom_legend)
* [Events](#events)
 * [Legend Events](#legend_events)
 * [Legend Items Events](#legend_items_events)
* [One Legend for Several Charts](#one_legend_for_several_charts)
* [One Legend for Several Series](#one_legend_for_several_series)

## Overview

Legend is a element of a chart that lists and explains the symbols and colors used on a chart or a map. Sometimes it contains additional information that helps user to understand a chart.

## Auto Legend 

By default legend shows all series names with a symbol that shows the color and the type of the series.

To enable legend you have to pass "true" to {api:anychart.core.ui.Legend#enabled}enabled(){api} method or {api:anychart.core.ui.Legend}legend(){api} constructor:

Enable using the *legend()# method:

```
chart.legend(true);
```

Enable using the {api:anychart.core.ui.Legend#enabled}enabled(){api} method:

```
// create chart
var chart = anychart.line();

// enable legend
var legend = chart.legend();
legend.enabled(true);
```

In the live sample, please notice that when you move the mouse over the series name in legend - all series elements are highlighted and if you click on legend element - series is hidden.

{sample}CS\_Legend\_01{sample}

### Single Series

If you are showing a single series chart and want your legend to show all points names and values you should configure the legend:

```
var legend = chart.legend();
// enable legend
legend.enabled(true);
// set source of legend items
legend.itemsSourceMode("categories");
```

To create a legend for a single series chart you  have to set **categories** value for {api:anychart.core.ui.Legend#itemsSourceMode}itemsSourceMode(){api}.

{sample}CS\_Legend\_02{sample}

## Title

To enable or disable a legend title you have to use the {api:anychart.core.ui.Title#enabled}enabled(){api} method of the legend {api:anychart.core.ui.Legend#title}title(){api}:

```
var title = chart.legend().title();
title.enabled(true);
```

To specify and format the legend title use the {api:anychart.core.ui.Title#text}text(){api} method of a {api:anychart.core.ui.Legend#title}title(){api}. Settings of a legend title are very similar to the [Chart Title](../Appearance_Settings/Text_Settings) article.

```
var title = chart.legend().title();
title.useHtml(true);

// enable legend title
title.enabled(true);
title.text("Total sales<br><i style=\"color: #999; font-weight: 400; font-size: 11px;\">(Year 2004)</i>");

// set font size and align
title.fontSize(14);
title.hAlign("center");
```

Here is a sample of a chart and the legend title is configured:

{sample}CS\_Legend\_03{sample}

## Positioning

Depending on the layout and type of your chart you can position legend to a desired place using the {api:anychart.core.ui.Legend#positionMode}positionMode(){api}, {api:anychart.core.ui.Legend#position}position(){api} and  {api:anychart.core.ui.Legend#align}align(){api} methods of a {api:anychart.core.ui.Legend}legend(){api}.

### Outside

"Outside" is a default legend position mode for the most of the charts. In this mode you define the side of the chart it should be placed to, and the alignement:

```
var legend = chart.legend();
legend.enabled(true);

// set position mode
legend.positionMode("outside");
// set position and alignement
legend.position("bottom");
legend.align("center");
legend.itemsLayout("horizontalExpandable");
```

{sample}CS\_Legend\_04{sample}

### Inside

"Inside" position mode is when legend is placed within a data plot (inner area of a chart). In this mode you define the side of a data plot it should be placed to, and the alignement:

```
var legend = chart.legend();
legend.enabled(true);

// set position mode
legend.positionMode("inside");
// set position and alignement
legend.position("top");
legend.align("right");
```

{sample}CS\_Legend\_05{sample}

### Drag and Drop

You can enable the "Drag and Drop" feature of a legend, it allows user to move the legend to any position on a chart. Use the {api:anychart.core.ui.Legend#drag}drag(){api} to enable this mode:

```
var legend = chart.legend();

// Enable drag and drop
legend.drag(true);
```

Note that drag and drop always works withing constraints set by the [position mode and align](#positioning). It means if a legend {api:anychart.core.ui.Legend#positionMode}positionMode(){api} is set to [Inside](#inside) - you can't move it outside of a data plot, and if it is [Outside](#outside) - you can't move it inside of a data plot.

Here is a sample of a legend that can be moved around:

{sample}CS\_Legend\_06{sample}

## Layout

The {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} method controls how the items of a legend are placed. Possible values are listed in {api:anychart.enums.LegendLayout}anychart.enums.LegendLayout{api} and they are:
- "horizontal",
- "horizontalExpandable",
- "vertical",
- "verticalExpandable".

The legend layout mode works in conjunction with [position](#positioning) and [size](#size) settings. 

## Size

Legend size is controlled by the following methods:
- {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api},
- {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api},
- {api:anychart.core.ui.Legend#height}height(){api},
- {api:anychart.core.ui.Legend#width}width(){api},
- {api:anychart.core.ui.Legend#padding}padding(){api},
- {api:anychart.core.ui.Legend#margin}margin(){api}.

### Expandable

When the legend [layout mode](#layout) is set to *"horizontalExpandable"* or *"verticalExpandable"* it makes sense to use {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api} and {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api} methods control the extent to which legend can expand to. It can be set both in pixels and percents. This way you can ensure that a legend does not grab to much space when there are a few elements and that it will not squeeze the chart into nothingness if there are to many elements.

```
// Set maximum width and height.
legend.maxWidth("30%");
legend.maxHeight("30%");

// legend mode and position
legend.itemsLayout("verticalExpandable");
legend.position("right");

// paginator position
legend.paginator().orientation("bottom");
```

See how these settings work in the following interactive sample: you can click buttons to add or remove series and see how legend and chart change their sizes. Once the legend reached maximum allowed size - a [paginator](#paginator) appears.

{sample}CS\_Legend\_09{sample}

### Fixed

{api:anychart.core.ui.Legend#height}height(){api} and {api:anychart.core.ui.Legend#width}width(){api} methods are used to set the fixed size in pixels or percents. They override {api:anychart.core.ui.Legend#maxHeight}maxHeight(){api} and {api:anychart.core.ui.Legend#maxWidth}maxWidth(){api} if both are set simultaneously.

Sample Pie Chart with a legend of a fixed (75px - width, 140px height) size positioned to the *"Left"* of the chart, aligned to *"Top"*, with padding of 10 pixels:

```
var legend = chart.legend();
// set height
legend.height(140);
// set width
legend.width(95);
// set position
legend.position("left");
// set align
legend.align("top");
// set padding
legend.padding(10);
```

Here is a sample a legend with a fixed size:

{sample}CS\_Legend\_10{sample}

## Paging

If legend items can't fit into an area legend can occupy (this is controlled by [size settings](#size)) {api:anychart.core.ui.Legend#paginator}paginator(){api} appears. You can choose paginator layout and position:

```
// legend settings
var paginator = chart.legend().paginator();
// set paginator layout
paginator.layout("vertical");
// place paginator on the right
paginator.orientation("right");
```

{sample}CS\_Legend\_11{sample}

## Visualization

### Background

To configure the border and the inner color of the legend use the {api:anychart.core.ui.Legend#background}background(){api} method. To learn more about background setting please see the [background tutorial](../Appearance_Settings/Background).

{sample}CS\_Legend\_07{sample}

### Marker Symbol

When you are working with [line](../Basic_Charts/Line_Chart) and [spline](../Basic_Charts/Spline_Chart) charts you can use markers to distinguish different series. By default AnyChart charting library shows marker symbols in legend - only color representation is used in a small line icon. If you want to tune markers in legend icons you have to adjust {api:anychart.core.ui.LegendItem}legendItem(){api} method. Sample code presented below:

```
// chart data 
var series = chart.line([
  {x: "John", value: 16000},
  {x: "Jake", value: 21000},
  {x: "Peter", value: 22000}
]);
// enable markers
series.markers(true);
// settings for legend item of the series
var item = series.legendItem()
// set inner color of icon marker
item.iconType("line");
```

It may be bothersome to tune legend item for each series, you can set defaults using [Themes](../Appearance_Settings/Themes) to avoid this:

```
// set default icons for legend items 
// for lines, splines and markers
anychart.theme({
      chart: {
          defaultSeriesSettings: {
              line: {legendItem: {iconType: "line"}},
              spline: {legendItem: {iconType: "spline"}},
              marker: {legendItem: {iconType: "marker"}}
  }}});
```

Here is a sample with defaults for legend set to show series icons with markers:

{sample}CS\_Legend\_12{sample}

### Mouse Cursor

Use the {api:anychart.core.ui.Legend#hoverCursor}hoverCursor(){api} method to set the type of cursor that is shown when mouse moves over the legend items. You can use string values or {api:anychart.enums.Cursor}anychart.enums.Cursor{api}.

```
var legend = chart.legend();
legend.hoverCursor(anychart.enums.Cursor.POINTER); // sets hover cursor using enum
legend.hoverCursor("pointer"); // sets hover cursor using a string
```

### Tooltip

If you want to configure legend tooltips - you should do that using {api:anychart.core.ui.Legend#tooltip}tooltip(){api} methods. You can tune its visual appearance and format. In the following sample we will format tooltips of the legend to show detailed description information.

{sample}CS\_Legend\_13{sample}

## Series Management

You can easily control series of the chart using chart legend. You can hide and show any of the series by clicking on the legend items. Here is a sample of column chart with four series. One of the series is already disabled. Click on the last legend item to show hidden series. 

{sample}CS\_Legend\_14{sample}

## Custom Item

When creating legend you can add your own items with any information you want to see on the legend, to do that use {api:anychart.standalones.Legend#itemsFormatter}itemsFormatter(){api} method. 

```
var legend = chart.legend();
// adjust legend items
legend.itemsFormatter(function(items){
  // push into items array
  items.push({
    // set text of a new item
    text: "item text "
  });
  // return items array
  return items;
});
```

In the sample chart below we've used custom item that adds *Total* data to legend.

{sample}CS\_Legend\_15{sample}

## Custom Legend

AnyChart JavaScript Framework sets no limits to the amount of legends on one chart plot. Legend can be a part chart as well as a separate unit. Sample below demonstrates three custom legend at the bottom of the chart. 

{sample}CS\_Legend\_16{sample}


## Events

As an interactive component of Chart, Legend has some events which can be used for managing and adjusting the Chart and the Legend itself. Look through this section to know all about legend events.

### Legend Events

There are only three events the Legend has:

- **drag** -  Event type for legend moving.
- **dragEnd** - Event type for legend at the end of moving.
- **dragStart** - Event type for legend at the start of moving.

```
// actions on events
legend.listen("dragStart", function(){
  background.fill(anychart.color.lighten(backgroundFill, 0.3));
  series1.fill(anychart.color.lighten(series1Fill, 0.3));
  series2.fill(anychart.color.lighten(series2Fill, 0.3));
  series3.fill(anychart.color.lighten(series3Fill, 0.3));
  grid.stroke(anychart.color.lighten(gridStroke, 0.3));
});
legend.listen("drag", function(){
  chart.title("Legend is being dragged");
});
legend.listen("dragEnd", function(){
  background.fill(backgroundFill);
  series1.fill(series1Fill);
  series2.fill(series2Fill);
  series3.fill(series3Fill);
  grid.stroke(gridStroke);
  chart.title(chartTitle);
});
```

{sample}CS\_Legend\_17{sample}


### Legend Items Events

Legend items are child elements of a legend, but they have some events which have nothing to do with the whole legend. The table below demonstrates the list of legend items events.


- **legendItemClick** - Event type for click on item of legend.
- **legendItemDblclick** -  Event type for double click on item of legend.
- **legendItemMouseDown** - Event type for item of legend at mouse down.
- **legendItemMouseMove** - Event type for item of legend at mouse moving.
- **legendItemMouseOut** -  Event type for item of legend at mouse leading off.
- **legendItemMouseOver** - Event type for item of legend at hover mouse.
- **legendItemMouseUp** - Event type for item of legend at up mouse.

```
```

{sample}CS\_Legend\_18{sample}


## One Legend for Several Charts

As you can see, one legend can contain different information from one chart. Moreover, one legend can contain information from several charts. To add several chart into one legend use {api:anychart.standalones.Legend#itemsSource}itemsSource(){api} method and define charts for legend's content.

```
// define charts
var chart2005 = anychart.column();
var chart2006 = anychart.column();

// create custom legend
var legend = anychart.standalones.legend();
// set sources for legend items
legend.itemsSource([chart2005, chart2006]);
```

{sample}CS\_Legend\_19{sample}

## One Legend for Several Series

You can attache an event to a legend items. Use {api:anychart.core.ui.Legend#listen}listen(){api} method to set an event for a legend. List of possible event can be found in {api:anychart.enums.EventType}anychart.enums.EventType{api}. For additional information on events in AnyChart you can find in [Event Listeners tutorial](../Common_Settings/Event_Listeners)

```
// create legend
var legend = anychart.standalones.legend();

// enable and disable series on legend item click
legend.listen("legendItemClick", function(event) {
  // get item's index
  var index = event["itemIndex"];
  // manage enabled/disabled state of the series
  chart2005.getSeries(index).enabled(! chart2005.getSeries(index).enabled());
  chart2006.getSeries(index).enabled(! chart2006.getSeries(index).enabled());
});
```

Sample below demonstrate managing several series with one legend item.

{sample}CS\_Legend\_20{sample}
