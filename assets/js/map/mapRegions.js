regionBorders.map(function(regionBorder)
{ 
    L.polygon(regionBorder, {
        color: 'black',
        opacity: 0.1,
        fillOpacity: 0
    }).addTo(map);
});

regionLabels.map(function(regionName)
{
    console.log(regionName);
    L.marker(regionName.position, {
        pane: 'regionLabelsPane',
        icon: regionName.divIcon
    }).addTo(map);

});