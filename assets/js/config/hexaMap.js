// Maps
let allodsbightHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/allodsbight/{z}/{z}_{x}_{y}.png');
let callahanspassageHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/callahanspassage/{z}/{z}_{x}_{y}.png');
let deadlandsHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/deadlands/{z}/{z}_{x}_{y}.png');
let drownedvaleHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/drownedvale/{z}/{z}_{x}_{y}.png');
let endlessshoreHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/endlessshore/{z}/{z}_{x}_{y}.png');
let farranaccoastHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/farranaccoast/{z}/{z}_{x}_{y}.png');
let fishermansrowHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/fishermansrow/{z}/{z}_{x}_{y}.png');
let godcroftsHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/godcrofts/{z}/{z}_{x}_{y}.png');
let greatmarchHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/greatmarch/{z}/{z}_{x}_{y}.png');
let heartlandsHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/heartlands/{z}/{z}_{x}_{y}.png');
let linnmercyHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/linnmercy/{z}/{z}_{x}_{y}.png');
let lochmorHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/lochmor/{z}/{z}_{x}_{y}.png');
let marbanhollowHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/marbanhollow/{z}/{z}_{x}_{y}.png');
let mooringcountyHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/mooringcounty/{z}/{z}_{x}_{y}.png');
let oarbreakerHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/oarbreaker/{z}/{z}_{x}_{y}.png');
let reachingtrailHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/reachingtrail/{z}/{z}_{x}_{y}.png');
let shackledchasmHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/shackledchasm/{z}/{z}_{x}_{y}.png');
let stonecradleHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/stonecradle/{z}/{z}_{x}_{y}.png');
let tempestislandHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/tempestisland/{z}/{z}_{x}_{y}.png');
let umbralwildwoodHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/umbralwildwood/{z}/{z}_{x}_{y}.png');
let viperpitHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/viperpit/{z}/{z}_{x}_{y}.png');
let weatheredexpanseHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/weatheredexpanse/{z}/{z}_{x}_{y}.png');
let westgateHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/westgate/{z}/{z}_{x}_{y}.png');
let homeregionwHex = defaultMap = L.tileLayer('https://assets.foxhole.tools/maps/tiles/homeregionw/{z}/{z}_{x}_{y}.png');
let homeregioncHex = L.tileLayer('https://assets.foxhole.tools/maps/tiles/homeregionc/{z}/{z}_{x}_{y}.png');

// Maps list menu
var baseMaps = {
    "Allod's Bight": allodsbightHex,
    "Callahans Passage": callahanspassageHex,
    "Deadlands": deadlandsHex,
    "The Drowned Vale": drownedvaleHex,
    "Endless Shore": endlessshoreHex,
    "Farranac Coast": farranaccoastHex,
    "Fisherman's Row": fishermansrowHex,
    "Godcrofts": godcroftsHex,
    "The Heartlands": heartlandsHex,
    "The Linn of Mercy": linnmercyHex,
    "Loch Mór": lochmorHex,
    "Marban Hollow": marbanhollowHex,
    "Mooring County": mooringcountyHex,
    "The Oarbreaker Isles": oarbreakerHex,
    "Reaching Trail": reachingtrailHex,
    "Shackled Chasm": shackledchasmHex,
    "Stonecradle": stonecradleHex,
    "Tempest Island": tempestislandHex,
    "Umbral Wildwood": umbralwildwoodHex,
    "Viper Pit": viperpitHex,
    "Weathered Expanse": weatheredexpanseHex,
    "Westgate": westgateHex,
    "Home warden": homeregionwHex,
    "Home colonial": homeregioncHex
};

// Multiplicator for get distance
const distMulti = 9;