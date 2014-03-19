
/*
@Author: Kenneth van der Werf
@Name: FighterModel class
@Description: Data for a fighter character
 */
define(['createjs', 'radio'], function(createjs, radio) {
  var FighterModel;
  return FighterModel = (function() {
    function FighterModel(strUID) {
      this.strUID = strUID != null ? strUID : '';
      this.loadQueue = new createjs.LoadQueue(true);
      this.numHealth = 100;
      this.numStamina = 100;
      this.numSpecial = 1000;
      this.numSpeed = 10;
      this.objDirection = {
        x: 0,
        y: 0
      };
      this.objDefenses = {
        PHYSICAL: 0
      };
      this.strState = 'IDLE';
      this.boolActive = true;
      this.loadQueue.on('complete', this.onManifestLoaded, this);
    }

    FighterModel.prototype.loadManifest = function(objManifest) {
      var arrManifest;
      arrManifest = (function() {
        var strId, _results;
        _results = [];
        for (strId in objManifest) {
          _results.push({
            id: strId,
            src: objManifest[strId]
          });
        }
        return _results;
      })();
      return this.loadQueue.loadManifest(arrManifest);
    };

    FighterModel.prototype.onManifestLoaded = function() {
      this.objSpritesheet = new createjs.SpriteSheet(this.loadQueue.getResult('SPRITESHEET_JSON'));
      return radio("" + this.strUID + ".MODEL.MANIFEST_LOADED").broadcast(this.loadQueue);
    };

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
