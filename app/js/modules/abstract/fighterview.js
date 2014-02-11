
/*
@Author: Kenneth van der Werf
@Name: FighterView class
@Description: View that handles the sprites in combination with CreateJS
 */
define(['createjs', 'radio'], function(createjs, radio) {
  var FighterView;
  return FighterView = (function() {
    function FighterView(strUID) {
      this.strUID = strUID != null ? strUID : '';
      this.objContainer = new createjs.Container();
      this.objSpritesheet = {};
      this.objAnimations = {};
      this.objKeyBindings = {
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN',
        65: 'ACTION_ONE'
      };
      this.objKeyMapping = {
        'MOVE_RIGHT': ['RIGHT'],
        'MOVE_LEFT': ['LEFT'],
        'JUMP': ['UP'],
        'CROUCH': ['DOWN'],
        'HADOUKEN': ['ACTION_ONE']
      };
      radio("" + this.strUID + ".VIEW.SPRITES_LOADED").subscribe([onSpritesLoaded, this]);
    }

    FighterView.prototype.setSpritesheet = function(objSpritesheet) {
      this.objSpritesheet = objSpritesheet;
      this.objAnimations['IDLE'] = new createjs.Sprite(this.objSpritesheet, 'idle');
      return radio("" + this.strUID + ".VIEW.SPRITES_LOADED").broadcast([this.objAnimations, this]);
    };

    FighterView.prototype.setAnimation = function(strType) {
      if (strType == null) {
        strType = 'IDLE';
      }
      this.objContainer.removeAllChildren();
      return this.objContainer.addChild(this.objAnimations[strType]({
        onSpritesLoaded: function(objAnimations) {
          return this.setAnimation('IDLE');
        }
      }));
    };

    return FighterView;

  })();
});
