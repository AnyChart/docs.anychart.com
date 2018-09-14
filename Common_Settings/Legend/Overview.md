{:index 1}
# Overview

## Overview

A legend is an element of the chart that lists and explains its elements, making it more understandable and readable. In AnyChart, it can be used with [Basic Charts](../../Basic_Charts/General_Settings#legend) (?), [Stock Charts](../../Stock_Charts/Legend), and [Maps](../../Maps/Legend).

The legend and all its elements are fully customizable: you can either modify any setting of the automatically created legend or create custom legend from scratch.

In this section, ...

* (?) color range (color legend) (но куда ссылаться?)

## Classes

* {api:?entry=legend}legend(){api} + Cartesian: {api:anychart.charts.Cartesian#legend}legend(){api}
* {api:?entry=legendItem}legendItem(){api} + Cartesian: {api:anychart.core.cartesian.series.Line#legendItem}legendItem(){api}
* The legend is defined as an instance of the {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api} class.
* legend item: {api:anychart.core.utils.LegendItemSettings}anychart.core.utils.LegendItemSettings{api}

## List of Articles

The first article explains basic settings affecting the legend as a whole, such as layout, size, position, and so on:

* [Basic Settings](Basic_Settings)

The following sections explain how to adjust various parts of the legend:

* [Background](Background)
* [Title and Separator](Title_and_Separator)
* [Tooltip](Tooltip)
* [Paginator](Paginator)
* [Hover Cursor](Hover_Cursor)

Legend items are also fully customizable – all at once or individually:

* [Legend Items](Legend_Items)
* [Individual Legend Items](Individual_Legend_Items)

Finally, the advanced options listed below make working with the legend easier and allow tailoring data visualizations for your needs:

* [Themes](Themes)
* [Events](Events)
* [Standalone Legend](Standalone_Legend)