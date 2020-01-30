var baselayer = new ol.layer.Tile({source: new ol.source.OSM()});
var marker = new ol.Feature({geometry: new ol.geom.Point(ol.proj.fromLonLat([77.585838,12.919452])),});
marker.setStyle(new ol.style.Style({
  image: new ol.style.Icon( ({src: 'mark.png'}))
}));
var vectorSource = new ol.source.Vector({features: [marker]});
var markerLayer = new ol.layer.Vector({source: vectorSource,});
var map = new ol.Map({
  target: 'MyMap',
  layers: [baselayer,markerLayer],
  view: new ol.View({
    center: ol.proj.fromLonLat([77.585838,12.919452]), zoom: 20 })
});