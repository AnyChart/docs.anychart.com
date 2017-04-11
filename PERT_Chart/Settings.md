{:index 5}
PERT Chart Settings
===========

* [Chart](#chart)
* [Tasks](#tasks)
* [Milestones](#milestones)
* [Labels](#labels)
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

Here is a full list of methods used to configure coloring settings of the tasks in Pert Charts:

* {api:anychart.core.pert.Tasks#color}color(){api}, {api:anychart.core.pert.Tasks#fill}fill(){api}, {api:anychart.core.pert.Tasks#stroke}stroke(){api} set the color, fill and stroke

* {api:anychart.core.pert.Tasks#hoverFill}hoverFill(){api}, {api:anychart.core.pert.Tasks#hoverStroke}hoverStroke(){api} configure the visual settings on hover

* {api:anychart.core.pert.Tasks#selectFill}selectFill(){api}, {api:anychart.core.pert.Tasks#selectStroke}selectStroke(){api} configure tasks' visual settings on select

In the sample below, there is a Pert Chart with some of the appearance settings configured:


{sample}Pert\_Settings\_01{sample}


### Milestones 

Here is a full list of methods used to configure visual coloring settings for the milestones of a Pert Chart:

* {api:anychart.core.pert.Milestones#color}color(){api}, {api:anychart.core.pert.Milestones#fill}fill(){api}, {api:anychart.core.pert.Milestones#stroke}stroke(){api} set the color, fill and stroke

* {api:anychart.core.pert.Milestones#hoverFill}hoverFill(){api}, {api:anychart.core.pert.Milestones#hoverStroke}hoverStroke(){api} configure the visual settings on hover

* {api:anychart.core.pert.Milestones#selectFill}selectFill(){api}, {api:anychart.core.pert.Milestones#selectStroke}selectStroke(){api} configure milestones' visual settings on select

In the sample below, there is a Pert Chart with some of the appearance settings configured:

```
// set colors for milestones
milestones = chart.milestones();
milestones.fill("#7B68EE");
milestones.hoverFill("#B0C4DE");
milestones.selectFill("#483D8B");
milestones.stroke("#4B0082", 1);
milestones.hoverStroke("#4B0082", 2);
milestones.selectStroke("#4B0082", 4);
```

{sample}Pert\_Settings\_02{sample}


### Labels

Besides the colors and spacing, there are some special settings for the tasks' labels. Due to a specific shape, tasks have upper and lower labels, and it is possible to adjust both. Use the {api:anychart.core.pert.Tasks#upperLabels}upperLabels(){api} and {api:anychart.core.pert.Tasks#lowerLabels}lowerLabels(){api} methods for it.

```
// set upper labels padding and font size
chart.tasks().upperLabels().padding(5);
chart.tasks().upperLabels().fontSize(20);
```

{sample}Pert\_Settings\_03{sample}

It is possible to format the labels content using the {api:anychart.core.ui.LabelsFactory#format}format(){api} method. The  following sample demonstrates formatting the milestones labels.

```
chart.milestones().labels().format(function(){
    if (this.creator) {
        var result ="";
        var comma, i;
            
        for (i = 0; i < this.predecessors.length; i++){
            comma = i == this.predecessors.length - 1 ? "" : ",";
            result += this.predecessors[i].get("name") + comma;
        }
        result += " → ";
        
        for (i = 0; i < this.successors.length; i++){
            comma = i == this.successors.length - 1 ? "" : ",";
            result += this.successors[i].get("name") + comma;
        }
        return result;
        
    } else {
        return this.isStart ? "S" : "F";
    }
});
```

{sample}Pert\_Settings\_04{sample}


## Critical Path 

Critical Path consists of milestones and tasks. If nothing special is set for the critical path, the visual settings of those elements will be taken from defaults. If you prefer to emphasize the critical path by changing the visual settings for its components, use the {api:anychart.charts.Pert#criticalPath}criticalPath(){api} method.

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