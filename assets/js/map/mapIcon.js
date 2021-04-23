const MapIcon = L.Icon.extend({
    options: {
        iconSize: [24,24],
        iconAnchor: [12,12],
        popupAnchor: [0, 0]
    }
});

const mapIconBaseUrl = 'assets/images/game'; 
const MapIconList = {};

/* Bases and Structures */
MapIconList.staticBase1 = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase1.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase1Colonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase1Warden.png' })
]

MapIconList.staticBase2 = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase2.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase2Colonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase2Warden.png' })
]

MapIconList.staticBase3 = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase3.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase3Colonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStaticBase3Warden.png' })
]

MapIconList.safehouse = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSafehouse.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSafehouseColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSafehouseWarden.png' })
]

MapIconList.relicBase = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconRelicBase.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconRelicBaseColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconRelicBaseWarden.png' })
]

MapIconList.keep = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconKeep.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconKeepColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconKeepWarden.png' })
]

MapIconList.observationTower = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconObservationTower.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconObservationTowerColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconObservationTowerWarden.png' })
]

MapIconList.rocketSite = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconRocketSite.png' }),
    //new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconRocketSiteColonial.png' }),
    //new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconRocketSiteWarden.png' }),
]

MapIconList.coastalGun = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconCoastalGun.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconCoastalGunColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconCoastalGunWarden.png' })
]

/* Logistics */
MapIconList.armory = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconArmory.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconArmoryColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconArmoryWarden.png' })
]

MapIconList.factory = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconFactory.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconFactoryColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconFactoryWarden.png' })
]

MapIconList.manufacturing = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconManufacturing.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconManufacturingColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconManufacturingWarden.png' })
]

MapIconList.storageFacility = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStorageFacility.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStorageFacilityColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconStorageFacilityWarden.png' })
]

MapIconList.vehicleFactory = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconVehicle.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconVehicleColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconVehicleWarden.png' })
]

MapIconList.constructionYard = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconConstructionYard.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconConstructionYardColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconConstructionYardWarden.png' })
]

MapIconList.shipyard = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconShipyard.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconShipyardColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconShipyardWarden.png' })
]

MapIconList.hospital = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconHospital.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconHospitalColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconHospitalWarden.png' })
]

MapIconList.techCenter = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconTechCenter.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconTechCenterColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconTechCenterWarden.png' })
]

MapIconList.massProductionFactory = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconMassProductionFactory.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconMassProductionFactoryColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconMassProductionFactoryWarden.png' })
]

MapIconList.seaport = [
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSeaport.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSeaportColonial.png' }),
    new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSeaportWarden.png' })
]

/* Resources */
MapIconList.salvage = new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSalvage.png' });
MapIconList.salvageMine = new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSalvageMine.png' });
MapIconList.components = new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconComponents.png' });
MapIconList.componentMine = new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconComponentMine.png' });
MapIconList.sulfur = new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSulfur.png' });
MapIconList.sulfurMine = new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconSulfurMine.png' });
MapIconList.fuel = new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconFuel.png' });
MapIconList.oilWell = new MapIcon({ iconUrl: mapIconBaseUrl + '/MapIconOilWell.png' });