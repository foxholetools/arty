// Converts a coordinate from the regional coordinate system to the world coordinate system
function convertCoords(regionId, x, y)
{
    let xcoord = mapArray[regionId - 3].center[1] - (h / 2) + (h * x);
    let ycoord = mapArray[regionId - 3].center[0] + (k / 2) - (k * y);
    return {
        xcoord, ycoord
    };
}

function loadStaticMap(apiReponse)
{
    apiReponse.forEach(function(region)
    {
        if(region === null)
        {
            return;
        }
        region.mapTextItems.forEach(function(mapTextItem)
        {
            let coords = convertCoords(region.regionId, mapTextItem.x, mapTextItem.y);
            const icon = L.divIcon({
                className: 'subRegion' + mapTextItem.mapMarkerType + '-label',
                html: mapTextItem.text,
                iconSize: [150, 30]
            });

            L.marker([ coords.ycoord, coords.xcoord ], {
                pane: 'subRegionLabelsPane',
                icon: icon
            }).addTo(map);
        });
    });

}

function loadDynamicMap(apiReponse)
{
    apiReponse.forEach(function(region)
    {
        if(region === null)
        {
            return false;
        }
        region.mapItems.map(function(mapItem)
        {
            let coords = convertCoords(region.regionId, mapItem.x, mapItem.y);
            let mapItemObject = new MapItem(region.regionId, mapItem.teamId, mapItem.iconType, coords.xcoord, coords.ycoord, mapItem.flags);

            L.marker([ mapItemObject.y, mapItemObject.x ], {
                pane: mapItemObject.pane,
                icon: mapItemObject.iconImage
            }).addTo(map);
        });
    });
}