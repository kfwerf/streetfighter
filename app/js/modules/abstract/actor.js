
/*
title: Actor
description: Actor that is subscribed to the stage for updates
dependencies: Event Dispatcher
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'keypress', 'rsvp', 'modules/abstract/eventdispatcher'], function(createjs, keypress, EventDispatcher, MoveController) {
  var classActor;
  return classActor = (function(_super) {
    __extends(classActor, _super);

    function classActor() {
      this.strName = 'John Doe';
      this.strDescription = 'An average guy.';
      this.strUid = (function() {
        var i, numString, numTotal, _i;
        numTotal = 10;
        numString = '';
        for (i = _i = 0; _i < numTotal; i = _i += 1) {
          numString = numString + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return numString;
      })();
      this.numHealth = 100;
      this.numStamina = 100;
      this.numMagic = 100;
      this.numSpecial = 100;
      this.numSpeed = 10;
      this.strCurrentState = 'IDLE';
      this.objContainer = new createjs.Container();
      this.numHitWidth = 30;
      this.numHitHeight = 90;
      this.objHitArea = new createjs.Shape();
      this.objHitArea.graphics.beginStroke('red').drawRect(0, 0, this.numHitWidth, this.numHitHeight);
      this.objContainer.addChild(this.objHitArea);
    }

    classActor.prototype.getActor = function() {
      return this.objContainer;
    };

    return classActor;

  })(EventDispatcher);
});
