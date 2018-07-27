{:index 3}
# Advanced Settings

## Title

* {api:anychart.core.ui.Legend#title}title(){api}
* {api:anychart.core.ui.Legend#titleSeparator}titleSeparator(){api}
* {api:anychart.core.ui.Title}anychart.core.ui.Title{api}
* {api:anychart.core.ui.Separator}anychart.core.ui.Separator{api}
* [text of the legend](Basic_Settings#text)


```
// enable and configure the legend title
var title = chart.legend().title();
title.enabled(true);
title.text("Total Sales");
title.fontSize(12);
title.fontWeight(600);
title.fontColor("#96a6a6");
    
// enable and configure the title separator
chart.legend().titleSeparator(true);
chart.legend().titleSeparator().stroke("#96a6a6");
```

{sample}CS\_Legend\_Advanced\_01{sample}

## Tooltip

* [Tooltip](../Tooltip)

### Tokens

* {api:anychart.core.ui.Legend#tooltip}tooltip(){api}
* {api:anychart.core.ui.Tooltip#format}format(){api}
* {api:anychart.core.ui.Tooltip#titleFormat}titleFormat{api}
* `{%value}`
* [Tooltip](../Text_Formatters#string_tokens)


```
// enable and configure the legend tooltip
var legendTooltip = chart.legend().tooltip();
legendTooltip.enabled(true);
legendTooltip.title(true);
legendTooltip.separator(true);
legendTooltip.titleFormat("Sales Info");
legendTooltip.format("Year: {%value}");
```

### Formatting Functions

* {api:anychart.core.ui.Legend#tooltip}tooltip(){api}
* {api:anychart.core.ui.Tooltip#format}format(){api}
* {api:anychart.core.ui.Tooltip#titleFormat}titleFormat{api}
* `value`
* [Tooltip](../Text_Formatters#string_tokens)

{sample}CS\_Legend\_Advanced\_02{sample}

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

* {api:api:api:anychart.core.ui.Legend#paginator}paginator(){api}
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

* {api:api:api:anychart.core.ui.Legend#hoverCursor}hoverCursor(){api}
* {api:anychart.enums.Cursor}anychart.enums.Cursor{api}
* `"pointer"`

```
// customize the hover cursor of the legend
chart.legend().hoverCursor("help");
```

{sample}CS\_Legend\_Advanced\_05{sample}