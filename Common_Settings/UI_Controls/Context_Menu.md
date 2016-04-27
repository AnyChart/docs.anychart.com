#Context Menu

* [Overview](#overview)

## Overview 

A context menu (also called contextual, shortcut, and popup or pop-up menu) is a menu in a graphical user interface (GUI) that appears upon user interaction, such as a right-click mouse operation. A context menu offers a limited set of choices that are available in the current state, or context, of the operating system or application. Usually the available choices are actions related to the selected object. From a technical point of view, such a context menu is a graphical control element.

## Enable

To enable AnyChart Context Menu feature you need to reference the css file in the `<head>` section of your web page.
 
```
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="//cdn.anychart.com/css/latest/anychart-ui.css">
</head>
```

Here is a sample with enabled context menu: 

{sample}CS\_ContextMenu\_01{sample}

## Disable

The Context Menu is enabled by default and if you have no need in the menu you can disable it using {api:anychart.ui.ContextMenu#enabled}.enabled(){api} method:

```
  var chart = anychart.column();
  var menu = chart.contextMenu();
  menu.enabled(false);
```

*Note:* there is even more simple way to disable context menu: pass *false* to the {api:anychart.core.Chart#contextMenu}.contextMenu(){api} method.

{sample}CS\_ContextMenu\_02{sample}

## Change Standard Element

The context menu consist of the following elements:

* Save chart as
* Save data as
* Print 
* AnyChart vX.XX.X

You can change any item in the context menu using {api:anychart.ui.ContextMenu#itemsFormatter}.itemsFormatter(){api} method. This method uses function as a parameter:

```
  var chart = anychart.column();
  var menu = chart.contextMenu();
  menu.itemsFormatter(function(items){
    /*custom code*/
  });
```

In the snippet above the parameter `items` can be used to obtain the context menu items array. 
