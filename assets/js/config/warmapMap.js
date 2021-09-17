// Maps - backup (https://assets.foxhole.tools/maps/tiles/warmap/{z}/{z}_{x}_{y}.png)
let defaultMap = L.tileLayer('https://raw.githubusercontent.com/foxholetools/assets/entrenched/dist/maps/tiles/warmap/{z}/{z}_{x}_{y}.png');

var baseMaps = undefined;

// Multiplicator for get distance
const distMulti = 47;