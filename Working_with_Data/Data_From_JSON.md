{:index 7}
# Getting Data from JSON

## Overview

AnyChart js charting library supports several ways of setting data. This article quickly demonstrates main aspects of using JSON format in AnyChart component. Last sample of this article demonstrates cartesian chart with advanced settings. For the information on other ways of setting data see [Using Data Sets](Using_Data_Sets) and [Supported Data Formats](Supported_Data_Formats) articles.

You can also load JSON settings from files using [Data Adapter](./Data_Adapter/Overview) as described in [Data Adapter](./Data_Adapter/Loading_JSON_File).
  
JSON or JavaScript Object Notation, is an open standard format that uses human-readable text to transmit data objects consisting of attribute-value pairs. It is used primarily to transmit data between a server and web application, as an alternative to XML. For more information visit [https://en.wikipedia.org/wiki/JSON](https://en.wikipedia.org/wiki/JSON)

## Schema

JSON Schema specifies a JSON-based format to define the structure of JSON data (visit [https://en.wikipedia.org/wiki/JSON#Schema\_and\_Metadata](https://en.wikipedia.org/wiki/JSON#Schema\_and\_Metadata) for more information). All objects of this schema correspond to JavaScript methods and parameters of a chart. AnyChart JSON schema varies from version to version. For example, JSON Schema for AnyChart version {{branch-name}} is located at [https://cdn.anychart.com/schemas/{{branch-name}}/json-schema.json](https://cdn.anychart.com/schemas/{{branch-name}}/json-schema.json). Whenever you use AnyChart JSON schema - make sure its corresponds to the version of AnyChart. 

## JSON vs JavaScript

To load chart configuration in JSON format you should use {api:anychart#fromJson}fromJson(){api} method. Setting data using JSON format is very similar to the way of setting data in JavaScript. The name of every object in JSON configuration corresponds to the name of a method or parameter in JavaScript. Snippet below demonstrates configuration of the simple chart.

```
// JSON data
var json = {
  // chart settings
  "chart": {
    // chart type
    "type": "pie",
    // chart data
    "data": [
      {"x": "Apples", "value": "128.14", fill: "green"},
      {"x": "Oranges", "value": "128.14", fill: "orange"},
    ],
    // chart container
    "container": "container"
  }
};
  
var chart = anychart.fromJson(json);
  
// draw chart
chart.draw();
```

This configuration creates chart like the one below

{sample}WD\_Data\_from\_JSON\_01{sample}

**Note:** Pie chart can have only one data series, thus JSON configuration for pie chart requires no **"series"** object.

JSON configuration can contain string, object, array, number, boolean and null. The variety of acceptable data formats makes the AnyChart JSON structure very similar to JavaScript configuration. To find out any required method or parameter use {api:anychart}AnyChart API{api}. API describes how every method and parameter are used. The structure is pretty much the same for JSON configuration. For example, you can find {api:anychart#column}column(){api} method in API to create column chart. 

```
var chart = anychart.column([128.14, 112.61, 163.21, 229.98]);
chart.container('container');
chart.draw();
```

The same chart can be created using JSON

```
var chart = anychart.fromJson({
  "chart": {
    "type": "column",
    "series":[{
      "data": [128.14, 112.61, 163.21, 229.98],
    }],
    "container": "container"
  }
});

chart.draw();
```

As you can see, JSON format isn't limited only to setting chart type and its data, but can set container for the chart as well.
  
  
Another example: Y-Scale is configured using {api:anychart.charts.Cartesian#yScale}yScale(){api} method and in JavaScript you use code like this:

```
// set chart type
var chart = anychart.column();

chart.yScale()    // adjust y scale
  .minimum(100)   // set minimum value
  .maximum(350);  // set maximum value
```

and in JSON format this looks like

```
"chart": {          // create chart
  "type": "column", // set column type
  "yScale": {       // invoke y scale
    "minimum": 100, // set minimum value
    "maximum": 350  // set maximum value
  }
}
```

{sample}WD\_Data\_from\_JSON\_02{sample}

## Serialization

Predefined settings from JavaScript format can be serialized into JSON format. Method {api:anychart.core.Chart#toJson}toJson(){api} transfers current chart settings into JSON object. This method creates an object that contains all chart settings and it can be used to store chart data and configuration, but note, that when label or tooltip text formatting function is redefined in JavaScript code - it can't be serialized.

{sample}WD\_Data\_from\_JSON\_03{sample}

## Multiple Series

JSON data set can contain one or several series - almost the same way you can do this in JavaScript. Sample below demonstrates chart with several series from JSON.

```
// series settings
"series": [{
  // first series data
  "data": [
    {"x": "P1", "value": "128.14"},
    {"x": "P2", "value": "112.61"},
    {"x": "P3", "value": "163.21"},
    {"x": "P4", "value": "229.98"},
    {"x": "P5", "value": "90.54"}
  ]
},{
  // second series data
  "data": [
    {"x": "P1", "value": "90.54"},
    {"x": "P2", "value": "104.19"},
    {"x": "P3", "value": "150.67"},
    {"x": "P4", "value": "120.43"},
    {"x": "P5", "value": "200.34"}
  ]
}]
```

Here is a sample with multiple series:

{sample}WD\_Data\_from\_JSON\_04{sample}

## Settings

### Axes

Data from JSON can contain all possible settings for controlling chart grid, axis line along with tick marks and labels, axis scale and other visual appearance settings. Sample below demonstrates setting axes names and adjusting scales orientation.

```
// x axes settings
"xAxes": [{               // settings for default x axis
  "orientation": "top",   // set axis position
  "title":{               // settings for axis title
    "enabled": false      // disable title
  }
}],

// y axes settings
"yAxes": [{               // settings for default y axis
  "orientation": "right", // set axis position
  "title":{               // settings for axis title
    "enabled": false      // disable title
  }
}],

// y scale settings
"yScale": {
  "inverted": true        // enable y scale inversion
}
```

Here is a sample with adjusted axes:

{sample}WD\_Data\_from\_JSON\_05{sample}

### Visualization

Visual settings are vital for a chart. JSON can control any method and parameter of a chart to configure desirable chart appearance. Here is configuration for column chart of golden color with brick hatch.

```
"fill":"gold",
"stroke": "gray",
"hoverStroke": "darkred",
"hatchFill": {
  "type": "diagonal-brick",
  "color": "gray"
},
"hoverHatchFill":{
  "type:": "diagonal-brick",
  "color": "darkred"
}
```

Sample with this configuration is below

{sample}WD\_Data\_from\_JSON\_06{sample}

## Samples

As addition to the presented material, here is a table of main methods and parameters of JavaScript data set comparing with JSON data set (full list of all the methods and parameters can be found in {api:anychart}API{api}).

<table width="700" border="1" class="dtTABLE">
<tbody>
<tr>
<th style="text-align: center;"><b>Chart Type</b></th>
</tr>
<tr><td style="padding: 0;">
<table class="dtTABLE" style="border: 0;">
<tbody>
<tr>
<th width="200" style="border-top: 0; border-left: 0;"><b>JavaScript Configuration</b></th>
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0;">
```
// set chart type
var chart = anychart.line();

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
  
  // set chart container
  chart.container('container');
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
// set chart type
{chart: {type: "line",
  
  // set series type
  series:[{seriesType: "spline",
    // set series data
    data: [
      {x: "January", value: 10000},
      {x: "February", value: 12000},
      {x: "March", value: 18000},
      {x: "April", value: 11000},
      {x: "May", value: 9000}
    ]}],
  
  // set chart container
  container: "container"}}
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample}WD\_Data\_from\_JSON\_07{sample}
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
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0;">
```
// title settings
chart.title()
  // set title text
  .text('Sales Performance')
  // title background settings
  .background()
    // enable background
    .enabled(true)
    // background inner color
    .fill('#FFD700')
    // set background border
    .stroke('#D8D8D8')
    // set background corners
    .cornerType('round')
    // set corners size
    .corners(10);
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
  // title settings
  title: {
    // set title text
    text: "Sales Performance",
    // title background settings
    background: {
      // enable background
      enabled: "true",
      // background inner color
      fill: "#FFD700",
      // set background border
      stroke: "#D8D8D8",
      // set background corners
      cornerType: "round",
      // set corners size
      corners: 10}},
```
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample}WD\_Data\_from\_JSON\_08{sample}
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
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0;">
```
// set chart type
var chart = anychart.area();

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

chart.container('container');
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
// set chart type
{chart:{type: "area",
  
  // type of the first series
  series:[{ seriesType: "area",
    //data for first series
    data:[{x:"January", value: 12000},
      {x: "February", value: 15000},
      {x: "March", value: 16000},
      {x: "April", value: 15000},
      {x: "May", value: 14000}
    ]},

  // type of the second series
  {seriesType: "splineArea",
    // data for the second series
    data:[{x: "January", value: 10000},
      {x: "February", value: 12000},
      {x: "March", value: 18000},
      {x: "April", value: 11000},
      {x: "May", value: 9000}]
  }],
  
  container: "container"}}
```
</td>	
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample}WD\_Data\_from\_JSON\_09{sample}
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
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0;">
```
// set intervals
chart.yScale().ticks()
  .interval(100000);

// custom y scale
var newScale = anychart.scales.linear();
newScale
  .minimum(0)
  .maximum(100)
  .ticks()
    .interval(10);
extraYScale.minorTicks()
  .interval(2);

// y axes settings
chart.yAxis().title()
  .text('Basic Y Axis');
chart.yAxis(1)
  .orientation('right')
  .scale(newScale)
  .title()
    .text('Extra Y Axis');
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
  // set intervals
  yScale: {ticks: 
    {interval: 100000}},
  
  // custom y scale
  scales: {"newScale": { 
    type: "linear",
    minimum: 0,
    maximum: 100,
    ticks: {
      interval: 10},
    minorTicks: {
      interval: 2} }},
  
  // y axes settings
  yAxes: [{
    title: "Basic Y Axis"
  },{
    orientation: "right",
    scale: "newScale",
    title:{
      text: "Extra Y Axis"}}],
```
</td>	
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample}WD\_Data\_from\_JSON\_10{sample}
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
<th width="200" style="border-top: 0; border-right: 0;"><b>JSON Configuration</b></th>	
</tr>
<tr>
<td style="border-bottom: 0; border-left: 0;">
```
// range marker
chart.rangeMarker()
  .scale(chart.yScale())
  .from(0)
  .to(30000)
  .fill({
    keys: [
      '.1 green', 
      '.5 yellow', 
      '.9 red'
    ],
    angle: -90,
    opacity: 0.5
  });

// text marker at the top
chart.textMarker()
  .scale(chart.yScale())
  .offsetX(10)
  .value(25000)
  .text('Good')
  .fontSize(15)
  .fontWeight(600);

// text marker at the center
chart.textMarker(1)
  .scale(chart.yScale())
  .offsetX(10)
  .value(15000)
  .text('Average')
  .fontSize(15)
  .fontWeight(600);

// text marker at the bottom
chart.textMarker(2)
  .scale(chart.yScale())
  .offsetX(10)
  .value(5000)
  .text('Severe')
  .fontSize(12)
  .fontWeight(600);
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
  // set range marker
  rangeAxesMarkers: [{
    scale: 1,
    from: 0,
    to: 30000,
    fill: {
      keys: [ 
        ".1 green", 
        ".5 yellow", 
        ".9 red"
      ],
      angle: -90,
      opacity: 0.5
    }}],
  
  // set text marker at the top
  "textAxesMarkers": [{
      "scale": 1,
      "offsetX": 10,
      "value": 25000,
      "fontSize": 15,
      "text": "Good",
      "fontWeight": 600},
      
    // set text marker at the center
    {
      "scale": 1,
      "offsetX": 10,
      "value": 15000,
      "text": "Average",
      "fontSize": 15,
      "fontWeight": 600},
      
    // set text marker at the bottom
    {
      "scale": 1,
      "offsetX": 10,
      "value": 5000,
      "text": "Severe",
      "fontSize": 12,
      "fontWeight": 600}],
```
</td>	
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
{sample}WD\_Data\_from\_JSON\_11{sample}
</td>
</tr>
</tbody></table>

## Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates html5 cartesian chart with several line series, customized axes, scales, grids and titles.

{sample}WD\_Data\_from\_JSON\_12{sample}
