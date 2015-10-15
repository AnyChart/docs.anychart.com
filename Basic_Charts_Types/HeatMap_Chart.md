# HeatMap Chart

* [Overview](#overview)
* [Chart](#chart)
* [Visualization](#visualization)
  * [Colors](#colors)
  * [Stroke](#stroke)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
* [HatchFill](#hatchFill)

## Overview

AnyChart JavaScript HeatMap is a graphical representation of data where the individual values contained in a matrix are represented as colors. 

## Chart 

Each data point for HeatMap chart must have three parameters: **"Column"** parameter should define the name of the column to put the point into, **"row"** parameter defines the row to put the point into and **"value"** parameter corresponds with the color of the point. Here is a sample of appropriate data formatting:

```
  var dataSet = anychart.data.set([
    {column: "Quarter 1", row: "Mobile", value: 15},
    {column: "Quarter 2", row: "Mobile", value: 17},
    {column: "Quarter 3", row: "Mobile", value: 21},
    {column: "Quarter 4", row: "Mobile", value: 23},
    {column: "Quarter 1", row: "WebMail", value: 34},
    {column: "Quarter 2", row: "WebMail", value: 33},
    {column: "Quarter 3", row: "WebMail", value: 32},
    {column: "Quarter 4", row: "WebMail", value: 30},
    {column: "Quarter 1", row: "Desktop", value: 43},
    {column: "Quarter 2", row: "Desktop", value: 42},
    {column: "Quarter 3", row: "Desktop", value: 40},
    {column: "Quarter 4", row: "Desktop", value: 38},
    {column: "Quarter 1", row: "Undetected", value: 8},
    {column: "Quarter 2", row: "Undetected", value: 8},
    {column: "Quarter 3", row: "Undetected", value: 7},
    {column: "Quarter 4", row: "Undetected", value: 8}
  ]);
  
  var chart = anychart.heatMap(dateSet);
```

Moreover, you can use an array of arrays without any parameters as a data source and map your data later:

```
  var data = [
    ["Quarter 1", "Mobile", 15],
    ["Quarter 2", "Mobile", 17],
    ["Quarter 3", "Mobile", 21],
    ["Quarter 4", "Mobile", 23],
    ["Quarter 1", "WebMail", 34],
    ["Quarter 2", "WebMail", 33],
    ["Quarter 3", "WebMail", 32],
    ["Quarter 4", "WebMail", 30],
    ["Quarter 1", "Desktop", 43],
    ["Quarter 2", "Desktop", 42],
    ["Quarter 3", "Desktop", 40],
    ["Quarter 4", "Desktop", 38],
    ["Quarter 1", "Undetected", 8],
    ["Quarter 2", "Undetected", 8],
    ["Quarter 3", "Undetected", 7],
    ["Quarter 4", "Undetected", 8],
  ];
  
  // define the column for each parameter
  var dataSet = data.mapAs({
    column: [0],
    row: [1],
    value: [2]
  });
  
  var chart = anychart.heatMap(dataSet);
```

Here is a HeatMap with this data:

{sample}BCT\_HeatMapChart\_01{sample}

## Visualization

While as most types of charts represent differences in values of data points via series shapes on data plot the HeatMaps displays all differences with colors. That is why this section is quite important.

### Colors

There are different ways to manage HeatMap's colors. You can set colors ether in your dataSet or using special methods. The most popular method to set heatMap colors is **.colorScale()** method.
  
  
Use **.ordinalColor()** scale as a parameter for **.colorScale()** method to create an array of ranges and define the color for each range. All value for ranges are custom.

```
  var chart = anychart.heatMap(dataSet);

  // create linerColor scale
  var colorScale = anychart.scales.ordinalColor();
  // set range of values and corresponding colors
  colorScale.ranges([
    // set color for all points with the value less than 1200000
    {less: 1200000, color: "#B2DFDB"}, 
    {from: 1200000, to: 3000000, color: "#004D40"},
    {greater: 3000000, color: "#004D40"}
  ]);

  // apply colorScale for colorizing heatMap chart
  chart.colorScale(colorScale);
```

Here is a sample of a heatMap with **.ordinalColor()** scale:

{sample}BCT\_HeatMapChart\_02{sample}

Moreover, you can set a solid color for each cell of the heatMap. Use **.fill()** method to define custom color for every cell. In addition to **.fill()** method, **"fill"** parameter can be used to emphasize a chart point:

```
  var dataSet = anychart.data.set([
    {column: "California",    row: "2004", value: 1704211},
    {column: "California",    row: "2005", value: 2782680},
    {column: "California",    row: "2006", value: 2992679},
    {column: "Colorado",      row: "2004", value: 448302},
    {column: "Colorado",      row: "2005", value: 768390},
    {column: "Colorado",      row: "2006", value: 843584},
    {column: "DC",            row: "2004", value: 693211},
    {column: "DC",            row: "2005", value: 1215158},
    {column: "DC",            row: "2006", value: 1053581},
    {column: "Florida",       row: "2004", value: 405985},
    {column: "Florida",       row: "2005", value: 661250},
    {column: "Florida",       row: "2006", value: 811924},
    {column: "Illinois",      row: "2004", value: 727914},
    {column: "Illinois",      row: "2005", value: 1150659},
    {column: "Illinois",      row: "2006", value: 1134085},
    {column: "Texas",         row: "2004", value: 219967},
    {column: "Texas",         row: "2005", value: 3732889},
    {
      // set column parameter
      column: "Texas",
      // set row parameter
      row: "2006",
      // set value parameter
      value: 4185098,
      // set custom inner color for a point
      fill: "#90EE90"
    },
    {column: "Massachusetts", row: "2004", value: 238819},
    {column: "Massachusetts", row: "2005", value: 157719},
    {column: "Massachusetts", row: "2006", value: 887169},
    {column: "New York",      row: "2004", value: 1667969},
    {column: "New York",      row: "2005", value: 2763503},
    {column: "New York",      row: "2006", value: 3151022}
  ]);
  
  var chart = anychart.heatMap(dataSet);
  // set inner color for every cell
  chart.fill("#FFFFE0");
```

{sample}BCT\_HeatMapChart\_05{sample}

### Stroke

Border of the heatMap chart and all the borders of each chart points are controlled by **.stroke()** method. Alone with **.stroke()** method you can set **"stroke"** parameter for an individual point.

```
  var dataSet = anychart.data.set([
    {column: "California",    row: "2004", value: 1704211},
    {column: "California",    row: "2005", value: 2782680},
    {column: "California",    row: "2006", value: 2992679},
    {column: "Colorado",      row: "2004", value: 448302},
    {column: "Colorado",      row: "2005", value: 768390},
    {column: "Colorado",      row: "2006", value: 843584},
    {column: "DC",            row: "2004", value: 693211},
    {column: "DC",            row: "2005", value: 1215158},
    {column: "DC",            row: "2006", value: 1053581},
    {column: "Florida",       row: "2004", value: 405985},
    {column: "Florida",       row: "2005", value: 661250},
    {column: "Florida",       row: "2006", value: 811924},
    {column: "Illinois",      row: "2004", value: 727914},
    {column: "Illinois",      row: "2005", value: 1150659},
    {column: "Illinois",      row: "2006", value: 1134085},
    {column: "Texas",         row: "2004", value: 219967},
    {column: "Texas",         row: "2005", value: 3732889},
    {
      column: "Texas",
      row: "2006",
      value: 4185098,
      stroke: {color: "#006400"},
      fill: "#90EE90"
    },
    {column: "Massachusetts", row: "2004", value: 238819},
    {column: "Massachusetts", row: "2005", value: 157719},
    {column: "Massachusetts", row: "2006", value: 887169},
    {column: "New York",      row: "2004", value: 1667969},
    {column: "New York",      row: "2005", value: 2763503},
    {column: "New York",      row: "2006", value: 3151022}
  ]);

  // create chart
  var chart = anychart.heatMap(dataSet);
  chart.stroke("#CCC");
```

Here is a sample with adjusted strokes.

{sample}BCT\_HeatMapChart\_06{sample}
  
### Labels

Labels are text boxes with additional information for presented data. You can tune labels using {api:anychart.charts.HeatMap#labels}**.labels()**{api} method.

```
  // create chart
  var chart = anychart.heatMap(dataSet);
  
  // labels settings
  var labels = chart.labels();
  // enable labels
  labels.enabled(true);
  labels.textFormatter(function(){
    // get value parameter of the point
    var value = (this.value).toFixed(0);
    var main = "";
    // if value is more than three symbols long
    for (var i=1;(i*3)<value.length;i++)
      // insert space before every 3 symbols
      main = " " + value.substr(value.length-(i*3), 3) + main;
    // get the remaining part of the value
    var tail = value.substr(0, value.length-(main.length-main.length/4));
    // format value in appropriate way
    value = tail + main;
    return "$" + value
  });
```

You can find information on managing labels content in [Text Formatters article](../Common_Settings/Text_Formatters).
  
  
Here is a sample of a js heatMap with formatted labels.

{sample}BCT\_HeatMapChart\_03{sample}

### Tooltips

In this section we will explain how to tune pie tooltip. Method {api:anychart.charts.HeatMap#tooltip}**.tooltip()**{api} controls tooltip of the heatMap.

```
  var chart = anychart.heatMap(dataSet);
  
  var tooltip = chart.tooltip();
  tooltip.textFormatter(function(){
    return "Income: " + this.value + 
      "\nPercent: " + (100*this.value/this.getStat("sum")).toFixed(1) + "%";
  });
```

{sample}BCT\_HeatMapChart\_04{sample}
<!--
## HatchFill

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see Hatch Fill tutorial.
  
  
To demonstrate hatch fill feature we've edited one of the previous samples. As you see now it is completely monochrome. We've got a 5-series chart with 2 data points in each series. For every series we've applied different hatch fills by setting hatch type for the .hatchFill() parameter opposite to fill() parameter used to colorize the series and set all series in grey color (#EEEEEE).
-->