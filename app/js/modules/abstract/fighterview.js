/*
@Author: Kenneth van der Werf
@Name: FighterView class
@Description: View that handles the sprites in combination with CreateJS
*/


(function() {
  define(['createjs'], function(createjs) {
    var FighterView;
    return FighterView = (function() {
      function FighterView(objStage) {
        this.objStage = objStage;
        this.objSpritesheet = {};
      }

      FighterView.prototype.loadSpritesheet = function(strUrl) {};

      return FighterView;

    })();
  });

}).call(this);
