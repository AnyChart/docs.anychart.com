{:index 9}
# Individual Legend Items

## Overview

This article explains how to adjust legend items individually. You can set the text font and text format of an item, its icon type and appearance, enable and configure icon markers, and so on.

To access an individual item, call the {api:?entry=legendItem}legendItem(){api} method of the series represented by this item. For example, with a Cartesian series you should use the {api:anychart.core.cartesian.series.Line#legendItem}legendItem(){api} method. Combine it with methods of the {api:anychart.core.utils.LegendItemSettings}anychart.core.utils.LegendItemSettings{api} class.

Please note that legend items of single-series chart types cannot be customized this way. However, you can use the `legendItem` data field with fields corresponding to methods of the {api:anychart.core.utils.LegendItemSettings}anychart.core.utils.LegendItemSettings{api} class. Read the [Single Series](#single_series) section to learn more.

Also, using the {api:?entry=legend}legend(){api} method of the chart with {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} and {api:anychart.core.ui.Legend#items}items(){api} allows adding custom legend items both to single-series and multiple-series charts (as well as editing the existing items) – see the [Custom Items](#custom_items) section of this article.

## Enabling / Disabling

To enable or disable a legend item, pass `true` / `false` either directly to the {api:?entry=legendItem}legendItem(){api} method of the series or to the {api:anychart.core.utils.LegendItemSettings#enabled}enabled(){api} method of the legend item:

```
// disable the last item
series3.legendItem(false);
```

```
// disable the last item
series3.legendItem().enabled(false);
```

{sample}CS\_Legend\_Individual\_Items\_01{sample}

## Text Font

You can configure the font of a legend item by using the following methods:

* {api:anychart.core.utils.LegendItemSettings#fontColor}fontColor(){api} to set the font color
* {api:anychart.core.utils.LegendItemSettings#fontFamily}fontFamily(){api} to set the font family - Verdana, Helvetica, Arial, etc.
* {api:anychart.core.utils.LegendItemSettings#fontSize}fontSize(){api} to set the font size
* {api:anychart.core.utils.LegendItemSettings#fontStyle}fontStyle(){api} to set the font style - normal, italic, oblique
* {api:anychart.core.utils.LegendItemSettings#fontVariant}fontVariant(){api} to set the font variant - normal or small caps
* {api:anychart.core.utils.LegendItemSettings#fontWeight}fontWeight(){api} to set the font weight
* other methods from {api:anychart.core.utils.LegendItemSettings}anychart.core.utils.LegendItemSettings{api}


```
// configure the font of the last legend item
series4.legendItem().fontColor(series4.color());
series4.legendItem().fontSize(16);
series4.legendItem().fontWeight(600);
```

Here is a vertically [oriented](Basic_Settings#layout) legend with the font of the last item configured:

{sample}CS\_Legend\_Individual\_Items\_02{sample}

## Text Format

To set the text format of a legend item, use the {api:anychart.core.utils.LegendItemSettings#format}format(){api} method with either [tokens](../Text_Formatters#string_tokens) or [formatting functions](../Text_Formatters#formatting_functions).

You can also call the {api:anychart.core.utils.LegendItemSettings#useHtml}useHtml(){api} method to enable HTML for the item.

### Tokens

The `"{%seriesName}"` token works with all series types. Also, you can use other series-related tokens supported by the given series type.

For example, in the following sample, the `"{%seriesName}"` and `"{%seriesYSum}"` tokens are used to configure the text of a legend item representing one of the Line series of a multiple-series chart:

```
// enable html for the last legend item
series4.legendItem().useHtml(true);

// configure the format of the last legend item
series4.legendItem().format(
 "{%seriesName}: <span style='color:" + series4.color() +
 ";font-weight:600'>${%seriesYSum}</span>"
);
```

{sample}CS\_Legend\_Individual\_Items\_03{sample}

### Formatting Functions

Instead of tokens, you can use formatting functions with the `series` field, allowing you to access methods of the series.

In this sample, a formatting function is used to get the color, name, and total value of a Line series by accessing the {api:anychart.core.cartesian.series.Line#color}color(){api}, {api:anychart.core.cartesian.series.Line#name}name(){api}, and {api:anychart.core.cartesian.series.Line#getStat}getStat(){api} methods:

```
// enable html for the last legend item
series4.legendItem().useHtml(true);

// configure the format of the last legend item
series4.legendItem().format(function() {
  return this.series.name() + ": <span style='color:" +
         this.series.color() + ";font-weight:600'>$" +
         this.series.getStat("sum");
});
```

{sample}CS\_Legend\_Individual\_Items\_04{sample}

## Icons

Use the following method to configure the icon of an item:

* {api:anychart.core.utils.LegendItemSettings#iconEnabled}iconEnabled(){api} to enable or disable an item
* {api:anychart.core.utils.LegendItemSettings#iconType}iconType(){api} to set the type
* {api:anychart.core.utils.LegendItemSettings#iconSize}iconSize(){api} to set the size
* {api:anychart.core.utils.LegendItemSettings#iconFill}iconFill(){api} to set the fill
* {api:anychart.core.utils.LegendItemSettings#iconHatchFill}iconHatchFill(){api} to set the hatch fill
* {api:anychart.core.utils.LegendItemSettings#iconStroke}iconStroke(){api} to set the stroke

To set the type of the icon, combine the {api:anychart.core.utils.LegendItemSettings#iconType}iconType(){api} method with one of the parameters listed in {api:anychart.enums.LegendItemIconType}anychart.enums.LegendItemIconType{api}. It makes sense to choose the icon type corresponding to the series type, for example `"line"` for an item representing a Line series, `"area"` for an Area series, and so on. The default type is `"square"`.

**Note 1:** If the icon type is set to `"line"`, `"spline"`, or `"step-line"`, you can also enable and adjust icon markers. See the [Icon Markers](#icon_markers) section to learn more.

**Note 2:** Instead of adjusting each icon individually, you can use [themes](Themes).

In the sample below, there is a vertically [oriented](Basic_Settings#layout) legend with all the icons configured individually:

```
 var legendItem1 = series1.legendItem();
 var legendItem2 = series2.legendItem();
 var legendItem3 = series3.legendItem();
 var legendItem4 = series4.legendItem();

 // set the type of the last legend icon
 legendItem4.iconType("area");

 // set the sizes of legend icons
 legendItem1.iconSize(30);
 legendItem2.iconSize(30);
 legendItem3.iconSize(30);
 legendItem4.iconSize(60);

 // set the fills of legend icons
 legendItem1.iconFill("none");
 legendItem2.iconFill("none");
 legendItem3.iconFill("none");
 legendItem4.iconFill(series4.color());

 // set the hatch fills of legend icons
 legendItem1.iconHatchFill("backward-diagonal", series1.color());
 legendItem2.iconHatchFill("forward-diagonal", series2.color());
 legendItem3.iconHatchFill("diagonal-cross", series3.color());

 // set the strokes of legend icons
 legendItem1.iconStroke(series1.color(), 4);
 legendItem2.iconStroke(series2.color(), 4);
 legendItem3.iconStroke(series3.color(), 4);
 legendItem4.iconStroke(series4.color(), 4); 
```

{sample}CS\_Legend\_Individual\_Items\_05{sample}

## Icon Markers

Icon markers are automatically enabled on `"line"`, `"spline"`, and `"step-line"` [icons](#icons) when you enable series markers.

Use the following methods to adjust icon markers:

* {api:anychart.core.utils.LegendItemSettings#iconMarkerType}iconMarkerType(){api} to set the type
* {api:anychart.core.utils.LegendItemSettings#iconMarkerFill}iconMarkerFill(){api} to set the fill
* {api:anychart.core.utils.LegendItemSettings#iconMarkerStroke}iconMarkerStroke(){api} to set the stroke

Please note that by default the type of a marker corresponds to that of the series it represents. However, you can set the type manually by using the {api:anychart.core.utils.LegendItemSettings#iconMarkerType}iconMarkerType(){api} with one of the parameters listed in {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}.

In the following sample, series markers are enabled, and the types of legend icons are set to `"line"` and `"spline"`, so icon markers are automatically displayed as well. The fill and stroke of each marker is configured individually:

```
// enable series markers
series1.markers(true);
series2.markers(true);
series3.markers(true);
series4.markers(true);

var legendItem1 = series1.legendItem();
var legendItem2 = series2.legendItem();
var legendItem3 = series3.legendItem();
var legendItem4 = series4.legendItem();

// set the types of legend icons
legendItem1.iconType("line");
legendItem2.iconType("line");
legendItem3.iconType("line");
legendItem4.iconType("spline");

// set the fills of icon markers
legendItem1.iconMarkerFill("white");
legendItem2.iconMarkerFill("white");
legendItem3.iconMarkerFill("white");
legendItem4.iconMarkerFill("white");

// set the strokes of icon markers
legendItem1.iconMarkerStroke(series1.color(), 2);
legendItem2.iconMarkerStroke(series2.color(), 2);
legendItem3.iconMarkerStroke(series3.color(), 2);
legendItem4.iconMarkerStroke(series4.color(), 2);
```

{sample}CS\_Legend\_Individual\_Items\_06{sample}

## Spacing

You can set the spacing between the icon and text of a legend item with the help of the {api:anychart.core.utils.LegendItemSettings#iconTextSpacing}iconTextSpacing(){api} method.

## Single Series

If the chart type allows adding only a single series, its legend items represent points, not series. Such items can also be customized individually – combine the `legendItem` data field with fields corresponding to the methods mentioned in the sections above.

**Note:** The methods described in the [Custom Items](#custom_items) section also work with single-series chart types, so, alternatively, you can just add a custom item or create a fully custom legend.

In the sample below, there is a Pie chart with a vertically [oriented](Basic_Settings#layout) legend and one of the legend items adjusted. Special data fields are used to configure its [text font](#text_font) and [icon](#icons):

```
// create data
var data = [
  {x: "John", value: 5000},
  {x: "Richard", value: 5000},
  {x: "Larry", value: 5000},
  {x: "Marta", value: 15000, legendItem: {
    fontColor: "#455a64",
    fontSize: 30,
    fontWeight: 600,
    iconType: "circle",
    iconSize: 50,
    iconStroke: "4 #455a64",
    iconHatchFill: {
      type: "forward-diagonal",
      color: "#455a64",
      thickness: 4,
      size: 8
    }
  }}
];

// create a chart and set the data
chart = anychart.pie(data);
```

{sample}CS\_Legend\_Individual\_Items\_07{sample}

## Custom Items

You can add a custom item or items to the default legend (as well as edit an existing item) by combining the {api:?entry=legend}legend(){api} method of the chart with the {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} method of the legend. It takes a function returning an array of items.

Also, you can use the {api:anychart.core.ui.Legend#items}items(){api} method, which takes an array of items as a parameter, to override the default set of legend items with custom ones.

The available settings of custom legend items are listed in {api:anychart.core.ui.Legend.LegendItemProvider}anychart.core.ui.Legend.LegendItemProvider{api}.

**Note:** The [default interactivity settings](Basic_Settings#default_interactivity) do not apply to custom items. To bind them to elements of the chart, you have to use events – see the [Events](Events) article.

In this sample, there is a chart with a default legend. The {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} method with a function as a parameter is used to add a custom legend item representing the sum of all the Y-values on the chart:

```
// add a custom legend item 
chart.legend().itemsFormatter(function(legendItems) {
  legendItems.push({
    text: "/ Total Sales: $" + chart.getStat("dataPlotYSum") + " /",
    iconEnabled: false,
    fontColor: "#455a64",
    fontWeight: 600,
    fontStyle: "italic"
  });
  return legendItems;
});
```

{sample}CS\_Legend\_Individual\_Items\_08{sample}

Here, the {api:anychart.core.ui.Legend#items}items(){api} method is used to create a fully custom legend where each item is configured manually:

```
// add custom legend items
chart.legend().items([
  {
    text: "1",  
    iconSize: 25,
    iconFill: "none",
    iconHatchFill: {type: "backward-diagonal", color: "#96a6a6"},
    iconStroke: "2 #96a6a6",
    fontColor: "#96a6a6",
    fontSize: 16,
    fontWeight: 600
  },
  {
    text: "2",  
    iconSize: 25,
    iconFill: "none",
    iconHatchFill: {type: "forward-diagonal", color: "#96a6a6"},
    iconStroke: "2 #96a6a6",
    fontColor: "#96a6a6",
    fontSize: 16,
    fontWeight: 600
  },
  {
    text: "3",  
    iconSize: 25,
    iconFill: "none",
    iconHatchFill: {type: "diagonal-cross", color: "#96a6a6"},
    iconStroke: "2 #96a6a6",
    fontColor: "#96a6a6",
    fontSize: 16,
    fontWeight: 600
  },
  {
    text: "4",
    iconType: "area",   
    iconSize: 25, 
    iconFill: series4.color(),
    iconStroke: "2 " + series4.color(),
    fontColor: series4.color(),
    fontSize: 16,
    fontWeight: 600    
  },
  {
    text: "/ Total: $" + chart.getStat("dataPlotYSum") + " /",
    iconEnabled: false,
    fontColor: "#455a64",
    fontSize: 20,
    fontWeight: 600,
    fontStyle: "italic"
  }
]);
```

{sample}CS\_Legend\_Individual\_Items\_09{sample}

In the sample below, there is also a custom legend, created with the help of the {api:anychart.core.ui.Legend#items}items(){api} method. Each point represents a point of a multiple-series chart:

```
// push legend items to the array
for (var i = 0; i < chart.getSeriesCount(); i++) {
    var series = chart.getSeriesAt(i);
    for (var k = 0; k < series.data().getRowsCount(); k++) {
      legendItems.push({
        text: series.name() + ": " + data.data()[k][0] + 
              " – $" + data.data()[k][i + 1],
        iconType: "square",
        iconFill: series.color()
      });
    }
}

// add custom legend items
legend.items(legendItems);
```

{sample}CS\_Legend\_Individual\_Items\_10{sample}