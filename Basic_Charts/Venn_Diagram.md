{:index 6.9}
#Venn Diagram

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Samples](#samples)

## Overview

a diagram representing mathematical or logical sets pictorially as circles or closed curves within an enclosing rectangle (the universal set), common elements of the sets being represented by intersections of the circles.

## Quick Start

To create a Venn diagramm use {api:anychart#venn}venn(){api} method, you can pass the data right into the constructor:

```
anychart.onDocumentReady(function () {
    var data = [
        {
            x: 'A',
            name: 'Play computer games',
            value: 100
        },
        {
            x: 'B',
            name: 'To much homework',
            value: 100
        },
        {
            x: 'A&B',
            name: 'Late Nights',
            value: 25,
        }
    ];

    // create venn diagram
    chart = anychart.venn(data);

    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
});
```

Here is a live sample:

{sample}BCT\_Venn\_Diagram\_01{sample}

## Samples

You can find a lot of samples of Venn charts in [AnyChart Venn Charts Gallery](https://www.anychart.com/products/anychart/gallery/Venn_Diagram/)
