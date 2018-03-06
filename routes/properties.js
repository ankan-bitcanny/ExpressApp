var http = require('https');
var express = require('express');
var router = express.Router();
var tableify = require('tableify');
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var options = {
    host: 'https://vg8fiatud5.execute-api.us-east-1.amazonaws.com',
    path: '/prod/api/propertiesSearch2'
}
try{
    http.get(options.host+options.path, function (resp) {
        var data = '';
        resp.on('data', function (chunk) {
            data += chunk;
        });
        resp.on('end', function () {
            console.log(resp.headers);
            res.setHeader('content-type','text/html; charset=utf-8');
            //res.send(JSON.parse(data));
            res.send(tableify(JSON.parse(data)));
    
        });
    });
}
catch(e) {
    console.log(e);
}

// request.on('error', function (e) {
//     console.log(e.message);
// });
// request.end();
});

module.exports = router;

