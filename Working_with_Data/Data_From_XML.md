{:index 8}
# Getting Data from XML

* [Overview](#overview)
* [JSON vs JavaScript](#json_vs_javascript)
* [Data Serialization](#data_serialization)
* [Multiple Series](#multiple_series)
* [Settings](#settings)
 * [Axes](#axes)
 * [Visualization](#visualization)
* [Complex](#complex)
* [Schema](#schema)

## Overview

AnyChart supports several ways of setting data. This article quickly demonstrates main aspects of using XML format in AnyChart component. Last sample of this article demonstrates cartesian chart with advanced settings. For the information on other ways of setting data see [Using Data Sets](Using_Data_Sets) and [Data From JSON](Data_From_JSON) articles.

## XML vs JavaScript

AnyChart provides {api:anychart#fromXml}**.fromXML()**{api} parameter for using data in XML format. 

```
  var chart = anychart.fromXml(/*place your XML data in here */);
  
  // draw chart 
  chart.draw();
```

Setting data using XML format is very similar to the way of setting data in JavaScript. The name of each tag in XML config corresponds to the name of a method and names of parameters for tags correspond to parameter in JS. Snippet below shows a sample of setting data in XML format

```
  // xml data
  var xml = '<?xml version="1.0" encoding="utf-8"?>' +
    '<anychart xmlns="http://anychart.com/products/anychart7/schemas/7.3.0/schema.xsd">' +
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

{sample}WD\_Data\_from\_XML\_01{sample}

**Note:** Use {api:anychart}AnyChart API{api} to adjust any parameter of a chart. XML config uses the same names as methods and parameters do and it is quite easy to set any required parameter with XML data set. Also, XML uses [snakeCase](http://en.wikipedia.org/wiki/Snake_case) for names of tags and parameters and names of methods and parameters have to be transformed from [camelCase](http://en.wikipedia.org/wiki/CamelCase) to [snakeCase](http://en.wikipedia.org/wiki/Snake_case). It requires to replace every capital letter with small letter and set underscore before this letter (e.g. hatch fill can be set with JS using "hatchFill" parameter and with XML using "hatch_fill" parameter). {api:anychart}AnyChart API{api} supplies every parameter with a structure to invoke it. This structure is the same for XML data set. For instance, API provides {api:anychart#column}**column()**{api} method to create column chart.

```
  anychart.column([128.14, 112.61, 163.21, 229.98]).container('container').draw();
```

The same chart can be created using XML

```
  anychart.fromXml(
    '<?xml version="1.0" encoding="utf-8"?>' +
      '<anychart xmlns="http://anychart.com/products/anychart7/schemas/7.3.0/schema.xsd">' +
      
        '<chart type="column" container="container">' +
          '<series_list>'+
            '<series type="column">'+
              '<data>128.14, 112.61, 163.21, 229.98"/>'+
          '</series_list>'+
        '</chart>'+
      '</anychart>'
    ).draw();
```

Data set for pie chart

Pie chart can have only one series of data and requires no **<series></series>** tag. 
  
  
Parameters of Y-Scale should be applied using {api:anychart.charts.Cartesian#yScale}yScale(){api} method and should be invoked using code, similar to the snippet below

```
  // create chart and set it line type
  var chart = anychart.line();
  
  chart.yScale()    // invoke y scale
    .minimum(60)    // set minimum value 
    .maximum(120);  // set maximum value
```

The snippet below shows setting the same parameters using XML

```
  <chart type="column" container="container">
    <y_scale type="line" minimum="60" maximum="120"/>
```

As addition to the presented material, here is a table of main methods and parameters of JS data set comparing with JSON data set (full list of all the methods and parameters can be found in api).

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<td>Chart Type</td>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JS Config</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Config</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0;">
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
  ]);
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
// set chart type
'<chart type="line" '+
// set chart container
'container="container">'+

// set series type
'<series_list><series series_type="spline">'+
  // set series data
  '<data>'+
    '<point x="January" value="10000"/>'+
    '<point x="February" value="12000"/>'+
    '<point x="March" value="18000"/>'+
    '<point x="April" value="11000"/>'+
    '<point x="May" value="9000"/>'+
  '</data></series></series_list></chart>'
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_14{sample}
</td>
</tr>
</tbody></table>

<table width="600" border="1" class="dtTABLE">
<tbody>
<tr>
<td>Chart Title</td>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JS Config</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Config</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; padding: 2px;">
```
// set chart type
var chart = anychart.column();
// set chart container
chart.container('container');

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

// set series type
chart.column([
  ['John', 10000],
  ['Jake', 12000],
  ['Peter', 18000],
  ['James', 11000],
  ['Mary', 9000]
])
```
</td>
<td style="border-bottom: 0; border-right: 0; padding: 2px;">
```xml
// set chart type
<chart type="column" 
// set chart container
container="container">

// title settings
<title 
  // set title text
  text="Sales Performance">
  // settings for title background
  <background 
    // enable background
    enabled="true" 
    // set background inner color
    fill="#FFD700" 
    // set background border
    stroke="#D8D8D8" 
    // set type of background corners
    cornerType="round" 
    // set corners size
    corners="10"/></title>
  
  // set series type
  <series_list><series series_type="column">
    <data><point x="January" value="10000"/>
      <point x="February" value="12000"/>
      <point x="March" value="18000"/>
      <point x="April" value="11000"/>
      <point x="May" value="9000"/></data>
  </series></series_list></chart>
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_15{sample}
</td>
</tr>
</tbody></table>

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<td>Chart Title</td>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JS Config</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Config</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; padding: 2px;">
```
// set chart type
var chart = anychart.area();
chart.container('container');

// type of first series 
chart.area([
  // data for first series
  ['January', '12000'],
  ['February', '15000'],
  ['March', '16000'],
  ['April', '15000'],
  ['May', '14000']
]);

// type of second series
chart.splineArea([
  // data for second series
  ['January', '10000'],
  ['February', '12000'],
  ['March', '18000'],
  ['April', '11000'],
  ['May', '9000']
]);
```
</td>
<td style="border-bottom: 0; border-right: 0; padding: 2px;">
```
// set chart type
'<chart type="area" '+
'container="container">'+

// type of the first series
'<series_list><series series_type="area">'+
  //data for first series
  '<data><point x="January" value="12000"/>''+
    '<point x="February" value="15000"/>'+
    '<point x="March" value="16000"/>'+
    '<point x="April" value="15000"/>'+
    '<point x="May" value="14000"/>'+
  '</data></series>'+

// type of the second series
'<series series_type="splineArea">'+
  // data for the second series
  '<data><point x="January" value="10000"/>'+
    '<point x="February" value="12000"/>'+
    '<point x="March" value="18000"/>'+
    '<point x="April" value="11000"/>'+
    '<point x="May" value="9000"/></data>'+
'</series></series_list></chart>';
```
</td>	
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_16{sample}
</td>
</tr>
</tbody></table>

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<td>Chart Title</td>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JS Config</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Config</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; padding: 2px;">
```
// set chart type
var chart = anychart.line();
chart.container('container')

// set intervals
chart.yScale().ticks()
  .interval(100000);

// custom y scale
var newScale = anychart.scales.linear();
newScale.minimum(0)
    .maximum(100)
    .ticks()
        .interval(10);
extraYScale.minorTicks().interval(2);

// y axes settings
chart.yAxis().title()
  .text('Basic Y Axis');
chart.yAxis(1)
  .orientation('right')
  .scale(newScale)
  .title()
    .text('Extra Y Axis');

chart.column([
    ["A", 637166],
    ["B", 721630],
    ["C", 148662],
    ["D", 78662],
    ["E", 90000]
]);
var line = chart.line();
line.yScale(newScale);
line.data([
    ["A", 95],
    ["B", 97],
    ["C", 96],
    ["D", 70],
    ["E", 35]
]);
```
</td>
<td style="border-bottom: 0; border-right: 0; padding: 2px;">
```
// set chart type
'<chart type="line" '+
'container="container">'+
  
  // set intervals
  '<y_scale><ticks '+ 
  'interval="100000"/></y_scale>'+
  
  // custom y scale
  '<scales><scale type="linear" '+
    'minimum="0" '+
    'maximum="100">'+
    '<ticks '+
      'interval="10"/>'+
    '<minorTicks interval="2"/></scale></scales>'+
  
  // y axes settings
  '<y_axes>'+
    '<axis title="Basic Y Axis"/>'+
    '<axis '+
    'orientation="right" '+
    'scale="newScale">'+
    '<title '+
      'text="Extra Y Axis"/></axis></y_axes>'+
  
  '<series_list><series series_type="column">'+
    '<data><point x="A" value="637166"/>'+
      '<point x="B" value="721630"/>'+
      '<point x="C" value="148662"/>'+
      '<point x="D" value="78662"/>'+
      '<point x="E" value="90000"/>'+
    '</data></series>'+
      '<series series_type="line" '+
      'y_scale="0">'+
        '<data>'+
        '<point x="A" value="95"/>'+
        '<point x="B" value="97"/>'+
        '<point x="C" value="96"/>'+
        '<point x="D" value="70"/>'+
        '<point x="E" value="35"/>'+
      '</data></series></series_list></chart>';
```
</td>	
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_17{sample}
</td>
</tr>
</tbody></table>

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<td>Chart Title</td>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JS Config</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Config</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0; padding: 2px;">
```
// chart type
var chart = anychart.lineChart();
chart.container('container')

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
    ]});

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

// set data
chart.line([
  [2005, 10000],
  [2006, 12000],
  [2007, 18000],
  [2008, 19000],
  [2009, 29000]
]);
chart.title().enabled(false);
chart.yScale()
  .minimum(0)
  .maximum(30000);
chart.xAxis()
  .title()
    .enabled(false);
chart.yAxis().title().text('Sales');
```
</td>
<td style="border-bottom: 0; border-right: 0; padding: 2px;">
```
// set chart type
'<chart type="line" '+
'container="container">'+
 
 // set range marker
 '<range_axes_markers><range_axes_marker '+
   'scale="1" '+
   'from="0" '+
   'to="30000">'+
   '<fill '+
     'angle="-90" '+
     'opacity="0.5">'+
       '<keys>'+
         '<key><![CDATA[.1 green]]></key>'+
         '<key><![CDATA[.5 yellow]]></key>'+
         '<key><![CDATA[.9 red]]></key></keys>'+
   '</fill></range_axes_marker></range_axes_markers>'+
 
 // set text marker at the top
 '<text_axes_markers>'+
 '<text_axes_marker scale="1" '+
   'offset_x="10" '+
   'value="25000" '+
   'font_size="15" '+
   'text="Good" '+
   'font_weight="600"/>'+
 
 // set text marker at the center
 '<text_axes_marker '+
   'scale="1" '+
   'offset_x="10" '+
   'value="15000" '+
   'text="Average" '+
   'font_size="15" '+
   'font_weight="600"/>'+
 
 // set text marker at the bottom
 '<text_axes_marker '+
 'scale="1" '+
 'offset_x="10" '+
 'value="5000" '+
 'text="Severe" '+
 'font_size="12" '+
 'font_weight="600"/></text_axes_markers>'+
 
 // data set
 '<series_list><series series_type="line">'+
 '<data><point x="2005" value="10000"/>'+
   '<point x="2006" value="12000"/>'+
   '<point x="2007" value="18000"/>'+
   '<point x="2008" value="19000"/>'+
   '<point x="2009" value="29000"/>'+
 '</data></series></series_list>'+
 '<title enabled="false"/>'+
 '<y_scale '+
   'minimum="0" '+ 
   'maximum="30000"/>'+
 '<x_axes><axis>'+
   '<title enabled="false"/>'+
   '</axis><x_axes>'+
 '<y_axes title="Sales"/></chart>';
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample :width 666}WD\_Data\_from\_XML\_18{sample}
</td>
</tr>
</tbody></table>

## Data Sets

XML data set can contain one or several series. Sample below demonstrates chart with several series from XML.

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

{sample}WD\_Data\_from\_XML\_02{sample}

## Data Serialization

Predefined settings from JS format can be serialized into XML format for the sake of convenient in future usage. Method **.toXml()** transfers current chart settings into JSON object. This method creates a string, that contains all possible methods and parameters of the chart in XML format.

{sample}WD\_Data\_from\_XML\_13{sample}

## Settings

### Axes

Data from XML can contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. Sample below demonstrates setting axes names and adjusting scales orientation.

```xml
  // x axes setting
  <x_axes>
    // adjust default x axis
    <axis orientation="top" title="false"/>
  </x_axes>
  // y axes settings
  <y_axes>
    // adjust default y axis
    <axis orientation="right" title="false"/>
  </y_axes>
  // y scale setting
  <y_scale inverted="true"/>
```

{sample}WD\_Data\_from\_XML\_03{sample}

### Visualisation

Visual settings can be vital for a chart. XML can contain almost any method and parameter for adjusting visual settings.

```xml
  // series settings
  <series fill="gold" stroke="gray" hover_stroke="darkred" hatch_fill="diagonalbrick">

    // customize hover hatch fill
    <hover_hatch_fill type="diagonalbrick" color="darkred"/>

  </series>
```

{sample}WD\_Data\_from\_XML\_04{sample}

## Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates cartesian chart with several different series and customized chart elements.

{sample}WD\_Data\_from\_XML\_05{sample}

## Schema

XML Schema specifies a XML-based format to define the structure of XML data(visit [wikipedia.org](http://en.wikipedia.org/wiki/XML_schema) for more information). All objects of this schema correspond to JS methods and parameters of a chart. Main AnyChart XML schema located  [http://anychart.com/products/anychart7/shemas/7.3.1/xml-schema.xsd](http://anychart.com/products/anychart7/shemas/7.3.1/xml-schema.xsd). This file can be used to validate your own XML structure. Version of the XML schema must correspond to the version of anychart JS.
  
  
There quiet a few online XML validators on the Internet (for instance: [www.freeformatter.com/xml-validator-xsd.html](http://www.freeformatter.com/xml-validator-xsd.html)).