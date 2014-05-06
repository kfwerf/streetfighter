
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
      this.objActors = {};
      this.objGround = new createjs.Shape();
      this.objGround.graphics.beginStroke('black').drawRect(0, 0, this.canvas.width, 1);
      this.addChild(this.objGround);
      this.objGround.y = 390;
      createjs.Ticker.addEventListener('tick', this.theTick.bind(this));
    }

    Stage.prototype.theTick = function() {
      return this.update();
    };

    Stage.prototype.addActor = function(objActor, numX, numY) {
      var strUid;
      if (numX == null) {
        numX = 0;
      }
      if (numY == null) {
        numY = 0;
      }
      strUid = objActor.strUid;
      this.objActors[strUid] = objActor;
      this.addChild(this.objActors[strUid]);
      objActor.x = numX;
      return objActor.y = numY;
    };

    return Stage;

  })(createjs.Stage);
});
