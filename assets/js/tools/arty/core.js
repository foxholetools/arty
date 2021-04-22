let _artyList = {};
let artyColor = 'blue';

function addArty(color, name, latlng, layerPoint)
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

	// Move cicle
	data.arty.marker.on('move', function(e)
	{
		data.arty.minRange.setLatLng(e.latlng);
		data.arty.maxRange.setLatLng(e.latlng);
	});

	// Close popup
	forceClosePopup();
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

	data.arty = {};
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

	data.cible.marker.on("dragend", drawDistance);

	// if (arty.first.latLng !== undefined && arty.second.latLng !== undefined)
	// {
	// 	let distance = L.GeometryUtil.length([arty.first.point, arty.second.point]);
	// 	distance = Math.floor(distance * 1.25);

	// 	let azimut = L.GeometryUtil.angle(map, arty.first.latLng, arty.second.latLng);
	// 	azimut = Math.floor(azimut);

	// 	arty.second.marker.bindPopup('Dist. ' + distance + 'm<br/>Azim. ' + azimut).openPopup();
	// }
	
	// Close popup
	forceClosePopup();
}

function removeClible(color)
{
	if(_artyList[color] === undefined || _artyList[color].cible === undefined)
	{
		return false;
	}

	let data = _artyList[color]; 
	data.cible.marker.remove(map);

	data.cible = {};
}

function drawDistance(e)
{
	console.log(e);
}