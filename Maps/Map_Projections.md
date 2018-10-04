{:index 13}
# Map Projections

##Overview

A map projection is any method used in cartography to represent the two-dimensional curved surface of the earth or other body on a plane. The term "projection" here refers to any function defined on the earth's surface and with values on the plane, and not necessarily a geometric projection.  
  
Flat maps could not exist without map projections, because a sphere cannot be laid flat over a plane without distortions.  
  
Map projections can be constructed to preserve one or some of map regions properties (area, shape, direction, bearing, distance, scale), though not all of them simultaneously. Each projection preserves or compromises or approximates basic metric properties in different ways. The purpose of the map, then, determines which projection should form the base for the map. Since many purposes exist for maps, so do many projections exist upon which to construct them.  
  
AnyChart allows to display any map in several projections, below you will find the list of all available projections with map samples.  
  
Depending on your visualization task you can choose what projection to use in your project or give end-user an ability to swap projections in real-time. 

*Important:* not only you can change the projection of a map, you can also change projection of any selected region (feature) using {api:anychart.charts.Map#featureCrs}featureCrs(){api} method, see [Changing Region projection](#changing_region_projection) section for this. This feature can come in particularly handy when you need to create a custom map with small regions or a region located in high/low latitudes.

##Setting Map Projection

To set map projection you should set its type using the {api:anychart.charts.Map#crs}crs(){api} method:

```
var map = anychart.map();
map.crs("august");
```

Snippet above shows a string as a parameter for {api:anychart.charts.Map#crs}crs(){api} method. Possible string values for the projection are listed in {api:anychart.enums.MapProjections}anychart.enums.MapProjections{api} enum.

## Available Projections

As far as AnyChart constantly implements new features to improves AnyChart charting library, all new projections in further versions would be added {api:anychart.enums.MapProjections}MapProjections enum{api} along with existing ones.

The table below lists all available projection types, samples can be found after the table.
<table>
<tbody><tr>
<th width="116">Type</th>
<th >Description</th>
</tr>
<tr>
<td>[Aitoff](#aitoff)</td>
<td>The Aitoff projection is a modified azimuthal map projection proposed by David A. Aitoff in 1889. Based on the equatorial form of the azimuthal equidistant projection, Aitoff first halves longitudes, then projects according to the azimuthal equidistant, and then stretches the result horizontally into a 2:1 ellipse to compensate for having halved the longitudes.</td>
</tr>
<tr>
<td>[August](#august)</td>
<td>The projection designed by Friedrich August and co-developed by Bellermann was published in 1874 as an alternative to Eisenlohr's design: the range of scale distortion is wider (1 : 8) and not constant at the boundary meridians, but its construction is somewhat simpler. A world map is bounded by an epicycloid, the shape defined by a point on a circle rolling without sliding around another, fixed, circle.</td>
</tr>
<tr>
<td>[Bonne](#bonne)</td>
<td>A Bonne projection is a pseudoconical equal-area map projection, sometimes called a dépôt de la guerre or a Sylvanus projection. It is named after Rigobert Bonne (1727-1795), who used this projection considerably.</td>
</tr>
<tr>
<td>[Eckert1](#eckert1)</td>
<td>Pseudocylindrical, 
neither conformal or equal-area, devoloped by Max Eckert (-Greifendorff); in 1906.</td>
</tr>
<tr>
<td>[Eckert3](#eckert3)</td>
<td>Pseudocylindrical, neither conformal or equal-area, developed by 
Max Eckert (-Greifendorff) in 1906.</td>
</tr>
<tr>
<td>[Equirectangular](#equirectangular)</td>
<td>The equirectangular projection (also called the equidistant cylindrical projection, geographic projection, or carte parallelogrammatique projection or CPP) is a very simple map projection attributed to Marinus of Tyre, who Ptolemy claims invented the projection about 100 AD. The projection maps meridians to equally spaced vertical straight lines, and parallels to equally spaced horizontal straight lines.</td>
</tr>
<tr>
<td>[Fahey](#fahey)</td>
<td>Fahey Modified Gall, pseudocylindrical, neither conformal or equal-area, developed by Lawrence Fahey in 1975.</td>
</tr>
<tr>
<td>[Hammer](#hammer)</td>
<td>The Hammer projection (otherwise known as the Hammer-Aitoff projection) produces an equal area map of the entire globe, it is useful for visual representations of geographically related statistical data and distributions. Astronomers use this projection to show the entire celestial sphere on one map in a way that accurately depicts the relative distribution of the stars in different regions of the sky.</td>
</tr>
<tr>
<td>[Mercator](#mercator)</td>
<td>The Mercator projection is a cylindrical map projection presented by the Flemish geographer and cartographer Gerardus Mercator, in 1569. It became the standard map projection for nautical purposes because of its ability to represent lines of constant true bearing or true course, known as rhumb lines, as straight line segments. While the direction and shapes are accurate on a Mercator projection, it distorts the size.</td>
</tr>
<tr>
<td>[Orthographic](#orthographic)</td>
<td>Orthographic projection is a map projection of cartography. Like the Stereographic projection and Gnomonic projection, Orthographic projection is a perspective (or azimuthal) projection, in which the sphere is projected onto a tangent plane or secant plane. The point of perspective for the Orthographic projection is at infinite distance. It depicts a hemisphere of the globe as it appears from outer space. The shapes and areas are distorted, particularly near the edges, but distances are preserved along parallels.</td>
</tr>
<tr>
<td>[Robinson](#robinson)</td>
<td>A pseudo-cylindrical projection by reason of its straight parallels, along each of which the meridians are spaced evenly. The central meridian is also a straight line; other meridians are curved. Developed by Dr. Arthur H. Robinson in 1963.</td>
</tr>
<tr>
<td>[Wagner6](#wagner6)</td>
<td>A pseudocylindrical projection, neither conformal or equal-area, developed by 
K. H. Wagner in 1932.</td>
</tr>
<tr>
<td>[WSG84](#wsg84)</td>
<td>The World Geodetic System (WGS) is a standard for use in cartography, geodesy, and navigation including by GPS. It comprises a standard coordinate system for the Earth, a standard spheroidal reference surface (the datum or reference ellipsoid) for raw altitude data, and a gravitational equipotential surface (the geoid) that defines the nominal sea level.</td>
</tr>
</tbody></table>

###Aitoff

World map in Aitoff projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("aitoff");
```

{sample}Maps\_Projections\_01{sample}

###August

World map in August projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("august");
```

{sample}Maps\_Projections\_02{sample}

###Bonne

World map in August projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("bonne");
```

{sample}Maps\_Projections\_03{sample}

###Eckert1

World map in Eckert1 projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("eckert1");
```

{sample}Maps\_Projections\_04{sample}

###Eckert3

World map in Eckert3 projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("eckert3");
```

{sample}Maps\_Projections\_05{sample}

###Equirectangular

World map in Equirectangular projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("equirectangular");
```

{sample}Maps\_Projections\_06{sample}

###Fahey

World map in Fahey projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("fahey");
```

{sample}Maps\_Projections\_07{sample}

###Hammer

World map in Hammer projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("hammer");
```

{sample}Maps\_Projections\_08{sample}

###Mercator

World map in Mercator projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("mercator");
```

{sample}Maps\_Projections\_09{sample}

###Orthographic

World map in Orthographic projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("orthographic");
```

{sample}Maps\_Projections\_10{sample}

###Robinson

World map in Robinson projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("robinson");
```

{sample}Maps\_Projections\_11{sample}

###Wagner6

World map in Wagner6 projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("wagner6");
```

{sample}Maps\_Projections\_12{sample}

###WSG84

World map in WSG84 projection:

```
var map = anychart.map();
map.geoData(anychart.maps.world_source);
map.crs("wsg84");
```

{sample}Maps\_Projections\_13{sample}


## Changing region projection

All samples above show how to change projection of a map, but there is also an option to change projection of any selected region or regions using {api:anychart.charts.Map#featureCrs}featureCrs(){api} method. This feature can come in particularly handy when you need to create a custom map with small regions or a region located in high/low latitudes. Usually this method is used along with {api:anychart.charts.Map#featureScaleFactor}featureScaleFactor(){api} and {api:anychart.charts.Map#featureTranslation}featureTranslation(){api}. For the moment regions projection settings can be set only using [PROJ.4 strings](https://www.nceas.ucsb.edu/scicomp/recipes/projections) (this will be improved in future versions on AnyMap), if you need assistance with such settings, do not hesitate to contact [AnyChart Support](http://support.anychart.com/).

### Using PROJ4.JS

Proj4 is a JavaScript library to transform coordinates from one coordinate system to another, including datum transformations. It is necessary to reference Proj4 if the map uses traditional coordinates for setting the position of any component of the map such as labels, bubbles, etc. Also proj4 is essential to be added when the map uses some projection. Reference it with the `<script>` tag:

```
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.15/proj4.js" data-export="true"></script>
</head>
```