Map Visualisation
======================

* [Overview](#overview)
* [Coloring the Map regions](#coloring_the_map_regions)
 * [Normal points and series](#normal_points_and_series)
 * [Hovered points and series](#hovered_points_and_series)
 * [Selected points and series](#selected_points_and_series)
* [Palette](#palette)

## Overview 

In some cases you might need to color a region (or a number of regions) specifically, or stroke it, or make it noticeable in some way. Also, it looks nice when a region is highlighted when hovered. Sometimes you don't need to use a colorScale, but you've got different series on a map which you'd like to color differently.                                                                                

This article will help you to understand how to work with colors and palettes which can help you to make your map more attractive.

## Coloring the Map regions

There are three slightly different situations when you might need to adjust colors for the map without colorScale (read about colorScale [here](../Map_Scales)). First is when you've got a simple uncolored Map and you don't want or don't need to use a colorScale; second is when you want to set the colors for highlighting an only point (region) or a series; in the third case you might want to define colors for the selected regions.

Let's consider those situations.

### Normal points and series

You might have defined a number of series for some reason. As you don't use the colorScale, it's possible to color the map the same as series of basic charts: use simple {api:anychart.core.map.series.Base#fill}**.fill()**{api} method.

```
	// set the color for the regions of the first series
    firstSeries.fill('#FFCC99');
	
	// set the color for the regions of the second series
    secondSeries.fill('#8CE3B0');
```

{sample}Maps\_Visualisation\_01{sample}

In this sample we've got the map of Australia, where its regions are defined in two different series which are then colored separately, independent from its values. 

You can also change the color of labels and the title color. You can read about those [here](../Map_Labels).

Also, there is nothing different from our basic charts if you want to use the dataset for defining the region's colors:

{sample}Maps\_Visualisation\_02{sample}

In this case, your dataSet will look like following:

```
    var firstDataSet = anychart.data.set([
        {id: "AU.CT", value: 15, title: "Australian Capital Territory", fill:'#33CC33'},
        {id: "AU.VI", value: 23, title: "Victoria", fill:'#33CC33'},
        {id: "AU.NT", value: 64, title: "Northern Territory", fill:'#99FF66'},
        {id: "AU.TS", value: 28, title: "Tasmania", fill:'#99FF33'},
        {id: "AU.SA", value: 45, title: "South Australian", fill:'#FFFF66'}
    ]);

    var secondDataSet = anychart.data.set([
        {id: "AU.WA", value: 86, title: "Western Australia", fill:'#99CC00'},
        {id: "AU.QL", value: 16, title: "Queensland", fill:'#CCCC00'},
        {id: "AU.NS", value: 32, title: "New South Wales", fill:'#FFCC66'}
    ]);
```

Note that if you paint each region a unique color through the dataSet, there's no matter if you've got an only series or multiple.

### Hovered points and series

By default there's no color for the hovered points but the settings, which make the hovered regions change its color to more pale shade. However, if you wish to have another hovering settings, look through the next example.

```
	// set the color for the hovered regions of the first series
    firstSeries.hoverFill('#FFFF66');
	
	// set the image for the hovered regions of the second series
    secondSeries.hoverFill({
        src: "http://static.anychart.com/logo/oceanic-airlines.png",
        mode: "stretch",
        opacity: 0.3
    });
```
{sample}Maps\_Visualisation\_03{sample}

We use a simple {api:anychart.core.map.series.Base#hoverFill}**.hoverFill()**{api} method for changing the default color of hovered regions.

As you might have noticed, we've used an image as a hoverFill. So it's not necessary to fill the points only with colors.

The same as in the paragraph about normal points and series, you still can use the dataSet for setting the colors you want the hovered region to be.

### Selected points and series

Finally, it's possible to change the default selecting color. Use {api:anychart.core.map.series.Base#selectFill}**.selectFill()**{api} for that.

```
    // set the color for the selections of the first series
    firstSeries.selectFill("#FFA875");
	
    // set the color for the selections of the second series
    secondSeries.selectFill("#4CF0BD");
```
{sample}Maps\_Visualisation\_04{sample}