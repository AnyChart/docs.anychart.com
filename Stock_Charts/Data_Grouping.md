{:index 3}
Data Grouping
==========
* [Overview](#overview)
* [Settings](#settings)
 * [Default](#default)
 * [Adjusting](#adjusting)
  * [Set Maximum Points Number](#set_maximum_points_number)
  * [Set Minimum Width for a Point](set_minimum_width_for_a_point)
  * [Levels](#levels)
  * [Disable](#disable)

 
## Overview

AnyStock Charts processes table-formatted data using [table data model](../Working_with_Data/Using_Table_Data_Model). Working with data in AnyStock is described in [AnyStock Data](Data) article.

To work with large data sets and represent them successfully on the screen, AnyStock is able to group data points using {api:anychart.core.stock.Grouping}Grouping{api} methods to adjust this feature. 

## Settings

There are several methods adjusting Grouping feature. We can define the maximum number of the shown points through the {api:anychart.core.stock.Grouping#maxVisiblePoints}.maxVisiblePoints(){api} method, the minimum width for each point using {api:anychart.core.stock.Grouping#minPixPerPoint}.minPixPerPoint(){api} and work with grouping states through some other settings that we will describe in this section of the article.

### Default

There is a sample with grouping settings untouched:

{sample}STOCK\_Grouping\_01{sample}

As can be clearly seen from the sample, grouping is enabled by default. The levels of grouping are chosen automatically from the [list of levels](#list_of_levels) in dependancy of the categories defined in the dataSet. The maximum number of simultaneously shown points is 500, so as we have less all points are shown; the minimum value of each point is not specified.

#### List of levels

 - 1 millisecond
 - 5 ms
 - 10 ms
 - 25 ms
 - 50 ms
 - 100 ms
 - 250 ms
 - 500 ms
 - 1 second
 - 5 second
 - 10 s
 - 20 s
 - 30 s
 - 1 minute
 - 5 min
 - 15 min
 - 30 min
 - 1 hour
 - 2 h
 - 6 h
 - 12 h
 - 1 day
 - 1 week
 - 1 month
 - 3 month
 - 6 month
 - 1 year


### Adjusting

Let's consider all methods that can adjust the grouping feature of your stock chart.


#### Set Maximum Points Number

If it's necessary to change the default number of the points that are shown on the chart simultaneously, use the {api:anychart.core.stock.Grouping#maxVisiblePoints}.maxVisiblePoints(){api} method. Choose the maximum number of your stock points in dependancy of categories


#### Set Minimum Width for a Point

Another way to set the maximum number of points is to set the minimum value for the width of each point of a stock chart. When this value reaches the defined one,  lee


#### Levels

There is a [list of levels](#list_of_the_levels) where you can find the necessary one or take one of them as the unit and set the necessary count of these units through the {api:anychart.core.stock.Grouping#levels}.levels(){api}.



#### Disable 

To enable or disable the feature use {api:anychart.core.stock.Grouping#enabled}.enabled(){api} method. It works the same as with other features. As it is enabled by default, we've disabled it in the next sample.

```
// disable the grouping feature
grouping.enabled(false);
```
{sample}STOCK\_Grouping\_06{sample}