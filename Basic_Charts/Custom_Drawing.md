{:index 0.6}
# Custom Drawing

* [Overview](#overview)
* [Compatibility](#compatibility)
* [Drawer](#drawer)
 * [Point Renderer](#basic_drawer)
 * [Shapes Manager](#shapes_manager)
 * [States](#states)
 * [Prepare and Finalize](#prepare_and_finalize)
* [Samples](#samples)
 * [Rounded Columns](#rounded_columns)
 * [Cone Chart](#cone_chart)
 * [Cherry Chart](#cherry_chart)

## Overview

AnyChart provides a lot of series types out of the box, you can see all of them in the [List of supported chart types](../Quick_Start/Supported_Charts_Types) and compatible series types can be [switched one into another during the runtime using](Series_Type).

All series can be customized in the various out of the box ways, like changing the style of the fill, solid lines into dashed lines, adding hatch pattern fill or changing the opacity - this information you can find in the article about the given series type or an overview of all shared options in [General Settings](General_Settings).

However, if you also have on option to change the way the series is drawn and provide your own drawing function(s) to create completly unique look of a basic series or a completly new chart type that is based on some of the basic series.

Some modifications can be done very easy, some require understanding how AnyChart draws series, and sometimes you will need more than one function to customize series display. This article will guide you through this process and provide [several examples](#samples) you can use to create your own custom series.

## Compatibility

At the moment you can override renderers only for the following series: Area, Area3d, Bar, Bar3d, Box, Bubble, Candlestick, Column, Column3d, JumpLine, Line, Marker, OHLC, RangeArea, RangeBar, RangeColumn, RangeSplineArea, RangeStepArea, Spline, SplineArea, StepArea, StepLine, Stick. 

You can do this in Basic (Cartesian) Charts, [Scatter Charts](Scatter_Plot/Overview) and [Stock Charts](../Stock_Charts), you can't do that in Radar and Polar Charts.

If you want something more than what this article offers, please [contact us](http://support.anychart.com/) or you can go ahead and try to create your own series by forking [AnyChart at Github](https://github.com/AnyChart/AnyChart). Note: you still need a license if you are going to use the derivate projects in a commercial application.

## Rendering Object

Rendering object provides you access to all things you need to override standard drawing functions with your own. Rendering object itself does nothing, it is just a collection of functions and settings. Rendering object is an instance of {api:anychart.core.series.RenderingSettings}RenderingSettings{api} class.

Here is how you get the link to the rendering object:

```
// get the drawer object
chart = anychart.cartesian();
mySeries = chart.column([["A",1],["B",2],["C",3],])
renderer = mySeries.rendering();
```

Please note that you need to override renderer for **each instance** of the series you want to customize, you can't just tell the component to display all series of the given type in a different way, you need to assign a custom renderer to every instance you create. Having a single renderer object comes in handy in such cases, you just go like this:

```
// create some custom drawer
var customRenderer;

// create a chart
chart = anychart.cartesian();

// create series and assign drawers
series_1 = chart.column([["A",1],["B",2],["C",3]])
series_1.rendering(customRenderingObject);

series_2 = chart.column([["A",2],["B",4],["C",7]])
series_2.rendering(customRenderer);
```

### Point Renderer

Point renderer is a basic function that is responsible for the way each element (point) of any series is displayed, use {api:anychart.core.series.RenderingSettings#point}point(){api} method of the rendering settings object to override this function:

```
// shape manager
series = chart.column([["A",1],["B",2],["C",3]])
shapes = series.rendering().point();
console.log(shapes);
```

This method is enough to handle most of custom drawing situations, you can see that only this method is used in [Rounded Columns](#rounded_columns) and [Cone Chart](#cone_chart) samples.

We will use "Cone chart" as it is one of the easiest way to show how custom point renderer works and how you can modify it:

### Shapes Manager

Shape manager is a way to keep track of objects used and reused during the process of handling chart elements display. It is always needed when you want to add or modify something in point display. By reading the shapes object of a created series you can learn how many shapes are used and what are they:

```
// shape manager
series = chart.column([["A",1],["B",2],["C",3]])
shapes = series.rendering().shapes();
console.log(shapes);
```

### States

If you want something more than simply change color on hover and on select you need to override {api:anychart.core.series.RenderingSettings#updatePoint}updatePoint(){api} drawer and track draw/redraw things when differen states signals come:

```
series = chart.column([["A",1],["B",2],["C",3]])
series.rendering().updatePoint(drawer);
function drawer(){
	// hover state
	if (this.pointState==1) then {
		// draw something in hover state
	}
	// selecte state
	if (this.pointState==1) then {
		// draw something in hover state		
	}
}
```

### Prepare and Finalize

Use the {api:anychart.core.series.RenderingSettings#start}start(){api} and {api:anychart.core.series.RenderingSettings#finish}finish(){api} methods to override function that are performed before and after the whole series is rendered. This is needed when series are drawn as whole, like lines or areas.

## Samples

### Cherry Chart

{sample}BCT\_Custom\_Drawing\_01{sample}

## Rounded Columns

{sample}BCT\_Custom\_Drawing\_02{sample}

### Cone Chart

{sample}BCT\_Custom\_Drawing\_03{sample}
