
/*
title: Stage
description: Stage that has actors it observes
dependencies: 
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs'], function(createjs) {
  var Stage;
  return Stage = (function(_super) {
    __extends(Stage, _super);

    function Stage(strStageName) {
      this.strStageName = strStageName != null ? strStageName : 'theStage';
      this.initialize(this.strStageName);
      createjs.Ticker.addEventListener('tick', this.theTick.bind(this));
    }

    Stage.prototype.theTick = function() {
      return this.update();
    };

    Stage.prototype.addActor = function(objActor) {
      this.objActors['strUid'] = objActor;
      return this.objStage.addChild(this.objActors['strUid'].getActor());
    };

    return Stage;

  })(createjs.Stage);
});
