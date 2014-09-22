# Stacked Bar/Column Charts

 * [Overview](#overview)
   * [Text](#text)
   * [Tooltip](#tooltip)
   * [URL](#url)
   * [Logo](#logo)
   * [Position](#position)
   * [Disable](#disable)
   * [License](#license)

## Overview

Credits is a watermark in the bottom right corner of any chart. It consists of four elements: text, tooltip (alt), URL and picture. By default credits are placed at the bottom right corner of any chart. Any part of credits can be customized if you have a license. You can purchase a license at [AnyChart Website](http://www.anychart.com/buy/)

### Text

Сredits text can be changed by using **.text()** method: 

```
    chart.credits().text('My Company');
```
{sample}Credits\_01{sample}

### Tooltip

Tooltip shown when when credits are hovered. It can be adjusted with **.alt()** method.

```
    chart.credits().alt('Custom tooltip');
```
{sample}Credits\_02{sample}

### URL

Credits act as a link. By default it is link to [AnyChart Site](http://www.anychart.com/). You can it with **.url()** method.

```
    chart.credits().url('http://www.anychart.com/buy/');
```
{sample}Credits\_03{sample}

### Logo
Logo picture can be adjusted as well. Use **.logoScr()** method to set custom image

```
    chart.credits().logoSrc('http://static.anychart.com/github.png');
```
{sample}Credits\_04{sample}

### Position

Credits position can be adjusted only through CSS. There are three classes you can set properties to: **anychart-credits** to change credits position, **anychart-credits-logo** to change logo position and **anychart-credits-text** to change credits text position. 
<br/><br/>
CSS code:
```
    .anychart-credits {
        left: 10px !important;
        width: 200px !important;
    }
    .anychart-credits-logo {
        right: 10px;
        left: auto !important;
    }
    .anychart-credits-text{
        right: 25px;
        left: auto !important;
    }
```

### Disable

To disable credits just put this in your code, but remember: it will work only if you have a [license key](#license).
```
    chart.credits().enabled(false);
```

### License

When you purchase a license to AnyChart 7 you receive an access to your customer area and a license key. AnyChart trial is fully functional, but your are limited in the ways you can use trial version and you can not [remove credits](#disable) from the charts. To register your copy and enable credits removal put this in your code in the very beginning:
```
    anychart.licenseKey('YOUR-LICENSE-KEY');
```
To purchase a license proceed to [Buy AnyChart](http://www.anychart.com/buy/) page.
