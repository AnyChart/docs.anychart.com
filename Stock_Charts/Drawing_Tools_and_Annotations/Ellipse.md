{:index 3}
#Ellipse

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

The Ellipse annotation allows to add an ellipse or a circle to a chart.

[Drawing Tools and Annotations: General Settings](General_Settings)
[Drawing Tools and Annotations: Drawing](Drawing)
[Drawing Tools and Annotations: Seiralizing Deserializing](Serializing and Deserializing)


## Basic Settings

ЧТОБЫ ЗАДАТЬ ЭЛЛИПС, НУЖНО 4 ТОЧКИ...
```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// create a line series
var lineSeries = plot.line(mapping);
lineSeries.name('CSCO');

// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an ellipse annotation
controller.ellipse({
    xAnchor: '2006-11-20',
    valueAnchor: 25.92,
    secondXAnchor: '2008-08-10',
    secondValueAnchor: 24.91,
});
```

{sample}STOCK\_Drawing\_Ellipse\_01{sample}

## Visual Settings

СПИСОК НАСТРОЕК

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an ellipse annotation and configure its visual settings
controller.ellipse({
    xAnchor: '2006-11-20',
    valueAnchor: 25.92,
    secondXAnchor: '2007-02-24',
    secondValueAnchor: 31.92,
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectStroke: "5 #FF0000"
});
```

{sample}STOCK\_Drawing\_Ellipse\_02{sample}

