{:index 3}
# Background

(?) {api:anychart.charts.Cartesian#legend}legend(){api}

To enable and configure the background of the legend, use the  {api:anychart.core.ui.Legend#background}background(){api} method, combined with the methods of the {api:anychart.core.ui.Background}anychart.core.ui.Background{api} class. You can adjust the fill, stroke, and corners: 

```
// configure the background of the legend
var background = chart.legend().background();
background.enabled(true);
background.fill("#96a6a6 0.3");
background.stroke("#96a6a6");
background.cornerType("round");
background.corners(10);
```

Read more: [Background](../../Appearance_Settings/Background).

{sample}CS\_Legend\_Background{sample}