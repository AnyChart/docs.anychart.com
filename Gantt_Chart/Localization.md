#Localization

* [Overview](#overview)
* [Applying automatic locale](#applying_automatic_locale)
* [Tuning locale](#tuning_locale)
* [Locales CDN](#locales_cdn)

##Overview

AnyChart Gantt charts support full localization of input and output date time and number formats using *locale* mechanism. Using locales is really easy and this article will tell you how. 

##Applying automatic locale

Referencing a file:

```
<script src="http://cdn.anychart.com/locale/1.0.0/english-(united-kingdom).js">
<script src="http://cdn.anychart.com/locale/1.0.0/english-(united-states).js">
```

and applying by name to {api:anychart.format#outputLocale}inputLocale{api} or {api:anychart.format#outputLocale}outputLocale{api}:

```
anychart.format.inputLocale('en-us');
anychart.format.outputLocale('hi-in');
```

And that's how it works:

{sample :width 825 :height 300 }GANTT\_Locale\_01{sample}

##Tuning locale

Locales define the default input and output date time format, but you can tune this using {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat{api} and {api:anychart.format#outputDateTimeFormat{api}: 

```
// set locales
anychart.format.inputLocale('en-us');
anychart.format.outputLocale('hi-in');

// tune inputDateTimeFormat and outputDateTimeFormat
anychart.format.inputDateTimeFormat('yyyy-MM-dd'); 
anychart.format.outputDateTimeFormat('dd MMM');
```

And that's how it will work:

{sample :width 825 :height 300 }GANTT\_Locale\_02{sample}

##Locales CDN

You can get all available locales from [AnyChart CDN](https://cdn.anychart.com/#locales). You can both download them to your server or reference directly from CDN.
