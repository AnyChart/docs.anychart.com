{:index 0}
# Marimekko Charts

* [Overview](#overview)
* [Mekko](#mekko)
* [BarMekko](#barmekko)
* [Mosaic](#mosaic)

## Overview

[Marimekko](http://www.marimekko.com/) is a Finnish home furnishings, textiles and fashion company. It made important contributions to fashion in the 1960s. It is particularly noted for its brightly colored printed fabrics and simple styles, used both in women's garments and in home furnishings. Marimekko designers created hundreds of distinctive patterns and helped to make Marimekko a household name across the world.

The Marimekko name has been adopted within business and the management consultancy industry to refer to a specific type of **bar chart known as a variable-width chart** or **Mosaic plot** in which all the bars are of equal height, there are no spaces between the bars, and the bars are in turn each divided into segments of different width. The design of the mosaic plot resembles a [Marimekko print](https://www.google.ru/search?q=Marimekko+print&tbm=isch). The chart's design encodes two variables (such as percentage of sales and market share).

Marimekko is built on top of column chart with some specific settings, in AnyChart, we've broken down Marimekko charts into 3 specific cases which are create by the different constructors.

## Mekko

A Mekko chart with %-axis (often called *marimekko chart* or *100% cost curve*) is a two-dimensional [100% chart](../Stacked/Overview). As in the 100% chart, the value axis is based on percentages and column heights are shown relative to 100%. In the regular 100% chart, since the columns are scaled to relative heights, there is no visual representation of absolute column totals.

This type of marimekko chart is created with {api:anychart#mekko}mekko(){api} constructor:

```
chart = anychart.mekko();
```

See the basic sample and read more in [Mekko Chart](Mekko_Chart) article.

{sample}BCT\_Mekko\_Chart\_01{sample}

## BarMekko

A Mekko chart with units (sometimes also called *submarine chart* or *olympic chart*) is a two-dimensional stacked chart. As in the [regular stacked chart](../Stacked/Overview), the value axis and the datasheet of this chart are based on absolute values.

This type of marimekko chart is created with {api:anychart#barmekko}mekko(){api} constructor:

```
chart = anychart.barmekko();
```

See the basic sample and read more in [Barmekko Chart](Barmekko_Chart) article.

{sample}BCT\_BarMekko\_Chart\_01{sample}

## Mosaic

Mosaic chart is pretty much the same as the [basic Mekko chart](#mekko) but with one important difference: Y scale is ordinal and contains series names instead of numbers.

This type of marimekko chart is created with {api:anychart#mosaic}mosaic(){api} constructor:

```
chart = anychart.mosaic();
```

See the basic sample and read more in [Barmekko Chart](Barmekko_Chart) article.

{sample}BCT\_Mosaic\_Chart\_01{sample}
