function scheduleVisit(obj) {
    this.username = obj.username;
    this.password = obj.password;
    this.fullname = obj.fulname;
    this.phone = obj.phone;
    this.email = obj.email;
  }
  
  document.getElementById('button1').addEventListener('click', function() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var name = document.getElementById('fullname').value
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value
    var visit = new scheduleVisit({
      username: user,
      password: pass,
      fullname: name,
      phone: phone,
      email: email,
    });
  
    console.log(JSON.stringify(visit));
    var jsonfile = require('jsonfile');  
var config = require('../support/config.json');  

function writeToConfig(name, scheduleVisit) {  

fileObj.username3 = name;
//console.log('This is to WriteFile Stringified fileObj:' +'\n\n' + JSON.stringify(fileObj) + '\n\n');

jsonfile.writeFile(filePath, fileObj, function (err) {
    if (err) {
        console.error(err);
    }
});
}
  });