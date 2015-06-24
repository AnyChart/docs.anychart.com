#Maps

* [Choropleth Map](#choropleth_map)
* [Data](#data)
* [Series and Points](#series_and_points)
 * [Points](#points)
 * [Series](#series)
* [Data Classes](#series_and_points)
 * [Classed Choropleth](#classed_choropleth)
 * [Unclassed Choropleth](#unclassed_choropleth)
* [Advantages and Disadvantages](#advantages_and_disadvanteges)
 * [Advantages](#advantages)
 * [Disadvantages](#disadvantages)


## Choropleth Map


When to Use
You can use a choropleth maps when your data are (1) attached to enumeration units (e.g., counties, provinces, countries), (2) standardized to show rates or ratios (never use choropleth with raw data/counts), and (3) you have a continuous statistical surface, in other words, you could conceptually measure the phenomena anywhere in space (n.b. 'zero' is still a valid measurement). For example, number of people is a count and not appropriate for choropleth maps; number of people per square mile is a ratio and is a continuous statistical surface (even if it drops to zero over uninhabited places, every location has a data value) and, thus, is appropriate for choropleth maps.

Example datasets appropriate for choropleth maps:

world map of income tax rates by country
map showing number of births per 100,000 in 2009, reported by U.S. county
map showing the percentage change in skin cancer from 1990 to 2010 by Australian state.
world map of percentage of population under 18 years old, reported by country
map showing the percentage increase in home value from 1980 to 1990 by Canadian province
Background


These are maps, where areas are shaded according to a prearranged key, each shading or colour type representing a range of values. 
Population density information, expressed as 'per km²,' is appropriately represented using a choropleth map. 
Choropleth maps are also appropriate for indicating differences in land use, like the amount of recreational land or type of forest cover.

An example from the Czech Republic is shown below.


Choropleth seems to be the most popular maps type in use today; it means that your audience is likely to understand them. 
The reason of its popularity is the tendency of data enumeration and its universal digitizing. 
For example, census data is mostly presented on maps where considered territories are divided into spatial units like census tracts, counties, districts and provinces. 
However, some information cannot be presented in conjunction with territorial boundaries: such data as soil types or age demographics don't change abruptly at borders or county lines. 
By comparison, tax rates are very closely tied to those, so choropleth maps is the best in this case. 
The less the thing you are mapping is tied to enumeration units, the less sense a choropleth map makes.

Not sure you should use a choropleth map? Good alternatives in indiemapper include dot density maps, graduated/proportional symbol maps, and cartograms: Furthermore, while choropleth maps require that your data are standardized (rates, ratios...e.g., X per square kilometer or Y per 100,000 people), these other 3 map types can all handle raw data (e.g., simple counts, totals).


## Data

## Series and Points

### Points

### Series

<table width="375" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="88"><b>Month</b></th>
<th width="88"><b>2003 Sales</b></th>
<th width="88"><b>2004 Sales</b></th>
</tr>
<tr>
<td>January</td>
<td>$10000</td>
<td>$12000</td>
</tr>
<tr>
<td>February</td>
<td> $12000</td>
<td> $15000</td>
</tr>
<tr>
<td>March</td>
<td> $18000</td>
<td> $16000</td>
</tr>
<tr>
<td>April</td>
<td> $11000</td>
<td> $15000</td>
</tr>
<tr>
<td>May</td>
<td> $9000</td>
<td> $14000</td>
</tr>
</tbody>
</table>

