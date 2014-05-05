
/*
title: Move
description: Move that can be executed by user that moves a objContainer over the x or y axis
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs'], function(createjs) {
  var classMove;
  return classMove = (function(_super) {
    __extends(classMove, _super);

    function classMove(objContainer, numSpeed) {
      this.objContainer = objContainer;
      this.numSpeed = numSpeed != null ? numSpeed : 5;
      if (!this.objContainer) {
        return false;
      }
      this.boolActive = false;
      this.numSpeed = 5;
      this.boolFacingRight = true;
      createjs.Ticker.addEventListener('tick', this.theTick.bind(this));
    }

    classMove.prototype.theTick = function() {
      this.objStage = this.objContainer.getStage();
      if (!(this.boolActive && this.objStage)) {
        return false;
      }
      if (!this.boolDebug) {
        this.boolDebug = true;
        console.debug(this.objContainer, this.objStage);
      }
      return this.doMove.call(this);
    };

    classMove.prototype.doMove = function() {
      return true;
    };

    classMove.prototype.playMove = function() {
      return this.boolActive = true;
    };

    classMove.prototype.stopMove = function() {
      return this.boolActive = false;
    };

    return classMove;

  })(createjs.EventDispatcher);
});
