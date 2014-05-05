
/*
title: Actor
description: Actor that is subscribed to the stage for updates
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'keypress', 'modules/movement/forward', 'modules/movement/backward'], function(createjs, keypress, classMoveForward, classMoveBackward) {
  var classMovement;
  return classMovement = (function(_super) {
    __extends(classMovement, _super);

    function classMovement(objContainer) {
      var objProperties, strKey, _ref;
      this.objContainer = objContainer;
      classMovement.__super__.constructor.call(this);
      this.initialize(this.prototype);
      this.evtUpdate = new createjs.Event('update');
      this.objMoveForward = new classMoveForward(this.objContainer);
      this.objMoveBackward = new classMoveBackward(this.objContainer);
      this.boolJumping = false;
      this.boolMoving = false;
      this.boolCrouching = false;
      this.objKeyListener = new keypress.Listener();
      this.objKeyBindings = {
        'backward': 'left',
        'up': 'up',
        'forward': 'right',
        'down': 'down',
        'action_one': 'a',
        'action_two': 's'
      };
      this.numSpeed = 1;
      this.numGravity = .5;
      this.numVelocityY = 0;
      this.numCeiling = 0;
      this.numFloor = 0;
      this.objMoves = {
        'MOVE_FORWARD': {
          'keys': this.getKeys('forward'),
          'prevent_repeat': true,
          'on_keydown': function() {
            return this.objMoveForward.playMove();
          },
          'on_keyup': function() {
            return this.objMoveForward.stopMove();
          },
          'this': this
        },
        'MOVE_BACKWARD': {
          'keys': this.getKeys('backward'),
          'prevent_repeat': true,
          'on_keydown': function() {
            return this.objMoveBackward.playMove();
          },
          'on_keyup': function() {
            return this.objMoveBackward.stopMove();
          },
          'this': this
        },
        'CROUCH': {
          'keys': this.getKeys('down'),
          'prevent_repeat': true,
          'on_keydown': function() {},
          'on_keyup': function() {},
          'this': this
        },
        'JUMP': {
          'keys': this.getKeys('up'),
          'prevent_repeat': true,
          'on_keydown': function() {
            this.boolJumping = true;
            return this.numVelocityY = -20;
          },
          'on_keyup': function() {},
          'this': this
        }
      };
      _ref = this.objMoves;
      for (strKey in _ref) {
        objProperties = _ref[strKey];
        this.objKeyListener.register_combo(this.objMoves[strKey]);
      }
      createjs.Ticker.addEventListener('tick', this.theTick.bind(this));
    }

    classMovement.prototype.theTick = function(e) {
      this.objStage = this.objContainer.getStage();
      if (this.boolJumping) {
        this.numVelocityY += this.numGravity;
        return this.objContainer.y += this.numVelocityY;
      }
    };

    classMovement.prototype.doJump = function(e) {
      var numNewY;
      if (!(this.objStage && this.boolJumping)) {
        false;
      }
      this.numHeight = this.objStage.canvas.numHeight;
      return numNewY = this.objContainer.y + this.numIncrementY;
    };

    classMovement.prototype.doMoveX = function(e) {
      var numNewX;
      if (!(this.objStage && this.boolMoving)) {
        false;
      }
      this.numWidth = this.objStage.canvas.width;
      numNewX = this.objContainer.x + this.numIncrementX;
      if (numNewX > 0 && numNewX < this.numWidth - this.objContainer.numWidth) {
        return this.objContainer.x = numNewX;
      }
    };

    classMovement.prototype.getKeys = function(strCombination) {
      var arrCombination, arrDecodedCombination, strKey, _i, _len;
      if (this.objKeyBindings) {
        arrDecodedCombination = [];
        arrCombination = strCombination.split(' ');
        for (_i = 0, _len = arrCombination.length; _i < _len; _i++) {
          strKey = arrCombination[_i];
          arrDecodedCombination.push(this.objKeyBindings[strKey]);
        }
        return arrDecodedCombination.join(' ');
      }
    };

    return classMovement;

  })(createjs.EventDispatcher);
});
