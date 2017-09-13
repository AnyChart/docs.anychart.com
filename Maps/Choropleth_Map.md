{:index 7}
# Choropleth Maps

## Choropleth Map

These are maps, where areas are colored or shaded according to a prearranged key. Each shade or colour represents a range of values. 
Population density information, expressed as 'per mile²,' is appropriately represented using a choropleth map. 
Choropleth maps are also appropriate for indicating differences in land use, like the amount of recreational land or type of forest cover.

## Data

You can use a choropleth map when your data:
1) is attached to enumeration units (e.g., counties, provinces, countries);
2) standardized to show rates or ratios (never use choropleth with raw data/counts);
3) is something that can be measured anywhere in space (even 'zero' is a valid measurement). 

For example, if our data is a count like a number of cats, this data type is not suitable for the choropleth, 
but a number of cats per square mile is a statistical ratio which always has a value and, thus, is appropriate for choropleth maps.

Example datasets appropriate for choropleths:

- world map of income tax rates in each country;
- number of deaths per 500,000 in 2015, reported by USA;
- map showing the percentage change in solved to unresolved cases from 1995 to 2015 in the UK;
- world map of percentage of population over 90 years old, reported by Canada.

That's the code sample of a dataset. All points are set as objects, each has an "id" field and a "value" field.  The value might be set as a numeric value or you may define a random value.

```
var dataSet = anychart.data.set([
                {'id': 'AU.WA', 'value': 300},  // Western Australia
                {'id': 'AU.JB'},                // Jervis Bay Territory
                {'id': 'AU.NS', 'value': 240},  // New South Wales
                {'id': 'AU.VI', 'value': 75},   // Victoria
                {'id': 'AU.NT', 'value': 130},  // Northern Territory
                {'id': 'AU.TS', 'value': 190},  // Tasmania
                {'id': 'AU.CT', labels: false},  // Australian Capital Territory
                {'id': 'AU.SA'},                // South Australia
                {'id': 'AU.QL'}                 // Queensland
            ]);
```

To connect the data to the map and to define its type you may use the next construction:

```
s1 = map.choropleth(dataSet1);
```

{sample}Maps\_Choropleth\_01{sample}

In the data above we haven't defined the value for some regions, but those regions themselves are defined. If we remove the lines with the regions we don't have information about,
they will become of default color for undefined regions, so it's better to set the fill for them:

```
var dataSet = anychart.data.set([
                {'id': 'AU.WA', 'value': 300},  // Western Australia
                {'id': 'AU.NS', 'value': 240},  // New South Wales
                {'id': 'AU.VI', 'value': 75},   // Victoria
                {'id': 'AU.NT', 'value': 130},  // Northern Territory
                {'id': 'AU.TS', 'value': 190},  // Tasmania
                {'id': 'AU.CT', labels: false}, // Australian Capital Territory
            ]);
			
// set the fill for the regions you haven't defined in the dataSet
map.unboundRegions().fill('#eee');
```

Now, let's look at what we've got:

{sample}Maps\_Choropleth\_02{sample}

As you can see, there's no visual difference between the districts with different values. That's because we haven't defined the Color Range yet. Let's think about the data classification and define the colorRange.

## Data Classes 

How many classes does a map need? Each time the answer will be different, because the only thing that can help you to define the classes' number is the accuracy of the information you need your map to provide. Most choropleth maps are made with 5-7 data classes average. The more classes you use, the less is data generalization, but this leads to the expense of legibility and increases the complexity of perception. Also, the more colors you use, the harder it will be to distinguish them all on prints.

A map with only three classes is quite easy to understand, but it may hide some important aspects of the data. So there is no perfect number of classes - there might be no classes at all if you use linear colorRange.

### Classed Choropleth

Classed Choropleth is a Choropleth Map, which scale is (and, consequently, a ColorRange is) Ordinal, so each class/color has some certain value bounds.

The situation with classification is the same as with number of classes: there's no default about the way to classify the data into ranges. The main goal of classification is to unite territories with similar rates through coloring them in one shade or color. 

One of the most popular ways to classify the data is using equal intervals. The data is divided into ranges of equal size (e.g., 0-100, 100-200, 200-300, etc.). This type is the best, when the data values are spread across the entire range, but has no sense, when the data values are spread unequally. 	

You can set the classes only by yourself. The sample of data classification is shown below.
```
// making of the ordinal colorRange
ordinalScale = anychart.scales.ordinalColor([
    {less: 100},
    {from: 100, to: 150},
    {from: 150, to: 200},
    {from: 200, to: 350},
    {greater:250}
]);            
```

To set the colors for each range use the {api:anychart.palettes.RangeColors}colors(){api} method. The number of colors you define should be the same as the number of ranges you have defined before:

```
ordinalScale.colors(['rgb(253,225,86)','rgb(248,196,57)', 'rgb(244,168,19)', 'rgb(198,109,1)', 'rgb(152,58,0)']);
```

That's how it all looks in the sample. Here we have changed the data a bit and removed the information about a plenty of regions - those ones are uncolored and stroked with green.

{sample}Maps\_Choropleth\_03{sample}

### Unclassed Choropleth

Unclassed Choropleth is a Choropleth Map, which scale is Linear, Logarithmic or DateTime, and, consequently, a ColorRange is Linear.
It means that there is no certain value bounds between colors, and a ColorRange looks like a single bar painted as a gradient.
It's necessary to define the first and the last colors, and the shades will be counted automatically. Use {api:anychart.core.map.series.Choropleth#colorScale}colorScale(){api} method to set the colors.

That's how it looks in a code:

```
series.colorScale(anychart.scales.linearColor('#FFEBD6','#C40A0A'));
```

And there's the sample with the colorRange of linear type:

{sample}Maps\_Choropleth\_04{sample}

Read more about [ColorRange](ColorRange).

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

If you are still in doubt about using a choropleth, check those which are a bit similar:
- [Dot Density Maps](Dot\_\(Point\)\_Map)
- [Graduated/Proportional Symbol Maps](Proportional_Symbol_Map)

These 3 map types can all handle raw data (e.g., simple counts, totals) opposite to choropleths that require the standardized data.