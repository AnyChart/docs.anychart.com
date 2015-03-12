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

{sample}GAS\_Legend\_01{sample}

## Title

Sometimes you need the title to a legend and sometimes it is superfluous: to enable legend title you have to set **.enabled(true)** parameter of a legend title method as it is shown below

```
  chart.legend().title().enabled(true);
```

To specify and format your own title for the legend use **.text()** parameter of a **.title()** method. For more information about title settings please refer to [Title](title).

```
  var legendTitle = chart.legend().title();
  
  legendTitle.text('2004 - Quarters: ')
    .fontFamily('Arial')
    .fontColor('red')
    .fontWeight(900)
    .background()
      .enabled(true)
      .fill(null)
      .stroke('black');
```