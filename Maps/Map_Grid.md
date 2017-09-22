{:index 13.5}
# Map Grid

## Overview

Drawing Parallels and Meridians Grid is controlled using Map Grid object described in this Article, [Axes](Map_Axes) to control lines, labels and ticks and [Geo Scale](Geo_Scale) to control axes and grid parameters.

## Grid

Map grid is a single object, use {api:anychart.charts.Map#grids}grids(){api} method to control it:

```
var map = anychart.map();
map.grids(true);
```

Here is a sample of a map with a grid with default setttings turned on:

{sample}Maps\_Grid\_01{sample}

## Lines

To tune grid lines use {api:anychart.core.grids.MapSettings#stroke}stroke(){api} and {api:anychart.core.grids.MapSettings#minorStroke}minorStroke(){api} methods:

```
var grids = map.grids();
grids.stroke("Black", 2, "5 2");
grids.minorStroke("Black", 0.5);
```
{sample}Maps\_Grid\_02{sample}

## Interlace

To make grid more aesthetically pleasing or to avoid using grid lines alltogether you can use interlaced fill, which is configured using {api:anychart.core.grids.MapSettings#palette}palette(){api} method:

```
mapGrids = map.grids();
mapGrids.enabled(true);
mapGrids.vertical().palette(["LightBlue 0.2", "LightBlue 0.5"]);
```

{sample}Maps\_Grid\_03{sample}


