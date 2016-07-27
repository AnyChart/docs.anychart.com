{:index 5}
PERT Chart Settings
===========

* [Chart](#chart)
* [Tasks](#tasks)
* [Milestones](#milestones)
* [Critical Path](#critical_path)
* [Statistics](#statistics)

## Chart

Pert charts are created using {api:anychart#pert}pert(){api} constructor which returns an instance of {api:anychart.charts.Pert}anychart.charts.Pert{api} class.

```
// create a PERT chart instance
chart = anychart.pert();
```

## Tasks

Tasks are controlled using {api:anychart.charts.Pert#tasks}tasks(){} method, spacing between tasks by {api:anychart.charts.Pert#horizontalSpacing}horizontalSpacing(){api} and {api:anychart.charts.Pert#verticalSpacing}verticalSpacing(){api} methods.

```
chart = anychart.pert();
// set tasks color
chart.tasks().stroke("2 #4CAF50");
```

## Milestones

Milestones are set up using {api:anychart.charts.Pert#milestones}milestones(){} method.

```
chart = anychart.pert();
// set milestones color
chart.milestones().fill("#4CAF50");
```

## Critical Path

Critical Path is configured using {api:anychart.charts.Pert#criticalPath}criticalPath(){api} method.

```
chart = anychart.pert();
// set critical path milestones color
chart.criticalPath({milestones: {fill: "#F44336"}});
```

## Statistics

Use {api:anychart.charts.Pert#getStat}getStat(){api} and {api:anychart.charts.Pert#expectedTimeCalculator}expectedTimeCalculator(){api} to obtain and set PERT statistical calculations.

```
chart = anychart.pert();
// get project duration
var duration = chart.getStat(anychart.enums.Statistics.PERT_CHART_PROJECT_DURATION);
// get project deviation
var deviation = chart.getStat(anychart.enums.Statistics.PERT_CHART_CRITICAL_PATH_STANDARD_DEVIATION);
```