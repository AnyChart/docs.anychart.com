# Server-Side Rendering

## Overview

Server-side rendering is a tool that is very helpful in many cases: when you have an automated email system, and you need to include charts in letters; when you need charts in reports that are generated on servers; when you need to show charts on a Smart TV with a stripped version of a browser; and so on. In such cases, we suggest that you use AnyChart Export Server.

AnyChart Export Server is also used to provide chart export to PNG, JPG, PDF, SVG, CSV, Excel, JSON, and XML.

## Environment

AnyChart Export Server uses [PhantomJS](http://phantomjs.org/), which emulates a browser on the server (WebKit), runs our charts in it, gets SVG, and converts it into \*.PNG, \*.JPG, or \*.PDF files. If you need to take a screenshot of a page on the Internet or in a local HTML file, you can just use Chrome or Firefox in the headless mode without the AnyChart Export Server. Export to Excel uses [Apache POI](https://poi.apache.org/). Exporting to CSV, JSON, and XML does not require PhantomJS: the server acts only as an intermediary allowing the file to be saved using a browser.

AnyChart Export Server is a Java application (JAR file) that runs using Java, so it works on Windows, Linux, MacOS, or any other OS where Java is available.
 
To run the AnyChart Export Server, do the following:
1. Download PhantomJS from the [PhantomJS official site](http://phantomjs.org/) and make sure PhantomJS binary is in the PATH.
2. Install Firefox browser (version 56.0 and above) and install `geckodriver`:
  * `brew install geckodriver` for Mac users
  * or download it from the [geckodriver official site](https://github.com/mozilla/geckodriver/releases) and add it to the PATH.
3. Alternatively, install Chrome or Chromium browser (version 60.0 and above) and install `chromedriver`:
  * `brew install chromedriver` for Mac users
  * or download it from the [chromedriver official site](https://sites.google.com/a/chromium.org/chromedriver/downloads) and add it to the PATH.
3. Install Java: version above 6, 7, 8 – [https://java.com/en/download/](https://java.com/en/download/)).
4. Download [AnyChart Export Server binary file](https://static.anychart.com/cdn/export-server/export-server.jar).

## Path

### PhantomJS
AnyChart Export Server needs PhantomJS. If its location is different from the default one, or you are installing Export Server on Windows, check the location where Phantom JS is installed and set the right path for the server:

```
java -Dphantomjs.binary.path=PATH_TO_YOUR_PHANTOMJS -jar
```

###  Export Server 
If you have installed your own server and want AnyChart charts to use it for exports, use the {api:anychart.exports#server}anychart.exports.server(){api} method in you JavaScript code and set the address of your server as a parameter:

```
anychart.exports.server("http://localhost:2000");
```

## Parameters

The following arguments work both in [Web Server Mode](#web_server_mode), and [Command Line Mode](#command_line_mode):

<table>
<tbody>
<tr>
<th width='200'>Name</th>
<th>Options</th>
<th>Description</th>
</tr>
<tr>
<td>--config PATH<br>-C</td>
<td></td>
<td>Path to config</td>
</tr>
<tr>
<td>--engine BROWSER<br>-e</td>
<td>phantom, chrome or firefox</td>
<td>Headless browser</td>
</tr>
<tr>
<td>--help<br>-h</td>
<td></td>
<td>Print help</td>
</tr>
<tr>
<td>--version<br>-v</td>
<td></td>
<td>Print version, can be used without action</td>
</tr>
</tbody>
</table>

## Command Line Mode

If you want to use AnyChart Export Server in Command Line mode, you should set `cmd` (Command Line) as the first parameter. Then define the path to the chart or insert the chart code as a string and set the parameters of the image: dimensions, quality, extension, and so on (see the list below).

A sample command line:

```
java -jar anychart-export.jar cmd --script "var chart = anychart.line([1,2,5]); chart.container('container'); chart.draw();" --output-path YOUR_OUT_PATH
```

The full list of the parameters available:

<table>
<tbody>
<tr>
<th width='200'>Name</th>
<th>Options</th>
<th>Description</th>
</tr>
<tr>
<td>--script<br>-s</td>
<td></td>
<td>The chart code</td>
</tr>
<tr>
<td>--input-file<br>-i</td>
<td></td>
<td>Set the path to the file with the chart code (script)</td>
</tr>
<tr>
<td>--svg SVG</td>
<td></td>
<td>SVG string to Execute</td>
</tr>
<tr>
<td>--svg-file SVG_FILE</td>
<td></td>
<td>SVG file to Execute</td>
</tr>
<tr>
<td>--html-file HTML_FILE</td>
<td></td>
<td>The HTML page file to Execute (consider using just Chrome or Firefox binary in the headless mode instead)</td>
</tr>
<tr>
<td>--output-file<br>-o</td>
<td></td>
<td>The name for the output file (e.g.: "Chart_1" or "Chart_0.png")</td>
</tr>
<tr>
<td>--output-path<br>-p</td>
<td></td>
<td>Set the path for the folder where the chart will be saved</td>
</tr>
<tr>
<td>--type<br>-t</td>
<td>svg, png, jpg, pdf, csv, xlsx, xml, json</td>
<td>The file type</td>
</tr>
<tr>
<td>--container-id<br>-c</td>
<td></td>
<td>The id for the container which will be generated in PhantomJS for the chart</td>
</tr>
<tr>
<td>--container-width<br>-W</td>
<td></td>
<td>The container width. The image quality will be better if the container is larger than the image.</td>
</tr>
<tr>
<td>--container-height<br>-L</td>
<td></td>
<td>The container height. The image quality will be better if the container is larger than the image.</td>
</tr>
<tr>
<th colspan=3>Export Images Parameters</th>
</tr>
<tr>
<td>--image-width<br>-w</td>
<td></td>
<td>The image width. Doesn't work for \*.pdf. Ignored when container-width is also set up – container-width will be used instead.</td>
</tr>
<tr>
<td>--image-height<br>-l</td>
<td></td>
<td>The image height. Doesn't work for \*.pdf. Ignored when container-height is also set up – container-height will be used instead.</td>
</tr>
<tr>
<td>--force-transparent-white<br>-f</td>
<td></td>
<td>Make the chart background white if it is originally transparent</td>
</tr>
<tr>
<td>--jpg-quality<br>-q</td>
<td>from 0 to 1</td>
<td>The image quality</td>
</tr>
<tr>
<th colspan=3>Export PDF Parameters</th>
</tr>
<tr>
<td>--pdf-size<br>-S</td>
<td></td>
<td>Define the \*.pdf document paper size</td>
</tr>
<tr>
<td>--pdf-x<br>-x</td>
<td></td>
<td>The X-coordinate of the chart in the \*.pdf document (in pixels)</td>
</tr>
<tr>
<td>--pdf-y<br>-y</td>
<td></td>
<td>The Y-coordinate of the chart in the \*.pdf document (in pixels)</td>
</tr>
<tr>
<td>--pdf-width<br>-X</td>
<td></td>
<td>The \*.pdf document height (in pixels)</td>
</tr>
<tr>
<td>--pdf-height<br>-Y</td>
<td></td>
<td>The \*.pdf document height (in pixels)</td>
</tr>
<tr>
<td>--pdf-landscape<br>-O</td>
<td>Portrait or Landscape</td>
<td>The \*.pdf document layout</td>
</tr>
</tbody>
</table>

## Web Server Mode 

AnyChart Export Server is also used when you use AnyChart [Export](Exports) methods, and by default, AnyChart uses the server hosted at https://www.anychart.com/. Although we do our best to keep AnyChart site up and running 24x7x365, we *do not guarantee* the availability of the export server.

If you want to have full control over the ability of the component to export images or do not want to use AnyChart Server due to security or accessibility concerns, just run Export Server in Web Server mode on the server you control and trust.

To run Export Server in Web Server mode, set `server` as the first parameter. The host and port parameters are optional. In this mode, a usual HTTP web server is run. It receives POST requests and sends the result as a base64 line or as a Byte Array with the "File Transfer" header.

*When you stop the server, you must stop the PhantomJS process too.*

A sample of server running:

```
java -jar anychart-export.jar server
```

A sample of a command in the console:

```
curl -X POST -H "Accept: application/json" --data "responseType=base64&dataType=script&data=var chart = anychart.line([1,2,5]); chart.container('container'); chart.draw();" localhost:2000/png
```

The full list of the server parameters:

<table>
<tbody>
<tr>
<th width='200'>Name</th>
<th>Options</th>
<th>Description</th>
</tr>
<tr>
<td>--host<br>-H</td>
<td></td>
<td>The host where the server will be run</td>
</tr>
<tr>
<td>--port<br>-P</td>
<td></td>
<td>The port where the server will be run</td>
</tr>
<tr>
<td>--log FILE<br>-F</td>
<td></td>
<td>The file for server logging</td>
</tr>
<tr>
<td>--allow-scripts-executing</td>
<td>y (yes), n (no)</td>
<td>A boolean parameter. Allows executing violent scripts in phantom js. If set to Y (e.g., as we do with https://export.anychart.com/), it might affect the security, so there is a flag, which is N by default.</td>
</tr>
<tr>
<th colspan=3>Save images or \*.pdf files to a folder</th>
</tr>
<tr>
<td>--saving-folder PATH<br>-z</td>
<td></td>
<td>The path to save images or \*.pdf files</td>
</tr>
<tr>
<td>--saving-url-prefix PREFIX<br>-Z</td>
<td></td>
<td>Return the URL prefix upon request</td>
</tr>
<tr>
<th colspan=3>Sharing</th>
</tr>
<tr>
<td>--sharing-port PORT</td>
<td></td>
<td>Share mysql database port</td>
</tr>
<tr>
<td>--sharing-db NAME</td>
<td></td>
<td>Share mysql database name</td>
</tr>
<tr>
<td>--sharing-user USER</td>
<td></td>
<td>Share mysql database user</td>
</tr>
<tr>
<td>--sharing-password PASSWORD</td>
<td></td>
<td>Share mysql database password</td>
</tr>
<tr>
<th colspan=3>Twitter</th>
</tr>
<tr>
<td>--twitter-key KEY</td>
<td></td>
<td>Twitter application key</td>
</tr>
<tr>
<td>--twitter-secret SECRET</td>
<td></td>
<td>Twitter application secret</td>
</tr>
<tr>
<td>--twitter-callback</td>
<td></td>
<td>Twitter application callback URL</td>
</tr>
</tbody>
</table>

## Social Networks Sharing
AnyChart Export Server provides an ability to share chart images in social networks, such as Facebook,
LinkedIn, Pinterest and Twitter.

When you use the export server on your own server and want sharing to work properly, you should
set up `--saving-folder` and `--saving-prefix`. The first parameter is the path to the folder where images will be stored. The second parameter is the URL prefix which will be concatenated with the shared image name and returned to the user. You should provide the access to the shared image through that URL by setting up Nginx, for example.

### Facebook, LinkedIn, Pinterest
Sharing on Facebook, LinkedIn, and Pinterest is implemented with the help of the commands for saving images. 
These social networks get the prepared picture via the link and just allow users to post it on the page.

### Twitter
Sharing images on Twitter is implemented with the AnyChart Twitter app. It requires MySQL database to be set up and uses three types of requests.

*/sharing/twitter*
First of all, the user sends a request to `/sharing/twitter` that contains SVG or a script generating the image and posting in on the page. The request should contain the same parameters as a request to `/png` URL does. There are two options here: the user is authorized in the AnyChart Twitter application or not.

If the user is not authorized, the Twitter Authorization dialog is displayed. The user should confirm that he or she gives the app the rights to post the image. After that, the user will be redirected to the `/sharing/twitter_oauth` callback.

*/sharing/twitter\_oauth*
This request accepts the `oauth_token` and `oauth_verifier` parameters. Read more: [OAuth (Wikipedia)](https://en.wikipedia.org/wiki/OAuth).

In the handler of `/sharing/twitter_oauth` request, the export server gets such params as `oauth_token`, `oauth_token_secret`, `user_id`, `screen_name`, `image_url` (user picture), and `user_name` and saves them to the MySQL database. After that, the posting images dialog window will be displayed.

If the user is already authorized in the app, the posting dialog will be displayed immediately. When the user confirms to post the image and clicks the TWEET button, there will be a request to `/sharing/twitter_confirm`.

*/sharing/twitter\_confirm*
This request should contain only Twitter `message` parameter – a string of no more than 140 characters.
In the handler of `/sharing/twitter_confirm` request, the export server uploads the shared image with Twitter API and posts a new tweet with that image.

Note: the `/sharing/twitter_oauth` and `/sharing/twitter_confirm` requests are used inside Export Server,
which means you do not need to send anything by yourself there.

If you want Twitter sharing to work through your server, you should:
1. Create your own Twitter App and provide `twitter_key`, `twitter_secret` and `twitter_callback` 
(last path of which is always `/sharing/twitter_oauth`) to the Export Server 
2. Setup a MySQL database for Twitter sharing using [SQL scheme](https://github.com/AnyChart/export-server/blob/master/src/sql/scheme.sql)
3. Setup a Twitter sharing URL separately when setting the `anychart.export.server()` URL:

```javascript
anychart.exports.twitter(
    "http://your.export.server.url/sharing/twitter", 
    "1000",    
    "500"
);
```
For more details check out {api:anychart.exports}AnyChart Exports API{api}.

## Requests 

AnyChart Export Server supports the following requests:

<table>
<tbody>
<tr>
<th width='200'>URL</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>/status</td>
<td>GET or POST</td>
<td>Server status</td>
</tr>
<tr>
<td>/png</td>
<td>POST</td>
<td>Export to PNG</td>
</tr>
<tr>
<td>/jpg</td>
<td>POST</td>
<td>Export to JPG</td>
</tr>
<tr>
<td>/svg</td>
<td>POST</td>
<td>Export to SVG</td>
</tr>
<tr>
<td>/pdf</td>
<td>POST</td>
<td>Export to PDF</td>
</tr>
<tr>
<td>/xml</td>
<td>POST</td>
<td>Export to XML</td>
</tr>
<tr>
<td>/json</td>
<td>POST</td>
<td>Export to JSON</td>
</tr>
<tr>
<td>/csv</td>
<td>POST</td>
<td>Export to CSV</td>
</tr>
<tr>
<td>/xlsx</td>
<td>POST</td>
<td>Export to XLSX</td>
</tr>
<tr>
<td>/sharing/twitter</td>
<td>POST</td>
<td>Twitter Sharing request</td>
</tr>
<tr>
<td>/sharing/twitter_oauth</td>
<td>GET</td>
<td>Twitter Sharing OAuth callback</td>
</tr>
<tr>
<td>/sharing/twitter_confirm</td>
<td>POST</td>
<td>Twitter Sharing posting confirmation</td>
</tr>
</tbody>
</table>

Typical Export and Twitter Sharing request contains the params listed below:

<table>
<tbody>
<tr>
<th width='200'>Parameter</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td>data</td>
<td>required</td>
<td>-</td>
<td>The script or SVG that will be transformed into a picture</td>
</tr>
<tr>
<td>data-type</td>
<td>required</td>
<td>-</td>
<td>A field that contains the information about the data. It might be "script" or "svg".</td>
</tr>
<tr>
<td>response-type</td>
<td>required</td>
<td>-</td>
<td>A field that tells how to export the result (as a file or as base64).</td>
</tr>
<tr>
<td>file-name</td>
<td>optional</td>
<td>anychart</td>
<td>The file name</td>
</tr>
<tr>
<td>save</td>
<td>optional</td>
<td>-</td>
<td>Return the URL of the saved image</td>
</tr>
<tr>
<td>container-id</td>
<td>optional</td>
<td>container</td>
<td>div container id</td>
</tr>
<tr>
<td>container-width</td>
<td>optional</td>
<td>100%</td>
<td>div container width</td>
</tr>
<tr>
<td>container-height</td>
<td>optional</td>
<td>100%</td>
<td>div container height</td>
</tr>
<tr>
<td>width</td>
<td>optional</td>
<td>1024</td>
<td>The image width</td>
</tr>
<tr>
<td>height</td>
<td>optional</td>
<td>800</td>
<td>The image height</td>
</tr>
<tr>
<td>quality</td>
<td>optional</td>
<td>1</td>
<td>The quality of the picture</td>
</tr>
<tr>
<td>force-transparent-white</td>
<td>optional</td>
<td>false</td>
<td>Make the background white or leave it transparent</td>
</tr>
<tr>
<td>pdf-size</td>
<td>optional</td>
<td>-</td>
<td>The sheet size of the \*.pdf document</td>
</tr>
<tr>
<td>pdf-x</td>
<td>optional</td>
<td>0</td>
<td>The X-coordinate of the chart in the \*.pdf document</td>
</tr>
<tr>
<td>pdf-y</td>
<td>optional</td>
<td>0</td>
<td>The X-coordinate of the chart in the \*.pdf document</td>
</tr>
<tr>
<td>pdf-width</td>
<td>optional</td>
<td>595</td>
<td>The width of \*.pdf</td>
</tr>
<tr>
<td>pdf-height</td>
<td>optional</td>
<td>842</td>
<td>The height of \*.pdf</td>
</tr>
<tr>
<td>landscape</td>
<td>optional</td>
<td>false</td>
<td>The document orientation</td>
</tr>
</tbody>
</table>

## Config File Format

AnyChart Export Server provides an ability to pass all parameters within a config file using [TOML](https://github.com/toml-lang/toml) format:

```
# can be "server" or "cmd"
mode = "server"
engine = "firefox"

[server]
port = 80
host = "0.0.0.0"
allow-scripts-executing = false
log = "/path/to/log/file"

[server.images]
# folder to save images
folder = "/export-server/shared"
# prefix which will be returned when saving image
prefix = "http://static.example.com/shared/"

[server.sharing]
# MySQL settings
port = 3306
db = "shared_db"
user = "export_server_user"
password = "export_server_password"

[server.sharing.twitter]
# settings from twitter app settings for sharing in Twitter
key = "key"
secret = "secret"
callback = "http://example.com/sharing/twitter_oauth"

[cmd] 
# here you can pass cmd options for mode = "cmd"
script = "var chart = anychart.line([1,2,5]); chart.container('container'); chart.draw();" 
output-file = "anychart"
output-path = ""
container-width = "1024px"
container-height = "800px"
container-id = "container"
input-file = "file.name"
type = "png"
image-width = 1024
image-height = 800
force-transparent-white = false
pdf-size = "a4"
pdf-x = 0
pdf-y = 0
pdf-width  = 500
pdf-height = 500
jpg-quality = 1
```

You can pass a config file witn `-C` option, e.g.:

```
java -jar export-server.jar -C settings.toml
```
 
It should be noted here that if the same parameters are set both in the config file and in the command line, the former will be ignored because the command line has a higher priority.

## Contribution 

If you have any suggestions or ideas about Export Server work and improvements, welcome to [AnyChart Export Server repository on GitHub](https://github.com/AnyChart/export-server).