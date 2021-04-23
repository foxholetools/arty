/*
    koronides 120mm (colis) : 100m (2.5) / 250m (6.3)
    lariat 120mm (warden) : 100m (2.5) / 300m (7.5)
    thunderbolt 150mm (colis) : 150m (3.8) / 350m (8.8)
    exalt 150mm (warden) : 100m (2.5) / 300m (7.5)
    storm cannon : 400m (10) / 1000m (25)
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