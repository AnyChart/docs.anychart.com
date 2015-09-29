{:index 0}
#Maps

* [Overview](#overview)
* [Points](#points)
<!--* [Series](#series)!-->

## Overview

A map is a reflection of symbolic relationships between elements of some space, such as objects, regions and themes.
<br>
Some of the maps are static, two-dimensional, geometrically or approximately accurate representations of three-dimensional space, 
while others are dynamic or interactive, even three-dimensional. Although most commonly used to depict geography, maps may represent 
any space, real or imagined, without regard to context or scale; e.g. brain mapping, DNA mapping and extraterrestrial mapping.
<br>
Interactive Maps is a unique feature of AnyChart component that allows you to visualize geographical related data. We use the same swf file to render maps and charts - this allows you to combine maps and chart in the interactive dashboards and easily deploy both of them.

Use the following to create a new simple map:
```
	map = anychart.map();
```

## Points

A point contains some meta information about it and a single region or a number of them. 
There are two ways of connecting points to regions:
1) One point - one region. In this case, dataSet contains a number of points where each is connected to a particular id:
```
var dataSet = anychart.data.set([
    {name: "Point 1", data: "US"},
    {name: "Point 2", data: "EU"},
]);
```
The dataSet above contains two points, one of them is connected to the region with id "US", second one is connected to the "EU" id.

2) One point - a plenty of regions. In this case, dataSet contains a number of points where each is connected with several regions.
```
var dataSet = anychart.data.set([
    {name: "Point 1", data: ["US_1", "US_2", "US_3"]},
    {name: "Point 2", data: ["EU_1", "EU_2", "EU_3"]}
]);
```
This dataSet contains two points where each is connected with id "US_" + number, the second one has regions with id "EU_" + number.
<!--
## Series

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th width="100"><b>Type</b></th>
<th><b>Description</b></th>
<th><b>Example</b></th>
</tr>
<tr>
<td>World Map</td>
<td>
A world map is a map of the surface of the Earth. World maps form a distinctive category of maps due to the problem of projection. 
Maps by necessity distort the presentation of the earth's surface. These distortions reach extremes in a world map. The many ways of projecting 
the earth reflect diverse technical and æsthetic goals for world maps. See list of most significant maps projections.
</td>
<td> </td>
</tr>
<tr>
<td>Choropleth Map</td>
<td> 
A choropleth map (from Greek χώρο ("area/region") + πλήθος ("multitude")) is a thematic map in which areas are shaded or 
patterned in proportion to the measurement of the statistical variable being displayed on the map, such as population density or per-capita income.
</td>
<td>  </td>
</tr>
</tbody>
</table>
!-->
