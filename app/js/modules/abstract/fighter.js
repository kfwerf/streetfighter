
/*
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['radio', 'modules/abstract/actor', 'modules/abstract/fightermodel', 'modules/abstract/fighterview'], function(radio, Actor, FighterModel, FighterView) {
  var Fighter;
  return Fighter = (function(_super) {
    __extends(Fighter, _super);

    function Fighter() {
      var objManifest;
      Fighter.__super__.constructor.call(this);
      this.strName = 'Fighter';
      this.strDescription = 'A fighter from the pits of hell.';
      radio("" + this.strUID + ".MODEL.MANIFEST_LOADED").subscribe([this.onManifestLoaded, this]);
      this.modelFighter = new FighterModel(this.strUID);
      this.viewFighter = new FighterView(this.strUID);
      objManifest = {
        'SPRITESHEET_JSON': './data/fighters/ryu.json',
        'SPRITESHEET_IMG': './data/fighters/ryu.png'
      };
      this.modelFighter.loadManifest(objManifest);
    }

    Fighter.prototype.onManifestLoaded = function(loadQueue) {
      this.loadQueue = loadQueue;
      console.log('Loaded Manifest, adding it to the view');
      return this.viewFighter.setSpritesheet(this.modelFighter.objSpritesheet);
    };

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
