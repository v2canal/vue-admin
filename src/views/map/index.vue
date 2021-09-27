<template>
	<div class="map-container">
		<div id="map" ref="rootmap"></div>
	</div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map'
import View from 'ol/View'
import { Tile as TileLayer, Image as ImageLayer } from 'ol/layer'
import { OSM, ImageWMS } from 'ol/source'

export default {

	name: 'AppMain',
	mounted() {
		let url = 'http://39.101.162.45:9001/geoserver/china_hundred_city/wms'
		// 	let back = `
		// http://39.101.162.45:9001/geoserver/wms?
		// LAYERS=china_hundred_city%3Abou1_4l
		// &STYLES=
		// &FORMAT=image%2Fpng&SERVICE=WMS
		// &VERSION=1.1.0
		// &REQUEST=GetMap&SRS=EPSG%3A4326
		// &bbox=70.0807800292969,3.15773010253906,135.30973815918,53.8086738586426
		// &WIDTH=579
		// &HEIGHT=330
		// `
		this.map = new Map({
			target: "map",
			layers: [
				new TileLayer({
					source: new OSM()   //这个会出现底图
				}),
				new ImageLayer({     //TileLayer、ImageLayer
					source: new ImageWMS({    //TileWMS、ImageWMS
						ratio: 1,
						params: {
							// 'FORMAT': 'image/jpeg',   //如果加了这行，地图底图将会被遮住
							'VERSION': '1.1.0',
							'LAYERS': 'china_hundred_city:bou1_4l,china_hundred_city:hundred_city',
							'STYLES': '',
							'tiled': 'true',
							'srs': 'EPSG:4326',
							'BBOX': '70.0807800292969,3.15773010253906,135.30973815918,53.8086738586426'
						},
						url: url
					})

				})
			],
			view: new View({
				projection: 'EPSG:4326',
				center: [105.0807800292969, 28.30973815918],
				zoom: 3
			})
		});
	}
}
</script>

<style scoped>
#map {
	position: relative;
	height: 400px;
	width: 500px;
}
</style>