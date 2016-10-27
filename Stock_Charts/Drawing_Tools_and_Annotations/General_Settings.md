{:index 2}
#General Settings

* [Overview](#overview)
* [Hardcoding Annotations](#hardcoding_annotations)
* [States](#states)
* [Hover Gap](#hover_gap)
* [Binding to Axes](#binding)
* [Drawing](#drawing)
* [Defaults](#defaults)

## Overview

Coming soon.

## Hardcoding Annotations

Adding in code or [Serialize and Deserialize](Serializing_Deserializing) as a list.

```
anychart.onDocumentReady(function () {
chart = anychart.line([6, 10, 18, 11, 9]);
chart.yScale().minimum(0);
chart.xScale("linear");

var controller = chart.annotations();

// Create ellipse annotation.
controller.ellipse({
    xAnchor: 1.9,
    valueAnchor: 17,
    secondXAnchor: 2.1,
    secondValueAnchor: 19,
    fill: "#F44336 0.3"
});

chart.title("Create ellipse annotation.");
chart.container("container");
chart.draw();
});
```

## States

hover, selected, drawing, edit:
fill, stroke, trend_line, label

## Hover Gap

```
var controller = chart.annotations();

// Create ellipse annotation.
controller.ellipse({
    xAnchor: 1.9,
    valueAnchor: 17,
    secondXAnchor: 2.1,
    secondValueAnchor: 19,
    hover_gap: 10;
});
```

<a name="binding"></a>
## Binding to Axes

Coming soon.

## Drawing

[Drawing](Drawing).

## Defaults

Coming soon.