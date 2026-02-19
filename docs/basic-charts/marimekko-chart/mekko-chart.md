---
sidebar_position: 0
---
# Marimekko Charts

## Overview

[Marimekko](https://www.marimekko.com/) is a Finnish home furnishings, textiles and fashion company. It made important contributions to fashion in the 1960s. It is particularly noted for its brightly colored printed fabrics and simple styles, used both in women's garments and in home furnishings. Marimekko designers created hundreds of distinctive patterns and helped to make Marimekko a household name across the world.

The Marimekko name has been adopted within business and the management consultancy industry to refer to a specific type of **bar chart known as a variable-width chart** or **Mosaic plot** in which all the bars are of equal height, there are no spaces between the bars, and the bars are in turn each divided into segments of different width. The design of the mosaic plot resembles a [Marimekko print](https://www.google.ru/search?q=Marimekko+print&tbm=isch). The chart's design encodes two variables (such as the percentage of sales and market share).

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td><a href="../../quick-start/modules#core">Core</a> + <a href="../../quick-start/modules#mekko">Mekko</a></td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.mekko.series.Mekko}anychart.core.mekko.series.Mekko{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td><a href="../../working-with-data/overview">x, value</a></td></tr>
<tr><td>Multiple Series</td><td>YES</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td><a href="#stacked-mode">YES</a></td></tr>
<tr><td>Vertical</td><td><a href="#vertical-marimekko-chart">YES</a></td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td><a href="bar-mekko-chart">Bar Mekko</a></td></tr>
<tr><td></td><td><a href="mosaic-chart">Mosaic Chart</a></td></tr>
<tr><td></td><td><a href="../column-chart">Column Chart</a></td></tr>
<tr><td></td><td><a href="../bar-chart">Bar Chart</a></td></tr>
<tr><td></td><td><a href="../stacked/overview">Stacked Charts</a></td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/mekko-chart/">Chartopedia: Marimekko Mekko Chart</a></td></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/barmekko-chart/">Chartopedia: Marimekko Bar Mekko Chart</a></td></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/mosaic-chart/">Chartopedia: Marimekko Mosaic Chart</a></td></tr>
<tr><td></td><td><a href="../general-settings">General Settings</a></td></tr>
</table>

## Modules

The Marimekko chart requires adding the [Core](../../quick-start/modules#core) and [Mekko](../../quick-start/modules#mekko) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-mekko.min.js"></script>
```

Learn more: [Modules](../../quick-start/modules).

## Quick Start

Marimekko is built on top of column chart with some specific settings, in AnyChart, we've broken down Marimekko charts into 3 specific cases which are created by the different constructors.

## Mekko

A Mekko chart with %-axis (often called *marimekko chart* or *100% cost curve*) is a two-dimensional [100% chart](../stacked/overview). As in the 100% chart, the value axis is based on percentages and column heights are shown relative to 100%. In the regular 100% chart, since the columns are scaled to relative heights, there is no visual representation of absolute column totals.

This type of marimekko chart is created with {api:anychart#mekko}mekko(){api} constructor:

```
chart = anychart.mekko();
```

See the basic sample and read more in [later in this article](#special-settings).

{sample}BCT\_Mekko\_Chart\_01{sample}

## Bar Mekko

A Mekko chart with units (sometimes also called *submarine chart* or *olympic chart*) is a two-dimensional stacked chart. As in the [regular stacked chart](../stacked/overview), the value axis and the datasheet of this chart are based on absolute values.

This type of marimekko chart is created with {api:anychart#barmekko}barmekko(){api} constructor:

```
chart = anychart.barmekko();
```

See the basic sample and read more in [Bar Mekko Chart](bar-mekko-chart) article.

{sample}BCT\_Bar\_Mekko\_Chart\_01{sample}

## Mosaic

Mosaic chart is pretty much the same as the [basic Mekko chart](#mekko) but with one important difference: the Y-scale is ordinal and contains series names instead of numbers.

This type of marimekko chart is created with {api:anychart#mosaic}mosaic(){api} constructor:

```
chart = anychart.mosaic();
```

See the basic sample and read more in [Mosaic Chart](mosaic-chart) article.

{sample}BCT\_Mosaic\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Mekko chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](../general-settings).

## Special Settings

### Stacked Mode

When Mekko chart is created, both its scales are put into stacked mode: the Y-scale to [percent stacked mode](../stacked/overview#percent-stacking) and X-scale to value stacking mode.

Changing the Y-scale to [value stacked mode](../stacked/overview#value-stacking) but consider using the[Bar Mekko Chart](bar-mekko-chart) in such cases.

Changing the X-scale will convert Mekko chart into usual [percent stacked column chart](../stacked/percent/column-chart).

### Padding

Padding between points is a special setting in Mekko charts, it is controlled with {api:anychart.charts.Mekko#pointsPadding}pointsPadding(){api} method and sets the distance between elements (tiles), it serves only aesthetic purpose and it is set to different default values in [Mekko](#mekko), [Bar Mekko](bar-mekko-chart), and [Mosaic](mosaic-chart) constructors.

### Appearance

#### All Points

The [appearance settings](../../appearance-settings) of a Mekko chart can be configured in three [states](../../common-settings/interactivity/states): **normal**, **hover**, and **selected**. Use the {api:anychart.core.mekko.series.Mekko#normal}normal(){api}, {api:anychart.core.mekko.series.Mekko#hovered}hovered(){api}, and {api:anychart.core.mekko.series.Mekko#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Mekko series with appearance settings configured:

```
// create the first series
var series1 = chart.mekko(seriesData_1);

// configure the visual settings of the first series
series1.normal().fill("#99004d", 0.5);
series1.hovered().fill("#99004d", 0.3);
series1.selected().fill("#99004d", 0.7);
series1.normal().stroke("#99004d", 1);
series1.hovered().stroke("#99004d", 2);
series1.selected().stroke("#99004d", 4);

// create the second series
var series2 = chart.mekko(seriesData_2);

// configure the visual settings of the second series
series2.normal().fill("#004d99", 0.5);
series2.hovered().fill("#004d99", 0.3);
series2.selected().fill("#004d99", 0.7);
series2.normal().hatchFill("forward-diagonal", "#004d99", 1, 15);
series2.hovered().hatchFill("forward-diagonal", "#004d99", 1, 15);
series2.selected().hatchFill("forward-diagonal", "#004d99", 1, 15);
series2.normal().stroke("#004d99");
series2.hovered().stroke("#004d99", 2);
series2.selected().stroke("#004d99", 4);
```

{sample}BCT\_Mekko\_Chart\_02{sample}

#### Individual Points

You can change the appearance (and some other settings) of individual points by adding special fields to your data:

```
// create a data set
var data = anychart.data.set([
  ["QTR1", 10000, 12500],
  ["QTR2", 12000, 15000],
  ["QTR3", 13000, 16500,  "#ef6c00", null],
  ["QTR4", 10000, 13000],
]);

// map the data
var seriesData_1 = data.mapAs({x: 0, value: 1});
var seriesData_2 = data.mapAs({x: 0, value: 2, fill: 3, stroke: 4});

// create a chart
chart = anychart.mekko();

// create series and set the data
var series1 = chart.mekko(seriesData_1);
var series2 = chart.mekko(seriesData_2);
```

{sample}BCT\_Mekko\_Chart\_03{sample}

### Labels

[Labels](../../common-settings/labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../../common-settings/text-formatters) are available.

### Tooltips

A [Tooltip](../../common-settings/tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../../common-settings/text-formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Marimekko Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](../vertical/overview).

Here is information about creating Vertical Mekko Charts:

* [Vertical Mekko](../vertical/mekko-chart)
* [Vertical Mosaic](../vertical/mosaic-chart)
* [Vertical Bar Mekko](../vertical/bar-mekko-chart)