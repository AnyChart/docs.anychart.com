#Circular Gauge Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Setting the data](#setting_the_data)
* [StartAngle and SweepAngle](#startangle_and_sweepangle)
* [Scales](#scales)
 * [Axis](#axis)
 * [Minimum and Maximum](#minimum_and_maximum)
 * [Ticks](#ticks)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
 * [Pointers](#pointers)
 * [Cap](#cap)
* [Label](#label)
* [Range](#range)
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
  dataSet = anychart.data.set([50]);

//set the chart type
  gauge = anychart.circularGauge();

//link the data with the gauge
  gauge.data(dataSet);
```
If we add a line that draws a chart, we'll see the plain frame with a cap in the center:
```
  // draw chart
  gauge.container('container').draw();
```

That's how it looks like in a sample:
{sample}BCT\_Gauges\_01{sample}

##StartAngle and SweepAngle

Change the **.startAngle()** parameter to fix the angle you need axes to start from:

```
//set the angle
  axis.startAngle(270);
```  

Axis can be limited setting the **.sweepAngle()** parameter (its value represents the angle which would be drawn): 

```
//set the angle
  gauge.startAngle(270).sweepAngle(180);
```

Now, let's look at the sample and see what we've done:

{sample}BCT\_Gauges\_02{sample}

As shown above, now we've got a half-circular gauge. Now let's adjust our axis.

##Scales 

In general, gauge scale settings is the same as the standard scale. You can find more information about scales in the [Scales tutorial](../Axes_and_Grids/Scales).

###Axis

Axis in gauges are not the same as in the other basic chart types. There's no X- and Y-axis, the only axis that a gauge displays and uses is a circular axis that is situated along the frame.

Let's enable the axis to see the changes we make and set its width and radius at once:

```
	//axis settings
  var axis = gauge.axis()
       .radius(95)
       .width(1);
```

###Minimum and Maximum

Let's limit the axis with the values we want to be displayed. Let it be from 0 to 120 mph:

```
		//scale settings
    axis.scale()
        .minimum(0)
        .maximum(120);
```

So our gauge with the fixed axis will look the following way:

{sample}BCT\_Gauges\_03{sample}

###Ticks

At the moment our speedometer has only 4 ticks each 40 mph, that is not actually informative. Let's set major tickes each 10 mph and enable minor ticks.

```
		//scale settings
    axis.scale()
        .minimum(0)
        .maximum(120)
        .ticks({interval: 10})
        .minorTicks({interval: 1});

		//minor ticks settings
    axis.minorTicks()
        .enabled(true);
```

{sample}BCT\_Gauges\_04{sample}

It's easy to notice that there's no difference between major and minor ticks. Let's set them of the type and length that will emphasize the major ticks:

```
		//ticks settings
    axis.ticks()
        .type('trapezoid')
        .length('8');

		//minor ticks settings
    axis.minorTicks()
        .enabled(true)
        .length('1');
```

Look at the sample to make it clear:

{sample}BCT\_Gauges\_05{sample}

##Visualization

In this section we will talk about other elements of Gauges and demonstrate how a style can be applied.

The main idea of styles is to segregate visualization and data definition. Visual appearance of any chart is defined using certain styles and then you just apply the style to the certain data elements.

Also, styles are used to make charts interactive, so you can define how elements will behave by default, when hovered, etc.

###Basic Sample

Let's look what is a simple style. As we've already said  a style consists of several elements, here is an javascript structure:

```
//scale settings
    axis.scale()
        .minimum(0)
        .maximum(120)
        .ticks({interval: 10})
        .minorTicks({interval: 1});
```

Actually, we have already done this before; put your attention to the form of the lines. This way of setting the parameters just makes the code easier to read and understand.

###Pointers

As you may remember, we have defined some data at the beginning of the article, but there's still no data showm on any of the samples. That's because we haven't enabled a pointer yet.

There are 4 different types of pointers avaliable: needle, knob, bar and marker. Let's add the second axis and the second value in our dataSet to make some sense out of all these pointers:

```
        //needle
    gauge.needle(0)
        .enabled(true)
        .stroke('1px rgba(2,2,2,.2)')
        .startRadius('-5%')
        .endRadius('80%')
        .middleRadius(0)
        .startWidth('0.1%')
        .endWidth('0.1%')
        .middleWidth('5%');
        
        //marker
    gauge.marker(0)
        .axisIndex(1)
        .dataIndex(1)
        .size(7)
        .type('triangledown')
        .position('outside')
        .radius(50);
    
    //bar
    gauge.bar(0)
        .axisIndex(0)
        .position('i')
        .dataIndex(1)
        .fill('#F0673B .9')
        .stroke('#F0673B')
        .width(5)
        .radius(100);
```
{sample}BCT\_Gauges\_06{sample}

Knob is a full-circular pointer that is usually used with the needle and designed to look like a tuner of a part of electronics (audio, microwave, oven, etc.), so we don't describe it in here. 

###Cap




##Label

Like with any other chart type, we can set the chart label and adjust it:

```
        //gauge label
    gauge.label()
            .text('TOYOTA')
            .anchor('center'); //set the position of the label
```

##Range

```
    gauge.range()
        .radius(60)
        .from(0).to(120);
```

##Colors

###Colorizing Elements
