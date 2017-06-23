{:index 2.2}
#Drawing

* [Overview](#overview)
* [Sample Application](#sample_application)
* [Initiating Drawing](#initiating_drawing)
* [Canceling Drawing](#canceling_drawing)
* [Forbidding Drawing](#forbidding_drawing)
* [Forbidding Editing](#forbidding_editing)
* [Managing Annotations](#managing_annotations)
 * [Removing](#removing)
 * [Selecting/Unselecting](#selecting_unselecting)
* [Handling Events](#handling_events)

## Overview

This article describes methods that allows users to draw annotations on AnyStock plots.

Please note: when working with annotations, you can use methods of either the plot or the chart (see the {api:anychart.core.annotations.PlotController}PlotController{api} and {api:anychart.core.annotations.ChartController}ChartController{api} sections in our API). Of course, if there is only one plot on your chart, there is no significant difference between these two options.

## Sample Application

To make the integration process easier for you, we created a sample web application with open source, demonstrating how [AnyStock Stock Drawing Tools](Overview) can be implemented.

You can see the application live at [https://www.anychart.com/products/anystock/drawing_tools/](https://www.anychart.com/products/anystock/drawing_tools/).

To download its source (or simply fork it), visit this page: [GitHub: AnyStock - Drawing Tools and Annotations Demo](https://github.com/AnyChart/anystock-drawing-tools-and-annotations-demo).

## Initiating Drawing

To initiate drawing, call the {api:anychart.core.annotations.PlotController#startDrawing}PlotController startDrawing(){api} method or {api:anychart.core.annotations.ChartController#startDrawing}ChartController startDrawing(){api} method and specify the annotation type by choosing one of the {api:anychart.enums.AnnotationTypes}Annotation Types enums{api}. Use object notation to configure annotations:

```
plot.annotations().startDrawing("triangle");
plot.annotations().startDrawing({type: "triangle", color: "red"});
```

Here is a basic sample, demonstrating how the Drawing feature is used. Users can draw Andrews' Pitchforks, Triangles, and Ellipses or remove all annotations from the plot (to learn more about removing annotations, see the [Removing](#removing) subsection below):

{sample}STOCK\_Drawing\_Drawing\_01{sample}

## Canceling Drawing

To cancel the drawing process, call the {api:anychart.core.annotations.PlotController#cancelDrawing}PlotController cancelDrawing(){api} method or {api:anychart.core.annotations.ChartController#cancelDrawing}ChartController cancelDrawing(){api} method:

```
plot.annotations().cancelDrawing()
```

For example, you have to set 3 points to draw Andrews' Pitchfork and Triangle annotations and may want to cancel drawing after setting 2 points. In the following sample, when you set 2 points and click any of the buttons that initiate drawing, the drawing process is canceled, and the points disappear:

{sample}STOCK\_Drawing\_Drawing\_02{sample}

## Forbidding Drawing

To forbid drawing annotations on some of the plots, use the {api:anychart.core.annotations.PlotController#enabled}enabled(){api} method:

```
// create a stock chart
chart = anychart.stock();

// create two plots
chart.plot(0).ohlc(mapping);
chart.plot(1).line(mapping);

// allow drawing on the first plot
chart.plot(0).annotations().enabled(true);

// forbid drawing on the second plot
chart.plot(1).annotations().enabled(false);

// start drawing the annotation.
chart.annotations().startDrawing("triangle");
```

In this sample, annotations can be drawn only on the first (OHLC) plot:

{sample}STOCK\_Drawing\_Drawing\_03{sample}

## Forbidding Editing</a>

To forbid or allow editing an annotation, use the {api:anychart.core.annotations.Base#allowEdit}allowEdit(){api} method. You can find more information in this article: [General Settings](General_Settings#forbidding_editing)

## Managing Annotations

There are several methods that allow you to manage annotations:

- {api:anychart.core.annotations.PlotController#getAnnotationAt}getAnnotationAt(){api}
- {api:anychart.core.annotations.PlotController#getSelectedAnnotation}getSelectedAnnotation(){api}
- {api:anychart.core.annotations.PlotController#getAnnotationsCount}getAnnotationsCount(){api}
- {api:anychart.core.annotations.PlotController#removeAnnotation}removeAnnotation(){api}
- {api:anychart.core.annotations.PlotController#removeAnnotationAt}removeAnnotationAt(){api}
- {api:anychart.core.annotations.PlotController#removeAllAnnotations}removeAllAnnotations(){api}
- {api:anychart.core.annotations.PlotController#select}select(){api}
- {api:anychart.core.annotations.PlotController#unselect}unselect(){api}

The {api:anychart.core.annotations.PlotController#getAnnotationAt}getAnnotationAt(){api}, {api:anychart.core.annotations.PlotController#getSelectedAnnotation}getSelectedAnnotation(){api}, and {api:anychart.core.annotations.PlotController#getAnnotationsCount}getAnnotationsCount(){api} methods are used get an annotation with a certain index, a selected annotation, or the total number of annotations. The rest of the methods, combined with these 3, allow to remove and select/unselect annotations.

### Removing

The {api:anychart.core.annotations.PlotController#removeAnnotation}removeAnnotation(){api} and {api:anychart.core.annotations.PlotController#removeAnnotationAt}removeAnnotationAt(){api} methods are used to remove a single annotation, and {api:anychart.core.annotations.PlotController#removeAllAnnotations}removeAllAnnotations(){api} removes all annotations.

In the following sample, there are buttons allowing to remove all annotations, the last drawn annotation, and a selected one:

```
// remove all annotations
plot.annotations().removeAllAnnotations();

// get the number of annotations
var annotationsCount = plot.annotations().getAnnotationsCount();

// remove the last annotation
plot.annotations().removeAnnotationAt(annotationsCount - 1);

// get the selected annotation
var selectedAnnotation = plot.annotations().getSelectedAnnotation(); 

// remove the selected annotation
plot.annotations().removeAnnotation(selectedAnnotation);
```

{sample}STOCK\_Drawing\_Drawing\_04{sample}

<a name='selecting\_unselecting'></a>
###Selecting/Unselecting

To select or unselect an annotation, use the {api:anychart.core.annotations.PlotController#select}select(){api} and {api:anychart.core.annotations.PlotController#unselect}unselect(){api} methods:

```
// get the first annotation
var firstAnnotation = plot.annotations().getAnnotationAt(0);

// select the first annotation
plot.annotations().select(firstAnnotation);

// unselect a selected annotation
plot.annotations().unselect();
```

{sample}STOCK\_Drawing\_Drawing\_05{sample}

## Handling Events

When working with annotations, the following {api:anychart.enums.EventType}events{api} can be handled:

<table>
<tr><th>Enum Constant</th><th>String Value</th><th>Description</th></tr>
<tr><td>ANNOTATION\_DRAWING\_FINISH</td><td>annotationDrawingFinish</td><td>Event type for the annotation drawing finish.</td></tr>
<tr><td>ANNOTATION_SELECT</td><td>annotationSelect</td><td>Event type for the annotation select.</td></tr>
<tr><td>ANNOTATION_UNSELECT</td><td>annotationUnselect</td><td>Event type for the annotation unselect.</td></tr>

<tr><td>ANNOTATION\_CHANGE\_START</td><td>annotationChangeStart</td><td>Event that occurs straight after the mouseDown event.</td></tr>
<tr><td>ANNOTATION_CHANGE</td><td>annotationChange</td><td>Event that occurs while dragging.</td></tr>
<tr><td>ANNOTATION\_CHANGE\_FINISH</td><td>annotationChangeFinish</td><td>Event that occurs straight after the mouseUp event.</td></tr>
</table>

Please note that you should attach listeners to the chart object.

In the sample below, a listener is used to change the visual settings of annotations and the chart title on selection:

```
// create an event listener for selection
chart.listen("annotationSelect", function(e){
    var selectedAnnotation = e.annotation;
    // change the annotation stroke on selection
    selectedAnnotation.selectStroke("#FF0000", 3, "5 2", "round");
    // change the chart title on selection
    chart.title("The " + selectedAnnotation.getType() + " annotation is selected.");
});
```

{sample}STOCK\_Drawing\_Drawing\_06{sample}
