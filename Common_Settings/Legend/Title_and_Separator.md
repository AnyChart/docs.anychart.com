{:index 4}
# Title and Separator

The legend [title](../Title) is disabled by default. To enable and configure it, combine the the **legend()** method of the chart and {api:anychart.core.ui.Legend#title}title(){api} with the methods of the {api:anychart.core.ui.Title}anychart.core.ui.Title{api} class. For example, you can adjust the text and font of the title:

```
// enable and configure the legend title
var title = chart.legend().title();
title.enabled(true);
title.text("Total Sales: " + chart.getStat("dataPlotYSum"));
title.fontSize(12);
title.fontWeight(600);
title.fontColor("#96a6a6");
```

You can also enable and adjust the title separator: combine the {api:anychart.charts.Cartesian#legend}legend(){api} and {api:anychart.core.ui.Legend#titleSeparator}titleSeparator(){api} methods with the methods of the {api:anychart.core.ui.Separator}anychart.core.ui.Separator{api} class. This is how the fill and stroke are adjusted:

```
// enable and configure the title separator
var separator = chart.legend().titleSeparator()
separator.enabled(true);
separator.height(4);
separator.stroke("#96a6a6", 2);
separator.fill(null);
```

{sample}CS\_Legend\_Title{sample}