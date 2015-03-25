#Pointers and Data

* [Overview](#overview)
* [Types](#types)
 * [Bar](#bar)
 * [Marker](#marker)
 * [Needle](#needle)
 * [Knob](#knob)
* [Visualization](#visualization)
 * [Connection with the Data](#connection_with_the_data)
* [Other](#other)


##Overview

Pointers are elements of the Gauge charts, which are necessary for the data representation. 


##Types

There are 4 different types of pointers avaliable: bar, marker, needle and knob. 

###Bar

Bar is a pointer that looks like a bold line (for Linear Gauges) or curve (for Circular Gauges) colored rather brightly. It is usually situated next to the axis and shown with the marker pointer.
Below you can see a simple example Gauge with the bar pointer and the code for the example.

{sample}BCT\_Pointers-and-Data\_Bar\_01{sample} 

```
		//bar
    gauge.bar(0).enabled(true);
```

In the sample above we have only enabled the bar. Let's now change its width and radius.


```
		//bar
    gauge.bar(0)
		.enabled(true) //you can remove this if you add any parameters to the bar
		.width(3)
		.radius(100);
```
{sample}BCT\_Pointers-and-Data\_Bar\_02{sample} 

There's a lot of parameters to be adjusted else. For example, a bar pointer can be colored with a single color or with a gradient, we can set the position of the bar according to the defined radius, snap it to the exact data point and axis, set the stroke.

Now let's look at the position of the bar according to its radius. As our bar is more than 1px width it can be positioned outside, in the center or inside the circle of the defined radius. To set the position use the {api:anychart.enums.GaugeSidePosition}**.position()**{api} method. The value is to be "outside", "inside" or "center". Let's put our bar inside the circle of the defined radius:

```
         gauge.bar(0).position('inside');
```

It's possible to use only the first letters of the position as a value, e.g.:

```
         gauge.bar(0).position('i');
```

{sample}BCT\_Pointers-and-Data\_Bar\_03{sample} 


###Marker

Marker is a pointer that is more demonstrative when used with a bar pointer. It can be of a plenty types, which you can read about in [Marker tutorial](../Appearance_Settings/Markers). <!--должен же быть какой-то туториал по маркерам? оО или его нет оО--!>
Let's first enable a marker:

```  
         //marker
    gauge.marker(0).enabled(true);
```

The marker size is rather small by default, so we need to use the {api:anychart.core.gauge.pointers.marker#size}**.size()**{api} method to make the marker visible, so the code will look as below:

```  
         //marker
    gauge.marker(0)
        .enabled(true)
        .size(7);
```

{sample}BCT\_Pointers-and-Data\_Marker\_04{sample} 

It's not the best view when the marker covers the value on the axis, so now let's adjust the position of the marker according to the defined radius. 

###Needle

###Knob

##Visualization

###Connection with the Data

#### Snap to Data

To snap the pointer to the axis use the {api:anychart.core.gauge.pointers.bar#axisIndex}**.axisIndex()**{api} method. Note that the count starts from 0. There's no need in using this method if your chart contains an only axis.

Let's enable one more axis and snap the bar pointer to the new axis:

{sample}BCT\_Pointers-and-Data\_Bar\_02{sample} 

To reach the result as in the sample above we need to add the following:

```
		//second axis settings
    var axis_1 = gauge.axis(1)
        .radius(50)
        .width(1);

		//second scale settings
    axis_1.scale()
        .minimum(0)
        .maximum(120)
        .ticks({interval: 10})
        .minorTicks({interval: 1});

		//second ticks settings
    axis_1.ticks()
        .type('trapezoid')
        .length('8');

		//bar
    gauge.bar(0)
        .width(3)
        .axisIndex(1)
        .radius(50); //let;s change the radius to fit the bar to the axis_1
```

In case you have more that one value in your dataset, you should use the {api:anychart.core.gauge.pointers.bar#dataIndex}**.dataIndex()**{api} method to each pointer showing any other value but the first. Note that numeration of the values starts from 0. There's no need in use of this method if you have an only value in your dataSet.

Let's add the second point to the data and snap the bar pointer to the new data point:

```
		//add the second data point
		 dataSet = anychart.data.set([50,35]);
		...
		//bar
 	     gauge.bar(0)
     	   .width(3)
     	   .axisIndex(1)
		   .dataIndex(1) //change the index of the data point
     	   .radius(50);
```

{sample}BCT\_Pointers-and-Data\_Bar\_03{sample} 


When you apply for the {api:anychart.core.gauge.pointers.bar#dataIndex}**.dataIndex()**{api} method, you change the value that will be represented by the pointer you add this method to. However, using this means only if you have more than one value in the dataSet, because the axis shows the first value fron your dataSet by default. So, there is no need in this method if your data looks like this:



#### Snap to Axis

##Other

//coloring