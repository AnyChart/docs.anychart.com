{:index 2}
# TimeTracking Mode

* [Overview](#overview)
* [OFF](#off)
* [ON](#on)

## Overview

Time tracking is a feature which is responsible for the activities distribution in case there are some time limits set for the activities. By default, the time tracking is switched off and the daily worktime is limited to 1 hour. If you enable the time tracking, the activities will be distributed along the timeline and the resource row height will be calculated automatically according to the time limits of the activity (or activities).

## OFF

When the time tracking is set off, the height of the resource row depends on the value set for the {api:anychart.charts.Resource#minRowHeight}minRowHeight(){api} method. Unless this method is set, the height value is set by default.

```
```

{sample}Resource\_TimeTracking\_01{sample}

## ON

If you set the daily worktime for the resource, and  When the time tracked, i.e. there are

```
```

{sample}Resource\_TimeTracking\_02{sample}