#Localization

* [Overview](#overview)
* [Applying automatic locale](#applying_automatic_locale)
* [Tuning date locale](#tuning_locale)
* [Locales CDN](#locales_cdn)

##Overview

AnyChart Gantt charts support full localization of input and output date time and number formats using *locale* mechanism. Using locales is really easy and this article will tell you how. 

##Applying automatic locale

You can use locales created by AnyChart for the most regions and cultures, do that, first link a file from [AnyChart CDN](https://cdn.anychart.com/#locales) or download it on your server and link from there.

Linking from CDN looks like this:

```
<script src="https://cdn.anychart.com/locale/1.0.0/english-(united-kingdom).js">
<script src="https://cdn.anychart.com/locale/1.0.0/english-(united-states).js">
```

Linking from your server may look like this:

```
<script src="./locales/english-(united-kingdom).js">
<script src="http://mydomain.com/anychart-locales/english-(united-states).js">
```

After you linked the file AnyChart engine knows about it and you can start using it in your AnyGantt charts, just set the code of the locale in either {api:anychart.format#outputLocale}inputLocale{api} or {api:anychart.format#outputLocale}outputLocale{api}. The code of the locale is listed in the CODE column on [AnyChart Locales CDN](https://cdn.anychart.com/#locales). 

Setting input and output locale looks like this:

```
anychart.format.inputLocale('en-us');
anychart.format.outputLocale('hi-in');
```

And that's how it works, you can see that names of the month in the timeline changed to Hindu:

{sample :width 825 :height 300 }GANTT\_Locale\_01{sample}

##Tuning locale

Locales define the default input and output date time format, but you can tune this using {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat{api} and {api:anychart.format#outputDateTimeFormat{api} if you want to use input or output format alternative to the locale: 

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
