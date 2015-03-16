# Legend

* [Overview](#overview)
* [Enabling/Disabling Legend](#enabling/disabling_legend)

## Overview
Legend is a table on a chart listing and explaining the symbols and colors used, usually along with series and/or point data point names and any other additional information that helps user to understand a chart. 
  
  
<!--In AnyChart Legend configuration is all the same for all chart types.-->
You can define where legend should be placed on the chart and even create "floating" legend to save the space.
  
  
In this article all legends features and setting are explained and demonstrated.

## Enabling/Disabling Legend

To enable legend you have to specify **.enable(true)** parameter of **.legend()** method:

```
  // create chart
  var chart = anychart.line();
  
  // enable legend
  chart.legend().enabled(true);
```

## Easy Auto Legend 

By default legend shows all series names with a symbol that shows the color and the type of the series.

To enable such legend in your chart just enable it:

```
  chart.legend().enabled(true);
```

{sample}AS\_Legend\_01{sample}

## Title

Sometimes you need the title to a legend and sometimes it is superfluous: to enable legend title you have to set **.enabled(true)** parameter of a legend title method as it is shown below

```
  chart.legend().title().enabled(true);
```

To specify and format your own title for the legend use {api:anychart.core.ui.Title#text}**.text()**{api} parameter of a {api:anychart.core.ui.Legend#title}**.title()**{api} method. For more information about title settings please refer to [Title](title).

```
  chart.legend().title()
    .enabled(true)              // enables legend title
    .text('2004 - Quarters: ')  // set title text
    .fontFamily('Arial')        // set font family
    .fontColor('red')           // set title text color
    .fontWeight(900)            // set text weight
    .fontSize(16)               // set font size
    .padding(5)                 // prevent sticking text to borders
    .background()
      .enabled(true)            // enables background of the legend title
      .fill(null)               // disables background inner color
      .stroke('black');         // set border of the title
  
```

Here is a sample bar chart with formatted title:

{sample}AS\_Legend\_02{sample}

## Positioning

Depending on the layout and type of your chart you can position legend to a desired place using {api:anychart.core.ui.Legend#position}**.position()**{api} parameter of {api:anychart.core.ui.Legend}**.legend()**{api} method. 
  
  
As addition to the {api:anychart.core.ui.Legend#position}**.position()**{api} parameter, parameter {api:anychart.core.ui.Legend#align}**.align()**{api} controls legend alignment.
  
  
The space between data plot and legend is controlled using padding attribute.
  
  
Sample Pie Chart with a legend of a fixed (150px - width, 30% of data plot height) size positioned to the "Left" of the chart, aligned to " Near", with padding of 0 pixels:

{sample}AS\_Legend\_03{sample}

* *Note:* possible values for **.align()** parameter are: *Left, Right, Top, Bottom and Center*. Also, possible values depend on the **.position()** parameter. With *Top* and *Bottom* legend position it is possible to use *Left, Right* and *Center* values of **.align()** parameter. For *Left* and *Right* values of **.position()** parameter it's possible to use *Top, Bottom* and *Center* values of **.align()** parameter.


## Appearance

### Background

Legend background allows you to configure the border and the fill of the legend. Method {api:anychart.core.ui.Legend#background}**.background()**{api} controls background visual appearance. To learn more about background setting please study the background tutorial.
