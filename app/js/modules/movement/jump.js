
/*
title: Move Jump
description: Set the character forward on the y axis, based on gravity and velocity
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'modules/abstract/move'], function(createjs, classMove) {
  var classMoveJump;
  return classMoveJump = (function(_super) {
    __extends(classMoveJump, _super);

    function classMoveJump(objContainer, numSpeed) {
      this.objContainer = objContainer;
      this.numSpeed = numSpeed;
      classMoveJump.__super__.constructor.call(this, this.objContainer, this.numSpeed);
      this.numGround = this.objContainer.y;
      this.numCeil = this.objBounds.numTop;
      this.numGravity = 2;
    }

    classMoveJump.prototype.doMove = function() {
      this.numVelocity += this.numGravity;
      this.objContainer.y += this.numVelocity;
      if (this.objContainer.y > this.numGround) {
        this.boolActive = false;
        return this.objContainer.y = this.numGround;
      }
    };

    classMoveJump.prototype.playMove = function() {
      if (!this.boolActive) {
        this.numVelocity = -20;
        return this.boolActive = true;
      }
    };

    classMoveJump.prototype.stopMove = function() {
      return false;
    };

    return classMoveJump;

  })(classMove);
});
