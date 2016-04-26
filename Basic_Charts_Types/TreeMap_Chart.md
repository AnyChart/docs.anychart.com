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
  * [Drill Down and Drill Up](#drill_down_and_drill_up)
  * [Select](#select)
* [Visualization](#visualization)
  * [Labels](#labels)
  * [Tooltip](#tooltip)
  * [HintDepth](#hintdepth)
  * [HintOpacity](#hintopacity)

## Overview

TreeMap is intended to demonstrate some hierarchically ordered data structures, where all elements have a parent element, except for the root (the highest/eldest element in the hierarchy). So, a chart is a tree designed as a rectangle divided by elements. In the top rectangle (by default) there is a parent element displayed. Child elements look like rectangles of relative dimensions which depends on the values these element represent. If one of those elements appears to be a parent element too, it will be shown in the header of the rectangular table and its children will be demonstrated below. This diagram is an upgraded version of the Marimekko chart.
  
## Data

Working with data in AnyChart TreeMaps is quite simple. As TreeMap in intended to work with hierarchies, you should set the data in one of two available formats: as a hierarchical data (default) and as table data.

Regardless which way we decide to use, there are some parameters we have to define to all points. There's a list of them:
 - "id": a unique parameter that identifies the point. This parameter is necessary for the tree leaves, or nodes;
 - "value": numerical value which defines the point's color (colors are distributed by the color scale by default unless some points have specially defined colors). If this parameter is not set, this point will be valued as missing and won't be displayed;
 - "size": numerical parameter which defines the point's size; unless being defined, size will be generated on the "value" parameter basis;
 - "name": the point's name
 - "parent": this parameter in necessary for all leaves (nodes) of the tree, except for the root; if you have several points with no parent, the first one will be considered by a tree as a root points, and the other will be ignored.

 Let's now consider both ways of arranging the data.

### Hierarchical

This way of arranging the data is expected by a TreeMap as a default way, as the data to be shown by the TreemMap should demonstrate some hierarchy. In our example, we show the countries divided by the geographical parameter, and the values they show are their area values.

```
	//Data set through tree method
	anychart.onDocumentReady(function() {
        var data = anychart.data.tree([
        {name: 'Eurasia',
            children:[
                {name: "Asia", children:[
                    {name: "Eastern Asia", children:[
                        {name:"Mongolia", value: 1564116, capital: 'Ulan-Bator'},
                        {name: "China", value: 1564116, capital: 'Beijing'},
                        {name: "Southern Korea", value: 1564116, capital: 'Seoul'},
                        {name: "Northern Korea", value: 120540, capital: 'Pyongyang'},
                        {name: "Japan", value: 1564116, capital: 'Tokio', children:[
                            {name: "Hokkaido", value: 83400},
                            {name: "Kyushu", value: 35640},
                            {name: "Honshu", value: 230500},
                            {name: "Shikoku", value: 1200}
                        ]}
                    ]}
                ]},
                {name: "Europe", children: [
                    {name: "Northern Europe", children:[
                        {name: "Finland", value: 338424, capital: 'Helsinki'},
                        {name: "Great Britain", value: 209331, capital: 'London'},
                        {name: "Ireland", value: 84421, capital: 'Dublin'},
                        {name: "Scandinavia", value: 928057, children:[
                            {name: "Sweden", value: 450295, capital: 'Stockholm'},
                            {name: "Norway", value: 385178, capital: 'Oslo'},
                            {name: "Denmark", value: 42923.53, capital: 'Copenhagen'}
                        ]},                        
                    ]}
                ]}
             ]},
    anychart.enums.TreeFillingMethod.AS_TREE // data type settings
    ]);
        var data = anychart.data.tree(rawData, anychart.enums.TreeFillingMethod.AS_TREE);

```

The whole data can be found while exploring this sample in the playground.

Here is a sample with the result of proceeding the whole data.

{sample}BCT\_TreeMap\_01{sample}

You can find more about using Data Tree Model [here](../Working_with_Data/Using_Data_Tree_Model).

### Table

This way is also available for using while setting the data for the AnyChart TreeMap Chart. 

```
	//Data set through table method
	var data = anychart.data.tree([
         {id: 'Eurasia', parent: null},
             {id: 'Asia', parent: 'Eurasia'},
                 {id: 'Eastern Asia', parent: 'Asia'},
                     {id: 'Mongolia', parent: 'Eastern Asia', value: 1564116, capital: 'Ulan-Bator'},
                     {id: 'China', parent: 'Eastern Asia', value: 1564116, capital: 'Beijing'},
                     {id: 'Southern Korea', parent: 'Eastern Asia', value: 1564116, capital: 'Seoul'},
                     {id: 'Northern Korea', parent: 'Eastern Asia', value: 120540, capital: 'Pyongyang'},
                     {id: 'Japan', parent: 'Eastern Asia', value: 1564116, capital: 'Tokio'},
                        {id: 'Hokkaido', parent: 'Japan', value: 83400},
                        {id: 'Kyushu', parent: 'Japan', value: 35640},
                        {id: 'Honshu', parent: 'Japan', value: 230500},
                        {id: 'Shikoku', parent: 'Japan', value: 1200},

         {id: 'Europe', parent: 'Eurasia'},
             {id: 'Northern Europe', parent: 'Europe'},
                 {id: 'Finland', parent: 'Northern Europe', value: 338424, capital: 'Helsinki'},
                 {id: 'Great Britain', parent: 'Northern Europe', value: 209331, capital: 'London'},
                 {id: 'Ireland', parent: 'Northern Europe', value: 84421, capital: 'Dublin'},
                 {id: 'Scandinavia', parent: 'Northern Europe', value: 928057},
                    {id: 'Sweden', parent: 'Scandinavia', value: 450295, capital: 'Stockholm'},
                    {id: 'Norway', parent: 'Scandinavia', value: 385178, capital: 'Oslo'},
                    {id: 'Denmark', parent: 'Scandinavia', value: 42923.53, capital: 'Copenhagen'},
             ],
    anychart.enums.TreeFillingMethod.AS_TABLE // data type settings
    );

        chart = anychart.treeMap(data);
```

Explore this sample in the playground to see the whole data.

Note that after setting the data we should set the method of its mapping to make it clear for the component how to treat the data. You can see how it's done above or you can define the data type settings after setting the data itself:

```
	var mappedData = anychart.data.tree(data, anychart.enums.TreeFillingMethod.AS_TABLE);
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

Header is a name of a parent of the current level. Due to its settings, they all can be enabled, disabled or set individually through the data. To set some parameters or format the header we use the {api}**.headers()**{api} method. We can change the font and background settings, format the demonstrated value and define hovering settings using the {api}**.hoverHeaders()**{api} method. Let's look at the example below. We've changed some font and hovering settings of the demonstrated headers.

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
	{name: "South-Eastern Asia", children:[
        {name: "Singapoor", value: 718.3, capital: 'Singapoor'},
        {name: "Indonesia", value: 1919440, capital: "Jakarta", header: {textFormatter: function() {return 'INDONESIA NEW HEADER'}}, children:[
            {name: "Java", value: 128297},
            {name: "Kalimantan (Borneo)", value: 174600},
            {name: "Sulawesi", value: 174600},
            {name: "Sumatra", value: 473481}
        ]},
        {name: "Thailand", value: 513.120, capital: 'Bangkok', header: null},
        {name: "Philippines", value: 300000, capital: 'Manila', header: {textFormatter: function() {return 'PHILIPPINES NEW HEADER'}}, children:[
            {name: "Luzon", value: 104688},
            {name: "Eastern Visayas", value: 15875},
            {name: "Central Visayas", value: 21562},
            {name: "Mindanayo", value: 21562}
        {name: "Laos", value: 236800, capital: 'Vientiane', header: null},
        {name: "Cambodia", value: 181040, capital: 'Phnom Penh', header: null}
        ]},
```
{sample}BCT\_TreeMap\_05{sample} 

We can see that two headers have changed (Philippines and Indonesia) and three headers (belong to Thailand, Laos and Cambodia) have disappeared.


### Content

Content points are all points besides parental ones. We can also edit them almost the same as we would edit Column Chart points appearance. Additionally, TreeMap Chart points have an opacity property, which we can set using {api}**.hintOpacity()**{api} method with a value from 0 to 1 (default value is 1). Note that the result of using this method will be seen only if we adjust another setting, {api}**.hintDepth()**{api}, which ids described lower in the article. Let's adjust our content points and change their background colors and opacity.

```
	// content points settings
    chart.hintOpacity(0.5);
    chart.fill("#ddd");
```
{sample}BCT\_TreeMap\_06{sample}

Here we used a single color for the {api:anychart.core.cartesian.series.Column#fill}**.fill()**{api} method so all content points became of the same light-gray color. If you need to make points colored differently depending on the 

Look for more detailed description of the content point visualization in the [visualization paragraph](#visualization).

### Markers

You can notice that there are markers shown on a point when you hover it. Markers in the TreeMap charts are quite usual: we use {api}**.markers()**{api}, {api}**.hoverMarkers()**{api} and {api}**.selectMarkers()**{api} for adjusting markers in different chart states. Let's now edit the hovering settings of our TreeMap: create markers of pentagon type which will be displayed on the hovered points. <!--Those conditions can be complied if defined through [events](../Common_Settings/Event_Listeners).-->

```
	// markers
    chart.hoverMarkers(true);
    chart.hoverMarkers({size: 10, fill: "#80CBC4", type: "pentagon"});
```

{sample}BCT\_TreeMap\_07{sample}



## Interactivity

You might have already noticed that our TreeMap point reaction is quite interactive. "Blocks" or elements are being drilled down and up, hovered and selected. In this part we will describe working with TreeMap interactivity.

### Drill Down and Drill Up

The main feature and purpose of TreeMap Charts is demonstrating the hierarchy of some subjects, processes or anything else. Drill Down feature therefore becomes the most important interactive feature for this chart type. 

When you left-click at the leaf which is a parent itself, a Drill Down will be performed for this element and you will see the next level of the tree, where the selected element is a parent. This can be performed if the {api}**.maxDepth()**{api} of the TreeMap is not set in the maximum value, because in this case you will see all headers in the top rows of the TreeMap table and the demonstrated content points will belong to the lowest level.

If you set the value of the {api}**.maxDepth()**{api} parameter more than 1 and your data has over 3 levels of contents, you will see the headers of the nested levels in the rows under the root header row. If you click at one of those headers, its level points will be drilled down.


Also AnyChart TreeMaps work with context menu. If a content point is a parent of another level, you can drill this level down by right-clicking this content-parent point and choosing the necessary option in the context menu.


To drill a chart or a level up, use headers. Click at the root header (you will be able to see it from any level but the highest if you have set the {api}**.maxDepth()**{api} parameter in the right value). Anyway, if you don't see the root header, you can click at the level's parent's header - so you will go one level up. Also, you may use a context menu: right-click at one of the points of the level and choosing "Drill Up" in the context menu will bring you a level up.


If necessary, it is possible to disable drill Down function. In this case we need to call for events. You can look for the [Events tutorial article](../Common_Settings/Event_Listeners) for better understanding the subject. Below you can find a way to turn down the Drill Down function.


```
	// disable drill down
	chart.listen(anychart.enums.EventType.DRILL_CHANGE, function(e) {
		return false;
	});
```

{sample}BCT\_TreeMap\_08{sample}


### Select

Selecting points in TreeMap Charts is another special theme. Mostly, selecting a point of a TreeMap will lead to the next level opening where this point as a header. Though, when you get to such a level of the hierarchy where some of content points or all of them have no children, you will be able to select those points. 

There are two ways of selecting the leaf points: first is to click at a point with the left button of your mouse, and the second is to right-click a point and choose "Select".


## Visualization

When you change some visualization setting of your charts, you make them not only more informative but memorable. There are several parameters besides those already considered that you can change and adjust.

### Labels

To configure data labels use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api}. Adding attributes with values to these methods will lead to changes in visual appearance, position and format. 
For formatting the text of the labels we use {api:anychart.core.ui.LabelsFactory#textFormatter}**.textFormatter()**{api}. Let's format the labels so they would show the represented value and color the labels' text in black.

```
	// labels
    сhart.labels().fontColor('black');
    chart.labels().textFormatter(function() {
         return this.getDataValue('id') + ": $" + this.value + "B";
    });
```

{sample}BCT\_TreeMap\_09{sample}

It's possible to set some additional information through the data that is to be later displayed by the labels. You can find more interesting information and examples like that with labels formatting and adjusting in the [Labels](../Common_Settings/Labels) tutorial.

### Tooltip

Tooltips are small windows that pop up when you hover a point. They are shown next to the cursor and follows it by default. We can change their appearance and behavior using several the {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} method. For formatting the text and title of the tooltips we use {api:anychart.core.ui.ChartTooltip#textFormatter}**.textFormatter()**{api} and {api:anychart.core.ui.ChartTooltip#titleFormatter}**.titleFormatter()**{api}; for changing the position we use special positioning parameters like {api:anychart.core.ui.ChartTooltip#positionMode}**.positionMode()**{api}, {api:anychart.core.ui.ChartTooltip#anchor}**.anchor()**{api} and other, which you can find [here](../Common_Settings/Tooltip#position). Let's now adjust the tooltips.

```
	// tooltips settings
    chart.tooltip().positionMode('point');
    chart.tooltip().titleFormatter(function() {
        return this.getDataValue('id');
    });
    chart.tooltip().textFormatter(function() {
        return "Effort from export in 2012: $" + this.value + "B";
    });
```

{sample}BCT\_TreeMap\_10{sample}

Some tooltip settings can be defined through the data. For more information look up the [Tooltip](../Common_Settings/Tooltip) tutorial.

### HintDepth

HintDepth is the TreeMaps feature. The value that you set for the {api}**.hintDepth()**{api} method means how many levels further than those defined for {api}**.maxDepth()**{api} you want to be shown. This is different from **MaxDepth** feature: while **MaxDepth** shows several levels with their parents in the first rows of the TreeMap table, making all elements interactive, the **HintDepth** shows only the elements inside without making them interactive and without displaying their parent elements. Look at the following sample: we have set 2 in the {api}**.maxDepth()**{api} parameter and 1 for {api}**.hintDepth()**{api}.

```
	// setting the maximum levels depth
    chart.maxDepth(2);

    // setting the number of levels shown additionally
    chart.hintDepth(1);
```

{sample}BCT\_TreeMap\_11{sample}

If we set the **MaxDepth** parameter in 3 while we've got 3 levels of hierarchy, using **HintDepth** will lead to no changes in visual appearance of the chart. 


### HintOpacity

This setting helps to manage the TreeMap appearance when the **HintDepth** parameter is set in more than 0. The range of the {api}**.hintOpacity()**{api} parameter is from 0 to 1; the more the value is, the less transparent will be the chart (the less visible will be your additional levels). Let's leave the **MaxDepth** and **HintDepth** settings from the previous samples and set the **hintOpacity** in 0,7.


```
	
    // setting the maximum levels depth
    chart.maxDepth(2);

    // setting the number of levels shown additionally
    chart.hintDepth(1);

    // hintOpacity setting
    chart.hintOpacity(0.7);

```

{sample}BCT\_TreeMap\_12{sample}