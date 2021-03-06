function getLang(path){
    var lang = {'de': include(lang/de.json)}, locale = window.localStorage["ownsmiley.lang"];

    if(locale === undefined) {
        window.localStorage["ownsmiley.lang"] = 'de';
        locale = 'de';
    } else {
        locale = locale.toLowerCase();
    }

    if(lang[locale] === undefined) {
        window.localStorage["ownsmiley.lang"] = 'de';
        lang = lang['de'];
    } else {
        lang = lang[locale];
    }

    var parts = path.split('/'), match = '';

    for( var i = 0; i < parts.length; i++){
        match = parts[i].match(/^([^\[]+)\[([0-9]+)\]$/);
        if(match == null){
            if(lang[parts[i]] == undefined) {
                return '';
            } else {
                lang = lang[parts[i]];
            }
        } else {
            if(lang[match[1]] == undefined) {
                return '';
            } else {
                if(lang[match[1]][match[2]] == undefined) {
                    return '';
                } else {
                    lang = lang[match[1]][match[2]];
                }
            }
        }
    }
    
    return lang;
}