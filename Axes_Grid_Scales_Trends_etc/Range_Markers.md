# Range Markers

* [Overview](#overview)
* [Setting Range](#range)
* [Combining Range and Text Markers](#combining)
* [Advanced Ranges Visualization](#advanced)

<a name="overview"/>
## Overview

Range Markers (sometimes referred as areas or zones) are colored areas bound to a scale, that are drawn through data plot.
<br/><br/>
These areas are useful when you need to name a highlight some value(s) on axis.
<br/><br/>
You can add Range Markers on any scale, both x scale, y scale and additional scale.

<a name="range"/>
## Setting Range

To add range marker you need to use **rangeMarker()** method. Each range marker has several compulsory attributes: **.scale()**, **.from()**, **.to()** and **.fill()**.

```
    chart.rangeMarker()
        .scale(chart.yScale())
        .from(20000)
        .to(30000)
        .fill('green 0.5');

    chart.rangeMarker(1)
        .scale(chart.yScale())
        .fill('gold 0.5')
        .from(10000)
        .to(20000);

    chart.rangeMarker(2)
        .scale(chart.yScale())
        .from(0)
        .to(10000)
        .fill('red 0.5');
```

The sample below shows horizontal axes ranges.

{sample}AGST\_Range\_Marker\_01{sample}

<a name="combining"/>
## Combining Range and Text Markers

Combination of range and text markers may be very useful to emphasize certain information or to set a kind of comment or mark some kind of data.

{sample}AGST\_Range\_Marker\_02{sample}

<a name="advanced"/>
## Advanced Ranges Visualization

As far as range marker has method **.fill()**, you can also use gradient and image fills of range to achieve desired style of your charts.

```
    chart.rangeMarker(2)
        .scale(chart.yScale())
        .from(0)
        .to(30000)
        .fill({
            keys: ['.1 green', '.5 yellow', '.9 red'],
            angle: -90,
            opacity: 0.5
        });
```
Sample below shows semitransparent filled range.

{sample}AGST\_Range\_Marker\_03{sample}