{:index 7.5}
#Venn Diagram
* [Overview](#overview)
* [Quick Start](#quick_start)
* [Special Settings](#special_settings)

## Overview
## Overview

A waterfall chart is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values. The waterfall chart is also known as a flying bricks chart or Mario chart due to the apparent suspension of columns (bricks) in mid-air.

## Quick Start

To create a Waterfall chart use {api:anychart#waterfall}waterfall(){api} method, you can pass the data right into the constructor:

```
chart = anychart.waterfall(
        [4, 5, NaN, -2, 4, NaN], // series 1
        [4, 5, NaN, 3, 4, NaN], // series 2
        [4, {value: 10, isTotal: false}, NaN, -2, 4, NaN]); // series 3
chart.dataMode('diff');
chart.container('container')
chart.draw();
});
```

Here is a basic Waterfall chart:

{sample}BCT\_Venn\_Diagram\_01{sample}
