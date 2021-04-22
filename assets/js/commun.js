let mapData = {};

/*
*  Popup manager
*/
function forceClosePopup(e)
{
    const toolbox = $("#popup");
    if (toolbox.is(":visible"))
    {
        toolbox.hide();
        mapData = {};
    }
}

map.on('click', function(e)
{
    if (map.getZoom() === 5)
    {
        $('#popup .actions').show();
        const toolbox = $('#popup');
        if (toolbox.is(':visible'))
        {
            toolbox.hide();
        }
        else
        {
            toolbox.css({left: e.containerPoint.x});
            toolbox.css({top: e.containerPoint.y});
            toolbox.show();
            mapData = {
                latlng: e.latlng,
                layerPoint: e.layerPoint
            };
        }
    }
});

// Foce close pop on zoom or move
map.on('zoom', forceClosePopup);
map.on('move', forceClosePopup);