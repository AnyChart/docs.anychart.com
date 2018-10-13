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

The legend of Stock charts is enabled by default. To disable or enable it, pass `false` / `true` to the {api:anychart.core.stock.Plot#legend}legend(){api} method of the plot or to the {api:anychart.core.ui.Legend#enabled}enabled(){api} method of the legend:

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

* [Title and Separator](../Common_Settings/Legend/Title_and_Separator)
* [Tokens](../Common_Settings/Text_Formatters#string_tokens)
* [Formatting Functions](../Common_Settings/Text_Formatters#formatting_functions)
* {api:anychart.core.ui.Legend#titleFormat}titleFormat(){api}

tokens:

* `{%dataIntervalUnit}`
* `{%dataIntervalUnitCount}`
* `{%hoveredDate}`
* `{%value}`
* `{%rawValue}`

...

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

fields:

* `dataIntervalUnit`
* `dataIntervalUnitCount`
* `hoveredDate`
* `isGrouped`
* `value`
* `rawValue`

...

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

* [Legend Items](../Common_Settings/Legend/Legend_Items)
* [Tokens](../Common_Settings/Text_Formatters#string_tokens)
* [Formatting Functions](../Common_Settings/Text_Formatters#formatting_functions)
* {api:anychart.core.ui.Legend#itemsFormat}itemsFormat(){api}

always available:

* `{%seriesName}`
* `{%x}`

series-related:

* `{%value}`
* `{%open}`
* `{%high}`
* `{%low}`
* `{%close}`

...

```

```
{sample}STOCK\_Legend\_05{sample}

always available:

* `series`

series-related:

* value
* `open`
* `high`
* `low`
* `close`

...

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

* [Individual Legend Items](../Common_Settings/Legend/Individual_Legend_Items)
* {api:?entry=legendItem}legendItem(){api}
* {api:anychart.core.utils.LegendItemSettings#format}format(){api}

...

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