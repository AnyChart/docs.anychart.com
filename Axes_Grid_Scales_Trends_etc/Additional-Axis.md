# Additional Axes
              
* [Overview](#overview)                                                                          
* [Definition](#definition)
* [Tuning extra axes](#tuning)
* [Binding data series to additional axis](#binding-series)
* [Multi axes sample for comparing units](#sample-comparing-units)
* [Multi axes sample for showing different data on the same plot](#sample-different-data)
 
<a name="overview"/>
## Overview
   
In AnyChart axes are used to control values or arguments scales, grids, axes labels, lines and tickmarks. You can add multiple X and Y axes to your charts with AnyChart.
<br/><br/>
This note will describe how to use the multi axis feature of AnyChart. With this feature an arbitrary number of axes can be added to the chart. AnyChart itself doesn't impose any restrictions on the number of additional axes but from a practical concern it is most likely very difficult to interpret a chart with more than 2-3 additional axes.
<br/><br/>
Consider using multiple axes when you need:

* Compare data point values in different units, for example: Celsius against Fahrenheit degrees, kilopascal (KPa) or hectopascal (HPa) against millimeters or inches of mercury (mmHg or inHg), different currencies (USD against EUR), etc.

* Show data from the different ranges on the same plot, for example: absolute stock price changes and sales volume (price will be in dollars and volume in millions of dollars)

* Show data measured in different units on the same plot, for example: gross domestic product (GDP) volume and GDP growth rate (GDP will be in billions and rate in percents)

<a name="definition"/>
## Define an additional axis

If you want to define an additional axis all you need to do is to set index to it, and place as many **.yAxis()** or **.xAxis()** methods into it:

```
  chart.yAxis(1).orientation('right').title().text('Axis title');
  chart.yAxis(2).orientation('right').title().text('Axis title');
  chart.yAxis(3).orientation('right').title().text('Axis title');
```

Here is the sample of the chart that will be show when three additional y axes are added and almost no configuration is done, as you can see three additional axes are drawn on the right side of data plot and their maximum and minimum values are calculated automatically (and they are the same as main Y axis have):

{sample}AGST\_Additional\_Axes\_01{sample}

Another example of multiple axes use is multiple Y Axes along with multiple X Axes, which may be very useful in certain areas:

{sample}AGST\_Additional\_Axes\_02{sample}

<a name="tuning"/>
## Tuning additional axes

If you want to change any settings of additional axes you can do that just the same way as basic X and Y axes are configured, see [Axes basics](Axis_Basics) and [Axes Scale](Axis_Scale) for the details:

XML Syntax
XML Code
Plain code
01
<chart_setttings>
02
  <axes>
03
    <x_axis />
04
    <y_axis>
05
      <title>
06
        <text><![CDATA[Basic Y Axis]]></text>
07
      </title>
08
      <scale minimum="0" maximum="800000" />
09
    </y_axis>
10
    <extra>
11
      <y_axis name="y2" enabled="true">
12
        <title>
13
          <text><![CDATA[Extra Y Axis]]></text>
14
        </title>
15
        <scale minimum="800000" maximum="1600000" />
16
      </y_axis>
17
      <x_axis name="x2" enabled="true">
18
        <title>
19
          <text><![CDATA[Extra X Axis]]></text>
20
        </title>
21
        <scale minimum="800" maximum="1600" />
22
      </x_axis>
23
    </extra>
24
  </axes>
25
</chart_setttings>
In the a sample below we will add one additional axis and set value ranges and titles for both basic Y axis and additional Y axis:

Live Sample:  additional Axes Tuning Sample

to top
<a name="binding-series"/>
## Binding data series to additional axis

To bind data series to the certain axis you should specify it in y_axis or x_axis attribute of <series> node, by default all series work with basic <y_axis> or <x_axis>:

XML Syntax
XML Code
Plain code
01
<data>
02
  <series y_axis="y2">
03
    <point name="A" y="1" />
04
    <point name="B" y="2" />
05
    <point name="C" y="3" />
06
  </series>
07
</data>
In the a sample below we will add one additional axis with a range from 0 to 100 and and bind series of "Line" type to it:

Live Sample:  additional Axes Binding Sample

to top
<a name="sample-comparing-units"/>
## Multi axes sample for comparing units

Lets see how additional axes can be used to compare data in different units, for example we measure temperature an want to show Celsius, Fahrenheit and Kelvin scales. To do that we have to create three Y Axes - the basic one will be Celsius degrees, first additional axis - Fahrenheit and second additional axis - Kelvin:

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis>
03
    <title>
04
      <text><![CDATA[Celsius]]></text>
05
    </title>
06
    <scale minimum="273.15" maximum="1668" />
07
  </y_axis>
08
  <extra>
09
    <y_axis name="Fahrenheit" enabled="true">
10
      <title>
11
        <text><![CDATA[Fahrenheit]]></text>
12
      </title>
13
      <scale minimum="459.67" maximum="3034" />
14
    </y_axis>
15
    <y_axis name="Kelvin" enabled="true">
16
      <title>
17
        <text><![CDATA[Kelvin]]></text>
18
      </title>
19
      <scale minimum="0" maximum="1941" />
20
    </y_axis>
21
  </extra>
22
</axes>
We defined three axes and set absolute zero as a minimum value, and Titanium melting temperature as a maximum value. We will create one series of a "Marker" type and bind it to Kelvin scale:

XML Syntax
XML Code
Plain code
01
<data>
02
  <series type="Marker" y_axis="Kelvin">
03
    <point name="Absolute Zero" y="0" />
04
    <point name="Lowest recorded surface temperature on Earth" y="184" />
05
    <point name="Celsius / Fahrenheit's 'cross-over' temperature" y="233.15" />
06
    <point name="Ice melts" y="273.15" />
07
    <point name="Average human body temperature" y="309.95" />
08
    <point name="Highest recorded surface temperature on Earth" y="331" />
09
    <point name="Water boils" y="373.1339" />
10
    <point name="Titanium melts" y="1941" />
11
  </series>
12
</data>
Here it is - a sample that shows different important temperatures:

Live Sample:  additional Axes Units Comparison Sample

to top
<a name="sample-different-data"/>
## Multi axes sample for showing different data on the same plot

Lets see how additional axes can be used to show different data on the same plot: we will plot a US Debt amount in dollars and in percents of GDP. We need to create to axes:

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis>
03
    <title>
04
      <text><![CDATA[Debt]]></text>
05
    </title>
06
    <scale minimum="0" maximum="12000000000000" />
07
  </y_axis>
08
  <extra>
09
    <y_axis name="gdp">
10
      <title>
11
        <text><![CDATA[% GDP]]></text>
12
      </title>
13
      <scale minimum="0" maximum="140" />
14
    </y_axis>
15
  </extra>
16
</axes>
We defined two axes and will create one series of a "Bar" type to show debt and bind it to <y_axis>, one series of a "Line" type to show percentage changes.

Here it is - a sample chart comparing the US debt, in red, to the debts percent of GDP, in blue.

Live Sample:  Extra Axes Different Data Comparison Sample

to top

Current Page Online URL: Extra Axes Tutorial