{:index 5}
# Getting Data from JSON, XML or CSV

## Overview

AnyChart js charting framework supports several ways of setting data. This article quickly demonstrates main aspects of using JSON, XML and CSV format in AnyChart Gantt. 
The main difference between using any of these format types is that in JSON the chart configuration is presented as an object, in XML it is a string, and both of them may contain some extra information, such as color and size settings or other design features. CSV format can be used to convert only the data, no extra information can be added in this case.
  
## JSON 
  
JSON or JavaScript Object Notation, is an open standard format that uses human-readable text to transmit data objects consisting of attribute-value pairs. It is used primarily to transmit data between a server and web application, as an alternative to XML. 
For more information visit [https://en.wikipedia.org/wiki/JSON](https://en.wikipedia.org/wiki/JSON)

You can use JSON to define the chart configuration with functions and other complicated structures. Look at the sample below:

{sample :height 200}GANTT\_JXC\_01{sample}

Explore the sample in playground to see the whole code in Javascript.

To transform the code from Javascript into JSON configuration object, you can go two ways: open the tab "JSON" in the playground or add the following line somewhere in the end of the code:

```
// log json to console
console.log(chart.toJson());
```

The sample below is the same simple Project Gantt, built with the use of JSON. Explore it in playground to see the whole code.

{sample :height 200}GANTT\_JXC\_02{sample}

And that's how the code looks like in JSON. 
It is necessary to define the chart type, container (or as in the example) and data items to make the JSON config valid.

```
var chart;

anychart.onDocumentReady(function () {

var json = {
    "gantt": {
        "type": "project",
        "controller": {
            "treeData": {
                "children": [
                    {
                        "treeDataItemData": {
                            "id": 1,
                            "name": "Activities" 	// actual start, actual end will be autocalculated here.
                        }, 							// All meta will be autocalculated as well
                        "children": [
                            {
                                "treeDataItemData": {
                                    "id": 2,
                                    "name": "Draft plan",
                                    "actualStart": Date.UTC(2007, 0, 25, 8),   // This is for JSON only! For XML it still must be 1169683200000.
                                    "actualEnd": 1170460800000
                                }
                            },
                            {
                                "treeDataItemData": {
                                    "id": 3,
                                    "name": "Board meeting",
                                    "actualStart": 1170547200000,
                                    "actualEnd": 1170547200000
                                }
                            },
                            {
                                "treeDataItemData": {
                                    "id": 4,
                                    "name": "Research option",
                                    "actualStart": 1170547200000,
                                    "actualEnd": 1172275200000
                                }
                            },
                            {
                                "treeDataItemData": {
                                    "id": 5,
                                    "name": "Final plan",
                                    "actualStart": 1172275200000,
                                    "actualEnd": 1173830400000
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
};

chart = anychart.fromJson(json);
chart.container('container');

// draw chart
chart.draw();

});
```

Note that you can set the date in UTC in JSON. In XML you still have to use numeric format.

### JSON Schema

JSON Schema specifies a JSON-based format to define the structure of JSON data 
(visit [https://en.wikipedia.org/wiki/JSON#Schema\_and\_metadata](https://en.wikipedia.org/wiki/JSON#Schema\_and\_metadata) for more information). All objects of this schema correspond to JavaScript methods and parameters of a chart. 

AnyChart JSON schema varies from version to version. For example, JSON Schema for AnyChart version {{branch-name}} is located at [https://cdn.anychart.com/schemas/{{branch-name}}/json-schema.json](https://cdn.anychart.com/schemas/{{branch-name}}/json-schema.json).

Whenever you use AnyChart JSON schema - make sure it suits the version of AnyChart. 

## XML

XML or Extensible Markup Language, is a markup language that defines a set of rules for encoding documents in a format which is both human-readable and machine-readable. Originally designed to meet the challenges of large-scale electronic publishing,  XML is also playing an important role in the exchange of a wide variety of data on the Web and elsewhere.  More information on XML can be found on [https://en.wikipedia.org/wiki/XML](https://en.wikipedia.org/wiki/XML)

You can use XML to define the chart configuration as a string. Let's take the sample above as an example. The code converted to XML will look like:

```
anychart.onDocumentReady(function () {

var xml =
        '<anychart xmlns="https://cdn.anychart.com/schemas/{{branch-name}}/xml-schema.xsd">'+
        '<gantt enabled="true" type="project" header_height="70" row_hover_fill="#edf8ff" row_selected_fill="#d2eafa" splitter_position="30%">'+
        '<controller is_resource_chart="false" vertical_offset="0" start_index="0">'+
        '<tree_data>'+
        '<children>'+
        '<data_item>'+
        '<tree_data_item_data name="Activities" actual_start="1169683200000" actual_end="1173830400000"/>'+
        '<tree_data_item_meta nc="true" depth="0" index="0" auto_progress="0" auto_start="1169683200000" auto_end="1173830400000"/>'+
        '<children>'+
        '<data_item>'+
        '<tree_data_item_data name="Draft plan" actual_start="1169683200000" actual_end="1170460800000"/>'+
        '<tree_data_item_meta nc="true" depth="1" index="1"/>'+
        '</data_item>'+
        '<data_item>'+
        '<tree_data_item_data name="Board meeting" actual_start="1170547200000" actual_end="1170547200000"/>'+
        '<tree_data_item_meta nc="true" depth="1" index="2"/>'+
        '</data_item>'+
        '<data_item>'+
        '<tree_data_item_data name="Research option" actual_start="1170547200000" actual_end="1172275200000"/>'+
        '<tree_data_item_meta nc="true" depth="1" index="3"/>'+
        '</data_item>'+
        '<data_item>'+
        '<tree_data_item_data name="Final plan" actual_start="1172275200000" actual_end="1173830400000"/>'+
        '<tree_data_item_meta nc="true" depth="1" index="4"/>'+
        '</data_item>'+
        '</children>'+
        '</data_item>'+
        '</children>'+
        '<index>'+
        '<key><![CDATA[id]]></key>'+ 
        '</index>'+
        '</tree_data>'+
        '</controller>'+
        '</scale>'+
        '</timeline>'
        '</gantt>'+
        '</anychart>';

var chart = anychart.fromXml(xml);

// set container id for the chart
chart.container('container');

// initiate chart drawing
chart.draw();

});
```

Note: in XML, you should set the whole code as a string object.

The sample looks completely the same as the JSON-converted one.

{sample :width 680 :height 200}GANTT\_JXC\_03{sample}

### XML Schema

XML Schema specifies a XML-based format to define the structure of XML data 
(visit [https://en.wikipedia.org/wiki/XML_schema](https://en.wikipedia.org/wiki/XML_schema) for more information). All objects of this schema correspond to JavaScript methods and parameters of a chart. 

AnyChart XML schema varies from version to version. For example, XML Schema for AnyChart version {{branch-name}} is located at [https://cdn.anychart.com/schemas/{{branch-name}}/xml-schema.xsd](https://cdn.anychart.com/schemas/{{branch-name}}/xml-schema.xsd)). 

## CSV 

CSV or Comma-Separated Values, is a common data exchange format that is widely supported by consumer, business, and scientific applications. Among its most common uses is moving tabular data between programs that natively operate on incompatible (often proprietary and/or undocumented) formats. This works despite lack of adherence to RFC 4180 (or any other standard), because so many programs support variations on the CSV format for data import.

For example, a user may need to transfer information from a database program that stores data in a proprietary format, to a spreadsheet that uses a completely different format. The database program most likely can export its data as "CSV"; the exported CSV file can then be imported by the spreadsheet program.

For more information visit [https://en.wikipedia.org/wiki/Comma-separated_values](https://en.wikipedia.org/wiki/CSV)

If we take the above sample as an example, that's how the part of code for the Gantt Project chart will look like: 

```
var csvString =
    '0,0,Activities,1169683200000,1173830400000,,\n' +
    '1,1,Draft plan,1169683200000,1170460800000,0,\n' +
    '2,2,Board meeting,1170547200000,1170547200000,0,\n' +
    '3,3,Research option,1170547200000,1172275200000,0,\n' +
    '4,4,Final plan,1172275200000,1173830400000,0,\n'

var mapping = {
    id: 0,
    index: 1,
    name: 2,
    actualStart: 3,
    actualEnd: 4,
    parent: 5
};  

var csvSettings = {
    rowsSeparator: ',',
    columnsSeparator: ';',
    ignoreFirstRow: false
};

data = anychart.data.tree(csvString, mapping, csvSettings);
```

And there is the sample of the Project Gantt with CSV-formatted data:

{sample :height 200}GANTT\_JXC\_04{sample}
 
As we can not define the whole chart configuration but only its data using the CSV format, we should help the data to parse correctly. That's why we need the "mapping" object - using it, we are able to tell the dataGrid to put the values from the CSV string into the right fields. The csvSettings is an object where we set the separators and other CSV parsing options.
