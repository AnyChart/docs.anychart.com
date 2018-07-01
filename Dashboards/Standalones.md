{:index 3}

# Standalones

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

There are more standalone elements you can use. Let's try a Label element and add some description text. Also you can use {api:anychart.standalones.grids#linear}a linear standalone grid{api} in the chart.

```
// set chart width
chart.width("80%");
```

{sample}Standalones\_05{sample}

You can notice that this sample now looks more like a dashboard. So, using standalones is one of the ways to create dashboards.

Below you can find several sample adding standalone elements to the chart.

### Scales

Coming soon.

### Legend

Coming soon.

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
