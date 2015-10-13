# HeatMap Chart

* [Overview](#overview)
* [Chart](#chart)
* [Visualization](#visualization)
  * [Colors](#colors)
  * [Stroke](#stroke)
  * [Labels and Tooltips](#labels_and_tooltips)
* [HatchFill](#hatchFill)

## Overview

AnyChart JavaScript HeatMap is a graphical representation of data where the individual values contained in a matrix are represented as colors. 

## Chart 

Each data point for HeatMap chart must have three parameters: "Column" parameter should define the name of the column to put the point into, "row" parameter defines the row to put the point into and "value" parameter corresponds with the color of the point. Here is a sample of appropriate data formatting:

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

{sample}BCT\HeatMapChart\_01{sample}

## Visualization

While as most types of charts represent differences in values of data points via series shapes on data plot the HeatMaps displays all differences with colors. That is why this section is quite important 

### Colors

There are different ways to manage HeatMap's colors. You can set colors ether in dataSet or using special methods. The most popular method for to set heatMap colors is colorScale() method. 
  
  
Use linerColor() scale to define the range of colors 
