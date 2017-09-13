{:index 13.5}
# Map Axes

## Overview

Drawing Parallels and Meridians Axes, Labels and Ticks is controlled using Map Axes object described in this Article, [Grid](Map_Grid) controls Parallels and Meridians grid and [Geo Scale](Geo_Scale) to control axes and grid parameters.

Axes are objects used to control how bounding lines, labels and tickmarks look. Placement of tickmarks is controlled by [Geo Scale](Geo_Scale).

Configuring axes is done using {api:anychart.charts.Map#axes}axes(){api} object represented by an instance of {api:anychart.core.axes.MapSettings}axes.MapSettings{api} class.

### Lines

To configure all lines at once use {api:anychart.core.axes.MapSettings#stroke}stroke(){api}:

```
map.axes().stroke("Black", 2, "5 5");
```

To override common settings and enable/disable or format lines on selected sides:

```
map.axes().right().stroke("Black 2");
map.axes().top().stroke("Black", 2, "5 5");
```

{sample}Maps\_Axes\_01{sample}

### Labels

To configure all labels at once use:

```
map.axes().labels();
map.axes().minorLabels();
```

To override common settings and enable/disable or format labels on selected sides:

```
map.axes().right().labels(false);
map.axes().top().minorLabels(true);
```

{sample}Maps\_Axes\_02{sample}

### Ticks

To configure all ticks at once use:

```
map.axes().ticks();
map.axes().minorTicks();
```

To override common settings and enable/disable or format labels on selected sides:

```
map.axes(true);
map.axes().ticks().stroke("Red");        
map.axes().top().ticks(false;
map.axes().top().minorTicks(false);
```

{sample}Maps\_Axes\_03{sample}

### Titles

All axes can have titles, you can configure them individually:

```
map.axes().right().title(false);
map.axes().left().title("Latitude");
map.axes().left().title().fontSize(14);
```

{sample}Maps\_Axes\_04{sample}

