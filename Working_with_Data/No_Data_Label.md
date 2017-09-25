{:index 10}
# No Data Label

## Overview

"No data label" feature allows you to show a message or modify the look of the chart in cases when there is nothing to show. There are a lot of cases when there is nothing to show: the data set is empty or not set, the series are hidden, the series are there but there are no point to show. By default "No Data Label" appears when AnyChart can't find any element to be put on a chart. Series with empty values are still considered as "Data has been set" event.


## Enable

Use {api:anychart.core.Chart#noData}noData(){} method to enable "No data" label:

```
chart.noData(true);
```

## Appearance

{api:anychart.core.NoDataSettings}anychart.core.NoDataSettings{api} object had a label which is an instance of {api:anychart.core.ui.Label}anychart.core.ui.Label{api} class. This label can be tuned as any other label in AnyChart.

```
noDataLabel = chart.noData().label();
noDataLabel.text("Error: could not connect to data server");
noDataLabel.background().enabled(true);
noDataLabel.background().fill("White 0.5");
```

## Events

### Data Change

To handle "No data" event manually add `'dataChanged'` event handler, `hasData` property of the event context can be used to distinguish between data arrival and data removal cases.

```
chart.listen("dataChanged", function(event){
    if (event.hasData) {
        console.log("data added event");
    } else {
        console.log("no data event");
        
        // prevents no data label from showing when 
        // there are series on the chart
        // ie series are hidden using legend

        if (chart.getSeriesCount() > 0) {
            event.preventDefault();
        }
    }
});
```

### Label

You can attach listeners to "No data" label, this may be handy to use it as a button that restarts the process of loading data:

```
chart.noData().label().listen('click', function() {
    console.log('attempt to load data');
});
```
