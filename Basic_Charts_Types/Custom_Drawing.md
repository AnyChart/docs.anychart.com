{:index 0.6}
Custom Drawing
=========================

* [Overview](#overview)
* [Concept](#concept)
* [Drawer](#drawer)
 * [Point Renderer](#basic_drawer)
 * [Shapes Manager](#shapes_manager)
 * [Prepare and Finalize](#prepare_and_finalize)
 * [States](#states)
* [Samples](#samples)
 * [Rounded Columns](#rounded_columns)
 * [Cone Chart](#cone_chart)
 * [Cherry Chart](#cherry_chart)

# Overview

AnyChart provides a lot of series types out of the box, you can see all of them in the [List of supported chart types](../Quick_Start/Supported_Charts_Types) and compatible series types can be [switched one into another during the runtime using](Series_Type).

All series can be customized in the various out of the box ways, like changing the style of the fill, solid lines into dashed lines, adding hatch pattern fill or changing the opacity - this information you can find in the article about the given series type.

However, if you also have on option to change the way the series is drawn and provide your own drawing function(s) to create completly unique look of a basic series or a completly new chart type that is based on some of the basic series.

Some modifications can be done very easy, some require understanding [how AnyChart draws series](#concept), and sometimes you will need more than one function to customize series display. This article will guide you through this process and provide [several examples](#samples) you can use to create your own custom series.

# Concept

How point is displayed... that is the questions.

# Drawer

Drawer object provide you access to all the things you need to override standard drawing functions with your own. Drawer object itself does nothing, it is just a collection of functions. 

Here is how you get the link to drawer object:

```
// get the drawer object
chart = anychart.cartesian();
mySeries = chart.column([["A",1],["B",2],["C",3],])
drawer = mySeries.drawer();
```

Please note that you need to override drawer for **each instance** of the series you want to customize, you can not just tell the component to display all series of the given type in a different way, you need to assign a custom drawer to every instance you create. Having a single drawer object comes in handy in such cases, you just go like this:

```
// create some custom drawer
var customDrawer;

// create a chart
chart = anychart.cartesian();

// create series and assign drawers
series_1 = chart.column([["A",1],["B",2],["C",3]])
series_1.drawer(customDrawer);

series_2 = chart.column([["A",2],["B",4],["C",7]])
series_2.drawer(customDrawer);
```

## Point Renderer

Point renderer is a basic function that is responsible for the way each element (point) of any series is displayed, use XXX method of a drawer object to override this function:

```
// point renderer
```

This methods gets XXX as parameters ... and you can do XXX with them ...

This method is enough to handle most of custom drawing situations, you can see that only this method is used in [Rounded Columns](#rounded_columns) and [Cone Chart](#cone_chart) samples.

We will use "Cone chart" as it is one of the easiest way to show how custom point renderer works and how you can modify it:

{sample}BCT\_Custom\_Drawing\_01{sample}

## Shapes Manager

Shape manager is a...

It is needed when you...

```
// shape manager
```

## Prepare and Finalize

Prepare and Finalize functions are..

They are needed when...

```
// prepare and finalize functions
```

## States

States?

# Samples

## Rounded Columns

Rounded columns

## Cone Chart

Cone chart

## Cherry Chart

Cherry chart
