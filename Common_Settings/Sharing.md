{:index 3}

Sharing
======================

* [Overview](#overview)
* [Methods](#methods)
* [Adjusting](#adjusting)
 * [Facebook](#facebook)
 * [Twitter](#twitter)
 * [LinkedIn](#linkedin)
 * [Pinterest](#pinterest)


## Overview

Sharing is a feature allowing to put an image imitating sample made with AnyChart component to your page in a social network like Facebook, Pinterest and else. This article describes the settings and methods necessary for sharing activation, adjusting and using.

## Methods

There are two ways how to share a chart on any of the social networks. First one is to use the context menu, which provides four social networks for a chart sharing.

<a href="http://static.anychart.com/images/context_menu_example.png" target="_blank"><img width = "700" src = "http://static.anychart.com/images/context_menu_example.png"></a>

A pop-up window of the chosen social network will show up and suggest to write a comment (if you've been logged in) or to log in. The chart will be transformed into a *\.PNG image.

Another way to share a chart in any social network is to use special sharing methods. There is a special sharing method for each network. So, the {api:anychart.core.Chart.prototype.shareWithFacebook}.shareWithFacebook(){api} method is being used for sharing a chart with Facebook. Let's share a simple Area Chart:

```
// share the chart with Facebook
shareButton.click(function(){
  chart.shareWithFacebook();  
});
```

{sample}CS\_Sharing\_01{sample}

Explore the sample in the playground to see the code.

For sharing with Twitter use {api:anychart.core.Chart.prototype.shareWithTwitter}shareWithTwitter(){api}, with Pinterest - {api:anychart.core.Chart.prototype.shareWithPinterest}shareWithPinterest(){api}, with LinkedIn - {api:anychart.core.Chart.prototype.shareWithLinkedIn}shareWithLinkedIn(){api}.


## Adjusting

When sharing is done through the context menu, the sharing function uses default setting values. The image of the chart will be shared with no link on the sample, and the hostname of the link will be displayed as the picture name. Though, all sharing methods described above have several settings which can be adjusted due to your special needs.

### Facebook

The options which can be tuned for sharing with Facebook are the following:

 - caption
Caption is the picture name that is always shown. When not specified, the hostname of the link is taken as the caption.
 - link
The link attached to the shared sample/image
 - name
The name of the link attached. Makes sense when the link is set.
 - description
 The description of the sample. Makes sense when the link is set.


```
  // this method will print your chart
  chart.shareWithFacebook("Link", "anychart.com", "AnyChart Area Chart", "The sample of an Area Chart created with AnyChart");
```


{sample}CS\_Sharing\_02{sample}


anychart.core.Chart.prototype.shareWithLinkedIn(opt_captionOrOptions, opt_description)

caption - если не задан, то будет 'AnyChart'. Значение по умолчанию задано потому что если не будет никакого заголовка, то в окне диалога не будет кнопки "Редактировать", и не получится написать ничего другого вручную.
description - если не задано, будет использоваться caption

Из контекстного меню вызывается без параметров.
anychart.core.Chart.prototype.shareWithPinterest = function(opt_linkOrOptions, opt_description)

link - прикреплённая ссылка
description - текстовое описание

Из контекстного меню вызывается без параметров.
Всем методам можно задавать параметры объектом

chart.shareWithFacebook({caption: 'Заголовок'});

