# Themes

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [International Symbols](#international_symbols)
* [HTML](#html)
  * [Supported tags](#supported_tags)
* [Text Formatting](#text_formatting)


To simplify the creation of chart AnyChart provides "AnyChart Themes" technique. Chart themes is a named preset for any visual settings.
  
  
In this tutorial we will explain what themes can be used for and how they can be used.
  
Themes Explained
  
The main idea of themes is to segregate chart settings and data section for easy changing and/or reuse in another charts that should look the same way.
  
For example you can create a them that defines that chart should be of column type, has a certain title, certain axes titles and scales. This type of chart will be widely used on your site, so you just store it in some js file and when you need such chart you just specify what them should be used - you don't need to configure chart again an copy-paste settings from one place to another.

Another example of themes use - you can create several themes that configure different chart look (colors, border, etc.), store them in a single file and then you can choose how chart should look like (depending on users choice, for example).

##How to create theme

The best way to create a theme is first to 



create a desired chart, then choose what parts of its settings should be included into template and then - move them there.

For example, you've took a sample Bar Chart from Bar Chart Tutorial, its code look like that:

```
  // data
  var data = anychart.data.set([
    ["Department Stores", 637166],
    ["Discount Stores", 721630],
    ["Men's/Women's Specialty Stores", 148662],
    ["All other outlets", 90000]
  ]);

  // chart type
  var chart = anychart.bar();

  // set title
  chart.title("Bar Chart");

  // set axes titles
  var xAxis = chart.xAxis();
  xAxis.title("Retail Channel");
  var yAxis = chart.yAxis();
  yAxis.title("Sales");

  // set data
  chart.bar(data);
```

Suppose you will create such charts many times, and all of them will have the same axes titles, will have no chart title and they should be of bar type, so you want to move to the template these settings:

```
  chart.title("Bar Chart");
  var xAxis = chart.xAxis();
  xAxis.title("Retail Channel");v
  var yAxis = chart.yAxis();
  yAxis.title("Sales");
```

So, the theme should look like that (we will name it "Custom Theme"):

```
  // create variable for custom theme
  var customTheme = {
    // define settings for bsr charts
    "bar": {
      // set chart title
      "title": "Bar Chart",
      // settings for default x axis
      "defaultXAxisSettings": {
        // set x axis title
        "title": "Retail Channel"
      },
      // settings for default y axis
      "defaultYAxisSettings": {
        // set axis name
        "title": 'Sales'
      }
    }
  };
```

Now, when template is ready we will learn where we can store them and how to apply them.


##Internal Templates

You can store your theme within chart code or in a reachable object:

```
  // create variable for custom theme
  var customTheme = {
    // define settings for bsr charts
    "bar": {
      // set chart title
      "title": "Bar Chart",
      // settings for default x axis
      "defaultXAxisSettings": {
        // set x axis title
        "title": "Retail Channel"
      },
      // settings for default y axis
      "defaultYAxisSettings": {
        // set axis name
        "title": 'Sales'
      }
    }
  };
  
  // data
  var data = anychart.data.set([
    ["Department Stores", 637166],
    ["Discount Stores", 721630],
    ["Men's/Women's Specialty Stores", 148662],
    ["All other outlets", 90000]
  ]);
  
  anychart.theme(customTheme);
  
  var chart = anychart.bar();
  chart.bar(data);
  
  // draw chart
  chart.container("container");
  chart.draw();
```

Sample chart using internal theme, click to view live sample and JS settings:

{sample}AS\_Themes\_01{sample}

##External Themes

Next, you can create a file with templates and use it to store settings for the chart.

Do not forget to set the link to the file with theme into the <head> tag of your page

```

```

XML Syntax
XML Code
Plain code
01
<templates>
02
  <template name="No Title #1">
03
    <chart plot_type="CategorizedHorizontal">
04
      <chart_settings>
05
        <title enabled="false" />
06
      </chart_settings>
07
    </chart>
08
  </template>
09
</templates>
Sample chart using external template, click to view live sample and XML settings:

Live Sample:  External Template Sample Gauge 2

to top

How to apply Template

If you want to apply template to the chart all you have to do is to set its name in template attribute of <chart> node:

XML Syntax
XML Code
Plain code
01
<?xml version="1.0" encoding="UTF-8"?>
02
<anychart>
03
  <charts>
04
    <chart template="Bar Chart With No Title #1">
05
      <data>
06
        <series name="Year 2003" type="Bar">
07
          <point name="Department Stores" y="637166" />
08
          <point name="Discount Stores" y="721630" />
09
          <point name="Men's/Women's Specialty Stores" y="148662" />
10
          <point name="Juvenile Specialty Stores" y="78662" />
11
          <point name="All other outlets" y="90000" />
12
        </series>
13
      </data>
14
    </chart>
15
  </charts>
16
</anychart>
Internal Templates: if template is specified within an XML file in <templates> node - you just specify a name:

XML Syntax
XML Code
Plain code
01
<?xml version="1.0" encoding="UTF-8"?>
02
<anychart>
03
  <templates>
04
    <template name="No Title #1">
05
      <chart plot_type="CategorizedHorizontal">
06
        <chart_settings>
07
          <title enabled="false" />
08
        </chart_settings>
09
      </chart>
10
    </template>
11
  </templates>
12
  <charts>
13
    <chart template="No Title #1">
14
      <data>
15
        <series name="Year 2003" type="Bar">
16
          <point name="Department Stores" y="637166" />
17
          <point name="Discount Stores" y="721630" />
18
          <point name="Men's/Women's Specialty Stores" y="148662" />
19
          <point name="Juvenile Specialty Stores" y="78662" />
20
          <point name="All other outlets" y="90000" />
21
        </series>
22
      </data>
23
    </chart>
24
  </charts>
25
</anychart>
External Templates: if template is specified in an external XML file - you should set its name (with path, if needed)in path attribute of <templates> node:

XML Syntax
XML Code
Plain code
01
<?xml version="1.0" encoding="UTF-8"?>
02
<anychart>
03
  <templates path="templates.xml" />
04
  <charts>
05
    <chart template="No Title #1">
06
      <data>
07
        <series name="Year 2003" type="Bar">
08
          <point name="Department Stores" y="637166" />
09
          <point name="Discount Stores" y="721630" />
10
          <point name="Men's/Women's Specialty Stores" y="148662" />
11
          <point name="Juvenile Specialty Stores" y="78662" />
12
          <point name="All other outlets" y="90000" />
13
        </series>
14
      </data>
15
    </chart>
16
  </charts>
17
</anychart>
to top

Templates Use in Dashboard Mode

Important note about dashboard mode: all templates for all the charts in dashboard mode will be taken from the path specified in <templates path=""> in a file where dashboard is defined, all paths from chart source files will be ignored.

You can find a sample of templates usage in dashboards in Dashboard Creation Tutorial.

Templates to modify Series Node

You can change certina series setting using templates if you set the same name of the series both in chart and template.

In the sample below chart contain two series: Test1 and Test2, by default they are colored in different colors from the palette and attached to main y axis:

Live Sample:  Internal Template Series Settings Sample 0

Now we create template that changes the type and attaches Test2 series to extra y axis:

XML Syntax
XML Code
Plain code
01
<templates>
02
  <template name="myTemplate">
03
    <chart>
04
      <data>
05
        <series name="Test1" type="Line" color="Red" />
06
        <series name="Test2" y_axis="y2" palette="Default" />
07
      </data>
08
      <chart_settings>
09
        <axes>
10
          <extra>
11
            <y_axis name="y2" enabled="true">
12
              <scale inverted="true" />
13
            </y_axis>
14
          </extra>
15
        </axes>
16
      </chart_settings>
17
    </chart>
18
  </template>
19
</templates>
As the result - series are modified:

Live Sample:  Internal Template Series Settings Sample

to top

Current Page Online URL: Chart Templates Tutorial