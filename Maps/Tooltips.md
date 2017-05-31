{:index 14}
Map Tooltips
======================

* [Overview](#overview)
* [Tooltips for Map regions](#tooltips_for_map_regions)

## Overview 

Tooltips in Maps are quite similar to the usual tooltips you can find and configure for any other chart type, the only differences is that you can use keywords provided by the map source.

To learn about Tooltips editing in general please visit [Text Settings](../Appearance_Settings/Text_Settings) and [Text Formatters](../Common_Settings/Text_Formatters).

## Tooltips for Map regions

When you attach the data to your map, you can add some extra fields which you may want to show later in the tooltip. Just look through the [Text Formatters article](../Common_Settings/Text_Formatters) to know more about meta.

In the sample below we've got a map of Australia, where each state data contains some extra information which later is shown in tooltips.

Note that we added extra fields to each data point, and one of the regions has one extra field. We use {api:anychart.core.ui.Tooltip#format}format{api} to transform our tooltips and make them show the information we need instead of what is displayed by default.

```
var mapDataSet = anychart.data.set([
            {'id': 'AU.WA', 'capital': 'Perth', 'population': 1507949},
            {'id': 'AU.JB', 'capital': 'Canberra', 'population': 377},
            {'id': 'AU.NS', 'capital': 'Sydney', 'population': 4293105},
            {'id': 'AU.VI', 'capital': 'Melbourne', 'population': 3800000},
            {'id': 'AU.NT', 'capital': 'Darwin', 'population': 113955},
            {'id': 'AU.TS', 'capital': 'Hobart', 'population': 205510},
            {'id': 'AU.CT', 'capital': 'Canberra', 'population': 374766},
            {'id': 'AU.SA', 'capital': 'Adelaide', 'population': 1138833},
            {'id': 'AU.QL', 'capital': 'Brisbane', 'population': 1820375}
]);


// create a map
var mapChart = anychart.map();
mapChart.geoData(anychart.maps.australia);

// set the series
var series = mapChart.choropleth(mapDataSet);

// enable the tooltips and format them at once
series.tooltip().format(function(e){
   return "Capital: " + e.getData("capital") +"\n"+
   "Population: " + e.getData("population")
});

```
And here is a live sample:

{sample}Maps\_Tooltips\_01{sample}
