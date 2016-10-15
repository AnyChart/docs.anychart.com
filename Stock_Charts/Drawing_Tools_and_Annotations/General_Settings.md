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

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

## Hardcoding Annotations

... Adding in code or [Serialize and Deserialize](Serializing_Deserializing) as a list. ...

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

{sample}STOCK\_Drawing\_General\_01{sample}

## States

... hover, selected, drawing, edit: fill, stroke, trend_line, label ...


```
```

{sample}STOCK\_Drawing\_General\_02{sample}

## Hover Gap

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

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

{sample}STOCK\_Drawing\_General\_03{sample}

<a name="binding"></a>
## Binding to Axes

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```
```

{sample}STOCK\_Drawing\_General\_04{sample}

## Drawing

... [Drawing](Drawing). ...


```
```

{sample}STOCK\_Drawing\_General\_05{sample}

## Defaults

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX