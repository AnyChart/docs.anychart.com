{:index 2}
# TimeTracking Mode

* [Overview](#overview)
* [Activity Per Chart](#activity_per_chart)
* [Activity Per Resource](#activity_per_resource)
* [Availability Per Chart](#availability_per_chart)
* [Availability Per Resource](#availability_per_resource)

## Overview

Time tracking is a feature which is responsible for the activities distribution in case there are some time limits set for the activities. By default, the time tracking is switched off and the daily worktime is limited to 1 hour. If you enable the time tracking, the activities will be distributed along the timeline and the resource row height will be calculated automatically according to the time limits of the activity (or activities).

## Activity Per Chart

When the time tracking is set as "activityPerChart", the height of the resource row depends on the maximum occupancy of the resource. The maximum row height among all resources is set for all rows.

```
// set the time tracking mode
chart.timeTrackingMode("activityPerChart");
```

{sample}Resource\_TimeTracking\_01{sample}

## Activity Per Resource

When the time tracking is set as "activityPerResource", the height of the resource row depends on the maximum occupancy of the resource. Each row height is calcuated separately.

```
// set the time tracking mode
chart.timeTrackingMode("activityPerResource");
```

{sample}Resource\_TimeTracking\_02{sample}


## Availability Per Chart

If the time tracking mode is set as "availabilityPerChart", the height of the resource row will be calculated in dependency of the total maximum number of the daily working hours. The maximum row height among all resources is set for all rows.

```
// set the time tracking mode
chart.timeTrackingMode("availabilityPerChart");
```

{sample}Resource\_TimeTracking\_03{sample}


## Availability Per Resource

With the "availabilityPerResource" time tracking mode, a row height depends on the maximum total time available in the calendar. The height is calculated for each row. This time tracking mode is useful and illustrative in case each resource has its own calendar adjusted. Otherwise, the apperance of the chart with "availabilityPerResource" time tracking mode will not differ from the previous one (with the "availabilityPerChart" TTM).

```
// set the time tracking mode
chart.timeTrackingMode("availabilityPerResource");
```

{sample}Resource\_TimeTracking\_04{sample}