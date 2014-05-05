
/*
title: Move Forward
description: Set the character forward on the x axis, depending on facing position
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'modules/abstract/move'], function(createjs, classMove) {
  var classMoveForward;
  return classMoveForward = (function(_super) {
    __extends(classMoveForward, _super);

    function classMoveForward(objContainer, numSpeed) {
      this.objContainer = objContainer;
      this.numSpeed = numSpeed;
      classMoveForward.__super__.constructor.call(this, this.objContainer, this.numSpeed);
    }

    classMoveForward.prototype.doMove = function() {
      if (this.boolFacingRight) {
        return this.objContainer.x += this.numSpeed;
      } else {
        return this.objContainer.x -= this.numSpeed;
      }
    };

    return classMoveForward;

  })(classMove);
});
