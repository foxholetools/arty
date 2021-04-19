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

	console.log(arty);

	if (arty.first !== undefined) {
		arty.first.minRange.remove(map);
		arty.first.minRange.remove(map);
	}

	if (arty.second !== undefined) {
		arty.first.minRange.remove(map);
		arty.first.maxRange.remove(map);
	}

}

$(document).on('click', '#toolbox .arty', function(e) {
	$('#toolbox .arty').removeClass('selected');
	$(this).addClass('selected');
	var tool = $(this).attr('id');
	_artyTool = tool;
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

	if (_artyList[_artyNumber] == undefined) _artyList[_artyNumber] = {};
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

		$('#toolbox .arty').removeClass('selected');
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