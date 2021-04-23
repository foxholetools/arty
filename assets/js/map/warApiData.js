// function updateWarData()
// {
//     console.log("Updating War Data");

//     // queryActiveMaps().then(data => {
//     //     console.log(data);
//     //     // fs.writeFileSync('data/active-maps.json', JSON.stringify(data, null, 1));
//     // });

// }

function queryRegionDynamic(region)
{
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://war-service-live.foxholeservices.com/api/worldconquest/maps/' + region + '/dynamic/public', true);
        request.responseType = "json";

        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                resolve(this.response);
            } else {
                resolve(null);
            }
        }
        
        request.onerror = function (e) {
	    console.log("== XHR Error ==");
	    console.log(e);
	    console.log(e.target.status);
            resolve(null);
        }

        request.send();
    });
}

function queryRegionStatic(region)
{
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://war-service-live.foxholeservices.com/api/worldconquest/maps/' + region + '/static', true);
        request.responseType = "json";

        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                resolve(this.response);
            } else {
                resolve(null);
            }
        }
        
        request.onerror = function () {
            resolve(null);
        }

        request.send();
    });
}

function queryActiveMaps()
{
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://war-service-live.foxholeservices.com/api/worldconquest/maps', true);
        request.responseType = "json";

        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                resolve(this.response);
            } else {
                resolve(null);
            }
        }
        
        request.onerror = function () {
            resolve(null);
        }

        request.send();
    });
}