{:index 3}
Data Grouping
==========
* [Overview](#overview)
* [Settings](#settings)
 * [Default](#default)
 * [Adjusting](#adjusting)
  * [Levels](#levels)
  * [Set Maximum Points Number](#set_maximum_points_number)
  * [Set Minimum Width for a Point](set_minimum_width_for_a_point)
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
 - 5 s
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
 - 3 months
 - 6 months
 - 1 year


### Adjusting

Let's consider all methods that can adjust the grouping feature of your stock chart. 


#### Levels

There is a [list of levels](#list_of_the_levels) where you can find the necessary one or take one of them as the unit and set the necessary count of these units through the {api:anychart.core.stock.Grouping#levels}.levels(){api}. Note that if your data might be grouped in several undefault levels, you should define them all, so the parameters of the {api:anychart.core.stock.Grouping#levels}.levels(){api} method looks like an array of objects, like in the sample below:

```
	// define the grouping
    grouping = chart.grouping();

	// set the levels of grouping
    grouping.levels([
        {unit: 'year', count: 5},
        {unit: 'year', count: 10},
        {unit: 'year', count: 15},
        {unit: 'year', count: 20}
    ]);
```
{sample}STOCK\_Grouping\_02{sample}

In this sample we've got 46 points, each point represents a period of 5 years, while the maximum level by default is 1 year. So, to make the data group in longer periods - in 10 or 20 years - we need to set all these levels through the {api:anychart.core.stock.Grouping#levels}.levels(){api} method.


#### Set Maximum Points Number

If it's necessary to change the maximum default number of the points that can be shown on the chart simultaneously, use the {api:anychart.core.stock.Grouping#maxVisiblePoints}.maxVisiblePoints(){api} method. Choose the maximum number of your stock points in dependancy of categories. Let's take an Area Stock Chart as the example (check the [Stock Chart Manual](Quick_Start) to know how to create a Stock Chart).

```
// set the max number of points
grouping.maxVisiblePoints(20);
```
{sample}STOCK\_Grouping\_03{sample}

Note that in case you've got the same situation when your categories don't suit the default levels, you should set the levels properly to make the {api:anychart.core.stock.Grouping#maxVisiblePoints}.maxVisiblePoints(){api} method effective.


#### Set Minimum Width for a Point

Another way to set the maximum number of points is to set the minimum value for the width of each point of a stock chart, using the {api:anychart.core.stock.Grouping#minPixPerPoint}.minPixPerPoint(){api}. When this value (due to changing the scroller width) reaches the defined one, all data points gets grouped into longer categories to fit the setting. Using the {api:anychart.core.stock.Grouping#levels}.levels(){api} method is necessary in case when your categories don't suit the default levels.

This sample demonstrates an OHLC Stock Chart with a great amout of data with minimum point width cet in 10px.

```
// set the minimum point width
grouping.minPixPerPoint(10);
```
{sample}STOCK\_Grouping\_04{sample}


#### Force settings

There can be a situation when your data is arranged in smaller levels than you need to demonstrate, or there are any custom grouping settings that you need to be applied all the time. In this case, use {api:anychart.core.stock.Grouping#forced}.forced(){api} as "true" to force your Stock Chart to group your series even when it's not necessary.

```
// force the series to group always
grouping.forced(true);
```
{sample}STOCK\_Grouping\_05{sample}


#### Grouping interval

To get the current interval of grouping, use the {api:anychart.core.stock.Grouping#getCurrentDataInterval}.getCurrentDataInterval(){api} method. 

```
// Get the current data interval and use the title.
chart.title("The current level is " + grouping.getCurrentDataInterval().count + " " + grouping.getCurrentDataInterval().unit + "s");
```
{sample}STOCK\_Grouping\_06{sample}


#### Disable 

To enable or disable the feature use {api:anychart.core.stock.Grouping#enabled}.enabled(){api} method. It works the same as with other features. As it is enabled by default, we've disabled it in the next sample.

```
// disable the grouping feature
grouping.enabled(false);
```
{sample}STOCK\_Grouping\_07{sample}


#### Get the grouping state

To get acknowledged about the state of grouping call the {api:anychart.core.stock.Grouping#isGrouped}.isGrouped(){api} method. You can create a special element on your chart or use some default elements to demonstrate if the grouping is enabled or not. In the following sample we've used the chart title to show that.

```

```
{sample}STOCK\_Grouping\_08{sample}
