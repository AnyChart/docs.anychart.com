{:index 7}
# Date and Time Formats

## Overview

## Input

(?) This section lists the ways how you can format input dates.

### Unix Timestamp

One of the available input formats is the [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).

For example, *January 15, 2018* = `1515974400000`.

In the sample below, this format is used to create a Gantt chart:

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
```

{sample :height 220}GANTT\_Date\_and\_Time\_01{sample}

### Date.UTC()

The [Date.UTC()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC) JavaScript method allows setting the date or date/time. It returns the [Unix timestamp](#unix_timestamp), so it is equivalent to it.

For example, *January 15, 2018* =

* `Date.UTC(2018,0,15)`
* `Date.UTC(2018,0,15,0,0,0,0)`

Sample Code

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

You can set the date or date/time with the help of the [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

For example, *January 15, 2018* =

* `new Date("2018-01-15")`
* `new Date("2018-01-15T00:00:00.000Z")`

Sample Code

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: new Date("2018-01-15"),
    actualEnd: new Date("2018-03-10"),
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: new Date("2018-01-15"),
        actualEnd: new Date("2018-01-25")
      }
  ]}
];

```

### String

To set dates, you can use strings with dates or date/times. Anychart automatically converts them to [Date objects](#date_object). For example, the string `"2018-01-15"` is equivalent to `new Date("2018-01-15")`.

Various date/time patterns can be used. Here is the default one: *January 15, 2018* =

* `"2018-01-15"`
* `"2018-01-15T00:00:00.000Z"`


As a rule, to make sure that strings are interpreted correctly, you should also set:

* [input date/time format](#inputdatetimeformat\(\))
* [input locale](#inputlocale\(\))

Strings with the default pattern do not require any additional settings, though it is still highly recommended to set the input date/time format. Otherwise, the way how dates are interpreted may be affected by users' browser settings.

Sample Code

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
```

### inputDateTimeFormat()

When you use [strings](#string) to set dates, specify the input date/time format to make sure that they are interpreted correctly.

Call the {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api} method and pass a string with the [date/time pattern](../Common_Settings/Text_Formatters#date/time_syntax) used in your data:

```
anychart.format.inputDateTimeFormat("yyyy-MM-dd");
```

The following sample shows how to set the input date format:

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

When you use [strings](#string) to set dates, sometimes you need to set the input [locale](../Common_Settings/Localization).

In the head section of your web page, place a link to the locale on your server or on [AnyChart CDN](https://cdn.anychart.com/):

```
<script src="https://cdn.anychart.com/locale/1.1.0/fr-fr.js"></script>
```

Then pass the code of the locale to {api:anychart.format#inputLocale}inputLocale(){api}:

```
anychart.format.inputLocale("fr-fr");
```

The default locale is `"en-us"`. Other available codes listed in the CODE column on [AnyChart CDN](https://cdn.anychart.com/).

**After** setting the locale, you should also set the [input date/time format()](#inputdatetimeformat\(\)).

The following sample shows how the input locale works:

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