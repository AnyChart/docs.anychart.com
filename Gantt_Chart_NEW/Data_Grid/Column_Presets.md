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

Please note that both default and custom data fields can be formatted. Default fields are listed in the [Project Chart](../Project_Chart#data_fields) and [Resource Chart](../Resource_Chart#data_fields) articles. (?)

## Default Presets

Default presets affect the **text format** and **width** of columns.

To apply a default preset, access a column and call the {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api} method with two parameters: a data field you are going to format and one of the enums listed in {api:anychart.enums.ColumnFormats}anychart.enums.ColumnFormats{api}:

* `"text"` – to display text [values](#values)
* `"short-text"` – to display short text [values](#values)
* `"direct-numbering"` – to display numeric [values](#values)
* `"date-common-log"` – to format [dates](#dates)
* `"date-dmy-dots"` – to format [dates](#dates)
* `"date-iso-8601"` – to format [dates](#dates)
* `"date-us-short"` – to format [dates](#dates)
* `"percent"` – to format [percents](#percents)
* `"financial"` – to format [financial data](#financial_data)

That is how it looks like:

```
// configure the first data grid column
chart.dataGrid().column(0).setColumnFormat("actualStart", "date-common-log");
```

misc:

* `"text"` = value of the data field


### Values

text & numeric values:

* `"text"`
* `"short-text"`
* `"direct-numbering"`

sample:

* `"id"`


{sample :height 260}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_01{sample}

### Dates

dates:

* `"date-common-log"`
* `"date-dmy-dots"`
* `"date-iso-8601"`
* `"date-us-short"`

sample:

* `"actualStart"`


{sample :height 260}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_02{sample}

### Percents

percents:

* `"percent"`

sample:

* `"progressValue"`

{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_03{sample}

### Financial Data

financial:

* `"financial"`

sample:

* custom field `"budget"`


{sample :height 220}GANTT\_NEW\_Data\_Grid\_Column\_Presets\_04{sample}

## Custom Presets

misc:

* {api:anychart.core.ui.DataGrid.Column#setColumnFormat}setColumnFormat(){api}
* [text formatters](../../Common_Settings/Text_Formatters)
* [Columns: Tokens](Columns#tokens)
* [Columns: Formatting Functions](Columns#formatting_functions)


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
