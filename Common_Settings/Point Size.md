# Point Size

## Overview

Some chart types allow setting the width, maximum width, and mimimum length of points. These settings are available for all charts with points looking like bars: Bar, Column, and related types.

Please note that you can configure either the whole chart or an individual series.

## Width

In Bar, Column, and related chart types the width of points (bars) is calculated automatically: it depends on the size of the chart and the number of points.

You can set a fixed width by using the **pointWidth()** method of the class your chart or series belongs to. For example, in the case of Cartesian charts it is {api:anychart.charts.Cartesian#pointWidth}pointWidth(){api}.

```
// set the width of points
column1.pointWidth(20);
```

{sample}CS\_Point\_Size\_01{sample}

## Maximum Width

You can set a limit to the width of points by using the **maxPointWidth()** method of the class your chart or series belongs to. For example, in the case of Cartesian charts it is {api:anychart.charts.Cartesian#maxPointWidth}maxPointWidth(){api}.

```
// set the maximum width of points
column1.maxPointWidth(20);
```

{sample}CS\_Point\_Size\_02{sample}

## Minimum Length

The default minimum length of a point is 1: when the value of a point is 0, it is still visualized as if its value were 1.

If you want points with zero values to be visualized as longer bars, use the **minPointLengthe** method of the class your chart or series belongs to. For example, in the case of Cartesian charts it is {api:anychart.charts.Cartesian#minPointLength}minPointLength(){api}.

```
// set the minimum length of points
column1.minPointLength(10);
```

{sample}CS\_Point\_Size\_03{sample}