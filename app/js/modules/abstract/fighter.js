
/*
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['modules/abstract/actor', 'modules/abstract/fightermodel', 'modules/abstract/fighterview'], function(Actor, FighterModel, FighterView) {
  var Fighter;
  return Fighter = (function(_super) {
    __extends(Fighter, _super);

    function Fighter(strStageName, modelFighter, viewFighter) {
      var arrManifest, self;
      this.strStageName = strStageName != null ? strStageName : 'myGameStage';
      this.modelFighter = modelFighter != null ? modelFighter : new FighterModel();
      this.viewFighter = viewFighter != null ? viewFighter : new FighterView();
      self = this;
      arrManifest = [
        {
          id: 'SPRITESHEET_IMG',
          src: './data/fighters/ryu.json'
        }, {
          id: 'SPRITESHEET_JSON',
          src: './data/fighters/ryu.png'
        }
      ];
      this.setStage(this.strStageName);
      this.modelFighter.loadManifest(arrManifest);
      this.modelFighter.onManifestComplete = function() {
        console.log(self.modelFighter.objSpritesheet);
        return self.viewFighter.setSpritesheet(self.modelFighter.objSpritesheet);
      };
    }

    Fighter.prototype.setMove = function(objMove) {
      switch (objMove.emit.type.toUpperCase()) {
        case 'DAMAGE':
          return console.log('damage');
        case 'STATE':
          return console.log('move is a state');
        case 'MOVING':
          return console.log('move is a move');
      }
    };

    return Fighter;

  })(Actor);
});
