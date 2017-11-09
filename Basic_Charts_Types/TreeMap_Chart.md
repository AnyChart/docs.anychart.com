{:index 1}
# TreeMap Chart

## Overview

TreeMap is intended to demonstrate hierarchically ordered data structures, where all elements have a parent element, except for the root (the highest/eldest element in the hierarchy). Treemap chart is a tree designed as a rectangle divided into a set of rectangular elements. The top rectangle is a parent element, unless you drilled down into a structure. Child elements look like rectangles of relative dimensions which depend on the values these elements represent. If one of those elements appears to be a parent element too, it will be shown in the header and its children will be demonstrated within it. This diagram is an upgraded version of the Marimekko chart.
  
## Data

Working with data in AnyChart TreeMaps is quite simple. As TreeMap is intended to work with hierarchies, you can set the data in one of two available formats: as an hierarchical tree and as an hierarchical table.

Regardless which way we decide to use, there are some parameters we have to define to all points. Here's a list of them:
 - "id": a unique parameter that identifies the point. This parameter is necessary for all elements, or nodes;
 - "value": numerical value which usually defines the point's color (colors are distributed by the color scale by default unless some points have specially defined colors). If this parameter is not set, this point will be valued as missing and won't be displayed;
 - "size": numerical parameter which defines the point's size; unless being defined, value paramater will be considered a size;
 - "name": the element name
 - "parent": this parameter in necessary for all elements (nodes) of the tree, except for the root; if you have several points with no parent, the first one will be considered as a root, others will be ignored.

Let's now take a look at both ways of arranging the data.

### Hierarchical

This way of arranging the data is expected by a TreeMap as a default. In our example, we show the countries divided by the geographical parameter, and the values they show are their area. "Capital" field is the meta data, it is not required and you can add any number of extra fields you need.

```
// Data set using tree method
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
            ]},
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
     ]} 
], anychart.enums.TreeFillingMethod.AS_TREE);
```

Here is a sample of a treemap with data set this way:

{sample}BCT\_TreeMap\_01{sample}

You can find more about using Data Tree Model in [Using Data Tree model in AnyChart](../Working_with_Data/Using_Data_Tree_Model).

### Table

Table representation is another way to load data into AnyChart JavaScript TreeMap Chart. It may be particularly useful when you store your data in a common relational database tables. 

```
//Data set through table method
var data = anychart.data.tree([
       {id:  1, parent: null, name: 'Eurasia'},
       {id:  2, parent:    1, name: 'Asia'},
       {id:  3, parent:    2, name: 'Eastern Asia'},
       {id:  4, parent:    3, name: 'Mongolia',       value: 1564116,  capital: 'Ulan-Bator'},
       {id:  5, parent:    3, name: 'China',          value: 1564116,  capital: 'Beijing'},
       {id:  6, parent:    3, name: 'Southern Korea', value: 1564116,  capital: 'Seoul'},
       {id:  7, parent:    3, name: 'Northern Korea', value: 120540,   capital: 'Pyongyang'},
       {id:  8, parent:    3, name: 'Japan',          value: 1564116,  capital: 'Tokio'},
       {id:  9, parent:    8, name: 'Hokkaido',       value: 83400},
       {id: 10, parent:    9, name: 'Kyushu',         value: 35640},
       {id: 11, parent:    9, name: 'Honshu',         value: 230500},
       {id: 12, parent:    9, name: 'Shikoku',        value: 1200},
       {id: 13, parent:    1, name: 'Europe'},
       {id: 14, parent:   13, name: 'Northern Europe'},
       {id: 15, parent:   14, name: 'Finland',        value: 338424,   capital: 'Helsinki'},
       {id: 16, parent:   14, name: 'Great Britain',  value: 209331,   capital: 'London'},
       {id: 17, parent:   14, name: 'Ireland',        value: 84421,    capital: 'Dublin'},
       {id: 18, parent:   14, name: 'Scandinavia',    value: 928057},
       {id: 19, parent:   18, name: 'Sweden',         value: 450295,   capital: 'Stockholm'},
       {id: 20, parent:   18, name: 'Norway',         value: 385178,   capital: 'Oslo'},
       {id: 21, parent:   18, name: 'Denmark',        value: 42923.53, capital: 'Copenhagen'},
      ],
  anychart.enums.TreeFillingMethod.AS_TABLE // data type settings
  );

chart = anychart.treeMap(data);
```

Note that unless you use default field names listed in the beginning of the article you use mapping to make it clear for the component how to treat the data. 

{sample}BCT\_TreeMap\_02{sample}

You can notice that samples don't differ a thing despite their data is defined differently. The way of setting the data you chose depends only on your preferences.

### Maximum Depth 

AnyChart TreeMaps have a Maximum Depth feature. You can define how many levels do you want to be shown simultaneously on a chart. It means that it's possible to show as many levels of hierarchy as you need. Use {api:anychart.charts.TreeMap#maxDepth}.maxDepth(){api} method with a number of levels you want to see as an argument. Note that the more levels you show the less understandable your TreeMap might become (depends on the levels' number and values they represent). Let's set this parameter to 3 for the next sample:

```
// setting the maximum levels depth
chart.maxDepth(3);
```

That's how the chart looks with the maxDepth property value set more than 1. There are two extra settings that help managing this feature, {api:anychart.charts.TreeMap#hintOpacity}.hintOpacity{api} and {api:anychart.charts.TreeMap#hintDepth}.hintDepth{api}, which are described below in [Hint Opacity](#hint_opacity) and [Hint Depth](#hint_depth) sections.

{sample}BCT\_TreeMap\_03{sample}

### Sorting

You can sort data in your treemap when you need using {api:anychart.charts.TreeMap#sort}sort(){api} method, which accepts any of {api:anychart.enums.Sort}enums.Sort{api} values, here is a sample of chart, click buttons at the top to sort elements of the treemap:

{sample}BCT\_TreeMap\_03\_1{sample}

## Point elements

Points in TreeMap Charts are somewhat atypical, they look like rectangles which represent something and may contain elements within. When a node contains other nodes it may be useful to show a header.

### Header

Header is usually a name of a parent of the current level. Due to its settings, they all can be enabled, disabled or set individually through the data. To set some parameters or format the header we use the {api:anychart.charts.TreeMap#headers}.headers(){api} method. We can change the font and background settings, format the value shown and define hovering settings using the {api:anychart.charts.TreeMap#hoverHeaders}.hoverHeaders(){api} method. Let's look at the example below. 

```
// headers settings
  chart.headers().fontColor("red");
  chart.headers().fontSize(14);
  chart.headers().fontWeight('bold');
  chart.hoverHeaders().fontColor("LightCoral");
  chart.headers().textFormatter("{%name}");
  });
```

{sample}BCT\_TreeMap\_04{sample}

That's how you can override header content:

```
{name: "South-Eastern Asia",  header: {textFormatter: "SEA"}, children:[
      {name: "Singapoor", value: 718.3, capital: 'Singapoor'},
      {name: "Indonesia", value: 1919440, capital: "Jakarta"},
      {name: "Thailand", value: 513.120, capital: 'Bangkok'},
      {name: "Philippines", value: 300000, capital: 'Manila'},
      {name: "Laos", value: 236800, capital: 'Vientiane'},
      {name: "Cambodia", value: 181040, capital: 'Phnom Penh'}
      ]}
```

And that's how you can disable it completely for one element:

```
{name: 'Eurasia', header: null,
    children:[
    {name: "Asia"},
    {name: "Europe"},
    ]}
```

Sample below shows this way to change headers:

{sample}BCT\_TreeMap\_05{sample} 

We can see that all headers in Asia are changed and the root header disappeared completely.

There are two special treemap chart parameters that allow to tune headers behavior when chart is resized:

{api:anychart.charts.TreeMap#maxHeadersHeight}maxHeadersHeight(){api} defines the maximum amount of point surface header can occupy. It can be set in pixels or percents.

{api:anychart.charts.TreeMap#headersDisplayMode}headersDisplayMode(){api} defines how header label behaves when there is enough space to fit it in the header, there are three modes: "crop", "drop" and "alwaysShow".

Take a look at the sample below, where the header height is set to "10px" and display mode is set to "alwaysShow", then click the title to change settings to "5%" and "alwaysShow":

{sample}BCT\_TreeMap\_05\_1{sample} 

### Nodes

TreeMap Chart points have fill, hatchfill, border and other usual element have a hint opacity property, which we can set using {api:anychart.charts.TreeMap#hintOpacity}.hintOpacity(){api} method with a value from 0 to 1. Note that the result of using this method will be seen only if we adjust another setting, {api:anychart.charts.TreeMap#hintDepth}.hintDepth(){api}, which is described below in the article. Let's adjust points and change their background colors and opacity.

```
// points fill and hover stroke   
chart.hoverStroke('black');
chart.fill("#ddd");
```
{sample}BCT\_TreeMap\_06{sample}

Here we used a single color for the {api:anychart.charts.TreeMap#fill}.fill(){api} method so all content points became of the same light-gray color. If you need to make points colored differently depending on the value - see [Color range](#color_range)  in the [visualization section](#visualization).

### Markers

Markers in the TreeMap charts are configured using {api:anychart.charts.TreeMap#markers}.markers(){api}, {api:anychart.charts.TreeMap#hoverMarkers}.hoverMarkers(){api} and {api:anychart.charts.TreeMap#selectMarkers}.selectMarkers(){api} methods, adjusting markers in different chart states. Let's now edit the hovering settings of a TreeMap: create markers of "star5" type which will be displayed on the hovered points.

```
// markers
chart.hoverMarkers(true);
chart.hoverMarkers({size: 10, fill: "Gold", type: "star5"});
```

{sample}BCT\_TreeMap\_07{sample}

## Interactivity

You might have already noticed that TreeMap is an interactive chart by default. Elements are being drilled down and up, hovered and selected. In this part we will describe working with TreeMap interactivity.

### Drill Down and Drill Up

The main feature and purpose of TreeMap Charts is demonstrating the hierarchy of objects, processes or anything else. Drill Down feature therefore becomes the most important interactive feature for this chart type. 

When you click the node which is a parent itself, a Drill Down is performed for this element and you see the next level of the tree, where element just clicked is a parent. This can be performed if the {api:anychart.charts.TreeMap#maxDepth}.maxDepth(){api} of the TreeMap is not set in the maximum value, because in this case you will see all headers in the top rows of the TreeMap table and the points shown belong to the lowest level.

If you set the value of the {api:anychart.charts.TreeMap#maxDepth}.maxDepth(){api} parameter more than 1 and your data has over 3 levels of content, you will see the headers of the nested levels in the rows under the root header row. If you click one of those headers, its level points will be drilled down.

Also AnyChart TreeMaps work with context menu. If a content point is a parent of another level, you can drill this level down by right-clicking this content-parent point and choosing the necessary option in the context menu.

To drill a chart or a level up, use headers. Click the root header (you will be able to see it from any level but the highest if you have set the {api:anychart.charts.TreeMap#maxDepth}.maxDepth(){api} parameter in the right value). Anyway, if you don't see the root header, you can click at the level's parent's header - so you will go one level up. Also, you may use a context menu: right-click at one of the points of the level and choosing "Drill Up" in the context menu will bring you a level up.

If necessary, it is possible to disable drill Down function. In this case we need to call for events. You can look for the [Events tutorial article](../Common_Settings/Event_Listeners) for better understanding the subject. Below you can find a way to turn down the Drill Down function.

```
// disable drill down
chart.listen(anychart.enums.EventType.DRILL_CHANGE, function(e) {
	return false;
});
```

{sample}BCT\_TreeMap\_08{sample}

### Select

Selecting points in TreeMap Charts is another special topic. Mostly, selecting a point of a TreeMap will lead to the next level opening where this point as a header. Though, when you get to such a level of the hierarchy where some of content points or all of them have no children, you will be able to select those points. 

There are two ways of selecting the leaf points: first is to click at a point with the left button of your mouse, and the second is to right-click a point and choose "Select".

### Methods

Treemap works with all standard [Interactivity methods](../Common_Settings/Interactivity) and have several special methods: {api:anychart.charts.TreeMap#drillTo}drillTo(){api}, {api:anychart.charts.TreeMap#drillUp}drillUp(){api} and {api:anychart.charts.TreeMap#getDrilldownPath}getDrilldownPath(){api}. These methods allow you to control and navigate any treemap.

The following sample shows how to use all these three methods, you can navigate treemap the usual way and see how {api:anychart.charts.TreeMap#getDrilldownPath}getDrilldownPath(){api} is used to show the structure of drill down in a chart title, or you can use button on the top of the chart to jump deep into the hierarchy and drill up level by level. 

{sample}BCT\_TreeMap\_08\_1{sample}

Note that {api:anychart.charts.TreeMap#drillTo}drillTo(){api} method accepts instances of {api:anychart.data.Tree.DataItem}Tree.DataItem{api} as a parameter, you need to know how to work with [Tree Data Model](../Working_with_Data/Using_Data_Tree_Model#search), particularly {api:anychart.data.Tree#search}search(){api} and {api:anychart.data.Tree#searchItems}searchItems(){api} methods, to work with them. 

## Visualization

When you change some visualization setting of your charts, you make them not only more informative but memorable. There are several parameters besides those already considered that you can change and adjust.

### Labels

To configure data labels use {api:anychart.charts.TreeMap#labels}.labels(){api}. For formatting the text of the labels use {api:anychart.core.ui.LabelsFactory#textFormatter}.textFormatter(){api}. Let's format the labels so they show the represented value and color the labels' text in black.

```
// labels
сhart.labels().fontColor('black');
chart.labels().textFormatter("{%id}: ${%Value}B");
```

{sample}BCT\_TreeMap\_09{sample}

It's possible to set some additional information through the data that is to be later displayed in labels. You can find more interesting information and examples like that with labels formatting and adjustment in the [Labels](../Common_Settings/Labels) tutorial.

### Tooltip

Tooltips are small windows that pop up when you hover a point. They are shown next to the cursor and follows it by default. We can change their appearance and behavior using several the {api:anychart.charts.TreeMap#tooltip}.tooltip(){api} method. To format the text and title of tooltips we use {api:anychart.core.ui.ChartTooltip#textFormatter}.textFormatter(){api} and {api:anychart.core.ui.ChartTooltip#titleFormatter}.titleFormatter(){api}; to change the position we use special positioning methods: {api:anychart.core.ui.ChartTooltip#positionMode}.positionMode(){api} and {api:anychart.core.ui.ChartTooltip#anchor}.anchor(){api}, which you can find in the [Tooltip article](../Common_Settings/Tooltip#position). Let's now adjust the tooltips text:

```
// tooltips settings
chart.tooltip().positionMode('point');
chart.tooltip().titleFormatter('{%id}');
chart.tooltip().textFormatter("Income from export in 2012: $ {%Value}B");
```

{sample}BCT\_TreeMap\_10{sample}

Some tooltip settings can be set in the data. For more information see [Tooltip](../Common_Settings/Tooltip) tutorial.

### Color Range

Color Range is a component that helps to color the treemap points according to the values they represent. There is a default color scheme which you do not need to adjust, but it's also possible to define custom colors and ranges if necessary. Let's create an example with a customized Color Range.

```
// making the Color Scale and Color Range
chart.colorRange(true);
chart.colorScale(anychart.scales.ordinalColor([{less:100,color:"#FFCC99"},{from:100, to:200, color:'#CC9966'},{from:200, to:250, color:'#996633'},{greater:250, color:'#663300'}]));
```

{sample}BCT\_TreeMap\_13{sample}

For more information about ColorRange and adjusting it take a look at [ColorRange article](../Maps/ColorRange) and [ColorScale](../Maps/Scales) articles for information about the color scales.

### Hint Depth

Hint Depth is the TreeMaps feature. The value that you set for the {api:anychart.charts.TreeMap#hintDepth}.hintDepth(){api} method means how many levels further than those defined for {api:anychart.charts.TreeMap#maxDepth}.maxDepth(){api} you want to be shown. This is different from Maximum Depth feature: while **Maximum Depth** shows several levels with their parents in the first rows of the TreeMap table, making all elements interactive, the **Hint Depth** shows only the elements inside without making them interactive and without displaying their parent elements. Look at the following sample: we have set 2 in the {api:anychart.charts.TreeMap#maxDepth}.maxDepth(){api} parameter and 1 for {api:anychart.charts.TreeMap#hintDepth}.hintDepth(){api}.

```
// setting the maximum levels depth
chart.maxDepth(2);

// setting the number of levels shown additionally
chart.hintDepth(3);
```

{sample}BCT\_TreeMap\_11{sample}

Note, if we set the **Maximum Depth** parameter to some value while we've got the same number of levels of hierarchy, using **Hint Depth** will lead to no changes in visual appearance of the chart. 

### Hint Opacity

This setting helps to manage the TreeMap appearance when the **Hint Depth** parameter is set in more than 0. The range of the {api:anychart.charts.TreeMap#hintOpacity}.hintOpacity(){api} parameter 0 to 1; the more the value is, the less transparent will be the chart (the less visible will be  additional levels). Here is how you set **hintOpacity** to 0.7.

```	
// hint opacity setting
chart.hintOpacity(0.7);  
```

{sample}BCT\_TreeMap\_12{sample}