{:index 3}

# Sharing

## Overview

Sharing is a feature that allows to share a chart made with AnyChart component to your page in a social network like Facebook, Pinterest and else. This article describes the settings and methods necessary for sharing activation, adjusting and using.

There are two ways how to share a chart. First one is to use the context menu that provides four social networks for a chart sharing.

<a href="https://static.anychart.com/images/share.jpg" target="_blank"><img width="100%" src = "https://static.anychart.com/images/share.jpg"></a>

A pop-up window of the chosen social network will show up and suggest to write a comment (if you've been logged in) or to log in. The chart will be transformed into a *\.PNG* image.

Another way to share a chart in any social network is to use special sharing methods. There is a special sharing method for each network:
- {api:anychart.core.Chart#shareWithFacebook}shareWithFacebook(){api}
- {api:anychart.core.Chart#shareWithTwitter}shareWithTwitter(){api}
- {api:anychart.core.Chart#shareWithPinterest}shareWithPinterest(){api}
- {api:anychart.core.Chart#shareWithLinkedIn}shareWithLinkedIn(){api}

When sharing is done using the context menu, the sharing function uses default settings. The image of the chart will be shared with no link on the sample, and the hostname of the link will be the same as the picture name. All sharing methods described above have settings that can be adjusted.

## Facebook

Facebook sharing options:

<table>
<tr>
<td>caption</td>
<td>Caption is the name of the picture that is always shown. When not specified, the hostname of the link is used as the caption.</td>
</tr>
<tr>
<td>link</td>
<td>The link attached to the shared image.</td>
</tr>
<tr>
<td>name</td>
<td>The name of the link attached.</td>
</tr>
<tr>
<td>description</td>
<td>The description of the link.</td>
</tr>
</table>

```
// initiate sharing with Facebook
chart.shareWithFacebook("Sharing with Facebook sample", "anychart.com", "AnyChart Area Chart", "The sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_01{sample}

All parameters can be defined as an object. This is useful when only some of the parameters are set.

```
// initiate sharing with with Facebook
chart.shareWithFacebook({caption:"Sharing with Facebook sample", link: "anychart.com", name: "AnyChart Area Chart", description: "The sample of an Area Chart created with AnyChart"});
```

{sample}CS\_Sharing\_02{sample}

There is one more way to change the sharing settings. The {api:anychart.exports#facebook}anychart.exports.facebook(){api} method is used to set the defaults. Read more about this in the [Defaults](#defaults) section.

## Twitter

While sharing with Twitter there are no extra options to be adjusted:

```
// share the chart with Twitter
chart.shareWithTwitter();  
```

{sample}CS\_Sharing\_03{sample}

It is possible to change some default settings of export by using the {api:anychart.exports#twitter}anychart.exports.twitter(){api} method. Read more about this in the [Defaults](#defaults) section.

## LinkedIn

There are two options for the LinkedIn sharing:

<table>
<tr>
<td>caption</td>
<td>Caption is the picture name that is always shown. When not specified, the hostname of the link is used as the caption. If there is no caption, there is no "Edit" button and it is impossible to write the caption manually.</td>
</tr>
<tr>
<td>description</td>
<td>The description of the sample. If not specified, the default caption is used as the description.</td>
</tr>
</table>

```
// share the sample with LinkedIn
chart.shareWithLinkedIn("Sharing with LinkedIn", "This is a sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_04{sample}

LinkedIn sharing settings can be defined as an object:

```
// this method will share the sample with LinkedIn
chart.shareWithLinkedIn({caption: "Sharing with LinkedIn", description: "This is a sample of an Area Chart created with AnyChart"});
```

It is possible to change default settings of export to LinkedIn using the {api:anychart.exports#linkedin}anychart.exports.linkedin(){api} method. Read more about this in the [Defaults](#defaults) section.

## Pinterest

When sharing with Pinterest, it is possible to specify two settings:

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
// share the sample with Pinterest
chart.shareWithPinterest("http://pinterest.com", "This is a sample of an Area Chart created with AnyChart");
```

{sample}CS\_Sharing\_05{sample}

It is possible to adjust the Pinterest settings of an object:

```
// share the sample with Pinterest
chart.shareWithPinterest({link: "http://pinterest.com", description: "This is a sample of an Area Chart created with AnyChart"});
```

Use the {api:anychart.exports#pinterest}anychart.exports.pinterest(){api} method to adjust the export default settings. Read more about this in the [Defaults](#defaults) section.

## Defaults

The {api:anychart.exports}anychart.exports{api} methods are responsible for export settings. These methods allow to set sharing defaults. 

### Facebook

Use {api:anychart.exports#facebook}anychart.exports.facebook(){api} to set the following:

<table>
<tr>
<td>caption (or options, set as an object)</td>
<td>Caption is the picture name that is always shown. When not specified, the hostname of the link is taken as the caption.</td>
</tr>
<tr>
<td>link</td>
<td>The link attached to the shared image.</td>
</tr>
<tr>
<td>name</td>
<td>The name of the link attached.</td>
</tr>
<tr>
<td>description</td>
<td>The description of the image.</td>
</tr>
<tr>
<td>width</td>
<td>The width of the picture.</td>
</tr>
<tr>
<td>height</td>
<td>The height of the picture.</td>
</tr>
<tr>
<td>application ID (appId)</td>
<td>The ID of the application used to share.</td>
</tr>
</table>

If it is necessary, it is possible to change the sharing application. If you want to create your own sharing application, visit the [Facebook application creating page](https://developers.facebook.com/docs/apps/register) and create your own application. Then, copy the ID of your application and set it as default for the Facebook export method.

### Twitter

Use {api:anychart.exports#twitter}anychart.exports.twitter(){api} to set the following:

<table>
<tr>
<td>url</td>
<td>URL of the application used for sharing.</td>
</tr>
<tr>
<td>width</td>
<td>The width of the picture.</td>
</tr>
<tr>
<td>height</td>
<td>The height of the picture.</td>
</tr>
</table>

If it is necessary, it is possible to change the sharing application. If you want to create your own sharing application, visit the [Twitter application creating page](https://apps.twitter.com) and create your own application. Then, copy the URL of your application and set it as default for the "url" parameter of the exporting method.

### LinkedIn

Use {api:anychart.exports#linkedin}anychart.exports.linkedin(){api} to set the following:

<table>
<tr>
<td>caption</td>
<td>URL of the application used for sharing.</td>
</tr>
<tr>
<td>description</td>
<td>The description of the sample.</td>
</tr>
<tr>
<td>width</td>
<td>The width of the picture.</td>
</tr>
<tr>
<td>height</td>
<td>The height of the picture.</td>
</tr>
</table>

### Pinterest

Use {api:anychart.exports#pinterest}anychart.exports.pinterest(){api} to set the following:

<table>
<tr>
<td>link</td>
<td>The link attached.</td>
</tr>
<tr>
<td>description</td>
<td>The description of the image.</td>
</tr>
<tr>
<td>width</td>
<td>The width of the picture.</td>
</tr>
<tr>
<td>height</td>
<td>The height of the picture.</td>
</tr>
</table>

The following sample demonstrates setting defaults for all networks available at the moment. The defaults for sharing with Facebook are set as an object. Note that when the parameters are set as object, it is not necessary to set all of them.

```
// this method sets the Facebook export settings
anychart.exports.facebook({caption: "A sample shared with Facebook", link: "http://anychart.com", height: "600", appID: "1167712323282103"});

// this method sets the Twitter export settings
anychart.exports.twitter("https://export.anychart.com/sharing/twitter", "800", "600");

// this method sets the LinkedIn export settings
anychart.exports.linkedin("AnyChart Area Chart sample shared with LinkedIn", undefined, undefined, "400");

// this method sets the Pinterest export settings
anychart.exports.pinterest("https://www.anychart.com", undefined, "800", undefined);

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

{sample}CS\_Sharing\_06{sample}

## Sharing Buttons Sample

This sample shows how to share a chart using custom buttons. Explore it in the playground to see the code.

{sample}CS\_Sharing\_07{sample}