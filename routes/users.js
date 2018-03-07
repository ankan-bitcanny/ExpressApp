var express = require('express');
var router = express.Router();

/* GET users information. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users information. */
router.post('/', function(req, res) {  
  var user_id = req.body.id;
  var token = req.body.token;
  var location = req.body.location;
  var name = req.body.name;
  var gender = req.body.gender;
  var age = req.body.age;

  res.send('Id: ' + user_id + ',' + '\n' 
  + 'Token: ' + token + ',' + '\n' 
  + 'Location: ' + location + ',' + '\n' 
  + 'Name: ' + name + ',' + '\n'
  + 'Gender: ' + gender + ',' + '\n'
  + 'Age: ' + age);
});

module.exports = router;

