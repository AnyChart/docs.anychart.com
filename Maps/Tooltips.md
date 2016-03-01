{:index 12}
Map Tooltips
======================

* [Overview](#overview)
* [Tooltips for Map regions](#tooltips_for_map_regions)

## Overview 

Tooltips in Maps are quite similar to the usual tooltips you can find and configure for any other chart type, the only differences is that you can use keywords provided by the map source.

To learn about Tooltips editing in general please visit [Text Settings](../Appearance_Settings/Text_Settings) and [Text Formatters](..\Common_Settings/Text_Formatters).

## Tooltips for Map regions

When you attach the data to your map, you can add some extra fields which you may want to show later in the tooltip. Just look through the [Text Formatters article](..\Common_Settings/Text_Formatters) to know more about meta.

In the sample below we've got a map of Australia, where each state data contains some extra information which lately is viewed in tooltips on states hover.

{sample}Maps\_Tooltips\_01{sample}

```
	var mapDataSet = anychart.data.set([
            {'id': 'AU.WA', 'value': 300, 'capital': 'Perth', 'population': 1507949},
            {'id': 'AU.JB', 'value': 230, 'capital': 'Canberra', 'population': 377, 'note': 'Part of the ACT'},
            {'id': 'AU.NS', 'value': 240, 'capital': 'Sydney', 'population': 4293105},
            {'id': 'AU.VI', 'value': 275, 'capital': 'Melbourne', 'population': 3800000},
            {'id': 'AU.NT', 'value': 130, 'capital': 'Darwin', 'population': 113955},
            {'id': 'AU.TS', 'value': 190, 'capital': 'Hobart', 'population': 205510},
            {'id': 'AU.CT', 'value': 100, 'capital': 'Canberra', 'population': 374766},
            {'id': 'AU.SA', 'value': 305, 'capital': 'Adelaide', 'population': 1138833},
            {'id': 'AU.QL', 'value': 190, 'capital': 'Brisbane', 'population': 1820375}
    ]);
	
	
	//enable the tooltips and format them at once
            series.tooltip().contentFormatter(function(){
                console.log(this);
            });
```
<br>
Note that we added extra fields to each data point, and one of the regions has one extra field more than other. Then we used {api:anychart.core.ui.Tooltip#contentFormatter}**.contentFormatter**{api} to transform our tooltips to make them show the information we need instead of what is displayed by default.
