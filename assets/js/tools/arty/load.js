function loadArtyMap(json)
{
    const data = JSON.parse(json);

    for (const [colorName, object] of Object.entries(data)) {

        _artyList[colorName] = {};
        const color = _artyList[colorName];
        
        if (object.arty !== undefined && Object.keys(object.arty) !== 0)
        {
            color.arty = {};
            const arty = object.arty;
            const latlng = L.latLng(arty.latlng.lat, arty.latlng.lng);
            const layerPoint = L.point(arty.layerPoint.x, arty.layerPoint.y);
            addArty(colorName, arty.type, arty.target, latlng, layerPoint);
        } else {
            color.arty = {};
        }

        if (object.cible !== undefined && Object.keys(object.cible) !== 0)
        {
            color.cible = {};
            const cible = object.cible;
            const latlng = L.latLng(cible.latlng.lat, cible.latlng.lng);
            const layerPoint = L.point(cible.layerPoint.x, cible.layerPoint.y);
            addCible(colorName, latlng, layerPoint);
        } else {
            color.cible = {};
        }

    }

}