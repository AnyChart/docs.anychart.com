#Circular Gauge Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Setting the data](#setting_the_data)
* [Axis](#axis)
 * [StartAngle and SweepAngle](#startangle_and_sweepangle)
 * [Ticks](#ticks)
 * [Minimum and Maximum](#minimum_and_maximum)
 * [Markers](#markers)
 * [Labels](#labels)
 * [AxisRange](#axisrange)
* [Padding](#padding)
* [Visualization](#visualization)
 * [Pointers](#pointers)
 * [Cap](#cap)
 * [Basic Sample](#basic_sample)
* [Labels](#labels)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)



##Overview

In this tutorial we will learn how to build the basic circular gauge step by step, trying to cover all major elements and pointing to the articles for the further tuning a gauge.

So, a Circular Gauge is a radial scale that sweeps any angle from 0 to 360 degrees and a pointer (Needle or Knob) that indicates values on that scale. Gauge scale is usually colored for easy value quality distinction. Gauges can be used as clocks, speedometer, compass, audio feature tuner or any other gauge that should represent the value as an angle on a circle plot.

Let's start with adding or configuring gauge elements step by step, so in the end we'll create a typical speedometer gauge as a result.

Note: in this sample AnyChart.swf is used, but you can optimize the page with selected chart type if you use custom type dependent swf. These swfs are described in SWFs Guide.

##Chart

Depending on data model and the visualization purpose the gauge may contain single series or multi series.
Let's build a gauge that should look like a speedometer. Step by step, we will make our gauge to look more realistic.

###Setting the data

Let's start with a simple speedometer gauge. First of all, we need to set the data - the speed represented. Let it be 50mph:

```
//create data set on our data
  dataSet = anychart.data.set([81,34.5]);

//chart type
  gauge = anychart.circularGauge();
```
If we add a line that draws a chart, we'll see the plain frame with a cap in the center:
```
  // draw chart
  gauge.container('container').draw();
```

That's how it looks like in a sample:
{sample}BCT\_Gauges\_01{sample}

##Axis

Axis in gauges are not the same as in the other basic chart types. There's no X- and Y-axis, the only axis that a gauge displays and uses is a circular axis that is situated along the frame.

Let's enable the axis to see the changes we make:

```
//enable the axis
  var axis = gauge.axis(0);
```

###StartAngle and SweepAngle

Change the **.startAngle()** parameter to fix the angle you need axes to start from:

```
//set the angle
  gauge.axis(0).startAngle(225);
```  

Axis can be limited setting the **.sweepAngle()** parameter: 

```
//set the angle
  gauge.startAngle(225).sweepAngle(180);
```

###Ticks

###Minimum and Maximum

###Markers

###Labels

###AxisRange

##Padding

##Visualization

###Pointers

###Cap

###Basic Sample

##Labels

##Colors

###Colorizing Elements
