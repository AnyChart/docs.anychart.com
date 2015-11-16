{:index 7}

#Legend

* [Overview](#overview)
* [Title](#title)
* [Positioning](#positioning)
* [Visualization](#visualization)
 * [Background](#background)
 * [Size](#size)
 * [Paging](#paging)
 * [Marker Symbol](#marker_symbol)
* [Series Management](#series_management)
* [Tooltip](#tooltip)
* [Custom Item](#custom_item)
* [Custom Legend](#custom_legend)
* [One Legend for Several Charts](#one_legend_for_several_charts)



## Overview

The AnyStock legend is definitely the same as the basic charts legend. You may use all its functions, enable or disable completely the same features. You can find some information about basic legend [here](../Common_Settings/Legend). 


Now, let's explore the legend usage in AnyStocks and have a look at a couple of samples.


## Title

By default, a Stock chart legend title contains the date and time of the hovered point on a chart, or the date and time of the last point when the mouse is out of the chart and no point is hovered. We can change it using {api:anychart.ui.Legend#titleFormatter}**.titleFormatter()**{api} method, change its placement using some positioning methods, disable it through setting false to {api:anychart.ui.Legend#enabled}**.enable()**{api} or add any of the events to make it interactive. Let's change the title's placement and add a listener.


```
```

{sample}STOCK\_Legend\_01{sample}

## Positioning

We use the same methods for positioning the Stock Chart Legend as for the Basic Charts Legend. So, we use {api:anychart.core.ui.Legend#position}**.position()**{api} and {api:anychart.core.ui.Legend#align}**.align()**{api} methods to controls legend alignment. 

```
```

{sample}STOCK\_Legend\_02{sample}


## Visualization

As far as a legend is a part of a chart, its appearance should be tuned properly. Main aspects of legend visual appearance are described in this section.

```
```

{sample}STOCK\_Legend\_03{sample}