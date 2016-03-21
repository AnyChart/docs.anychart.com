{:index 1}
# TreeMap Chart

* [Overview](#overview)
* [Data](#data)
  * [Hierarchical](#hierarchical)
  * [Table](#table)
  * [MaxDepth](#MaxDepth)
* [Point elements](#point_elements)
  * [Header](#header)
  * [Content](#content)
  * [Markers](#markers)
* [Interactivity](#interactivity)
  * [Drilldown and Drillup](#drilldown_and_drillup)
  * [Select](#select)
* [Visualization](#visualization)
  * [Labels](#labels)
  * [Tooltip](#tooltip)
  * [HintDepth](#hintdepth)
  * [HintOpacity](#hintopacity)

## Overview

TreeMap is intended to demonstrate some hierarchically ordered data structures, where all elements have a parent element, except for the root (the highest/eldest element in the hierarchy). So, a chart is a tree designed as a rectangle divided by elements. In the top rectangle (by default) there is a parent element displayed. Child elements look like rectangles of relative dimensions which depends on the values these element represent. If one of those elements appears to be a parent element too, it will be shown in the header of the rectangular table and its children will be demonstrated below. This diagram is an upgraded version of the Marimekko chart.
  
## Data

Working with data in AnyChart TreeMaps is quite simple. As TreeMap in intended to work with hierarchies, you should set the data in one of two available formats: as a hierarhical data (default) and as table data.

Regardless which way we decide to use, there are some parameters we have to define to all points. There's a list of them:
 - "id": a unique parameter that identifies the point. This parameter is neessary for the tree leaves, or nodes;
 - "value": numerical value which defines the point's color (colors are distributed by the color scale by default unless some points have specially defined colors). If this parameter is not set, this point will be valued as missing and won't be displayed;
 - "size": numerical parameter which defines the point's size; unless being defined, size will be generated on the "value" parameter basis;
 - "name": the point's name
 - "parent": this parameter in necessary for all leaves (nodes) of the tree, except for the root; if you have several points with no parent, the first one will be considered by a tree as a root points, and the other will be ignored.

 Let's now consider both ways of arranging the data.

### Hierarchical

This way of arranging the data is expected by a TreeMap as a default way, as the data to be shown by the Treemap should demonstrate some hierarchy.

```
  //Data set through tree method
  var rawData = [
         {
         name: 'Eurasia',
	         children: [
	         {
	         name: 'Asia',
		         children: [
		         {
		         name: 'Asia 1',
			         children: [
			         {name: 'Asia 11', value: 20},
			         {name: 'Asia 12', value: 30}
			         ]
		         },
		         {
		         name: 'Asia 2',
		         value: 60,
			         children: [
			         {name: 'Asia 21', value: 50},
			         {name: 'Asia 22', value: 50},
			         {name: 'Asia 23', value: 50}
			         ]
		         },
		         {
		         name: 'Asia 3',
		         value: 70,
			         children: [
			         {name: 'Asia 31', value: 35},
			         {name: 'Asia 32', value: 70},
			         {name: 'Asia 33', value: 105},
			         {name: 'Asia 34', value: 140}
			         ]
		         }
		         ]
	         },
	         {
	         name: 'Europe',
		         children: [
		         {name: 'Europe 1', value: 300},
		         {name: 'Europe 2', value: 400}
		         ]
	         }
	         ]
         }
         ];
        var data = anychart.data.tree(rawData, anychart.enums.TreeFillingMethod.AS_TREE);

```

Here is a sample with the result of proceeding data from the code above.

{sample}BCT\_TreeMap\_01{sample}

You can find more about using Data Tree Model [here](../Working_with_Data/Using_Data_Tree_Model.md).

### Table

This way is also available for using while setting the data for the AnyChart TreeMap Chart. 

```
  //Data set through table method
  var data = anychart.data.tree([
         {id: 'Eurasia', parent: null},

         {id: 'Asia', parent: 'Eurasia'},

         {id: 'Asia 1', parent: 'Asia'},
         {id: 'Asia 11', parent: 'Asia 1', value: 20},
         {id: 'Asia 12', parent: 'Asia 1', value: 30},

         {id: 'Asia 2', parent: 'Asia'},

         {id: 'Asia 21', parent: 'Asia 2', value: 50},
         {id: 'Asia 22', parent: 'Asia 2', value: 50},
         {id: 'Asia 23', parent: 'Asia 2', value: 50},

         {id: 'Asia 3', parent: 'Asia'},

         {id: 'Asia 31', parent: 'Asia 3', value: 35},
         {id: 'Asia 32', parent: 'Asia 3', value: 70},
         {id: 'Asia 33', parent: 'Asia 3', value: 105},
         {id: 'Asia 34', parent: 'Asia 3', value: 140},

         {id: 'Europe', parent: 'Eurasia'},
         {id: 'Europe 1', parent: 'Europe'},
         {id: 'Europe 2', parent: 'Europe', value: 400},

         {id: 'Europe 11', parent: 'Europe 1', value: 300},
         {id: 'Europe 12', parent: 'Europe 1', value: 400},
         {id: 'Europe 13', parent: 'Europe 1', value: 100},
         ],
    anychart.enums.TreeFillingMethod.AS_TABLE // data type settings
    );

        chart = anychart.treeMap(data);
```


After setting the data we sholud set the method of its mapping to make it clear for the component how to treat the data. You can see how it's done above or you can define the data type settings after settin the data itself:

```
	var rawData = [
        {
        name: 'Eurasia',
        children: [
	        {
	        name: 'Asia',
		        children: [
		        {
		        name: 'Asia 1',
			        children: [
			        {name: 'Asia 11', value: 20},
			        {name: 'Asia 12', value: 30}
			        ]
		        }
		        ]
	        },
	        {
	        name: 'Europe',
		        children: [
		        {name: 'Europe 1', value: 300},
		        {name: 'Europe 2', value: 400}
		        ]
	        }
        ]
        }
        ];
	var data = anychart.data.tree(rawData, anychart.enums.TreeFillingMethod.AS_TABLE);
```

{sample}BCT\_TreeMap\_02{sample}

You can notice that samples don't differ a thing despite their data is defined differently. The way of setting the data you chose depends only on your preferences.

### MaxDepth 

Our TreeMaps have a MaxDepth feature. You can define how many levels do you want to be shown simultaneously in one chart. It means that it's possible to show as many levels of hierarchy as you need. Use {api}**.maxDepth()**{api} method with a number of levels you want to see as an argument. Note that the more levels you show the less understandable your TreeMap might become (depends on the levels' number and values they represent). Let's set this parameter to 3 for the next sample:

```
	// setting the maximum levels depth
        chart.maxDepth(3);
```

That's how the chart looks with the maxDepth property value set more than 1. There are two extra settings that help managing this feature, {api}**.hintOpacity**{api} and {api}**.hintDepth**{api}, which will be described later in the article.

{sample}BCT\_TreeMap\_03{sample}


## Point elements

Points in TreeMap Charts are not typical, they look like rectangles which represent some content. So, a point of a TreeMap should have a name (or a header) and some content.

### Header

Header is a name of a root of the current level. Due to its settings, they all can be enabled, disabled or set individually through the data. To set some parameters or format the header we use the {api}**.headers()**{api} method. We can change the font and background settings, format the demonstrated value and define hovering settings using the {api}**.hoverHeaders()**{api} method. Let's look at the example below. We've changed some font and hovering settings of the demonstrated headers.

```
	// headers settings
        chart.headers().fontColor("red");
        chart.headers().fontSize(14);
        chart.headers().fontWeight('bold');
        chart.hoverHeaders().fontColor("purple");
        chart.headers().textFormatter(function() {
            return this.getDataValue('name');
        });
```
{sample}BCT\_TreeMap\_04{sample}

Let's set some headers through the data and disable one of them:

```
	var rawData = [
         {
         name: 'Eurasia',
         children: [
         {
         name: 'Asia',
         header: null,
         children: [
         {
         name: 'Asia 1',
         header: {text: 'ASIA 1 NEW HEADER'},
         children: [
         {name: 'Asia 11', value: 20},
         {name: 'Asia 12', value: 30}
         ]
         },
         {
         name: 'Asia 2',
         value: 60,
         header: {textFormatter: function() {return 'ASIA 2 NEW HEADER'}},
         children: [
         {name: 'Asia 21', value: 50},
         {name: 'Asia 22', value: 50},
         {name: 'Asia 23', value: 50}
         ]
         },
         {
         name: 'Asia 3',
         value: 70,
         header: {text: 'ASIA 3 NEW HEADER'},
         children: [
         {name: 'Asia 31', value: 35},
         {name: 'Asia 32', value: 70},
         {name: 'Asia 33', value: 105},
         {name: 'Asia 34', value: 140}
         ]
         }
         ]
         },
         {
         name: 'Europe',
         header: null,
         children: [
         {name: 'Europe 1', value: 300},
         {name: 'Europe 2', value: 400}
         ]
         }
         ]
         }
         ];
```
{sample}BCT\_TreeMap\_05{sample}

We can see that three headers have changed and two headers that represent Asia and Europe parts have disappeared.


### Content

Content points are all points besides root ones. We can also edit the them almost the same as we would edit Column Chart points appearance. Additionally, TreeMap Chart points have an opacity property, which we can set using {api}**.hintOpacity**{api} method. Let's adjust our content points and change their background colors and opacity.

```

```
{sample}BCT\_TreeMap\_06{sample}


### Markers

You can notice that there are markers shown on a point when you hover it. Markers in the TreeMap charts are quite usual: we use {api}**.markers()**{api}, {api}**.hoverMarkers()**{api} and {api}**.selectMarkers()**{api} for adjusting markers in different chart states. Let's now edit the hovering settings of our TreeMap: create markers of bubble type which will be displayed only on those hovered points that have children elements. Those conditions can be complied if defined through [events](../Common_Settings/Event_Listeners.md).

```

```

{sample}BCT\_TreeMap\_07{sample}



## Interactivity

You might have already noticed that our TreeMap point reaction is quite interacive. "Blocks" or elements are being drilled down and up, hovered and selected. In this part we will describe working with TreeMap interactivity.

### Drilldown and Drillup

The main feature and purpose of TreeMap Charts is demonstrating the hierarchy of some subjects, processes or anything else. Drilldown feature therefore becomes the most important interactive feature for this chart type. 

When you left-click at the leaf which is a parent itself, a drill down will be performed for this element and you will see the next level of the tree where the selected element is a root.

Left click на none leaf point content (content - все кроме хедера)
Left click on none root header, такой хедер можно увидеть только при при наличии минимум 3х уровней в данных и настройке maxDepth больше единицы.
Right click на none leaf point content --> context menu --> drill down

### Select