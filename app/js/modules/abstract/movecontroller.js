
/*
title: Actor
description: Actor that is subscribed to the stage for updates
dependencies: Event Dispatcher
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'keypress', 'rsvp', 'modules/abstract/eventdispatcher'], function(createjs, keypress, EventDispatcher) {
  var classMoveController;
  return classMoveController = (function(_super) {
    __extends(classMoveController, _super);

    function classMoveController() {
      this.objKeyListener = new keypress.Listener();
      this.objKeyBindings = {
        'backward': 'left',
        'up': 'up',
        'forward': 'right',
        'down': 'down',
        'action_one': 'a'
      };
      this.objMoves = {
        'MOVE_FORWARD': {
          'keys': this.getDecodedCombination('forward'),
          'prevent_repeat': true,
          'on_keydown': function() {
            this.setAnimation('MOVE_FORWARD');
            return this.strCurrentState = 'MOVING_FORWARD';
          },
          'on_keyup': function() {
            this.setAnimation('IDLE');
            return this.strCurrentState = 'IDLE';
          },
          'this': this
        },
        'MOVE_BACKWARD': {
          'keys': this.getDecodedCombination('backward'),
          'prevent_repeat': true,
          'on_keydown': function() {
            this.setAnimation('MOVING_BACKWARD');
            return this.strCurrentState = 'MOVING_BACKWARD';
          },
          'on_keyup': function() {
            this.setAnimation('IDLE');
            return this.strCurrentState = 'IDLE';
          },
          'this': this
        }
      };
      createjs.Ticker.addEventListener('tick', this.theTick.bind(this));
    }

    classMoveController.prototype.theTick = function() {};

    classMoveController.prototype.getKeys = function(strCombination) {
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

    return classMoveController;

  })(EventDispatcher);
});
