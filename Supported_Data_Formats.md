Supported Data Formats
=================

###Introduction
AnyChart supports four data formats which you can use to work with data:
* JavaScript API
* XML
* JSON
* CSV

Each of then have their own strengths and weaknesses.  
We recommend to use JavaScript API which give more flexibility at all.


###JavaScript API
JavaScript API is useful then you need Create/Read/Update/Delete data points dynamically. 

We recommend to use Data Sets for this purpose, but you can also pass data directly to chart creating function.
```
//create pie chart
var chart = anychart.pieChart([
    ['Product A', 1222],
    ['Product B', 2431],
    ['Product C', 3624],
    ['Product D', 5243],
    ['Product E', 8813]
]);

//set container id for the chart
chart.container('container');

//initiate chart drawing
chart.draw();
```
See also:  
<a href="./JavaScript_API_Principles">JavaScript API Principles</a>  
<a href="http://anychart.com/products/anychart7/api-reference?format=js">JavaScript API Reference</a>  
<a href="./Working_with_Data/Using_Data_Sets">Using Data Sets</a>  
<a href="./Working_with_Data/Create_Update_Read_Delete_operations">Create/Update/Read/Delete operations</a>  
<a href="./Export/JavaScript_API_Serialization_Restrictions">JavaScript API serialization restrictions</a>   

###XML
XML format is useful if you prefer declarative style for chart configurations.  
Also it's older AnyChart version salute which was generally XML based.  
We recommend to use JavaScript API which give more flexibility at all.
```
//create XML string
var xmlString = '<xml>' +
                '<chart type="pie" >' +
                  '<data>' +
                    '<point name="Product A" value="1222"/>' +
                    '<point name="Product B" value="2431"/>' +
                    '<point name="Product C" value="3624"/>' +
                    '<point name="Product D" value="5243"/>' +
                    '<point name="Product E" value="8813"/>' +
                  '</data>' +
                '</chart>' +
              '</xml>';
//create chart from xml config              
var chart = anychart.xml(xmlString);

//set container id for the chart
chart.container('container');

//initiate chart drawing
chart.draw();
```
See also:  
<a href="http://anychart.com/products/anychart7/api-reference?format=xml">XML Reference</a>  
<a href="./Working_with_Data/Using_XML_JSON_Schemas_for_Config_Validation">Using XML/JSON schema for config validation</a>  
<a href="./AnyChart_6.x_Migration_Guide">AnyChart 6.x migration guide</a>  
<a href="./Working_with_Data/XML_JSON_minification_recommendations.md">XML/JSON minification recommendations</a>  
<a href="./Working_with_Data/Using_Data_Sets">Using Data Sets</a>   

###JSON
JSON generally have same purpose as XML format.  
We recommend to use JavaScript API which give more flexibility at all.
```
//create json data
var json = {
    "chart": {
        "type": "pie",
        "data": [
            ["Product A", 1222],
            ["Product B", 2431],
            ["Product C", 3624],
            ["Product D", 5243],
            ["Product E", 8813]
        ]
    }
};

//create chart from json config              
var chart = anychart.fromJson(json);

//set container id for the chart
chart.container('container');

//initiate chart drawing
chart.draw();
```
See also:  
<a href="http://anychart.com/products/anychart7/api-reference?format=json">JSON Reference</a>  
<a href="./Working_with_Data/Using_XML_JSON_Schemas_for_Config_Validation">Using XML/JSON schema for config validation</a>  
<a href="./AnyChart_6.x_Migration_Guide">AnyChart 6.x migration guide</a>  
<a href="./Working_with_Data/XML_JSON_minification_recommendations.md">XML/JSON minification recommendations</a>  
<a href="./Working_with_Data/Using_Data_Sets">Using Data Sets</a>   

###CSV  
CSV is the best solution then you need to minimize data size of input data.
```
//create CSV string
var csvString = '2009-02-05,6764.81\n' +
      '2009-02-07,7056.48\n' +
      '2009-02-18,7180.97\n' +
      '2009-02-26,7269.06\n' +
      '2009-02-25,7349.58\n' +
      '2009-02-24,7115.34\n' +
      '2009-02-23,7365.99\n' +
      '2009-02-20,7461.49\n' +
      '2009-02-19,7555.23';
      
//create area chart      
var chart = anychart.areaChart();

//set container id for the chart
chart.container('container');

//create area series on passed csv data
chart.area(csvString);

//initiate chart drawing
chart.draw();
```
See also:  
<a href="./Working_with_Data/CSV_Settings">CSV Settings</a>  
<a href="./Working_with_Data/Using_Data_Sets">Using Data Sets</a>    

