{:index 5}
# Individual Legend Items

## Overview

* **legendItem()**
* {api:anychart.core.cartesian.series.Line#legendItem}legendItem(){api}
* {api:anychart.core.utils.LegendItemSettings}anychart.core.utils.LegendItemSettings{api}
* [Legend Items](Legend_Items)
* упомянуть {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api} и {api:anychart.core.ui.Legend#items}items(){api}

## Disabling

* {api:anychart.core.utils.LegendItemSettings#enabled}enabled(){api}


```
// disable the last item
series3.legendItem().enabled(false);
```

{sample}CS\_Legend\_Individual\_Items\_01{sample}

## Text Font

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

* {api:anychart.core.utils.LegendItemSettings#format}format(){api}
* {api:anychart.core.utils.LegendItemSettings#useHtml}useHtml(){api}

### Tokens

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

* тип, визуальные настройки, размер
* {api:anychart.core.utils.LegendItemSettings#iconType}iconType(){api}
* {api:anychart.core.utils.LegendItemSettings#iconFill}iconFill(){api}
* {api:anychart.core.utils.LegendItemSettings#iconHatchFill}iconHatchFill(){api}
* {api:anychart.core.utils.LegendItemSettings#iconStroke}iconStroke(){api}
* {api:anychart.core.utils.LegendItemSettings#iconSize}iconSize(){api}
* {api:anychart.core.utils.LegendItemSettings#iconEnabled}iconEnabled(){api}
* {api:anychart.enums.LegendItemIconType}anychart.enums.LegendItemIconType{api}


```

```

{sample}CS\_Legend\_Individual\_Items\_05{sample}

## Markers

* включение, тип, визуальные настройки
* включить маркеры на серии + тип иконки сделать `"line"` или `"spline"`
* маркер автоматически берется у серии, но можно настроить вручную
* {api:anychart.core.utils.LegendItemSettings#iconMarkerType}iconMarkerType(){api}
* {api:anychart.core.utils.LegendItemSettings#iconMarkerFill}iconMarkerFill(){api}
* {api:anychart.core.utils.LegendItemSettings#iconMarkerStroke}iconMarkerStroke(){api}
* {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}


```

```

{sample}CS\_Legend\_Individual\_Items\_06{sample}

## Spacing

* {api:anychart.core.utils.LegendItemSettings#iconTextSpacing}iconTextSpacing(){api}

## Themes

```
?
```

{sample}CS\_Legend\_Individual\_Items\_07{sample}

## Adding Custom Items (?)

* {api:anychart.core.ui.Legend#itemsFormatter}itemsFormatter(){api}
* {api:anychart.core.ui.Legend.LegendItemProvider}anychart.core.ui.Legend.LegendItemProvider{api}


```

```

{sample}CS\_Legend\_Individual\_Items\_08{sample}

* {api:anychart.core.ui.Legend#items}items(){api}


```
добавление итемов списком
```

{sample}CS\_Legend\_Individual\_Items\_09{sample}