const mapWidth = 256; // Tile size
const mapOrigin = { x: 128, y: -128 }; // Center
const maxGrid = { x: 14, y: 14 }; // x : 7 | y : 14

// For borders
// h = hight of hexa
const h = mapWidth /14  ;

const k = h*(2/Math.sqrt(3)) * (Math.sqrt(3)/2) ;

// max X : 14
// Max Y : 7
const mapArray = [
    {
        id: 20,
        name: "AllodsBightHex",
        label: "Allods Bight",
        grid: {
            x: 2,
            y: -2
        }
    },
    {
        id: 21,
        name: "CallahansPassageHex",
        label: "Callahans Passage",
        grid: {
            x: 0,
            y: 2
        }
    },
    {
        id: 22,
        name: "DeadLandsHex",
        label: "DeadLands",
        grid: {
            x: 0,
            y: 0
        }
    },
    {
        id: 23,
        name: "DrownedValeHex",
        label: "The Drowned Vale",
        grid: {
            x: 1,
            y: -1
        }
    },
    {
        id: 24,
        name: "EndlessShoreHex",
        label: "Endless Shore",
        grid: {
            x: 2,
            y: 0
        }
    },
    {
        id: 25,
        name: "FarranacCoastHex",
        label: "Farranac Coast",
        grid: {
            x: -2,
            y: 0
        }
    },
    {
        id: 26,
        name: "FishermansRowHex",
        label: "Fishermans Row",
        grid: {
            x: -3,
            y: -1
        }
    },
    {
        id: 27,
        name: "GodcroftsHex",
        label: "Godcrofts",
        grid: {
            x: 3,
            y: 1
        }
    },
    {
        id: 28,
        name: "GreatMarchHex",
        label: "Great March",
        grid: {
            x: 0,
            y: -4
        }
    },
    {
        id: 29,
        name: "HeartlandsHex",
        label: "The Heartlands",
        grid: {
            x: -1,
            y: -3
        }
    },
    {
        id: 30,
        name: "LinnMercyHex",
        label: "The Linn of Mercy",
        grid: {
            x: -1,
            y: 1
        }
    },
    {
        id: 31,
        name: "LochMorHex",
        label: "Loch Mór",
        grid: {
            x: -1,
            y: -1
        }
    },
    {
        id: 32,
        name: "MarbanHollow",
        label: "Marban Hollow",
        grid: {
            x: 1,
            y: 1
        }
    },
    {
        id: 33,
        name: "MooringCountyHex",
        label: "The Moors",
        grid: {
            x: -1,
            y: 3
        }
    },
    {
        id: 34,
        name: "OarbreakerHex",
        label: "The Oarbreaker Isles",
        grid: {
            x: -3,
            y: 1
        }
    },
    {
        id: 35,
        name: "ReachingTrailHex",
        label: "Reaching Trail",
        grid: {
            x: 0,
            y: 4
        }
    },
    {
        id: 36,
        name: "ShackledChasmHex",
        label: "Shackled Chasm",
        grid: {
            x: 1,
            y: -3
        }
    },
    {
        id: 37,
        name: "StonecradleHex",
        label: "Stonecradle",
        grid: {
            x: -2,
            y: 2
        }
    },
    {
        id: 38,
        name: "TempestIslandHex",
        label: "Tempest Island",
        grid: {
            x: 3,
            y: -1
        }
    },
    {
        id: 39,
        name: "UmbralWildwoodHex",
        label: "Umbral Wildwood",
        grid: {
            x: 0,
            y: -2
        }
    },
    {
        id: 40,
        name: "ViperPitHex",
        label: "Viper Pit",
        grid: {
          x: 1,
          y: 3
        }
    },
    {
        id: 41,
        name: "WeatheredExpanseHex",
        label: "Weathered Expanse",
        grid: {
            x: 2,
            y: 2
        }
    },
    {
        id: 42,
        name: "WestgateHex",
        label: "Westgate",
        grid: {
          x: -2,
          y: -2
        }
    },
    {
        id: 50,
        name: "AcrithiaHex",
        label: "Acrithia",
        grid: {
            x: 1,
            y: -5
        }
    },
    {
        id: 51,
        name: "AshFieldsHex",
        label: "Ash Fields",
        grid: {
            x: -2,
            y: -4
        }
    },
    {
        id: 52,
        name: "BasinSionnachHex",
        label: "Basin Sionnach",
        grid: {
            x: 0,
            y: 6
        }
    },
    {
        id: 53,
        name: "CallumsCapeHex",
        label: "Callums Cape",
        grid: {
            x: -2,
            y: 4
        }
    },
    {
        id: 54,
        name: "ClansheadValleyHex",
        label: "Clanshead Valley",
        grid: {
            x: 2,
            y: 4
        }
    },
    {
        id: 55,
        name: "HowlCountyHex",
        label: "Howl County",
        grid: {
            x: 1,
            y: 5
        }
    },
    {
        id: 56,
        name: "KalokaiHex",
        label: "Kalokai",
        grid: {
            x: 0,
            y: -6
        }
    },
    {
        id: 57,
        name: "MorgensCrossingHex",
        label: "Morgens Crossing",
        grid: {
            x: 3,
            y: 3
        }
    },
    {
        id: 58,
        name: "NevishLineHex",
        label: "Nevish Line",
        grid: {
            x: -3,
            y: 3
        }
    },
    {
        id: 59,
        name: "OriginHex",
        label: "Origin",
        grid: {
            x: -3,
            y: -3
        }
    },
    {
        id: 60,
        name: "RedRiverHex",
        label: "Red River",
        grid: {
            x: -1,
            y: -5
        }
    },
    {
        id: 61,
        name: "SpeakingWoodsHex",
        label: "Speaking Woods",
        grid: {
            x: -1,
            y: 5
        }
    },
    {
        id: 62,
        name: "TerminusHex",
        label: "Terminus",
        grid: {
            x: 2,
            y: -4
        }
    },
    {
        id: 63,
        name: "TheFingersHex",
        label: "The Fingers",
        grid: {
            x: 3,
            y: -3
        }
    }
];

function getCenter(region)
{
    // Get location on grid
    const y = region.grid.y;
    const x = region.grid.x;

    // Center of region
    return [
        mapOrigin.y + ((y)*h),
        mapOrigin.x + (x)*h*Math.sqrt(3)
    ];

}


// function convertPixelToLeaflet(xcoord, ycoord) {    
//     //bounds: [[0,0], [-256,256]],

//     var leafletUnitsPerPixel = 256 / Math.max(pixelWorldWidth, pixelWorldHeight);
    
//     var pixelOffset = Math.abs(pixelWorldWidth-pixelWorldHeight)/2;
//     //offset to account for non square world tileset
//     if(pixelWorldWidth > pixelWorldHeight)ycoord += pixelOffset;
//     else xcoord += pixelOffset;
    
//     var xcoord = xcoord * leafletUnitsPerPixel;
//     var ycoord =  ycoord * leafletUnitsPerPixel * -1;
//     //convert to leaflet coords
    
//     return  [ycoord, xcoord];

// }

const regionBorders = mapArray.map(function(region)
{
    if (region.name !== "")
    {
        const item = getCenter(region);
        return ([
            [ item[0], item[1] - h*(2/Math.sqrt(3))  ], // Left
            [ item[0] + k , item[1] - h*(2/Math.sqrt(3))/2  ], // Left top
            [ item[0] + k , item[1] + h*(2/Math.sqrt(3))/2 ], // Right top
            [ item[0], item[1] + h*(2/Math.sqrt(3))  ], // Right
            [ item[0] - k , item[1] + h*(2/Math.sqrt(3))/2], // Right bot
            [ item[0] - k , item[1] - h*(2/Math.sqrt(3))/2 ], // Left bot
        ]);

    }
    else
    {
        return null;
    }
});

const regionLabels = mapArray.map(function(region)
{
    if (region.name !== "")
    {
        const item = getCenter(region);
        return ({
            divIcon: L.divIcon({
                className: "region-label",
                html: region.label,
                iconSize: [150,30],
                iconAnchor: [75,15]
            }),
            position: item
        });
    }
    else
    {
        return null;
    }
});