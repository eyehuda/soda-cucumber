var selenium          = require('selenium-launcher');
var soda              = require('soda');
var browser           = null;

var World = function(callback){

  if (browser == null) {
    selenium(function(err,selenium){
      browser = soda.createClient({
        host:     selenium.host,
        port:     selenium.port,
        url:      "http://localhost:3000",
        browser:  "firefox"
      });

      this.browser = browser;
      callback({browser: this.browser});
      process.on('exit', function(){
        selenium.kill();
      });
    });

  } else {
    this.browser = browser;
    callback({browser: this.browser});
  }
  
};

exports.World = World;