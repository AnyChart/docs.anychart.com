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

There are 4 different types of pointers avaliable: needle, knob, bar and marker. 

###Bar

Bar is a pointer that looks like a bold line (for Linear Gauges) or curve (for Circular Gauges) colored rather brightly. It is usually situated next to the axis and shown with the marker pointer.
Below you can see a simple example Gauge with the bar pointer and the code for the example.

{sample}BCT\_Pointers_and_Data\_Bar\_01{sample} 

```
		//bar
    gauge.bar(0)
        .width(3)
        .radius(100);
```

On this sample we have defined only the width of the bar and its radius, but there's a lot of parameters to be adjusted. For example, a bar pointer can be colored with a single color or with a gradient, we can set the position of the bar according to the defined radius, snap it to the exact data point and axis, set the stroke.

To snap the pointer to the axis use the {api:anychart.core.gauge.pointers.bar#axisIndex}**.axisIndex()**{api} method. Note that the count starts from 0. There's no need in using this method if your chart contains an only axis.

Let's enable one more axis and snap the bar pointer to the new axis:

{sample}BCT\_Pointers_and_Data\_Bar\_02{sample} 

To reach the result as in the sample above we need to add the following:

```
         gauge.bar(0).axisIndex(1);
```

To tell the pointer the value from the dataSet use the {api:anychart.core.gauge.pointers.bar#dataIndex}**.dataIndex()**{api} method. Note that the count starts from 0. There's no need in using this method if you have an only value in your dataSet.

Let's add the second point to the data and snap the bar pointer to the new data point:

{sample}BCT\_Pointers_and_Data\_Bar\_03{sample} 

```
         gauge.bar(0).dataIndex(1);
```
Now let's look at the position of the bar according to its radius. As our bar is more than 1px width it can be positioned outside, in the center or inside the circle of the defined radius. To set the position use the {api:anychart.enums.GaugeSidePosition}**.position()**{api} method. The value is to be "outside", "inside" or "center". Let's put our bar inside the circle of the defined radius:

```
         gauge.bar(0).position('inside');
```

It's possible to use only the first letters of the position as a value, e.g.:

```
         gauge.bar(0).position('i');
```

{sample}BCT\_Pointers_and_Data\_Bar\_04{sample} 


###Marker

Marker is a pointer that looks to be used with a bar pointer. 

###Needle

###Knob

##Visualization

###Connection with the Data

#### dataIndex()
When you apply for the {api:anychart.core.gauge.pointers.bar#dataIndex}**.dataIndex()**{api} method, you change the value that will be represented by the pointer you add this method to. However, using this means only if you have more than one value in the dataSet, because the axis shows the first value fron your dataSet by default. So, there is no need in this method if your data looks like this:

```
dataSet = anychart.data.set([55]);
```
In case you have more that one value in your dataset, you should use the {api:anychart.core.gauge.pointers.bar#dataIndex}**.dataIndex()**{api} method to each pointer showing any other value but the first. Note that numeration of the values starts from 0.

```
//setting the data
dataSet = anychart.data.set([55,33,77]);

//using the dataIndex()
gauge.marker(0)
    .axisIndex(0);

gauge.marker(1)
    .axisIndex(1);

gauge.marker(2)
    .axisIndex(2);
```

{sample}{sample}

#### axisIndex()

##Other

//coloring