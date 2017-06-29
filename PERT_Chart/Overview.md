{:index 0}
PERT Chart Overview
===========

* [Overview](#overview)
* [Use cases](#use_cases)
 * [Total Project Duration](#total_project_duration)
 * [The Project Duration Deviation](#the_project_duration_deviation)
 * [Resource Optimization](#resource_optimization)
 * [Middle tasks control](#middle_tasks_control)
 * [Duration calculation](#duration_calculation)

## Overview

PERT is an abbreviation for "Program (Project) Evaluation and Review Technique". This technique, developed by the U.S. Navy in the 1950s, is used in project management to analyze and represent the tasks involved in completing a given project. It is applied mostly in large-scale projects where time is the major factor and allows to schedule a project without knowing precisely the details and durations of all activities. For example, PERT was used in planning the 1968 Winter Olympics in Grenoble.

To learn more about PERT in general, see [Program evaluation and review technique the article at Wikipedia](https://en.wikipedia.org/wiki/Program_evaluation_and_review_technique), and to learn how to create PERT charts in AnyChart, read the following sections in our documentation:

* [PERT Chart Quick Start](Quick_Start)
* [PERT Chart Terminology](Terminology)
* [PERT Chart Data](Data)
* [PERT Chart Settings](Pert_Chart)

## Use cases

Despite PERT technology might seem too complicated, it can still be profitably applied and used in some circumstances. For example, planning a building project can be successfully based on the PERT method. Similarly, the organization of any examinations or competitions, especially on a national scale, due to being complicated and expensive, is worth being based on PERT. Any reforms, innovations or other activities which demand a great time and resource planning are good cases for using PERT. 

### Total Project Duration

PERT Chart allows to calculate and provide the duration of the whole project. This duration is the length of the critical path, so it is the most important parameter in project management. If the result duration overcomes the time reserve, it is a signal to recheck and rearrange the resources to make the project critical duration fit in the reserved time period.

In the following sample, the critical path is highlighted with red color, and its calculated length is shown in the chart title.

{sample}Pert\_UseCase\_01{sample}

Find how to get the critical paths duration in the [AnyChart PERT statistics section](Pert_Chart#statistics).


### The Project Duration Deviation

The Standard Deviation is an estimated statistic value of the critical path duration deviation, which can be quite important in the project planning. Find how to manage the PERT statistics in the [AnyChart PERT statistics section](Pert_Chart#statistics) article.

In the following sample, the project duration with the standard deviation of the critical path value is shown in the chart title.

{sample}Pert\_UseCase\_02{sample}


### Resource Optimization

There is a parameter for all tasks named *slack*. Slack is a time period, which is actually wasted due to some reasons. For example, when a task can start only after two other tasks end, the difference between these tasks is a slack of the shorter one. In this case, the best decision is to send the resources from the shorter task to the longer one, so it can help to shorten the duration of the longer task.

The following sample demonstrates all slack values for all tasks, making it evident for the project manager what should be changed in the resources planning to minimize the slacks.

{sample}Pert\_UseCase\_03{sample}

Find how to get the slacks duration shown in the [AnyChart PERT slacks section](Pert_Chart#slacks).


### Middle tasks control

Sometimes it is necessary to control the time bounds for some separated tasks. In this case, look at the "earliest/latest start/finish" automatically calculated parameters.

{sample}Pert\_UseCase\_04{sample}

Look through the [tasks part of the PERT article](Pert_Chart#earliest_and_latest) to know more about those parameters.

### Duration calculation

In real project management, it is impossible to give the exact value for a project duration. Even taking the deviation in mind, there is still a very high risk not to fit in the time bounds. Therefore, you can set your own function for the duration calculation instead of the standard formula.

The duration in the following sample with the same data as above is calculated automatically through the PERT statistics.

{sample}Pert\_UseCase\_05{sample}

Find more about using PERT statistics in the [AnyChart PERT statistics section](Pert_Chart#statistics).