{:index 4}
# Legend Items

## Overview

* (?) {api:anychart.charts.Cartesian#legend}legend(){api}
* (?) [Individual Legend Items](Individual_Legend_Items)

## Text Font

You can configure the font of legend items by using the following methods:

* {api:anychart.core.ui.Legend#fontColor}fontColor(){api} to set the font color
* {api:anychart.core.ui.Legend#fontFamily}fontFamily(){api} to set the font family - Verdana, Helvetica, Arial, etc.
* {api:anychart.core.ui.Legend#fontSize}fontSize(){api} to set the font size
* {api:anychart.core.ui.Legend#fontStyle}fontStyle(){api} to set the font style - normal, italic, oblique
* {api:anychart.core.ui.Legend#fontVariant}fontVariant(){api} to set the font variant - normal or small caps
* {api:anychart.core.ui.Legend#fontWeight}fontWeight(){api} to set the font weight
* other methods from {api:anychart.core.ui.Legend}anychart.core.ui.Legend{api}


```
// configure the font of legend items
chart.legend().fontSize(16);
chart.legend().fontWeight(600);
chart.legend().fontColor("#455a64");
```

{sample}CS\_Legend\_Items\_01{sample}

## Text Format

To set the text format of legend items, use the {api:anychart.core.ui.Legend#itemsFormat}itemsFormat(){api} method with either [tokens](../Text_Formatters#string_tokens) or [formatting functions](../Text_Formatters#formatting_functions). Which settings are available depends on the series type and whether the chart type is single-series or multiple-series.

You can also call the {api:anychart.core.ui.Legend#useHtml}useHtml(){api} method to enable HTML for the legend text.

### Tokens

If the chart type allows adding multiple series, each legend item represents a series. In this case, you can use the `"{%seriesName}"` token, which is always available, and other series-related (not point-related) tokens supported by the given series type.

For example, here the `"{%seriesName}"` and `"{%seriesYSum}"` tokens are used to configure the legend text of a multiple-series Line chart:

```
// enable html for the legend
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(
  "<span style='color:#455a64;font-weight:600'>{%seriesName}:</span> ${%seriesYSum}"
);
```

{sample}CS\_Legend\_Items\_02{sample}

Each legend item of a single-series chart type is linked to a chart point, so you can use tokens representing the values of the points. The exact set of the tokens available depends on the chart type.

In the following sample, the `"{%x}"`, `"{%value}"`, and `"{%percentValue}"` tokens are used to configure the legend text of a Pie chart:

```
// enable html for the legend
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(
  "<span style='color:#455a64;font-weight:600'>{%x}:</span> ${%value}"
);
```

{sample}CS\_Legend\_Items\_03{sample}

### Formatting Functions

Legend items of multiple-series charts represent series, so you can use formatting functions with the `series` field, allowing you to access the methods of the series.

In this sample, a formatting function is used to get the colors, names, and total values of Line series by accessing the {api:anychart.core.cartesian.series.Line#color}color(){api}, {api:anychart.core.cartesian.series.Line#name}name(){api}, and {api:anychart.charts.Cartesian#getStat}getStat(){api} methods:

```
// enable html for the legend
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(function() {
  return "<span style='color:" + this.series.color() + ";font-weight:600'>" +
         this.series.name() + "</span>: $" + this.series.getStat("sum");
});
```

{sample}CS\_Legend\_Items\_04{sample}

Legend items of single-series charts represent points, so you can use formatting functions with the point-related fields supported by the given chart type.

In the sample below, the `x` and `value`, and `index` fields are used to configure the legend of a Pie chart. The `index` field, which represents the index of the point, is combined with the {api:anychart.charts.Pie#getPoint}getPoint(){api} method of the chart to access the {api:anychart.core.PiePoint#getStat}getStat(){api} method of the point:

```
// enable html for the legend
chart.legend().useHtml(true);

// configure the format of legend items
chart.legend().itemsFormat(function() {
  var point = chart.getPoint(this.index);
  var percent = point.getStat("percentValue").toFixed(1);
  if (percent >= 50) {
    return "<span style='color:#455a64;font-weight:600'>" +
           this.x + ": " + percent + "%</span>";
  } else {
    return this.x + "</span>: " + percent + "%";
  }
});
```

{sample}CS\_Legend\_Items\_05{sample}

## Icons

Most settings of the legend icons, for example their colors and types, can be configured only individually for each icon – see the [Icons](Individual_Legend_Items#icons) and [Markers](Individual_Legend_Items#markers) sections of the [Individual Legend Items](Individual_Legend_Items) article.

The only setting that can affect all icons at once is the size.

### Size

To set the size of legend items, call the {api:anychart.core.ui.Legend#iconSize}iconSize(){api} method:

```
// set the size of legend icons
chart.legend().iconSize(20);
```

{sample}CS\_Legend\_Items\_06{sample}

## Spacing

You can set the spacing between legend items as well as between the icon and text of each item. Use the {api:anychart.core.ui.Legend#itemsSpacing}itemsSpacing(){api} and {api:anychart.core.ui.Legend#iconTextSpacing}iconTextSpacing(){api} methods:

```
// set the spacing between legend items
chart.legend().itemsSpacing(50);

// set the spacing between legend icons and text
chart.legend().iconTextSpacing(15);
```

{sample}CS\_Legend\_Items\_07{sample}

## Order

By default, the order of legend items represents the order in which series or points occur in data. You can invert the order with the help of the {api:anychart.core.ui.Legend#inverted}inverted(){api} method:

```
// set the order of legend items
chart.legend().inverted(true);
```

{sample}CS\_Legend\_Items\_08{sample}