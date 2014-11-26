# Radar Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
 * [Multi-series](#multi-series)
* [Axes](#axes)
 * [Orientation](#orientation)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Padding](#padding)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)

## Overview

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.


The radar chart is also known as web chart, spider chart, star chart, cobweb chart, star plot, irregular polygon, polar chart, or kiviat diagram.

## Chart

AnyChart allows to display three types of series on Radar chart: Line, Area and Marker. You need to set **anychart.polarChart()** to display Radar chart:

```
    chart = anychart.radarChart();

    chart.line([
        {name: "Administration", y="22"},
        {name: "Sales", y="34"},
        {name: "Marketing", y="16"},
        {name: "Research", y="12"},
        {name: "Support", y="38"},
        {name: "Development", y="47"}
    ]);
```

As you can see each point is represented by category set using name attribute and value set using y attribute.

Here is a basic Radar sample:

{sample}BCT\_RadarChart\_01{sample}

## Radar plot configuration

Radar plot has several distinctive configuration options, which are presented in this section: chart radius settings, chart rotation and background settings.

### Radius size

By default AnyChart calculates radius of radar chart automatically, but this parameter may be set manually. Radar chart radius is controlled by maximum and minimum size of Y scale and may be set throught **.yScale().minimum().maximum()** mathod.

```
  //set chart type
  var chart = anychart.radarChart();

  //set radar radius
  chart.yScale()
    .maximum(120) //set maximum radius of radar chart
    .minimum(50); //set minimum radius of radar chart
```

Here is a sample of the radar chart radius size set manually:

{sample}BCT\_RadarChart\_02{sample}

### Start angle

By default radar starts drawing from the top center point (0°), but you can change this using **.startAngle()**
parameter:

```
  chart.startAngle(90);
```

Sample chart with starting angle shifted to 90°:

{sample}BCT\_RadarChart\_03{sample}

### Plot background

You can change radar background using **.background()** method, learn more about this method at [Background settings tutorial](../General_Appearance_Settings/Background).

```
  chart.background()
    .enabled(true)                                  //enables background
    .fill({
      keys: ['.1 white', '.7 gray', '.9 darkgray'], //set gradient colors
      angle: -130                                   //set angle of colors drawing
    });
```

Sample radar chart with tuned background:

{sample}BCT\_RadarChart\_04{sample}

Border settings

Radar border consists of two different lines: <border> of <background> node described above, and X-axis setting - <line> node:

XML Syntax
XML Code
Plain code
01
<chart_settings>
02
  <axes>
03
    <x_axis>
04
      <line enabled="true" thickness="4" type="Gradient">
05
        <gradient>
06
          <key color="white" />
07
          <key color="black" />
08
        </gradient>
09
      </line>
10
    </x_axis>
11
  </axes>
12
</chart_settings>
Sample below shows Х-axis line width and background border are set to 4 pixels:

Live Sample:  Radar Chart Plot border

to top

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis
scale and settings and many more. All axis features are described in
[Axes tutorial](../Axes_Grid_Scales_Trends_etc/Axis_Basics).

// Add information on topic content


### Stroke

Axis stroke appearance is controlled by **.stroke()** parameter.

```
  // set chart type
  var chart = anychart.radarChart();

  // adjust y axis visualization
  chart.yAxis().stroke('2 red');  // set stroke thickness equal to 2px and set red color to the stroke
```

More information on possible stroke settings may be found in [Strokes and Lines tutorial](../General_Appearance_Settings/Strokes_and_Lines).


Here is a sample of tuned X and Y axes. Y axis has dashed red stroke and X axis has stroke colorized with gradient
color.

{sample}BCT\_RadarChart\_05{sample}

### Inversion

AnyChart allows to invert any axis. Inversion is controlled by axis **.inverted()** parameter:

```
    chart.yScale().inverted(true);
```
Look at the demonstration of Y Axis inversion on the sample below:

{sample}BCT\_RadarChart\_06{sample}

### Logarithmic Scale

AnyChart allows to make Y axis logarithmic. Scale type is controlled by **.scale()** parameter.

```
    var logScale = anychart.scales.log();   // create logarithmic scale
    logScale.minimum(0.1).maximum(10000);   // set minimum and maximum value for the scale
    chart.yScale(logScale);                 // set logarithmic scale as y scale for the chart
```

And here is the demonstration of Logarithmic Y Axis on a simple radar with area series:

{sample}BCT\_RadarChart\_07{sample}

### Stacked Mode

Multiple area series may be presented with usage of stacked mode for Y scale. Stacked mode helps to visualize data in
 a convenient way for comparing different data series which shares one of the values. Use **.stackMode()** method to
 enable stacked mode.

```
  //set chart type
  var chart = anychart.radarChart();

  //enable stacked mode for y scale
  chart.yScale().stackMode('value');
```

{sample}BCT\_RadarChart\_08{sample}

## Visualisation

In this section we will describe main parts of radar chart style and demonstrate how style can be applied.


The main idea of styles is to segregate visualization and data definition. Visual appearance of columns is defined
using certain methods.

### Grid

Radar grid is a combination of circuit and radial grids. Grid visual appearance can be controlled with several
parameters:

```
  //chart type
  var chart = anychart.radarChart();

  chart.grid(0).
    .oddFill('red')       //colorizing odd cells in the grid
    .evenFill('darkred')  //colorizing even cells in the grid
    .layout('radial');    //set layout type
```

**Note:** full information on grid settings can be found in [grid section of Scale tutorial](../Axes_Grid_Scales_Trends_etc/Scales#grids)


Sample below demonstrates two radar charts with adjusted visualisation of the radial type of grid as well as of the
circuit one.

{sample}BCT\_RadarChart\_09{sample}









To turn X axis on or off use enabled attribute of <x_axis> node - setting it to false hides all visible components of X axis:

XML Syntax
XML Code
Plain code
01
<axes>
02
  <x_axis enabled="false" />
03
</axes>
Sample chart with X-axis turned off:

Live Sample:  Radar Chart X Axis disabled

Note: You see the chart outline - it comes from background.
to top

Tickmarks

Tickmarks are the small marks used to represent a point on an axis scale, used to indicate major step of an axis scale. You can control their appearance and position. To enable/disable tickmarks set enabled="true" or enabled = "False" to <major_tickmark>

XML Syntax
XML Code
Plain code
01
<axes>
02
  <x_axis>
03
    <major_tickmark enabled="true" size="10" thickness="3" inside="true" outside="true" />
04
  </x_axis>
05
</axes>
Tickmarks can be placed "inside" and "outside" relatively to axis line. These features are controlled by inside and outside attributes.

Live Sample:  Radar Chart X Axis Tickmarks

Warning: X axis in Radar plot doesn't support minor grids and tickmarks. Only major.
to top

Grids

Each axis has its own grid. By default grid is enabled for all axes and looks like a set of black lines. You can turn it off or configure to fit your needs. Here is a sample XML with grid settings:

XML Syntax
XML Code
Plain code
01
<x_axis>
02
  <major_grid enabled="true" interlaced="true" draw_last_line="true">
03
    <line thickness="2" />
04
    <interlaced_fills>
05
      <even>
06
        <fill type="Gradient" opacity="0.4" focal_point="0">
07
          <gradient type="Radial">
08
            <key color="Gray" />
09
            <key color="White" />
10
          </gradient>
11
        </fill>
12
      </even>
13
    </interlaced_fills>
14
  </major_grid>
15
</x_axis>
In <line> node you can change:

Attribute	Description
color	Sets line color.
opacity	Sets line opacity.
thickness	Sets line thickness.
In <interlaced_fills> node you can set <even> and <odd> fills, fills start from axis and the first section is "even".

Live Sample:  Radar Chart X Axis Grid

Warning: X axis in Radar plot doesn't support minor grids and tickmarks. Only major.
to top

Labels settings

You can change format, rotation, placement, paddings and visual settings of axis labels, this section covers all basic available options.

Rotation settings

Using circular_labels_style attribute you can change the way labels are placed near the circular axis of radar chart: the placement options are: "Horizontal", "Circular" or "Radial".

By default Horizontal is set, but you can always change it:

XML Syntax
XML Code
Plain code
01
<x_axis>
02
  <labels circular_labels_style="Horizontal" />
03
</x_axis>
Horizontal labels sample:

Live Sample:  Radar Chart Rotation Sample

Setting Circular mode sample:

XML Syntax
XML Code
Plain code
01
<axes>
02
  <x_axis>
03
    <labels circular_labels_style="Circular" />
04
  </x_axis>
05
</axes>
And the chart with with such settings:

Live Sample:  Radar Chart Circular rotation Sample

Setting Radial mode:

XML Syntax
XML Code
Plain code
01
<axes>
02
  <x_axis>
03
    <labels circular_labels_style="Radial" />
04
  </x_axis>
05
</axes>
And the chart with radially placed labels:

Live Sample:  Radar Chart Radial rotation Sample

to top

Position and padding

Labels can be Inside or Outside of the axis and this is configured using position attribute, which is set to Outside by default.

You can also set the padding between the axis and labels (in pixels):

XML Syntax
XML Code
Plain code
01
<x_axis>
02
  <labels position="Inside" padding="10" />
03
</x_axis>
Sample with padding set to 10 and labels placed inside:

Live Sample:  Radar chart X-axis labels position

to top

Background settings

You can change labels background. Learn more about background configuration in Background settings tutorial.

XML Syntax
XML Code
Plain code
01
<labels>
02
  <background enabled="true">
03
    <fill type="Gradient">
04
      <gradient type="Linear">
05
        <key color="LightColor(DeepSkyBlue)" position="0.1" opacity="0.01" />
06
        <key color="White" position="0.9" />
07
      </gradient>
08
    </fill>
09
    <inside_margin all="2" />
10
    <border enabled="true" thickness="1" color="Blue" type="Linear" opacity="0.2" />
11
    <corners all="2" type="Cut" left_top="1" />
12
  </background>
13
</labels>
Sample with labels with tuned background:

Live Sample:  Radar chart Labels Background Sample

to top

Formatting settings

In labels format you can access only %Value token, which can be formatted according to the Axis Labels Formatting rules:

XML Syntax
XML Code
Plain code
01
<x_axis>
02
  <labels>
03
    <format><![CDATA[{%Value}{maxChar:3,maxCharFinalChar:.}]]></format>
04
  </labels>
05
</x_axis>
In the sample below all names are limited to the length of 3:

Live Sample:  Radar chart Labels Formatting Sample

to top

Y axis settings

This section tells how to configure Y axis mode, scale and its elements, such as tick marks, grid and labels.

Y axis enable/disable

To turn Y axis on or off use enabled attribute of <y_axis> node - setting it to false hides all visible components of Y axis:

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis enabled="false" />
03
</axes>
Sample with Y axis turned off:

Live Sample:  Radar chart Y-axis disabled

to top

Linear and Logarithmic scale

Radar chart supports to scale types: linear and logarithmic. This is controlled using type attribute of <scale> node :

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale type="Logarithmic" />
03
</y_axis>
Sample radar chart with logarithmic axis:

Live Sample:  Radar chart with log scale

to top

Scale modes

Radar chart Y axis supports three modes: Normal, Stacked and PercentStacked.

Stacked scale mode

Stacked scale mode stacks all y vales within each category, set this mode via mode attribute of <scale> node:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale mode="Stacked" />
03
</y_axis>
Sample stacked radar chart:

Live Sample:  Radar chart with stack

Note: different series types do not stack (i.e. Line do not stack with Area).
to top

PercentStacked scale mode

Percent stacked mode calculates the proportion of each point to the category sum and uses this percentage as a value. This mode is also set using mode attribute of <scale> node:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale mode="PercentStacked" />
03
</y_axis>
Sample Radar chart with PercentStacked axis scale mode:

Live Sample:  Radar chart with percentStack

Note: different series types do not stack (i.e. Line do not stack with Area).
to top

Tickmarks

Tickmarks are the small marks used to represent a point on an axis scale, used to indicate major step of an axis scale. You can control their appearance and position. To enable/disable tickmarks set enabled="True" or enabled = "False" to <major_tickmark>

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis>
03
    <major_tickmark enabled="true" size="10" thickness="2" inside="true" outside="true" />
04
  </y_axis>
05
</axes>
Tickmarks can be placed "inside" and "outside" relatively to axis line. These features are controlled by inside and outside attributes.

Live Sample:  Radar Chart Y Axis Tickmarks

Warning: Y axis in radar plot doesn't support minor grids and tickmarks. Only major.
to top

Grids

Each axis has its own grid. By default grid is enabled for all axes and looks like a set of black lines. You can turn it off or configure to fit your needs. Here is a sample XML with grid settings:

XML Syntax
XML Code
Plain code
01
<major_grid enabled="true" interlaced="true" draw_last_line="true">
02
  <line thickness="1" opacity="0.4" />
03
  <interlaced_fills>
04
    <even>
05
      <fill type="Gradient" opacity="0.4" focal_point="0">
06
        <gradient type="Radial">
07
          <key color="SkyBlue" />
08
          <key color="White" />
09
        </gradient>
10
      </fill>
11
    </even>
12
    <odd>
13
      <fill type="Solid" opacity="0.1" color="DeepSkyBlue" />
14
    </odd>
15
  </interlaced_fills>
16
</major_grid>
Attributes of <line>:

Attribute	Description
color	Sets line color.
opacity	Sets line opacity.
thickness	Sets line thickness.
In <interlaced_fills> node you can set <even> and <odd> fills, fills start from axis and the first section is "even".

Live Sample:  Radar Chart Y-Axis Grid

Warning: Y axis in radar plot doesn't support minor grids and tickmarks. Only major.
to top

Labels settings

You can tune Y axis labels format, position, rotation, padding and change visual settings.

Rotation

To rotate the labels you should set rotation angle in rotation attribute:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <labels rotation="33" />
03
</y_axis>
Sample Radar chart with rotated labels:

Live Sample:  Radar Chart Y-Axis Rotation Sample

to top

Position and padding

Labels can be Inside or Outside of the axis and this is configured using position attribute, which is set to Outside by default.

You can also set the padding between the axis and labels (in pixels):

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <labels position="Inside" padding="10" />
03
</y_axis>
Sample with padding set to 10 and labels placed inside:

Live Sample:  Radar chart Y-axis labels position

to top

Background settings

You can change labels background. Learn more about background configuration in Background settings tutorial.

XML Syntax
XML Code
Plain code
01
<labels>
02
  <background enabled="true">
03
    <fill type="Gradient">
04
      <gradient type="linear">
05
        <key color="LightColor(DeepSkyBlue)" position="0.1" opacity="0.01" />
06
        <key color="White" position="0.9" />
07
      </gradient>
08
    </fill>
09
    <inside_margin all="2" />
10
    <border enabled="true" thickness="1" color="Blue" type="linear" opacity="0.2" />
11
    <corners all="2" type="Cut" left_top="1" />
12
  </background>
13
</labels>
Sample with labels with tuned background:

Live Sample:  Radar chart Y-axis Labels Background Sample

to top

Formatting settings

In Y axes labels you can use only %Value token, which can be formatted as described at Axis Labels Formatting.

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <labels>
03
    <format><![CDATA[${%Value}{numDecimals:1}]]></format>
04
  </labels>
05
</y_axis>
Sample with formatted labels:

Live Sample:  Radar chart Y-axis Labels Formatting Sample

to top

Hide first and last labels

You can hide first and/or last labels using show_first_label and show_last_label attributes:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <labels show_first_label="false" />
03
</y_axis>
Sample chart with first label hidden:

Live Sample:  Radar chart Y-axis Hide last|first Labels Sample

to top

Working with data labels and tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in <label> and <tooltip> sub-nodes of <radar> node. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear to the top of the data points, also, we will format labels so they show only the value corresponding to the point and tooltip will show detailed description.

When formatting data labels text and tooltip we will use formatting keywords:
{%Name} - to show month name,
{%YValue} - to show sales for this month,
{%SeriesName} - to show period (Year),
{%YPercentOfSeries} - to show every month percentage to total sales per year.

Live Sample:  Radar chart - Working with data labels and tooltips

to top

Supported series types

Radar chart supports: Line, Area and Marker series types. You can learn how to change and configure styles of these types at: Area styles, Line styles and Marker styles.

Live Sample:  Radar series types

to top

Missing points

Radar chart supports missing control: missing and non-numeric y are ignored:

Live Sample:  Radar plot missing points sample

to top

Current Page Online URL: Radar Chart