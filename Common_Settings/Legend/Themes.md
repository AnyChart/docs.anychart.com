{:index 10}
# Themes

Sometimes it makes sense to configure the legend by using the [Themes](../../Appearance_Settings/Themes) feature, which allows you to access all the available legend settings. For example, legend icons can be configured only [individually](Individual_Legend_Items#icons), and themes allow adjusting several icons at once.

In the sample below, a theme is used to set the default types of legend icons depending on the series type:

```
// set the default types of legend icons
anychart.theme({
  chart: {
    defaultSeriesSettings: {
      line: {legendItem: {iconType: "line"}},
      spline: {legendItem: {iconType: "spline"}},
      area: {legendItem: {iconType: "area"}}
}}});
```

{sample}CS\_Legend\_Themes{sample}