{:index 12}
# ColorRange

## Overview
 
ColorRange is a tool that is necessary when we need to identify the value that each point on a map presents. It looks like a range bar, colored as gradient 
or like a number of colored boxes, each presenting a range of values.
 
To create a colorrange, use the {api:anychart.charts.Map#colorRange}**.colorRange()**{api} function. There are a lot of parameters might be adjusted, such as orientation 
(to change it use the {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} function), size of the color box (use {api:anychart.core.ui.ColorRange#colorLineSize}**.colorLineSize()**{api}) or alignment ({api:anychart.graphics.vector.Image#align}**.align()**{api} in this case). You can find more about visual settings in the end of this article.

However, first of all we need to adjust the map colors and its ColorScale, because the ColorRange type and appearance depend on those settings. Read the article about [ColorScale](./Scales) to know, how to set and adjust it according to your needs.

The first step of adjusting the colors is to set the series and data correctly. Let's make an example with a Choropleth Series Map. Look at the code below.

```
	// set the data
	var dataSet = anychart.data.set([
      {'id': 'AU.WA', 'value': 300},  // Western Australia
      {'id': 'AU.JB'},                // Jervis Bay Territory
      {'id': 'AU.NS', 'value': 240},  // New South Wales
      {'id': 'AU.VI', 'value': 75},   // Victoria
      {'id': 'AU.NT', 'value': 130},  // Northern Territory
      {'id': 'AU.TS', 'value': 190},  // Tasmania
      {'id': 'AU.CT', labels: false}, // Australian Capital Territory
      {'id': 'AU.SA'},                // South Australia
      {'id': 'AU.QL'}                 // Queensland
    ]);
	
    // set the map
    var map = anychart.map();
	
	// set the geoData 
    map.geoData(anychart.maps.australia);
	
	// set the series
    var series = map.choropleth(dataSet);
	
	// tell the series which field should tie the colorRange and the colorScale together
    series.geoIdField('code_hasc');
```

Here we took an Australia map for the example. You may notice that some regions don't have values, which makes them "unBound", but still all the regions are painted with the default color. That's because we haven't defined the ColorScale yet. If the ColorScale is defined, the unbound regions will become transparent (like in the Ordinal Scale sample).

{sample}Maps\_ColorRange\_01{sample}

Note that a ColorRange can only be connected to an only axis, while it's possible to make a map with several series.
 
 
## Enabling the ColorRange

To enable the ColorRange, there's a simple method **{api:anychart.charts.Map#colorRange}.colorRange(){api}**.

```
// create and enable the colorRange
	var cr = map.colorRange(true);
```
	
Look at the samples below: we have added the ColorRange to the both previous samples. In the first sample the ColorRange looks like a number of different-colored rectangles because of ordinal Scale. The number of rectangles depends on the number of ranges defined above.

{sample}Maps\_ColorRange\_02{sample}

Here is the second case with the linear ColorScale. The ColorRange here looks like a line colored with a gradient.

{sample}Maps\_ColorRange\_03{sample}

You may notice that there is a marker on the ColorRange that helps to find the value on the ColorRange.
 

## Visual Settings

There are some visual preferences of a ColorRange that might be set different from the default if needed - such as position, size and other. Look through this paragraph to know more about them.

### Orientation

A simple function {api:anychart.core.ui.ColorRange#orientation}**.orientation()**{api} is used for the changing the position. An argument should be a string with one of the following values: 'right', 'left', 'bottom' or 'top'.

```
	// put the colorRange to the right from the map
	colorRange.orientation('right');
```

{sample}Maps\_ColorRange\_04{sample}

### Length

The ColorRange length adjusting is quite usual: as for any other components, just add the {api:anychart.core.ui.ColorRange#length}**.length()**{api} method to the colorRange.

```
	// set the colorRange length
	colorRange.length(100);
```

{sample}Maps\_ColorRange\_05{sample}

### Size and position

When you need to change the distance between the ColorRange and the map itself or between the colorRange and the map field borders, use the {api:anychart.charts.Map#padding}**.padding()**{api} method. 
You may define and only argument or all four (if you want them different) for all sides. Look at the following sample:

```
	// set the colorRange padding 
	colorRange.padding(100);
```

In case you set the only value, this value will be interpreted as the same padding to each of the map field sides.

{sample}Maps\_ColorRange\_06{sample}

And if you define all four padding values, you'll be able to change the distance between the ColorKange and both map and its field borders.

```
	// set the colorRange padding 
	colorRange.padding(0, 100, 0, -100);
```

{sample}Maps\_ColorRange\_07{sample}

As you can see, the usage of this method with ColorRange is the same as in simple HTML.

### Stroke 

To stroke the ColorRange, use the {api:anychart.core.ui.ColorRange#stroke}**.stroke()**{api} method. We have already done it before - in the sample with a Bi-polar progression (Ordinal Scale).

```
	// create, enable and stroke the colorRange
	var colorRange = map.colorRange();
	colorRange.enabled(true).stroke('#BBB');
```

{sample}Maps\_ColorRange\_08{sample}


### Labels

You can enable, disable, color the labels in different colors, apply some features to format the labels of a colorRange. Use usual {api:anychart.core.map.series.Base#labels}**.labels**(){api} method to adjust them.

```
	// disable the labels
	colorRange.labels(false);
```

{sample}Maps\_ColorRange\_09{sample}

You can also create an object:

```
	// adjust the labels
	colorRange.labels({'fontSize':10, 'fontColor':'green'});
```

{sample}Maps\_ColorRange\_10{sample}

### Marker

Marker on a ColorRange is needed to demonstrate the position of the value on a ColorRange, so you can understand the map better. To make any changes with it both ColorRange and marker itself should be enabled.

You can change the marker type, for example:

```
	// change the default marker type to diamond
    var marker = colorRange.marker();
    marker.type("diamond");
```

{sample}Maps\_ColorRange\_11{sample}

Now let's change our marker's color and size:

```
	// change the default marker color to purple
    marker.fill("purple");
	
	// set the size to your marker
    marker.size(7);
```

{sample}Maps\_ColorRange\_12{sample}