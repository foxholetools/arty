// Maps backup (https://foxhole-tools.github.io/assets/public/maps/tiles/warmap/{z}/{z}_{x}_{y}.png)
let defaultMap = L.tileLayer('https://foxhole-tools.github.io/assets/public/maps/tiles/warmap/{z}/{z}_{x}_{y}.png');

var baseMaps = undefined;

// Multiplicator for get distance
const distMulti = 47;