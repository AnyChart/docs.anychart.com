{:index 7}

#Legend

* [Overview](#overview)
* [Positioning](#positioning)
* [Title](#title)
* [Items](#items)
* [Visualization](#visualization)
 * [Background](#background)
 * [Size](#size)
 * [Paging](#paging)
 * [Marker Symbol](#marker_symbol)
* [Custom Item](#custom_item)
* [Custom Legend](#custom_legend)
* [One Legend for Several Charts](#one_legend_for_several_charts)


## Overview

The AnyStock legend is rather alike the basic charts legend. You may use all its functions, enable or disable completely the same features. You can find some information about basic legend [here](../Common_Settings/Legend). The main difference you should remember is that the stock legend is bend to the stock plot, not to the chart itself.

Now, let's explore the legend usage in AnyStocks and have a look at a couple of samples.


As our stock legend is quite similar to other charts' legend, we're going to consider here those cases of differences or when we need to change something in it.

## Positioning

We use the same methods for positioning the Stock Chart Legend as for the Basic Charts Legend. So, we use {api:anychart.core.ui.Legend#orientation}**.orientation()**{api} and {api:anychart.core.ui.Legend#align}**.align()**{api} methods to control legend's alignment. For more complicated settings, such as changing the items layout or space between items, we use {api:anychart.ui.Legend#itemsLayout}**.itemsLayout()**{api} and {api:anychart.core.ui.Legend#itemsSpacing}**.itemsSpacing()**{api} accordingly. Let's create a vertically arranged legend.

```

	// making the legend vertical
	legend.itemsLayout('vertical');
	// setting the space between the items
	legend.itemsSpacing(1);

```

{sample}STOCK\_Legend\_01{sample}

## Title

By default, a Stock chart legend title shows the date and time of the hovered point on a chart, or the date and time of the last point of the chart when the mouse is out of the chart and no point is hovered. It is placed on the left side of the legend, while the whole legend is put in a line; title separator is disabled by default. We can change it all using {api:anychart.ui.Legend#titleFormatter}**.titleFormatter()**{api} method for changing the legend title, change its placement using some positioning methods (such as {api:anychart.ui.Legend#position}**.position()**{api}, {api:anychart.ui.Legend#itemsLayout}**.itemsLayout()**{api}), disable the title by setting "false" to {api:anychart.ui.Legend#enabled}**.enable()**{api}, enable the title separator with {api:anychart.ui.Legend#titleSeparator}**.titleSeparator()**{api} or add any of the events to make it interactive. 


```
	// turn the title on and set the position
	legend.title(true);
	legend.title().orientation('top').align('left');

	// format the title
	legend.titleFormatter(function(){
	    return "ACME Corp. Stock Prices"
	});

	//enable the titleSeparator
	legend.titleSeparator(true);
```

{sample}STOCK\_Legend\_02{sample}


## Items

By default, the legend items show the name of the series with the value hovered on a stock, and the icon of the item is of square form and of the represented series' color. We can change the appearance of the items list using {api:anychart.ui.Legend#itemsFormatter}**.itemsFormatter()**{api} method. It affects the list of items, so we can rename the items, change their icons' appearance. Look at the sample below 


```
firstPlot.legend().itemsFormatter(function(){
            return [
                {text: "High", iconType: "circle", iconFill:"#558B2F"},
                {text: "Low", iconFill:"#D84315"},
                {text: "Close", iconType: "circle", iconFill:"#FF8F00"}
            ]
        });
```

{sample}STOCK\_Legend\_03{sample}

When we've got the OHLC-series on our stock, we should use the {api:anychart.core.ui.Legend#itemsTextFormatter}**.itemsTextFormatter()**{api} method to display all OHLC values in the legend. In the sample below we check if the series we're formatting is of OHLC type (which is necessary if your stock has a number of series) and then define what to display.

```
plot.legend().itemsTextFormatter(function(){
      if (this.open !== undefined){ 
      return "Open: " + this.open+ "   High: " + this.high+ "   Low: " + this.low+ "   Close: " + this.close 
      }
  });
```

{sample}STOCK\_Legend\_04{sample}

One thing more should we take into account: if we've got too many data points and the data is approximated, then the legend will show the approximate value of the hovered group of points. To see the exact value of the point you should scroll the data to a non-approximated state.


## Visualization

When we want to change something in the legend view, there's almost no difference in usage and editing between the basic chart legend and the stock one. Let's add a background to our legend, change its size and icons and adjust the legend paginator. 

```
	// add a background
	legend.background("#E1F5FE");

	// change size in height
	legend.height(35);

	// adjust the paginator
    legend.paginator(true);
    legend.paginator().orientation("right");

    // icons
    var item = series.legendItem();
    // set stroke of icons
    item.iconStroke("#000")
    // set type of icon marker
    item.iconType("ohlc");
```



 * [Background](#background)
 * [Size](#size)
 * [Paging](#paging)
 * [Marker Symbol](#marker_symbol)
* [Custom Item](#custom_item)
* [Custom Legend](#custom_legend)
* [One Legend for Several Charts](#one_legend_for_several_charts)




### Tooltip

If you want to configure legend tooltips - you should do that using {api:anychart.core.ui.Legend#tooltip}**.tooltip()**{api} methods. You can tune its visual appearance and format. In the following sample we will format tooltips of the legend to show detailed description information.

{sample}AS\_Legend\_09{sample}

## Series Management

You can easily control series of the chart using chart legend. You can hide and show any of the series by clicking on the legend items. Here is a sample of column chart with four series. One of the series is already disabled. Click on the last legend item to show hidden series. 

{sample}AS\_Legend\_10{sample}

## Custom Item

When creating legend you can add your own items with any information you want to see on the legend, to do that use {api:anychart.ui.Legend#itemsFormatter}**itemsFormatter()**{api} method. 

```
  var legend = chart.legend();
  // adjust legend items
  legend.itemsFormatter(function(items){
    // push into items array
    items.push({
      // set text of a new item
      text: "item text "
    });
    // return items array
    return items;
  });
```

In the sample chart below we've used custom item that adds *Total* data to legend.

{sample}AS\_Legend\_11{sample}

## Custom Legend

AnyChart JavaScript Framework sets no limits to the amount of legends on one chart plot. Legend can be a part chart as well as a separate unit. Sample below demonstrates three custom legend at the bottom of the chart. 

{sample}AS\_Legend\_12{sample}

## One Legend for Several Charts

As you can see, one legend can contain different information from one chart. Moreover, one legend can contain information from several charts. To add several chart into one legend use {api:anychart.ui.Legend#itemsSource}**.itemsSource()**{api} method and define charts for legend's content.

```
  // define charts
  var chart2005 = anychart.column();
  var chart2006 = anychart.column();
  
  // create custom legend
  var legend = anychart.ui.legend();
  // set sources for legend items
  legend.itemsSource([chart2005, chart2006]);
```

{sample}AS\_Legend\_13{sample}

## One Legend for Several Series

You can attache an event to a legend items. Use **{api:anychart.core.ui.Legend#listen}.listen(){api}** method to set an event for a legend. List of possible event can be found in **{api:anychart.enums.EventType}API{api}**. For additional information on events in AnyChart you can find in [Event Listeners tutorial](../Common_Settings/Event_Listeners)

```
  // create legend
  var legend = anychart.ui.legend();

  // enable and disable series on legend item click
  legend.listen("legendItemClick", function(event) {
    // get item's index
    var index = event["itemIndex"];
    // manage enabled/disabled state of the series
    chart2005.getSeries(index).enabled(! chart2005.getSeries(index).enabled());
    chart2006.getSeries(index).enabled(! chart2006.getSeries(index).enabled());
  });
```

Sample below demonstrate managing several series with one legend item.

{sample}AS\_Legend\_14{sample}

