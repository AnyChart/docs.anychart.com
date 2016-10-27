{:index 2}
#General Settings

* [Overview](#overview)
* [Hardcoding](#hardcoding_annotations)
* [Visual Settings](#visual_settings)
* [Hover Gap](#hover_gap)
* [Binding to Axes](#binding_to_axes)
* [Drawing](#drawing)
* [Defaults](#defaults)

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

// create an ellipse annotation
controller.ellipse({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2008-08-10",
    secondValueAnchor: 24.91,
});
```

{sample}STOCK\_Drawing\_General\_01{sample}

## Visual Settings

In addition to the basic properties that determine the position of an annotation, you can configure its visual settings, for example, fill and stroke colors. To make an annotation look different when being hovered or selected, use methods like {api:anychart.core.annotations.Triangle#hoverFill}hoverFill(){api} or {api:anychart.core.annotations.Triangle#selectStroke}selectStroke(){api}. These two are for the Triangle annotation, but you can find similar methods for other types: see our {api:anychart.core.annotations}API{api} or the articles on [annotation types](Overview#annotation_types) in this section. Please note that the list of the available settings may vary depending on the annotation type.

In the sample below, there are two annotations, an Ellipse and an Infinite Line, which change when a user hovers or select them. Like in the previous sample, object notation is used to configure the properties:

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an ellipse annotation and configure its visual settings
controller.ellipse({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2007-02-24",
    secondValueAnchor: 31.92,
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectStroke: "5 #FF0000"
});
```

{sample}STOCK\_Drawing\_General\_02{sample}

## Hover Gap

Another setting of annotations you can configure is the hover gap: use the {api:anychart.core.annotations.Base#hoverGap}hoverGap(){api} method. In this sample, it is increased to 30:

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an ellipse annotation and configure its hover gap
controller.ellipse({
    hoverGap: 30
});
```

{sample}STOCK\_Drawing\_General\_03{sample}

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

// create an infinite line annotation (automatically bound to the main Y-scale)
controller.infiniteLine({
    xAnchor: "2004-01-06",
    valueAnchor: 2039.63,
    secondXAnchor: "2004-01-15",
    secondValueAnchor: 2088.10
});

//create an ellipse annotation
var ellipse = controller.ellipse({
    xAnchor: "2004-01-07",
    valueAnchor: 2583950080,
    secondXAnchor: "2004-01-09",
    secondValueAnchor: 2783950080
});

// bind the ellipse annotation to the additional Y-scale
ellipse.yScale(extraYScale);
```

{sample}STOCK\_Drawing\_General\_04{sample}

## Drawing

To provide users with the opportunity to draw annotations, use the {api:anychart.core.annotations.PlotController#startDrawing}startDrawing(){api} method and specify the annotation type by using one of the {api:anychart.enums.AnnotationTypes}Annotation Types enums{api}. To learn more, see this article: [Drawing](Drawing).

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// start drawing the annotation
controller.startDrawing("ellipse");
```

Here is a basic sample, demonstrating how the Drawing feature is used. Users can draw Ellipses, Rectangles, and Triangles or remove all annotations from the plot:

{sample}STOCK\_Drawing\_General\_05{sample}