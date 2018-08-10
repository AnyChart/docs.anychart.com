{:index 5}
# Tooltip

## Overview

A [Tooltip](../Tooltip) is a text box displayed when an element of a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

To access the settings of the legend tooltip, combine the {api:anychart.charts.Cartesian#legend}legend(){api} method with {api:anychart.core.ui.Legend#tooltip}tooltip(){api} and the methods of the tooltip, which are listed in {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api}.

## Enabling / Disabling

By default, the legend tooltip is disabled. To enable it, pass `true` either directly to {api:anychart.core.ui.Legend#tooltip}tooltip(){api} or to the {api:anychart.core.ui.Tooltip#enabled}enabled(){api} method of the tooltip.

Also, the {api:anychart.core.ui.Tooltip#title}title(){api} and {api:anychart.core.ui.Tooltip#titleFormat}separator(){api} methods of the tooltip allow enabling its title and separator:

```
// enable the legend tooltp
chart.legend().tooltip(true);

// enable the tooltip title
chart.legend().tooltip().title(true);

// enable the tooltip separator
chart.legend().tooltip().separator(true);
```

## Tokens

To change the text of the tooltip or tooltip title, combine the {api:anychart.core.ui.Legend#tooltip}tooltip(){api} method with {api:anychart.core.ui.Tooltip#format}format(){api} or {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}. The only [token](../Text_Formatters#string_tokens) available is `{%value}` – it stands for the names of the series.

```
// enable and configure the legend tooltip

var legendTooltip = chart.legend().tooltip();

legendTooltip.enabled(true);
legendTooltip.title(true);
legendTooltip.separator(true);

legendTooltip.titleFormat("Sales Info");
legendTooltip.format("Year: {%value}");
```

{sample}CS\_Legend\_Tooltip\_01{sample}

## Formatting Functions

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

{sample}CS\_Legend\_Tooltip\_02{sample}