
/*
@Author: Kenneth van der Werf
@Name: FighterView class
@Description: View that handles the sprites in combination with CreateJS
 */
define(['createjs'], function(createjs) {
  var FighterView;
  return FighterView = (function() {
    function FighterView(objStage) {
      this.objStage = objStage;
      this.objSpritesheet = {};
      this.objAnimations = {};
    }

    FighterView.prototype.setSpritesheet = function(objSpritesheet) {
      this.objSpritesheet = objSpritesheet;
      console.log(this.objAnimations, this);
      return this.objAnimations['idle'] = new createjs.Sprite(this.objSpritesheet, 'idle');
    };

    return FighterView;

  })();
});
