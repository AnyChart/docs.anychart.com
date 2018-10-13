{:index 6}

# Legend

## Overview

* [Legend](../Common_Settings/Legend/Overview)
* {api:anychart.core.stock.Plot#legend}legend(){api}
* {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api}

...

## Default Settings

...

{sample}STOCK\_Legend\_01{sample}

## Enabling / Disabling

On Stock charts, the legend is enabled by default. To disable or enable it, pass `false` / `true` to the {api:anychart.core.stock.Plot#legend}legend(){api} method of the plot or to the {api:anychart.core.ui.Legend#enabled}enabled(){api} method of the legend:

```
// create two plots
var plot1 = chart.plot(0);
var plot2 = chart.plot(1);

// disable the legend on the first plot
plot1.legend(false);
```

```
// create two plots
var plot1 = chart.plot(0);
var plot2 = chart.plot(1);

// disable the legend on the first plot
plot1.legend.enabled(false);
```

In the sample below, there is a Stock chart with two plots. The legend of the first plot is disabled by using the {api:anychart.core.stock.Plot#legend}legend(){api} method:

{sample}STOCK\_Legend\_02{sample}

## Title Text Format

The title of AnyStock legend is enabled by default: it shows the date (X-value) of the point that is currently hovered over. The title is configured like the legend title of any other chart type – see the [Title and Separator](../Common_Settings/Legend/Title_and_Separator) article to learn more.

Also, there is an option available only for Stock charts: you can format the text of the title by using the {api:anychart.core.ui.Legend#titleFormat}titleFormat(){api} method of the legend, combined with either [tokens](../Common_Settings/Text_Formatters#string_tokens) or [formatting functions](../Common_Settings/Text_Formatters#formatting_functions).

**1. Tokens**

The available tokens include:

* `{%dataIntervalUnit}`
* `{%dataIntervalUnitCount}`
* `{%hoveredDate}`
* `{%value}`
* `{%rawValue}`

For example, here the `{%value}` token is used to format the date:

```
// enable html for the legend title
plot.legend().title().useHtml(true);

// configure the format of the legend title
plot.legend().titleFormat(
  "<span style='color:#455a64;font-weight:600'>" +
  "DATE: {%value}{dateTimeFormat: dd MMM yyyy}</span>"
);
```
{sample}STOCK\_Legend\_03{sample}

**2. Formatting Functions**

The {api:anychart.core.ui.Legend#titleFormat}titleFormat(){api} can be also combined with [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `dataIntervalUnit`
* `dataIntervalUnitCount`
* `hoveredDate`
* `isGrouped`
* `value`
* `rawValue`

In this sample, the `value` field is used to format the date:

```
// enable html for the legend title
plot.legend().title().useHtml(true);

// configure the format of the legend title
plot.legend().titleFormat(function() {
  var date = anychart.format.dateTime(this.value, "dd MMMM yyyy");
  return "<span style='color:#455a64;font-weight:600'>DATE: " +
         date + "</span>";
});
```
{sample}STOCK\_Legend\_04{sample}

## Item Text Format

The [Legend Items](../Common_Settings/Legend/Legend_Items) article explains how to configure legend items of all chart types, including Stock charts. In general, there is no difference, except for the available text format settings.

AnyStock legend items, like legend items of other multiple-series charts, represent series, but they can also show point-related information. For example, the default item text includes the name of the series and the value (or values) of its point that is currently hovered over.

To format the text of items, call the {api:anychart.core.ui.Legend#itemsFormat}itemsFormat(){api} method with either [tokens](../Common_Settings/Text_Formatters#string_tokens) or [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) – please note that both series- and point-related tokens / function fields are available.

**1. Tokens**

The following tokens can be applied to any legend:

* `{%seriesName}` – the name of the series
* `{%x}` – the date (X-value) of the current point

Depending on the series type, you can use some other tokens, displaying the `{%value}` of the current point ([Line](Series/Line)), the `{%open}`, `{%high}`, `{%low}`, and `{%close}` values ([OHLC](Series/OHLC)), and so on.

Of course, these series-specific tokens work correctly only if all the series on the plot are of the same type or there is just one series, like in the sample below:

```
// enable html for the legend
plot.legend().useHtml(true);

// configure the format of legend items
plot.legend().itemsFormat(
  "<span style='color:#455a64;font-weight:600'>{%seriesName}: </span>" +
  "{%open} / {%high} / {%low} / {%close}"
);
```
{sample}STOCK\_Legend\_05{sample}

**2. Formatting Functions**

In formatting functions, the following fields are always available (?):

* `series` - the series object, which allows accessing methods of the series
* `x` – the date (X-value) of the current point

There are also series-specific fields: `value` ([Line](Series/Line)), the `{%open}`, `high`, `low`, and `close` ([OHLC](Series/OHLC)), and so on.

Formatting functions allow setting the text format of legend items even if there are multiple series of different types on the same plot, like in this sample:

```
// enable html for the legend
plot.legend().useHtml(true);

// configure the format of legend items
plot.legend().itemsFormat(function() {
  var series = this.series;
  if (series.getType() == "line") {
    return "<span style='color:#455a64;font-weight:600'>" +
           series.name() + ":</span> " + this.value;
  }
  if (series.getType() == "ohlc") {
    return "<span style='color:#455a64;font-weight:600'>" +
           series.name() + ":</span> " +
           this.open + " / " + this.high + " / " +
           this.low + " / " + this.close;
  }
});
```
{sample}STOCK\_Legend\_06{sample}

**2. Individual Items**

Finally, you can format the text of an individual legend item: combine the {api:?entry=legendItem}legendItem(){api} method of the series with the {api:anychart.core.utils.LegendItemSettings#format}format(){api} method and tokens or formatting functions. Read more: [Individual Legend Items](../Common_Settings/Legend/Individual_Legend_Items).

In this case, even with tokens you can achieve enough flexibility to apply series-specific settings to a legend representing series of different types. For example, here are two series, Line and OHLC, and their legend items are configured individually with the help of different tokens:

```
// create two series: line and ohlc
var line = plot.line(mapping);
var ohlc = plot.ohlc(mapping);

// enable html for legend items
line.legendItem().useHtml(true);
ohlc.legendItem().useHtml(true);

// configure the format of legend items
line.legendItem().format(
 "<span style='color:#455a64;font-weight:600'>{%seriesName}: " +
 "</span>{%value}"
);

ohlc.legendItem().format(
 "<span style='color:#455a64;font-weight:600'>{%seriesName}: " +
 "</span>{%open} / {%high} / {%low} / {%close}"
);   
```
{sample}STOCK\_Legend\_07{sample}


## Custom Items

* [Custom Legend Items](../Common_Settings/Legend/Individual_Legend_Items#custom_items)
* {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api}

...

```
// add a custom legend item 
plot.legend().itemsFormatter(function(legendItems) {
  legendItems.push({
    text: "/ Number of Series: " + plot.getSeriesCount() + " /",
    iconEnabled: false,
    fontColor: "#455a64",
    fontWeight: 600,
    fontStyle: "italic"
  });
  return legendItems;
});
```
{sample}STOCK\_Legend\_08{sample}