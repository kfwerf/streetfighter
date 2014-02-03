
/*
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
 */
define(['modules/abstract/fightermodel', 'modules/abstract/fighterview'], function(FighterModel, FighterView) {
  var Fighter;
  return Fighter = (function() {
    function Fighter(objStage) {
      this.objStage = objStage;
      this.modelFighter = new FighterModel();
      this.viewFighter = new FighterView();
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

  })();
});
