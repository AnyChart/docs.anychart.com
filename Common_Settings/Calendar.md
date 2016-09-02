# Calendar

* [Settings](#settings)
* [Getting Data](#getting_data)
* [Use](#use)

A calendar, according to the Wikipedia, is "a system of organizing days for social, religious, commercial or administrative purposes" by giving names to periods of time. 

People have been using calendars since the Bronze Age, usually dividing time into units by observing Sun and Moon. The term "calendar" derives from the Latin word "calendae", used as a name of the first day of the month in the ancient Roman calendar, which was later transformed into the Julian calendar and then into the Gregorian calendar, the most popular civil calendar today.

In AnyChart, a calendar is an abstract mathematical entity and a special object allowing to create and configure this entity. It does not have its own visual representation, but can be used in any chart to... (ДОПИСАТЬ ЧТО ВЫЯСНИТСЯ)

## Settings 

To create a calendar, you need to call the {api:anychart.xxx}calendar(){api} method:

```
var calendar = anychart.scales.calendar();
```

Use the {api:anychart.xxx}yearStarts(){api} method to set the number of the first month in the year, and note that months are numbered from 0 (January) to 11 (December):

```
// set March as the beginning of the year
calendar.yearStarts(2);

```
Use the {api:anychart.xxx}weekStarts(){api} method to set the beginning of the week, days being numbered from 0 (Monday) to 6 (Sunday):

```
// set Sunday as the first day of the week
calendar.weekStarts(6);
```

Regular days off are set via the {api:anychart.xxx}weekends(){api} method:

```
// set Saturday and Sunday as regular days off
calendar.weekends([5, 6]);
```

To set unscheduled days off and work days, use {api:anychart.xxx}availability(){api} :

```
calendar.availability([
    {date: Date, isWorking: false}, // set 7 April as an unscheduled day off.
    {date: Date, isWorking: true}, // set the 8 April as an unscheduled work day.
    ]);
```

The same method sets regular and unscheduled work and spare hours:

```
calendar.availability([

    // set regular work hours: from Monday to Friday, between x:x and x:x 
    {dayOfWeek: 0-6, from: Time, to: Time, isWorking: true},

    // set regular spare hours: from Monday to Friday, between x:x and x:x
    {dayOfWeek: 0-6, from: Time, to: Time, isWorking: false},

    // set unscheduled work hours: 10 October, from x:x to x:x
    {date: Date, from: Time, to: Time, isWorking: true},

    // set unscheduled spare hours: 11 October, from x:x to x:x
    {date: Date, from: Time, to: Time, isWorking: false},
]);
```

## Getting Data

After the calendar is configured, it can return some useful data.

The following code shows how to define whether a day of interest is a work day:

```
    // sample comment
    sample.code();
```

That is how you can get intervals of work time falling in a given period of time:


To get the number of work hours falling in a given period of time, use this code:

```
    // sample comment
    sample.code();
```

## Use

