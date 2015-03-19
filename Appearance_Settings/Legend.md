# Legend

* [Overview](#overview)
* [Auto Legend](#auto_legend)
* [Title](#title)
* [Positioning](#positioning)
* [Visualization](#visualization)
 * [Background](#background)
 * [Size](#size)
* [Custom Item](#custom_item)
* [Custom Legend](#custom_legend)

## Overview
Legend is a table on a chart listing and explaining the symbols and colors used, usually along with series and/or point data point names and any other additional information that helps user to understand a chart. 
  
  
<!--In AnyChart Legend configuration is all the same for all chart types.-->
You can define where legend should be placed on the chart and even create "floating" legend to save the space.
  
  
In this article all legends features and setting are explained and demonstrated.

## Auto Legend 

To enable legend you have to specify **.enable(true)** parameter of **.legend()** method:

```
  // create chart
  var chart = anychart.line();
  
  // enable legend
  chart.legend().enabled(true);
```

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

## Easy Auto Legend for Single Series Charts

If you are showing single series chart and want your legend to show all points names and values you should configure legend:

```
  chart.legend()
    .enabled(true)                  // enable legend
    .itemsSourceMode('categories'); // set source of legend items
```

<!--Short explanation: -->As you can see, to create a legend for single series chart you have to set **categories** value for **.itemsSourceMode()** parameter.
<!--created <items> subnode and placed <item source="Points"> node in it - to show all points from the chart. 
Also we've specified a legend items format - to show Point Icon, Point Name and Value. And the last thing - we've set ignore_auto_item="True" - to force legend not to show series in legend.-->

{sample}AS\_Legend\_08{sample}

## Positioning

Depending on the layout and type of your chart you can position legend to a desired place using {api:anychart.core.ui.Legend#position}**.position()**{api} parameter of {api:anychart.core.ui.Legend}**.legend()**{api} method. 
  
  
As addition to the {api:anychart.core.ui.Legend#position}**.position()**{api} parameter, parameter {api:anychart.core.ui.Legend#align}**.align()**{api} controls legend alignment.
  
  
The space between data plot and legend is controlled using padding attribute.
  
  
Sample Pie Chart with a legend of a fixed (150px - width, 30% of data plot height) size positioned to the "Left" of the chart, aligned to " Near", with padding of 0 pixels:

{sample}AS\_Legend\_03{sample}

*Note:* possible values for **.align()** parameter are: *Left, Right, Top, Bottom and Center*. Also, possible values depend on the **.position()** parameter. With *Top* and *Bottom* legend position it is possible to use *Left, Right* and *Center* values of **.align()** parameter. For *Left* and *Right* values of **.position()** parameter it's possible to use *Top, Bottom* and *Center* values of **.align()** parameter.


## Visualization

As far as a legend is a part of a chart, its appearance should be tuned properly. Main aspects of legend visual appearance are described in this section.

### Background

Legend background allows you to configure the border and the fill of the legend. Method {api:anychart.core.ui.Legend#background}**.background()**{api} controls background visual appearance. To learn more about background setting please study the [background tutorial](Background).

{sample}AS\_Legend\_04{sample}

### Size

Legend size is controlled by {api:anychart.core.ui.Legend#height}**.height()**{api} and {api:anychart.core.ui.Legend#width}**.width()**{api} parameters. 

```
  chart.legend()
    .height(140)  // set legend height equal to 140px 
    .width(75)    // set legend width equal to 75px
```

Here is a sample with adjusted legend size

{sample}AS\_Legend\_05{sample}

## Custom Item

When creating legend you can add your own items with any information you want to see on the legend, to do that use **itemsFormatter()** parameter. 

```

chart.legend()
    .itemsFormatter(function(items){        // adjust legend items
      items.push({                          // push into items array
        text: 'item text '                  // set text of a new item
      });
      return items;                         // return items array
    });

```

In the sample chart below we've used custom item, that adds *Total* data to legend.

{sample}AS\_Legend\_06{sample}

## Custom Legend

AnyChart sets no limits to the amount of legends on one chart plot. Legend can be a part chart as well as a separate unit. Sample below demonstrates three custom legend at the bottom of the chart. 

{sample}AS\_Legend\_07{sample}