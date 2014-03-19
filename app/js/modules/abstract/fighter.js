
/*
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['radio', 'keypress', 'modules/abstract/actor', 'modules/abstract/fightermodel', 'modules/abstract/fighterview'], function(radio, keypress, Actor, FighterModel, FighterView) {
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
      this.objContainer = this.viewFighter.objContainer;
      objManifest = {
        'SPRITESHEET_JSON': './data/fighters/ryu.json',
        'SPRITESHEET_IMG': './data/fighters/ryu.png'
      };
      this.modelFighter.loadManifest(objManifest);
      this.objKeyListener = new keypress.Listener();
      this.objKeyBindings = {
        'left': 'left',
        'up': 'up',
        'right': 'right',
        'down': 'down',
        'action_one': 'a'
      };
      this.objMoves = {
        'MOVE_FORWARD': {
          'keys': this.getDecodedCombination('left'),
          'prevent_repeat': true,
          'on_keydown': function() {
            this.viewFighter.setAnimation('MOVE_FORWARD');
            this.modelFighter.strState = 'MOVING';
            return this.modelFighter.objDirection.x = this.modelFighter.numSpeed;
          },
          'on_keyup': function() {
            this.viewFighter.setAnimation('IDLE');
            this.modelFighter.strState = 'IDLE';
            return this.modelFighter.objDirection.x = 0;
          },
          'this': this
        },
        'MOVE_BACKWARD': {
          'keys': this.getDecodedCombination('right'),
          'prevent_repeat': true,
          'on_keydown': function() {
            this.viewFighter.setAnimation('MOVE_BACKWARD');
            this.modelFighter.strState = 'MOVING';
            return this.modelFighter.objDirection.x = 0 - this.modelFighter.numSpeed;
          },
          'on_keyup': function() {
            this.viewFighter.setAnimation('IDLE');
            this.modelFighter.strState = 'IDLE';
            return this.modelFighter.objDirection.x = 0;
          },
          'this': this
        },
        'CROUCH': {
          'keys': this.getDecodedCombination('down'),
          'on_keydown': function() {
            this.viewFighter.setAnimation('CROUCH');
            return this.modelFighter.strState = 'CROUCHING';
          },
          'on_keyup': function() {
            this.viewFighter.setAnimation('IDLE');
            return this.modelFighter.strState = 'IDLE';
          },
          'this': this
        },
        'PUNCH': {
          'keys': this.getDecodedCombination('action_one'),
          'is_counting': true,
          'prevent_repeat': true,
          'on_keydown': function(e, i) {
            console.log(i);
            this.viewFighter.setAnimation('PUNCH');
            return this.modelFighter.strState = 'PUNCHING';
          },
          'on_keyup': function() {
            this.viewFighter.setAnimation('IDLE');
            return this.modelFighter.strState = 'IDLE';
          },
          'this': this
        }
      };
      this.objKeyListener.register_combo(this.objMoves['MOVE_FORWARD']);
      this.objKeyListener.register_combo(this.objMoves['MOVE_BACKWARD']);
      this.objKeyListener.register_combo(this.objMoves['PUNCH']);
      createjs.Ticker.addEventListener('tick', this.onTick.bind(this));
    }

    Fighter.prototype.onTick = function() {
      if (this.modelFighter.objDirection.x) {
        this.objContainer.x -= this.modelFighter.objDirection.x;
      }
      if (this.modelFighter.objDirection.y) {
        return this.objContainer.y += this.modelFighter.objDirection.y;
      }
    };

    Fighter.prototype.getDecodedCombination = function(strCombination) {
      var arrCombination, arrDecodedCombination, strKey, _i, _len;
      if (this.objKeyBindings) {
        arrDecodedCombination = [];
        arrCombination = strCombination.split(' ');
        for (_i = 0, _len = arrCombination.length; _i < _len; _i++) {
          strKey = arrCombination[_i];
          arrDecodedCombination.push(this.objKeyBindings[strKey]);
        }
        console.log(arrDecodedCombination.join(' '));
        return arrDecodedCombination.join(' ');
      }
    };

    Fighter.prototype.onManifestLoaded = function(loadQueue) {
      this.loadQueue = loadQueue;
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
