{:index 0}
# Marimekko Charts

* [Overview](#overview)
* [Quick start](#quick_start)
 * [Mekko](#mekko)
 * [BarMekko](#barmekko)
 * [Mosaic](#mosaic)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
 * [Stacked Mode](#stacked_mode)
 * [Points padding](#points_padding)
 * [Appearance](#appearance)
 * [Labels](#labels)
 * [Tooltips](#tooltips) 
 * [Vertical Marimekko Chart](#vertical_marimekko_chart)

## Overview

<a href="http://www.marimekko.com/" target="_blank">Marimekko</a> is a Finnish home furnishings, textiles and fashion company. It made important contributions to fashion in the 1960s. It is particularly noted for its brightly colored printed fabrics and simple styles, used both in women's garments and in home furnishings. Marimekko designers created hundreds of distinctive patterns and helped to make Marimekko a household name across the world.

The Marimekko name has been adopted within business and the management consultancy industry to refer to a specific type of **bar chart known as a variable-width chart** or **Mosaic plot** in which all the bars are of equal height, there are no spaces between the bars, and the bars are in turn each divided into segments of different width. The design of the mosaic plot resembles a <a href="https://www.google.ru/search?q=Marimekko+print&tbm=isch" target="_blank">Marimekko print</a>. The chart's design encodes two variables (such as percentage of sales and market share).

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.mekko.series.Mekko}anychart.core.mekko.series.Mekko{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>YES</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[YES](#stacked_mode)</td></tr>
<tr><td>Vertical</td><td>[YES](#vertical_marimekko_chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[BarMekko](BarMekko_Chart)</td></tr>
<tr><td></td><td>[Mosaic Chart](Mosaic_Chart)</td></tr>
<tr><td></td><td>[Column Chart](../Column_Chart)</td></tr>
<tr><td></td><td>[Bar Chart](../Bar_Chart)</td></tr>
<tr><td></td><td>[Stacked Charts](../Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/mekko-chart/" target="_blank">Chartopedia: Marimekko Mekko Chart</a></td></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/barmekko-chart/" target="_blank">Chartopedia: Marimekko BarMekko Chart</a></td></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/mosaic-chart/" target="_blank">Chartopedia: Marimekko Mosaic Chart</a></td></tr>
<tr><td></td><td>[General Settings](../General_Settings)</td></tr>
</table>

## Quick Start

Marimekko is built on top of column chart with some specific settings, in AnyChart, we've broken down Marimekko charts into 3 specific cases which are created by the different constructors.

## Mekko

A Mekko chart with %-axis (often called *marimekko chart* or *100% cost curve*) is a two-dimensional [100% chart](../Stacked/Overview). As in the 100% chart, the value axis is based on percentages and column heights are shown relative to 100%. In the regular 100% chart, since the columns are scaled to relative heights, there is no visual representation of absolute column totals.

This type of marimekko chart is created with {api:anychart#mekko}mekko(){api} constructor:

```
chart = anychart.mekko();
```

See the basic sample and read more in [later in this article](#special_settings).

{sample}BCT\_Mekko\_Chart\_01{sample}

## BarMekko

A Mekko chart with units (sometimes also called *submarine chart* or *olympic chart*) is a two-dimensional stacked chart. As in the [regular stacked chart](../Stacked/Overview), the value axis and the datasheet of this chart are based on absolute values.

This type of marimekko chart is created with {api:anychart#barmekko}barmekko(){api} constructor:

```
chart = anychart.barmekko();
```

See the basic sample and read more in [Barmekko Chart](BarMekko_Chart) article.

{sample}BCT\_BarMekko\_Chart\_01{sample}

## Mosaic

Mosaic chart is pretty much the same as the [basic Mekko chart](#mekko) but with one important difference: Y scale is ordinal and contains series names instead of numbers.

This type of marimekko chart is created with {api:anychart#mosaic}mosaic(){api} constructor:

```
chart = anychart.mosaic();
```

See the basic sample and read more in [Mosaic Chart](Mosaic_Chart) article.

{sample}BCT\_Mosaic\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Mekko chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](../General_Settings).

## Special Settings

### Stacked Mode

When Mekko chart is created both its scales are put into stacked mode: Y scale to [percent stacked mode](../Stacked/Overview#percent_stacking) and X scale to value stacking mode.

Changing Y scale to [value stacked mode](../Stacked/Overview#value_stacking) but consider using [Barmekko Chart](BarMekko_Chart) in such cases.

Changing X scale will convert Mekko chart into usual [percent stacked column chart](../Stacked/Percent/Column_Chart).

### Points padding

Points padding is a special setting in Mekko charts, it is controlled with {api:anychart.charts.Mekko#pointsPadding}pointsPadding(){api} method and sets the distance between elements (tiles), it serves only aesthetic purpose and it is set to different default values in [Mekko](#mekko), [BarMekko](BarMekko_Chart) and [Mosaic](Mosaic_Chart) constructors.

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Mekko series:

* {api:anychart.core.mekko.series.Mekko#color}color(){api}, {api:anychart.core.mekko.series.Mekko#fill}fill(){api}, {api:anychart.core.mekko.series.Mekko#hatchFill}hatchFill(){api}, {api:anychart.core.mekko.series.Mekko#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.mekko.series.Mekko#hoverFill}hoverFill(){api}, {api:anychart.core.mekko.series.Mekko#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.mekko.series.Mekko#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.mekko.series.Mekko#selectFill}selectFill(){api}, {api:anychart.core.mekko.series.Mekko#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.mekko.series.Mekko#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../../Appearance_Settings) section.

In the sample below, there are two mekko series with some of the appearance settings configured:

```
// create the first series
var series1 = chart.mekko(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.mekko(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.hatchFill("zigzag", "#808080", 1, 15);
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_Mekko\_Chart\_02{sample}

### Labels

[Labels](../../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Marimekko Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](../Vertical/Overview).

Here is the information about creating Vertical Mekko Chart:

* [Vertical Mekko](../Vertical/Mekko_Chart)
* [Vertical Mosaic](../Vertical/Mosaic_Chart)
* [Vertical BarMekko](../Vertical/BarMekko_Chart)
