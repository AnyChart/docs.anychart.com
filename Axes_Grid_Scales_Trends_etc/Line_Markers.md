{:index 7}
# Line Markers

              
* [Overview](#overview)
* [Setting Line Marker](#setting)
* [Combine Line and Text Markers](#combine)

<a name="overview"/>
## Overview

Line markers are lines bound to a scale and require a value to be drawn at.

These lines are useful when you need to highlight some value(s) on an axis. If you need to highlight value with text, but not line, please take look at [Text Markers](Text_Markers) article.

You can add custom line markers to any scale, both x scale, y scale and additional scales.

<a name="setting"/>
## Setting Line Marker

To add line marker you need to use **.lineMarker()** method and set **.scale()**, **.fill()** and **.layout()** attributes.

```
    chart.textMarker(1)
        .scale(chart.yScale())
        .value(9000)
        .text('Lowest')
        .align('NEAR')
        .anchor('rightcenter')
        .fontSize(13)
        .offsetX(30)
        .fontColor('green');
            
    chart.textMarker()
        .scale(chart.yScale())
        .value(19000)
        .text('Highest')
        .align('NEAR')
        .anchor('rightcenter')
        .fontSize(13)
        .offsetX(30)
        .fontColor('red');

    chart.lineMarker()
        .stroke('green')
        .layout('horizontal')
        .scale(chart.yScale())
        .value(9000);
    
    chart.lineMarker(1)
        .stroke({color: 'red', dash: '7', opacity: 1})
        .layout('horizontal')
        .scale(chart.yScale())
        .value(19000);
```


The sample below shows horizontal lines, that indicates minimum and maximum value.

{sample}AGST\_Line\_Marker\_01{sample}

<a name="combine"/>
## Combine Line and Text Markers

In some cases it's much more useful to combine line and text markers for emphasizing particular data.

{sample}AGST\_Line\_Marker\_02{sample}

