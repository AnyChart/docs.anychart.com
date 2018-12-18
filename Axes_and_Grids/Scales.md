{:index 5}
# Scales

## Overview

Scales allow you to control such features as minimum and maximum scale values, scale inversion, intervals, scale type and so on for a single axis. To create additional axes - please read [Additional axis](Additional_Axes) first. To adjust axes display see: [Axis Basics tutorial](Axis_Basics).
  
In this section main scales options are explained.
  
API starting point for everything you can do with scales is: {api:anychart.scales}anychart.scales{api} namespace.

## Types

There are four types of scales in AnyChart charting framework: {api:anychart.scales.Linear}Linear{api}, {api:anychart.scales.Logarithmic}"Logarithmic"{api}, {api:anychart.scales.Ordinal}Ordinal{api} and {api:anychart.scales.DateTime}DateTime{api}. To set scale type use the appropriate constructor:

```
chart.xScale(anychart.scales.linear());

var newScale = anychart.scales.ordinal();
chart.yScale(newScale);
```

Note: working with extra axes is explained in details in [Additional Axes Tutorial](Additional_Axes) article.

### Linear

Linear scale type is a default type of the Y-scale for the most of charts. Values for this scale should be numbers and scale intervals will be evenly distributed along the axis. This type of scale is used when values fall within a reasonable range.

```
chart.yScale(anychart.scales.linear());
```

{sample}AGST\_Scales\_01{sample}

### Logarithmic

A logarithmic scale is a scale of measurement that uses the logarithm of a physical quantity instead of the quantity itself. Presentation of data on a logarithmic scale can be helpful when the data covers a large range of values the logarithm reduces this to a more manageable range. 

```
chart.yScale(anychart.scales.log());
```

**Note:** AnyChart supports negative values on logarithmic scales.

{sample}AGST\_Scales\_02{sample}

### Ordinal

Ordinal scale type is a default type for xScale in all cartesian charts. Values for this scale should be of string type and scale intervals will be set automatic.

```
chart.xScale(anychart.scales.ordinal());
```

{sample}AGST\_Scales\_03{sample}

Ordinal Scale has the mode that is set by the {api:anychart.scales.Ordinal#mode}mode(){api} method. This mode defines where the start and end of the scale is. The default value is `'discrete'`, to change the default behaviour set it to `'continuous'`:

```
chart.xScale().mode('continuous');
```

{sample}AGST\_Scales\_03\_1{sample}

**Note**: You can set custom names for ordinal scale using {api:anychart.scales.Ordinal#names}names(){api} method. Use string parameter for this method to set data field with names for scale values or use array as parameter for {api:anychart.scales.Ordinal#names}names(){api} method to set custom names.

### Date Time

A dateTime scale is a scale of measurement that is based on the **UTC Date** format, but accepts variety of data formats. Presentation of data on a dateTime scale can be helpful for displaying time lines and time intervals. More information about data formats and usage is in [Date/Time tutorial](Date_Time_Axes).

```
chart.yScale(anychart.scales.dateTime());
```

{sample}AGST\_Scales\_04{sample}

## Stack Mode

Scales control series stacking. Full description of stacking options can be found in [Stacked Charts](../Basic_Charts/Stacked/Overview).

To change scale mode you need to use {api:anychart.scales.Linear#stackMode}stackMode(){api} method. Possible values come from {api:anychart.enums.ScaleStackMode}anychart.enums.ScaleStackMode{api}:

To set *value stacking* mode use:

```
chart.yScale().stackMode("value");
```

To set *percent stacking* mode use:

```
chart.yScale().stackMode("percent");
```

Here is a basic sample of a chart with a stacked scale:

{sample}AGST\_Scales\_05{sample}

## Inversion

If you want to display scale in the inverted mode use {api:anychart.scales.Linear#inverted}inverted(){api} method with `true` parameter.

```
chart.yScale().inverted(true);
```

Sample of the chart with inverted scale:

{sample}AGST\_Scales\_10{sample}

## Minimum and Maximum

### Hard

Maximum and minimum values by default are calculated automatically. If you want to set them use 
{api:anychart.scales.Linear#minimum}minimum(){api} and {api:anychart.scales.Linear#maximum}maximum(){api} methods:

```
chart.yScale().minimum(-50);
chart.yScale().maximum(100);
```

{sample}AGST\_Scales\_06{sample}

### Soft

In some cases you may have no need to define solid minimum or maximum and need a scale to be autocalculated, but at the same time you may want a scale to remain in a certain range (i.e. "never go below zero" or "never go above 100"): that's the case when soft maximum and soft minimum parameters help you.

To set soft maximum and soft minimum use {api:anychart.scales.Linear#softMinimum}softMinimum(){api} and {api:anychart.scales.Linear#softMaximum}softMaximum(){api} methods:

```
chart.yScale().softMinimum(-50);
chart.yScale().softMaximum(100);
```

Sample below shows how soft minimum and soft maximum help to show data better than simple minimum and maximum.

{sample}AGST\_Scales\_07{sample}

### Gap

For any axis scale you can set minimum and maximum offsets. Maximum and minimum offsets are the spacing between maximum or minimum axis scale values and they are set as a ratio to the maximum and minimum scale values.

```
chart.yScale().minimumGap(1);
chart.yScale().maximumGap(1);
```

In the sample below you can see how offsets settings affects js chart. The chart to the left has minimum and maximum offsets set to 0.5, the chart to the right has all the same settings, but offsets are not set. Note that offsets are ignored when maximum or minimum scale values are specified.

{sample}AGST\_Scales\_09{sample}

## Stick to Zero

{api:anychart.scales.Linear#stickToZero}stickToZero(){api} method allows to disable the default scale autocalculation behavior and always include zero in scale range.

## Ticks

### Minor and Major

For any scale, but ordinal, you can set {api:anychart.scales.Linear#ticks}major{api} and {api:anychart.scales.Linear#minorTicks}minor{api} ticks intervals, which are calculated automatically by default. 
  
Major and minor ticks intervals are axis steps, which define where axis labels (major interval), axis ticks (major and minor, correspondingly) and major and minor grids are displayed.

```
// set ticks interval
chart.yScale().ticks().interval(10);

// set minor ticks interval
chart.yScale().minorTicks().interval(2);
```

In the sample below you can see how interval settings affects grids, ticks and labels.

{sample}AGST\_Scales\_08{sample}

### Integer

If you do not want to see fractional values on the axis, you can use the {api:anychart.scales.ScatterTicks#allowFractional}allowFractional(){api} method:

```
// force ticks to stick to integer values
chart.yScale().ticks().allowFractional(false);
```

Take a look at the sample and see how to enable and disable this option:

{sample}AGST\_Scales\_08\_1{sample}

### Array

If you need deep customization of ticks you can access and change the number of position of ticks manually. To access the array of ticks use the {api:anychart.scales.ScatterTicks#get}get(){api} method. 

**Note:** to get the proper array of calculated ticks use the {api:anychart.scales.ScatterTicks#get}get(){api} method after chart *"draw"* event.

To set the array of ticks use the {api:anychart.scales.ScatterTicks#set}set(){api} method.

Here is a sample that makes use of both methods to overhaul the set of ticks:

```
// get the array of generated ticks
ticksArray = chart.yScale().ticks().get();
// modify the array of ticks
if (ticksArray.length > 2) ticksArray.pop();
// set the array of ticks
chart.yScale().ticks().set(ticksArray);
```

And shows how to load some precalculated array:

```
// set a fixed array as ticks
var ticksArray = [0, 1, 2, 2.8];
chart.yScale().ticks().set(ticksArray);
```

{sample}AGST\_Scales\_08\_2{sample}

Another example of using this feature of the scale is shown below: the data that is set to chart can be sorted, read and then used to fill the array of ticks and axis markers to highlight the values:

```
// get raw data
dataSet = anychart.data.set([
    {x: "Soprano", value: 1.1},
    {x: "Alto", value: 0.1},
    {x: "Tenor", value: 2.5},
    {x: "Bass", value: 1.8}
]);

// create a sorted view
sortedData = dataSet.mapAs().sort('value', 'asc');

// create a chart using sorted data
chart = anychart.column(sortedData);

// create an empty array
var ticksArray = [];

// get data point value from the data set
// and populate the array
for (i=0;i < sortedData.getRowsCount();i++){
  ticksArray[i] = sortedData.get(i, 'value');
}
// set the populated array as ticks array
chart.yScale().ticks().set(ticksArray);
```    

{sample}AGST\_Scales\_08\_3{sample}

## One Scale for Different Charts

Scale calculates values and in many cases it is very useful to adjust settings of one scale and then use it for multiple charts. in example below we will create custom scale, adjust it and apply it for 2 charts. Click "launch in playground" to see the code

{sample}AGST\_Scales\_11{sample}

## Synchronization

Sometimes you may encounter situations when you need to sync minimums and/or maximums of several scales and you don't want to set exact values [minimum and maximum](#minimum_and_maximum). In such cases you need to use several special methods: {api:anychart.charts.Cartesian#getYScales}getYScales{api} and {api:anychart.charts.Cartesian#getYScales}getXScales{api} - the allow you to get a collection of all scales from the chart, and the
{api:anychart.core.Chart#getStat}getStat(){api} method that can obtain maximums and minimums of all scales.

Let's see it in a sample: say you have created a [value stacked column chart with two stacked clusters](../Basic_Charts/Stacked/Overview#clustered) and you need scales to be in sync, then you need to do the following:

```
// sync minimums and maximums of the scales
globalMax = chart.getStat("yScalesMax");
globalMin = chart.getStat("yScalesMin");
// get all y scales
var yScales = chart.getYScales();
// set the same minimum and maximum
for (var i = 0; i < yScales.length; i++) {
   yScales[i].minimum(globalMin);
   yScales[i].maximum(globalMax);
}  
```

Here is a live sampe:

{sample}AGST\_Scales\_12{sample}

The same can be done with X-scales if needed:

```
// sync minimum and maximum values of the scales
globalMax = chart.getStat("xScalesMax");
globalMin = chart.getStat("xScalesMin");
// get all y scales
var xScales = chart.getXScales();
// set the same minimum and maximum
for (var i = 0; i < xScales.length; i++) {
   xScales[i].minimum(globalMin);
   xScales[i].maximum(globalMax);
}  
```
