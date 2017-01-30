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

When sharing is done through the context menu, the sharing function uses default settings' values. The image of the chart will be shared with no link on the sample, and the hostname of the link will be displayed as the picture name. Though, all sharing methods described above have several settings which can be adjusted due to your special needs.

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
// this method will share the sample with Facebook
chart.shareWithFacebook("Sharing with Facebook sample", "anychart.com", "AnyChart Area Chart", "The sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_02{sample}

All parameters can be defined as objects:

```
// this method will share the sample with Facebook
chart.shareWithFacebook({caption:"Sharing with Facebook sample", link: "anychart.com", name: "AnyChart Area Chart", description: "The sample of an Area Chart created with AnyChart"});
```

{sample}CS\_Sharing\_03{sample}


### Twitter

While sharing with Twitter there are no extra options to be adjusted, as it is not supposed by the service. So, the only way to share the sample with Twitter is to share the picture with no parameters and links attached:

```
// share the chart with Facebook
shareButton.click(function(){
  chart.shareWithTwitter();  
});
```

{sample}CS\_Sharing\_04{sample}


### LinkedIn

There are only two options which can be defined extra for the LinkedIn:

 - caption 
Caption is the picture name that is always shown. When not specified, the hostname of the link is taken as the caption. If there is no caption, there would be no "Edit" button and it will be impossible to write the caption manually.
 - description
The description of the sample demonstrated. If not specified, the default caption will be used as the description.


```
// this method will share the sample with Facebook
chart.shareWithLinkedIn("Sharing with LinkedIn", "This is a sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_05{sample}

As well as with Facebook, sharing with LinkedIn can be done using objects.


### Pinterest

When sharing with Pinterest, it is possible to specify two settings also:

 - link
The link attached to the shared sample/image
 - description
The description of the sample

```
// this method will share the sample with Facebook
chart.shareWithLinkedIn("Sharing with LinkedIn", "This is a sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_06{sample}

It is also possible to set the values 

### 


Из контекстного меню вызывается без параметров.
Всем методам можно задавать параметры объектом

chart.shareWithFacebook({caption: 'Заголовок'});

