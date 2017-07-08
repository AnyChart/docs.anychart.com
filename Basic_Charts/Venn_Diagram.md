{:index 6.9}
#Venn Diagram

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Data](#data)
* [Appearance](#appearance)
* [Intersection](#intersection)
* [Labels](#labels)
* [Tooltips](#tooltips)

## Overview

[a diagram representing mathematical or logical sets pictorially as circles or closed curves within an enclosing rectangle (the universal set), common elements of the sets being represented by intersections of the circles.]

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Venn}anychart.charts.Venn{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, name](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td><a href="???" target="_blank">Chartopedia: Venn Diagram</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

{api:anychart#venn}venn(){api}

```
//create data
var data = [
    {
        x: "A",
        value: 100
    },
    {
        x: "B",
        value: 100
    },
    {
        x: ["A", "B"],
        value: 25
    }
];

// create a chart and set the data
chart = anychart.venn(data);

// configure labels of intersections
chart.intersections().labels().format("{%X}");

// set the container id
chart.container('container');

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Venn\_Diagram\_01{sample}

## Data

```
//create data
var data = [
    {
        x: "A",
        name: "Element A",
        value: 400
    },
    {
        x: "B",
        name: "Element B",
        value: 200
    }
];
```

{sample}BCT\_Venn\_Diagram\_02{sample}

```
//create data
var data = [
    {
        x: "A",
        name: "Element A",
        value: 100
    },
    {
        x: "B",
        name: "Element B",
        value: 100
    },
    {
        x: "C",
        name: "Element C",
        value: 100
    },
    {
        x: ["A", "B"],
        value: 20
    },
    {
        x: ["A", "C"],
        value: 20
    },
    {
        x: ["B", "C"],
        value: 20
    },
    {
        x: ["A", "B", "C"],
        value: 20
    }
];
```

{sample}BCT\_Venn\_Diagram\_03{sample}

```
// set the data separator
chart.dataSeparator("+")
```

```
//create data
var data = [
    {
        x: "A",
        name: "Element A",
        value: 100
    },
    {
        x: "B",
        name: "Element B",
        value: 100
    },
    {
        x: "C",
        name: "Element C",
        value: 100
    },
    {
        x: "A+B",
        value: 20
    },
    {
        x: "A+C",
        value: 20
    },
    {
        x: "B+C",
        value: 20
    },
    {
        x: "A+B+C",
        value: 20
    }
];
```

{sample}BCT\_Venn\_Diagram\_04{sample}

## Appearance

```
// configure visual settings
chart.fill("#00cc99", 0.3);
chart.hoverFill("#00cc99", 0.3);
chart.selectFill("#00cc99", 0.5);
chart.hatchFill("percent20", "#808080");
chart.hoverHatchFill("percent20", "#808080");
chart.selectHatchFill("percent20", "#808080");
chart.stroke("#00cc99");
chart.hoverStroke("#00cc99", 2);
chart.selectStroke("#00cc99", 4);
```

{sample}BCT\_Venn\_Diagram\_05{sample}

## Intersection

```
// configure visual settings of intersections
var intersect = chart.intersections();    
intersect.fill("white", 0.3);
intersect.hoverFill("white", 0.3);
intersect.selectFill("white", 0.5);
intersect.hatchFill("percent20", "#808080");
intersect.hoverHatchFill("percent20", "white");
intersect.selectHatchFill("percent20", "white");
intersect.stroke("white");
intersect.hoverStroke("white", 2);
intersect.selectStroke("white", 4);
```

{sample}BCT\_Venn\_Diagram\_06{sample}

## Labels

## Tooltips