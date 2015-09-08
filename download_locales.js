var http = require('http');
var fs = require('fs');

var projectName = 'nordnet-react-app';
var locales = ['en_GB', 'sv_SE', 'da_DK', 'no_NB', 'fi_FI'];

locales.forEach(function(locale){

  var file = fs.createWriteStream(locale + '.json');
  var url = 'http://nodejs.dev.nordnet.se:4000/api/translations/' + projectName + '/' + locale;

  var request = http.get(url, function(response) {
    response.pipe(file);
  });
});