$('#actions .btn').click(function(e)
{
    const action = $(this).attr('action');
    if(action == 'cible')
    {
        removeClible(artyColor);
        addCible(artyColor, mapData.latlng, mapData.layerPoint);
        // rowDistance(artyColor);
    }
    else
    {
        const name = $(this).attr('name');

        // Remove after
        removeArty(artyColor);
        addArty(artyColor, name, mapData.latlng, mapData.layerPoint);
    }
});

$('#colors .color').click(function(e)
{
    $('#colors .color').removeClass('current');

    const element = $(this);
    element.addClass('current');

    const color = element.attr('color');
    artyColor = color;
});