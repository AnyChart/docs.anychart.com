#Pointers and Data

* [Overview](#overview)
* [Connection with the Data](#connection_with_the_data)
 * [Bind to Data](#bind_to_data)
 * [Bind to Axis](#bind_to_axis)
 * [Multiple pointers](#multiple_pointers)
* [Types](#types)
 * [Bar](#bar)
 * [Marker](#marker)
 * [Needle](#needle)
 * [Knob](#knob)

##Overview

Pointers are elements of the Gauge charts, which are necessary for the data representation. 

##Connection with the Data

By default, when a pointer is added to the gauge, it shows the first value from the DataSet (if you've got more than one) or the only one. In case you need the second pointer with the same value to display or you have more than one value in your dataSet and you need one of your pointers to show this particular value  different from the first one, you need to connect the data with the pointer in some way. On the other hand, the situation when you need to show any value from your dataSet on the axis which is not the only and the first might take place as well.

These problems are to be easily resolved using the **.dataIndex()** and the **.axisIndex** methods. You can find more information about these methods below.

### Bind to Data

In case you have more that one value in your dataset, you should use the **.dataIndex()** method to each pointer showing any other value but the first. Note that numeration of the values starts from 0. There's no need in use of this method if you have an only value in your dataSet.

Let's add the second point to the data and enable two pointers: the bar and the marker. Let's bind the bar pointer to the new data point:

```
   //add the second data point
   dataSet = anychart.data.set([60,110]);

   //marker
   gauge.marker(0)
        .enabled(true)
        .dataIndex(0)
        .size(7);
        
    //bar
    gauge.bar(0)
        .width(3)
        .dataIndex(1);
```

{sample}BCT\_Pointers-and-Data\_16{sample} 

When you apply for the **.dataIndex()** method, you change the value that will be represented by the pointer you add this method to. However, using this means only if you have more than one value in the dataSet and more than one axis, because the only axis shows the only (or the first) value from your dataSet by default. So, there is no need in this method if your chart has an only axis and your data looks like this:

```
  dataSet = anychart.data.set([60]);
```

### Bind to Axis

To bind the pointer to the axis use the **.axisIndex()** method. Note that the count starts from 0. There's no need in using this method if your chart contains an only axis.

Let's enable one more axis and bind the bar pointer to this new axis:

{sample}BCT\_Pointers-and-Data\_17{sample} 

To reach the result as in the sample above we need to add the following:

```
    // second axis settings
    var axis_1 = gauge.axis(1)
        .radius(50)
        .width(3);

    // second scale settings
    axis_1.scale()
        .minimum(0)
        .maximum(300)
        .ticks({interval: 30})
        .minorTicks({interval: 10});

    // second ticks settings
    axis_1.ticks()
        .type('trapezoid')
        .length('8');

    // second minor ticks settings
    axis_1.minorTicks()
        .enabled(true)
        .length('3');
		
    // marker
    gauge.marker(0)
        .enabled(true)
        .dataIndex(0)
        .axisIndex(0)
        .size(7);
        
    // bar
    gauge.bar(0)
        .width(3)
        .dataIndex(0)
        .axisIndex(1);
```

Let's add the second value to our dataSet and bind the bar pointer with the new value to the new axis:

```		
   // add the second data point
   dataSet = anychart.data.set([60,120]);

    // bar
    gauge.bar(0)
        .width(3)
        .dataIndex(1)
        .axisIndex(1);
```
{sample}BCT\_Pointers-and-Data\_18{sample} 

### Multiple pointers

You can add not only different pointers but the same. Look at the example below:

{sample}BCT\_Pointers-and-Data\_19{sample}

All we need to do is to change the value of the **.marker()** itself. This value means the pointer's numbers and counts from 0.

```		
  // add the second data point
  dataSet = anychart.data.set([60,120,170]);
  
  // marker_1
  gauge.marker(0)
        .enabled(true)
        .dataIndex(0)
        .axisIndex(0)
        .size(5);
        
  // marker_2
  gauge.marker(1)
        .dataIndex(1)
        .axisIndex(0)
        .size(6);
        
   // marker_3
   gauge.marker(2)
        .dataIndex(2)
        .axisIndex(0)
        .size(7);
```

##Types

There are 4 different types of pointers avaliable: bar, marker, needle and knob. They all act as an entity that points to the value, but look different.

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

Now let's look at the position of the bar according to its radius. As our bar is more than 1px width it can be positioned outside, in the center or inside the circle of the defined radius. To set the position use the **.position()** method. The value is to be "outside", "inside" or "center". Let's put our bar inside the circle of the defined radius:

```
         gauge.bar(0).position('inside');
```

It's possible to use only the first letters of the position as a value, e.g.:

```
         gauge.bar(0).position('i');
```

{sample}BCT\_Pointers-and-Data\_Bar\_03{sample} 


###Marker

Marker is a pointer that is more demonstrative when used with a bar pointer. It can be of a plenty types, which you can read about in Marker tutorial. 
Let's first enable a marker:

```  
         //marker
    gauge.marker(0).enabled(true);
```

The marker size is rather small by default, so we need to use the **.size()** method to make the marker visible, so the code will look as below:

```  
    //marker
    gauge.marker(0)
        .enabled(true)
        .size(7);
```

{sample}BCT\_Pointers-and-Data\_Marker\_04{sample} 

It's not the best view when the marker covers the value on the axis, so now let's adjust the position of the marker according to the circle of the default or defined radius. As with bars, the marker might be in its center, outside or inside it. Let's set the marker's position to outside and look how will it change the view: 

```
    //marker
    gauge.marker(0)
        .position('outside')
        .size(7);
```
{sample}BCT\_Pointers-and-Data\_Marker\_05{sample} 

Now our marker is outside the axis, but it doesn't point at the value. Let's change its type:

```
        //marker
    gauge.marker(0)
        .position('outside')
		.triangledow
        .size(7);
```
{sample}BCT\_Pointers-and-Data\_Marker\_06{sample} 

###Needle

Let's now look at the needles - the most common pointer used with Gauges. 

```
    //needle
    gauge.needle(0)
        .enabled(true);
```

{sample}BCT\_Pointers-and-Data\_Needle\_07{sample} 

Needle can be a thin stick or a pointer of a complex form - you can regulate its width using three similar methods: **.startWidth()**, **.middleWidth()** and **.endWidth()**.

Let's make our needle thiner to the end, wider to the center and a bit thiner to the start:

```
    //needle
    gauge.needle(8)
        .startWidth(1)
        .middleWidth(3)
        .endWidth(0);
```

{sample}BCT\_Pointers-and-Data\_Needle\_08{sample} 

As we can see, the needle starts not from the gauge center. Let's adjust the start, the middle and the end of our needle with methods **.startRadius()**, **.middleRadius()** and **.endRadius()**. The value transmitted to this method can be in pixels or percents.

```
    //needle
    gauge.needle(8)
        .startRadius('0%')
        .endRadius('80%')
        .middleRadius('50%')
        .startWidth(1)
        .middleWidth(3)
        .endWidth(0);
```

{sample}BCT\_Pointers-and-Data\_Needle\_09{sample} 

###Knob

Knob is a full-curcle pointer that is nice to use with a needle or marker pointer. It looks like a switcher on microwaves or the audio tuner. You can see the example of the default enabled knob pointer below.

{sample}BCT\_Pointers-and-Data\_Knob\_10{sample} 

As you can see, this pointer is completely different from others. The first thing we'll adjust will be the number of the knob's projections (vertices). For that we use the **.verticesCount()** method.

```
        //knob
    gauge.knob(0)
        .verticesCount(15);
```

{sample}BCT\_Pointers-and-Data\_Knob\_11{sample} 

The curvature of vertices can be adjusted too. Use the **.verticesCurvature()** method and set the value from 0 to 1 (0.5 is set by default). The less the value is the more convex the vertices are. The more the value the more concave they are.

```
        //knob
    gauge.knob(0)
        .verticesCount(15)
        .verticesCurvature(.1);
```

{sample}BCT\_Pointers-and-Data\_Knob\_12{sample} 

The next feature we can adjust is the ratio, which spilts into the **.topRatio()** and **.bottomRatio**() methods. The values for these methods might be from 0 to 1 as well.

```
        //knob
    gauge.knob(0)
        .verticesCount(15)
        .verticesCurvature(.1)
        .topRatio(0)
        .bottomRatio(1);
```
{sample}BCT\_Pointers-and-Data\_Knob\_13{sample} 

If you set the **.verticesCurvature()** and the **.bottomRatio**() values to default (0.5), the vertices would look like triangles directed up from the knob:

```
        //knob
    gauge.knob(0)
        .verticesCount(15)
        .verticesCurvature(.5)
        .topRatio(0)
        .bottomRatio(.5);
```
{sample}BCT\_Pointers-and-Data\_Knob\_14{sample} 

If you set **.verticesCurvature()** and the **.bottomRatio**() values to default (0.5), the vertices would look like triangles directed down to the knob. Try to do it yourself, using the playground.

The last feature avaliable at the moment for only the knob pointers is radius, which is split the same way as ratio. Use the **.topRadius()** and the **.bottomRadius()** methods to set the radius for the outer side (height of the vertices) and the inner side (depth of dimples) accordingly. For clearer representation let's get rid of the ratio settings.

```
        //knob
    gauge.knob(0)
        .verticesCount(15)
        .verticesCurvature(.5)
        .topRadius(80)
        .bottomRadius(50);
```

{sample}BCT\_Pointers-and-Data\_Knob\_15{sample} 
