# Localization

##Overview

All AnyChart products support full localization of input and output date/time and number formats, based on the *locale* mechanism. This article describes how to use locales (which is quite easy).

All the methods you need are located on {api:anychart.format}anychart.format{api} namespace.

You can also see how locales work using our localization demo applications:

- [AnyChart Localization and Date-Time Formatting Demo Application](https://www.anychart.com/solutions/localization-demo/)

##Applying an Automatic Locale

AnyChart provides built-in locales covering most regions and cultures. To use an automatic locale, first link a file from [AnyChart CDN](https://cdn.anychart.com/) or download it to your server and link it from there.

Linking from CDN looks like this:

```
<script src="https://cdn.anychart.com/locale/2.0.1/en-gb.js"></script>
<script src="https://cdn.anychart.com/locale/2.0.1/en-us.js"></script>
```

Linking from your server may look like this:

```
<script src="./locales/en-gb.js"></script>
<script src="http://mydomain.com/anychart-locales/en-us.js"></script>
```

After the file is linked, AnyChart engine knows about it, and you can start applying the locale in your charts: just set the code of the locale using the {api:anychart.format#inputLocale}inputLocale(){api} or {api:anychart.format#outputLocale}outputLocale(){api} methods. Codes of locales are listed in the CODE column on [AnyChart CDN](https://cdn.anychart.com/).

Setting input and output locales looks like this:

```
anychart.format.inputLocale('en-us');
anychart.format.outputLocale('hi-in');
```

##Tuning a Locale

If you want to use custom input and output date/time formats, you can tune them via the {api:anychart.format#inputDateTimeFormat}inputDateTimeFormat(){api} and {api:anychart.format#outputDateTimeFormat}outputDateTimeFormat(){api} methods:

```
// set locales
anychart.format.inputLocale('en-us');
anychart.format.outputLocale('hi-in');

// tune inputDateTimeFormat and outputDateTimeFormat
anychart.format.inputDateTimeFormat('yyyy-MM-dd'); 
anychart.format.outputDateTimeFormat('dd MMM');
```

You can also tune any output in tooltips or labels formatters using {api:anychart.format#dateTime}dateTime(){api} and {api:anychart.format#number}number(){api} methods:

```
chart.xAxis().labels().format(function () {
    return anychart.format.dateTime(this.value, 'MMM', -8 * 60, locale);
});
chart.tooltip().titleFormat(function () {
    return anychart.format.dateTime(this.points[0].x, format, -8 * 60, locale);
});
```

##Locales in AnyChart CDN

You can get all available locales from [AnyChart CDN](https://cdn.anychart.com/) and either download them to your server or link directly from the CDN.
