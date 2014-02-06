
/*
@Author: Kenneth van der Werf
@Name: Actor class
@Description: Actor that is subscribed to the stage
 */
define(['createjs'], function(createjs) {
  var Actor;
  return Actor = (function() {
    function Actor() {}

    Actor.prototype.setStage = function(strStageName) {
      this.strStageName = strStageName;
      return this.objStage = new createjs.Stage(this.strStageName);
    };

    return Actor;

  })();
});
