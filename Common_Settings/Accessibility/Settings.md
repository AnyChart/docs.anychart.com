{:index 4}

# Accessibility Settings

## Default

The accessibility support is enabled by default. It means that you don't need to enable accessibility unless you've turned it off. Switching the accessibility support off will lead to the absence of both ARIA-tags and ARIA-labels in the SVG structure, so the information available to a screen reader will be barely understandable.

The default Accessibility mode is ["Chart Elements"](#chart_elements_mode), which means a user interacts with a chart and its elements, using a keyboard to navigate between them. If you change the mode to the ["Data Table"](#data_table_mode), an invisible readable table with the chart data will be generated. In this case, an interaction between a user and a chart will be performed through this table, which cells represent the data points of the chart.

## Enable/Disable

To make a chart accessible for everyone, we need to enable the {api:anychart.core.Chart#a11y}a11y(){api} method of the chart or series, which means "accessibility". Accessibility support is enabled by default, but in case you have switched it off and need to enable it back again, use {api:anychart.core.utils.ChartA11y#enabled}enable(){api}.

```
// enable the accessibility of the chart
chart.a11y().enabled(true);
```

The code above can be shortened to:

```
// enable the accessibility of the chart
chart.a11y(true);
```
Accessibility support for series is separated from the chart's accessibility. To enable it for series, use the same method for them:

```
// enable the accessibility support for series
series.a11y(true);
```

{sample}CMN\_Accessibility\_01{sample}

## Accessible Elements

Before we go into to some specific settings of accessibility, let's configure chart elements. We need to set the chart title and series titles using the {api:anychart.core.Chart#a11y}a11y(){api} method to make them  readable by VoiceOver. Let's use the {api:anychart.core.utils.ChartA11y#titleFormat}titleFormat(){api} method for both chart and series.

```
// set the titleFormat for the chart
chart.a11y().titleFormat(function(e){
  var chart = this.chart;
  return "Data Plot Y Sum is " + chart.getStat("dataPlotYSum") + "\n" +
              "First Series Y minimum is " + chart.getSeries(0).getStat("seriesYMin") + "\n" +
              "First Series Y maximum is " + chart.getSeries(0).getStat("seriesYMax");
});

// set the titleFormat for the series
series2014.a11y().titleFormat(function(e){
  var series = this.series;
  return "This series named " + series.name() + " has its maximum value in $" + series.getStat("seriesYMax") + ", the average in $" +  series.getStat("average") + " and minimum value in $" + series.getStat("seriesYMin");
});
```

{sample}CMN\_Accessibility\_02{sample}

## Accessibility Modes

AnyChart supports two accessibility modes: representing the chart/series elements as chart elements or as elements of a table. Choose the one you prefer and use the {api:anychart.core.utils.ChartA11y#mode}mode(){api} method to set it. Two following samples demonstrate both modes and the difference between them.

## Chart Elements Mode

The "chartElements" mode is enabled by default. In this mode, a user interacts with elements of a chart. The chart title, created by *titleFormat()* or by *title()* methods, is transformed into an ARIA tag of the corresponding SVG element.

```
// set the accessibility mode as chart elements
chart.a11y().mode("chartElements")
```

{sample}CMN\_Accessibility\_03{sample}

Note that setting the mode to the chart does not affect the series.

## Data Table Mode

In this mode, an invisible table with chart data is generated. This table contains the chart title (taken from *titleFormat()* or from *title()* methods) as the table's head, and all information shown on the chart is transformed into a table structure, and the VoiceOver reads it appropriately.  

```
// set the accessibility mode as table data
chart.a11y().mode("dataTable")
```

{sample}CMN\_Accessibility\_04{sample}