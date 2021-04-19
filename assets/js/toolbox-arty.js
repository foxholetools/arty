let _firstLatLng, _firstPoint, _firstMarker, _firstMinRange, _firstMaxRange;
let _secondLatLng, _secondPoint, _secondMarker, _secondMinRange, _secondMaxRange;
let _thirdMinRange, _thirdMaxRange;
let _artyTool;

// koronides 120mm (colis) : 100m / 250m
// lariat 120mm (warden) 100m / 300m
// thunderbolt 150mm (colis) 150m / 350m
// exalt 150mm (warden) 150m / 300m
// storm cannon 400m / 100m
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

	if (_firstMinRange !== undefined) _firstMinRange.remove(map);
	if (_firstMaxRange !== undefined) _firstMaxRange.remove(map);

	if (_secondMinRange !== undefined) _secondMinRange.remove(map);
	if (_secondMaxRange !== undefined) _secondMaxRange.remove(map);

	if (_thirdMinRange !== undefined) _thirdMinRange.remove(map);
	if (_thirdMaxRange !== undefined) _thirdMaxRange.remove(map);

}

$(document).on('click', '#toolbox .arty', function(e) {
	$('#toolbox .arty').removeClass('selected');
	$(this).addClass('selected');
	var tool = $(this).attr('id');
	_artyTool = tool;
});

map.on('click', function(e) {

	if (_artyTool !== undefined && map.getZoom() !== 5) {
		toastr.error('Please zoom in as much as possible !', 'Error', {
			positionClass: 'toast-bottom-right',
			progressBar: true,
		});
		return false;
	}

	if (_artyTool !== 'cible') { 

		// Clear
		if(_firstMarker != undefined) _firstMarker.remove(map);
		clearRange();

		_firstLatLng = e.latlng;
	    _firstPoint = e.layerPoint;

		_firstMinRange = L.circle(e.latlng, { radius: ranges[_tool].min, color: '#e74c3c' }).addTo(map);
		_firstMaxRange = L.circle(e.latlng, { radius: ranges[_tool].max, color: '#2ecc71' }).addTo(map);

	    _firstMarker = L.marker(_firstLatLng,{
	 		icon: blueIcon
	    }).addTo(map);

	    toastr.success('Artillery point has been added.', 'Success', {
			positionClass: 'toast-bottom-right',
			progressBar: true,
		});

	} else if (_artyTool !== undefined) {

		if(_secondMarker !== undefined) _secondMarker.remove(map);

	    _secondLatLng = e.latlng;
	    _secondPoint = e.layerPoint;
	    
		let distance = L.GeometryUtil.length([_firstPoint, _secondPoint]);
		distance = Math.floor(distance * 1.25);

		let azimut = L.GeometryUtil.angle(map, _firstLatLng, _secondLatLng);
		azimut = Math.floor(azimut);

		_secondMarker = L.marker(_secondLatLng, {
			icon: redIcon
		})
		.addTo(map);

		if (_firstLatLng !== undefined && _secondLatLng !== undefined) {
		    _secondMarker.bindPopup('Dist. ' + distance + 'm<br/>Azim. ' + azimut).openPopup();
		}

		toastr.success('Cible point has been added.', 'Success', {
			positionClass: 'toast-bottom-right',
			progressBar: true,
		});

	}
	
});