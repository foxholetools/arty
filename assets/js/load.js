// function loadJson(json)
// {
// 	const data = JSON.parse(json);
// 	let number = 0;

// 	data.forEach(function(element) {

// 		_artyList[number] = [];
// 		_artyNumber = number;

// 		let arty = _artyList[number];
// 		if (element.first !== undefined && Object.keys(element.first).length !== 0)
// 		{
// 			arty.first = {};
// 			const first = element.first;
// 			const latLng = L.latLng(first.latLng.lat, first.latLng.lng);
// 			const point = L.point(first.point.x, first.point.y);
// 			addArty(arty, first.type, latLng, point);
// 		} else {
// 			arty.first = {};
// 		}
		
// 		if (element.second !== undefined && Object.keys(element.second).length !== 0)
// 		{
// 			arty.second = {};
// 			const second = element.second;
// 			const latLng = L.latLng(second.latLng.lat, second.latLng.lng);
// 			const point = L.point(second.point.x, second.point.y);
// 			addCible(arty, latLng, point);
// 		} else {
// 			arty.second = {};
// 		}

// 		// Add option to select
// 		const color  = colors[number].options.hexa;
// 		$("#toolbox #tools #select").append(
// 			'<option value="' + number + '" style="background-color: ' + color + ' ">' + 'Arty ' + (number + 1) +'</option>'
// 		);

// 		number = number + 1;

// 	});

// 	_artyNumber = 0;

// 	// Change select box and color
// 	const color  = colors[0].options.hexa;
// 	$('#toolbox #tools #select option[value="0"]').prop('selected', true);
// 	$("#toolbox #tools #select").css('background-color', color);

// }