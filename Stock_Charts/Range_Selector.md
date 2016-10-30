{:index 7.1}

#Range Selector

* [Overview](#overview)
* [Add to a chart](#add_to_a_chart)
* [Add to a separate DIV](#add_to_a_separate_div)
* [Adjust](#adjust)
 * [Customizing preset periods](#customizing_preset_periods)
 * [Creating custom periods](#creating_custom_periods)

## Overview

AnyStock provides a lot of features and tools to a chart viewer to make the working process rather comfortable and easily navigate these time based charts. The core navigation tool is Scroller, which is described in [Scroller](Scroller) article. Range Selector helps to use scroller by providing a set of buttons to select certain periods of time.

Range selector is a part of {api:anychart.ui}anychart.ui{api} package and you need to reference UI CSS file if you are using `anychart-bundle.min.js`:

```
<script src="http://cdn.anychart.com/js/latest/anychart-bundle.min.js"></script>
<link rel="stylesheet" href="http://static.anychart.com/css/develop/anychart-ui.min.css" />
```

Or, if you are using a specialized `anystock.min.js` you need to reference ui JavaScript file as well:

```
<script src="http://cdn.anychart.com/js/latest/anystock.min.js"></script>
<script src="https://cdn.anychart.com/js/latest/anychart-ui.min.js"/>
<link rel="stylesheet" href="http://static.anychart.com/css/develop/anychart-ui.min.css" />
```

## Add to a chart

The easiest way to add range selector is to add it (render to) to an instance of a stock chart:

```
chart = anychart.stock();

var rangeSelector = anychart.ui.rangeSelector();

chart.title("Render the range picker into a chart instance");

chart.container("container");
chart.draw();

// Render the range picker into an instance of a stock chart
rangeSelector.render(chart);
```

{sample}STOCK\_Range\_Selector\_01{sample}

## Add to a separate DIV

You can choose to render Range Selector into a separate div, in this case you have to specify what instance of a stock chart it controls using {api:anychart.ui.RangeSelector#target}target(){api} method:

```
chart = anychart.stock();

var rangeSelector = anychart.ui.rangeSelector();

// specify which chart range selector controls
rangeSelector.target(chart);

// render the chart
chart.container("container");
chart.draw();

// Render the range picker into some container on a page
rangeSelector.render("rangeselectorContainer");
```

## Adjust

### Customizing preset periods

```
```

{sample}STOCK\_Range\_Selector\_03{sample}

### Creating custom periods

You can completely override the list of ranges and specify your own list: 

```
var rangeSelector = anychart.ui.rangeSelector();

// Set custom ranges for range selector.
rangeSelector.ranges([{
    'text': 'Year 2006',
    'startDate': '2006 Jan 1',
    'endDate': '2006 Dec 31'
}, {
    'text': 'Year 2007',
    'startDate': '2007 Jan 1',
    'endDate': '2007 Dec 31'
}, {
    'text': 'Year 2008',
    'startDate': '2008 Jan 1',
    'endDate': '2008 Dec 31'
}]);
```

{sample}STOCK\_Range\_Selector\_04{sample}

