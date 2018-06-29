# Circular Gauge Chart

## Overview

In this tutorial we will learn how to build the basic circular gauge step by step, trying to cover all major elements and pointing to the articles for the further tuning a gauge.

So, a Circular Gauge is a visual representation of a measuring device with a radial axis that sweeps any angle from 0 to 360 degrees and a pointer (Needle or Knob) that indicates values on that scale. Gauge axes are usually colored for easy value distinction. Gauges can be used as clocks, speedometer, compass, volume tuner or any other gauge that should represent the value as an angle on a circle plot.

Let's start with adding or configuring gauge elements step by step, so in the end we'll create a typical JavaScript speedometer gauge as a result.

## Chart

Depending on data model and the visualization purpose the gauge may contain single series or multi series.
Let's build a gauge that should look like a speedometer. Step by step, we will make our gauge to look more realistic.

###Setting the data

Let's start with a simple speedometer gauge. First of all, we need to set the data - the speed represented. Let it be 50mph:

```
//create data set on our data
dataSet = anychart.data.set([50]);

//set the chart type
gauge = anychart.gauges.circular();

//link the data with the gauge
gauge.data(dataSet);
```

If we add a line that draws a chart, we'll see the plain frame with a cap in the center:

```
// draw chart
gauge.container('container').draw();
```

That's how it looks like in a sample:

{sample}GAUGE\_Circular\_01{sample}

##StartAngle and SweepAngle

There are two ways of how we can set the starting angles for our axes: tuning the axes only or the whole gauge. 

Method {api:anychart.core.axes.Circular#startAngle}startAngle(){api} will fix the angle you need the gauge or the axis to start from, and use {api:anychart.core.axes.Circular#sweepAngle}sweepAngle(){api} to limit the angle which would be drawn.

Axes itself have no default starting angle - it takes the gauge setting as the default - and no default limitations except which are set for the whole gauge. But it's possible to make the axis settings different from those which the gauge has.

```
//set the starting angle for the gauge
gauge.startAngle(270);

//set the starting angle for the axis
axis.startAngle(270);

//set the angle limit for the gauge
gauge.sweepAngle(180);

//set the angle limit for the axis
axis.sweepAngle(180);
```

Now, let's look at the sample. Here we've turned and limited the gauge itself. Now we've got a half-circular gauge:

{sample}GAUGE\_Circular\_02{sample}

You can use negative values also:

```
gauge.startAngle(-45);
gauge.sweepAngle(-300);
```  
{sample}GAUGE\_Circular\_02-1{sample}

Now let's adjust our axis.

##Scales 

In general, gauge scale settings is the same as the standard scale. You can find more information about scales in the [Scales tutorial](../Axes_and_Grids/Scales).

###Axis

Axis in gauges are not the same as in the other basic chart types. There's no X- and Y-axis, the only axis that a gauge displays and uses is a circular axis that is situated along the frame. Generally, axis in Gauges behaves like a series in other chart types. The Gauge can be multi-axes.

Let's enable the axis to see the changes we make and set its width and radius at once. To make it we use the {api:anychart.core.axes.Circular#radius}radius(){api} and the {api:anychart.core.axes.Circular#width}width(){api} methods.

```
//axis settings
var axis = gauge.axis()
    .radius(95)
    .width(1);
```

###Minimum and Maximum

Let's limit the axis with the values we want to be displayed. To set the limits, we used the {api:anychart.scales.ScatterBase#minimum}minimum(){api} and the {api:anychart.scales.ScatterBase#maximum}maximum(){api} methods. Let it be from 0 to 120 mph:

```
//scale settings
axis.scale()
    .minimum(0)
    .maximum(120);
```

So our gauge with the fixed axis will look the following way:

{sample}GAUGE\_Circular\_03{sample}

###Ticks

At the moment our speedometer has only 4 ticks each 40 mph, that is not actually informative. Let's set the limits for our ticks, make major tickes appear each 10 mph and enable minor ticks.

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

To enable the ticks and set the interval we used the {api:anychart.core.axes.Circular#ticks}ticks(){api} method and the {api:anychart.core.axes.Circular#minorTicks}minorTicks(){api} for our minor ticks acordingly.

{sample}GAUGE\_Circular\_04{sample}

It's easy to notice that there's no difference between major and minor ticks. Let's set them of the type and length that will emphasize the major ticks:

```
//ticks settings
axis.ticks()
    .enabled(true)
    .type('trapezoid')
    .length('8');

//minor ticks settings
axis.minorTicks()
    .enabled(true)
    .length('1');
```

Look at the sample to make it clear:

{sample}GAUGE\_Circular\_05{sample}

##Visualization

In this section we will talk about other elements of Gauges and demonstrate how to apply them.

###Pointers

As you may remember, we have defined some data at the beginning of the article, but there's still no data shown on any of the samples. That's because we haven't enabled a pointer yet.

There are 4 different types of pointers available: needle, knob, bar and marker. Knob is a full-circular pointer that is usually used with the needle and designed to look like a tuner of a part of electronics (audio, microwave, oven, etc.), so we don't describe it in here. Let's add the second axis and the second value in our dataSet to make some sense out of the rest pointers:

```
//needle
gauge.needle(0)
    .enabled(true)
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
    .axisIndex(1)
    .position('i')
    .dataIndex(1)
    .width(3)
    .radius(50)
    .zIndex(10);
```

{sample}GAUGE\_Circular\_06{sample}

To bind the pointers to the axis and data we want them to show, we use {api:anychart.core.gauge.pointers.Bar#axisIndex}axisIndex(){api} and {api:anychart.core.gauge.pointers.Bar#dataIndex}dataIndex(){api} methods. The value transmitted to the method is the number of axis or data accordingly.

For more information look up the [Pointers and Data](../Gauges/Pointers_and_Data) tutorial.

###Cap

Cap in gauges has no practical meaning: its purpose is to make an on-screen gauge to look more like a usual gauge. Let's enable and fix it to fit its look to the gauge.

```
//cap
gauge.cap()
    .radius('6%')
    .enabled(true);
```
{sample}GAUGE\_Circular\_07{sample}

## Label

Like with any other chart type, we can set the chart label and adjust it. Let our speedometer be for the car of Albany brand:

```
//gauge label
gauge.label()
    .text('ALBANY')
    .anchor('center') //set the position of the label
    .adjustFontSize(true)
    .hAlign('center')
    .offsetY('15%')
    .offsetX('50%')
    .width('50%')
    .height('10%')
    .zIndex(10);
```

Besides the label itself, we have to adjust its look. First of all, to put the label in the center of the gauge we use the {api:anychart.core.ui.Label#anchor}anchor(){api} method. Then we have to change the size of the label, because it looks too small by default. For this we use the usual methods {api:anychart.core.ui.Label#width}width(){api} and {api:anychart.core.ui.Label#height}height(){api} to set the bounds of the label area and add the {api:anychart.core.ui.Label#adjustFontSize}adjustFontSize(){api} method to make our label fit the defined parameters. 

Now let's put our label in the center of the area: use {api:anychart.graphics.vector.Text#hAlign}hAlign(){api}. To shift the label a bit up we used the {api:anychart.core.ui.Label#offsetX}offsetX{api} and {api:anychart.core.ui.Label#offsetY}offsetY{api} methods.

Then we should put the name of the car company beside the cap to make the look of our chart more real. For that we use the {api:anychart.core.ui.Label#zIndex}zIndex(){api} parameter.  

{sample}GAUGE\_Circular\_08{sample}

##Range

```
//range
gauge.range()
    .radius(70)
    .from(0).to(120)
    .endSize('18%');
```

{sample}GAUGE\_Circular\_09{sample}

##Colors

AnyChart charting library uses default color palette to colorize data elements of chart automatically if you have not define special colors.

###Colorizing Elements

As you see, our speedometer does not look attractive at the moment. Let's colorize its elements to make the look of the speedometer more realistic and learn at once, how to apply different colors to different data. To apply the color to the exact element we need to set {api:anychart.graphics.vector.Fill}fill(){api}  and {api:anychart.graphics.vector.Stroke}stroke(){api} parameters or {api:anychart.graphics.vector}fontColor(){api} for the labels. Let's change the colors to the elements on our sample:

{sample}GAUGE\_Circular\_10{sample}

In the sample above we have set the colors to the elements, besides that we have changed positions and sizes of several elements.

**Important Note:**

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "RGB(240,248,255)" you can set "HSB(208,100,97)" or "AliceBlue" or "#F0F8FF"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

* Different ways of [setting colors](../Appearance_Settings/Color_Management) of elements

