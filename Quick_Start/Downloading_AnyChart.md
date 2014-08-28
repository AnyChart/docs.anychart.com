{:index 2}
Downloading AnyChart
====================
  
###Downloading
Compressed copies of the latest AnyChart 7.x for development and production can be downloaded for use on your server or local PC.  
To download these files, right-click the links below and select "Save as..." from the menu.
* Production edition - [anychart.min.js](http://cdn.anychart.com/js/7.1.0/anychart.min.js) <span style="color:#898989;">(145Kb gzip)</span>
* Development edition - [anychart.dev.min.js](http://cdn.anychart.com/js/7.1.0/anychart.dev.min.js) <span style="color:#898989;">(147Kb gzip)</span>  
* Binaries package - [anychart.zip](http://cdn.anychart.com/zip/7.1.0/anychart.zip) <span style="color:#898989;">(360Kb)</span>  


###Using AnyChart with a CDN
<a href="http://en.wikipedia.org/wiki/Content\_delivery\_network" target="_blank">CDNs</a> can offer a performance benefit by hosting AnyChart on servers spread across the globe.
This also offers an advantage that if the visitor to your web page has already downloaded a copy of AnyChart from the same CDN,
it won't have to be re-downloaded.  
  
 
To use AnyChart CDN, simply reference the file directly from http://cdn.anychart.com/ in the script tag:
```
    <script>
        <script src="//cdn.anychart.com/js/latest/anychart.min.js"></script>
    </script>
```

### Differences between production and developers editions
Developers edition contains functionality debug functionality, which may be useful to debug you code in old browser version (IE6 e.g).
Also it provide some log information in console, such as misconfiguration warnings. 

### Binaries package content
Binaries package contains all resources that you may need to work with AnyChary.  
See detailed structure below.  
* demos - Contains chart gallery adapted to work in offline
* js - JavaScript binary folder
** anychart.min.js - production edition
** anychart.dev.min.js - development edition
* index.html - Binaries package index
  
<!--
###Custom build of AnyChart
Using <a href="build.anychart.com">AnyChart Build Server</a>, you can create your custom build of AnyChart 7.x.<br>
Build Server provides a simple web interface where you can choose which charts types and features you want to include.<br>
You can read more about Build Server and custom builds in the <a href="./Environment/Build_Server">Build Server</a> documentation section.
-->
  
  

###Past Releases
Previous versions of AnyChart 7.x can be found and downloaded from <a href="http://cdn.anychart.com/" target="_blank">AnyChart CDN</a>.




