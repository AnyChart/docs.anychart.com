{:index 3}
# Calendar

* [Overview](#overview)
* [Availabilities](#availabilities)
* [getWorkingSchedule](#getWorkingSchedule)
* [Setting the weekend](#setting_the_weekend)

## Overview

Calendar is a scale created specially for the Resource Chart. This feature allows to set the available working hours and edit the

## Availabilities

```
Availabilities
```

{sample}Resource\_Calendar\_01{sample}

## getWorkingSchedule

```
getWorkingSchedule
```

{sample}Resource\_Calendar\_02{sample}

## Setting the weekend

As well as working hours and working days, it is possible to set weekends. There is a special method in the Resource Calendar for setting the array of weekdays to become a weekend days. The {api:anychart.scales.Calendar#weekendRange}weekendRange(){api} method needs a number or an array of numbers of days as a parameter. Those days defined will become a weekend. Numbers are recognized from 0 to 6 where 0 is Monday and 6 is Sunday.

```
// set the numbers for weekend days
chart.calendar().weekendRange([0,6]);
```

{sample}Resource\_Calendar\_03{sample}