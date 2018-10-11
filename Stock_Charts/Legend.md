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

## Title Format

* `{%dataIntervalUnit}`
* `{%dataIntervalUnitCount}`
* `{%hoveredDate}`
* `{%value}`
* `{%rawValue}`

...

```
// enable html for the legend title
plot.legend().title().useHtml(true);

// set the format of the legend title
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

// set the format of the legend title
plot.legend().titleFormat(function() {
  var date = anychart.format.dateTime(this.value, "dd MMMM yyyy");
  return "<span style='color:#455a64;font-weight:600'>DATE: " +
         date + "</span>";
});
```
{sample}STOCK\_Legend\_04{sample}

## Item Text Format

```

```
{sample}STOCK\_Legend\_05{sample}

```

```
{sample}STOCK\_Legend\_06{sample}


## Custom Items

```

```
{sample}STOCK\_Legend\_07{sample}