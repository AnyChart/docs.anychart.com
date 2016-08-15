{:index 5}

#Localization

* [Overview](#overview)
* [Applying an Automatic Locale](#applying_an_automatic_locale)
* [Tuning a Date/Time Locale](#tuning_a_date_time_locale)
* [Locales in AnyChart CDN](#locales_in_anychart_cdn)

##Overview

All AnyChart products support full localization of input and output date/time and number formats, based on the *locale* mechanism. This article describes how to use locales (which is quite easy).

##Applying an Automatic Locale

AnyChart provides built-in locales covering most regions and cultures. To use an automatic locale, first link a file from [AnyChart CDN](https://cdn.anychart.com/#locales) or download it to your server and link from there.


Linking from CDN looks like this:

```
<script src="http://cdn.anychart.com/locale/1.0.0/english-(united-kingdom).js">
<script src="http://cdn.anychart.com/locale/1.0.0/english-(united-states).js">
```

Linking from your server may look like this:

```
<script src="./locales/english-(united-kingdom).js">
<script src="http://mydomain.com/anychart-locales/english-(united-states).js">
```

After the file is linked, AnyChart engine knows about it, and you can start applying the locale in your charts: just set the code of the locale using the {api:anychart.format#inputLocale}inputLocale(){api} or {api:anychart.format#outputLocale}outputLocale(){api} methods. Codes of locales are listed in the CODE column on [AnyChart CDN](https://cdn.anychart.com/#locales).

Setting input and output locales looks like this:

```
anychart.format.inputLocale('en-us');
anychart.format.outputLocale('hi-in');
```

AnyChart sample:

{sample}CMN\_Locale\_01{sample}

AnyStock sample:

{sample}CMN\_Locale\_02{sample}

In the sample Gantt chart below, the names of months in the timeline are displayed in Hindu, while the input format is English:

{sample :height 300}CMN\_Locale\_03{sample}

<a name='tuning_a_date_time_locale'></a>
##Tuning a Date/Time Locale

Locales define the default input and output date time formats...
If you want to use custom input and output date/time formats, you can tune them via the {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api} and {api:anychart.format#outputDateTimeFormat}outputDateTimeFormat(){api} methods: 

```
// set locales
anychart.format.inputLocale('en-us');
anychart.format.outputLocale('hi-in');

// tune inputDateTimeFormat and outputDateTimeFormat
anychart.format.inputDateTimeFormat('yyyy-MM-dd'); 
anychart.format.outputDateTimeFormat('dd MMM');
```

The following samples demonstrates how it works in AnyChart, AnyGantt, and AnyStock:

{sample}CMN\_Locale\_04{sample}

{sample}CMN\_Locale\_05{sample}

{sample :height 300}CMN\_Locale\_06{sample}

##Locales in AnyChart CDN
You can get all available locales from [AnyChart CDN](https://cdn.anychart.com/#locales) and either download them to your server or link directly from the CDN.
