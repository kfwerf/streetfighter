
/*
@Author: Kenneth van der Werf
@Name: Ryu view fighter class
@Description: Character Ryu view
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['modules/abstract/fighterview'], function(FighterView) {
  var RyuView;
  return RyuView = (function(_super) {
    __extends(RyuView, _super);

    function RyuView(objStage) {
      this.objStage = objStage;
    }

    return RyuView;

  })(FighterView);
});
