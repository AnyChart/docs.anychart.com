{:index 1}
# Point (Dot) Maps
===========

* [Overview](#overview)
* [Creating Bubbles](#creating_bubbles)
 * [Data](#data)
  * [Latitude and Longitude](#latitude_and_longitude)
  * [Region ID](#region_id)
  * [Size](#size)
* [Altering Bubbles](#altering_bubbles)
 * [Series colors](#series_colors)
 * [Labels and Tooltips](#labels_and_tooltips)
* [Multi series](#multi_series)


## Overview

As the name implies, symbols (circles, bubbles), representing the values, are drawn of the proportional size to the size of the value being represented. The size of the bubbles (proportional symbols in maps) is not dependent on the size of the region associated with the variable. For example, if we show the value of unemployment on a proportional symbol map of the UK, Dundee would have bigger visual importance then Highland if their unemployment values were so (e.g. 3.5% in Dundee, 1% in Highland).

An example of proportional circles is shown below.

Dot Maps are those which use dots (points, markers) to demonstrate the existence of a subject or a feature. It's a lot like Bubble Maps ([Proportional Symbol Maps](Proportional_Symbol_Map)), but the dots' sizes don't depend on their values, as there's no size setting. Usually the tooltips are formatted to show some describing information for their points - so these maps should be quite useful and popular in guiding, tourism, health service and in other researches. 

Spreading points (or dots) across a Map is rather alike scatter (or marker) series. So, in AnyChart, this series in maps is of Marker type.

There are two general types of Marker Maps: One-To-One and One-To-Many. One-To-One is a type where a marker stands for an only feature, event or any other subject. One-To-Many means that one marker describes several subjects.

An example of those points is shown below.

{sample}Maps\_Dot\_Point\_01{sample}
