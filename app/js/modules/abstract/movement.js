
/*
title: Actor
description: Actor that is subscribed to the stage for updates
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'keypress'], function(createjs, keypress) {
  var classMovement;
  return classMovement = (function(_super) {
    __extends(classMovement, _super);

    function classMovement(objContainer) {
      var objProperties, strKey, _ref;
      this.objContainer = objContainer;
      classMovement.__super__.constructor.call(this);
      this.objKeyListener = new keypress.Listener();
      this.objKeyBindings = {
        'backward': 'left',
        'up': 'up',
        'forward': 'right',
        'down': 'down',
        'action_one': 'a'
      };
      this.numSpeed = 10;
      this.numIncrementX = 0;
      this.numIncrementY = 0;
      this.objMoves = {
        'MOVE_FORWARD': {
          'keys': this.getKeys('forward'),
          'prevent_repeat': true,
          'on_keydown': function() {
            return this.numIncrementX = this.numSpeed;
          },
          'on_keyup': function() {
            return this.numIncrementX = 0;
          },
          'this': this
        },
        'MOVE_BACKWARD': {
          'keys': this.getKeys('backward'),
          'prevent_repeat': true,
          'on_keydown': function() {
            return this.numIncrementX = -this.numSpeed;
          },
          'on_keyup': function() {
            return this.numIncrementX = 0;
          },
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
      var numNewX, numNewY;
      this.objStage = this.objContainer.getStage();
      if (!this.objStage) {
        return false;
      }
      this.numWidth = this.objStage.canvas.width;
      this.numHeight = this.objStage.canvas.height;
      numNewX = this.objContainer.x + this.numIncrementX;
      numNewY = this.objContainer.x + this.numIncrementY;
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
