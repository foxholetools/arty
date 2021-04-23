var L;

// Global map object
const mapOptions = {  

	zoomControl: true,
    doubleClickZoom: false,
    attributionControl: true,
  
  	crs: L.CRS.Simple,
    center: [-128, 128],
    zoom: 3,
    minZoom: 2,
    maxZoom: 5,
    zoomSnap: 1,
    wheelPxPerZoomLevel: 60,

    maxBounds: [[-256,-50],[0,306]],
    maxBoundsViscosity: 1.0,

}

let map = L.map('mapid',mapOptions).setView([ o.y, o.x ], 0);

// Pane
const basesPane = map.createPane('basesPane');
basesPane.style.zIndex = 610;

const structuresPane = map.createPane('structuresPane');
structuresPane.style.zIndex = 609;

const resourcesPane = map.createPane('resourcesPane');
resourcesPane.style.zIndex = 608;

//
const regionLabelsPane = map.createPane('regionLabelsPane');
regionLabelsPane.style.zIndex = 620;

const surbRegionLabelsPane = map.createPane('subRegionLabelsPane');
surbRegionLabelsPane.style.zIndex = 620;
surbRegionLabelsPane.style.display = 'none';

const regionBordersPane = map.createPane('regionBordersPane');
regionBordersPane.style.zIndex = 400;

//
const backgroundPane = map.createPane('backgroundPane');
backgroundPane.style.zIndex = 100;

// Map images
L.tileLayer('https://raw.githubusercontent.com/Kastow/Foxhole-Map-Tiles/master/Tiles/{z}/{z}_{x}_{y}.png', {
	zIndex: 200,
}).addTo(map);

L.imageOverlay(
	'assets/images/world_map_bg.jpg',
	[
		[-349.538, -265.846],
        [93.538, 521.846]
    ],
    {
    	pane: 'backgroundPane'
    }
).addTo(map);