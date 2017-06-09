{:index 2}
#Working With Data

* [Overview](#overview)
* [Resource](#resource)
 * [Resource parameters list](#resource_parameters_list)
* [Activity](#activity)
 * [Activity parameters list](#activity_parameters_list)
 * [Split Activity Feature](#split_activity_feature)
* [Adding custom parameters](#adding_custom_parameters)

## Overview

Each Chart starts from setting the data. The Resource Chart has something special about setting the data, so this article considers this process and the Resource Chart Data constituents.

Two main and basic entities for the Resource Chart are Resources and Activities. These are what the Resource Chart is made for demonstrating and analyzing, so it is very important to treat setting the parameters and values of these entities with care.

Both entities have parameters or fields, which are better be set through the data.

## Resource

Resource is an element that can be given a task (activity), which will be finished in a some period of time. Resource can have several activities one after another or at the same time if necessary. When one resource has several activities simultaneously, this situation is called **a conflict**. This conflict will not be resolved automatically, but the Resource Chart demonstrates this and emphasizes with a red line, so you can resolve this problem or leave it as it is.

### Resource parameters list

There is a list of parameters that a resource can have. 

- name
- image
- description
- type
- tags
- activities

Let's create a sample with several resources and their parameters adjusted as necessary.

```
dataSet = anychart.data.set([
{
    "name": "Developer 1",
    "image": "http://static.anychart.com/images/docs/personIcon.png",
    "description": "The leading developer in the office",
    "type": "develop",
    "tags": ["developer", "office worker", "manager", "js", "c++", "python"],
    "activities": []
},{
    "name": "Developer 2",
    "image": "http://static.anychart.com/images/docs/personIcon.png",
    "description": "A remote developer",
    "type": "develop",
    "tags": ["developer", "remote worker", "js", "python"],
    "activities": []
},{
    "name": "Tester",
    "image": "http://static.anychart.com/images/docs/personIcon.png",
    "description": "One of the beta-testers in the office",
    "type": "test",
    "tags": ["tester", "qa", "wtf man"],
    "activities": []
},
]);
```

{sample}Resource\_Data\_01{sample}

There are some other settings responsible for the elements' appearance, which are all described in the [Visualization](Visual_Appearance) article.

The height of a resource depends on a maximum number of activities this resource has during a day on the chart timeline. This can be performed if the [TimeTracking mode](TimeTracking_Mode) is ON. Otherwise, the height of the resource is set automatically or can be set through the {api:anychart.charts.Resource#minRowHeight}minRowHeight(){api} method.


## Activity

Activity is an element representing a task that a resource can do during a period of time. It looks like a rectangular named colored block of a determined width that accords the activity duration. Due to the [TimeTracking mode](TimeTracking_Mode), several activities can be assigned for one resource during a workday, if the working day hours are defined and the activity duration in hours is set as well. 

### Activity parameters list

There is a list of parameters that a resource has or can have. 

- name
- start
- end
- totalMinutes/minutesPerDay
- intervals

Intervals have their own parameters 
- start
- end
- totalMinutes/minutesPerDay

Now, let's edit our sample from above and add several activities with the adjusted parameters given above:

```
"activities": [
{
    "name": "Task 1",
    "start": "2016-06-10",
    "end": "2016-06-12",
    "totalMinutes": "1200"
},{
    "name": "Task 2",
    "start": "2016-06-12",
    "end": "2016-06-15",
    "minutesPerDay": "240"
}
]
```

{sample}Resource\_Data\_02{sample}


There are some other settings responsible for the elements' appearance, which are all described in the [Visualization](Visual_Appearance) article.

### Split Activity Feature

There is one more feature about Activities in AnyChart Resource Charts. When one Activity consists of several tasks, it is possible to split this huge activity into these small tasks, avoiding them to become separate activities. All tasks the activity consists of will behave as one complicated object, e.g. when a cursor is put over one of those subtasks, all of them will be hovered; if one of them is clicked, the whole activity will be selected. This feature is rather useful when it is necessary to demonstrate the activity's complexity. 

```
"activities": [
{
    "name": "Task 3",
    "intervals": [
        {
            "start": "2016-06-10",
            "end": "2016-06-11",
            "totalMinutes": "480"
        },
        {
            "start": "2016-06-12",
            "end": "2016-06-14",
            "totalMinutes": "1080"
        },
        {
            "start": "2016-06-15",
            "end": "2016-06-16",
            "totalMinutes": "720"
        }
    ]
},{
    "name": "Task 4",
    "intervals": [
        {
            "start": "2016-06-13",
            "end": "2016-06-17",
            "minutesPerDay": "120"
        },
        {
            "start": "2016-06-15",
            "end": "2016-06-17",
            "minutesPerDay": "120"
        }
    ]
}
]
```

{sample}Resource\_Data\_03{sample}


## Adding custom parameters

In some cases, it might be necessary to display more information than the standard data fields are able to transfer. It is possible to create custom data fields and adjust them to be displayed on the chart correctly.

Let's add a "group" and a "priority" fields to the activities of the sample created above. This field will designate an affiliation of a task to a some group and the priority of the task resolving.

```
{
    "name": "Task 1",
    "group": "developer tasks",
    "priority": "high",
    "start": "2016-06-10",
    "end": "2016-06-12",
    "totalMinutes": "1200"
}
```

To display the value of this field, it is necessary to adjust the labels:

```
// display the groups and priorities (custom fields)
chart.activities().labels().format(function() {
    return this['activityName'] + "<br><span style=\"color: #ccc\">Group: " + this['activityInfo']['group'] + "</span>" + "<br><span style=\"color: #ccc\">Priority: " + this['activityInfo']['priority'] + "</span>";
});
```

{sample}Resource\_Data\_04{sample}
