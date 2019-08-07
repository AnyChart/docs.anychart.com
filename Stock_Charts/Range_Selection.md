{:index 7.1}

# Range Selection UI

## Overview

Range Selection UI is on of the great chart navigation features AnyStock provides to a chart viewer to make the data mining process comfortable and easily navigate these time based charts. The core navigation tool is Scroller, which is described in [Scroller](Scroller) article. 

**Range Selector** helps to use scroller by providing a set of buttons to select certain periods of time.

**Range Picker** helps to use scroller by providing two input fields of preset format so a user can type in start and end dates.

## Modules

Both the range selector and range picker require the [Common UI](../Quick_Start/Modules#common_ui) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui.min.js"></script>  
```

Also, you should reference the `anychart-ui.min.css` file:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css"/>
```

Learn more: [Modules](../Quick_Start/Modules).


## Add to a chart

The easiest way to add range selector or range picker is to add them (render to) to an instance of a stock chart. You need to create them using constructor methods {api:anychart.ui.RangeSelector}rangeSelector(){api} and {api:anychart.ui.RangePicker}rangePicker{api} before that:

```
chart = anychart.stock();

var rangeSelector = anychart.ui.rangeSelector();
var rangePicker = anychart.ui.rangePicker();

chart.title("Render the range selectors into a chart instance");

chart.container("container");
chart.draw();

// Render the range picker into an instance of a stock chart
rangePicker.render(chart);
rangeSelector.render(chart);
```

{sample}STOCK\_Range\_Selection\_01{sample}

## Add to a separate DIV

You can choose to render Range Selector or Range Picker into a separate div, in this case you have to specify what instance of a stock chart it controls using *target()* method:

```
chart = anychart.stock();

var rangeSelector = anychart.ui.rangeSelector();
var rangePicker = anychart.ui.rangePicker();

// specify which chart range selector controls
rangeSelector.target(chart);
rangePicker.target(chart);

// render the chart
chart.container("container");
chart.draw();

// Render the range selection controls into containers on a page
rangeSelector.render(document.getElementById("rangeselectorContainer"));
rangePicker.render(document.getElementById("rangepickerContainer"));
```

{sample}STOCK\_Range\_Selection\_02{sample}

## Adjusting Range Selector

### Customizing preset periods

To customize preset periods you need to use {api:anychart.ui.RangeSelector#ranges}ranges(){api} array and change the fields you want to change or remove items you don't want to see. Each element of this array is an object of {api:anychart.ui.RangeSelector.Range}Range{api} type and contains the following fields:

<table>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>`anchor`</td>
<td>{api:anychart.enums.StockRangeAnchor}anychart.enums.StockRangeAnchor{api}</td>
<td>Range starting point.</td>
</tr>
<tr>
<td>`type`</td>
<td>{api:anychart.enums.StockRangeType}anychart.enums.StockRangeType{api}</td>
<td>Type of range measurement: preset or unit.</td>
</tr>
<tr>
<td>`unit`</td>
<td>{api:anychart.enums.Interval}anychart.enums.Interval{api}</td>
<td>When `type` is set to `'unit'` - range measurement.</td>
</tr>
<tr>
<td>`count`</td>
<td>Number</td>
<td>When `type` is set to `'unit'` (and `unit` is set) or `'points'` - number of units or points.</td>
</tr>
<tr>
<td>`startDate`</td>
<td>String</td>
<td>Start date for the fixed range when type is set to `'range'`.</td>
</tr>
<tr>
<td>`endDate`</td>
<td>String</td>
<td>End date for the fixed range when type is set to `'range'`.</td>
</tr>
<tr>
<td>`text`</td>
<td>String</td>
<td>Text to display.</td>
</tr>
</table>

Modification of the fields may look like this:

```
var rangeSelector = anychart.ui.rangeSelector();

// get a copy of existing ranges
var customRanges = rangeSelector.ranges();

// remove the last element
customRanges.pop();
// modify the first element
customRanges[0].type = "unit";
customRanges[0].unit = "day";
customRanges[0].count = 5;
customRanges[0].text = "5 DAYS";

// apply the changes
rangeSelector.ranges(customRanges);
```

{sample}STOCK\_Range\_Selection\_03{sample}

### Creating custom periods

You can completely override the list of ranges and specify your own list: 

```
var rangeSelector = anychart.ui.rangeSelector();

var customRanges = [
    {
        'text': '5 Days',
        'type': 'unit',
        'unit': 'day',
        'count': 5,
        'anchor': 'first-visible-date'
    },
    {
        'text': 'Year 2007',
        'startDate': '2007 Jan 1',
        'endDate': '2007 Dec 31',
        'type': 'range'
    },
    {
        'text': 'Full Range',
        'type': 'max'
    },
    {
        'text': '10',
        'type': 'points'
        'count': 10,
        'anchor': 'last-date'
    }
];

// Set custom ranges for the range selector.
rangeSelector.ranges(customRanges);
```

{sample}STOCK\_Range\_Selection\_04{sample}

### Zoom To Label

You can change the text in the label that accompanies Range selector using {api:anychart.ui.RangeSelector#zoomLabelText}zoomLabelText(){api} method:

```
var rangeSelector = anychart.ui.rangeSelector();
rangeSelector.zoomLabelText("Show:");
```

## Adjusting Range Picker

### Input date format

If you want to change input format of range picker fields use {api:anychart.ui.RangePicker#format}format(){api}:

```
var rangePicker = anychart.ui.rangePicker();

// Set date time format.
rangePicker.format('dd MM yyyy');
```

{sample}STOCK\_Range\_Selection\_05{sample}

### From and To Labels

You can change the text of labels using {api:anychart.ui.RangePicker#fromLabelText}fromLabelText(){api} and {api:anychart.ui.RangePicker#toLabelText}toLabelText(){api} method:

```
var rangePicker = anychart.ui.rangePicker();
rangePicker.fromLabelText("Start:");
rangePicker.toLabelText("End:");
```
