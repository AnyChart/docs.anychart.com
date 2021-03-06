{:index 4}
# Title and Separator

The legend [title](../Title) is disabled by default. To enable and configure it, combine the {api:?entry=legend}legend(){api} method of the chart with {api:anychart.core.ui.Legend#title}title(){api} and methods of the {api:anychart.core.ui.Title}anychart.core.ui.Title{api} class. You can set the text, font, padding, and so on:

```
// enable and configure the legend title
var title = chart.legend().title();
title.enabled(true);
title.text("Total Sales: " + chart.getStat("dataPlotYSum"));
title.padding(5);
title.fontColor("#96a6a6");
title.fontSize(12);
title.fontWeight(600);
```

To enable and configure the title separator, combine the {api:?entry=legend}legend(){api} and {api:anychart.core.ui.Legend#titleSeparator}titleSeparator(){api} methods with methods of the {api:anychart.core.ui.Separator}anychart.core.ui.Separator{api} class. For example, you can set the height, fill, and stroke:

```
// enable and configure the title separator
var separator = chart.legend().titleSeparator()
separator.enabled(true);
separator.height(4);
separator.fill("none");
separator.stroke("#96a6a6", 2);
```

Here is a legend with the title and separator ajusted:

{sample}CS\_Legend\_Title\_01{sample}

Please note that you can set the orientation of both elements: use the {api:anychart.core.ui.Title#orientation}orientation(){api} method of the title and the same method of the separator with one of the parameters listed in {api:anychart.enums.Orientation}anychart.enums.Orientation{api}:

* `top`
* `bottom`
* `right`
* `left`


```
chart.legend().title().orientation("left");
```

```
chart.legend().titleSeparator().orientation("left");
```

In the sample below, there is a legend with a vertical [layout](Basic_Settings#layout), and the title and separator are placed to the left of it:

{sample}CS\_Legend\_Title\_02{sample}