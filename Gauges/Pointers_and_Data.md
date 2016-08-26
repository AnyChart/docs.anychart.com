#Pointers and Data

* [Overview](#overview)
* [Binding to Data](#binding_to_data)
* [Binding to Axes](#binding_to_axes)
* [Adding Multiple Pointers](#adding_multiple_pointers)
* [Types](#types)
 * [Bar](#bar)
 * [Marker](#marker)
 * [Needle](#needle)
 * [Knob](#knob)

##Overview

A pointer is an essential element of a gauge, used to indicate data. (!!!) В статье мы рассмотрим, как они привязываются к данным, какие они бывают и все остальное, что нужно знать для использования указателей в гейджах.

## Binding to Data

Each pointer is bound to some value in a data set. By default, it is the first value, and its index is 0. To bind a pointer to another value (with another index), the {api:anychart.core.gauge.pointers.Base#dataIndex}dataIndex(){api} method is used.

Here is a basic sample of a gauge with a pointer bound to a value in the data set:

```
xxxxxxxxxxxxxx
```

{sample}BCT\_Pointers-and-Data\_16{sample} 

Note: when there is only one value in a data set, there is no essential need to use api:anychart.core.gauge.pointers.Base#dataIndex}dataIndex(){api}.

## Binding to Axes

Each pointer is bound to an axis. By default, it is the first axis, and its index is 0. To bind a pointer to another axis, the {api:anychart.core.gauge.pointers.Base#axisIndex}axisIndex(){api} method is used.

Here is a basic sample of a gauge with two axes and a pointer bound to one of them:

```
xxxxxxxxxxxxxx
```

{sample}BCT\_Pointers-and-Data\_17{sample} 

Note:  When there is only one axis in the gauge, there is no essential need to use {api:anychart.core.gauge.pointers.Base#axisIndex}axisIndex(){api}.

##Adding Multiple Pointers

If you want to show several values on a gauge, you need to add several pointers of different types or of the same type. To learn about the available types of pointers, see the [Types](#types) section below.

The following sample shows how to create a gauge with two pointers of different types:

```
var dataSet = anychart.data.set([60,110]);

var marker = gauge.marker(0);
marker.dataIndex(0);
   
var bar = gauge.bar(0);
bar.dataIndex(1);
```

{sample}BCT\_Pointers-and-Data\_16{sample} 

To add a number of pointers of the same type, you need to specify the numbers (??? indexes?) of the pointers by adding their values (the numeration starting with 0). In this sample, the numbers (??? indexes? ВОПРОС ОСТАЛСЯ) of the {api:anychart.core.gauge.pointers.Marker}marker(){api} pointers are specified:

```
// add the second data point
var dataSet = anychart.data.set([60,120,170]);

// marker_1
var marker = gauge.marker(0);
marker.enabled(true);
marker.dataIndex(0);
marker.axisIndex(0);
marker.size(5);

// marker_2
var marker_1 = gauge.marker(1);
marker_1.dataIndex(1);
marker_1.axisIndex(0);
marker_1.size(6);

// marker_3
var marker_2 = gauge.marker(2);
marker_2.dataIndex(2);
marker_2.axisIndex(0);
marker_2.size(7);
```

{sample}BCT\_Pointers-and-Data\_19{sample}

##Types

There are four types of pointers available for circular gauges: bar, marker, needle, and knob. They look different, but serve the same function: indicating values.

###Bar

A bar is a pointer looking like an arc of a given thickness. As a rule, it is placed right next to an axis and combined with a marker pointer.

In the sample below, you can see how to create a plain circular gauge with a bar pointer:

```
//bar
var bar = gauge.bar();
bar.enabled(true);
```

{sample}BCT\_Pointers-and-Data\_Bar\_01{sample} 

To change the width and radius of a bar pointer, do the following:

```
//bar
var bar = gauge.bar(0);
//you can remove this if you add any parameters to the bar
bar.enabled(true);
bar.width(3);
bar.radius(100);
```
{sample}BCT\_Pointers-and-Data\_Bar\_02{sample} 

A lot more parameters can be set. For example, a bar pointer can be colored with a single color or a gradient.

The following sample demonstrates how to set the position of a bar pointer by adjusting its radius:

{sample}BCT\_Pointers-and-Data\_Bar\_03{sample}

If the width of the bar (arc) is more than 1px, it can be drawn in the "outside", "inside", or "center" positions. To set the position, use the {api:anychart.core.gauge.pointers.Bar#position}position(){api} method and pass "outside", "inside", or "center" as a parameter.

```
var bar = gauge.bar();
bar.position("inside");
```

###Marker

ВВОДНОЕ ПРЕДЛОЖЕНИЕ

This code adds a marker pointer:

```  
//marker
var marker = gauge.marker();
marker.enabled(true);
```

To set the marker size, the {api:anychart.core.gauge.pointers.Marker#size}size(){api} method is used:

```  
//marker
var marker = gauge.marker();
marker.enabled(true);
marker.size(7);
```

{sample}BCT\_Pointers-and-Data\_Marker\_04{sample} 

Markers can be drawn in the "outside", "inside", or "center" positions. To set the position, use the {api:anychart.core.gauge.pointers.Marker#position}position(){api} method and pass "outside", "inside", or "center" as a parameter.

Here is a sample circular gauge with a marker positioned outside:

{sample}BCT\_Pointers-and-Data\_Marker\_05{sample}

```
//marker
var marker = gauge.marker();
marker.position("outside");
marker.size(7);
```

###Needle

A needle is the most common pointer used with circular gauges. That is how it is added:

```
//needle
var needle = gauge.needle();
needle.enabled(true);
```

{sample}BCT\_Pointers-and-Data\_Needle\_07{sample} 

A needle can either look like a thin stick or have a complex form. The form is adjusted via three methods: {api:anychart.core.gauge.pointers.Needle#startWidth}startWidth(){api}, {api:anychart.core.gauge.pointers.Needle#middleWidth}middleWidth(){api}, and {api:anychart.core.gauge.pointers.Needle#endWidth}endWidth(){api}.

The sample below shows how they can be used: in the starting point the needle is a bit thinner than by default, then it gets wider to the center and thinner to the end. 

```
//needle
var needle = gauge.needle(8);
needle.startWidth(1);
needle.middleWidth(3);
needle.endWidth(0);
```

{sample}BCT\_Pointers-and-Data\_Needle\_08{sample} 

As you can see, now the needle doesn't start from the center of the gauge. To position it properly, you need to adjust the positions of the start, the middle, and the end of a needle, using the {api:anychart.core.gauge.pointers.Needle#startRadius}startRadius(){api}, {api:anychart.core.gauge.pointers.Needle#middleRadius}middleRadius(){api}, and {api:anychart.core.gauge.pointers.Needle#endRadius}endRadius(){api} methods (values can be set either in pixels or in percents):

```
//needle
var needle = gauge.needle(8);
needle.startRadius("0%");
needle.endRadius("80%");
needle.middleRadius("50%");
needle.startWidth(1);
needle.middleWidth(3);
needle.endWidth(0);
```

{sample}BCT\_Pointers-and-Data\_Needle\_09{sample} 

###Knob

A knob is a full-circle pointer, often combined with a needle or marker pointer. It looks like a control knob on some devices.

In the following sample you can see a sample gauge with a default knob pointer:

{sample}BCT\_Pointers-and-Data\_Knob\_10{sample} 

Knob pointers are completely different from the others and have a few unique settings. For example, you can adjust the number of a knob's projections (vertices), using the {api:anychart.core.gauge.pointers.Knob#verticesCount}verticesCount(){api} method: 

```
//knob
var knob = gauge.knob(0);
knob.verticesCount(15);
```

{sample}BCT\_Pointers-and-Data\_Knob\_11{sample} 

To adjust the curvature of vertices, call the {api:anychart.core.gauge.pointers.Knob#verticesCurvature}verticesCurvature(){api} method and set the value from 0 to 1 (by default it is 0.5). Increasing the value makes vertices more concave, and reducing the value makes them more convex:

```
//knob
var knob = gauge.knob();
knob.verticesCount(15);
knob.verticesCurvature(.1);
```

{sample}BCT\_Pointers-and-Data\_Knob\_12{sample} 

You can also adjust the top and bottom ratio of vertices by calling the {api:anychart.core.gauge.pointers.Knob#topRatio}topRatio(){api} and {api:anychart.core.gauge.pointers.Knob#bottomRatio}bottomRatio(){api} methods and setting the values from 0 to 1 (the default value is 0.5):

```
//knob
var knob = gauge.knob(0);
knob.verticesCount(15);
knob.verticesCurvature(.1);
knob.topRatio(0);
knob.bottomRatio(1);
```

{sample}BCT\_Pointers-and-Data\_Knob\_13{sample}