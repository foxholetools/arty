$.urlParam = function(name)
{
    const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}