let mapData = {};

/*
*  Popup manager
*/
function forceClosePopups(e)
{
    $(".popup").hide();
    mapData = {};
}

map.on('click', function(e)
{
    const element = $(e.originalEvent.target).attr('class');
    if (element !== 'leaflet-interactive' || map.getZoom() !== 5)
    {
        toastr.error('Please zoom in as much as possible !', 'Error', {
            positionClass: 'toast-bottom-rigth',
            progressBar: true,
        });
        return false;
    }
    $('#target-popup').hide();

    const toolbox = $('#action-popup');
    toolbox.css({left: e.containerPoint.x});
    toolbox.css({top: e.containerPoint.y});
    toolbox.show();
    mapData = {
        latlng: e.latlng,
        layerPoint: e.layerPoint
    };

});

// Foce close pop on zoom or move
map.on('zoom', forceClosePopups);
map.on('move', forceClosePopups);

// Action click
$('#actions .btn').click(function(e)
{
    const action = $(this).attr('action');
    if(action == 'cible')
    {
        removeClible(artyColor);
        addCible(artyColor, mapData.latlng, mapData.layerPoint);
    }
    else
    {
        const name = $(this).attr('name');

        // Remove after
        removeArty(artyColor);
        addArty(artyColor, name, artyColor, mapData.latlng, mapData.layerPoint);
    }

    forceClosePopups();

});

$('#action-popup .colors .color').click(function(e)
{
    $('#action-popup .colors .color').removeClass('current');

    const element = $(this);
    element.addClass('current');

    const color = element.attr('color');
    artyColor = color;
});

$('#target-popup .colors .color').click(function(e)
{
    $('#target-popup .colors .color').removeClass('current');

    const element = $(this);
    element.addClass('current');

    const color = element.attr('color');
    const arty = _artyList[artyTarget].arty;
    arty.target = color;

    if (_artyList[color] !== undefined)
    {
        const target = _artyList[color].cible;
        const shotInfos = getShotInfo(arty, target);
        if (shotInfos !== false)
        {
            $("#target-popup #infos").html('Dist. ' + shotInfos.distance + 'm<br/>Azim. ' + shotInfos.azimut);
        }
    }
});

$('#toolbox #save').click( function(e)
{
    const artyList = exportData(_artyList, {
        arty: [
            'latlng',
            'layerPoint',
            'type',
            'target'
        ],
        cible: [
            'latlng',
            'layerPoint'
        ]
    });

    if (Object.keys(artyList).length === 0)
    {
        return false;
    }

    const json = JSON.stringify(artyList);
    sessionStorage.setItem('artyList', json);

    toastr.success('Maps has been saved.', 'Success', {
        positionClass: 'toast-bottom-rigth',
        progressBar: true,
    });
});

// convert to Json for export data
$('#toolbox #share').click(function(e)
{
    const artyList = exportData(_artyList, {
        arty: [
            'latlng',
            'layerPoint',
            'type',
            'target'
        ],
        cible: [
            'latlng',
            'layerPoint'
        ]
    });

    if (Object.keys(artyList).length === 0)
    {
        return false;
    }

    const json = JSON.stringify(artyList);
    const url = encodeURI(window.location.href + "?share=" + json);

    const clipboard = $("<input>");
    $("body").append(clipboard);
    clipboard.val(url).select();
    document.execCommand("copy");
    clipboard.remove();

    toastr.success('The links have been copied to clipboard.', 'Success', {
        positionClass: 'toast-bottom-rigth',
        progressBar: true,
    });
});

$('#toolbox #trash').click(function(e)
{
    sessionStorage.removeItem('artyList');
    location.reload();

    toastr.success('Map has ben clear.', 'Success', {
        positionClass: 'toast-bottom-rigth',
        progressBar: true,
    });
});

// On ready
$(document).ready(function()
{
    let share = $.urlParam('share');
    if (share !== undefined && share !== null) {
        share = decodeURI(share);
        loadArtyMap(share);
    } else if (sessionStorage.hasOwnProperty('artyList')) {
        const store = sessionStorage.getItem('artyList');
        loadArtyMap(store);
    }
});