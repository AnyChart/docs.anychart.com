#Maps

* [Choropleth Map](#choropleth_map)
* [Data](#data)
* [Data Classes](#series_and_points)
 * [Classed Choropleth](#classed_choropleth)
 * [Unclassed Choropleth](#unclassed_choropleth)
* [Advantages and Disadvantages](#advantages_and_disadvanteges)
 * [Advantages](#advantages)
 * [Disadvantages](#disadvantages)


## Choropleth Map

These are maps, where areas are colored or shaded according to a prearranged key, each shading or colour type representing a range of values. 
Population density information, expressed as 'per mile²,' is appropriately represented using a choropleth map. 
Choropleth maps are also appropriate for indicating differences in land use, like the amount of recreational land or type of forest cover.


## Data

You can use a choropleth map when your data:
<br> 1) is attached to enumeration units (e.g., counties, provinces, countries);
<br> 2) standardized to show rates or ratios (never use choropleth with raw data/counts);
<br> 3) is something that can be measured anywhere in space (even 'zero' is a valid measurement). 

<br>
<br>

For example, if our data is a count like a number of cats, this data type is not suitable for the choropleth, 
but a number of cats per square mile is a statistical ratio which always has a value and, thus, is appropriate for choropleth maps.
<br>
Example datasets appropriate for choropleths:

- world map of income tax rates in each country;
- number of deaths per 500,000 in 2015, reported by USA;
- map showing the percentage change in solved to unresolved cases from 1995 to 2015 in the UK;
- world map of percentage of population over 90 years old, reported by Canada.

<br><br>

If you are still in doubt about using a choropleth, check those which are a bit similar:
- [Dot Density Maps](../Dot_Density_Map)
- [Graduated/Proportional Symbol Maps](../Proportional_Symbol_Map)
- [Cartograms](../Cartogram)
These 3 map types can all handle raw data (e.g., simple counts, totals) opposite to choropleths that require the standardized data.

## Data Classes 

How many classes does the map need? Each time the answer will be different, because the only thing that can help you to define the classes' number is the accuracy of the information 
you need your map to provide. Most choropleth maps are made with 5-7 data classes average. The more classes you use, the less is data generalization, 
but this leads to the expense of legibility and 


the associated risk of map reading errors since more colors are harder to see and print reliably (which is bad). 
The key question is how much generalization do you want? A map with 3 classes/colors (e.g., low, medium, high) will be easy to see and remember, 
but may gloss over some very important aspects of the data and create artificial geographic patterns by lumping many places into broad classes. 
There is no ideal number of classes for a choropleth map, so experiment. Have a look at the distribution of your data in the histogram; 
Are there obvious clusters within your data? If so, pick that number of classes and place those class breaks manually around those clusters (again, using the histogram).


### Classed Choropleth


Classification Method
Just as there is no single correct number of classes, there is no single best way to classify you data into ranges. Look at the histogram (or scatterplot) to determine the "form" of your observations. Above all else the goal of data classification is to put places with similar rates in the same class and to separate places with very different rates into different classes. In other words, you're aiming to minimize within-class variance and maximize between-class variance.

Equal interval divides the data into equal size classes (e.g., 0-10, 10-20, 20-30, etc.) and works best on data that is generally spread across the entire range. Avoid equal interval if your data are skewed to one end ("bunched up" or "clumpy").

Quantiles will create attractive maps that place an equal number of observations in each class: If you have 30 counties and 6 data classes, you'll have 5 counties in each class. The problem with quantiles is that you can end-up with classes that have very different numerical ranges (e.g., 1-4, 4-9, 9-250...the last class is huge). Quantile can also separate locations with very similar rates and group together places that have very different rates, which is very undesirable, so use the histogram to see if this is happening.

Natural Breaks is a kind of "optimal" classification scheme that finds class breaks that (for a given number of classes) will minimize within-class variance and maximize between-class differences. One drawback of this approach is each dataset generates a unique classification solution, and if you need to make comparison across maps, such as in an atlas or a series (e.g., one map each for 1980, 1990, 2000) you might want to use a single scheme that can be applied across all of the maps.


### Unclassed Choropleth


## Advantages and Disadvantages

Choropleth seems to be the most popular maps type in use today; it means that your audience is likely to understand them. 
The reason of its popularity is the tendency of data enumeration and its universal digitizing. 
For example, census data is mostly presented on maps where considered territories are divided into spatial units like census tracts, counties, districts and provinces. 
However, some information cannot be presented in conjunction with territorial boundaries: such data as soil types or age demographics don't change abruptly at borders or county lines. 
By comparison, tax rates are very closely tied to those, so choropleth maps is the best in this case. 
The less the thing you are mapping is tied to enumeration units, the less sense a choropleth map makes.

### Advantages

The most obvious advantage of using choropleth is its popularity. 
As this type is used rather often, the information provided through this type of map will seem clear for the majority of your audience.

### Disadvantages

Although choropleths give a good visual impression of change over space there are certain disadvantages to using them:

They give a false impression of abrupt change at the boundaries of shaded units.
Choropleths are often not suitable for showing total values. Proportional symbols overlays (included on the choropleth map above) are one solution to this problem.
It can be difficult to distinguish between different shades.
Variations within map units are hidden, and for this reason smaller units are better than large ones.


