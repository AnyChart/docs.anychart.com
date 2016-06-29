#Accessibility (508 Section)

* [What is 508](#what_is_508)
* [Methods](#methods)
 * [Enable/Disable](#enable/disable)
 * [Accessible Elements](#accessible_elements)
 * [Accessibility Modes](#accessibility_modes)
  * [chartElements mode](#chartelements_mode)
  * [dataTable mode](#datatable_mode)
 * [Defaults](#defaults)


## What is 508

The Web unites millions of people all over the world. Though, some web users are part-disabled, who cannot use some electronic devices, e.g. mouse, keyboards, etc. For example, in case when a visually-impaired searches through the Internet, the best option is to use a screen reader which reads the page content and makes it understandable for such person.

In general, international 508 section standards are being invented due to make technology and Internet available for all users, regardless of disability status. Using these standards is a way to provide such people more opportunities. AnyChart supports these standards.

You can find a lot of information about section 508 on the Internet.


## Methods

There are several methods AnyChart supports for accessibility. The main idea lies in creating special tags (ARIA tags) in SVG structure (the chart itself), which is rendered by AnyChart component. These tags help screen readers to perceive the chart content as readable DOM structure and pronounce it correctly, which helps disabled people to understand the information performed on out charts better. 

Note that at the moment there is only a VoiceOver application on Mac is supported by AnyChart.


### Enable/Disable

To make a chart accessible for everyone, we need to enable the {api:}.a11y(){api} method of the chart or series, which means "accessibility". Accessibility support is enabled by default, but in case you have switched it off and need to enable it back again, use {api}.enable(){api}.

```
// enable the accessibility of the chart
chart.a11y().enabled(true);
```

The code above can be shortened as the following:

```
// enable the accessibility of the chart
chart.a11y(true);
```
Accessibility support for series is separated from the chart's accessibility. To enable it for series, use the same method for them:

```
// enable the accessibility support for series
series.a11y(true);
series.a11y(true);
```
{sample}CMN\_508\_Section\_01{sample}


### Accessible Elements

Before we pass to some specific settings of accessibility support, let's prepare our chart's elements. We need to set the chart title and series titles through the {api:}.a11y(){api} method to make them recognized and readable by VoiceOver. Let's use the {api:}.titleFormatter(){api} method for both chart and series.

```
// set the titleFormatter for the chart
  chart.a11y().titleFormatter(function(e){
    var chart = this.chart;
    return "Series Y sum: " + chart.getStat("dataPlotYSum") + "\n" +
                "Series Y minimum: " + chart.getSeries(0).getStat("seriesYMin") + "\n" +
                "Series Y maximum: " + chart.getSeries(0).getStat("seriesYMax");
  });

  // set the titleFormatter for the series
  series2014.a11y().titleFormatter(function(e){
    var series = this.series;
    return "This series named " + series.name() + " has its maximum value in $" + series.getStat("seriesYMax") + ", the average in $" +  				chart.getSeries(1).getStat("average") + " and minimum value in $" + chart.getSeries(1).getStat("seriesYMin");
  });

```
{sample}CMN\_508\_Section\_02{sample}

The next part of the article tells about accessibility modes: in dependency of the chosen mode this information will be transformed differently.


### Accessibility Modes

AnyChart supports two modes of accessibility: representing the chart/series elements as chart elements or as elements of a table. Choose the one you prefer and use the {api:}.mode(){api} method to set it. Two following samples demonstrate both modes and the difference between them.

#### chartElements mode

The "chartElements" mode is enabled by default. In this mode, the VoiceOver informs a user, which hot-keys usage leads to interacting with which element of a chart. The chart title, taken from {api:}.titleFormatter(){api} or from {api:}.title(){api} method, is transformed into an ARIA tag of the corresponding SVG element.

```
// set the accessibility mode as chart elements
chart.a11y().mode("chartElements")
```
{sample}CMN\_508\_Section\_03{sample}

Note that setting the mode to the chart does not affect the series.


#### dataTable mode

In this mode, an invisible table is being generated on a chart. This table contains the chart title (taken from {api:}.titleFormatter(){api} or from {api:}.title(){api} method) as the table's head, and all information shown on the chart is transformed into a table structure, i.e. as cells, and the VoiceOver reads it appropriately. The navigation between cells is organized through the hot-keys, no interaction with the chart is supposed. 

```
// set the accessibility mode as table data
chart.a11y().mode("dataTable")
```
{sample}CMN\_508\_Section\_04{sample}

Open the console to inderstand the difference between these two modes.


### Defaults

The acessibilty support is enabled by default. It means that there is no need in enabling this feature unless you've turned it off due to some reasons. Switching the accessibility support off will lead to absence of both ARIA-tags and ARIA-labels in the SVG structure, so the information percepted and performed by a screen reader will be scarcely understandable.

The default Accessibility mode is Chart Elements, which means that a user interacts with a chart and its elements, using a keyboaкd for navigation between them. If you change the mode to the "dataTable", there will be an invisible table generated in the upper left corner of the chart. In this case, an interaction between a user and a chart will be performed through this table, which cells represent the data points of the chart.