# Context Menu

## Overview 

A context menu (also called contextual, shortcut, and popup or pop-up menu) is a menu in a graphical user interface (GUI) that appears upon user interaction, such as a right-click mouse operation. A context menu offers a limited set of choices that are available in the current state, or context, of the operating system or application. Usually the available choices are actions related to the selected object. From a technical point of view, such a context menu is a graphical control element.

## Enable

To enable AnyChart Context Menu feature you need to reference the css file in the `<head>` section of your web page.
 
```
<head>
    <script src="https://cdn.anychart.com/js/{{branch-name}}/anychart.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://cdn.anychart.com/css/{{branch-name}}/anychart-ui.css">
</head>
```

Here is a sample with enabled context menu: 

{sample}CS\_ContextMenu\_01{sample}

## Disable

The Context Menu is enabled by default and if you have no need in the menu you can disable it using {api:anychart.ui.ContextMenu#enabled}enabled(){api} method:

```
var chart = anychart.column();
var menu = chart.contextMenu();
menu.enabled(false);
```

**Note:** there is even more simple way to disable context menu: pass *false* to the {api:anychart.core.Chart#contextMenu}contextMenu(){api} method:

```
var chart = anychart.column();
chart.contextMenu(false);
```

{sample}CS\_ContextMenu\_02{sample}

## Change Standard Element

The default context menu in all charts consists of the following elements:

* [Save chart as](../Exports#image)
* [Save data as](../Exports#data)
* [Share with](../Sharing)
* [Print](../Printing)
* AnyChart vX.XX.X

**Note**: the list of the elements above may vary in different types of charts. For instance: Context Menu of a cartesian chart contains "Include/Exclude" functionality, Treemap charts provide "Drill up" option when available.
  
You can change any item in the context menu using {api:anychart.ui.ContextMenu#itemsFormatter}itemsFormatter(){api} method. This method uses function as a parameter:

```
var chart = anychart.column();
var menu = chart.contextMenu();
menu.itemsFormatter(function(items){
  /*custom code*/
});
```

In the snippet above the parameter `items` can be used to obtain the context menu items array.  

### Adjust Text

In the next sample let's change the text of the "Include" item the "Hidden". Here is the snippet for this:

```
var chart = anychart.column();
var menu = chart.contextMenu();
menu.itemsFormatter(function(items){
  for(var i=0; i < items.length; i++)
    if (items[i]!==null)
      if(items[i].text == "Include") items[i].text = "- INCLUDE -";
  return items;
});
```

**Note**: as you can see, the way of text adjustment is a bit tricky. The differences in context menu for selected and unselected point requires to omit changing elements using index of the menu's item. The sample with adjusted items text can be found [below](#sample).
  
### Hide Element

JavaScript provides variety of methods for working with arrays. [These methods](//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) can be used for manipulating Context Menu items in any way you want. For instance, you can use method [**pop()**](//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) to exclude last item of the Context Menu:

```
var chart = anychart.column();
var menu = chart.contextMenu();
menu.itemsFormatter(function(items){
  items.pop();
  items.pop();
  return items;
});
```

**Note**: as far as items separator is an element of items' array excluding separator along with the last element of the Context Menu makes it more sensible.  
  
Here is a sample with adjusted text of the default item and hidden last item:

<a name="sample"></a>
{sample}CS\_ContextMenu\_03{sample}

## Custom Context Menu

The Context Menu is very flexible it may serve a variety of purposes and in some cases it makes much more seance to create a whole new Context Menu rather than tuning default one. Use {api:anychart.ui.ContextMenu}anychart.ui.contextMenu(){api} to create custom Context Menu:

```
var chart = anychart.column();

// hide default menu
chart.contextMenu(false);

// create custom context menu
var menu = anychart.ui.contextMenu();
```

AnyChart charting library doesn't limit the number of charts on a single plot, that is why it is required to define the target for the custom Context Menu:
 
```
menu.attach(chart);
```

The custom menu has no items by default. Use {api:anychart.ui.ContextMenu#itemsProvider}itemsProvider(){api} method to set a function for creating custom items array:

```
menu.itemsProvider(function(){
  var data = chart.data();
  var slices = [];
  for (var i=0;i < data.getRowsCount();i++)
    slices.push({text: data.get(i, "name"), action: function(){
      var slice = data.find("name", this.item.text);
      chart.explodeSlice(slice, !chart.getPoint(slice).selected());
    }});
  return [
    {
      text: "Explode All",
      action: function(){
        chart.explodeSlices(true)
      }
    },
    {
      text: "Explode None",
      action: function(){
        chart.explodeSlices(false);
      }
    },
    {
      text: "Slices",
      subMenu: slices
    }
  ];
});
```

Here is a sample of a custom context menu:

{sample}CS\_ContextMenu\_04{sample}

## Change the Look

If you want to tune the visual appearance of the Context Menu you can define desirable appearance in you css file for custom css class and add the class name to the menu using {api:anychart.ui.ContextMenu#addClassName}addClassName(){api} method.

## Context

Context Menu passes context (additional information) into the formatting function depending on clicked chart's point. The information on context can be found in {api:anychart.ui.ContextMenu.PrepareItemsContext}api{api}. It helps to make the Context Menu more flexible and provides additional functionality for your menu.
