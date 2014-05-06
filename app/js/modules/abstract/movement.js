
/*
title: Movement
description: Movement controller for actor, uses modular moves
dependencies: Event Dispatcher, Actor parent, Moves
author: Kenneth van der Werf
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'keypress', 'underscore', 'modules/movement/forward', 'modules/movement/backward', 'modules/movement/jump'], function(createjs, keypress, _, classMoveForward, classMoveBackward, classMoveJump) {
  var classMovement;
  return classMovement = (function(_super) {
    __extends(classMovement, _super);

    function classMovement(objContainer) {
      this.objContainer = objContainer;
      classMovement.__super__.constructor.call(this);
      this.initialize(this.prototype);
      if (!this.objContainer) {
        return false;
      }
      this.evtUpdate = new createjs.Event('update');
      this.objBounds = {
        numLeft: 0,
        numRight: this.objContainer.getStage().canvas.width - this.objContainer.numWidth,
        numTop: 0,
        numBottom: this.objContainer.getStage().canvas.height - this.objContainer.numHeight
      };
      this.objKeyListener = new keypress.Listener();
      this.objKeyBindings = {
        'backward': 'left',
        'up': 'up',
        'forward': 'right',
        'down': 'down',
        'action_one': 'a',
        'action_two': 's'
      };
      this.objMoves = {
        'MOVE_FORWARD': this.setMove('forward', classMoveForward),
        'MOVE_BACKWARD': this.setMove('backward', classMoveBackward),
        'JUMP': this.setMove('up', classMoveJump)
      };
    }

    classMovement.prototype.setMove = function(strCombination, objMove) {
      var objModule, objNewMove, strDescription, strName;
      objModule = new objMove(this.objContainer, this.objBounds);
      strName = objModule.strName;
      strDescription = objModule.strDescription;
      objNewMove = {
        'module': objModule,
        'name': strName,
        'description': strDescription,
        'keys': this.getKeys(strCombination),
        'prevent_repeat': true,
        'on_keydown': function() {
          return objModule.playMove();
        },
        'on_keyup': function() {
          return objModule.stopMove();
        },
        'this': this
      };
      this.objKeyListener.register_combo(objNewMove);
      return objNewMove;
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
