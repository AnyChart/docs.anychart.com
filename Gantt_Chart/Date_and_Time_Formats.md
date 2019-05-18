{:index 7}
# Date and Time Formats

## Overview

## Input

для задания дат можно использовать...

### Unix Timestamp

* Unix timestamp
* `1515974400000`


```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: 1515974400000,
    actualEnd: 1520640000000,
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: 1515974400000,
        actualEnd: 1516838400000
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 220}GANTT\_Date\_and\_Time\_01{sample}

### Date.UTC()

* Date.UTC()
* `Date.UTC(2018,0,15)`

misc:

* the Date.UTC() JavaScript method
* returns the Unix timestamp (of...)
* [Unix timestamp](#unix_timestamp)

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: Date.UTC(2018,0,15),
    actualEnd: Date.UTC(2018,2,10),
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart:  Date.UTC(2018,0,15),
        actualEnd:  Date.UTC(2018,0,25)
      }
  ]}
];
```

### Date Object

misc:

* Date object
* `new Date('2018-02-15T03:24:00')`

### String

a string with a date or date/time:

* `"2018-01-15"`
* `"2018-01-15 00:00:00.000"`

misc:

* при преобразованиии строки в дату используется `new Date(dateString)`
* `"2018-01-15"` эквивалентно `new Date("2018-02-15T03:24:00")`
* если не задан {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api}, то, как строка будет интерпертирована, может зависеть от браузера
* [пример date obj](http://playground.anychart.stg/VEb00OQx)
* внешняя ссылка: [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [string](#string)

### inputDateTimeFormat()

* {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api}

misc:

* [date/time syntax](../Common_Settings/Text_Formatters#date/time_syntax)


```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-15",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2018-01-15",
        actualEnd: "2018-01-25"
      }
  ]}
];

// set the input date/time format
anychart.format.inputDateTimeFormat("yyyy-MM-dd");

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 220}GANTT\_Date\_and\_Time\_02{sample}

### inputLocale()

the way how date/time strings are interpreted depends on...

* {api:anychart.format#inputLocale}inputLocale(){api}
* default: `"en-us"`

misc:

* requires using {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api}
* the locale must be set before the format
* источник локали: [fr-fr.js](https://cdn.anychart.com/releases/v8/locales/fr-fr.js)
* [inputDateTimeFormat()](#inputdatetimeformat\(\))
* [Common Settings: Localization](../Common_Settings/Localization)
* [date/time syntax](../Common_Settings/Text_Formatters#date/time_syntax)


```
<script src="http://mydomain.com/anychart-locales/fr-fr.js"></script>
```

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "15 janvier 2018",
    actualEnd: "10 mars 2018",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "15 janvier 2018",
        actualEnd: "25 janvier 2018"
      }
  ]}
];

// set the input locale
anychart.format.inputLocale("fr-fr");

// set the input date/time format
anychart.format.inputDateTimeFormat("d MMMM yyyy");

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 220}GANTT\_Date\_and\_Time\_03{sample}

## Output

the way how dates are displayed depends on...

### outputDateTimeFormat()

* {api:anychart.format#outputDateTimeFormat}outputDateTimeFormat(){api}
* {api:anychart.format#DateTimeFormat}outputDateFormat(){api}
* {api:anychart.format#TimeFormat}outputTimeFormat(){api}

defaults:

* dateFormat: `"y/MM/dd`,
* timeFormat: `"H:mm:ss"`,
* dateTimeFormat: `"y/MM/dd H:mm:ss"` / (?) поля из dateTimeLocale поля в локали /
* (?) где применяются дефолты?

misc:

* [date/time syntax](../Common_Settings/Text_Formatters#date/time_syntax)


```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-15",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2018-01-15",
        actualEnd: "2018-01-25"
      }
  ]}
];

// set the input date/time format
anychart.format.inputDateTimeFormat("yyyy-MM-dd");

// set the output date/time format
anychart.format.outputDateTimeFormat("d MMMM");

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 220}GANTT\_Date\_and\_Time\_04{sample}

### outputLocale()

* {api:anychart.format#outputLocale}outputLocale(){api}
* default: `"en-us"`

misc:

* источник локали: [fr-fr.js](https://cdn.anychart.com/releases/v8/locales/fr-fr.js)
* [Common Settings: Localization](../Common_Settings/Localization)
* [date/time syntax](../Common_Settings/Text_Formatters#date/time_syntax)


```
<script src="http://mydomain.com/anychart-locales/fr-fr.js"></script>
```

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-15",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2018-01-15",
        actualEnd: "2018-01-25"
      }
  ]}
];


// set the input date/time format
anychart.format.inputDateTimeFormat("yyyy-MM-dd");

// set the output locale
anychart.format.outputLocale("fr-fr");

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 220}GANTT\_Date\_and\_Time\_05{sample}

### format()

misc:

* (?) {api:?entry=format}format(){api}
* (?) tooltips & labels of the [data grid](Data_Grid) and [timeline](Timeline)
* (?) [data grid columns](Data_Grid/Columns), [timeline header](Timeline/Header)
* [text formatters](../Common_Settings/Text_Formatters)

???

* (?) [пример](https://playground.anychart.com/lxGU2Oem)

#### Tokens

misc:

* (?) списки токенов, имеющих отношение к датам
* [tokens](../Common_Settings/Text_Formatters#string_tokens)
* [formatting parameters](../Common_Settings/Text_Formatters#formatting_parameters)
* [date/time syntax](../Common_Settings/Text_Formatters#date/time_syntax)


```
// set the text of the second data grid column
chart.dataGrid().column(1).labels().format(
  "{%actualStart}{dateTimeFormat:dd MMM} – {%actualEnd}{dateTimeFormat:d MMM}"
);
```

{sample :height 260}GANTT\_Date\_and\_Time\_06{sample}

```
// set the output locale
anychart.format.outputLocale("fr-fr");

// set the text of the second data grid column
chart.dataGrid().column(1).labels().format(
  "{%actualStart}{dateTimeFormat:dd MMM} – {%actualEnd}{dateTimeFormat:d MMM}"
);
```

{sample :height 220}GANTT\_Date\_and\_Time\_07{sample}

#### Formatting Functions

misc:

* {api:anychart.format#dateTime}dateTime(){api}
* (?) списки полей, имеющих отношение к датам
* (?) без параметров - Unix timestamp
* [formatting functions](../Common_Settings/Text_Formatters#formatting_functions)
* [date/time syntax](../Common_Settings/Text_Formatters#date/time_syntax)


```
// set the text of the second data grid column
column_2.labels().useHtml(true);
column_2.labels().format(function() {
  var start = anychart.format.dateTime(this.actualStart, "dd MMM");
  var end = anychart.format.dateTime(this.actualEnd, "dd MMM");
  return "<span style='color:#64b5f6'>" + start +
         "</span> – <span style='color:#ffa000'>" + end + "</span>";
});
```

{sample :height 220}GANTT\_Date\_and\_Time\_08{sample}

### Column Presets

* [column presets](Data_Grid/Column_Presets#dates)