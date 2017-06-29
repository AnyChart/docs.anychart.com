{:index 7.5}
#Waterfall Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Samples](#samples)

## Overview

A waterfall chart is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values. The waterfall chart is also known as a flying bricks chart or Mario chart due to the apparent suspension of columns (bricks) in mid-air.

## Quick Start

To create a Waterfall chart use {api:anychart#waterfall}waterfall(){api} method, you can pass the data right into the constructor:

```
var data = [
    {x: 'Start', value: 23},
    {x: 'Jan', value: 22},
    {x: 'Feb', value: -46},
    {x: 'Mar', value: -91},
    {x: 'Apr', value: 37},
    {x: 'May', value: -21},
    {x: 'Jun', value: 53},
    {x: 'Jul', value: 31},
    {x: 'Aug', value: -15},
    {x: 'Sep', value: 42},
    {x: 'Oct', value: 53},
    {x: 'Nov', value: -15},
    {x: 'Dec', value: 51},
    {x: 'End', isTotal: true}
];

// create waterfall chart with our data
chart = anychart.waterfall(data);

// set data mode
chart.dataMode("absolute");

// set container id for the chart
chart.container('container');
// initiate chart drawing
chart.draw();
```

Here is a basic Waterfall chart in "diff" dataMode:

{sample}BCT\_Waterfall\_Chart\_01{sample}

Here is a basic Waterfall chart in "absolute" dataMode:

{sample}BCT\_Waterfall\_Chart\_02{sample}

## Samples

You can find a lot of samples of Waterfall charts in [AnyChart Waterfall Charts Gallery](https://www.anychart.com/products/anychart/gallery/Waterfall_Charts/)