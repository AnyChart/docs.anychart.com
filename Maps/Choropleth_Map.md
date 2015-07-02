#Maps

* [Choropleth Map](#choropleth_map)
* [Data](#data)
* [Data Classes](#data_classes)
 * [Classed Choropleth](#classed_choropleth)
 * [Unclassed Choropleth](#unclassed_choropleth)
* [Advantages and Disadvantages](#advantages_and_disadvantages)
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

That's the code sample of a dataset. All points are set as objects, each has an "id" field and a "value" field. As you can see, the value might be set as a numeric value or you may define a random value.

```
var dataSet1 = anychart.data.set([
                {'id': 'au-2557', 'value': 230},
                {'id': 'au-wa', 'value': 200},
                {'id': 'au-jb', 'value': 10)},
                {'id': 'au-ns', 'value': random(0, 300)},
                {'id': 'au-vi', 'value': 300},
                {'id': 'au-nt', 'value': 332},
                {'id': 'au-ts', 'value': 160},
                {'id': 'au-ct', 'value': random(0, 300)},
                {'id': 'au-sa', 'value': 30},
                {'id': 'au-ql', 'value': random(0, 300)}
            ]);
```

<br>

To connect the data to the map and to define its type you may use the next constr
```
s1 = map.choropleth(dataSet1);
```

<br>

If you are still in doubt about using a choropleth, check those which are a bit similar:
- [Dot Density Maps](../Dot_Density_Map)
- [Graduated/Proportional Symbol Maps](../Proportional_Symbol_Map)
- [Cartograms](../Cartogram)
These 3 map types can all handle raw data (e.g., simple counts, totals) opposite to choropleths that require the standardized data.

## Data Classes 

How many classes does a map need? Each time the answer will be different, because the only thing that can help you to define the classes' number is the accuracy of the information 
you need your map to provide. Most choropleth maps are made with 5-7 data classes average. The more classes you use, the less is data generalization, 
but this leads to the expense of legibility and increases the complexity of perception. Also, the more colors you use, the harder it will be to distinguish them all on prints.
A map with only three classes is quite easy to understand, but it may hide some important aspects of the data. So there is no perfect number of classes.


### Classed Choropleth

Classed Choropleth is a Choropleth Map, which scale is (and, consequently, a ColorRange is) Ordinal, so each class/color has some certain value bounds.


<!--Classification Method-->

The situation with classification is the same as with number of classes: there's no default about the way to classify the data into ranges.
The main goal of classification is to unite territories with similar rates through coloring them in one shade or color. 
<br><br> 
<!-- There are three general ways to classify the data: -->
<br><br>

- Equal interval 
The data is divided into ranges of equal size (e.g., 0-100, 100-200, 200-300, etc.). This type is the best, when the data values are spread across the entire range,
but has no sense, when the data values are spread unequally. 	

<!-- - Quantiles
This way will create attractive maps that place an equal number of observations in each class. It means that if you have 20 territories on your map
and 4 data classes, you'll get only 5 territories in each class. The problem 
with quantiles is that there's no obvious borders between the less and the highest values, and classes may have very different numerical ranges, 
e.g. 1-10, 10-20, 20-1200, 1200-1250, etc. Quantiles lead to having groups of places with very different rates, so use this only in specific situations.

- Natural Breaks 
This way is a kind of "optimal" classification scheme, when the value borders are set where the between-class difference is the biggest and 
the difference between within-class values is the smallest.	-->
	
You can set the classes only by yourself, no matter which classification method you decided to use. The sample of classification is shown below.
```
ordinalColors = anychart.scales.ordinalColor([
  		{less: 80}, 
  		{from: 80, to: 145}, 
  		{from: 145, to: 210}, 
		{greater: 210}
	]);
```

To set the colors for each range use the **{api:anychart.palettes.RangeColors}.colors(){api}** method. The number of colors you define should be the same as the number of ranges you have defined before:
```
ordinalColors.colors(['#FF6363', '#FF3939', '#C50000', '#9B0000']);
```

### Unclassed Choropleth

Unclassed Choropleth is a Choropleth Map, which scale is (and, consequently, a ColorRange is) Linear, Logarithmic or DateTime.
It means that there is no certain value bounds between colors, and a ColorRange looks like a single bar painted as a gradient.
<br>
Read more about ColorRange [here](../Color_Range.md).

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


