{:index 6}

# Legend

## Overview

The AnyStock legend is somewhat alike the basic charts legend. You may use all its functions, enable or disable completely the same features. You can find some information about basic legend in [Legend tutorial](../Common_Settings/Legend). The main difference you should remember is that the legend in AnyStock is bound to the plot, not to the chart itself.

Let's explore the legend usage in AnyStocks and have a look at a couple of samples.

As the AnyStock legend is quite similar to other charts' legend, we're going to consider the cases of differences or when we need to change something.

## Positioning

We use the same methods for positioning the AnyStock Chart Legend as for the Basic Charts Legend. So, we use {api:anychart.core.ui.Legend#orientation}orientation(){api} and {api:anychart.core.ui.Legend#align}align(){api} methods to control legend's alignment. For more complicated settings, such as changing the items layout or space between items, we use {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} and {api:anychart.core.ui.Legend#itemsSpacing}itemsSpacing(){api} accordingly. Let's create a vertically arranged legend.

```
// making the legend vertical
legend.itemsLayout('vertical');
// setting the space between the items
legend.itemsSpacing(1);
```

{sample}STOCK\_Legend\_01{sample}

## Title

By default, a Stock chart legend title shows the date and time of the hovered point on a chart, or the date and time of the last point of the chart when the mouse is out of the chart and no point is hovered. It is placed on the left side of the legend, while the whole legend is put in a line; title separator is disabled by default. We can change it all using {api:anychart.core.ui.Legend#titleFormat}titleFormat(){api} method for changing the legend title, change its placement using some positioning methods (such as {api:anychart.core.ui.Legend#position}position(){api}, {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api}), disable the title by setting "false" to {api:anychart.core.ui.Legend#enabled}enable(){api}, enable the title separator with {api:anychart.core.ui.Legend#titleSeparator}titleSeparator(){api} or add any of the events to make it interactive.

```
// turn the title on and set the position
legend.title(true);
legend.title().orientation('top').align('left');

// format the title
legend.titleFormat(function (){
    return "ACME Corp. Stock Prices"
});

//enable the titleSeparator
legend.titleSeparator(true);
```

{sample}STOCK\_Legend\_02{sample}

## Items

By default, the legend items show the name of the series with the value hovered on a stock, and the icon of the item is of square form and of the represented series' color. We can change the appearance of the items list using {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} method. It affects the list of items, so we can rename the items, change their icons' appearance. Look at the sample below

```
firstPlot.legend().itemsFormatter(function (){
    return [
        {text: "High", iconType: "circle", iconFill:"#558B2F"},
        {text: "Low", iconFill:"#D84315"},
        {text: "Close", iconType: "circle", iconFill:"#FF8F00"}
    ]
});
```

{sample}STOCK\_Legend\_03{sample}

When we've got the OHLC-series on our chart, we should use the {api:anychart.core.ui.Legend#itemsFormat}itemsFormat(){api} method to display all OHLC values in the legend. In the sample below we check if the series we're formatting is of OHLC type (which is necessary if your chart has a number of series) and then define what to display.

```
plot.legend().itemsFormat(function (){
      if (this.open !== undefined){ 
      return "Open: " + this.open + "   High: " + this.high+ "   Low: " + this.low + "   Close: " + this.close 
      }
  });
```

{sample}STOCK\_Legend\_04{sample}

One more thing should we take into account: if we've got too many data points and the data is approximated, then the legend will show the approximate value of the hovered group of points. To see the exact value of the point you should scroll the data to a non-approximated state.

## Visualization

When we want to change something in the legend view, there's almost no difference in usage and editing between the basic chart legend and the AnyStock one. Let's add a background to our legend, change its size and icons and adjust the legend paginator. 

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

{sample}STOCK\_Legend\_05{sample}

## Custom Item

When creating legend you can add your own items with any information you want to see on the legend, to do that use {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} method.

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

{sample}STOCK\_Legend\_06{sample}

You can also create a custom legend. It's being done the same way as with basic chart legends, so you can look for it up in the [Basic Chart Legend](../Common_Settings/Legend#custom_legend) article.

## Custom Legend

The same as we create one legend to several series in basic charts, we can do with stocks. The only difference you'd better remember is that in stocks we operate with series on plots instead of charts. Look at this in the [Basic Chart Legend](../Common_Settings/Legend#one_legend_for_several_charts) article.

```
// create custom legend
var customLegend = anychart.standalones.legend()();
// set sources for legend items
customLegend.itemsSource([plot_column, plot_line_ohlc]);
customLegend.enabled(true);
customLegend.hAlign("center");
customLegend.height(50);

// redraw legend every time the first chart is redrawn
chart.listen(
  "chartDraw",
  function (){
      // define legend bounds
      var legendBounds = anychart.math.rect(
            0,
            customLegend.getRemainingBounds().getHeight(),
            chart.container().width(),
            chart.container().height()
      );
      // set bounds and draw legend
      customLegend.parentBounds(legendBounds).draw();
  }
);

// set the bottom margin
chart.margin().bottom(chart.height() - customLegend.getRemainingBounds().getHeight());

// draw legend
customLegend.container(stage).draw();
```

{sample}STOCK\_Legend\_07{sample}