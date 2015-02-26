{:index 6}
# Getting Data from JSON

* [Overview](#overview)
* [JSON vs JavaScript](#json_vs_javascript)
* [Samples](#samples)
 * [Data Sets](#data_sets)
 * [CSV Data](#csv_data)
* [Settings](#settings)
 * [Axes](#axes)
 * [Visualization](#visualization)
 * [Complex](#complex)

## Overview

AnyChart supports several ways of setting data. This article quickly demonstrates main aspects of using JSON format in AnyChart component. Last sample of this article demonstrates cartesian chart with advanced settings. For the information on other ways of setting data see [Using Data Sets](Using_Data_Sets) and [Data From XML](Data_From_XML) articles.

## JSON vs JavaScript

AnyChart provides {api:anychart#fromJson}**.fromJSON()**{api} parameter for using data in JSON format. Snippet below represent simple instance of getting data from JSON format.

```
  var chart = anychart.fromJSON(/*put your JSON data in here*/);

  // draw chart
  chart.draw();
```

Setting data using JSON format is very similar to the way of setting data in JavaScript. The name of every object in JSON configuration corresponds to the name of a method or parameter in JS.

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
```

{sample}WD\_Data\_from\_JSON\_01{sample}

Data set for pie chart 

JSON format has some peculiarities. JSON configuration can contain string, object, array, number, boolean and null. The variety of acceptable data formats makes the JSON structure very similar to JS. To find out any of require method or parameter use {api:anychart}API{api}. API supplies every parameter with a structure to invoke it. This structure is the same for JSON data set. For instance, API provides {api:anychart#column}**column()**{api} method to create column chart.

```
  anychart.column([128.14, 112.61, 163.21, 229.98]).container('container').draw();
```

The same chart can be created using JSON

```
  anychart.fromJson({
      "chart": {
        "type": "column",
        "series":[{
          "data": [128.14, 112.61, 163.21, 229.98],
        }],
        "container": "container"
      }
    }).draw();
```

**Note:** Pie chart can have only one data series, thus JSON configuration for pie chart requires no "series" object. 

As you can see, JSON format isn't limited only by setting chart type and data, but can set container for the chart. 
  
  
Parameters of Y-Scale should be applied using {api:anychart.charts.Cartesian#yScale}yScale(){api} method and should be invoked using code, similar to the snippet below

```
  // create chart and set it line type
  var chart = anychart.line();
  
  chart.yScale()    // invoke y scale
    .minimum(60)    // set minimum value 
    .maximum(120);  // set maximum value
```

The snippet below shows setting the same parameters using JSON

```
  "chart": {          // create chart
    "type": "line",   // set line type
    "yScale": {       // invoke y scale
      "minimum": 60,  // set minimum value
      "maximum": 120  // set maximum value
    }
```

As addition to the presented material, here is a table of main methods and parameters of JS data set comparing with JSON data set (full list of all the methods and parameters can be found in api).








<!--Chart type-->







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
{sample}WD\_Data\_from\_JSON\_13{sample}
</td>
</tr>
</tbody></table>




<!--Chart title-->




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
<td style="border-bottom: 0; border-left: 0;">
```
// set chart type
var chart = anychart.column();

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

// set chart container
chart.container('container');
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
// set chart type
{chart: {type: "line",
  
  // title settings
  title: {
    // set title text
    text: "Sales Performance",
    // settings for title background
    background: {
      // enable background
      enabled: "true",
      // set background inner color
      fill: "#FFD700",
      // set background border
      stroke: "#D8D8D8",
      // set type of background corners
      cornerType: "round",
      // set corners size
      corners: 10}},
  
  // set series type
  series:[{seriesType: "column",
    data: [{x: "January", value: 10000},
      {x: "February", value: 12000},
      {x: "March", value: 18000},
      {x: "April", value: 11000},
      {x: "May", value: 9000}]
  }],
  
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
{sample :width 677}WD\_Data\_from\_JSON\_14{sample}
</td>
</tr>
</tbody></table>






<!--Multiple series-->








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
{sample}WD\_Data\_from\_JSON\_15{sample}
</td>
</tr>
</tbody></table>




<!--Axes settings-->






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
<td style="border-bottom: 0; border-left: 0;">
```
    var chart = anychart.line();
    
    // set intervals of default y scale
    chart.yScale().ticks().interval(100000);
    
    // settings for custom y scale
    var customYScale = anychart.scales.linear();
    customYScale
        .minimum(0)
        .maximum(100)
        .ticks()
            .interval(10);
    extraYScale.minorTicks().interval(2);
    
    // y axes settings
    chart.yAxis().title().text('Basic Y Axis');
    chart.yAxis(1)
      .orientation('right')
      .scale(customYScale)
      .title()
        .text('Extra Y Axis');
    
    chart.column([
        ["A", 637166],
        ["B", 721630],
        ["C", 148662],
        ["D", 78662],
        ["E", 90000]
    ]);
    chart.line([
        ["A", 95],
        ["B", 97],
        ["C", 96],
        ["D", 70],
        ["E", 35]
    ]).yScale(customYScale);
    
    chart.container('container')
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
  {chart:{type: "line",
    
    // set interval of default y scale
    yScale: {ticks: {interval: 100000}},
    
    // settings for custom y scale
    scales: {"customYScale": { 
      type: "linear",
      minimum: 0,
      maximum: 100,
      ticks: {
        interval: 10},
      minorTicks: {interval: 2} }},
    
    // y axes settings
    yAxes: [{title: "Basic Y Axis"
    },{
      orientation: "right",
      scale: "customYScale",
      title:{
        text: "Extra Y Axis"}}],
    
    series:[{seriesType: "column",
      data: [{x: "A", value: 637166},
        {x: "B", value: 721630},
        {x: "C", value: 148662},
        {x: "D", value: 78662},
        {x: "E", value: 90000}
      ]},{
        seriesType: "line",
        data:[{x: "A", value: 95},
          {x: "B", value: 97},
          {x: "C", value: 96},
          {x: "D", value: 70},
          {x: "E", value: 35}],
        yScale: "customYScale"}],
      
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
{sample}WD\_Data\_from\_JSON\_16{sample}
</td>
</tr>
</tbody></table>






<!-- Labels settings-->




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
<td style="border-bottom: 0; border-left: 0;">
```
  var chart = anychart.lineChart();
  
  // set range marker
  chart.rangeMarker()
      .scale(chart.yScale())
      .from(0)
      .to(30000)
      .fill({
          keys: ['.1 green', '.5 yellow', '.9 red'],
          angle: -90,
          opacity: 0.5
      });
  
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
  chart.yScale().minimum(0).maximum(30000);
  chart.xAxis().title().enabled(false);
  chart.yAxis().title().text('Sales');
  chart.container('container')
```
</td>
<td style="border-bottom: 0; border-right: 0;">
```
{chart: { type: "line",
  
  // set range marker
  rangeAxesMarkers: [{
    scale: 1,
    from: 0,
    to: 30000,
    fill: {
      keys: [ ".1 green", ".5 yellow", ".9 red"],
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
  
  // data set
  series: [{seriesType: "line",
    data: [ {x: "2005", value: "10000"},
            {x: "2006", value: "12000"},
            {x: "2007", value: "18000"},
            {x: "2008", value: "19000"},
            {x: "2009", value: "29000"}
  ]}],
  title: {enabled: "false"},
  yScale: {minimum: "0", maximum: "30000"},
  xAxes: {title: {enabled: "false"}},
  yAxes: {title: "Sales"},
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
{sample}WD\_Data\_from\_JSON\_17{sample}
</td>
</tr>
</tbody></table>


## Samples

### Data Sets

JSON data set can contain one or several series. Sample below demonstrates chart with several series from JSON.

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

{sample}WD\_Data\_from\_JSON\_02{sample}

### CSV Data

CSV format is the easiest way to create plain data set. Here is a sample of CSV data set.

```
  // csv data set
  var csvData = 'January, 10000\n'+
    'February, 12000\n'+
    'March, 18000\n'+
    'April, 11000\n'+
    'May, 9000\n';
```

{sample}WD\_Data\_from\_JSON\_03{sample}

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

{sample}WD\_Data\_from\_JSON\_04{sample}

### Visualization

Visual settings are vital for a chart. JSON can control any method and parameter of a chart to configure desirable chart appearance.

```
  "fill":"gold",
  "stroke": "gray",
  "hoverStroke": "darkred",
  "hatchFill": {
    "type": "diagonalbrick",
    "color": "gray"
  },
  "hoverHatchFill":{
    "type:": "diagonalbrick",
    "color": "darkred"
  }
```

{sample}WD\_Data\_from\_JSON\_05{sample}

### Complex

Previous samples demonstrate separate additional features. Next sample is a bit more complex. It demonstrates cartesian chart with several line series, customized axes, scales, grids and titles.

{sample}WD\_Data\_from\_JSON\_06{sample}

## Data Serialization

Predefined settings from JS format can be serialized into JSON format for the sake of convenient in future usage. Method **.toJson()** transfers current chart settings into JSON object. This method creates an object, that contains all posible methods and parameters of the chart.

{sample}WD\_Data\_from\_JSON\_18{sample}

**Note:** Parameters of text formatting can't be serialized and will be set by default in JSON format. 