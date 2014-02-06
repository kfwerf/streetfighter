
/*
@Author: Kenneth van der Werf
@Name: Ryu fighter class
@Description: Character Ryu modsel and view
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['modules/abstract/fighter', 'modules/fighters/ryu/ryumodel', 'modules/fighters/ryu/ryuview'], function(Fighter, RyuModel, RyuView) {
  var Ryu;
  return Ryu = (function(_super) {
    __extends(Ryu, _super);

    function Ryu(objStage) {
      var arrManifest, objHadouken;
      this.objStage = objStage;
      Ryu.__super__.constructor.call(this);
      arrManifest = [
        {
          id: 'SPRITESHEET_IMG',
          src: './data/fighters/ryu.json'
        }, {
          id: 'SPRITESHEET_JSON',
          src: './data/fighters/ryu.png'
        }
      ];
      this.modelFighter = new RyuModel();
      this.viewFighter = new RyuView();
      this.modelFighter.loadManifest(arrManifest);
      objHadouken = {
        name: 'hadouken',
        combination: ['ACTION_ONE'],
        emit: {
          type: 'DAMAGE',
          form: 'FIREBALL',
          amount: 5
        }
      };
      this.setMove(objHadouken);
    }

    return Ryu;

  })(Fighter);
});
