let _artyTool;
let _artyList = [];
let _artyNumber = 0;

let colors = [
	blueIcon,
	redIcon,
	greenIcon,
	orangeIcon,
	yellowIcon,
	goldIcon,
	violetIcon,
	greyIcon,
	blackIcon
];

// koronides 120mm (colis) : 100m / 250m
// lariat 120mm (warden) : 100m / 300m
// thunderbolt 150mm (colis) : 150m / 350m
// exalt 150mm (warden) : 150m / 300m
// storm cannon : 400m / 100m
const ranges = {
	'koronides120mm': {
		min: 2.5,
		max: 6.3,
		color: '#2ecc71'
	},
	'lariat120mm': {
		min: 2.5,
		max: 7.5,
		color: '#3498db'
	},
	'thunderbolt150mm': {
		min: 3.8,
		max: 8.8,
		color: '#2ecc71'
	},
	'exalt150mm': {
		min: 3.8,
		max: 7.5,
		color: '#3498db' 
	},
	'stormCannon': {
		min: 10,
		max: 25,
		color: '#ecf0f1'
	},
}

function clearRange() {

	let arty = _artyList[_artyNumber];
	if (arty.first !== undefined) {
		arty.first.minRange.remove(map);
		arty.first.maxRange.remove(map);
	}

}

function convertToJson() {

	const toSave = [];
	_artyList.forEach(function(element)
	{
		let infos = {};
		if (element.first !== undefined) {
			infos.first = {
				latLng: element.first.latLng,
				point: element.first.point,
				type: element.first.type
			}
		}

		if (element.second !== undefined) {
			infos.second = {
				latLng: element.second.latLng,
				point: element.second.point
			}
		}
		toSave.push(infos);
	});

	return JSON.stringify(toSave);

}

function loadJson(json)
{
	const data = JSON.parse(json);
	let number = 0;

	data.forEach(function(element) {

		_artyList[number] = [];
		_artyNumber = number;

		let arty = _artyList[number];
		if (element.first !== undefined && Object.keys(element.first).length !== 0)
		{
			arty.first = {};
			const first = element.first;
			const latLng = L.latLng(first.latLng.lat, first.latLng.lng);
			const point = L.point(first.point.x, first.point.y);
			addArty(arty, first.type, latLng, point);
		} else {
			arty.first = {};
		}
		
		if (element.second !== undefined && Object.keys(element.second).length !== 0)
		{
			arty.second = {};
			const second = element.second;
			const latLng = L.latLng(second.latLng.lat, second.latLng.lng);
			const point = L.point(second.point.x, second.point.y);
			addCible(arty, latLng, point);
		} else {
			arty.second = {};
		}

		// Add option to select
		const color  = colors[number].options.hexa;
		$("#toolbox #tools #select").append(
			'<option value="' + number + '" style="background-color: ' + color + ' ">' + 'Arty ' + (number + 1) +'</option>'
		);

		number = number + 1;

	});

	_artyNumber = 0;

	// Change select box and color
	const color  = colors[0].options.hexa;
	$('#toolbox #tools #select option[value="0"]').prop('selected', true);
	$("#toolbox #tools #select").css('background-color', color);

}

function addArty(arty, type, latLng, point)
{
	arty.first.latLng = latLng;
	arty.first.point = point;
	arty.first.type = type;

	const config = ranges[type];

	arty.first.minRange = L.circle(latLng, {
		radius: config.min,
		color: '#c0392b',
		weight: 1
	}).addTo(map);

	arty.first.maxRange = L.circle(latLng, {
		radius: config.max,
		color: config.color,		
		weight: 1
	}).addTo(map);

	arty.first.marker = L.marker(latLng, {
		icon: colors[_artyNumber]
	}).bindPopup('Arty ' + (_artyNumber + 1)).addTo(map);
}

function addCible(arty, latLng, point)
{
	arty.second.latLng = latLng;
	arty.second.point = point;

	arty.second.marker = L.marker(arty.second.latLng, {
		icon: colors[_artyNumber],
		draggable: true,
		title: 'Cible ' + (_artyNumber + 1) 
	})
	.addTo(map);

	if (arty.first.latLng !== undefined && arty.second.latLng !== undefined)
	{
		let distance = L.GeometryUtil.length([arty.first.point, arty.second.point]);
		distance = Math.floor(distance * 1.25);

		let azimut = L.GeometryUtil.angle(map, arty.first.latLng, arty.second.latLng);
		azimut = Math.floor(azimut);

		arty.second.marker.bindPopup('Dist. ' + distance + 'm<br/>Azim. ' + azimut).openPopup();
	}
}

$('#toolbox #btn .btn').click(function(e) {
	let element = $(this);
	if (element.hasClass('selected')) {
		element.removeClass('selected');
		_artyTool = undefined;
	} else {
		$('#toolbox .btn').removeClass('selected');
		element.addClass('selected');
		var tool = $(this).attr('id');
		_artyTool = tool;	
	}
});

map.on('click', function(e) {

	if (_artyTool == undefined) return false;

	if (_artyTool !== undefined && map.getZoom() !== 5) {
		toastr.error('Please zoom in as much as possible !', 'Error', {
			positionClass: 'toast-bottom-left',
			progressBar: true,
		});
		return false;
	}

	let arty = _artyList[_artyNumber];

	if (_artyTool !== 'cible') {

		// Clear
		clearRange();
		if (_artyList[_artyNumber].first == undefined) _artyList[_artyNumber].first = {}; // Create if not exit
		if(arty.first.marker != undefined) arty.first.marker.remove(map);

		addArty(arty, _artyTool, e.latlng, e.layerPoint);

		toastr.success('Artillery point has been added.', 'Success', {
			positionClass: 'toast-bottom-left',
			progressBar: true,
		});

		$('#toolbox .btn').removeClass('selected');
		_artyTool = undefined;

	} else if (_artyTool !== undefined) {

		if (_artyList[_artyNumber].second == undefined) _artyList[_artyNumber].second = {}; // Create if not exit
		if(arty.second.marker !== undefined) arty.second.marker.remove(map);

	    addCible(arty, e.latlng, e.layerPoint);

		toastr.success('Cible point has been added.', 'Success', {
			positionClass: 'toast-bottom-left',
			progressBar: true,
		});

	}
	
});

// 
$('#toolbox #tools #select').change(function()
{
	const value = $('#toolbox #tools #select').val();
	_artyNumber = parseInt(value);
	const color = colors[_artyNumber].options.hexa;
	$("#toolbox #tools #select").css('background-color', color);
});

// Add "calque"
$('#toolbox #tools #add').click(function(e)
{
	const number = _artyList.length;
	if (colors[number] == undefined) return false;
	_artyList[number] = [];

	const color  = colors[number].options.hexa;
	$("#toolbox #tools #select").append(
		'<option value="' + number + '" style="background-color: ' + color + ' ">' + 'Arty ' + (number + 1) +'</option>'
	);

	// Change select box and color
	$('#toolbox #tools #select option[value="' + number + '"]').prop('selected', true);
	$("#toolbox #tools #select").css('background-color', color);
	_artyNumber = number;

	// Notification
	toastr.success('New Arty has been create.', 'Success', {
		positionClass: 'toast-bottom-left',
		progressBar: true,
	});
});

// Remove "calque"
$('#toolbox #tools #remove').click(function(e)
{
	const arty = _artyList[_artyNumber];
	if(arty.first.marker !== undefined)
	{
		arty.first.marker.remove(map);
		clearRange();
		arty.first = undefined;
	}
	if(arty.second.marker !== undefined)
	{
		arty.second.marker.remove(map);
		arty.second = undefined;
	}

	// Notification
	toastr.success('Arty has been clear.', 'Success', {
		positionClass: 'toast-bottom-left',
		progressBar: true,
	});
});

// Save to localstorage
$('#toolbox #tools #save').click(function(e)
{
	const json = convertToJson();
	sessionStorage.setItem('artyList', json);

	// Notification
	toastr.success('Arty has been saved.', 'Success', {
		positionClass: 'toast-bottom-left',
		progressBar: true,
	});
});

// Share _artyList
$('#toolbox #tools #share').click(function(e)
{
	const json = convertToJson();
	const url = encodeURI(window.location.href + "?share=" + json);

	const clipboard = $("<input>");
	$("body").append(clipboard);
	clipboard.val(url).select();
	document.execCommand("copy");
	clipboard.remove();

	// Notification
	toastr.success('Url ha been copied to the clipboard.', 'Success', {
		positionClass: 'toast-bottom-left',
		progressBar: true,
	});

});

// Clear session storage
$('#toolbox #tools #trash').click(function(e)
{
	sessionStorage.removeItem('artyList');
	location.reload();
});

// On ready
$(document).ready(function()
{
	let share = $.urlParam('share');
	if (share !== undefined && share !== null) {
		share = decodeURI(share);
		loadJson(share);
	} else if (sessionStorage.hasOwnProperty('artyList')) {
		const store = sessionStorage.getItem('artyList');
		loadJson(store);
	} else {
		const color = colors[_artyNumber].options.hexa;
	    _artyList[_artyNumber] = {};
		$("#toolbox #tools #select").append(
			'<option value="' + _artyNumber + '" style="background-color: ' + color + ' ">' + 'Arty ' + (_artyNumber + 1) +'</option>'
		);
		$("#toolbox #tools #select").css('background-color', color);
	}

});

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}
