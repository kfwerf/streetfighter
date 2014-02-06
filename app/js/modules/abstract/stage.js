
/*
@Author: Kenneth van der Werf
@Name: Stage class
@Description: Stage that is handling all the actors
 */
define(['createjs'], function(createjs) {
  var Stage;
  return Stage = (function() {
    function Stage(strStageName) {
      this.strStageName = strStageName != null ? strStageName : 'myGameStage';
      this.objStage = new createjs.Stage(this.strStageName);
    }

    return Stage;

  })();
});
