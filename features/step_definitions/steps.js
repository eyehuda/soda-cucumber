module.exports = function (){

  this.World = require("../support/world").World;

  this.Given(/^I am in the homepage$/, function(callback) {
  //wrap(this.browser.chain.session().open('/'), callback);
    this.browser
      .chain
      .session()
      .open('/')
      .setSpeed(3000)
      .end(function(err){
        if (err){
          callback.fail(err);
        } else {
          callback();
        };
      });
  });

  this.Then(/^I need to see "([^"]*)"$/, function(arg1, callback) {
    this.browser
      .chain
      .assertTextPresent('Hello, World!')
      //.assertTextPresent('Hello, World!')
      .end(function(err){
        if (err){
          callback.fail(err);
        } else {
          callback();
        };
      });
  //  callback();
  //  wrap(this.browser.chain.setSpeed(6000).assertTextPresent('Hello, World!'), callback);
  });

 this.Before(function(callback){
    callback();    
  });

  // This will close the selenium browser at the end of the cucumber feature
  this.After(function(callback){
    //wrap(this.browser.chain.testComplete(), callback);
    this.browser
      .chain
      .testComplete()
      .end(function(err){
        if (err){
          callback.fail(err);
        } else {
          callback();
        };
      });
  });

};