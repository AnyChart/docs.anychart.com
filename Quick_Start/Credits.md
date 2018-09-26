# Credits

## Overview

Credits is a single object shown as a watermark in the right bottom corner of any chart. It consists of four elements: text, tooltip (alt), URL and picture. If you want to customize any part of credits placed in your chart, you can purchase a license at [AnyChart Website](https://www.anychart.com/buy/).

### Text

Credits text can be changed by using {api:anychart.core.ui.ChartCredits#text}text(){api} method:

```
var credits = chart.credits();
credits.text("Company");
```

{sample}Credits\_01{sample}

### Tooltip

Tooltip is shown when a credits is hovered over. It can be adjusted with {api:anychart.core.ui.ChartCredits#alt}alt(){api} method.

```
var credits = chart.credits();
credits.alt("Custom tooltip");
```

{sample}Credits\_02{sample}

### URL

Credits acts as a link. By default it references to [AnyChart Site](https://www.anychart.com/). You can change it using {api:anychart.core.ui.ChartCredits#url}url(){api} method.

```
var credits = chart.credits();
credits.url("https://www.anychart.com/buy/");
```

{sample}Credits\_03{sample}

### Logo

Logo picture can be adjusted as well. Use {api:anychart.core.ui.ChartCredits#logoSrc}logoScr(){api} method to set custom image.

```
var credits = chart.credits();
credits.logoSrc("https://static.anychart.com/images/github.png");
```

{sample}Credits\_04{sample}

### Position

Credits position can be adjusted only through CSS. There are three classes you can set properties to: **anychart-credits** to change credits position, **anychart-credits-logo** to change logo position and **anychart-credits-text** to change credits text position. 

CSS code:

```
.anychart-credits{
  left: 10px !important;
  width: 200px !important;
}
.anychart-credits-logo{
  right: 10px;
  left: auto !important;
}
.anychart-credits-text{
  right: 25px;
  left: auto !important;
}
```

### Disabling

To disable credits just put this in your code, but remember: it will work only if you have a [license key](#license).

```
var credits = chart.credits();
credits.enabled(false);
```

### Dashboards

If you are creating dashboards using [Stage-based Dashboard Layout](../Dashboards/Stage-Based_Layout) you can configure credits for the stage instead of a chart using the same {api:anychart.graphics.vector.Stage#credits}credits(){api} method:

```
// create a stage 
var stage = anychart.graphics.create("container");
// configure stage credits
var credits = stage.credits();
credits.text("Dashboard");
```

### License

When you purchase a license to AnyChart you receive an access to your customer area and a license key. AnyChart trial is fully functional, but you are limited in the ways you can use trial version and you may not [remove credits](#disable) from the charts. To register your copy and enable credits removal put this in your code in the very beginning:

```
anychart.licenseKey("YOUR-LICENSE-KEY");
```

You can also use [Online Builder](Modules#builder) located at [AnyChart Download Page](https://www.anychart.com/download/products/#custom-build) to create custom AnyChart binary files with the license key built-in.

To purchase a license proceed to [Buy AnyChart](https://www.anychart.com/buy/) page.
