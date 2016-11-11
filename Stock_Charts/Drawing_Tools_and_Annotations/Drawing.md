{:index 2.5}
#Drawing

* [Overview](#overview)
* [Sample Application](#sample_application)
* [Initiating Drawing](#initiating_drawing)
* [Canceling Drawing](#canceling_drawing)
* [Forbidding Drawing](#forbidding_drawing)
* [Forbidding/Allowing Editing](#forbidding_allowing_editing)
* [Managing Annotations](#managing_annotations)
 * [Removing](#removing)
 * [Selecting/Unselecting](#selecting_unselecting)
* [(???) Handling Events](#events)

## Overview

This article describes methods that allows users to draw annotations on AnyStock plots.

Please note: when working with annotations, you can use methods of either the plot or the chart (see the {api:anychart.core.annotations.PlotController}PlotController{api} and {api:anychart.core.annotations.ChartController}ChartController{api} sections in our API). Of course, if there is only one plot on your chart, there is no significant difference between these two options.

## Sample Application

To make the integration process easier for you, we created a sample web application with open source, demonstrating how [AnyStock Stock Drawing Tools](Overview) can be implemented.

You can see the application live at [http://www.anychart.com/products/anystock/drawing_tools/](http://www.anychart.com/products/anystock/drawing_tools/).

To download its source (or simply fork it), visit this page: [GitHub: AnyStock - Drawing Tools and Annotations Demo](https://github.com/AnyChart/anystock-drawing-tools-and-annotations-demo).

## Initiating Drawing

To initiate drawing, call the {api:anychart.core.annotations.PlotController#startDrawing}PlotController startDrawing(){api} method or {api:anychart.core.annotations.ChartController#startDrawing}ChartController startDrawing(){api} method and specify the annotation type by choosing one of the {api:anychart.enums.AnnotationTypes}Annotation Types enums{api}. (???) Use object notation to configure annotations:

```
plot.annotations().startDrawing("triangle");
plot.annotations().startDrawing({type: "triangle", color: "red"});
```

Here is a basic sample, demonstrating how the Drawing feature is used. Users can draw Andrews' Pitchforks, Triangles, and Ellipses or remove all annotations from the plot (to learn more about removing annotations, see the [Removing](#removing) subsection below):

{sample}STOCK\_Drawing\_General\_03{sample}

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// start drawing the Andrews' Pitchfork annotation
controller.startDrawing("andrewsPitchfork");
```

{sample}STOCK\_Drawing\_Drawing\_01{sample}

## Canceling Drawing

To cancel the drawing process, call the {api:anychart.core.annotations.PlotController#cancelDrawing}PlotController cancelDrawing(){api} method or {api:anychart.core.annotations.ChartController#cancelDrawing}ChartController cancelDrawing(){api} method:

```
plot.annotations().cancelDrawing()
```

These methods can be used, for example, with such annotation types as Andrews' Pitchfork and Triangle. A user has to set 3 points to draw them and may want to cancel drawing after setting 2 points. In the following sample, when you set 2 points and click any of the buttons that initiate drawing, the drawing process is canceled, and the points disappear:

{sample}STOCK\_Drawing\_Drawing\_02{sample}

## Forbidding Drawing

To forbid drawing annotations on some of the plots, use the {api:anychart.core.annotations.PlotController#enabled}enabled(){api} method.

```
anychart.onDocumentReady(function() {
    var dataTable = anychart.data.table();
    dataTable.addData(get_dji_daily_short_data());

    var mapping = dataTable.mapAs({value: 1});

    chart = anychart.stock();

    chart.plot(0).line(mapping);
    chart.plot(1).line(mapping);

    // allow drawing on the first plot
    chart.plot(0).annotations().enabled(true);
    // forbid drawing on the second plot
    chart.plot(1).annotations().enabled(false);

    chart.title("Start annotation drawing. Use mouse to draw annotation.");
    chart.container("container");
    chart.draw();

    // Start annotation drawing.
    chart.annotations().startDrawing("triangle");
});
```

{sample}STOCK\_Drawing\_Drawing\_03{sample}

## <a name='forbidding\_allowing\_editing'>Forbidding/Allowing Editing</a>

```
xxxxxxxxxxxxxxxxxxxx
```

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

The first 3 methods ({api:anychart.core.annotations.PlotController#getAnnotationAt}getAnnotationAt(){api}, {api:anychart.core.annotations.PlotController#getSelectedAnnotation}getSelectedAnnotation(){api}, and {api:anychart.core.annotations.PlotController#getAnnotationsCount}getAnnotationsCount(){api}) are used get an annotation with a (???) certain index, a selected annotation, or the total number of annotations. The rest of the methods, combined with these 3, allow to remove and select/unselect annotations.

### Removing

{sample}STOCK\_Drawing\_Drawing\_04{sample}

### <a name='selecting\_unselecting'>Selecting/Unselecting</a>

{sample}STOCK\_Drawing\_Drawing\_05{sample}

## (???) Handling Events

The following {api:anychart.enums.EventType}events{api} can be handled when working with annotations:

<table>
<tr><th>Enum Constant</th><th>String Value</th><th>Description</th></tr>
<tr><td>ANNOTATION\_DRAWING\_FINISH</td><td>annotationDrawingFinish</td><td>Event type for the annotation drawing finish.</td></tr>
<tr><td>ANNOTATION_SELECT</td><td>annotationSelect</td><td>Event type for the annotation select.</td></tr>
<tr><td>ANNOTATION_UNSELECT</td><td>annotationUnselect</td><td>Event type for the annotation unselect.</td></tr>
</table>

{sample}STOCK\_Drawing\_Drawing\_06{sample}