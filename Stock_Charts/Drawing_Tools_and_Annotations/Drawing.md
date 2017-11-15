{:index 2.5}
#Drawing

* [Overview](#overview)
* [Sample App](#sample_app)
* [Initiate](#initiate)
* [Cancel](#cancel)
* [Forbid](#forbid)
* [Managing](#managing)
* [Events](#events)

## Overview

Coming soon.

## Sample App

To make the integration process easier and give you the general idea how [AnyStock Stock Drawing Tools](Overview) can be implemented we have created a sample web application with open source.

You can see the application live at [https://www.anychart.com/products/anystock/overview/#drawing-tools](https://www.anychart.com/products/anystock/overview/#drawing-tools).

You can download application source or simply fork it on [GitHub: AnyStock - Drawing Tools and Annotations Demo](https://github.com/AnyChart/anystock-drawing-tools-and-annotations-demo) page.

## Initiate

{api:anychart.core.annotations.PlotController#startDrawing}startDrawing(){api}
{api:anychart.core.annotations.ChartController#startDrawing}startDrawing(){api}

```
plot.annotations().startDrawing("infiniteLine");
plot.annotations().startDrawing({type: "infiniteLine", color: "red"});
```

## Cancel

{api:anychart.core.annotations.PlotController#cancelDrawing}cancelDrawing(){api}
{api:anychart.core.annotations.ChartController#cancelDrawing}cancelDrawing(){api}

```
plot.annotations().cancelDrawing()
```

## Forbid

To forbid drawing annotations on some of the plots use {api:anychart.core.annotations.PlotController#enabled}enabled(){api} method.

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

## Managing

getAnnotationAt()
getAnnotationsCount()
removeAnnotation()
removeAnnotationAt()
removeAllAnnotations() 
getSelectedAnnotation()
select(Annotation) 
unselect()

## Events

The following events can be handled when working with annotations:

<table>
<tr><th>Enum Constant</th><th>String Value</th><th>Description</th></tr>
<tr><td>ANNOTATION_DRAWING_FINISH</td><td>annotationDrawingFinish</td><td>Event type for the annotation drawing finish.</td></tr>
<tr><td>ANNOTATION_SELECT</td><td>annotationSelect</td><td>Event type for the annotation select.</td></tr>
<tr><td>ANNOTATION_UNSELECT</td><td>annotationUnselect</td><td>Event type for the annotation unselect.</td></tr>
</table>