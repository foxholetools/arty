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
		max: 6.3
	},
	'lariat120mm': {
		min: 2.5,
		max: 7.5 
	},
	'thunderbolt150mm': {
		min: 3.8,
		max: 8.8
	},
	'exalt150mm': {
		min: 3.8,
		max: 7.5 
	},
	'stormCannon': {
		min: 10,
		max: 25 
	},
}

function clearRange() {

	let arty = _artyList[_artyNumber];
	if (arty.first !== undefined) {
		arty.first.minRange.remove(map);
		arty.first.maxRange.remove(map);
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

		arty.first.latLng = e.latlng;
	    arty.first.point = e.layerPoint;

		arty.first.minRange = L.circle(e.latlng, {
			radius: ranges[_artyTool].min,
			color: '#e74c3c',
			draggable: true
		}).addTo(map);

		arty.first.maxRange = L.circle(e.latlng, {
			radius: ranges[_artyTool].max,
			interactive: true,
			color: '#2ecc71'
		}).addTo(map);

	    arty.first.marker = L.marker(arty.first.latLng, {
	 		icon: colors[_artyNumber],
			title: 'Arty ' + (_artyNumber + 1)
	    }).addTo(map);

	    toastr.success('Artillery point has been added.', 'Success', {
			positionClass: 'toast-bottom-left',
			progressBar: true,
		});

		$('#toolbox .btn').removeClass('selected');
		_artyTool = undefined;

	} else if (_artyTool !== undefined) {

		if (_artyList[_artyNumber].second == undefined) _artyList[_artyNumber].second = {}; // Create if not exit
		if(arty.second.marker !== undefined) arty.second.marker.remove(map);

	    arty.second.latLng = e.latlng;
	    arty.second.point = e.layerPoint;

		arty.second.marker = L.marker(arty.second.latLng, {
			icon: colors[_artyNumber],
			draggable: true,
			title: 'Cible ' + (_artyNumber + 1) 
		})
		.addTo(map);

		if (arty.first.latLng !== undefined && arty.second.latLng !== undefined) {
    
			let distance = L.GeometryUtil.length([arty.first.point, arty.second.point]);
			distance = Math.floor(distance * 1.25);

			let azimut = L.GeometryUtil.angle(map, arty.first.latLng, arty.second.latLng);
			azimut = Math.floor(azimut);

		    arty.second.marker.bindPopup('Dist. ' + distance + 'm<br/>Azim. ' + azimut).openPopup();
		}

		toastr.success('Cible point has been added.', 'Success', {
			positionClass: 'toast-bottom-left',
			progressBar: true,
		});

	}
	
});

// 
$('#toolbox #list #select').change(function()
{
	const value = $('#toolbox #list #select').val();
	_artyNumber = value;
	const color = colors[value].options.hexa;
	$("#toolbox #list #select").css('background-color', color);
});

$('#toolbox #list #add').click(function(e)
{
	const number = _artyList.length;
	if (colors[number] == undefined) return false;

	const color  = colors[number].options.hexa;
	$("#toolbox #list #select").append(
		'<option value="' + number + '" style="background-color: ' + color + ' ">' + 'Arty ' + (number + 1) +'</option>'
	);
	_artyList[number] = [];

});

$('#toolbox #list #remove').click(function(e)
{
	clearRange();
	if(_artyList[_artyNumber].first.marker != undefined) arty.first.marker.remove(map);
});

// On ready
$(document).ready(function() {

	const color = colors[_artyNumber].options.hexa;
    _artyList[_artyNumber] = {};
	$("#toolbox #list #select").append(
		'<option value="' + _artyNumber + '" style="background-color: ' + color + ' ">' + 'Arty ' + (_artyNumber + 1) +'</option>'
	);
	$("#toolbox #list #select").css('background-color', color);

});