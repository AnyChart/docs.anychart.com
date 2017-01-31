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
* [Export settings](#export_settings)
 * [Facebook](#facebook)
 * [Twitter](#twitter)
 * [LinkedIn](#linkedin)
 * [Pinterest](#pinterest)


## Overview

Sharing is a feature allowing to put an image imitating sample made with AnyChart component to your page in a social network like Facebook, Pinterest and else. This article describes the settings and methods necessary for sharing activation, adjusting and using.

## Methods

There are two ways how to share a chart on any of the social networks. First one is to use the context menu, which provides four social networks for a chart sharing.

<a href="http://static.anychart.com/images/context\_menu\_example.png" target="_blank"><img width = "700" src = "http://static.anychart.com/images/context\_menu\_example.png"></a>

A pop-up window of the chosen social network will show up and suggest to write a comment (if you've been logged in) or to log in. The chart will be transformed into a *\.PNG image.

Another way to share a chart in any social network is to use special sharing methods. There is a special sharing method for each network. So, the {api:anychart.core.Chart#shareWithFacebook}.shareWithFacebook(){api} method is being used for sharing a chart with Facebook. Let's share a simple Area Chart:

```
// share the chart with Facebook
shareButton.click(function(){
  chart.shareWithFacebook();  
});
```

{sample}CS\_Sharing\_01{sample}

Explore the sample in the playground to see the code.

For sharing with Twitter use {api:anychart.core.Chart#shareWithTwitter}shareWithTwitter(){api}, with Pinterest - {api:anychart.core.Chart#shareWithPinterest}shareWithPinterest(){api}, with LinkedIn - {api:anychart.core.Chart#shareWithLinkedIn}shareWithLinkedIn(){api}.


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

All parameters can be defined as an object. This may be useful when it is not necessary to set all parameters.

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

As well as with Facebook, sharing with LinkedIn settings can be defined as an object.


### Pinterest

When sharing with Pinterest, it is possible to specify two settings also:

 - link
The link attached to the shared sample/image
 - description
The description of the sample

```
// this method will share the sample with Pinterest
chart.shareWithPinterest("Sharing with Pinterest", "This is a sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_06{sample}

It is also possible to adjust the settings of an object.



## Export settings

There are several methods responsible for export settings. Those methods usage allows not to define the parameters of the sharing methods and to define some parameters more. It is also possible to set them as an object.

### Facebook

Use {api:anychart.exports#facebook}anychart.exports.facebook(){api} to set the following:

 - caption (or options, set as an object)
 
 - link

 - name

 - description

 - width

 - height 

 - application ID (appId)

 Note that when the parameters are set as object, it is not necessary to set all of them and follow the order.
```
// this method defines the export settings
anychart.exports.facebook("A sample shared with Facebook", "http://anychart.com", undefined, undefined, undefined, "600", "1167712323282103");

// this method will share the sample with Facebook
chart.shareWithFacebook();
```

{sample}CS\_Sharing\_07{sample}

The same result can be gained the following way:

```
// this method defines the export settings
anychart.exports.facebook({caption: "A sample shared with Facebook", link: "http://anychart.com", height: "600", appId: "1167712323282103");
```

{sample}CS\_Sharing\_08{sample}


### Twitter

Use {api:anychart.exports#twitter}anychart.exports.twitter(){api} to set the following:

 - url of the sharing application
 
 - width of the shared picture

 - height of the shared picture

```
// this method defines the export settings
anychart.exports.twitter("http://export.anychart.stg/sharing/twitter", "800", "600");

// this method will share the sample with Twitter
chart.shareWithTwitter();
```

{sample}CS\_Sharing\_09{sample}


Is is also possible to set the parameters as an object:

```
// this method defines the export settings
anychart.exports.twitter({url: "http://export.anychart.stg/sharing/twitter", width: "800", height: "600"});
```


### LinkedIn

Use {api:anychart.exports#linkedin}anychart.exports.linkedin(){api} to set the following:

 - caption of the sample

 - description of the sample
 
 - width of the shared picture

 - height of the shared picture

```
// this method defines the export settings
anychart.exports.linkedin("AnyChart Area Chart sample shared with LinkedIn", undefined, undefined, "400");

// this method will share the sample with LinkedIn
chart.shareWithLinkedIn();
```

{sample}CS\_Sharing\_10{sample}


Is is also possible to set the parameters as an object:

```
// this method defines the export settings
anychart.exports.linkedin({caption: "AnyChart Area Chart sample shared with LinkedIn", height: "400"});
```

### Pinterest

Use {api:anychart.exports#pinterest}anychart.exports.pinterest(){api} to set the following:

 - link attached

 - description of the sample
 
 - width of the shared picture

 - height of the shared picture

```
// this method defines the export settings
anychart.exports.pinterest("http://anychart.com", undefined, "800", undefined);

// this method will share the sample with Pinterest
chart.shareWithPinterest();
```

{sample}CS\_Sharing\_11{sample}


Is is also possible to set the parameters as an object:

```
// this method defines the export settings
anychart.exports.pinterest({link: "http://anychart.com", width: "800"});
```

