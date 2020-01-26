var layer = new ol.layer.Tile({source: new ol.source.OSM()})
var myview = new ol.View({center: ol.proj.fromLonLat([77.5946,12.9716]),zoom: 13})
var map = new ol.Map({
  target: 'MyMap',
  layers: [layer],
  view: myview
});