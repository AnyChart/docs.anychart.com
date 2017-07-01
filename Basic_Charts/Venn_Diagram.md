{:index 6.9}
#Venn Diagram

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Samples](#samples)

## Overview

a diagram representing mathematical or logical sets pictorially as circles or closed curves within an enclosing rectangle (the universal set), common elements of the sets being represented by intersections of the circles.

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Venn}anychart.charts.Venn{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[???](???)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="???" target="_blank">???</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

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
