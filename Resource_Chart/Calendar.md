{:index 3}
# Calendar

* [Overview](#overview)
* [Availabilities](#availabilities)
* [getWorkingSchedule](#getWorkingSchedule)
* [Setting the weekend](#setting_the_weekend)

## Overview

Calendar is a scale created specially for the Resource Chart. This feature allows to set the available working hours and edit the schedule. It responds to the [Event Listeners](../Common_Settings/Event_Listeners) and has its own special adjusting methods.

## Availabilities

The {api:anychart.scales.Calendar#availabilities}availabilities(){api} method defines the available working hours and hours off. It needs an array of objects as an argument; each object can have several parameters from the [type definitions list](anychart.scales.Calendar.Availability). The following sample sets 5 days a week as working with working hours from 10 a.m. till 5 p.m. with a lunch break. Two days a week (Sunday and Saturday) are chosen as a weekend.

```
// set availabilities
chart.calendar().availabilities([
    {each: "day", from: "10:00", to: "17:00", isWorking: true},
    {each: "day", from: "13:00", to: "14:00", isWorking: false},
    {each: "week", on: "0", isWorking: "false"},
    {each: "week", on: "6", isWorking: "false"}
]);
```

{sample}Resource\_Calendar\_01{sample}

## getWorkingSchedule

The {api:anychart.scales.Calendar#getWorkingSchedule}getWorkingSchedule(){api} method helps to get the volume of a working time in a passed period of time. This method needs two dates (start and end dates of a time period), the unit of the time representation and the count of units.

```
// set the time interval you need the information about
chart.calendar().getWorkingSchedule("2016-06-10", "2016-06-14", "hour");
```

{sample}Resource\_Calendar\_02{sample}

## Setting the weekend

As well as working hours and working days, it is possible to set weekends. There is a special method in the Resource Calendar for setting the array of weekdays to become a weekend days. The {api:anychart.scales.Calendar#weekendRange}weekendRange(){api} method needs a number or an array of numbers of days as a parameter. Those days defined will become a weekend. Numbers are recognized from 0 to 6 where 0 is Monday and 6 is Sunday.

```
// set the numbers for weekend days
chart.calendar().weekendRange([0,6]);
```

{sample}Resource\_Calendar\_03{sample}