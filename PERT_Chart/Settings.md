{:index 5}
PERT Chart Settings
===========

* [Chart](#chart)
* [Tasks](#tasks)
* [Milestones](#milestones)
* [Critical Path](#critical_path)
* [Statistics](#statistics)

## Chart

Pert charts are created using the {api:anychart#pert}pert(){api} constructor which returns an instance of {api:anychart.charts.Pert}anychart.charts.Pert{api} class.

```
// create a PERT chart instance
chart = anychart.pert();
```

### Tasks 

Tasks are controlled using the {api:anychart.charts.Pert#tasks}tasks(){api} method, spacing between tasks by the {api:anychart.charts.Pert#horizontalSpacing}horizontalSpacing(){api} and the {api:anychart.charts.Pert#verticalSpacing}verticalSpacing(){api} methods.

```
// set tasks color
chart.tasks().stroke("2 #4CAF50");
// set vertical spacing between tasks
chart.verticalSpacing("20%");
```
{sample}Pert\_Settings\_01{sample}

Besides the colors and spacing, there are some special settings for the tasks' labels. Due to specific shape, tasks have upper and lower labels, and it is possible to adjust both. Use the {api:anychart.core.pert.Tasks#upperLabels}upperLabels(){api} and {api:anychart.core.pert.Tasks#lowerLabels}lowerLabels(){api} methods for it.

```
// set upper labels padding and font size
chart.tasks().upperLabels().padding(10);
chart.tasks().upperLabels().fontSize(20);
```

{sample}Pert\_Settings\_02{sample}

### Milestones 

Milestones are set up using the {api:anychart.charts.Pert#milestones}milestones(){api} method.

```
// set milestones color
chart.milestones().fill("#4CAF50");
```
{sample}Pert\_Settings\_03{sample}

## Critical Path 

Critical Path consists of milestones and tasks. If nothing special is set for the critical path, the visual settings of those elements belong to a critical path will be the same as of non-critical ones. If you prefer to emphasize the critical path by changing the visual settings for its components, use the {api:anychart.charts.Pert#criticalPath}criticalPath(){api} method.

```
// set critical path milestones filling color
chart.criticalPath({milestones: {fill: "#F44336", selectFill: "#590909"}});
// set critical tasks stroke
chart.criticalPath({tasks: {stroke: "#F44336"}});
```
{sample}Pert\_Settings\_04{sample}


## Statistics

There are two statistic values can be got from the Pert Chart: standard deviation and the critical path duration. Use {api:anychart.charts.Pert#getStat}getStat(){api} method for both.

```
// get both statistic values on click
chart.milestones(). listen("click", function(){
	dev = chart.getStat("pertChartCriticalPathStandardDeviation");
	alert("Standard deviation for this project is " + dev);
})
```
{sample}Pert\_Settings\_05{sample}