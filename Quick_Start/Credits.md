# Credits

 * [Overview](#overview)
   * [Text](#text)
   * [Tooltip](#tooltip)
   * [URL](#url)
   * [Logo](#logo)
   * [Position](#position)
   * [Disable](#disable)
   * [License](#license)

## Overview

Credits are a part of any chart. Credits consist of a text, an alternative text (or a tooltip), URL and a picture, it is placed at the right bottom corner of any chart. Any part of credit can be customized. To adjust credits you have to [buy a license](http://www.anychart.com/buy/).

### Text

Сredits text can be changed by using **.text()** method: 

```
    chart.credits().text('My Company');
```
{sample}Credits\_01{sample}

### Tooltip

Alternative text (tooltip) is a text user sees while hovering credits. It can be adjusted using **.alt()** method.

```
    chart.credits().alt('My company tooltip.');
```
{sample}Credits\_02{sample}

### URL

Credits always have a URL. Buy default it is the link to [AnyChart Site](http://www.anychart.com/), but as if you have a licence key, you can change using **.url()** method.

```
    chart.credits().url('http://www.anychart.com/buy/');
```
{sample}Credits\_03{sample}

### Logo
Logo picture can be adjusted as well. Use **.logoScr()** method to set the custom image:

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
