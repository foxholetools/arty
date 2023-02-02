var L;

// Global map object
const mapOptions = {  

    zoomControl: true,
    doubleClickZoom: false,
    attributionControl: true,
  
    crs: L.CRS.Simple,
    center: [128, -128],
    zoom: 3,
    minZoom: 2,
    maxZoom: 7, // tmp (max 7)
    zoomSnap: 1,
    wheelPxPerZoomLevel: 60,

    maxBoundsViscosity: 1.0,
    
    // Set default layer
    layers: [ defaultMap ]

}

let map = L.map('mapid', mapOptions).setView([ mapOrigin.y, mapOrigin.x ], 0);
if (baseMaps !== undefined)
{
    L.control.layers(baseMaps, {}).addTo(map);
}

console.log(map);

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

// assets/images/world_map_bg.jpg
L.imageOverlay(
    'https://assets.foxhole.tools/icons/map/worldbg.png',
    [
        [ -349.538, -265.846],
        [ 93.538, 521.846 ]
    ],
    {
        pane: 'backgroundPane'
    }
).addTo(map);