{:index 11}
Map Legend
======================

* [Overview](#overview)
* [Simple Legend](#simple_legend)
* [Multiple Legends](#multiple_legends)
* [Thresholds in Legend](#thresholds_in_legend)
* [Undefined Regions In Legend](#undefined_regions_in_legend)

## Overview

Generally, map legend works the same as legend in the charts. Look through [this article](../../Common_Settings/Legend) for more information about legends:

Here you will find a couple of samples showing its usage with maps.

## Simple Legend

Legend is used predominantly to show names of the regions on a map and some side values that describes this series at some point (like sales amount, divorce rate, etc.). 

In the sample below we display the map of the USA (colored states are states where ACME Corp. sells its goods) with a legend that displays a list of states and sales volume for each of them.

{sample}Maps\_Legend\_01{sample}

```
  // series setting
  var series = map.choropleth(dataSet);
  series.geoIdField('iso_3166_2');
  series.colorScale(anychart.scales.linearColor());
  series.hoverFill('#FF9933');
  series.name('Sales of ACME Corp.');
  series.hoverStroke(anychart.color.darken('#F79430'));
  series.selectFill('#663300');
  series.selectStroke(anychart.color.darken('#663300'));  
  series.colorScale(anychart.scales.linearColor('#E08529', '#753D05'));
    
  // some legend settings
  map.legend(true);
  series.legendItem().iconFill('#D98026');
  series.legendItem().iconType("circle");
```

Note that this series is colored using the colorScale and the color of the state depends on the value it represents. We have changed the legendItem icon from default rectangular to circle using {api:anychart.core.ui.LegendItem#iconType}**.iconType()**{api}.


## Multiple Legends

Multiple Legends might be useful when you need to show different data in one map. In the sample below we add the second legend, which regions represent those states where the expansion is planned.

{sample}Maps\_Legend\_02{sample}

Note that the colorRange is activated but it displays only the first series color changes. This is so because of two reasons: first - the second series has no values due to its absence; second - the colorRange is able to work only with one series. Read more about ColorRange [here](../ColorRange).


## Thresholds in Legend

We can use Legend also with thresholds; if we've got thresholds, the legend will look similar to a colorRange of an ordinal colorScale. It also can be used when you've got a couple of series which regions you need to be colored accordingly to its values. 
Let's create one more dataSet and a legend for it and define another colorScale. This new series will tell us about other companies average profit in the same sphere as ACME Corp. works. Also we will free states from the second series and add them to a new one to see is the decision reliable or quite not.

```
var series_other = map.choropleth(dataSet_other);
  series_other.geoIdField('iso_3166_2');
  series_other.name('Sales of other companies');
  series_other.labels().fontSize(10).fontColor('#212121').textFormatter(function(){
	return (this.value);
  });
  series_other.tooltip().content().textWrap('byLetter').useHtml(true);
  series_other.tooltip().contentFormatter(function() {
    return '<span style="font-size: 13px">' + '$ ' + this.value + 'm </span>';
  });
  
  var scale = anychart.scales.ordinalColor([
    {less: 5},
    {from: 5, to: 10},
    {greater: 10}
    ]);
    
    scale.colors(['#73E6BF', '#54D1B5', '#26B2A6']);
    
  series_other.colorScale(scale);
  
  // some legend settings
  map.legend(true);
  var legend = map.legend();
  legend.itemsSourceMode('CATEGORIES');
```

{sample}Maps\_Legend\_03{sample}

## Undefined Regions In Legend

If you've got a lot of undefined regions, but you need to color them, use an {api}**.unboundRegions()**{api} method:

```
	// set the color for undefined (unbound) regions
	map.unboundRegions().fill('#FFFFDE');
```
{sample}Maps\_Legend\_04{sample}













