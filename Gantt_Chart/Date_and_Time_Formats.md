{:index 7}
# Date and Time Formats

## Overview

## Input

для задания дат можно использовать...

### Unix Timestamp

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
* `Date.UTC(2018,0,15,3)`

misc:

* the Date.UTC() JavaScript method
* returns the Unix timestamp (of...)
* [Unix timestamp](#unix_timestamp)

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

{sample :height 220}GANTT\_Date\_and\_Time\_01{sample}

### inputLocale()

* {api:anychart.format#inputLocale}inputLocale(){api}
* default: `"en-us"`

the way how date/time strings are interpreted depends on...

misc:

* requires using {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api}
* the locale must be set before the format
* источник локали: [fr-fr.js](https://cdn.anychart.com/releases/v8/locales/fr-fr.js)
* [inputDateTimeFormat()](#inputDateTimeFormat\(\))
* [Common Settings: Localization](../Common_Settings/Localization)


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
* [formatting parameters](../Common_Settings/Text_Formatters#formatting_parameters)


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

## Formatting

* [guide: formatting](http://userguide.icu-project.org/formatparse/datetime)

Datetime formatting functions following the pattern specification as defined:

 * in JDK, ICU and CLDR, with minor modification for typical usage in JS.
 * Pattern specification:
 * {@link http://userguide.icu-project.org/formatparse/datetime}


<table><tr><th>Symbol</th><th>Meaning</th><th>Presentation</th><th>Example</th>
<tr><td>G</td><td>era designator</td><td>(Text)</td><td>AD</td></tr>
<tr><td>y</td><td>year</td><td>(Number)</td><td>1996</td></tr>
<tr><td>Q</td><td>quarter</td><td>(Text)</td><td>Q3 & 3rd quarter</td></tr>
<tr><td>M</td><td>month in year</td><td>(Text & Number)</td><td>July & 07</td></tr>
<tr><td>L</td><td>month in year (standalone)</td><td>(Text & Number)</td><td>July & 07</td></tr>
<tr><td>d</td><td>day in month</td><td>(Number)</td><td>10</td></tr>
<tr><td>h</td><td>hour in am/pm (1~12)</td><td>(Number)</td><td>12</td></tr>
<tr><td>H</td><td>hour in day (0~23)</td><td>(Number)</td><td>0</td></tr>
<tr><td>m</td><td>minute in hour</td><td>(Number)</td><td>30</td></tr>
<tr><td>s</td><td>second in minute</td><td>(Number)</td><td>55</td></tr>
<tr><td>S</td><td>fractional second</td><td>(Number)</td><td>978</td></tr>
<tr><td>E</td><td>day of week</td><td>(Text)</td><td>Tue & Tuesday</td></tr>
<tr><td>c</td><td>day of week (standalone)</td><td>(Text & Number)</td><td>2 & Tues & Tuesday & T</td></tr>
<tr><td>w</td><td>week in year</td><td>(Number)</td><td>27</td></tr>
<tr><td>a</td><td>am/pm marker</td><td>(Text)</td><td>PM</td></tr>
<tr><td>k</td><td>hour in day (1~24)</td><td>(Number)</td><td>24</td></tr>
<tr><td>K</td><td>hour in am/pm (0~11)</td><td>(Number)</td><td>0</td></tr>
<tr><td>z</td><td>time zone</td><td>(Text)</td><td>Pacific Standard Time</td></tr>
<tr><td>Z</td><td>time zone (RFC 822)</td><td>(Number)</td><td>-0800</td></tr>
<tr><td>v</td><td>time zone (generic)</td><td>(Text)</td><td>America/Los_Angeles</td></tr>
<tr><td>V</td><td>time zone</td><td>(Text)</td><td>Los Angeles Time</td></tr>
<tr><td>'</td><td>escape for text</td><td>(Delimiter)</td><td>'Date='</td></tr>
<tr><td>'</td><td>single quote</td><td>(Literal)</td><td>'o''clock'</td></tr></table>


The count of pattern letters determine the format:

* **Text:** 4 or more, use full form, <4, use short or abbreviated form if it exists. (e.g., "EEEE" produces "Monday", "EEE" produces "Mon")

* **Number:** the minimum number of digits. Shorter numbers are zero-padded to this amount (e.g. if "m" produces "6", "mm" produces "06"). Year is handled specially; that is, if the count of 'y' is 2, the Year will be truncated to 2 digits. (e.g., if "yyyy" produces "1997", "yy" produces "97".) Unlike other  fields, fractional seconds are padded on the right with zero.

* **Text & Number:** 3 or over, use text, otherwise use number. (e.g., "M" produces "1", "MM" produces "01", "MMM" produces "Jan", and "MMMM" produces "January".)

* Any characters in the pattern that are not in the ranges of ['a'..'z'] and ['A'..'Z'] will be treated as quoted text. For instance, characters like ':', '.', ' ', '#', and '@' will appear in the resulting time text even they are not embraced within single quotes.
