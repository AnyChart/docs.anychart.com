{:index 5}
# Getting Data from JSON, XML or CSV

* [Overview](#overview)
* [JSON vs JavaScript](#json_vs_javascript)
* [XML vs JavaScript](#xml_vs_javascript)
* [CSV vs JavaScript](#csv_vs_javascript)

## Overview

AnyChart supports several ways of setting data. This article quickly demonstrates main aspects of using JSON, XML and CSV format in AnyChart Gantt. 
  
## JSON vs JavaScript  
  
JSON or JavaScript Object Notation, is an open standard format that uses human-readable text to transmit data objects consisting 
of attribute-value pairs. It is used primarily to transmit data between a server and web application, as an alternative to XML. 
For more information visit [http://en.wikipedia.org/wiki/JSON](http://en.wikipedia.org/wiki/JSON)

You can use JSON to define the chart configuration with functions and other complicated structures. Look at the sample below:

{sample}GANTT\_JXC\_01{sample}

That's how the code of this sample is presented in JavaScript:
```     
anychart.onDocumentReady(function(){

    var rawData = [
      {
"name": "Activities",
"actualStart": Date.UTC(2007, 0, 25),
"actualEnd": Date.UTC(2007, 2, 14),
"children": [
  {
    "name": "Draft plan",
    "actualStart": Date.UTC(2007, 0, 25),
    "actualEnd": Date.UTC(2007, 1, 3)
  },
  {
    "name": "Board meeting",
    "actualStart": Date.UTC(2007, 1, 4),
    "actualEnd": Date.UTC(2007, 1, 4)
  },
  {
    "name": "Research option",
    "actualStart": Date.UTC(2007, 1, 4),
    "actualEnd": Date.UTC(2007, 1, 24)
  },
  {
    "name": "Final plan",
    "actualStart": Date.UTC(2007, 1, 24),
    "actualEnd": Date.UTC(2007, 2, 14)
  }
]
      }];

  // tree data settings
  var treeData = anychart.data.tree(rawData, anychart.enums.TreeFillingMethod.AS_TREE);

  // chart type
  chart = anychart.ganttProject();

  // chart container
  chart.container('container');

  // set chart data
  chart.data(treeData);

  // initiate drawing
  chart.draw();
  
  console.log(chart.toJson());
  
  // show all items 
  chart.fitAll();

});
```

And that's how the same chart's code will look like if converted to JSON (without configuration parameters)

```
anychart.onDocumentReady(function() {

            var json = {
                "gantt": {
                    "type": "project",
                    "controller": {
                        "isResourceChart": false,
                        "treeData": {
                            "children": [
                                {
                                    "treeDataItemData": {
                                        "name": "Activities",
                                        "actualStart": 1169683200000,
                                        "actualEnd": 1173830400000
                                    },
                                    "treeDataItemMeta": {
                                        "nc": true,
                                        "depth": 0,
                                        "index": 0,
                                        "autoProgress": 0,
                                        "autoStart": 1169683200000,
                                        "autoEnd": 1173830400000
                                    },
                                    "children": [
                                        {
                                            "treeDataItemData": {
                                                "name": "Draft plan",
                                                "actualStart": 1169683200000,
                                                "actualEnd": 1170460800000
                                            },
                                            "treeDataItemMeta": {
                                                "nc": true,
                                                "depth": 1,
                                                "index": 1
                                            }
                                        },
                                        {
                                            "treeDataItemData": {
                                                "name": "Board meeting",
                                                "actualStart": 1170547200000,
                                                "actualEnd": 1170547200000
                                            },
                                            "treeDataItemMeta": {
                                                "nc": true,
                                                "depth": 1,
                                                "index": 2
                                            }
                                        },
                                        {
                                            "treeDataItemData": {
                                                "name": "Research option",
                                                "actualStart": 1170547200000,
                                                "actualEnd": 1172275200000
                                            },
                                            "treeDataItemMeta": {
                                                "nc": true,
                                                "depth": 1,
                                                "index": 3
                                            }
                                        },
                                        {
                                            "treeDataItemData": {
                                                "name": "Final plan",
                                                "actualStart": 1172275200000,
                                                "actualEnd": 1173830400000
                                            },
                                            "treeDataItemMeta": {
                                                "nc": true,
                                                "depth": 1,
                                                "index": 4
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            }

        var chart = anychart.fromJson(json);

        // set container id for the chart
        chart.container('container');

        // initiate chart drawing
        chart.draw();

        });
```


## XML vs JavaScript  

XML or Extensible Markup Language, is a markup language that defines a set of rules for encoding documents in a format which 
is both human-readable and machine-readable. Originally designed to meet the challenges of large-scale electronic publishing, 
XML is also playing an important role in the exchange of a wide variety of data on the Web and elsewhere. 
More information on XML can be found on [http://en.wikipedia.org/wiki/XML](http://en.wikipedia.org/wiki/XML)

You can use XML to define the chart configuration as a string. Look at the sample below:


## CSV vs JavaScript  

CSV or Comma-Separated Values, is a common data exchange format that is widely supported by consumer, business, 
and scientific applications. Among its most common uses is moving tabular data[3] between programs that natively 
operate on incompatible (often proprietary and/or undocumented) formats.[1] This works despite lack of adherence 
to RFC 4180 (or any other standard), because so many programs support variations on the CSV format for data import.

For example, a user may need to transfer information from a database program that stores data in a proprietary format, to a spreadsheet that uses a completely different format. The database program most likely can export its data as "CSV"; the exported CSV file can then be imported by the spreadsheet program.
For more information visit [http://en.wikipedia.org/wiki/Comma-separated_values](http://en.wikipedia.org/wiki/CSV)
