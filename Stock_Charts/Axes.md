{:index 5}

#Axes

* [Overview](#overview)
* [Stock Axes features](#Stock_Axes_features)
* [Title](#title)
* [Orientation](#orientation)
* [Labels](#labels)
* [Axis Line](#axis_line)
* [Tickmarks](#tickmarks)


## Overview

In AnyChart axes are used to control grids, axes labels, lines and tick marks.  
  
* To know how to operate with basic charts axes - please see: [Axis_Basics](../Axes_and_Grids/Axis_Basics)
* To know what scale options are available - [Scale tutorial](../Axes_and_Grids/Scales)
* To learn how to create additional axes - [Additional axes](../Axes_and_Grids/Additional_Axes)
* To learn how to configure axes labels - [Axes Labels](../Axes_and_Grids/Axes_Labels_Formatting)
* To learn more about Date/Time Scale - [Date/Time Axes](../Axes_and_Grids/Date_Time_Axes)

In this section we will demonstrate only the differences of stock axes from basic charts' ones.

## Stock Axes features

Axes in AnyStocks are generally quite similar to the Basic Charts ones, but the X-axis is slightly different:
 - X-axis must be in datetime format and show the Data values
 - X-axis is being scrolled
 - It has background instead of stroke (axis line)
 - It cannot be moved to another place on a chart (always at the bottom)
 - A showHelperLabel feature for 
 - No drawFirstLabel, drawLastLabel
 - Tickmarks settings (ticks might be only inside of the axis)
 - No title
 - Only one X-axis for a plot (so the max number of X-axes on a chart is equivalent to the plots number)

## Orientation 

While a lot of AnyStock Axes settings are the same as Basic charts', there is a difference in their orientaion. Due to the specifics of stock charts, the X-axis has to be bound to the bottom of the chart. The Y-axis is completely usual.

##Tickmarks

The ticks in AnyStocks are a bit different too. As the X-axis is an area, the ticks are being placed inside of it.

{sample}{sample}

We can adjust the length of those ticks on X-axis only by setting another heigth for the axis. Ticks themselves don't have this method. 

Find how to work with the X-axis height in the "Axis Line" part of the article.

## Labels

Labels of the X-axis has an additional feature that our Basic Charts' X-axis doesn't have. It is a helper label that "saves" the scrolled major label value. Just scroll the following example and watch the scrolled labels.

{sample}{sample}

That happens when the helperLabel is on (in the default condition). You may disable it by setting the {api:anychart.core.axes.StockDateTime#showHelperLabel}**.showHelperLabel()**{api} method in false condition.

Another thing about X-axes labels is that they haven't got methods {api}**.drawFirstLabel()**{api} and {api}**.drawLastLabel()**{api}, which are usual for basic x-axes.

Finally, as our X-axis is an area, the labels are placed and might be moved only inside this area. For example, let's set the ticks on and the labels to the right from them. We use 

{sample}{sample}

## Axis Line

In Stocks, the x-axis is not a line but an area with the background and height. We can change these parameters using {api:anychart.core.axes.StockDateTime#background}**.background()**{api} and {api:anychart.core.axes.StockDateTime#height}**.height()**{api} methods.

