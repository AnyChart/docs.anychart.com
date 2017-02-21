{:index 3}

Sharing
======================

* [Overview](#overview)
* [Facebook](#facebook)
* [Twitter](#twitter)
* [LinkedIn](#linkedin)
* [Pinterest](#pinterest)
* [Defaults](#defaults)
* [Sharing Buttons Sample](#sharing_buttons_sample)


## Overview

Sharing is a feature allowing to put an image imitating sample made with AnyChart component to your page in a social network like Facebook, Pinterest and else. This article describes the settings and methods necessary for sharing activation, adjusting and using.

There are two ways how to share a chart on any of the social networks. First one is to use the context menu, which provides four social networks for a chart sharing.

<a href="http://static.anychart.com/images/share.jpg" target="_blank"><img width = "700" src = "http://static.anychart.com/images/share.jpg"></a>

A pop-up window of the chosen social network will show up and suggest to write a comment (if you've been logged in) or to log in. The chart will be transformed into a *\.PNG image.

Another way to share a chart in any social network is to use special sharing methods. There is a special sharing method for each network. So, the {api:anychart.core.Chart#shareWithFacebook}shareWithFacebook(){api} method is being used for sharing a chart with Facebook. For sharing with Twitter use {api:anychart.core.Chart#shareWithTwitter}shareWithTwitter(){api}, with Pinterest - {api:anychart.core.Chart#shareWithPinterest}shareWithPinterest(){api}, with LinkedIn - {api:anychart.core.Chart#shareWithLinkedIn}shareWithLinkedIn(){api}.

When sharing is done through the context menu, the sharing function uses default settings' values. The image of the chart will be shared with no link on the sample, and the hostname of the link will be displayed as the picture name. Though, all sharing methods described above have several settings which can be adjusted due to your special needs.

## Facebook

The options which can be tuned for sharing with Facebook are the following:

<table>
<tr>
<td>caption</td>
<td>Caption is the picture name that is always shown. When not specified, the hostname of the link is taken as the caption</td>
</tr>
<tr>
<td>link</td>
<td>The link attached to the shared sample/image</td>
</tr>
<tr>
<td>name</td>
<td>The name of the link attached. Makes sense when the link is set</td>
</tr>
<tr>
<td>description</td>
<td>The description of the sample. Makes sense when the link is set</td>
</tr>
</table>

```
// this method will share the sample with Facebook
chart.shareWithFacebook("Sharing with Facebook sample", "anychart.com", "AnyChart Area Chart", "The sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_\_02{sample}

All parameters can be defined as an object. This may be useful when it is not necessary to set all parameters.

```
// this method will share the sample with Facebook
chart.shareWithFacebook({caption:"Sharing with Facebook sample", link: "anychart.com", name: "AnyChart Area Chart", description: "The sample of an Area Chart created with AnyChart"});
```

{sample}CS\_Sharing\_\_03{sample}

There is one more way to change the sharing settings. The {api:anychart.exports#facebook}anychart.exports.facebook(){api} method is used for setting the defaults. Read more about this in the [Defaults](#defaults) section.


## Twitter

While sharing with Twitter there are no extra options to be adjusted, as it is not supposed by the service. So, the only way to share the sample with Twitter is to share the picture with no parameters and links attached:

```
// share the chart with Twitter
chart.shareWithTwitter();  
```

{sample}CS\_Sharing\_\_04{sample}

It is possible to change some default settings of export by using the {api:anychart.exports#twitter}anychart.exports.twitter(){api} method. Read more about this in the [Defaults](#defaults) section.


## LinkedIn

There are only two options which can be defined extra for the LinkedIn:

<table>
<tr>
<td>caption</td>
<td>Caption is the picture name that is always shown. When not specified, the hostname of the link is taken as the caption. If there is no caption, there would be no "Edit" button and it will be impossible to write the caption manually.</td>
</tr>
<tr>
<td>description</td>
<td>The description of the sample demonstrated. If not specified, the default caption will be used as the description.</td>
</tr>
</table>

```
// this method will share the sample with Facebook
chart.shareWithLinkedIn("Sharing with LinkedIn", "This is a sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_\_05{sample}

As well as with Facebook, sharing with LinkedIn settings can be defined as an object:

```
// this method will share the sample with Facebook
chart.shareWithLinkedIn({caption: "Sharing with LinkedIn", description: "This is a sample of an Area Chart created with AnyChart"});
```

It is possible to change some default settings of export to LinkedIn by using the {api:anychart.exports#linkedin}anychart.exports.linkedin(){api} method. Read more about this in the [Defaults](#defaults) section.


## Pinterest

When sharing with Pinterest, it is possible to specify two settings also:

<table>
<tr>
<td>link</td>
<td>The link attached to the shared sample/image.</td>
</tr>
<tr>
<td>description</td>
<td>The description of the sample demonstrated.</td>
</tr>
</table>

```
// this method will share the sample with Pinterest
chart.shareWithPinterest("http://pinterest.com", "This is a sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_\_06{sample}

It is also possible to adjust the settings of an object:

```
// this method will share the sample with Pinterest
chart.shareWithPinterest({link: "http://pinterest.com", description: "This is a sample of an Area Chart created with AnyChart"});
```

Use the {api:anychart.exports#pinterest}anychart.exports.pinterest(){api} method to adjust the export default settings. Read more about this in the next section.

## Defaults

The anychart.export.* methods are responsible for export settings. Those methods usage is basically setting the defaults which can be set once for all sharing cases. The methods allow setting the defaults as parameters or as an object.

Use {api:anychart.exports#facebook}anychart.exports.facebook(){api} to set the following:

<table>
<tr>
<td>caption (or options, set as an object)</td>
<td>Caption is the picture name that is always shown. When not specified, the hostname of the link is taken as the caption</td>
</tr>
<tr>
<td>link</td>
<td>The link attached to the shared sample/image</td>
</tr>
<tr>
<td>name</td>
<td>The name of the link attached. Makes sense when the link is set</td>
</tr>
<tr>
<td>description</td>
<td>The description of the sample. Makes sense when the link is set</td>
</tr>
<tr>
<td>width</td>
<td>The width of the picture shared</td>
</tr>
<tr>
<td>height</td>
<td>The height of the picture shared</td>
</tr>
<tr>
<td>application ID (appId)</td>
<td>The ID of the application used for sharing</td>
</tr>
</table>

If it is necessary, it is possible to change the sharing application. If you want to create your own sharing application, visit the <a href="https://developers.facebook.com/docs/apps/register">Facebook application creating page</a> and create your own application. Then, copy the ID of your application and set it as default for the exporting method.

Use {api:anychart.exports#twitter}anychart.exports.twitter(){api} to set the following:

<table>
<tr>
<td>url</td>
<td>URL of the application used for sharing</td>
</tr>
<tr>
<td>width</td>
<td>The width of the picture shared</td>
</tr>
<tr>
<td>height</td>
<td>The height of the picture shared</td>
</tr>
</table>

If it is necessary, it is possible to change the sharing application. If you want to create your own sharing application, visit the <a href="https://apps.twitter.com">Twitter application creating page</a> and create your own application. Then, copy the URL of your newly-created application and set it as default for the "url" parameter of the exporting method.

Use {api:anychart.exports#linkedin}anychart.exports.linkedin(){api} to set the following:

<table>
<tr>
<td>caption</td>
<td>URL of the application used for sharing</td>
</tr>
<tr>
<td>description</td>
<td>The description of the sample</td>
</tr>
<tr>
<td>width</td>
<td>The width of the picture shared</td>
</tr>
<tr>
<td>height</td>
<td>The height of the picture shared</td>
</tr>
</table>

Use {api:anychart.exports#pinterest}anychart.exports.pinterest(){api} to set the following:

<table>
<tr>
<td>link</td>
<td>The link attached to the sample</td>
</tr>
<tr>
<td>description</td>
<td>The description of the sample</td>
</tr>
<tr>
<td>width</td>
<td>The width of the picture shared</td>
</tr>
<tr>
<td>height</td>
<td>The height of the picture shared</td>
</tr>
</table>

The following sample demonstrates setting defaults for all 4 networks available at the moment. The defaults for sharing with Facebook are set as an object. Note that when the parameters are set as object, it is not necessary to set all of them, following the order.

```
// this method defines the facebook export settings
anychart.exports.facebook({caption: "A sample shared with Facebook", link: "http://anychart.com", height: "600", appID: "1167712323282103"});

// this method defines the twitter export settings
anychart.exports.twitter("http://export.anychart.stg/sharing/twitter", "800", "600");

// this method defines the linkedin export settings
anychart.exports.linkedin("AnyChart Area Chart sample shared with LinkedIn", undefined, undefined, "400");

// this method defines the pinterest export settings
anychart.exports.pinterest("http://anychart.com", undefined, "800", undefined);

// attach click listener
    chart.listen("pointClick", function(e){
        switch (e.point.get("x")) {
          case "Facebook":
            chart.shareWithFacebook();
            break;
          case "Twitter":
            chart.shareWithTwitter();
            break;
          case "LinkedId":
            chart.shareWithLinkedIn();
            break;
          case "Pinterest":
            chart.shareWithPinterest();
            break;
        }
    });
```

{sample}CS\_Sharing\_\_07{sample}


## Sharing Buttons Sample

This sample demonstrates how to share a chart through creating custom buttons. Explore it in the playground to see the code.


{sample}CS\_Sharing\_\_08{sample}