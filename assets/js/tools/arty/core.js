let _artyList = {};
let artyColor = 'blue';
let artyTarget = 'blue';

function targetPopup(e)
{
    if (map.getZoom() !== 5)
    {
        return false;
    }
	
    $('#action-popup').hide();

	artyTarget = e.target.color;
    const toolbox = $('#target-popup');

	const arty = _artyList[artyTarget].arty;

	// Hide actions
	$('#colors .color').removeClass('current');
	const element = $('#colors .' + arty.target);
	element.addClass('current');

	// 
	if (_artyList[arty.target] !== undefined)
	{
		const target = _artyList[arty.target].cible;
		const shotInfos = getShotInfo(arty, target);
		if (shotInfos !== false)
		{
			$("#target-popup #infos").html('Dist. ' + shotInfos.distance + 'm<br/>Azim. ' + shotInfos.azimut);
		}
	}

	toolbox.css({ left: e.containerPoint.x });
	toolbox.css({ top: e.containerPoint. y});
	toolbox.show();
}

function getShotInfo(source, target)
{
	if (target !== undefined)
	{
		let distance = L.GeometryUtil.length([source.layerPoint, target.layerPoint]);
		distance = Math.floor(distance * 1.25);

		let azimut = L.GeometryUtil.angle(map, source.latlng, target.latlng);
		azimut = Math.floor(azimut);

		return {
			azimut: azimut,
			distance: distance
		}
	}
	return false;
}

function addArty(color, name, target, latlng, layerPoint)
{
	if(_artyList[color] == undefined)
	{
		_artyList[color] = {};
	}

	const config = artyData[name];
	const factionColor = factionsColorData[config.faction];
	const icon = L.divIcon({
		className: 'mapIcon ' + name + ' ' + color,
		iconSize: 26,
		iconAnchor: [17.5, 17.5]
	});

	let data = _artyList[color];
	data.arty = {
		latlng: latlng,
		layerPoint: layerPoint,
		type: name
	};

	// Display range
	data.arty.minRange = L.circle(latlng, {
		radius: config.min,
		color: '#c0392b',
		weight: 1
	}).addTo(map);

	data.arty.maxRange = L.circle(latlng, {
		radius: config.max,
		color: factionColor,		
		weight: 1
	}).addTo(map);

	// Add marker
	data.arty.marker = L.marker(latlng, {
		icon: icon,
		draggable: true
	}).addTo(map);
	data.arty.marker.color = color;

	// Set target
	data.arty.target = target;

	// Move arty
	data.arty.marker.on('dragstart', function(e)
	{
		forceClosePopups();
	});

	data.arty.marker.on('move', function(e)
	{
		data.arty.minRange.setLatLng(e.latlng);
		data.arty.maxRange.setLatLng(e.latlng);
	});

	data.arty.marker.on('moveend', function(e)
	{
		const latlng = e.target._latlng;
		const layerPoint = map.latLngToLayerPoint(latlng);
		data.arty.latlng = latlng;
		data.arty.layerPoint = layerPoint;
	});

	// Delete
	data.arty.marker.on('contextmenu', function(e)
	{
		removeArty(color);
	});

	// On click
	data.arty.marker.on('click', targetPopup);

}

function removeArty(color)
{
	if(_artyList[color] === undefined || _artyList[color].arty === undefined)
	{
		return false;
	}

	const data = _artyList[color];

	// Remove marker and ranges
	data.arty.marker.remove(map);
	data.arty.minRange.remove(map);
	data.arty.maxRange.remove(map);

	data.arty = undefined;
}

function addCible(color, latlng, layerPoint)
{
	if(_artyList[color] == undefined)
	{
		_artyList[color] = {};
	}

	const icon = L.divIcon({
		className: 'mapIcon cible ' + color,
		iconSize: 26,
		iconAnchor: [17.5, 17.5]
	});

	let data = _artyList[color];
	data.cible = {
		latlng: latlng,
		layerPoint: layerPoint
	}

	data.cible.marker = L.marker(latlng, {
		icon: icon,
		draggable: true,
		title: 'Cible ' + color 
	})
	.addTo(map);
	data.cible.marker.color = color;

	// Move
	data.cible.marker.on('dragstart', function(e)
	{
		forceClosePopups();
	});

	data.cible.marker.on('moveend', function(e)
	{
		const latlng = e.target._latlng;
		const layerPoint = map.latLngToLayerPoint(latlng);
		data.cible.latlng = latlng;
		data.cible.layerPoint = layerPoint;
	});

	// Delete
	data.cible.marker.on('contextmenu', function(e)
	{
		removeClible(color);
	});
}

function removeClible(color)
{
	if(_artyList[color] === undefined ||
		_artyList[color].cible === undefined ||
		_artyList[color].cible.marker === undefined)
	{
		return false;
	}

	let data = _artyList[color]; 
	data.cible.marker.remove(map);

	data.cible = undefined;
}