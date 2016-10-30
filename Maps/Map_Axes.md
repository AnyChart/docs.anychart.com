{:index 13.5}
# Map Axes

* [Overview](#axes)
* [Lines](#lines)
* [Labels](#labels)
* [Ticks](#ticks)
* [Titles](#titles)

## Overview

Drawing Parallels and Meridians Axes, Labels and Ticks is controlled using Map Axes object described in this Article, [Grid](Map_Grid) controls Parallels and Meridians grid and [Geo Scale](Geo_Scale) to control axes and grid parameters.

Axes are objects used to control how bounding lines, labels and tickmarks look. Placement of tickmarks is controlled by [Geo Scale](Geo_Scale).

### Lines

To configure all lines at once use {api}stroke(){api}:

```
map.axes().stroke();
```

To override common settings and enable/disable or format lines on selected sides:

```
map.axes().right().stroke("Black");
map.axes().top().stroke("White");
```

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

### Ticks

To configure all ticks at once use:

```
map.axes().ticks();
map.axes().minorTicks();
```

To override common settings and enable/disable or format labels on selected sides:

```
map.axes().right().ticks(false);
map.axes().top().minorTicks(false);
```

### Titles

All axes can have titles, you can configure them individually:

```
map.axes().right().title(false);
map.axes().left().title("Latitude");
map.axes().left().title().fontSize(14);
```

