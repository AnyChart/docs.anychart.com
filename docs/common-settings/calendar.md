# Calendar

## Overview

A calendar, according to the Wikipedia, is "a system of organizing days for social, religious, commercial or administrative purposes" by giving names to periods of time. 

People have been using calendars since the Bronze Age, usually dividing time into units by observing Sun and Moon. The term "calendar" derives from the Latin word "calendae", used as a name of the first day of the month in the ancient Roman calendar, which was later transformed into the Julian calendar and then into the Gregorian calendar, the most popular civil calendar today.

In AnyChart, a calendar is an abstract mathematical entity and a special object allowing to create and configure this entity. It does not have its own visual representation, it is used by other elements.

## Settings 

To create a calendar, you need to call the {api:anychart.scales#calendar}calendar(){api} method:

```
var calendar = anychart.scales.calendar();
```

To set unscheduled days off and work days, use the {api:anychart.scales.Calendar#availabilities}availabilities(){api} method:

```
var calendar = anychart.scales.calendar();
calendar.availabilities([
  {each:'day', from: '10:00', to: '18:00'},
  {each:'day', from: '14:00', to: '15:00', isWorking: false}
]);
```

To configure weekend range, use the {api:anychart.scales.Calendar#weekendRange}weekendRange(){api} method:

```
var calendar = anychart.scales.calendar();
calendar.weekendRange([0,6]);
```

To set timezone offset, use the {api:anychart.scales.Calendar#timezoneOffset}timezoneOffset(){api}

```
var calendar = anychart.scales.calendar();
calendar.timezoneOffset(-4*60);
```

## Getting Data

To obtain a working schedule in a certain period of time from the configured calendar, use the {api:anychart.scales.Calendar#getWorkingSchedule}getWorkingSchedule(){api}:

```
var calendar = anychart.scales.calendar();
calendar.availabilities([
  {each:'day', from: '10:00', to: '18:00'},
  {each:'day', from: '14:00', to: '15:00', isWorking: false}
]);
var getWorkingTime = calendar.getWorkingSchedule(Date.UTC(2016, 0, 31), Date.UTC(2016, 1, 1));
```