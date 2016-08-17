{:index 13.5}
# Map Grid

* [Overview](#overview)
* [Grid](#grid)
 * [Lines](#grid_lines)
 * [Interlace](#interlace)
 * [Precision](#precision) 
* [Axes](#axes)
 * [Lines](#lines)
 * [Labels](#labels)
 * [Ticks](#ticks)
 * [Titles](#titles)
* [Geo Scale](#geo_scale)

## Overview

Drawing Parallels and Meridians Grid is controlled using [Grid](#grid) object, [Axes](#axes) to control lines, labels and ticks and [Geo Scale](#geo_scale) to control axes and grid parameters.

## Grid

Map grid is a single object, use {api}grid(){api} method to control it:

```
var map = anychart.map();
map.grid(true);
```

Here is a sample of a map with a grid with default setttings turned on:

{sample}Maps\_Grid\_01{sample}

### Grid Lines

```
var grid = map.grid();
grid.stroke("White 0.5");
grid.minorStroke("White 0.1");
```

### Interlace

To make grid more aesthetically please or to avoid using grid lines alltogether you can use interlaced fill:

```
map.grid().oddFill("Blue 0.5");
map.grid().evenFill("LightBlue 0.5");
```

### Precision

Grid display precision is controlled using {api}precision(){api} method:

```
var grid = map.grid();
grid.precision(0.5);
```

## Axes

Axes are objects used to control how bounding lines, labels and tickmarks look. Placement of tickmarks is controlled by [Geo Scale](#geo_scale).

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

## Geo Scale

Geo Scale is primarily used to control intervals where grid lines and ticks are placed:

```
var scale = map.geoScale();
scale.xTicks.interval(10);
scale.yTicks.interval(10);
scale.xMinorTicks.interval(2);
scale.yMinorTicks.interval(2);
```

