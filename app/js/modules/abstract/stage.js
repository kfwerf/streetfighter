
/*
title: Stage
description: Stage that has actors it observes
dependencies: 
author: Kenneth van der Werf
 */
define(['createjs'], function(createjs) {
  var Stage;
  return Stage = (function() {
    function Stage(strStageName) {
      this.strStageName = strStageName != null ? strStageName : 'theStage';
      this.objStage = new createjs.Stage(this.strStageName);
      this.objActors = {};
      createjs.Ticker.addEventListener('tick', this.theTick.bind(this));
    }

    Stage.prototype.theTick = function() {
      return this.objStage.update();
    };

    Stage.prototype.addActor = function(objActor) {
      this.objActors['strUid'] = objActor;
      return this.objStage.addChild(this.objActors['strUid'].getActor());
    };

    return Stage;

  })();
});
