# Server-Side Rendering

* [Overview](#overview)
* [Environment](#environment)
* [Command Line Usage](#command_line_usage)
* [Web Server Usage](#web_server_usage)
* [How to set the path to PhantomJS](#how_to_set_the_path_to_phantomjs)
* [How to set the path to Export Server](#how_to_set_the_path_to_export_server)
* [Contribution](#contribution)

## Overview

Server-side rendering is a tool that helps a lot in some cases: for example, when you've got an automated email system, and you need to include charts in letters; when you need charts in reports, which are generated on servers; when you need to show the charts on a Smart TV with a stripped version of a browser; etc. In such cases we offer you to use AnyChart Export Server.

AnyChart Export server is also used to provide Export chart to CSV, Excel, JSON and XML options.

## Environment

AnyChart Export Server uses [PhantomJS](http://phantomjs.org/) which emulates a browser on the server (WebKit), runs our charts in it, gets SVG and converts it into \*.PNG, \*.JPG or \*.PDF files, using [Apache Batik](https://xmlgraphics.apache.org/batik/). Export to Excel uses [Apache POI](https://poi.apache.org/).
Exporting to CSV, JSON and XML doesn't require PhantomJS, server serves only as an intermediary to allow file to be saved using a browser.
AnyChart Export Server itself is a jar-file that runs using Java so it works Windows, Linux, MacOS or any other OS where Java is available.
 
To run the AnyChart Export Server, do the following:
* Install PhantomJS: instructions and downloads at [http://phantomjs.org/](http://phantomjs.org/))
* Install Java: version above 6.0 - [https://java.com/en/download/](https://java.com/en/download/) )
* Download AnyChart Export Server [binary file](https://static.anychart.com/cdn/export-server/export-server.jar)

## Command Line Usage

If you want to use the AnyChart Export Server from the Command Line mode you have to set "cmd" (Command Line) as the first parameter, then define the path to the chart or insert the chart code as a string 
and then set the parameters of the image (dimensions, quality, extension and so on). You'll find the full list of  parameters below.

Sample command line:
```
java -jar anychart-export.jar cmd --script "var chart = anychart.line([1,2,5]); chart.container('container'); chart.draw();" --output-path YOUR_OUT_PATH
```
Full list of the parameters available:

<table width="490" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="190"><strong>Name</strong></th>
<th width="100"><strong>Options</strong></th>
<th width="200"><strong>Description</strong></th>
</tr>
<tr>
<td>--help</td>
<td></td>
<td>Shows help</td>
</tr>
<tr>
<td>--script</td>
<td></td>
<td>The chart code</td>
</tr>
<tr>
<td>--input-file</td>
<td></td>
<td>Set the path to the file with the chart code (script)</td>
</tr>
<tr>
<td>--output-file</td>
<td></td>
<td>Name for the output file (e.g.: "Chart_1" or "Chart_0.png")</td>
</tr>
<tr>
<td>--output-path</td>
<td></td>
<td>Set the path for the folder where the chart will be saved</td>
</tr>
<tr>
<td>--type</td>
<td>svg, png, jpg, pdf, csv, xlsx, xml, json</td>
<td>The file type</td>
</tr>
<tr>
<td>--container-id</td>
<td></td>
<td>The id for the container which will be generated in PhantomJS for the chart</td>
</tr>
<tr>
<td>--container-width</td>
<td></td>
<td>The container width. The image quality will be better if the container is larger than the image.</td>
</tr>
<tr>
<td>--container-height</td>
<td></td>
<td>The container height. The image quality will be better if the container is larger than the image.</td>
</tr>
<tr>
<td>--image-width</td>
<td></td>
<td>The image width. Doesn't work for \*.pdf</td>
</tr>
<tr>
<td>--image-height</td>
<td></td>
<td>The image height. Doesn't work for \*.pdf</td>
</tr>
<tr>
<td>--force-transparent-white</td>
<td></td>
<td>If the chart's background is originally transparent - makes it white</td>
</tr>
<tr>
<td>--jpg-quality</td>
<td>from 0 to 1</td>
<td>The image quality</td>
</tr>
<tr>
<td>--pdf-size</td>
<td></td>
<td>Define the \*.pdf document paper size</td>
</tr>
<tr>
<td>--pdf-x</td>
<td></td>
<td>X-coordinate of the chart in the \*.pdf document (in pixels)</td>
</tr>
<tr>
<td>--pdf-y</td>
<td></td>
<td>Y-coordinate of the chart in the \*.pdf document (in pixels)</td>
</tr>
<tr>
<td>--pdf-width</td>
<td></td>
<td>\*.pdf document height (in pixels)</td>
</tr>
<tr>
<td>--pdf-height</td>
<td></td>
<td>\*.pdf document height (in pixels)</td>
</tr>
<tr>
<td>--pdf-landscape</td>
<td>Portrait or Landscape</td>
<td>The \*.pdf document layout</td>
</tr>
</tbody>
</table>

## Web Server Usage 

AnyChart Export Server is also used when you use AnyChart [Export](Exports) methods and by default AnyChart component uses server hosted at https://www.anychart.com/. Although we do our best to keep AnyChart site up and running 24x7x365 - we *do not guarantee* export server availability.
If you want to have full control over the ability of the component to export images, or just don't want to use  AnyChart Server due to the security or accessibility concerns - just run Export Server in server mode on the server you control and trust.

To run Export server in server mode set "server" as the first parameter. Host and port params are optional.
The usual http web server is run, it recieves POST requests and sends the result as a base64-line or as a Byte Array with the "File Transfer" header.

*When you stop the server, you must stop the PhantomJS process too.*

The sample of server running:
```
java -jar anychart-export.jar server
```

The sample of a command written in console:
```
curl -X POST -H "Accept: application/json" --data "responseType=base64&dataType=script&data=var chart = anychart.line([1,2,5]); chart.container('container'); chart.draw();" localhost:2000/png
```
Full list of server parameters that can be set:

<table width="490" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="190"><strong>Name</strong></th>
<th width="100"><strong>Options</strong></th>
<th width="200"><strong>Description</strong></th>
</tr>
<tr>
<td>--host</td>
<td></td>
<td>The host where to run the server</td>
</tr>
<tr>
<td>--port</td>
<td></td>
<td>The port where to run the server</td>
</tr>
<tr>
<td>--allow-scripts-executing</td>
<td>y (yes), n (no)</td>
<td>A boolean parameter. If set in Y (e.g. as we do with https://export.anychart.com/) it might affect the security, so there's a flag which is N by default. </td>
</tr>
</tbody>
</table>

There's a list of URL's which export server responds to:
* /status
* /png
* /jpg
* /pdf
* /svg
* /csv
* /xlsx
* /xml
* /json

Request parameters (required):
* data - script or svg that should be transformed into a picture.
* data-type - a field that contains the information about the data, it might be "script" or "svg".
* response-type - a field that tells how to export the result (file or as base64)

Optional request parameters:
* file-name - file name
* width - picture width
* height - picture height 
* quality - picture quality
* force-transparent-white - make the background white or leave it transparent
* pdf-size - the \*.pdf-document sheet size
* pdf-x - x of the chart in the \*.pdf document 
* pdf-y - y of the chart in the \*.pdf document
* pdf-width - pdf width
* pdf-height -  pdf height
* landscape - the document orientation

## How to Set the Path to PhantomJS
As it was mentioned before, export server needs PhantomJS. If you have installed it somewhere different from the default or you've got Windows OS, check the place where Phantom JS is installed and set the right path for the export server. Like this:

```
java -Dphantomjs.binary.path=PATH_TO_YOUR_PHANTOMJS -jar
```

## How to Set the Path to Export Server 
If you have decided to use your own server, use the {api:anychart.exports#server}anychart.exports.server(){api} method and set the address of your server as a parameter:

```
anychart.exports.server("http://localhost:2000");
```

## Contribution 

If you've got any suggestions or ideas about export server work and improvements, welcome to our [open repository on github](https://github.com/AnyChart/export-server).
