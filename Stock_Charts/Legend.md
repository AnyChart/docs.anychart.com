{:index 6}

# Legend

## Overview

* [Legend](../Common_Settings/Legend/Overview)

## Default Settings

{sample}STOCK\_Legend\_01{sample}

## Enabling / Disabling

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

{sample}STOCK\_Legend\_02{sample}

## Title Text Format

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
  "<span style='color:#455a64;font-weight:600'>DATE: {%value}</span>"
);
```
{sample}STOCK\_Legend\_03{sample}

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

* ???
* `{%seriesName}`
* `{%x}`
* `{%open}`
* `{%high}`
* `{%low}`
* `{%close}`

```

```
{sample}STOCK\_Legend\_05{sample}

* ???
* `series`
* `open`
* `high`
* `low`
* `close`

```
// enable html for the legend
plot.legend().useHtml(true);

// configure the format of legend items
plot.legend().itemsFormat(function() {
  console.log(this);
  var series = this.series;
  if (series.Id == "line") {
    return "<span style='color:#455a64;font-weight:600'>" +
           series.name() + ":</span> " + this.value;
  }
  if (series.Id == "ohlc") {
    return "<span style='color:#455a64;font-weight:600'>" +
           series.name() + ":</span> " +
           this.open + " / " + this.high + " / " +
           this.low + " / " + this.close;
  }
});
```
{sample}STOCK\_Legend\_06{sample}


## Custom Items

```

```
{sample}STOCK\_Legend\_07{sample}