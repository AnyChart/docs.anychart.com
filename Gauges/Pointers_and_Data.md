#Pointers and Data

* [Overview](#overview)
* [Types](#types)
 * [Bar](#bar)
 * [Marker](#marker)
 * [Needle](#needle)
 * [Knob](#knob)
* [Visualization](#visualization)
 * [Connection with the Data](#connection_with_the_data)
* [Other](#other)


##Overview

Pointers are elements of the Gauge charts, which are  necessary for the data representation. 


##Types

There are 4 different types of pointers avaliable: needle, knob, bar and marker. 

###Bar

###Marker

###Needle

###Knob

##Visualization

###Connection with the Data

#### dataIndex()
When you apply for the **.dataIndex()** method, you change the value that will be represented by the pointer you add this method to. However, using this means only if you have more than one value in the dataSet, because the axis shows the first value fron your dataSet by default. So, there is no need in this method if your data looks like this:

```
dataSet = anychart.data.set([55]);
```
In case you have more that one value in your dataset, you should use the **.dataIndex()** method to each pointer showing any other value but the first. Note that numeration of the values starts from 0.

```
//setting the data
dataSet = anychart.data.set([55,33,77]);

//using the dataIndex()
gauge.marker(0)
    .axisIndex(0);

gauge.marker(1)
    .axisIndex(1);

gauge.marker(2)
    .axisIndex(2);
```

{sample}{sample}

#### axisIndex()

##Other

//coloring