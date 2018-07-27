{:index 3}
# Advanced Settings

## Title + Separator

The legend title is disabled by default. To enable and configure it, combine the {api:anychart.core.ui.Legend#title}title(){api} method with the methods of the {api:anychart.core.ui.Title}anychart.core.ui.Title{api} class. For example, you can adjust the font of the title:

```
// enable and configure the legend title
var title = chart.legend().title();
title.enabled(true);
title.text("Total Sales");
title.fontSize(12);
title.fontWeight(600);
title.fontColor("#96a6a6");
```

You can also enable and adjust the title separator: use the {api:anychart.core.ui.Legend#titleSeparator}titleSeparator(){api} method, combined with the methods of the {api:anychart.core.ui.Separator}anychart.core.ui.Separator{api} class. This is how the fill and stroke are adjusted:

```
// enable and configure the title separator
chart.legend().titleSeparator(true);
chart.legend().titleSeparator().height(3);
chart.legend().titleSeparator().stroke("#96a6a6");
chart.legend().titleSeparator().fill("#96a6a6 0.5");
```

See the [Title](../Title) article to learn more.

Here is a legend with the title and title separator enabled and configured:

{sample}CS\_Legend\_Advanced\_01{sample}

## Tooltip

A [Tooltip](../Tooltip) is a text box displayed when an element of a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

By default, the legend tooltip is disabled. Use the {api:anychart.core.ui.Legend#tooltip}tooltip(){api} method to enable it. Also, {api:anychart.core.ui.Tooltip#title}title(){api} and {api:anychart.core.ui.Tooltip#titleFormat}separator(){api} allow enabling the tooltip title and separator.

### Tokens

To change the text of the tooltip or tooltip title, combine the {api:anychart.core.ui.Legend#tooltip}tooltip(){api} method with {api:anychart.core.ui.Tooltip#format}format(){api} or {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}. The only [token](../Text_Formatters#string_tokens) available is `{%value}` – it stands for the name of the series.

```
// enable and configure the legend tooltip

var legendTooltip = chart.legend().tooltip();

legendTooltip.enabled(true);
legendTooltip.title(true);
legendTooltip.separator(true);

legendTooltip.titleFormat("Sales Info");
legendTooltip.format("Year: {%value}");
```

{sample}CS\_Legend\_Advanced\_02{sample}

### Formatting Functions

* {api:anychart.core.ui.Legend#tooltip}tooltip(){api}
* {api:anychart.core.ui.Tooltip#format}format(){api}
* {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}
* `value`
* [Formatting Functions](../Text_Formatters#formatting_functions)


```
// add meta-information about the series
series1.meta({sales: series1.getStat("sum"), top: 
series2.meta({sales: series2.getStat("sum"), top: 
series3.meta({sales: series3.getStat("sum"), top: 
series4.meta({sales: series4.getStat("sum"), top: 

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

* {api:anychart.core.ui.Legend#paginator}paginator(){api}
* {api:anychart.core.ui.Paginator}anychart.core.ui.Paginator{api}


```
// configure the legend paginator
var paginator = legend.paginator();
paginator.layout("vertical");
paginator.orientation("left");
paginator.fontSize(12);
paginator.fontWeight(600);
paginator.fontColor("#dd2c00");
paginator.padding(15);
paginator.currentPage(1);
```

{sample}CS\_Legend\_Advanced\_04{sample}

## Hover Cursor

* {api:anychart.core.ui.Legend#hoverCursor}hoverCursor(){api}
* {api:anychart.enums.Cursor}anychart.enums.Cursor{api}
* `"pointer"`


```
// customize the hover cursor of the legend
chart.legend().hoverCursor("help");
```

{sample}CS\_Legend\_Advanced\_05{sample}