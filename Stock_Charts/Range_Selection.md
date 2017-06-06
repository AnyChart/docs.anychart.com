{:index 7.1}

# Range Selection UI

* [Overview](#overview)
* [Add to a chart](#add_to_a_chart)
* [Add to a separate DIV](#add_to_a_separate_div)
* [Adjusting Range Selector](#adjusting_range_selector)
 * [Customizing preset periods](#customizing_preset_periods)
 * [Creating custom periods](#creating_custom_periods)
 * [Zoom To Label](#zoom_to_label)
* [Adjusting Range Picker](#adjusting_range_picker)
 * [Input date format](#input_date_format)
 * [From and To Labels](#from_and_to_labels)

## Overview

Range Selection UI is on of the great chart navigation features AnyStock provides to a chart viewer to make the data mining process comfortable and easily navigate these time based charts. The core navigation tool is Scroller, which is described in [Scroller](Scroller) article. 

**Range Selector** helps to use scroller by providing a set of buttons to select certain periods of time.

**Range Picker** helps to use scroller by providing two input fields of preset format so a user can type in start and end dates.

Both range selector and range picker are a part of {api:anychart.ui}anychart.ui{api} package and you need to reference UI CSS file if you are using `anychart-bundle.min.js`:

```
<script src="https://cdn.anychart.com/js/latest/anychart-bundle.min.js"></script>
<link rel="stylesheet" href="https://cdn.anychart.com/css/latest/anychart-ui.min.css" />
```

Or, if you are using a specialized `anystock.min.js` you need to reference ui JavaScript file as well:

```
<script src="https://cdn.anychart.com/js/latest/anystock.min.js"></script>
<script src="https://cdn.anychart.com/js/latest/anychart-ui.min.js"/>
<link rel="stylesheet" href="https://cdn.anychart.com/css/latest/anychart-ui.min.css" />
```

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

// Render the range selection controls into some containers on a page
rangeSelector.render("rangeselectorContainer");
rangePicker.render("rangepickerContainer");
```

## Adjusting Range Selector

### Customizing preset periods

To customize preset periods you need to access {api:anychart.ui.RangeSelector#ranges}ranges(){api} array and change the fields you want to change or remove items you don't want to see. Each element of this array is an object of {api:anychart.ui.RangeSelector.Range}Range{api} type and contains the following fields:

<table>
<tr>
<th>Field</th>
<th>Type</th>
</tr>
<tr>
<td>anchor</td>
<td>{api:anychart.enums.StockRangeAnchor}StockRangeAnchor{api}</td>
</tr>
<tr>
<td>count</td>
<td>Number</td>
</tr>
<tr>
<td>text</td>
<td>String</td>
</tr>
<tr>
<td>Unit</td>
<td>{api:anychart.enums.StockRangeType}StockRangeType{api}</td>
</tr>
</table>

Modification of the fields may look like this:

```
var rangeSelector = anychart.ui.rangeSelector();

// remove the last element
rangeSelector.ranges().pop();
// modify the first element
rangeSelector.ranges()[0].count=5;
rangeSelector.ranges()[0].text="5 DAY";
```

{sample}STOCK\_Range\_Selection\_03{sample}

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
    'text': 'Full Range',
    'type': 'max'
}]);
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
