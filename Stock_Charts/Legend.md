{:index 6}

# Legend

## Overview

There are general settings that can be applied to legends of all chart types including AnyStock legend – see the [Common Settings: Legend](../Common_Settings/Legend/Overview) section. In this article, only special features of AnyStock legend are described: alternative default settings, extra text formatting options for the title and items, and so on.

Please note that AnyStock legend, unlike any other, is bound to the [plot](Chart_Plots) (not the chart). It is configured with the help of the {api:anychart.core.stock.Plot#legend}legend(){api} method of the plot and defined as an instance of the {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api} class.

## Default Settings

By default, each plot of a Stock chart has a legend, its items representing the series on the plot. In addition, the legend displays information about the points that are currently hovered over or, if none are hovered over, about the last points shown on the plot.

The text of a legend item includes the name of a series and, depending on the series type, the value or values of the current or last point. The legend title, enabled by default, shows the current or last date (X-value). See [Title Text Format](#title_text_format) and [Item Text Format](#item_text_format) sections to learn how to format the text of title and items.

In the following sample, there is a Stock chart with two plots and two default legends:

{sample}STOCK\_Legend\_01{sample}

## Enabling / Disabling

In AnyStock, the legend is enabled by default. To disable or enable it, pass `false` / `true` to the {api:anychart.core.stock.Plot#legend}legend(){api} method of the plot or to the {api:anychart.core.ui.Legend#enabled}enabled(){api} method of the legend:

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

The title of AnyStock legend is enabled by default: it shows the date (X-value) of the point that is currently hovered over or, if none is hovered over, about the last date shown on the plot.

The title is configured like the legend title of any other chart type – see the [Title and Separator](../Common_Settings/Legend/Title_and_Separator) article to learn more.

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

The {api:anychart.core.ui.Legend#titleFormat}titleFormat(){api} method can be also combined with and the following fields:

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

To learn how to configure legend items, read the [Legend Items](../Common_Settings/Legend/Legend_Items) article. In general, there is no difference between AnyStock settings and common settings, but AnyStock supports some extra text formatting options.

Legend items of Stock charts, like legend items of other multiple-series charts, represent series, but they can also show point-related information, which is updated on-the-fly. In particular, the default item text includes the name of the series and the value (or values) of its point that is currently hovered over or, if none is hovered over, of the last point shown on the plot.

To format the text of items, call the {api:anychart.core.ui.Legend#itemsFormat}itemsFormat(){api} method with either [tokens](../Common_Settings/Text_Formatters#string_tokens) or [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) – please note that both series- and point-related tokens / function fields are available.

**1. Tokens**

The following tokens can be applied to any legend:

* `{%seriesName}` – the name of the series
* `{%x}` – the date (X-value) of the current point

You can use other tokens supported by the given series type: for example, the [Line](Series/Line) allows displaying the `{%value}` of the current point, and ([OHLC](Series/OHLC)) supports the `{%open}`, `{%high}`, `{%low}`, and `{%close}` tokens.

Of course, these series-specific tokens work correctly only when all the series on the plot are of the same type or there is just one series, like in the sample below:

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

In formatting functions, the following fields are always available:

* `series` – the series object, which allows accessing methods of the series
* `x` – the date (X-value) of the current point

There are also series-specific fields: `value` ([Line](Series/Line)), `{%open}`, `high`, `low`, and `close` ([OHLC](Series/OHLC)), and so on.

Formatting functions allow setting the text format of legend items when there are multiple series of different types on the same plot, like in this sample:

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

You can format the text of a legend item individually: combine the {api:?entry=legendItem}legendItem(){api} method of the series with the {api:anychart.core.utils.LegendItemSettings#format}format(){api} method and tokens or formatting functions. Read more: [Individual Legend Items](../Common_Settings/Legend/Individual_Legend_Items).

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

Stock charts, as well as all other chart types, allow adding custom legend items to the default legend or creating fully custom legends. Read more in the [Custom Items](../Common_Settings/Legend/Individual_Legend_Items#custom_items) section.

To add a custom item, use the {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} method, which takes a function returning an array of items. The available settings are listed in {api:anychart.core.ui.Legend.LegendItemProvider}anychart.core.ui.Legend.LegendItemProvider{api}.

In the following sample, a custom item showing the number of series is added to the default legend:

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

## Standalone Legend

The [standalone legend](../Common_Settings/Legend/Standalone_Legend) is a [Standalone](../Dashboards/Standalones) – a building block, independent from the chart, that allows creating advanced data visualizations.

One of the ways to add items to a standalone legend is calling the {api:anychart.standalones.Legend#itemsSource}itemsSource(){api} method with an array of source items as a parameter. Normally, it takes an array of charts, which allows [binding one legend to multiple charts](../Common_Settings/Legend/Standalone_Legend#item_=_series_/_point).

In AnyStock, this method requires specifying an array of plots – thus, the legend is linked to **multiple plots**. Legend items, created automatically, represent the series on these plots.

**Note:** There might be multiple Stock charts in your data visualization. However, if you want to show series from different chart in one legend, you still have to specify their plots (and not the charts) as the source of items.

The sample below shows how to work with the standalone legend in AnyStock. There is a chart with two series on different plots and a single standalone legend, each legend item representing a series:

```
// create a standalone legend
var legend = anychart.standalones.legend();

// set the source of legend items
legend.itemsSource([plot1, plot2]);

// set the container for the legend
legend.container(stage);

// draw the legend
legend.draw();
```

{sample}STOCK\_Legend\_09{sample}