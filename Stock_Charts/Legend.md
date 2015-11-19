{:index 7}

#Legend

* [Overview](#overview)
* [Altering](#altering)
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


## Altering

As our stock legend is quite similar to other charts' legend, we're going to consider here those cases of differences or when we need to change something in it.

### Positioning

We use the same methods for positioning the Stock Chart Legend as for the Basic Charts Legend. So, we use {api:anychart.core.ui.Legend#orientation}**.orientation()**{api} and {api:anychart.core.ui.Legend#align}**.align()**{api} methods to control legend's alignment. For more complicated settings, such as changing the items layout or space between items, we use {api:anychart.ui.Legend#itemsLayout}**.itemsLayout()**{api} and {api:anychart.core.ui.Legend#itemsSpacing}**.itemsSpacing()**{api} accordingly. Let's create a vertically arranged legend.

```

	// making the legend vertical
	legend.itemsLayout('vertical');
	// setting the space between the items
	legend.itemsSpacing(1);

```

{sample}STOCK\_Legend\_01{sample}

### Title

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


### Items

By default, the legend items show the name of the series and the value hovered on a stock. Everything seems quite clear in the case of line or column series on a stock, but when we've got the OLHC series, we should use the {api:anychart.ui.Legend#itemsFormatter}**.itemsFormatter()**{api} method to set the value or values that you'd like the legend title to display, unless it shows the close values.


```
```

{sample}STOCK\_Legend\_03{sample}

One thing more should we take into account: if we've got too many data points and the data is approximated, then the legend will show the approximate value of the hovered group of points. To see the exact value of the point you should scroll the data to a non-approximated state.


### Visualization

As far as a legend is a part of a stock plot, it should look attractive and . Main aspects of legend visual appearance are described in this section.

```
```

{sample}STOCK\_Legend\_04{sample}

