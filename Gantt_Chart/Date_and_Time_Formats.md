{:index 7}
# Date and Time Formats

## Input

для задания дат можно использвоать:

* **1.** Unix timestamp – `1518663600000`
* **2.** the Date.UTC() JavaScript method – `Date.UTC(2018,0,15,3)`
* **3.** a Date object – `new Date('2018-02-15T03:24:00')`
* **4.** a string with a date or date/time – `"2018-01-15"` or `"2018-01-15 00:00:00.000"`
* **5.** {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api}
* **6.** {api:anychart.format#inputLocale}inputLocale(){api} (`"en-us"` by default)

### Unix Timestamp

* Unix timestamp
* `1518663600000`


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
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: 1516406400000,
        actualEnd: 1517702400000
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: 1517788800000,
        actualEnd: 1517788800000
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: 1517788800000,
        actualEnd: 1519430400000
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: 1519516800000,
        actualEnd: 1520640000000
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

* the Date.UTC() JavaScript method
* возвращает Unix timestamp
* `Date.UTC(2018,0,15,3)`

### Date Object

* a Date object
* `new Date('2018-02-15T03:24:00')`
* при преобразованиии строки в дату используется `new Date(dateString)`
* `"2018-01-15"` эквивалентно `new Date("2018-02-15T03:24:00")`
* если не задан {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api}, то, как строка будет интерпертирована, может зависеть от браузера
* [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [пример date obj](http://playground.anychart.stg/VEb00OQx)


### String

a string with a date or date/time:

* `"2018-01-15"`
* `"2018-01-15 00:00:00.000"`

### inputDateTimeFormat()

* the {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api} method


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
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2018-01-20",
        actualEnd: "2018-02-04"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-24"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-10"
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

* the {api:anychart.format#inputLocale}inputLocale(){api} method (`"en-us"` by default)

то, какая строка с датой воспринимается, зависит от:

* входного формата даты-времени {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api}
* входной локали {api:anychart.format#inputLocale}inputLocale(){api}
* {api:anychart.format#inputLocale}inputLocale(){api} требует использования {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api}
* см.: [Common Settings: Localization](../Common_Settings/Localization)

примеры:

* [пример en-us](https://playground.anychart.com/api/format/_samples/anychart.format.inputDateTimeFormat): `"en-us"`, `"yyyy MMM d"`, `"2016 Feb 4"`
* [пример ja-jp](https://playground.anychart.com/JfjNwZsx): `"ja-jp"`, `"yyyy MMM d"`, `"2016 2月 4"`
* источник локали: [ja-jp.js](https://cdn.anychart.com/releases/v8/locales/ja-jp.js)


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
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "20 janvier 2018",
        actualEnd: "4 février 2018"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "5 février 2018",
        actualEnd: "5 février 2018"
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "5 février 2018",
        actualEnd: "24 février 2018"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "25 février 2018",
        actualEnd: "10 mars 2018"
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

the way how dates are displayed depends on:

**1.** 

outputDateFormat 
outputDateTimeFormat
outputTimeFormat

по умолчанию это 

dateFormat: 'y/MM/dd',
timeFormat: 'H:mm:ss',
dateTimeFormat: 'y/MM/dd H:mm:ss', поля из dateTimeLocale поля в локали

**2.** outputLocale - по умолчанию "`en-us`"

**3.** настроек тултипов, лейблов, колонок, хедереов timeline - у них всех есть форматтеры в которых можно писать 

 "{%actualstart}{dateTimeFormat:yyyy MMM d}" в токенах
и 
 anychart.format.dateTime(this.actualStart);
и
anychart.format.dateTime(this.actualEnd, "E");

в функциях

[пример](https://playground.anychart.com/lxGU2Oem)

### outputDateTimeFormat()

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
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2018-01-20",
        actualEnd: "2018-02-04"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-24"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-10"
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
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2018-01-20",
        actualEnd: "2018-02-04"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-24"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-10"
      }
  ]}
];


// set the input date/time format
anychart.format.inputDateTimeFormat("yyyy-MM-dd");

// set the output locale
anychart.format.outputLocale("fr-fr");

// set the output date/time format
anychart.format.outputDateTimeFormat("d MMMM");

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 220}GANTT\_Date\_and\_Time\_05{sample}

### format()

```

```

{sample :height 220}GANTT\_Date\_and\_Time\_06{sample}

## Formatting

misc:

* [guide: formatting](http://userguide.icu-project.org/formatparse/datetime)

Datetime formatting functions following the pattern specification as defined:

 * in JDK, ICU and CLDR, with minor modification for typical usage in JS.
 * Pattern specification:
 * {@link http://userguide.icu-project.org/formatparse/datetime}
 * Symbol   Meaning                    Presentation       Example
 * G        era designator             (Text)             AD
 * y        year                       (Number)           1996
 * Q        quarter                    (Text)             Q3 & 3rd quarter
 * M        month in year              (Text & Number)    July & 07
 * L        month in year (standalone) (Text & Number)    July & 07
 * d        day in month               (Number)           10
 * h        hour in am/pm (1~12)       (Number)           12
 * H        hour in day (0~23)         (Number)           0
 * m        minute in hour             (Number)           30
 * s        second in minute           (Number)           55
 * S        fractional second          (Number)           978
 * E        day of week                (Text)             Tue & Tuesday
 * c        day of week (standalone)   (Text & Number)    2 & Tues & Tuesday & T
 * w        week in year               (Number)           27
 * a        am/pm marker               (Text)             PM
 * k        hour in day (1~24)         (Number)           24
 * K        hour in am/pm (0~11)       (Number)           0
 * z        time zone                  (Text)             Pacific Standard Time
 * Z        time zone (RFC 822)        (Number)           -0800
 * v        time zone (generic)        (Text)             America/Los_Angeles
 * V        time zone                  (Text)             Los Angeles Time
 * '        escape for text            (Delimiter)        'Date='
 * ''       single quote               (Literal)          'o''clock'
 *
 * The count of pattern letters determine the format.
 * (Text): 4 or more, use full form, <4, use short or abbreviated form if it
 * exists. (e.g., "EEEE" produces "Monday", "EEE" produces "Mon")
 *
 * (Number): the minimum number of digits. Shorter numbers are zero-padded to
 * this amount (e.g. if "m" produces "6", "mm" produces "06"). Year is handled
 * specially; that is, if the count of 'y' is 2, the Year will be truncated to
 * 2 digits. (e.g., if "yyyy" produces "1997", "yy" produces "97".) Unlike other
 * fields, fractional seconds are padded on the right with zero.
 *
 * :(Text & Number) 3 or over, use text, otherwise use number. (e.g., "M"
 * produces "1", "MM" produces "01", "MMM" produces "Jan", and "MMMM" produces
 * "January".)
 *
 * Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 * ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 * '.', ' ', '#' and '@' will appear in the resulting time text even they are
 * not embraced within single quotes.
