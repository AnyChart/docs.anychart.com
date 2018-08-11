{:index 6}
# Paginator

In some cases – depending on the [Layout](Basic_Settings#layout) and [Size](Basic_Settings#size) settings of the legend – only a part of the items is shown simultaneously, and the legend paginator is automatically enabled, allowing you to flip through them.

You can adjust the paginator by combining the **legend()** method of the chart with {api:anychart.core.ui.Legend#paginator}paginator(){api} and the following methods:

* {api:anychart.core.ui.Paginator#currentPage}currentPage(){api} to specify which page is initially displayed (1 by default)
* {api:anychart.core.ui.Paginator#layout}layout(){api} to set the `"horizontal"` (default) or `"vertical"` layout
* {api:anychart.core.ui.Paginator#orientation}orientation(){api} to set the position relative to the legend
* {api:anychart.core.ui.Paginator#fontColor}fontColor(){api} to set the font color
* other methods of the {api:anychart.core.ui.Paginator}anychart.core.ui.Paginator{api} class


```
// configure the legend paginator
var paginator = chart.legend().paginator();
paginator.layout("vertical");
paginator.orientation("left");
paginator.padding(15);
paginator.fontColor("#dd2c00");
paginator.fontSize(12);
paginator.fontWeight(600);
```

Please note that the {api:anychart.core.ui.Paginator#currentPage}currentPage(){api} method should be called after the chart is drawn:

```
// initiate drawing the chart
chart.draw();

// set the current page of the paginator
paginator.currentPage(2);
```

{sample}CS\_Legend\_Paginator{sample}