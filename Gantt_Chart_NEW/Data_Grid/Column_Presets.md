{:index 4}
# Column Presets

## Overview

Using column presets is an alternative way of adjusting the [text](Columns#text_\(labels\)) and [width](Columns#width) of data grid columns.

To apply a preset, you should first access a default column or create a [new one](Columns#custom_columns): combine {api:anychart.charts.Gantt#dataGrid}dataGrid(){api} with {api:anychart.core.ui.DataGrid#column}column(){api} and specify its index:

```
// access the first data grid column
var column_1 = chart.dataGrid().column(0);
```

Then call the {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api} with two parameters: a data field you want to use in the column text and either a [default preset](#default_presets) or a [custom one](#custom_presets).

**Note:** Both default and custom data fields can be formatted. Default fields are listed in the [Project Chart](../Project_Chart#data_fields) and [Resource Chart](../Resource_Chart#data_fields) articles. (?)

## Default Presets

Default presets affect the **text format** and **width** of columns.

To apply a default preset, access a column and call the {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api} method with two parameters:
* a data field you are going to format
* one of the enums listed in {api:anychart.enums.ColumnFormats}anychart.enums.ColumnFormats{api}


```
// configure the first data grid column
chart.dataGrid().column(0).setColumnFormat("actualStart", "date-common-log");
```

You can display values as:

* [values](#values) (without formatting) – `"text"`, `"short-text"`, `"direct-numbering"`
* [dates](#dates) – `"date-common-log"`, `"date-dmy-dots"`, `"date-iso-8601"`, `"date-us-short"`
* [percents](#percents) – `"percent"`
* [financial data](#financial_data): – `"financial"`

### Values

To display values without formatting, use these presets (they differ only in the column width):

* `"text"` for text values
* `"short-text"` for short text values
* `"direct-numbering"` for numeric values

In the following sample, there are three columns displaying the content of the `"id"` data field with different presets.  As you can see, the text is the same everywhere, but the width is different:

```
// configure the first data grid column
column_1 = chart.dataGrid().column(0);
column_1.setColumnFormat("id", "text");

// configure the second data grid column
column_2 = chart.dataGrid().column(1);
column_2.setColumnFormat("id", "short-text");

// add and configure the third data grid column
column_3 = chart.dataGrid().column(2);
column_3.setColumnFormat("id", "direct-numbering");
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_01{sample}

### Dates

The following presets are used to apply different formats to dates:

* `"date-common-log"` – *dd/MMM/yyyy*
* `"date-dmy-dots"` – *dd.MM.yy*
* `"date-iso-8601"` – *yyyy-MM-dd*
* `"date-us-short"` – *d/MM/yyyy*

**Note:** (?) These presets can be applied only to dates set as Unix timestamps – see [Date and Time Formats](../Date_and_Time_Formats).

In the sample below, there are two columns, both showing the content of the `"actualStart"` data field. The first column displays [values without formatting](#values), and in the second one they are formatted as `"date-common-log"`. You can also try other date formats.

```
// configure the first data grid column
column_1 = chart.dataGrid().column(0);
column_1.setColumnFormat("actualStart", "text");

// configure the second data grid column
column_2 = chart.dataGrid().column(1);
column_2.setColumnFormat("actualStart", "date-common-log");
```

{sample :height 260}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_02{sample}

### Percents

The `"percent"` preset allows formatting values as percents.

In this sample, both columns show the content of the `"progressValue"` data field – the first one displays [values without formatting](#values), and in the second one they are formatted as percents:

```
// configure the first data grid column
column_1 = chart.dataGrid().column(0);
column_1.setColumnFormat("progressValue", "direct-numbering");


// configure the second data grid column
column_2 = chart.dataGrid().column(1);
column_2.setColumnFormat("progressValue", "percent");
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_03{sample}

### Financial Data

The `"financial"` preset allows formatting values as financial data.

In the following sample, both columns show the content of the custom `"budget"` data field – first one displays [values without formatting](#values), and in the second one they are formatted as financial data:

```
// configure the first data grid column
column_1 = chart.dataGrid().column(0);
column_1.setColumnFormat("budget", "direct-numbering");

// configure the second data grid column
column_2 = chart.dataGrid().column(1);
column_2.setColumnFormat("budget", "financial");
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_04{sample}

## Custom Presets

Custom presets affect the **text format**, **text style**, and **width** of columns.

To apply a custom preset, access a column and call the {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api} method with two parameters:
* a data field you are going to format
* an object with settings

In the object, you can use the following fields:

* `formatter` to format the text with the help of a custom function
* `textStyle` to set the text style
* `width` to set the column width

In this sample, a custom preset is used to configure the second data grid column, which displays the content of the `"name"` data field:

```
// configure the second data grid column
chart.dataGrid().column(1).setColumnFormat(
    "name",
    {
      formatter: function(value) {
        return value.toUpperCase();
      },
      textStyle: {fontColor: "#64b5f6"},
      width: 130
    }
);
```

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_05{sample}
