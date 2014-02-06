
/*
@Author: Kenneth van der Werf
@Name: FighterModel class
@Description: Data for a fighter character
 */
define(['createjs'], function(createjs) {
  var FighterModel;
  return FighterModel = (function() {
    function FighterModel(arrManifest) {
      this.arrManifest = arrManifest;
      this.strName = 'Fighter';
      this.strDescription = 'A fighter from the pits of hell.';
      this.strUID = (function() {
        var i, numString, numTotal, _i;
        numTotal = 10;
        numString = '';
        for (i = _i = 0; _i < numTotal; i = _i += 1) {
          numString = numString + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return numString;
      })();
      this.loadQueue = new createjs.LoadQueue(true);
      this.numHealth = 100;
      this.numStamina = 100;
      this.numSpecial = 1000;
      this.numSpeed = 10;
      this.objDefenses = {
        PHYSICAL: 0
      };
      this.strState = 'IDLE';
      this.boolActive = true;
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
      this.loadQueue.on('complete', this.onManifestLoaded, this);
    }

    FighterModel.prototype.loadManifest = function(arrManifest) {
      return this.loadQueue.loadManifest(arrManifest);
    };

    FighterModel.prototype.onManifestLoaded = function() {
      this.objSpritesheet = new createjs.SpriteSheet(this.loadQueue.getResult('SPRITESHEET_JSON'));
      console.log('don');
      return this.onManifestComplete();
    };

    FighterModel.prototype.onManifestComplete = function() {};

    FighterModel.prototype.setNewKey = function(strKey) {};

    FighterModel.prototype.emitMove = function(numX, numY) {
      if (numX == null) {
        numX = 0;
      }
      if (numY == null) {
        numY = 0;
      }
    };

    FighterModel.prototype.emitDamage = function(numAmount, strType) {
      if (strType == null) {
        strType = 'PHYSICAL';
      }
    };

    FighterModel.prototype.emitState = function(strState, numDuration) {
      if (numDuration == null) {
        numDuration = 100;
      }
    };

    FighterModel.prototype.onDamage = function(numAmount, strType) {};

    FighterModel.prototype.onState = function(strState, numDuration) {};

    return FighterModel;

  })();
});
