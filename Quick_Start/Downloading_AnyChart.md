{:index 2}
Downloading AnyChart
====================
  
###Downloading
Latest AnyChart 7.x files can be downloaded from these locations. To download these files, right-click the links below and select "Save as..." from the context menu.
* Production edition - [anychart.min.js](http://anychart.com/products/anychart7/download/?file=anychart.min.js&version=7.1.0) <span style="color:#898989;">(145Kb gzip)</span>
* Development edition - [anychart.dev.min.js](http://anychart.com/products/anychart7/download/?file=anychart.dev.min.js&version=7.1.0) <span style="color:#898989;">(147Kb gzip)</span>  
* Binaries package - [anychart.zip](http://anychart.com/products/anychart7/download/7.1.0/anychart.zip) <span style="color:#898989;">(360Kb)</span>  


###Using AnyChart with a CDN
<a href="http://en.wikipedia.org/wiki/Content\_delivery\_network" target="_blank">CDN</a> can offer a performance benefit by hosting AnyChart on servers spread across the globe. This also offers an advantage that if the visitor to your web page has already downloaded a copy of AnyChart from the same CDN, it won't have to be downloaded again.
  
 
To use AnyChart CDN, simply reference the file directly from http://cdn.anychart.com/ in the script tag:
```
    <script>
        <script src="//cdn.anychart.com/js/latest/anychart.min.js"></script>
    </script>
```

### Differences between production and developers editions
Developers edition contains  debug functionality, which may be useful to debug you code in old browser version (IE6 e.g). Also it provides some log information in console, such as misconfiguration warnings. 

### Binaries package content
Binaries package contains all resources you may need to work with AnyChary:  
* _demos/_ - chart gallery adapted to work offline,
* _js/_ - JavaScript binaries folder,
  * _anychart.min.js_ - production edition,
  * _anychart.dev.min.js_ - development edition,
* _index.html_ - binaries package index.
  
<!--
###Custom build of AnyChart
Using <a href="build.anychart.com">AnyChart Build Server</a>, you can create your custom build of AnyChart 7.x.<br>
Build Server provides a simple web interface where you can choose which charts types and features you want to include.<br>
You can read more about Build Server and custom builds in the <a href="./Environment/Build_Server">Build Server</a> documentation section.
-->
  
  

### Past Releases
Past versions of AnyChart 7.x can be found and downloaded from <a href="http://cdn.anychart.com/" target="_blank">AnyChart CDN</a>.




