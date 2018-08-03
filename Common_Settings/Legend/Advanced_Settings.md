{:index 3}
# Advanced Settings

## Overview

## Title + Separator

The legend title is disabled by default. To enable and configure it, combine the {api:anychart.core.ui.Legend#title}title(){api} method with the methods of the {api:anychart.core.ui.Title}anychart.core.ui.Title{api} class. For example, you can adjust the font of the title:

```
// enable and configure the legend title
var title = chart.legend().title();
title.enabled(true);
title.text("Total Sales: " + chart.getStat("dataPlotYSum"));
title.fontSize(12);
title.fontWeight(600);
title.fontColor("#96a6a6");
```

You can also enable and adjust the title separator: use the {api:anychart.core.ui.Legend#titleSeparator}titleSeparator(){api} method, combined with the methods of the {api:anychart.core.ui.Separator}anychart.core.ui.Separator{api} class. This is how the fill and stroke are adjusted:

```
// enable and configure the title separator
chart.legend().titleSeparator(true);
chart.legend().titleSeparator().height(5);
chart.legend().titleSeparator().stroke("#455a64");
chart.legend().titleSeparator().fill("#96a6a6 0.3");
```

See the [Title](../Title) article to learn more.

Here is a legend with the title and title separator enabled and configured:

{sample}CS\_Legend\_Advanced\_01{sample}

## Tooltip

A [Tooltip](../Tooltip) is a text box displayed when an element of a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

By default, the legend tooltip is disabled. Use the {api:anychart.core.ui.Legend#tooltip}tooltip(){api} method to enable it. Also, the {api:anychart.core.ui.Tooltip#title}title(){api} and {api:anychart.core.ui.Tooltip#titleFormat}separator(){api} methods of the tooltip allow enabling its title and separator:

```
// enable the legend tooltip
var legendTooltip = chart.legend().tooltip();
legendTooltip.enabled(true);

// enable the tooltip title
legendTooltip.title(true);

// enable the tooltip separator
legendTooltip.separator(true);
```

### Tokens

To change the text of the tooltip or tooltip title, combine the {api:anychart.core.ui.Legend#tooltip}tooltip(){api} method with {api:anychart.core.ui.Tooltip#format}format(){api} or {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}. The only [token](../Text_Formatters#string_tokens) available is `{%value}` – it stands for the names of the series.

```
legendTooltip.titleFormat("Sales Info");
legendTooltip.format("Year: {%value}");
```

{sample}CS\_Legend\_Advanced\_02{sample}

### Formatting Functions

Instead of tokens, you can also use [formatting functions](../Text_Formatters#formatting_functions) with the `value` and `meta` fields.

The `value` field stands for the names of the series, and `meta` allows accessing custom information about the series. To add such information, pass an object with metadata to the **meta()** method of each series:

```
// add meta-information about the series
series1.meta({sales: series1.getStat("sum"), top: "John Doe"});
series2.meta({sales: series2.getStat("sum"), top: "Richard Roe"});
series3.meta({sales: series3.getStat("sum"), top: "Marta Moe"});
series4.meta({sales: series4.getStat("sum"), top: "Larry Loe"});

// enable and configure the legend tooltip

var legendTooltip = chart.legend().tooltip();

legendTooltip.enabled(true);
legendTooltip.title(true);
legendTooltip.separator(true);

legendTooltip.titleFormat(function() {
  return this.value;
});

legendTooltip.format(function() {
  return "Total Sales: $" + this.meta.sales +
         "\nTop Seller: " + this.meta.top;
});
```

{sample}CS\_Legend\_Advanced\_03{sample}

## Paginator

In some cases – depending on the [Layout](Basic_Settings#layout) and [Size](Basic_Settings#size) settings of the legend – only a part of the items is shown simultaneously, and the legend paginator is automatically enabled, allowing you to flip through them.

You can adjust the paginator with the help of the {api:anychart.core.ui.Legend#paginator}paginator(){api} method, combined with the following methods:

* {api:anychart.core.ui.Paginator#currentPage}currentPage(){api} to specify which page is initially displayed (1 by default)
* {api:anychart.core.ui.Paginator#layout}layout(){api} to set the `"horizontal"` (default) or `"vertical"` layout
* {api:anychart.core.ui.Paginator#orientation}orientation(){api} to set the position relative to the legend
* {api:anychart.core.ui.Paginator#fontColor}fontColor(){api} to set the font color
* other methods of the {api:anychart.core.ui.Paginator}anychart.core.ui.Paginator{api} class


```
// configure the legend paginator
var paginator = legend.paginator();
paginator.layout("vertical");
paginator.orientation("left");
paginator.padding(15);
paginator.fontColor("#dd2c00");
paginator.fontSize(12);
paginator.fontWeight(600);
```

Please note that the {api:anychart.core.ui.Paginator#currentPage}currentPage(){api} method should be called after the chart is drawn:

```
// initiate drawing the chart
chart.draw();

// set the current page of the paginator
paginator.currentPage(2);
```

Here is a sample with all the settings shown in the code snippets above applied to the paginator:

{sample}CS\_Legend\_Advanced\_04{sample}

## Hover Cursor

To adjust the hover cursor of the legend, use the {api:anychart.core.ui.Legend#hoverCursor}hoverCursor(){api} method with one of the parameters listed in {api:anychart.enums.Cursor}anychart.enums.Cursor{api}.

By default, the cursor type is `"pointer"`, and in the following sample it is set to `"help"`:

```
// customize the hover cursor of the legend
chart.legend().hoverCursor("help");
```

{sample}CS\_Legend\_Advanced\_05{sample}