# Stacked Bar/Column Charts

 * [Overview](#overview)
   * [Text](#text)
   * [Alternative Text](#alternative)
   * [URL](#link)
   * [Logo](#logo)
   * [Position](#position)

<a name="overview"/>
## Overview

Credits is a kind of watermark in any chart. It consists of a text, an alternative text (or a tooltip), URL and a picture and places at the right bottom corner of any chart. Any of four credits parts can be customized. To adjust credits you have to [buy a licence key](http://www.anychart.com/buy/)

<a name="text"/>
### Text

Text of a credits by can be changed by using **.text()** method. 

```
    chart.credits().text('Changed credits');
```
{sample}Credits\_01{sample}

<a name="alternative"/>
### Alternative Text

Alternative text or a Tooltip is a text user sees, while hovering credits. This tip can be adjusted with **.alt()** method.

```
    chart.credits().alt('Custom alternative text.');
```
{sample}Credits\_02{sample}

<a name="link"/>
### URL

Credits always has a URL. Buy default it's link to [AnyChart Site](http://www.anychart.com/), but as far as you have licence key, you may adjust it with **.url()** method.

```
    chart.credits().url('http://www.anychart.com/buy/');
```
{sample}Credits\_03{sample}

<a name="logo"/>
### Logo
Logo picture of the credits can be adjusted as well. Use **.logoScr()** method to set custom image

```
    chart.credits().logoSrc('http://static.anychart.com/github.png');
```
{sample}Credits\_04{sample}

<a name="logo"/>
### Position

Credits position can be adjusted only through css commands. There are three classes you can set properties to: **anychart-credits** for changing position of the whole credits, **anychart-credits-logo** for changing logo position and **anychart-credits-text** changing credits text position. 
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