{:index 13}
# Map Legend

## Overview

AnyMap legend works the same way it works in all other chart types. Look through [Legend Settings](../Common_Settings/Legend) article for more information about legends:

This articles shows several samples how legend is used with AnyChart JavaScript maps.

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

Note that this series is colored using the colorScale and the color of the state depends on the value it represents. We have changed the legendItem icon from default rectangular to circle using {api:anychart.core.ui.LegendItem#iconType}iconType(){api}.


## Multiple Legends

Multiple Legends might be useful when you need to show different data in one map. In the sample below we add the second legend, which regions represent those states where the expansion is planned.

{sample}Maps\_Legend\_02{sample}

Note that the Color Range is also used in the sample, read more about it in [Color Range](ColorRange) article.

## Thresholds in Legend

You can use Legend with thresholds; with thresholds, the legend looks similar to a Color Range with an ordinal [Color Scale](Scales). 

Let's create one more data set and a legend for it and define another color scale. This new series tells us about rival companies average profit.

```
var series_other = map.choropleth(dataSet_other);
series_other.geoIdField('iso_3166_2');
series_other.name('Sales of other companies');
series_other.labels().fontSize(10).fontColor('#212121').format(function(){
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
  
// legend settings
var legend = map.legend();
legend.enabled(true);
legend.itemsSourceMode('CATEGORIES');
```

{sample}Maps\_Legend\_03{sample}

## Undefined Regions In Legend

If you've got a lot of undefined regions (regions with no data), but you need to color them, use the {api:anychart.charts.Map#unboundRegions}unboundRegions(){api} method:

```
// set the color for undefined (unbound) regions
map.unboundRegions().fill('#FFFFDE');
```

{sample}Maps\_Legend\_04{sample}
