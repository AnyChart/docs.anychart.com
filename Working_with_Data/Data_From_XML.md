{:index 8}
# Getting Data from XML

## Overview

AnyChart JavaScript charting framework supports several ways of setting data. This article quickly demonstrates main aspects of using XML format in AnyChart component. Last sample of this article demonstrates cartesian chart with advanced settings. For the information on other ways of setting data see [Data Sets](Data_Sets) and [Supported Data Formats](Supported_Data_Formats) articles.
  
You can also load XML settings from files using [Data Adapter](./Data_Adapter/Overview) as described in [Data Adapter](./Data_Adapter/Loading_XML_File).
  
XML or Extensible Markup Language, is a markup language that defines a set of rules for encoding documents in a format which is both human-readable and machine-readable. Originally designed to meet the challenges of large-scale electronic publishing, XML is also playing an increasingly important role in the exchange of a wide variety of data on the Web and elsewhere. More information on XML can be found on [https://en.wikipedia.org/wiki/XML](https://en.wikipedia.org/wiki/XML)

## Schema

XML Schema specifies a XML-based format to define the structure of XML data (visit [https://en.wikipedia.org/wiki/XML_schema](https://en.wikipedia.org/wiki/XML_schema) for more information). All objects of this schema correspond to JavaScript methods and parameters of a chart. XML schema for AnyChart version {{branch-name}} is located at [https://cdn.anychart.com/schemas/{{branch-name}}/xml-schema.xsd](https://cdn.anychart.com/schemas/{{branch-name}}/xml-schema.xsd)). This file can be used to validate your own XML structure.

## XML vs JavaScript

To load chart configuration in XML format you should use {api:anychart#fromXml}fromXML(){api} method. Setting data using XML format is very similar to the way of setting data in JavaScript. The name of each tag in XML configuration corresponds to the name of a method and names of parameters for tags correspond to parameter in JavaScript. Snippet below shows a sample of setting data in XML format for the simple chart.

```
// xml data
var xml = '<?xml version="1.0" encoding="utf-8"?>' +
  '<anychart xmlns="https://cdn.anychart.com/schemas/{{branch-name}}/xml-schema.xsd">' +
    '<chart type="pie" container="container" title="XML Sample Pie">' +
       '<data>' +
            '<point name="Apples" value="128.14" fill="Green"/>'+
            '<point name="Oranges" value="128.14" fill="Orange"/>'+
      '</data>'+
    '</chart>'+
  '</anychart>';

// set XML data to the chart
var chart = anychart.fromXml(xml);

// draw chart
chart.draw();
```

This configuration creates chart like the one below

{sample}WD\_Data\_from\_XML\_01{sample}

**Note:** Pie chart can have only one series of data and requires no `<series></series>` tag. 

Use {api:anychart}AnyChart API{api} to adjust any parameter of a chart. XML configuration uses the same names as methods and parameters do and it is quite easy to set any required parameter with XML data set. Also, XML uses [snakeCase](https://en.wikipedia.org/wiki/Snake_case) for names of tags and parameters and names of methods and parameters have to be transformed from [camelCase](https://en.wikipedia.org/wiki/CamelCase) to [snakeCase](https://en.wikipedia.org/wiki/Snake_case). It requires to replace every capital letter with small letter and set underscore before this letter (e.g., hatch fill can be set with JavaScript using "hatchFill" parameter and with XML using "hatch_fill" parameter). {api:anychart}AnyChart API{api} describes how every method and parameter are used. The structure is pretty much the same for  XML configuration. For instance, you can find {api:anychart#column}column(){api} method in API to create column chart.

```
anychart.column([128.14, 112.61, 163.21, 229.98]).container('container').draw();
```

The same chart can be created using XML

```
anychart.fromXml(
'<?xml version="1.0" encoding="utf-8"?>' +
  '<anychart xmlns="https://cdn.anychart.com/schemas/{{branch-name}}/xml-schema.xsd">' +
    '<chart type="column" container="container">' +
      '<series_list>'+
        '<series type="column">'+
          '<data>'+
            '<point value="128.14"/>'+ 
            '<point value="112.61"/>'+ 
            '<point value="163.21"/>'+ 
            '<point value="229.98"/>'+
          '</data>'+
      '</series_list>'+
    '</chart>'+
  '</anychart>'
).draw();
```

As you can see, XML format isn't limited only to setting chart type and its data, but can set container for the chart as well.

Another example: Y-Scale is configured using {api:anychart.charts.Cartesian#yScale}yScale(){api} method and in JavaScript you use code like this:

```
// set chart type
var chart = anychart.column();

chart.yScale()    // adjust y scale
  .minimum(100)   // set minimum value
  .maximum(350);  // set maximum value
```

and in XML format this looks like

```xml
<!-- set chart type and chart container -->
<chart type="column" container="container">
<!-- set scale type and anjust minimum & maximum values -->
<y_scale type="line" minimum="100" maximum="350"/>
</chart>
```

{sample}WD\_Data\_from\_XML\_02{sample}

## Serialization

Predefined settings from JavaScript format can be serialized into XML format. Method {api:anychart.core.Chart#toXml}toXml(){api} transfers current chart settings into XML string. This string contains chart settings in XML format and can be used to store chart data and configuration but note, that when label or tooltip text formatting function is redefined in JavaScript code - it can't be serialized..

{sample}WD\_Data\_from\_XML\_03{sample}

## Multiple Series

XML data set can contain one or several series - almost the same way you can do it in JavaScript. Sample below demonstrates chart with several series from XML.

```xml
<!-- series for this chart -->
<series_list>
  <!-- series settings -->
  <series series_type="line">
    <!-- data set -->
    <data>
      <point x="0" value="0"/>
      <point x="50" value="100"/>
      <point x="100" value="0"/>
    </data>
  </series>
<!-- second series set -->
  <series series_type="line" stroke="red">
    <!-- data set -->
    <data>
      <point x="50" value="0"/>
      <point x="100" value="100"/>
      <point x="50" value="0"/>
    </data>
  </series>
</series_list>
```

Here is a sample setting two series using XML format.

{sample}WD\_Data\_from\_XML\_04{sample}

## Settings

### Axes

Data from XML can contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. Sample below demonstrates setting axes names and adjusting scales orientation.

```xml
<!-- x axes setting -->
<x_axes>
  <!-- adjust default x axis -->
  <axis orientation="top" title="false"/>
</x_axes>
<!-- y axes settings -->
<y_axes>
  <!-- adjust default y axis -->
  <axis orientation="right" title="false"/>
</y_axes>
<!-- y scale setting -->
<y_scale inverted="true"/>
```

Here is a sample of adjusted axes 

{sample}WD\_Data\_from\_XML\_05{sample}

### Visualisation

Visual settings can be vital for a chart. XML can contain any method and parameter for adjusting visual settings. Here is configuration for column chart of golden color with brick hatch.

```xml
<!-- series settings -->
<series fill="gold" stroke="gray" hover_stroke="darkred" hatch_fill="diagonal-brick">

  <!-- customize hover hatch fill -->
  <hover_hatch_fill type="diagonal-brick" color="darkred"/>

</series>
```

{sample}WD\_Data\_from\_XML\_06{sample}

## Samples

As addition to the presented material, here is a table of main methods and parameters of JavaScript data set comparing with XML data set (the full list of all the methods and parameters can be found in {api:anychart}API{api}).

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<th style="text-align: center;">Chart Type</th>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JavaScript Configuration</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>XML Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; width: 50%;">
```
// set chart type
var chart = anychart.line();
// set chart container
chart.container('container');

// set series type

chart.spline(
  // set series data
  [
    ['January', 10000],
    ['February', 12000],
    ['March', 18000],
    ['April', 11000],
    ['May', 9000]
  ]
);


```
</td>
<td style="border-bottom: 0; border-right: 0;">
```xml
<!-- set chart type -->
<chart type="line" 
<!-- set chart container -->
container="container">

  <!-- set series type -->
  <series_list>
    <series series_type="spline">
      <!-- set series data -->
      <data>
        <point x="January" value="10000"/>
        <point x="February" value="12000"/>
        <point x="March" value="18000"/>
        <point x="April" value="11000"/>
        <point x="May" value="9000"/>
      </data>
    </series>
  </series_list>
</chart>
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_07{sample}
</td>
</tr>
</tbody></table>

<table width="600" border="1" class="dtTABLE">
<tbody>
<tr>
<th style="text-align: center;"><b>Chart Title</b></th>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JavaScript Configuration</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>XML Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; padding: 2px; width: 50%;">
```
// title settings
chart.title()
  // set title text
  .text('Sales Performance')
  // settings for title background
  .background()
    // enable background
    .enabled(true)
    // set background inner color
    .fill('#FFD700')
    // set background border
    .stroke('#D8D8D8')
    // set type of background corners
    .cornerType('round')
    // set corners size
    .corners(10);
    
```
</td>
<td style="border-bottom: 0; border-right: 0; padding: 2px;">
```xml
<!-- title settings -->
<title 
  <!-- set title text -->
  text="Sales Performance">
  <!-- title background -->
  <background 
    <!-- enable background -->
    enabled="true" 
    <!-- background inner color -->
    fill="#FFD700" 
    <!-- background border -->
    stroke="#D8D8D8" 
    <!--background corners -->
    cornerType="round" 
    <!-- corners size -->
    corners="10"/>
</title>
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_08{sample}
</td>
</tr>
</tbody></table>

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<th style="text-align: center;"><b>Multiple Series</b></th>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JavaScript Configuration</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>XML Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; padding: 2px; width: 50%;">
```
// set chart type
var chart = anychart.area();
chart.container('container');

// type of first series 
chart.area(
  
  // data for first series
  [
    ['January', '12000'],
    ['February', '15000'],
    ['March', '16000'],
    ['April', '15000'],
    ['May', '14000']
  ]
);

// type of second series
chart.splineArea(
  // data for second series
  [
    ['January', '10000'],
    ['February', '12000'],
    ['March', '18000'],
    ['April', '11000'],
    ['May', '9000']
  ]
);


```
</td>
<td style="border-bottom: 0; border-right: 0; padding: 2px;">
```xml
<!-- set chart type -->
<chart type="area" 
container="container">

  <!-- type of the first series -->
  <series_list>
    <series series_type="area">
      <!-- data for first series -->
      <data>
        <point x="January" value="12000"/>
        <point x="February" value="15000"/>
        <point x="March" value="16000"/>
        <point x="April" value="15000"/>
        <point x="May" value="14000"/>
      </data>
    </series>
  
    <!-- type of the second series -->
    <series series_type="splineArea">
      <!-- data for the second series -->
      <data>
        <point x="January" value="10000"/>
        <point x="February" value="12000"/>
        <point x="March" value="18000"/>
        <point x="April" value="11000"/>
        <point x="May" value="9000"/>
      </data>
    </series>
  </series_list>
</chart>
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_09{sample}
</td>
</tr>
</tbody></table>

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<th style="text-align: center;"><b>Axes Settings</b></th>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JavaScript Configuration</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>XML Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; padding: 2px; width: 50%;">
```
// set intervals
chart.yScale()
  .ticks().interval(100000);


// custom y scale

var newScale = anychart.scales.linear();
newScale.minimum(0)
    .maximum(100)
    .ticks().interval(10);
extraYScale.minorTicks().interval(2);



// y axes settings

chart.yAxis().title().text('Basic Y Axis');

chart.yAxis(1).orientation('right')
  .scale(newScale)
  .title().text('Extra Y Axis');


```
</td>
<td style="border-bottom: 0; border-right: 0; padding: 2px;">
```xml
<!-- set intervals -->
<y_scale>
  <ticks interval="100000"/>
</y_scale>

<!-- custom y scale -->
<scales>
  <scale type="linear" 
    minimum="0" 
    maximum="100">
    <ticks interval="10"/>
    <minorTicks interval="2"/>
  </scale>
</scales>

<!-- y axes settings -->
<y_axes>
  <axis title="Basic Y Axis"/>
  
  <axis orientation="right" 
  scale="0">
    <title text="Extra Y Axis"/>
  </axis>
</y_axes>
```
</td>	
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_10{sample}
</td>
</tr>
</tbody></table>

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<th style="text-align: center;"><b>Labels Settings</b></th>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JavaScript Configuration</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>XML Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; padding: 2px; width: 50%;">
```
// set range marker

chart.rangeMarker()
  .scale(chart.yScale())
  .from(0)
  .to(30000)
  .fill({
    angle: -90,
    opacity: 0.5,
    keys: [
      '.1 green', 
      '.5 yellow', 
      '.9 red'
    ]}
  );



// set text marker at the top
chart.textMarker()
  .scale(chart.yScale())
  .offsetX(10)
  .value(25000)
  .text('Good')
  .fontSize(15)
  .fontWeight(600);

// set text marker at the center
chart.textMarker(1)
  .scale(chart.yScale())
  .offsetX(10)
  .value(15000)
  .text('Average')
  .fontSize(15)
  .fontWeight(600);

// set text marker at the bottom
chart.textMarker(2)
  .scale(chart.yScale())
  .offsetX(10)
  .value(5000)
  .text('Severe')
  .fontSize(12)
  .fontWeight(600);

```
</td>
<td style="border-bottom: 0; border-right: 0; padding: 2px;">
```xml
  <!-- set range marker -->
  <range_axes_markers>
    <range_axes_marker 
      scale="1" 
      from="0" 
      to="30000">
      <fill 
        angle="-90" 
        opacity="0.5">
          <keys>
            <key><![CDATA[.1 green]]></key>
            <key><![CDATA[.5 yellow]]></key>
            <key><![CDATA[.9 red]]></key>
          </keys>
      </fill>
    </range_axes_marker>
  </range_axes_markers>
  
  <!-- set text marker at the top -->
  <text_axes_markers>
    <text_axes_marker scale="1" 
      offset_x="10" 
      value="25000" 
      font_size="15" 
      text="Good" 
      font_weight="600"/>
  
    <!-- set text marker at the center -->
    <text_axes_marker 
      scale="1" 
      offset_x="10" 
      value="15000" 
      text="Average" 
      font_size="15" 
      font_weight="600"/>
    
    <!-- set text marker at the bottom -->
    <text_axes_marker 
      scale="1" 
      offset_x="10" 
      value="5000" 
      text="Severe" 
      font_size="12" 
      font_weight="600"/>
  </text_axes_markers>
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_11{sample}
</td>
</tr>
</tbody></table>

## Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates JavaScript cartesian chart with several different series and customized chart elements.

{sample}WD\_Data\_from\_XML\_12{sample}
