{:index 3}

# Standalones

* [Overview](#overview)
* [Standalones List](#standalones_list)
* [Using Standalones](#using_standalones)
 * [Scales](#scales)
 * [Legend](#legend)
 * [Axes](#axes)
 * [Color Range](#color_range)
 * [Data Grid](#data_grid)
 * [Timeline](#timeline)
 * [Resource List](#resource_list)
* [Custom Chart with Standalones](#custom_chart_with_standalones)

## Overview

Standalones are elements of the charting library. They are not charts or parts of charts themselves, they are building blocks that can be used to build anything or create the added functionality. Standalones do not depend on a chart, so they allow to create completely custom charts and manage them or add some custom elements to charts made with AnyChart solutions. 

## Standalones List

Full list of standalone elements and classes is available in {api:anychart.standalones}anychart.standalones{api} namespace.

## Using Standalones

Using standalone elements is no more complicated than using basic AnyChart elements.

The following sample demonstrates adding a title element on a simple chart:

```
// add a title standalone object on the chart
title = anychart.standalones.title();
title.text("This is the title");
```

{sample}Standalones\_01{sample}

The difference between using a chart title and a standalone title is in positioning. A chart title is positioned automatically, as well as the chart padding. When use standalone title, it is necessary to set padding to the chart in order to prevent title from overlaying the series. Let's add a chart title to the chart, it will make the difference more evident.

```
// add a chart title
cTitle = chart.title("The chart title");
```

{sample}Standalones\_02{sample}

You can see that a chart title is demonstrated under a standalone title with no positioning settings, and the chart is shifted down a little automatically.

Let's set padding to the chart and add a table:

```
// create a table and fill it in
table = anychart.standalones.table();
table.rowsCount(3);
table.colsCount(5);
table.bounds("80%", "37%", 200, 100);
```

{sample}Standalones\_03{sample}

Now, let's set the chart width and add several series.

```
// set chart width
chart.width("80%");
```

{sample}Standalones\_04{sample}

There are more standalone elements you can use. Let's try a Label element and add some description text. Also you can use {api:anychart.standalones.grids.linear}a linear standalone grid{api} in the chart.

```
// set chart width
chart.width("80%");
```

{sample}Standalones\_05{sample}

You can notice that this sample now looks more like a dashboard. So, using standalones is one of the ways to create dashboards.

Below you can find several sample adding standalone elements to the chart.

### Scales

It is possible to create a scale separately from the chart and then use them together.

```
// create a standalone scale
scaleNew = anychart.standalones.scale();
```

### Legend

It is possible to create a custom standalone legend and edit it in a way you need it to behave or to use one legend for several charts.

```
// create a standalone legend
legend = anychart.standalones.legend();
```

{sample}Standalones\_06{sample}

A standalone legend has neither color nor connection to the series of the chart. There are two ways to set the legend items: it is possible to use the {api:anychart.standalones.Legend#items}items(){api} method and set all items as a simple dataset, or you can set all items automatically - this way is quite practical when there are many charts combined on a stage or when there is no sense in showing a legend for each chart (or if it is inconvenient). 

A standalone legend view can be edited as a chart one. Let's set the items as a dataset through the {api:anychart.standalones.Legend#items}items(){api} method and add the colors to the legend due to the series and make it to select all points of the selected series instead of disabling it. To set the colors to the icons, use the {api:anychart.core.ui.LegendItem#iconFill}iconFill(){api} method. It is also possible to set icon colors through the "iconFill" field in the dataset.

```
legend.items([
    {index: 0, text: "Kansas", iconFill: "#64b5f6"},
    {index: 1, text: "Florida", iconFill: "#1976d2"},
    {index: 2, text: "Arizona", iconFill: "#ef6c00"},
    {index: 3, text: "Washington", iconFill: "#ffd54f"}, 
    {index: 4, text: "Massachusetts", iconFill: "#455a64"},
    {index: 5, text: "Texas", iconFill: "#96a6a6"},
    {index: 6, text: "Iowa", iconFill: "#dd2c00"}
]);
```

{sample}Standalones\_07{sample}

The next sample demonstrates the {api:anychart.standalones.Legend#itemsSource}itemsSource{api} method, which makes it easier to unite several legends if necessary.

```
legend.items([
    {index: 0, text: "Kansas", iconFill: "#64b5f6"},
    {index: 1, text: "Florida", iconFill: "#1976d2"},
    {index: 2, text: "Arizona", iconFill: "#ef6c00"},
    {index: 3, text: "Washington", iconFill: "#ffd54f"}, 
    {index: 4, text: "Massachusetts", iconFill: "#455a64"},
    {index: 5, text: "Texas", iconFill: "#96a6a6"},
    {index: 6, text: "Iowa", iconFill: "#dd2c00"}
]);
```

{sample}Standalones\_08{sample}

### Axes

Coming soon.

### Color Range

Coming soon.

### DataGrid

Coming soon.

### TimeLine

Coming soon.

### ResourceList

Coming soon.

## Custom Chart with Standalones

Coming soon.
