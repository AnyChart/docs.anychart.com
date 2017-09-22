{:index 15}
# Map Visualisation

## Overview 

In some cases you might need to color a region (or a number of regions) specifically, or stroke it, or make it noticeable in some way. Also, it looks nice when a region is highlighted when hovered. Sometimes you don't need to use a colorScale, but you've got different series on a map which you'd like to color differently.                                                                                
This article will help you to understand how to work with colors and palettes which can help you to alter the look and feel of a map.

## Themes

Maps support themes and you can simply swap themes and palettes. Please see [Themes](../Appearance_Settings/Themes) article to learn about themes.

## Coloring the Map regions

You can color regions using [Color Scale](Scales) or by directlu setting color. This article shows how to set color directly. 

### Normal

You might have defined a number of series for some reason. As you don't use the colorScale, it's possible to color the map the same as series of basic charts: use simple {api:anychart.core.map.series.Base#fill}fill(){api} method.

```
// set the color for the regions of the first series
firstSeries.fill('#FFCC99');

// set the color for the regions of the second series
secondSeries.fill('#8CE3B0');
```

{sample}Maps\_Visualisation\_01{sample}

In this sample we've got the map of Australia, where its regions are defined in two different series which are then colored separately, independent from its values. 

You can also change the [color of labels](Labels) and the title color.

{sample}Maps\_Visualisation\_02{sample}

In this case, your data looks like this:

```
var data_1 = [
    {id: "AU.CT", value: 15, fill: '#33CC33'},
    {id: "AU.VI", value: 23, fill: '#33CC33'},
    {id: "AU.NT", value: 64, fill: '#99FF66'},
    {id: "AU.TS", value: 28, fill: '#99FF33'},
    {id: "AU.SA", value: 45, fill: '#FFFF66'}
];

var data_2 = [
    {id: "AU.WA", value: 86, fill:'#99CC00'},
    {id: "AU.QL", value: 16, fill:'#CCCC00'},
    {id: "AU.NS", value: 32, fill:'#FFCC66'}
];
```

### Hovered

By default there's no color for the hovered points but the settings, which make the hovered regions change its color to more pale shade. However, if you wish to have another hovering settings, look through the next example.

```
// set the color for the hovered regions of the first series
firstSeries.hovered().fill('#FFFF66');

// set the image for the hovered regions of the second series
secondSeries.hovered().fill({
    src: "https://static.anychart.com/logo/oceanic-airlines.png",
    mode: "stretch",
    opacity: 0.3
});
```
{sample}Maps\_Visualisation\_03{sample}

We use a simple {api:anychart.core.map.series.Base#hovered}hovered(){api} state for changing the default color of hovered regions.

As you might have noticed, we've used an image as a hoverFill. So it's not necessary to fill the points only with colors.

The same as in the paragraph about normal points and series, you still can use the dataSet for setting the colors you want the hovered region to be.

### Selected

Finally, it's possible to change the default selecting color. Use {api:anychart.core.map.series.Base#selected}selected(){api} state for that.

```
// set the color for the selections of the first series
firstSeries.selected().fill("#FFA875");

// set the color for the selections of the second series
secondSeries.selected().fill("#4CF0BD");
```

{sample}Maps\_Visualisation\_04{sample}

Note that it's possible to select several regions at once. Hold Shift key and click on those regions.

## Palette

### Colors Array

You may define the colors you want to use in your map as an array using {api}palette(){api} method.

```
// set the palette
map.palette(["#FFEB3B", "#FFC107"]);
```

{sample}Maps\_Visualisation\_05{sample}

Note that you should define as many colors as there are regions you've got on the map, i.e. each color refers to one series.

### Range Colors

For using rangeColors you should create a new palette and set colors and number of them to it. Use method {api:anychart.palettes.RangeColors}anychart.palettes.rangeColors(){api} to create the palette.

```
// Creates palette
var myPalette = anychart.palettes.rangeColors();
myPalette.colors(["#B2DFDB", "#00796B"]);
myPalette.count(4);

// Sets palette.
map.palette(myPalette);
```

{sample}Maps\_Visualisation\_07{sample}

As you may notice, it works almost the same as in the previous case, just the defining type is different.

### Distinct Colors

The difference between this coloring option and previous ones is fully independence of regions' colors. You might want one series to be colored with a gradient and another one with a plain color, and the {api:anychart.palettes.DistinctColors}DistinctColors{api} method is able to do that.

```
// Creates palette
var myPalette = anychart.palettes.distinctColors();
myPalette.colors([
    ["#DCEDC8", "#689F38"],
    "#4FC3F7",
    "#4DD0E1"
]);

// Sets palette
map.palette(myPalette);
```

{sample}Maps\_Visualisation\_08{sample}

This way of coloring is not possible using other palette types.

## Linear Color Scale

Besides those mentioned options, you may use scale to color the Map with multiple series. The usage of LinearColorScale is almost the same in this case as with [ColorRange](ColorRange). However, put your attention at the fact that here is a Map with multiple series apart from Map with one range-colored series that you can find in the ColorRange article. So the way of using the {api:anychart.scales.LinearColor}LinearColor{api} method is a bit different.

```
// create the color scale
var currentColorScale = anychart.scales.linearColor();

// colors setting
currentColorScale.colors(["#BDBDBD", "#424242"]);

// create the first series
var firstSeries = map.choropleth(data_1);

// create the second series
var secondSeries = map.choropleth(data_2);

// define the colorscale for both series 
firstSeries.colorScale(currentColorScale);
secondSeries.colorScale(currentColorScale);
```

{sample}Maps\_Visualisation\_09{sample}