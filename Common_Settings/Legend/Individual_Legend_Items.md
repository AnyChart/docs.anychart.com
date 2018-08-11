{:index 9}
# Individual Legend Items

## Overview

* **legendItem()**
* Cartesian: {api:anychart.core.cartesian.series.Line#legendItem}legendItem(){api}
* {api:anychart.core.utils.LegendItemSettings}anychart.core.utils.LegendItemSettings{api}
* [Legend Items](Legend_Items)
* упомянуть {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} и {api:anychart.core.ui.Legend#items}items(){api}
* (?) сказать, что это только для многосерийных чартов работает?

## Enabling / Disabling

To enable or disable a legend item, pass `true` / `false` either directly to the **legendItem()** method of the series or to the {api:anychart.core.utils.LegendItemSettings#enabled}enabled(){api} method of the legend item:

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
series4.legendItem().fontSize(26);
series4.legendItem().fontWeight(600);
series4.legendItem().fontColor(series4.color());
```

{sample}CS\_Legend\_Individual\_Items\_02{sample}

## Text Format

To set the text format of a legend item, use the {api:anychart.core.utils.LegendItemSettings#format}format(){api} method with either [tokens](../Text_Formatters#string_tokens) or [formatting functions](../Text_Formatters#formatting_functions).

You can also call the {api:anychart.core.utils.LegendItemSettings#useHtml}useHtml(){api} method to enable HTML for the item.

### Tokens

The `"{%seriesName}"` token works with all series types. Also, you can use other series-related tokens supported by the given series type. (?)

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

Instead of tokens, you can use formatting functions with the `series` field, allowing you to access the methods of the series.

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
* {api:anychart.core.utils.LegendItemSettings#iconFill}iconFill(){api} to set the fill
* {api:anychart.core.utils.LegendItemSettings#iconHatchFill}iconHatchFill(){api} to set the hatch fill
* {api:anychart.core.utils.LegendItemSettings#iconStroke}iconStroke(){api} to set the stroke
* {api:anychart.core.utils.LegendItemSettings#iconSize}iconSize(){api} to set the size

To set the the type of the icon, combine the {api:anychart.core.utils.LegendItemSettings#iconType}iconType(){api} method with one of the parameters listed in {api:anychart.enums.LegendItemIconType}anychart.enums.LegendItemIconType{api}. It makes sense to choose the icon type corresponding to the series type, for example `"line"` for an item representing a Line series, `"area"` for an Area series, and so on. The default type is `"square"`.

**Note:** If the icon type is `"line"` or `"spline"`, you can also enable and adjust icon markers. See the [Icon Markers](icon_markers) section to learn more.

In the sample below, all legend items are configured individually:

```
 var legendItem1 = series1.legendItem();
 var legendItem2 = series2.legendItem();
 var legendItem3 = series3.legendItem();
 var legendItem4 = series4.legendItem();

 // set the type of the last legend icon
 legendItem4.iconType("area");

 // set the sizes of legend items
 legendItem1.iconSize(30);
 legendItem2.iconSize(30);
 legendItem3.iconSize(30);
 legendItem4.iconSize(60);

 // set the fills of legend items
 legendItem1.iconFill("white");
 legendItem2.iconFill("white");
 legendItem3.iconFill("white");
 legendItem4.iconFill(series4.color());

 // set the hatch fills of legend items
 legendItem1.iconHatchFill("backward-diagonal", series1.color());
 legendItem2.iconHatchFill("forward-diagonal", series2.color());
 legendItem3.iconHatchFill("diagonal-cross", series3.color());

 // set the strokes of legend items
 legendItem1.iconStroke(series1.color(), 4);
 legendItem2.iconStroke(series2.color(), 4);
 legendItem3.iconStroke(series3.color(), 4);
 legendItem4.iconStroke(series4.color(), 4); 
```

{sample}CS\_Legend\_Individual\_Items\_05{sample}

## Icon Markers

* [Icons](icons)
* включение, тип, визуальные настройки
* включить маркеры на серии + тип иконки сделать `"line"` или `"spline"`
* маркер автоматически берется у серии, но можно настроить вручную
* {api:anychart.core.utils.LegendItemSettings#iconMarkerType}iconMarkerType(){api}
* {api:anychart.core.utils.LegendItemSettings#iconMarkerFill}iconMarkerFill(){api}
* {api:anychart.core.utils.LegendItemSettings#iconMarkerStroke}iconMarkerStroke(){api}
* {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}


```
// enable markers
series1.markers(true);
series2.markers(true);
series3.markers(true);
series4.markers(true);

var legendItem1 = series1.legendItem();
var legendItem2 = series2.legendItem();
var legendItem3 = series3.legendItem();
var legendItem4 = series4.legendItem();

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

* {api:anychart.core.utils.LegendItemSettings#iconTextSpacing}iconTextSpacing(){api}

## Themes

```
?
```

{sample}CS\_Legend\_Individual\_Items\_07{sample}

## Custom Items

* {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api}
* {api:anychart.core.ui.Legend.LegendItemProvider}anychart.core.ui.Legend.LegendItemProvider{api}


```
// add a custom legend item 
chart.legend().itemsFormatter(function(items) {
  items.push({
    text: "/ Total Sales: $" + chart.getStat("dataPlotYSum") + " /",
    iconEnabled: false,
    fontWeight: 600,
    fontColor: "#455a64",
    fontStyle: "italic"
  });
  return items;
});
```

{sample}CS\_Legend\_Individual\_Items\_08{sample}

* {api:anychart.core.ui.Legend#items}items(){api}


```
// add custom legend items
chart.legend().items([
  {
    text: "1",  
    iconSize: 25,
    iconFill: null,
    iconHatchFill: "backward-diagonal",
    iconStroke: "2 #96a6a6",
    fontSize: 16,
    fontWeight: 600,
    fontColor: "#96a6a6"
  },
  {
    text: "2",  
    iconSize: 25,
    iconFill: null,
    iconHatchFill: "forward-diagonal",
    iconStroke: "2 #96a6a6",
    fontSize: 16,
    fontWeight: 600,
    fontColor: "#96a6a6"
  },
  {
    text: "3",  
    iconSize: 25,
    iconFill: null,
    iconHatchFill: "diagonal-cross",
    iconStroke: "2 #96a6a6",
    fontSize: 16,
    fontWeight: 600,
    fontColor: "#96a6a6"
  },
  {
    text: "4",
    iconType: "area",   
    iconSize: 25, 
    iconFill: series4.color(),
    iconStroke: "2 " + series4.color(),
    fontSize: 16,
    fontWeight: 600,
    fontColor: series4.color()
  },
  {
    text: "/ Total: $" + chart.getStat("dataPlotYSum") + " /",
    iconEnabled: false,
    fontSize: 20,
    fontWeight: 600,
    fontColor: "#455a64",
    fontStyle: "italic"
  }
]);
```

{sample}CS\_Legend\_Individual\_Items\_09{sample}