{:index 2}
#General Settings

* [Overview](#overview)
* [Hardcoding Annotations](#hardcoding_annotations)
* [Visual Settings](#visual_settings)
* [Hover Gap](#hover_gap)
* [Binding to Axes](#binding_to axes)
* [Drawing](#drawing)
* [Defaults](#defaults)

## Overview

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

## Hardcoding Annotations

... Adding in code or [Serialize and Deserialize](Serializing_Deserializing) as a list. ...

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

{sample}STOCK\_Drawing\_General\_01{sample}

## Visual Settings

... hover, selected, drawing, edit: fill, stroke, trend_line, label ...


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

{sample}STOCK\_Drawing\_General\_02{sample}

## Hover Gap

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an ellipse annotation and configure its visual settings and hover gap
controller.ellipse({
    xAnchor: '2006-11-20',
    valueAnchor: 25.92,
    secondXAnchor: '2007-02-24',
    secondValueAnchor: 31.92,
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectStroke: "5 #FF0000",
    hoverGap: 30
});
```

{sample}STOCK\_Drawing\_General\_03{sample}

## Binding to Axes

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// create an additional Y-scale
var extraYScale = anychart.scales.linear();

// create an additional Y-axis
var extraYAxis = plot.yAxis(1);

// create an OHLC series
var ohlcSeries = plot.ohlc(ohlcMapping);

// create a line series and bind it to the additional Y-scale
var lineSeries = plot.line(lineMapping);
lineSeries.yScale(extraYScale);

// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an infinite line annotation (automatically bound to the main Y-scale)
controller.infiniteLine({
    xAnchor: '2004-01-06',
    valueAnchor: 2039.63,
    secondXAnchor: '2004-01-15',
    secondValueAnchor: 2088.10
});

//create an ellipse annotation
var ellipse = controller.ellipse({
    xAnchor: '2004-01-07',
    valueAnchor: 2583950080,
    secondXAnchor: '2004-01-09',
    secondValueAnchor: 2783950080
});

// bind the ellipse annotation to the additional Y-scale
ellipse.yScale(extraYScale);
```

{sample}STOCK\_Drawing\_General\_04{sample}

## Drawing

... [Drawing](Drawing). ...


```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// start drawing the annotation
controller.startDrawing("ellipse");
```

{sample}STOCK\_Drawing\_General\_05{sample}

## Defaults

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX