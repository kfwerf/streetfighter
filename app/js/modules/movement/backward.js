
/*
title: Move Backward
description: Set the character backward on the x axis, depending on facing position
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'modules/abstract/move'], function(createjs, classMove) {
  var classMoveForward;
  return classMoveForward = (function(_super) {
    __extends(classMoveForward, _super);

    function classMoveForward(objContainer, objBounds, numSpeed) {
      this.objContainer = objContainer;
      this.objBounds = objBounds;
      this.numSpeed = numSpeed != null ? numSpeed : 10;
      classMoveForward.__super__.constructor.call(this, this.objContainer, this.objBounds, this.numSpeed);
    }

    classMoveForward.prototype.doMove = function() {
      var numNewAmount;
      numNewAmount = this.boolFacingRight ? this.objContainer.x - this.numSpeed : this.objContainer.x + this.numSpeed;
      if (numNewAmount < this.objBounds.numRight && numNewAmount > this.objBounds.numLeft) {
        return this.objContainer.x = numNewAmount;
      }
    };

    return classMoveForward;

  })(classMove);
});
