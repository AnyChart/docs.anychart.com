{:index 1}
#Working with Data

* [Overview](#overview)
* [Resource](#resource)
 * [Resource parameters list](#resource_parameters_list)
* [Activity](#activity)
 * [Activity parameters list](#activity_parameters_list)
 * [Split Activity Feature](#split_activity_feature)

## Overview

Each Chart starts from setting the data. The Resource Chart has something special about setting the data, so this article considers this process and the Resource Chart Data constituents.

Two main and basic entites for the Resource Chart are Resources and Activities. These are what the Resource Chart is made for demonstrating and analysing, so it is very important to treat setting the parameters and values of these entities with care.

Both entities have paramters or fields, which are better be set through the data.

## Resource

Resource is an element that can be given a task (activity), which will be finishied in a some period of time. Resource can have several activities one after another or at the same time if necessary. When one resource has deveral activities simultaneously, this situation is called **a conflict**. This conflict will not be resolved automatically, but the Resource Chart demonstrates this and emphasizes with a red line, so you can resolve this problem or leave it as it is.

### Resource parameters list

There is a list of paramters that a resource has or can have. 

 - name
 - image
 - description
 - type
 - tags
 - activities
 - imageSize
 - imageBorderRadius
 - imageOpacity
 - imageAlign
 - imageFittingMode
 - imageMargin
 - nameMargin
 - textSettings (?)
 - tagsPadding
 - tagsBackground

There are some other settings responsible for the elements' appearance, which are all described in the [Visualization](Visualization) article.

The height of a resource depends on a maximum number of activities this resource has during a day on the chart timeline. This can be performed if the [TimeTracking mode](TimeTracking_Mode) is ON.


## Activity

Activity is an element representing a task that a resource can do during a period of time. It looks like a rectangular named colored block of a determined width that accords the activity duration. Due to the [TimeTracking mode](TimeTracking_Mode), several activities can be assigned for one resource during a workday, if the working day hours are defined and the activity duration in hours is set as well. 

### Activity parameters list

There is a list of paramters that a resource has or can have. 

 - name
 - start
 - end
 - totalMinutes/minutesPerDay
 - intervals
   - start
   - end
   - totalMinutes/minutesPerDay

There are some other settings responsible for the elements' appearance, which are all described in the [Visualization](Visualization) article.

### Split Activity Feature

There is one more feature about Activities in AnyChart Resource Charts. When one Activity consists of several tasks, it is possible to split this huge activity into these small tasks, avoiding them to become separate activities. All tasks the acitivity consists of will behave as one complicated object, e.g. when a cursor is put over one of those subtasks, all of them will be hovered; if one of them is clicked, the whole activity will be selected. This feature is rather useful whern