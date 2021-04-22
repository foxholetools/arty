
function exportData(data, exportList)
{
    let toExport = {};
    for (const [name, object] of Object.entries(data)) {

        toExport[name] = {}        
        for (const [key, list] of Object.entries(exportList)) {
            
            if (object[key] !== undefined)
            {
                toExport[name][key] = {};
                list.forEach(function(value)
                {
                    toExport[name][key][value] = object[key][value];
                });
            }
        }

    }

    return toExport;
}