
/*
@Author: Kenneth van der Werf
@Name: Stage class
@Description: Stage that is handling all the actors
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['createjs', 'modules/abstract/stage'], function(createjs, Stage) {
  var FighterStage;
  return FighterStage = (function(_super) {
    __extends(FighterStage, _super);

    function FighterStage(strStageName) {
      this.strStageName = strStageName != null ? strStageName : 'myGameStage';
      FighterStage.__super__.constructor.call(this);
      this.objFighters = {};
    }

    FighterStage.prototype.addFighter = function(Fighter) {
      this.objFighters[Fighter.strUID] = Fighter;
      console.log(Fighter.objContainer);
      return this.objStage.addChild(Fighter.objContainer);
    };

    return FighterStage;

  })(Stage);
});
