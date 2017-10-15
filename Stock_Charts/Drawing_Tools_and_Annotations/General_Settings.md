{:index 2.1}
# General Settings

## Overview

In this article, you can learn about the main general settings of annotations, allowing to [hardcode](#hardcoding) or [draw](#drawing) them, [bind them to axes](#binding_to_axes), and configure [visual settings](#visual_settings) and [hover gap](#hover_gap).

## Hardcoding

To add an annotation to a chart, refer to the {api:anychart.core.annotations.PlotController}annotations(){api} object and call one of the methods used for creating annotations: {api:anychart.core.annotations.Ellipse}ellipse(){api}, {api:anychart.core.annotations.Rectangle}rectangle(){api}, {api:anychart.core.annotations.Triangle}triangle(){api}, and so on. You can find the full list of the available types of annotations in the [Overview](Overview#annotation_types) section.

You can configure annotations, like most other entities in AnyChart, in two ways: using either JavaScript API methods or object notation. As a rule, object notation is the most convenient way to set the properties of an annotation (see the [Serializing and Deserializing](Serializing_Deserializing) article).

The following sample shows how to create an Ellipse annotation and use object notation to configure it:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// create a line series
var lineSeries = plot.line(mapping);
lineSeries.name("CSCO");

// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an Ellipse annotation
controller.ellipse({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2008-08-10",
    secondValueAnchor: 24.91,
});
```

{sample}STOCK\_Drawing\_General\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of annotations can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api} 

Combine them with these methods: {api:anychart.core.StateSettings}anychart.core.StateSettings{api}. Please note that the list of the available settings may vary depending on the [annotation type](Overview#annotation_types).

In the sample below, there are two annotations, an Ellipse and an Infinite Line, which change when a user hovers over or selects them. Like in the previous sample, object notation is used to configure the properties:

```
// create an Ellipse annotation and configure its visual settings
plot.annotations().ellipse({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2007-02-24",
    secondValueAnchor: 31.92,
    hovered: {
        fill: "#398cae 0.3",
        stroke: "2 #ff0000",
    },
    selected: {
        fill: "#398cae 0.3",
        stroke: "4 #FF0000"
    }
});

// create an Infinite Line annotation and configure its visual settings
controller.infiniteLine({
    xAnchor: "2005-09-04",
    valueAnchor: 18.58,
    secondXAnchor: "2008-08-10",
    secondValueAnchor: 24.91,
    hovered: {stroke: "2 #ff0000"},
    selected: {stroke: "4 #ff0000"}
});
```

{sample}STOCK\_Drawing\_General\_02{sample}

You can also use methods instead of objects. For example, in this sample the markers of the Ellipse are colored green on hover and select, and the markers of the Infinite Line are disabled on select:

```
// create an Ellipse annotation
var ellipse = controller.ellipse({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2007-02-24",
    secondValueAnchor: 31.92,
});

// create an Infinite Line annotation
var infiniteLine = controller.infiniteLine({
    xAnchor: "2005-09-04",
    valueAnchor: 18.58,
    secondXAnchor: "2008-08-10",
    secondValueAnchor: 24.91,
});

// configure the annotation markers
ellipse.hovered().markers({size: 6, fill: "#00b300"});
ellipse.selected().markers({size: 6, fill: "#00b300"});
infiniteLine.selected().markers(false);
```

{sample}STOCK\_Drawing\_General\_03{sample}

## Hover Gap

Another setting of annotations you can configure is the hover gap: use the {api:anychart.core.annotations.Base#hoverGap}hoverGap(){api} method. In the following sample, it is increased to 30:

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an Ellipse annotation and configure its hover gap
controller.ellipse({
    hoverGap: 30
});
```

{sample}STOCK\_Drawing\_General\_04{sample}

## Forbidding Editing

To forbid or allow editing an annotation, use the {api:anychart.core.annotations.Base#allowEdit}allowEdit(){api} method (by default editing is allowed):

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an Ellipse annotation
var ellipse = plot.annotations().ellipse({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2007-02-24",
    secondValueAnchor: 31.92,
});

// create an Infinite Line annotation
var infiniteLine = plot.annotations().infiniteLine({
    xAnchor: "2005-09-04",
    valueAnchor: 18.58,
    secondXAnchor: "2008-08-10",
    secondValueAnchor: 24.91,
});

//disable interactivity for the Ellipse annotation
ellipse.allowEdit(false);

// enable interactivity for the Infinite Line annotation
infiniteLine.allowEdit(true);
```

{sample}STOCK\_Drawing\_General\_05{sample}

## Binding to Axes

If there is an extra axis on your plot, you can bind an annotation to that axis using the {api:anychart.core.annotations.Base#yScale}yScale(){api} or {api:anychart.core.annotations.Base#xScale}xScale(){api} method. By default, all annotations are bound to the main axes.

In the sample below, there is an Infinite Line annotation, bound to the main Y-scale, and an Ellipse annotation, bound to the additional Y-scale:

```
// create an additional Y-scale
var extraYScale = anychart.scales.linear();

// create an additional Y-axis
var extraYAxis = plot.yAxis(1);

// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an Infinite Line annotation (automatically bound to the main Y-scale)
controller.infiniteLine({
    xAnchor: "2004-01-06",
    valueAnchor: 2039.63,
    secondXAnchor: "2004-01-15",
    secondValueAnchor: 2088.10
});

//create an Ellipse annotation
var ellipse = controller.ellipse({
    xAnchor: "2004-01-07",
    valueAnchor: 2583950080,
    secondXAnchor: "2004-01-09",
    secondValueAnchor: 2783950080
});

// bind the Ellipse annotation to the additional Y-scale
ellipse.yScale(extraYScale);
```
{sample}STOCK\_Drawing\_General\_06{sample}

## Drawing

To provide users with the opportunity to draw annotations, use the {api:anychart.core.annotations.PlotController#startDrawing}startDrawing(){api} method and specify the annotation type by using one from the {api:anychart.enums.AnnotationTypes}Annotation Types{api} enum. To learn more, see this article: [Drawing](Drawing).

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// start drawing the annotation
controller.startDrawing("ellipse");
```

Here is a basic sample, demonstrating how the Drawing feature is used. Users can draw Ellipses, Rectangles, and Triangles or remove all annotations from the plot:

{sample}STOCK\_Drawing\_General\_07{sample}