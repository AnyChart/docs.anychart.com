{:index 6}
# Labels

## Overview

Some elements have [labels](../../Common_Settings/Labels) – text or image components, which are defined as instances of the {api:anychart.core.ui.LabelsFactory}anychart.core.ui.LabelsFactory{api} class.

Labels are supported by the following elements of the **Project chart**:

* [regular tasks](Project_Chart#regular_tasks)
* [parent tasks](Project_Chart#parent_tasks)
* [milestones](Project_Chart#milestones)
* [progress bars](Project_Chart#progress_bars)

Also, labels are supported by the only element of the **Resource chart** – [period](Resource_Chart#periods).

To access labels, call the **labels()** method of a particular element type or of [all elements](All_Elements) (of course, only the elements that support labels are affected):

```
// access labels of tasks
var labels = chart.getTimeline().tasks().labels();
```

```
// access labels of elements
var labels = chart.getTimeline().elements().labels();
```

By default, labels are enabled on Project charts and disabled on Resource charts. To enable or disable labels, pass `true` / `false` either directly to **labels()** or to the {api:anychart.core.ui.LabelsFactory#enabled}enabled(){api} method of labels:

```
// disable labels of tasks
var chart.getTimeline().tasks().labels(false);
```

```
// disable labels of tasks
chart.getTimeline().tasks().labels().enabled(false);
```

To configure labels, use other methods of {api:anychart.core.ui.LabelsFactory}anychart.core.ui.LabelsFactory{api}, for example {api:anychart.core.ui.LabelsFactory#fontColor}fontColor(){api}, {api:anychart.core.ui.LabelsFactory#fontWeight}fontWeight(){api}, {api:anychart.core.ui.LabelsFactory#fontSize}fontSize(){api}, etc. The {api:anychart.core.ui.LabelsFactory#format}format(){api} method, combined with [text formatters](../../Common_Settings/Text_Formatters), allows setting the text format – read the sections below to learn more.

## Tokens

To format the text of labels, combine the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with [tokens](../../Common_Settings/Text_Formatters#string_tokens).

Please keep in mind that in addition to default tokens you can always use a custom token corresponding to a custom field in your data.

Also, if you need to enable HTML in tokens, pass `true` to {api:anychart.core.ui.LabelsFactory#useHtml()}useHtml(){api}.

### Project Tokens

For the Project chart, the following tokens are available:

* `{%id}`
* `{%name}`
* `{%actualStart}`
* `{%actualEnd}`
* `{%baselineStart}`
* `{%baselineEnd}`
* `{%progress}`
* `{%linearIndex}`

In the sample below, labels of different elements have the same font weight but different text format, which is configured with the help of tokens, including a custom one:

```
// configure labels of tasks
timeline.tasks().labels().useHtml(true);
timeline.tasks().labels().format(
  "– <span style='color:#64b5f6'>{%progress}</span>"
);

// configure labels of parent tasks
timeline.groupingTasks().labels().useHtml(true);
timeline.groupingTasks().labels().format(
    "– <span style='color:#dd2c00'>{%progress}</span>"
);

// configure labels of milestones
timeline.milestones().labels().useHtml(true);
timeline.milestones().labels().format(
    "<span style='color:#ffa000'> " +
    "{%actualStart}{dateTimeFormat:dd MMM}</span> {%custom_field}"
);
```

{sample :height 220}GANTT\_NEW\_Elements\_Labels\_01{sample}

### Resource Tokens

The Resource chart supports these tokens:

* `{%id}`
* `{%name}`
* `{%start}`
* `{%end}`
* `{%linearIndex}`

In the following sample, tokens, including a custom one, are used to format the text of period labels. Also, text font is adjusted.

```
// configure labels of periods
var periodLabels = chart.getTimeline().periods().labels();
periodLabels.enabled(true);
periodLabels.useHtml(true);
periodLabels.fontColor("#104d89");
periodLabels.fontWeight(600);
periodLabels.format(
  "<span style='color:#991f00'>{%custom_field}</span> " +
  "start: {%start}{dateTimeFormat:dd MMM}"
);
```

{sample :height 160}GANTT\_NEW\_Elements\_Labels\_02{sample}

## Formatting Functions

You can configure the text of labels by combining the {api:anychart.core.ui.LabelsFactory#format}format(){api} method with [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions).

In these functions, a number of default context fields is available. Also, you can use {api:anychart.format.Context#getData}getData(){api} to refer to a custom field in your data and methods of the [tree data model](../../Working_with_Data/Tree_Data_Model) to perform operations on data.

If you need to enable HTML in formatting functions, pass `true` to {api:anychart.core.ui.LabelsFactory#useHtml()}useHtml(){api}.

### Project Fields

For the Project chart, the following fields are available in formatting functions:

* `id`
* `name`
* `actualStart`
* `actualEnd`
* `baselineStart`
* `baselineEnd`
* `progress`
* `linearIndex`

In the sample below, labels of different elements have the same font weight but different text format, which is configured with the help of formatting functions. For instance, the label text of regular tasks depends on their progress, and the label of the parent task displays its duration.

The label of the milestone refers to another task. The {api:anychart.format.Context#getData}getData(){api} method and the {api:anychart.data.Tree.DataItem#search}search(){api} and {api:anychart.data.Tree.DataItem#get}get(){api} methods of the [Tree Data Model](../../Working_with_Data/Tree_Data_Model) are used to find the name of this task by its id, which is linked in a custom data field of the milestone.

```
// configure labels of tasks
timeline.tasks().labels().useHtml(true);
timeline.tasks().labels().format(function() {
  if (this.progress == 1) {
    return "<span style='color:#64b5f6'>COMPLETE</span>";
  } else {
    return "<span style='color:#64b5f6'>" +
           this.progress * 100 + "</span>%";
  }
});

// configure labels of parent tasks
timeline.groupingTasks().labels().useHtml(true);
timeline.groupingTasks().labels().format(function() {
  var duration = (this.actualEnd - this.actualStart) / 1000 / 3600 / 24;
  return "<span style='color:#dd2c00'>" + 
         duration + "</span>d";
});

// configure labels of milestones
timeline.milestones().labels().useHtml(true);
timeline.milestones().labels().format(function() {
  var relatedTaskId = this.getData("custom_field");
  var relatedTaskItem = treeData.search("id", relatedTaskId);
  var relatedTaskName = relatedTaskItem.get("name");
  return "<span style='color:#ffa000'>Review:</span> " +
         relatedTaskName;
});
```

{sample :height 220}GANTT\_NEW\_Elements\_Labels\_03{sample}

### Resource Fields

Here are the fields supported by the Resource chart:

* `id`
* `name`
* `start`
* `end`
* `linearIndex`

In this sample a formatting function is used to display the duration of each period as well as the value of a custom field:

```
// configure labels of periods
var periodLabels = chart.getTimeline().periods().labels();
periodLabels.enabled(true);
periodLabels.useHtml(true);
periodLabels.fontColor("#104d89");
periodLabels.fontWeight(600);
periodLabels.format(function() {
  var duration = (this.end - this.start) / 1000 / 3600 / 24;
  if (duration > 30) {
    return "<span style='color:#991f00'>" + this.getData("custom_field") +
           " " + duration + " days</span>"
  } else {  
    return this.getData("custom_field") + " " + duration + " days";
  }
});
```

{sample :height 160}GANTT\_NEW\_Elements\_Labels\_04{sample}