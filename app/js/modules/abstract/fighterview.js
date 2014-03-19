
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
    }

    FighterView.prototype.setSpritesheet = function(objSpritesheet) {
      this.objSpritesheet = objSpritesheet;
      return this.setAnimation('IDLE');
    };

    FighterView.prototype.setAnimation = function(strType) {
      if (strType == null) {
        strType = 'IDLE';
      }
      this.objContainer.removeAllChildren();
      return this.objContainer.addChild(new createjs.Sprite(this.objSpritesheet, strType));
    };

    return FighterView;

  })();
});
