{:index 9}
# Settings from Data

## Overview

AnyChart js charting framework allows you to apply different visualization settings to a single point. It means that you can customize the point view explicitly from the data set. Let's consider how it works on a sample of JavaScript [Bar Chart](../Basic_Charts/Bar_Chart).

As you know you can use a data set to create charts with the following code:

```
//create data set
var data = [
  {x: 'Department Stores', value: 737166},
  {x: 'Discount Stores', value: 537166},
  {x: 'Men\'s/Women\'s Specialty Stores', value: 188662},
  {x: 'Juvenile Specialty Stores', value: 178662},
  {x: 'All other outlets', value: 89000}
];

//create bar chart
var chart = anychart.barChart();
var series = chart.bar(data);
```

And the chart will look this way:

{sample}Settings\_From\_Data\_01{sample}

Visual appearance of bars is defined using [these settings](../Basic_Charts/Bar_Chart#appearance):

```
var series = chart.bar(data);
series
    .fill('#6698FF .6')
        .hoverStroke("#0000A0", 4)
        .stroke('#56561a', 4)
        .hatchFill('diagonalbrick', '#348781')
        .hoverHatchFill('diagonalbrick', '#0000A0')
```

If you want to configure tooltips for all series - you should use  {api:anychart.charts.Cartesian#tooltip}tooltip(){api} methods, {api:anychart.core.cartesian.series.Base#labels}labels(){api} method configures series labels. Adding attributes with values to these methods, you can change visual appearance, position and format of the same-named elements.

```
tooltips = series.tooltip();
tooltips.enabled(true);
ttTitle = tooltips.title().enabled(true);
ttTitle.text('Information:');
series.labels().enabled(true).anchor('leftCenter').position('rightCenter').fontSize(13);
```

Look at the demonstration of these settings in the Single-Series Bar Chart sample:

{sample}Settings\_From\_Data\_02{sample}

As you can see, the settings are applied to all point in series, but sometimes it is necessary to highlight a specific point using a custom view. To make it you can define the point settings directly in a data set:

```
var data = [
  {x: 'Department Stores', value: 737166, fill:{color: 'red', opacity: '.5'}},
  {x: 'Discount Stores', value: 537166},
  {x: 'Men\'s/Women\'s Specialty Stores', value: 188662},
  {x: 'Juvenile Specialty Stores', value: 178662},
  {x: 'All other outlets', value: 89000}
];
```

Using this way you can redefine all visualization parameters that are available for this type of chart:

```
var data = [
  {x: 'Department Stores', value: 737166, fill:{color: 'red', opacity: '.7'}, hatchFill:{hatchType:'diagonalbrick',color: 'gray'}, marker:{type:'star5', fill:'gold', size: 12, enabled: true}, hoverMarker: {size: 22}},
  {x: 'Discount Stores', value: 537166},
  {x: 'Men\'s/Women\'s Specialty Stores', value: 188662},
  {x: 'Juvenile Specialty Stores', value: 178662},
  {x: 'All other outlets', value: 89000}
];
```

{sample}Settings\_From\_Data\_03{sample}

It was a simple demonstration of this feature, we've created the sample below to illustrate more opportunities:

{sample :height 450}Settings\_From\_Data\_04{sample}

## Supported Functionality

In this way you can configure all main series settings like {api:anychart.core.cartesian.series.Base#labels}labels(){api}, {api:anychart.core.polar.series.Marker#fill}fill(){api}, {api:anychart.core.polar.series.Marker#stroke}stroke(){api}, {api:anychart.core.cartesian.series.Line#markers}markers(){api}.
