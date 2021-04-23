class MapItem
{
    constructor(regionId, teamId, iconType, x, y, flags)
    {
        this.regionId = regionId;
        this.regionName = mapArray[regionId-3].name;
        this.iconType = iconType;
        this.x = x;
        this.y = y;
        this.flags = flags;

        switch(teamId)
        {
            case 'NONE':
                this.teamId = 0;
                this.teamPrefix = '';
                break;
            case 'COLONIALS':
                this.teamId = 1;
                this.teamPrefix = 'Colonial ';
                break;
            case 'WARDENS':
                this.teamId = 2;
                this.teamPrefix = 'Warden ';
                break;
            default:
                console.log('ERROR: Unknown TeamID - ' + teamId);
        }

        switch(iconType)
        {
            case 5:
                this.description = 'Town Hall (Tier 1)';
                this.iconImage = MapIconList.staticBase1[this.teamId];
                this.pane = 'basesPane';
                break;
            case 6:
                this.description = 'Town Hall (Tier 2)';
                this.iconImage = MapIconList.staticBase2[this.teamId];
                this.pane = 'basesPane';
                break;
            case 7:
                this.description = 'Town Hall (Tier 3)';
                this.iconImage = MapIconList.staticBase3[this.teamId];
                this.pane = 'basesPane';
                break;
            case 11:
                this.description = 'Hospital';
                this.iconImage = MapIconList.hospital[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 12:
                this.description = 'Vehicle Factory';
                this.iconImage = MapIconList.vehicleFactory[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 17:
                this.description = 'Refinery';
                this.iconImage = MapIconList.manufacturing[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 18:
                this.description = 'Shipyard';
                this.iconImage = MapIconList.shipyard[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 19:
                this.description = 'Engineering Center';
                this.iconImage = MapIconList.techCenter[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 20:
                this.description = 'Salvage Field';
                this.iconImage = MapIconList.salvage;
                this.pane = 'resourcesPane';
                break;
            case 21:
                this.description = 'Component Field';
                this.iconImage = MapIconList.components;
                this.pane = 'resourcesPane';
                break;
            case 22:
                this.description = 'Fuel Field';
                this.iconImage = MapIconList.fuel;
                this.pane = 'resourcesPane';
                break;
            case 23:
                this.description = 'Sulfur Field';
                this.iconImage = MapIconList.sulfur;
                this.pane = 'resourcesPane';
                break;
            case 27:
                this.description = 'Keep';
                this.iconImage = MapIconList.keep[this.teamId];
                this.pane = 'basesPane';
                break;
            case 28:
                this.description = 'Observation Tower';
                this.iconImage = MapIconList.observationTower[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 29: //Unused
                this.description = 'Fort';
                //this.iconImage = MapIconList.Fort;
                this.pane = 'basesPane';
                break;
            case 32:
                this.description = 'Sulfur Mine';
                this.iconImage = MapIconList.sulfurMine;
                this.pane = 'resourcesPane';
                break;
            case 33:
                this.description = 'Storage Depot';
                this.iconImage = MapIconList.storageFacility[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 34:
                this.description = 'Factory';
                this.iconImage = MapIconList.factory[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 35:
                this.description = 'Safe House';
                this.iconImage = MapIconList.safehouse[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 36:
                this.description = 'Armory';
                this.iconImage = MapIconList.armory[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 37: //TODO: Rocket Site
                this.description = 'Rocket Site';
                this.iconImage = MapIconList.rocketSite[0];
                this.pane = 'structuresPane';
                break;
            case 39:
                this.description = 'Construction Yard';
                this.iconImage = MapIconList.constructionYard[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 38:
                this.description = 'Salvage Mine';
                this.iconImage = MapIconList.salvageMine;
                this.pane = 'resourcesPane';
                break;
            case 40:
                this.description = 'Component Mine';
                this.iconImage = MapIconList.componentMine;
                this.pane = 'resourcesPane';
                break;
            case 41:
                this.description = 'Oil Well';
                this.iconImage = MapIconList.oilWell;
                this.pane = 'resourcesPane';
                break;
            case 45: case 46: case 47:
                this.description = 'Relic Base';
                this.iconImage = MapIconList.relicBase[this.teamId];
                this.pane = 'basesPane';
                break;
            case 51:
                this.description = 'Mass Production Factory';
                this.iconImage = MapIconList.massProductionFactory[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 52:
                this.description = 'Seaport';
                this.iconImage = MapIconList.seaport[this.teamId];
                this.pane = 'structuresPane';
                break;
            case 53:
                this.description = 'Coastal Gun';
                this.iconImage = MapIconList.coastalGun[this.teamId];
                this.pane = 'structuresPane';
            break;
            default:
                console.log('ERROR: Unknown IconType - ' + iconType);
        }
    }
}