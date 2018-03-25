{:index 4}

# Accessibility Settings

## Default

The accessibility support is enabled by default. It means that you do not need to enable accessibility unless you have turned it off. If the accessibility support is disabled, there are neither ARIA-tags nor ARIA-labels in the SVG structure, so the information available to a screen reader is barely understandable.

The default accessibility mode is [Chart Elements](#chart_elements_mode): a user interacts with a chart and its elements, navigating them with a keyboard. When the mode is set to [Data Table](#data_table_mode), an invisible readable table is generated, its cells representing the data points of the chart. The interaction between a user and a chart is performed through this table.

## Enable/Disable

To make a chart accessible for everyone, you need to enable the {api:anychart.core.Chart#a11y}a11y(){api} method of the chart or series, which means "accessibility". Accessibility support is enabled by default, but in case you have switched it off and need to enable it back again, use {api:anychart.core.utils.ChartA11y#enabled}enable(){api}.

```
// enable the accessibility of the chart
chart.a11y().enabled(true);
```

The code above can be shortened to:

```
// enable the accessibility of the chart
chart.a11y(true);
```

The accessibility support is set separately for the chart and series. To enable it for series, use the same method:

```
// enable the accessibility of the series
series.a11y(true);
```

{sample}CMN\_Accessibility\_01{sample}

## Accessible Elements

Before going into specific settings of accessibility, you can configure chart elements.

Set the titles of the chart and series with the {api:anychart.core.Chart#a11y}a11y(){api} method to make them readable by VoiceOver. Combine it with the {api:anychart.core.utils.ChartA11y#titleFormat}titleFormat(){api} method for both the chart and series.

```
// set the title of the chart
chart.a11y().titleFormat(function(e){
  var chart = this.chart;
  return "Data Plot Y Sum is " + chart.getStat("dataPlotYSum") + "\n" +
              "First Series Y minimum is " + chart.getSeries(0).getStat("seriesYMin") + "\n" +
              "First Series Y maximum is " + chart.getSeries(0).getStat("seriesYMax");
});

// set the title of the series
series2014.a11y().titleFormat(function(e){
  var series = this.series;
  return "This series named " + series.name() + " has its maximum value in $" + series.getStat("seriesYMax") + ", the average in $" +  series.getStat("average") + " and minimum value in $" + series.getStat("seriesYMin");
});
```

{sample}CMN\_Accessibility\_02{sample}

## Accessibility Modes

AnyChart supports two accessibility modes: representing the chart/series elements either as chart elements or as elements of a table. Choose the mode you prefer and use the {api:anychart.core.utils.ChartA11y#mode}mode(){api} method to set it. Two following samples demonstrate both modes and the difference between them.

## Chart Elements Mode

The `"chart-elements"` mode is enabled by default. In this mode, a user interacts with elements of a chart. The chart title, created by the *titleFormat()* or *title()* methods, is transformed into an ARIA tag of the corresponding SVG element.

```
// set the accessibility mode
chart.a11y().mode("chart-elements")
```

{sample}CMN\_Accessibility\_03{sample}

Please note that setting the accessibility mode of a chart does not affect its series.

## Data Table Mode

In the `"data-table"` mode, an invisible table with chart data is generated. The chart title, taken from the *titleFormat()* or *title()* methods, becomes the head of this table. All other information shown on the chart is also transformed into the table structure, so the VoiceOver can read it correctly.  

```
// set the accessibility mode
chart.a11y().mode("data-table")
```

{sample}CMN\_Accessibility\_04{sample}