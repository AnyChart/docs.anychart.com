# Palettes

AnyChart uses palettes for auto coloring. There are 4 types of palettes: Color palettes, Hatch palettes and Marker palettes, each palette is a  list of predefined items: colors, hatch fills or markers.

You can create any number of your own palettes, give them the unique names and apply where needed, see {api:anychart.palettes#distinctColors}distinctColors(){api}, {api:anychart.palettes#hatchFills}hatchFills(){api}, {api:anychart.palettes#markers}markers(){api} and {api:anychart.palettes#rangeColors}rangeColors(){api} for that.

Also, you can use predefined AnyChart distinct color palettes from {api:anychart.palettes}anychart.palettes{api}:

```
// set palette to a chart:
chart.palette(anychart.palettes.defaultPalette);

// Other available palettes:
// anychart.palettes.earth 
// anychart.palettes.monochrome 
// anychart.palettes.provence 
// anychart.palettes.morning 
// anychart.palettes.coffee 
// anychart.palettes.wines 
// anychart.palettes.pastel 
// anychart.palettes.blue 
// anychart.palettes.glamour 
// anychart.palettes.sea
```

A built-in palette can also be applied by its name, the key of the palette in {api:anychart.palettes}anychart.palettes{api}, such as `sea` or `coffee`. Pass the name to the {api:anychart.charts.Cartesian#palette}palette(){api} method of a chart. In a [theme](Themes), the name works as the value of the `palette` key: `{"palette": "sea"}`.

```
// set a palette by name
chart.palette("sea");
```

Here is a sample of a Funnel chart. Click slices to change palettes:

{sample}AS\_Palettes\_01{sample}