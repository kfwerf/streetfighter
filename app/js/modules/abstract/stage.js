
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
      createjs.Ticker.addEventListener('tick', this.onTick.bind(this));
    }

    Stage.prototype.onTick = function() {
      return this.objStage.update();
    };

    return Stage;

  })();
});
