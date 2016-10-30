{:index 13.5}
# Map Grid

* [Overview](#overview)
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

Drawing Parallels and Meridians Grid is controlled using Map Grid object described in this Article, [Axes](Map_Axes) to control lines, labels and ticks and [Geo Scale](Geo_Scale) to control axes and grid parameters.

## Grid

Map grid is a single object, use {api}grid(){api} method to control it:

```
var map = anychart.map();
map.grid(true);
```

Here is a sample of a map with a grid with default setttings turned on:

{sample}Maps\_Grid\_01{sample}

## Lines

```
var grid = map.grid();
grid.stroke("White 0.5");
grid.minorStroke("White 0.1");
```

## Interlace

To make grid more aesthetically please or to avoid using grid lines alltogether you can use interlaced fill:

```
map.grid().oddFill("Blue 0.5");
map.grid().evenFill("LightBlue 0.5");
```

## Precision

Grid display precision is controlled using {api}precision(){api} method:

```
var grid = map.grid();
grid.precision(0.5);
```

