# Text Formatters

## Overview

Sometimes it might be necessary to display any text with the points on a chart for some reasons. That's when you need to use the {api:anychart.core.ui.LabelsFactory#format}format(){api} method.

## String Tokens

String tokens are special string values you can use in text formatters instead of using formatting functions described below. They are suitable when you need only basic formatting, but they cover most of the cases.

Here is how tokens can be used in tooltips, series labels or axes labels:

```
anychart.onDocumentReady(function() {
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
  tooltip.format("{%x} is a {%season} month\nLowest temp: {%Value}°C");

  // set series labels text template
  var seriesLabels = chart.getSeries(0).labels().enabled(true);
  seriesLabels.format("{%x}");
  
  // format axis labels
  var axisLabels = chart.xAxis().labels();
  axisLabels.useHtml(true);
  axisLabels.format("<b style='color:black;'>{%Value}</b>");

  // draw
  chart.container("container");
  chart.draw();
});
```

A live sample of chart tooltip, labels and axes labels formatted using string tokens:

{sample}CS\_format\_00{sample}

### Tokens List

Here is a list of the tokens you can use in formatting strings. Note that some tokens don't work universally: you can't use {%BubbleSize} outside of [Bubble series](../Basic_Charts/Bubble_Chart) or {%Close} outside of [Candlestick](../Basic_Charts/Japanese_Candlestick_Chart) or [OHLC](../Basic_Charts/OHLC_Chart) and so on. 

The full list of tokens is available in API: {api:anychart.enums.Statistics}anychart.enums.Statistics{api}

<table width="700px" class="dtTABLE">
<tr>
<th>Token</th>
<th>Description</th>
</tr>
<tr>
<td>{%Average}</td><td>Average value.</td>
</tr>
<tr>
<td>{%Value}</td><td>The y value of this point.</td>
</tr>
<tr>
<td>{%YValue}</td><td>The y value of this point.</td>
</tr>
<tr>
<td>{%YPercentOfSeries}</td><td>The percentage of the series this point represents.</td>
</tr>
<tr>
<td>{%YPercentOfTotal}</td><td>The percentage of all the series on the chart this point represents.</td>
</tr>
<tr>
<td>{%XValue}</td><td>The x value of this point (Scatter Plot charts).</td>
</tr>
<tr>
<td>{%BubbleSize}</td><td>The bubble size value of this point (Bubble chart).</td>
</tr>
<tr>
<td>{%BubbleSizePercentOfCategory}</td><td>The percentage of all the points with the same name this point represents (Categorized charts).</td>
</tr>
<tr>
<td>{%BubbleSizePercentOfSeries}</td><td>The percentage of the series this point represents.</td>
</tr>
<tr>
<td>{%BubbleSizePercentOfTotal}</td><td>The percentage of all the series on the chart this point represents.</td>
</tr>
<tr>
<td>{%Index}</td><td>The index of this point in the series this point represents (zero-based).</td>
</tr>
<tr>
<td>{%SeriesName}</td><td>The name of this series.</td>
</tr>
<tr>
<td>{%SeriesYSum}</td><td>The sum of all the points y values.</td>
</tr>
<tr>
<td>{%SeriesYAverage}</td><td>The average y value of all the points within this series.</td>
</tr>
<tr>
<td>{%SeriesPointCount}</td><td>The number of points in this series.</td>
</tr>
<tr>
<td>{%SeriesBubbleMaxSize}</td><td>The maximal bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%SeriesBubbleMinSize}</td><td>The minimal bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%SeriesBubbleSizeAverage}</td><td>The average bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%SeriesBubbleSizeMedian}</td><td>The median bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%SeriesBubbleSizeMode}</td><td>The mode bubble size value of all the points within this series (Bubble chart).</td>
</tr>
<tr>
<td>{%SeriesBubbleSizeSum}</td><td>The sum of all the points bubble sizes (Bubble chart).</td>
</tr>
<tr>
<td>{%SeriesFirstXValue}</td><td>The x value of the first point in this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%SeriesFirstYValue}</td><td>The y value of the first point in this series.</td>
</tr>
<tr>
<td>{%SeriesLastXValue}</td><td>The x value of the last point in this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%SeriesLastYValue}</td><td>The y value of the first point in this series.</td>
</tr>
<tr>
<td>{%SeriesXAverage}</td><td>The average x value of all the points within this series.</td>
</tr>
<tr>
<td>{%SeriesXAxisName}</td><td>The title text of the X Axis.</td>
</tr>
<tr>
<td>{%SeriesXMax}</td><td>The maximal x value of all the elements within this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%SeriesXMedian}</td><td>The median x value of all the points within this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%SeriesXMin}</td><td>The minimal x value of all the elements within this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%SeriesXMode}</td><td>The mode x value of all the points within this series (Scatter plot charts).</td>
</tr>
<tr>
<td>{%SeriesXSum}</td><td>The sum of all the points x values (Scatter plot charts).</td>
</tr>
<tr>
<td>{%SeriesYAxisName}</td><td>The title text of the Y Axis.</td>
</tr>
<tr>
<td>{%Name}</td><td>The name of this point.</td>
</tr>
<tr>
<td>{%High}</td><td>The high value of this point (OHLC, Candlestick).</td>
</tr>
<tr>
<td>{%Low}</td><td>The low value of this point (OHLC, Candlestick).</td>
</tr>
<tr>
<td>{%Open}</td><td>The open value of this point (OHLC, Candlestick).</td>
</tr>
<tr>
<td>{%Close}</td><td>The close value of this point (OHLC, Candlestick).</td>
</tr>
<tr>
<td>{%SeriesYMax}</td><td>The maximal y value of all the elements within this series.</td>
</tr>
<tr>
<td>{%SeriesYMin}</td><td>The minimal y value of all the elements within this series.</td>
</tr>
<tr>
<td>{%SeriesYMedian}</td><td>The median y value of all the points within this series.</td>
</tr>
<tr>
<td>{%SeriesYMode}</td><td>The mode y value of all the points within this series.</td>
</tr>
<tr>
<td>{%RangeStart}</td><td>The starting value of this point (Range charts).</td>
</tr>
<tr>
<td>{%RangeEnd}</td><td>The ending value of this point (Range charts).</td>
</tr>
<tr>
<td>{%SeriesYRangeMax}</td><td>The maximal range in this series (Range charts).</td>
</tr>
<tr>
<td>{%SeriesYRangeMin}</td><td>The minimal range in this series (Range charts).</td>
</tr>
<tr>
<td>{%SeriesYRangeSum}</td><td>The sum of all ranges in this series (Range charts).</td>
</tr>
<tr>
<td>{%Range}</td><td>The range of this point (RangeEnd - RangeStart).</td>
</tr>
<tr>
<td>{%DataPlotYSum}</td><td>The sum of all the points y values.</td>
</tr>
<tr>
<td>{%DataPlotYMax}</td><td>The maximal of all the points y values.</td>
</tr>
<tr>
<td>{%DataPlotYMin}</td><td>The minimal of all the points y values.</td>
</tr>
<tr>
<td>{%DataPlotYAverage}</td><td>The average y value of all the points.</td>
</tr>
<tr>
<td>{%DataPlotPointCount}</td><td>The number of the points within the chart.</td>
</tr>
<tr>
<td>{%DataPlotBubbleMaxSize}</td><td>The maximal of all the points bubble sizes (Bubble chart).</td>
</tr>
<tr>
<td>{%DataPlotBubbleMinSize}</td><td>The minimal of all the points bubble sizes (Bubble chart).</td>
</tr>
<tr>
<td>{%DataPlotBubbleSizeAverage}</td><td>The average bubble size of all the points (Scatter plot charts).</td>
</tr>
<tr>
<td>{%DataPlotBubbleSizeSum}</td><td>The sum of all the points bubble sizes (Bubble chart).</td>
</tr>
<tr>
<td>{%DataPlotSeriesCount}</td><td>The number of the series within the chart.</td>
</tr>
<tr>
<td>{%DataPlotXAverage}</td><td>The average x value of all the points (Scatter plot charts).</td>
</tr>
<tr>
<td>{%DataPlotXMax}</td><td>The maximal of all the points x values (Scatter plot chart).</td>
</tr>
<tr>
<td>{%DataPlotXMin}</td><td>The minimal of all the points x values (Scatter plot chart).</td>
</tr>
<tr>
<td>{%DataPlotXSum}</td><td>The sum of all the points x values (Scatter plot charts).</td>
</tr>
<tr>
<td>{%DataPlotYRangeMax}</td><td>The maximal of the ranges of the points within the chart.</td>
</tr>
<tr>
<td>{%DataPlotYRangeMin}</td><td>The minimal of the ranges of the points within the chart.</td>
</tr>
<tr>
<td>{%DataPlotYRangeSum}</td><td>The sum of the ranges of the points within the chart.</td>
</tr>
<tr>
<td>{%AxisName}</td><td>The name of the axis.</td>
</tr>
<tr>
<td>{%AxisScaleMax}</td><td>The maximum value on the axis.</td>
</tr>
<tr>
<td>{%AxisScaleMin}</td><td>The minimum value on the axis.</td>
</tr>
<tr>
<td>{%CategoryName}</td><td>The name of the category.</td>
</tr>
<tr>
<td>{%CategoryYAverage}</td><td>The name of the category.</td>
</tr>
<tr>
<td>{%CategoryYMedian}</td><td>The median of all the points within this category.</td>
</tr>
<tr>
<td>{%CategoryYMode}</td><td>The mode of all the points within this category.</td>
</tr>
<tr>
<td>{%CategoryYPercentOfTotal}</td><td>The percent of all the data on the chart this category represents.</td>
</tr>
<tr>
<td>{%CategoryYRangeAverage}</td><td>The average range in this category (Range charts).</td>
</tr>
<tr>
<td>{%CategoryYRangeMax}</td><td>The maximal range in this category (Range charts).</td>
</tr>
<tr>
<td>{%CategoryYRangeMedian}</td><td>The median range in this category (Range charts).</td>
</tr>
<tr>
<td>{%CategoryYRangeMin}</td><td>The minimal range in this category (Range charts).</td>
</tr>
<tr>
<td>{%CategoryYRangeMode}</td><td>The mode range in this category (Range charts).</td>
</tr>
<tr>
<td>{%CategoryYRangePercentOfTotal}</td><td>Category Y range percent of total (Range charts).</td>
</tr>
<tr>
<td>{%CategoryYRangeSum}</td><td>The sum of all ranges in this category (Range charts).</td>
</tr>
<tr>
<td>{%CategoryYSum}</td><td>The sum of all the points within this category.</td>
</tr>
<tr>
<td>{%DataPlotMaxYSumSeriesName}</td><td>The name of the series with a maximal sum of the points y values.</td>
</tr>
<tr>
<td>{%DataPlotMaxYValuePointName}</td><td>The name of the point with a maximal of all the points y values.</td>
</tr>
<tr>
<td>{%DataPlotMaxYValuePointSeriesName}</td><td>The name of the series with a maximal of all the points y values.</td>
</tr>
<tr>
<td>{%DataPlotMinYSumSeriesName}</td><td>The name of the series with a minimal sum of the points y values.</td>
</tr>
<tr>
<td>{%DataPlotMinYValuePointName}</td><td>The name of the point with a minimal of all the points y values.</td>
</tr>
<tr>
<td>{%DataPlotMinYValuePointSeriesName}</td><td>The name of the series with a minimal of all the points y values.</td>
</tr>
<tr>
<td>{%XPercentOfSeries}</td><td>The percentage of the series this point represents (Scatter Plot charts).</td>
</tr>
<tr>
<td>{%XPercentOfTotal}</td><td>The percentage of all the series on the chart this point represents.</td>
</tr>
<tr>
<td>{%YPercentOfCategory}</td><td>The percentage of all the points with the same name this point represents.</td>
</tr>
</table>

## Formatting Parameters

Along with usage of special tokens which help to define the source of text, you can set options which help to format numeric values in the text. Options follow the token in curly brackets. 
  
Here is a simple code with tokens:

```
// setting the tooltips with formatting
var columnTooltip = columnSeries.tooltip();
columnTooltip.format("{%SeriesName}: {%Value}{groupsSeparator:', decimalsCount:3}");

var lineTooltip = lineSeries.tooltip();
lineTooltip.format("{%SeriesName}: {%Value}{decimalsCount:1}%");
```

Here is a chart with a tooltip configured using tokens with options:

{sample}CS\_format\_01{sample}

### Formatting Parameters List  

There is a list of formatting parameters, which help to organize your data presentation in the way you prefer. You can find a sample after the table that list formatting parameters.
  
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
<td>scale</td><td></td><td>Sets value scaling.</td>
</tr>
</table>

In the next sample we have formatted the scale according to the Old British currency system (before 1971), when £1 was equivalent to 20 shillings and 1 shilling = 12 pence.

```
var columnTooltip = columnSeries.tooltip();

// scaling value
columnTooltip.format("{%SeriesName}: {%Value}{scale:(1)(12)(20)|( p)( s)( £)}");
```  

Here is a live sample with such settings:

{sample}CS\_format\_02{sample}

If you explore the sample, you can see that all values are set in pence, but the shown value is formatted.

On the sample below there is another popular case of scale formatting shown: a thousandfold increase.

```
// string for formatting tooltips
var formatter = "{%SeriesName}: {%Value}{scale:(1)(1000)(1000)(1000)|( d)( th)( M)( B)}";
```  

Here is a live sample with such settings:

{sample}CS\_format\_03{sample}

### Escaping symbols

If you want to use a symbol which is already reserved in token's parser, you need to use double slash (\\) before this symbol to prevent it from been parsed.

```
var tooltip = series.tooltip();

// use coma as the thousands separator
tooltip.format("{%Value}{groupsSeparator:\\,}");
```  

Here is a live sample with such settings:

{sample}CS\_format\_04{sample}

## Formatting functions

For complex formatting use formatting function instead of token strings. Formatting functions are set like this:

```
// formatting using a function
var lineTooltip = lineSeries.tooltip();
lineTooltip.format(function(){
  return "Income: " + this.value/100 + "%";
});
```

Here is a live sample with such settings:

{sample}CS\_format\_05{sample}

**Note**: you can use {api:anychart.format#number}anychart.format.number(){api}, {api:anychart.format#dateTime}anychart.format.dateTime(){api} and other members of {api:anychart.format}anychart.format{api} namespace to format values in formatting functions:

```
var currentLabels = chart.labels();
// format the number
currentLabels.format(function() {
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
chart.labels().format(function(){
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
labels.format(function(){
    return(this.getData("extra_inf"));
});
```

{sample}CS\_format\_07{sample}

In this sample we have added some extra information to the data: we defined the "extra\_inf" parameter of "redundant" value for the second point of the second series and displayed it, using {api:anychart.format.Context#getData}getData(){api}.

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
tooltip.format(function(){
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
labels_1.format(function(){
    return("C: "+this.series.meta("company")+"\nL: "+this.low+"\nH: "+this.high);
});

var labels_2 = series_2.labels();
labels_2.format(function(){
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
labels.format(function(){
    return((this.getData("value"))+"(of "+this.getStat("sum")) + ")";
});
```

{sample}CS\_format\_10{sample}