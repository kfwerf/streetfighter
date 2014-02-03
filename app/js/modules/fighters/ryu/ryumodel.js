
/*
@Author: Kenneth van der Werf
@Name: Ryu model fighter class
@Description: Character Ryu model data
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['modules/abstract/fightermodel'], function(FighterModel) {
  var RyuModel;
  return RyuModel = (function(_super) {
    __extends(RyuModel, _super);

    function RyuModel() {
      RyuModel.__super__.constructor.call(this);
      this.strName = 'Ryu';
      this.strDescription = 'A real hero.';
    }

    return RyuModel;

  })(FighterModel);
});
