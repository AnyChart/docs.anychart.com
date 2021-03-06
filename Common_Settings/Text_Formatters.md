# Text Formatters

## Overview

Sometimes it might be necessary to display any text with the points on a chart for some reasons. That's when you need to use the {api:anychart.core.ui.LabelsFactory#format}format(){api} method.

## String Tokens

String tokens are special string values you can use in text formatters instead of using formatting functions described below. They are suitable when you need only basic formatting, but they cover most of the cases.

Here is how tokens can be used in tooltips, series labels or axes labels:

```
anychart.onDocumentReady(function () {
  // chart type
  var chart = anychart.column([
  {x: 'January', value: -10, season:"Winter"},
  {x: 'February', value: -8, season:"Winter"},
  {x: 'March', value: -4, season:"Spring"},
  {x: 'April', value: 1, season:"Spring"},  
  {x: 'May', value: 7, season:"Spring"},  
  {x: 'June', value: 12, season:"Summer"}
    ]);

  // set tooltip text template
  var tooltip = chart.getSeries(0).tooltip();
  tooltip.title().text("Content");
  tooltip.format("{%x} is a {%season} month\nLowest temp: {%value}&deg;C");

  // set series labels text template
  var seriesLabels = chart.getSeries(0).labels().enabled(true);
  seriesLabels.format("{%x}");
  
  // format axis labels
  var axisLabels = chart.xAxis().labels();
  axisLabels.useHtml(true);
  axisLabels.format("<b style='color:black;'>{%value}</b>");

  // draw
  chart.container("container");
  chart.draw();
});
```

A live sample of chart tooltip, labels and axes labels formatted using string tokens:

{sample}CS\_format\_00{sample}

### Tokens List

Here is the list of the tokens you can use in formatting strings. Note that some tokens don't work universally: you can't use {%bubbleSize} outside of [Bubble series](../Basic_Charts/Bubble_Chart) or {%close} outside of [Candlestick](../Basic_Charts/Japanese_Candlestick_Chart) or [OHLC](../Basic_Charts/OHLC_Chart) and so on. 

The full list of tokens is available in API: {api:anychart.enums.Statistics}anychart.enums.Statistics{api}

<table width="700px" class="dtTABLE">
<tr>
<th>Token</th>
<th>Description</th>
</tr>
<tr>
<td>{%average}</td><td>Average value.</td>
</tr>
<tr>
<td>{%value}</td><td>The y value of this point.</td>
</tr>
<tr>
<td>{%yValue}</td><td>The y value of this point.</td>
</tr>
<tr>
<td>{%yPercentOfSeries}</td><td>The percentage of the series this point represents.</td>
</tr>
<tr>
<td>{%yPercentOfTotal}</td><td>The percentage of all the series on the chart this point represents.</td>
</tr>
<tr>
<td>{%xValue}</td><td>The x value of this point (Scatter Plot charts).</td>
</tr>
<tr>
<td>{%bubbleSize}</td><td>The bubble size value of this point (Bubble chart).</td>
</tr>
<tr>
<td>{%bubbleSizePercentOfCategory}</td><td>The percentage of all the points with the same name this point represents (Categorized charts).</td>
</tr>
<tr>
<td>{%bubbleSizePercentOfSeries}</td><td>The percentage of the series this point represents.</td>
</tr>
<tr>
<td>{%bubbleSizePercentOfTotal}</td><td>The percentage of all the series on the chart this point represents.</td>
</tr>
<tr>
<td>{%index}</td><td>The index of this point in the series this point represents (zero-based).</td>
</tr>
<tr>
<td>{%seriesName}</td><td>The name of this series.</td>
</tr>
<tr>
<td>{%seriesYSum}</td><td>The sum of all the points y values.</td>
</tr>
<tr>
<td>{%seriesYAverage}</td><td>The average y value of all the points within this series.</td>
</tr>
<tr>
<td>{%seriesPointCount}</td><td>The number of points in this series.</td>
</tr>
<tr>
<td>{%seriesBubbleMaxSize}</td><td>The maximal bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%seriesBubbleMinSize}</td><td>The minimal bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%seriesBubbleSizeAverage}</td><td>The average bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%seriesBubbleSizeMedian}</td><td>The median bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%seriesBubbleSizeMode}</td><td>The mode bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%seriesBubbleSizeSum}</td><td>The sum of all the points bubble sizes (Bubble chart).</td>
</tr>
<tr>
<td>{%SeriesFirstXValue}</td><td>The x value of the first point in this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%seriesFirstYValue}</td><td>The y value of the first point in this series.</td>
</tr>
<tr>
<td>{%seriesLastXValue}</td><td>The x value of the last point in this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%seriesLastYValue}</td><td>The y value of the first point in this series.</td>
</tr>
<tr>
<td>{%seriesXAverage}</td><td>The average x value of all the points within this series.</td>
</tr>
<tr>
<td>{%seriesXAxisName}</td><td>The title text of the X Axis.</td>
</tr>
<tr>
<td>{%seriesXMax}</td><td>The maximal x value of all the elements within this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%seriesXMedian}</td><td>The median x value of all the points within this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%seriesXMin}</td><td>The minimal x value of all the elements within this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%seriesXMode}</td><td>The mode x value of all the points within this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%seriesXSum}</td><td>The sum of all the points x values (Scatter plot charts).</td>
</tr>
<tr>
<td>{%seriesYAxisName}</td><td>The title text of the Y Axis.</td>
</tr>
<tr>
<td>{%name}</td><td>The name of this point.</td>
</tr>
<tr>
<td>{%high}</td><td>The high value of this point (OHLC, Candlestick).</td>
</tr>
<tr>
<td>{%low}</td><td>The low value of this point (OHLC, Candlestick).</td>
</tr>
<tr>
<td>{%open}</td><td>The open value of this point (OHLC, Candlestick).</td>
</tr>
<tr>
<td>{%close}</td><td>The close value of this point (OHLC, Candlestick).</td>
</tr>
<tr>
<td>{%seriesYMax}</td><td>The maximal y value of all the elements within this series.</td>
</tr>
<tr>
<td>{%seriesYMin}</td><td>The minimal y value of all the elements within this series.</td>
</tr>
<tr>
<td>{%seriesYMedian}</td><td>The median y value of all the points within this series.</td>
</tr>
<tr>
<td>{%seriesYMode}</td><td>The mode y value of all the points within this series.</td>
</tr>
<tr>
<td>{%rangeStart}</td><td>The starting value of this point (Range charts).</td>
</tr>
<tr>
<td>{%rangeEnd}</td><td>The ending value of this point (Range charts).</td>
</tr>
<tr>
<td>{%seriesYRangeMax}</td><td>The maximal range in this series (Range charts).</td>
</tr>
<tr>
<td>{%seriesYRangeMin}</td><td>The minimal range in this series (Range charts).</td>
</tr>
<tr>
<td>{%seriesYRangeSum}</td><td>The sum of all ranges in this series (Range charts).</td>
</tr>
<tr>
<td>{%range}</td><td>The range of this point (RangeEnd - RangeStart).</td>
</tr>
<tr>
<td>{%dataPlotYSum}</td><td>The sum of all the points y values.</td>
</tr>
<tr>
<td>{%dataPlotYMax}</td><td>The maximal of all the points y values.</td>
</tr>
<tr>
<td>{%dataPlotYMin}</td><td>The minimal of all the points y values.</td>
</tr>
<tr>
<td>{%dataPlotYAverage}</td><td>The average y value of all the points.</td>
</tr>
<tr>
<td>{%dataPlotPointCount}</td><td>The number of the points within the chart.</td>
</tr>
<tr>
<td>{%dataPlotBubbleMaxSize}</td><td>The maximal of all the points bubble sizes (Bubble chart).</td>
</tr>
<tr>
<td>{%dataPlotBubbleMinSize}</td><td>The minimal of all the points bubble sizes (Bubble chart).</td>
</tr>
<tr>
<td>{%dataPlotBubbleSizeAverage}</td><td>The average bubble size of all the points (Scatter plot charts).</td>
</tr>
<tr>
<td>{%dataPlotBubbleSizeSum}</td><td>The sum of all the points bubble sizes (Bubble chart).</td>
</tr>
<tr>
<td>{%dataPlotSeriesCount}</td><td>The number of the series within the chart.</td>
</tr>
<tr>
<td>{%dataPlotXAverage}</td><td>The average x value of all the points (Scatter plot charts).</td>
</tr>
<tr>
<td>{%dataPlotXMax}</td><td>The maximal of all the points x values (Scatter plot chart).</td>
</tr>
<tr>
<td>{%dataPlotXMin}</td><td>The minimal of all the points x values (Scatter plot chart).</td>
</tr>
<tr>
<td>{%dataPlotXSum}</td><td>The sum of all the points x values (Scatter plot charts).</td>
</tr>
<tr>
<td>{%dataPlotYRangeMax}</td><td>The maximal of the ranges of the points within the chart.</td>
</tr>
<tr>
<td>{%dataPlotYRangeMin}</td><td>The minimal of the ranges of the points within the chart.</td>
</tr>
<tr>
<td>{%dataPlotYRangeSum}</td><td>The sum of the ranges of the points within the chart.</td>
</tr>
<tr>
<td>{%axisName}</td><td>The name of the axis.</td>
</tr>
<tr>
<td>{%axisScaleMax}</td><td>The maximum value on the axis.</td>
</tr>
<tr>
<td>{%axisScaleMin}</td><td>The minimum value on the axis.</td>
</tr>
<tr>
<td>{%categoryName}</td><td>The name of the category.</td>
</tr>
<tr>
<td>{%categoryYAverage}</td><td>The name of the category.</td>
</tr>
<tr>
<td>{%categoryYMedian}</td><td>The median of all the points within this category.</td>
</tr>
<tr>
<td>{%categoryYMode}</td><td>The mode of all the points within this category.</td>
</tr>
<tr>
<td>{%categoryYPercentOfTotal}</td><td>The percent of all the data on the chart this category represents.</td>
</tr>
<tr>
<td>{%categoryYRangeAverage}</td><td>The average range in this category (Range charts).</td>
</tr>
<tr>
<td>{%categoryYRangeMax}</td><td>The maximal range in this category (Range charts).</td>
</tr>
<tr>
<td>{%categoryYRangeMedian}</td><td>The median range in this category (Range charts).</td>
</tr>
<tr>
<td>{%categoryYRangeMin}</td><td>The minimal range in this category (Range charts).</td>
</tr>
<tr>
<td>{%categoryYRangeMode}</td><td>The mode range in this category (Range charts).</td>
</tr>
<tr>
<td>{%categoryYRangePercentOfTotal}</td><td>Category Y range percent of total (Range charts).</td>
</tr>
<tr>
<td>{%categoryYRangeSum}</td><td>The sum of all ranges in this category (Range charts).</td>
</tr>
<tr>
<td>{%categoryYSum}</td><td>The sum of all the points within this category.</td>
</tr>
<tr>
<td>{%dataPlotMaxYSumSeriesName}</td><td>The name of the series with a maximal sum of the points y values.</td>
</tr>
<tr>
<td>{%dataPlotMaxYValuePointName}</td><td>The name of the point with a maximal of all the points y values.</td>
</tr>
<tr>
<td>{%dataPlotMaxYValuePointSeriesName}</td><td>The name of the series with a maximal of all the points y values.</td>
</tr>
<tr>
<td>{%dataPlotMinYSumSeriesName}</td><td>The name of the series with a minimal sum of the points y values.</td>
</tr>
<tr>
<td>{%dataPlotMinYValuePointName}</td><td>The name of the point with a minimal of all the points y values.</td>
</tr>
<tr>
<td>{%dataPlotMinYValuePointSeriesName}</td><td>The name of the series with a minimal of all the points y values.</td>
</tr>
<tr>
<td>{%xPercentOfSeries}</td><td>The percentage of the series this point represents (Scatter Plot charts).</td>
</tr>
<tr>
<td>{%xPercentOfTotal}</td><td>The percentage of all the series on the chart this point represents.</td>
</tr>
<tr>
<td>{%yPercentOfCategory}</td><td>The percentage of all the points with the same name this point represents.</td>
</tr>
</table>

## Formatting Parameters

Along with usage of special tokens which help to define the source of text, you can set options which help to format numeric values in the text. Options follow the token in curly brackets. 
  
Here is a simple code with tokens:

```
// setting the tooltips with formatting
var columnTooltip = columnSeries.tooltip();
columnTooltip.format("{%seriesName}: {%value}{groupsSeparator:', decimalsCount:3}");

var lineTooltip = lineSeries.tooltip();
lineTooltip.format("{%seriesName}: {%value}{decimalsCount:1}%");
```

Here is a chart with a tooltip configured using tokens with options:

{sample}CS\_format\_01{sample}

### Formatting Parameters List  

Here is the list of formatting parameters that allow organizing your data presentation in the way you prefer. In the [Samples](#samples) subsection, you can find samples showing how they work.
  
<table width="700px" class="dtTABLE">
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>decimalsCount</td><td>numeric</td><td>The number of visible decimal characters (including characters for the integer values).</td>
</tr>
<tr>
<td>decimalPoint</td><td>boolean</td><td>Sets a character for separating decimal part of a number.</td>
</tr>
<tr>
<td>groupsSeparator</td><td>string</td><td>Sets a character for separating thousands of an integer number.</td>
</tr>
<tr>
<td>useBracketsForNegativeuseNegativeSign</td><td>boolean</td><td>Controls the "-" sign.</td>
</tr>
<tr>
<td>zeroFillDecimals</td><td>boolean</td><td>Hides or displays decimal characters for integer values.</td>
</tr>
<tr>
<td>scale</td><td>Scaling string</td><td>Sets value scaling.</td>
</tr>
<tr>
<td>dateTimeFormat</td><td>Datetime format string</td><td>Sets datetime format.</td>
</tr>
<tr>
<td>type</td><td>`datetime`, `time`, `date`, `number`, `string`, `percent`</td><td>Sets value type, see [Type](#type) section below.</td>
</tr></table>

### Date/Time Syntax

The `dateTimeFormat` formatting parameter allows setting date/time patterns. Use the following syntax:

<table><tr><th>Symbol</th><th>Meaning</th><th>Presentation</th><th>Example</th>
<tr><td>G</td><td>era designator</td><td>AD</td></tr>
<tr><td>y</td><td>year</td><td>1996</td></tr>
<tr><td>Q</td><td>quarter</td><td>Q3 & 3rd quarter</td></tr>
<tr><td>M</td><td>month in year</td><td>July & 07</td></tr>
<tr><td>L</td><td>month in year (standalone)</td><td>July & 07</td></tr>
<tr><td>d</td><td>day in month</td><td>10</td></tr>
<tr><td>h</td><td>hour in am/pm (1~12)</td><td>12</td></tr>
<tr><td>H</td><td>hour in day (0~23)</td><td>0</td></tr>
<tr><td>m</td><td>minute in hour</td><td>30</td></tr>
<tr><td>s</td><td>second in minute</td><td>55</td></tr>
<tr><td>S</td><td>fractional second</td><td>978</td></tr>
<tr><td>E</td><td>day of week</td><td>Tue & Tuesday</td></tr>
<tr><td>c</td><td>day of week (standalone)</td><td>2 & Tues & Tuesday & T</td></tr>
<tr><td>w</td><td>week in year</td><td>27</td></tr>
<tr><td>a</td><td>am/pm marker</td><td>PM</td></tr>
<tr><td>k</td><td>hour in day (1~24)</td><td>24</td></tr>
<tr><td>K</td><td>hour in am/pm (0~11)</td><td>0</td></tr>
<tr><td>z</td><td>time zone</td><td>Pacific Standard Time</td></tr>
<tr><td>Z</td><td>time zone (RFC 822)</td><td>-0800</td></tr>
<tr><td>v</td><td>time zone (generic)</td><td>America/Los_Angeles</td></tr>
<tr><td>V</td><td>time zone</td><td>Los Angeles Time</td></tr>
<tr><td>'</td><td>escape for text</td><td>'Date='</td></tr>
<tr><td>'</td><td>single quote</td><td>'o''clock'</td></tr></table>

### Samples

In the next sample we have formatted the scale according to the Old British currency system (before 1971), when \u00a31 was equivalent to 20 shillings and 1 shilling = 12 pence.

```
var columnTooltip = columnSeries.tooltip();

// scaling value
columnTooltip.format("{%seriesName}: {%value}{scale:(1)(12)(20)|( p)( s)( \u00a3)}");
```  

Here is a live sample with such settings:

{sample}CS\_format\_02{sample}

If you explore the sample, you can see that all values are set in pence, but the shown value is formatted.

On the sample below there is another popular case of scale formatting shown: a thousandfold increase.

```
// string for formatting tooltips
var formatter = "{%seriesName}: {%value}{scale:(1)(1000)(1000)(1000)|( d)( th)( M)( B)}";
```  

Here is a live sample with such settings:

{sample}CS\_format\_03{sample}

## Type

AnyChart engine tries to determine the best way to format values and provide the best defaults whenever possible. Also, when formatting parameters are used values are implicitly converted to another type.

In the following example different types of conversion and type formatting are shown:

```
// format the value and implicitly convert to date
chart.xAxis().labels().format('{%Value}{dateTimeFormat:MM-dd}');

// enable labels and explicitly specify time type
chart.labels().enabled(true);
chart.labels().format('{%x}{type:time}'); 
// explictly specify type in the title
chart.tooltip().titleFormat('{%x}{type:date}'); 
// use another type in the tooltip text
chart.tooltip().format('{%x}{type:number}'); 
```

{sample}CS\_format\_03\_1{sample}

### Escaping symbols

If you want to use a symbol which is already reserved in token's parser, you need to use double slash (\\) before this symbol to prevent it from been parsed.

```
var tooltip = series.tooltip();

// use coma as the thousands separator
tooltip.format("{%value}{groupsSeparator:\\,}");
```  

Here is a live sample with such settings:

{sample}CS\_format\_04{sample}

## Formatting functions

For complex formatting use formatting function instead of token strings. Formatting functions are set like this:

```
// formatting using a function
var lineTooltip = lineSeries.tooltip();
lineTooltip.format(function() {
  return "Income: " + this.value/100 + "%";
});
```

Here is a live sample with such settings:

{sample}CS\_format\_05{sample}

**Note**: you can use {api:anychart.format#number}anychart.format.number(){api}, {api:anychart.format#dateTime}anychart.format.dateTime(){api} and other members of {api:anychart.format}anychart.format{api} namespace to format values in formatting functions:

```
var currentLabels = chart.labels();
// format the number
currentLabels.format(function () {
    return anychart.format.number(this.value, 3, ".", ",")
});
```

Here is a sample where {api:anychart.format#number}anychart.format.number(){api} is used to present label in a desired way:

{sample}CS\_format\_05\_1{sample}

### Default fields

There are some standard fields available in formatters depending on a chart type. Below you can see a table with all chart types and fields available for them by default.

<table class="dtTABLE">
<tr>
<th>Chart type(s)</th><th>Default fields of {api:anychart.core.ui.LabelsFactory#format}series.labels().format(){api}</th>
</tr>
<tr>
<td>Area<br>Bar<br>Column<br>Error<br>Marker<br>Percent Stacked Area<br>Percent Spline Area<br>Percent StepLine Area<br>Percent Stacked Bar<br>Percent Stacked Column<br>Polar<br>Radar<br>Sparkline<br>Stacked Line<br>Stacked Spline</td>
<td>x<br>value<br>seriesName<br>index</td>
</tr>
<tr>
<td>Range Line<br>Range Spline Area<br>Range Column<br>Range Bar</td>
<td>x<br>seriesName<br>index<br>high<br>low</td>
</tr>
<tr>
<td>
Scatter
</td>
<td>
x<br>seriesName<br>index<br>value<br>valueLowerError<br>valueUpperError<br>xLowerError<br>xUpperError
</td>
</tr>
<tr>
<td>Bubble</td>
<td>x<br>value<br>seriesName<br>size</td>
</tr>
<tr>
<td>Box</td>
<td>x<br>seriesName<br>index<br>lowest<br>q1<br>median<br>q3<br>highest<br>outliers</td>
</tr>
<tr>
<td>Japanese Candlestick<br>Open-High-Low-Close</td>
<td>x<br>open<br>high<br>low<br>close<br>seriesName<br>index</td>
</tr>
<tr>
<td>Pie/Donut<br>Funnel<br>Pyramid
</td>
<td>**Note!** As those types have an only series by default,<br> you should use the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with chart.label().<br>x<br>value<br>index</td>
</tr>
</table>

First of all, enable the labels. Then set the fields of values you want those labels to show using the {api:anychart.core.ui.LabelsFactory#format}format(){api} function according to the table above.

```
// enable chart labels
chart.labels(true);

// format labels
chart.labels().format(function() {
    return(this.seriesName + ": $" + this.value);
});
```

{sample}CS\_format\_06{sample}

### Extra fields

The number and variety of default fields might be not enough in some cases. Sometimes it's necessary to show some extra information. In this case you should use one of the following methods: {api:anychart.format.Context#getStat}getStat(){api}, {api:anychart.format.Context#getData}getData(){api} or {api:anychart.format.Context#getMeta}getMeta(){api}.
Which one to use depends on the unique situation.

#### getData

Using these methods, you can display the values from the extra parameters, if you have added any to the series or to the data. Look at the sample and its code below:

```
// create box chart series with our data
var series_1 = chart.box(data_1);
var series_2 = chart.box(data_2);

// enable the labels
var labels = series_2.labels();
labels.enabled(true);

// use format
labels.format(function() {
    return(this.getData("extra_inf"));
});
```

{sample}CS\_format\_07{sample}

In this sample we have added some extra information to the data: we defined the `"extra\_inf"` parameter of the "redundant" value for the second point of the second series and displayed it, using {api:anychart.format.Context#getData}getData(){api}.

Managing additional information for chart tooltips works pretty much the same as it does for chart labels. Define extra parameter in your data set and use the name of your parameter as a value for {api:anychart.format.Context#getData}getData(){api} method.

```
// map data for series
var seriesData = dataSet.mapAs({
    // set data row for x parameter
    x: 0,
    // set data row for value parameter
    value: 1,
    // set data row for custom parameter
    yoy: 2
});

// set data for series
var series = chart.column(seriesData);
series.name("Unique users in 2013");

// series tooltip settings
var tooltip = series.tooltip();

// adjust tooltip text
tooltip.format(function() {
    return 
        this.seriesName + ": " + this.value + " millions" +
        "\nYear over year: " + this.getData("yoy") + "%";
});
```

Here is a sample with additional information in the chart tooltip. Full information on tooltip settings can be found in [Tooltip article](Tooltip).

{sample}CS\_format\_08{sample}

####Series Meta

You can add extra parameters not only to the data points but to series too. Let's add an extra parameter as to the series of OHLC chart and show it with format.

To add any parameter to the meta of the series, you need to set the parameter name first and then its value, which can be of any type.

```
// set first series data

var series_1 = chart.ohlc([
    {x: Date.UTC(2007, 7, 28), open: 511.53, high: 514.98, low: 505.79, close :506.40},
    {x: Date.UTC(2007, 7, 30), open: 517.36, high: 518.40, low: 516.58, close: 516.80},
    {x: Date.UTC(2007, 8, 1), open: 513.10, high: 516.50, low: 511.47, close: 515.25},
]);
series_1.meta("company", "ACME Corp.");
 
// set second series data

var series_2 = chart.ohlc([
    {x: Date.UTC(2007, 7, 28), open: 522.95, high: 523.10, low: 522.50, close: 522.52},
    {x: Date.UTC(2007, 7, 30), open: 524.49, high: 524.91, low: 524.38, close: 524.61},
    {x: Date.UTC(2007, 8, 1), open: 518.81, high: 520.03, low: 517.51, close: 519.73}
]);
series_2.meta("company", "Duff B. Corp.");

// format

var labels_1 = series_1.labels();
labels_1.format(function() {
    return("C: "+this.series.meta("company")+"\nL: "+this.low+"\nH: "+this.high);
});

var labels_2 = series_2.labels();
labels_2.format(function() {
    return("C: "+this.series.meta("company")+"\nL: "+this.low+"\nH: "+this.high);
});
```

{sample}CS\_format\_09{sample}

####getStat

This method is to be used when you want to obtain various statistical information from a chart. Read more about this in [Statistics](Statistics) article.

Here is a sample of the {api:anychart.format.Context#getStat}getStat(){api} method used in a Pie chart.

```
// format
var labels = chart.labels();
labels.format(function() {
    return((this.getData("value"))+"(of "+this.getStat("sum")) + ")";
});
```

{sample}CS\_format\_10{sample}