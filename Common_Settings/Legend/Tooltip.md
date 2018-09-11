{:index 5}
# Tooltip

## Overview

A [Tooltip](../Tooltip) is a text box displayed when an element of a chart is being hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

To access the settings of the legend tooltip, combine the {api:?entry=legend}legend(){api} method of the chart with {api:anychart.core.ui.Legend#tooltip}tooltip(){api} and methods of the tooltip, which are listed in {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api}.

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

To change the text of the tooltip and tooltip title, use the {api:anychart.core.ui.Tooltip#format}format(){api} and {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} methods. The only [token](../Text_Formatters#string_tokens) available is `{%value}` – it stands for the names of the series:

```
// configure the legend tooltip
chart.legend().tooltip().titleFormat("Sales Info");
chart.legend().tooltip().format("Year: {%value}");
```

{sample}CS\_Legend\_Tooltip\_01{sample}

## Formatting Functions

You can set the text of the tooltip and tooltip title by combining the {api:anychart.core.ui.Tooltip#format}format(){api} and {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} methods with [formatting functions](../Text_Formatters#formatting_functions). The available fields include `value` and `meta`.

The `value` field stands for the names of the series, and `meta` allows accessing custom information about the series. To add such information, pass an object with metadata to the {api:?entry=meta}meta(){api} method of each series:

```
// add meta-information about the series
series1.meta({sales: series1.getStat("sum"), top: "John Doe"});
series2.meta({sales: series2.getStat("sum"), top: "Richard Roe"});
series3.meta({sales: series3.getStat("sum"), top: "Larry Loe"});
series4.meta({sales: series4.getStat("sum"), top: "Marta Moe"});

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