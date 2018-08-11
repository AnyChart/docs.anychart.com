{:index 3}
# Background

To enable and configure the [background](../../Appearance_Settings/Background) of the legend, combine the **legend()** method of the chart and {api:anychart.core.ui.Legend#background}background(){api} with the methods of the {api:anychart.core.ui.Background}anychart.core.ui.Background{api} class. You can adjust the fill, stroke, and corners:

```
// configure the background of the legend
var background = chart.legend().background();
background.enabled(true);
background.fill("#96a6a6 0.3");
background.stroke("#96a6a6");
background.cornerType("round");
background.corners(10);
```

{sample}CS\_Legend\_Background{sample}