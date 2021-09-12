const tilesUrl = 'https://assets.foxhole.tools/maps/tiles/';

// Maps
let allodsbightHex      = L.tileLayer(tilesUrl + 'allodsbight/{z}/{z}_{x}_{y}.png');
let callahanspassageHex = L.tileLayer(tilesUrl + 'callahanspassage/{z}/{z}_{x}_{y}.png');
let deadlandsHex        = L.tileLayer(tilesUrl + 'deadlands/{z}/{z}_{x}_{y}.png');
let drownedvaleHex      = L.tileLayer(tilesUrl + 'drownedvale/{z}/{z}_{x}_{y}.png');
let endlessshoreHex     = L.tileLayer(tilesUrl + 'endlessshore/{z}/{z}_{x}_{y}.png');
let farranaccoastHex    = L.tileLayer(tilesUrl + 'farranaccoast/{z}/{z}_{x}_{y}.png');
let fishermansrowHex    = L.tileLayer(tilesUrl + 'fishermansrow/{z}/{z}_{x}_{y}.png');
let godcroftsHex        = L.tileLayer(tilesUrl + 'godcrofts/{z}/{z}_{x}_{y}.png');
let greatmarchHex       = L.tileLayer(tilesUrl + 'greatmarch/{z}/{z}_{x}_{y}.png');
let heartlandsHex       = L.tileLayer(tilesUrl + 'heartlands/{z}/{z}_{x}_{y}.png');
let linnmercyHex        = L.tileLayer(tilesUrl + 'linnmercy/{z}/{z}_{x}_{y}.png');
let lochmorHex          = L.tileLayer(tilesUrl + 'lochmor/{z}/{z}_{x}_{y}.png');
let marbanhollowHex     = L.tileLayer(tilesUrl + 'marbanhollow/{z}/{z}_{x}_{y}.png');
let mooringcountyHex    = L.tileLayer(tilesUrl + 'mooringcounty/{z}/{z}_{x}_{y}.png');
let oarbreakerHex       = L.tileLayer(tilesUrl + 'oarbreaker/{z}/{z}_{x}_{y}.png');
let reachingtrailHex    = L.tileLayer(tilesUrl + 'reachingtrail/{z}/{z}_{x}_{y}.png');
let shackledchasmHex    = L.tileLayer(tilesUrl + 'shackledchasm/{z}/{z}_{x}_{y}.png');
let stonecradleHex      = L.tileLayer(tilesUrl + 'stonecradle/{z}/{z}_{x}_{y}.png');
let tempestislandHex    = L.tileLayer(tilesUrl + 'tempestisland/{z}/{z}_{x}_{y}.png');
let umbralwildwoodHex   = L.tileLayer(tilesUrl + 'umbralwildwood/{z}/{z}_{x}_{y}.png');
let viperpitHex         = L.tileLayer(tilesUrl + 'viperpit/{z}/{z}_{x}_{y}.png');
let weatheredexpanseHex = L.tileLayer(tilesUrl + 'weatheredexpanse/{z}/{z}_{x}_{y}.png');
let westgateHex         = L.tileLayer(tilesUrl + 'westgate/{z}/{z}_{x}_{y}.png');
let homeregionwHex      = L.tileLayer(tilesUrl + 'homeregionw/{z}/{z}_{x}_{y}.png');
let homeregioncHex      = L.tileLayer(tilesUrl + 'homeregionc/{z}/{z}_{x}_{y}.png');
let defaultMap = homeregionwHex;

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