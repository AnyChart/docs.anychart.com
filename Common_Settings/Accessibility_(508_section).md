#Accessibility (508 Section)

* [What is Section 508](#what_is_section_508)
* [Why a11y](#why_a11y)
* [Default](#default)
* [Enable/Disable](#enable/disable)
* [Accessible Elements](#accessible_elements)
* [Accessibility Modes](#accessibility_modes)
* [Chart Elements Mode](#chart_elements_mode)
* [Data Table mode](#data_table_mode)

## What is Section 508

The Web unites millions of people all over the world. Though, some web users are part-disabled, who cannot use some electronic devices, e.g. mouse, keyboards, etc. For example, in case when a visually-impaired searches through the Internet, the best option is to use a screen reader which reads the page content and makes it understandable for such person.

In general, international 508 section standards are being invented due to make technology and Internet available for all users, regardless of disability status. Using these standards is a way to provide such people more opportunities. AnyChart supports these standards.

You can find a lot of information about section 508 at [https://www.section508.gov/](https://www.section508.gov/).

There are several methods AnyChart supports for accessibility. The main idea lies in creating special tags (ARIA tags) in SVG structure (the chart itself), which is rendered by AnyChart component. These tags help screen readers to perceive the chart content as readable DOM structure and pronounce it correctly, which helps disabled people to understand the information performed on out charts better. 

## Why a11y

Accessibility is often abbreviated as the numeronym **a11y**, where the number 11 refers to the number of letters omitted. This parallels the abbreviations of internationalization and localization as i18n and l10n respectively, this follows an Information and Communications Technology (ICT)-oriented convention, which are used mostly in the software community.

## Default

The acessibilty support is enabled by default. It means that you don't need to enable accessibility unless you've turned it off. Switching the accessibility support off will lead to absence of both ARIA-tags and ARIA-labels in the SVG structure, so the information available to a screen reader will be barely understandable..

The default Accessibility mode is ["Chart Elements"](chart_elements_mode), which means a user interacts with a chart and its elements, using a keyboard for navigation between them. If you change the mode to the ["Data Table"](data_table_mode), an invisible readable table with chart data will be generated. In this case, an interaction between a user and a chart will be performed through this table, which cells represent the data points of the chart.

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

{sample}CMN\_508\_Section\_01{sample}

## Accessible Elements

Before we pass to some specific settings of accessibility support, let's prepare our chart's elements. We need to set the chart title and series titles through the {api:anychart.core.Chart#a11y}a11y(){api} method to make them recognized and readable by VoiceOver. Let's use the {api:anychart.core.utils.ChartA11y#titleFormatter}titleFormatter(){api} method for both chart and series.

```
  // set the titleFormatter for the chart
  chart.a11y().titleFormatter(function(e){
    var chart = this.chart;
    return "Data Plot Y Sum is " + chart.getStat("dataPlotYSum") + "\n" +
                "First Series Y minimum is " + chart.getSeries(0).getStat("seriesYMin") + "\n" +
                "First Series Y maximum is " + chart.getSeries(0).getStat("seriesYMax");
  });

  // set the titleFormatter for the series
  series2014.a11y().titleFormatter(function(e){
    var series = this.series;
    return "This series named " + series.name() + " has its maximum value in $" + series.getStat("seriesYMax") + ", the average in $" +  series.getStat("average") + " and minimum value in $" + series.getStat("seriesYMin");
  });
```

{sample}CMN\_508\_Section\_02{sample}

The next part of the article tells about accessibility modes: in dependency of the chosen mode this information will be transformed differently.

## Accessibility Modes

AnyChart supports two modes of accessibility: representing the chart/series elements as chart elements or as elements of a table. Choose the one you prefer and use the {api:anychart.core.utils.ChartA11y#mode}mode(){api} method to set it. Two following samples demonstrate both modes and the difference between them.

## Chart Elements Mode

The "chartElements" mode is enabled by default. In this mode, the VoiceOver informs a user, which hot-keys usage leads to interacting with which element of a chart. The chart title, taken from *titleFormatter()* or from *title()* methods, is transformed into an ARIA tag of the corresponding SVG element.

```
// set the accessibility mode as chart elements
chart.a11y().mode("chartElements")
```

{sample}CMN\_508\_Section\_03{sample}

Note that setting the mode to the chart does not affect the series.

## Data Table Mode

In this mode, an invisible table is being generated on a chart. This table contains the chart title (taken from *titleFormatter()* or from *title()* methods) as the table's head, and all information shown on the chart is transformed into a table structure, i.e. as cells, and the VoiceOver reads it appropriately. The navigation between cells is organized through the hot-keys, no interaction with the chart is supposed. 

```
// set the accessibility mode as table data
chart.a11y().mode("dataTable")
```

{sample}CMN\_508\_Section\_04{sample}