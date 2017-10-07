# Point Size

## Overview

All charts with points looking like bars (Bar, Column, and related types) allow you to set the size of the points: the width, the maximum width, and the minimum length.

Please note that you can configure either the whole chart or an individual series.

## Width

In Bar, Column, and related chart types the width of points (bars) is calculated automatically: it depends on the size of the chart and the number of points. However, you can set a fixed width by using the {api:?entry=pointWidth}pointWidth(){api} method of the class your chart or series belongs to and specifying a numeric value or a percentage:

```
// set the width of points
column1.pointWidth(20);
```

{sample}CS\_Point\_Size\_01{sample}

## Maximum Width

You can set a limit to the width of points by using the {api:?entry=maxPointWidth}maxPointWidth(){api} method of the class your chart or series belongs to and specifying a numeric value or a percentage:

```
// set the maximum width of points
column1.maxPointWidth("15%");
```

{sample}CS\_Point\_Size\_02{sample}

## Minimum Length

When the magnitude of difference between values is too high, some elements with low values might look too small and be difficult to interact with. In this case you can make them bigger by using the {api:?entry=minPointLength}minPointLength(){api} method of the class your chart or series belongs to and specifying a numeric value or a percentage:

```
// set the minimum length of points
column1.minPointLength(10);
```

{sample}CS\_Point\_Size\_03{sample}