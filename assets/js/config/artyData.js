/*
    koronides 120mm (colis) : 100m / 250m
    lariat 120mm (warden) : 100m / 300m
    thunderbolt 150mm (colis) : 150m / 350m
    exalt 150mm (warden) : 100m / 300m
    storm cannon : 400m / 1000m	
	calcul : radis = distance / x
*/

const artyData = {
	'koronides120mm': {
		min: 100,
		max: 250,
        faction: 'colonial'
	},
	'lariat120mm': {
		min: 100,
		max: 300,
        faction: 'warden'
	},
	'thunderbolt150mm': {
		min: 150,
		max: 350,
        faction: 'colonial'
	},
	'exalt150mm': {
		min: 100,
		max: 300,
        faction: 'warden' 
	},
	'stormCannon': {
		min: 400,
		max: 1000,
        faction: 'global'
	},
};