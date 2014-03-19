var config;

config = {
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery',
    radio: 'vendor/radio',
    createjs: 'vendor/createjs',
    keypress: 'vendor/keypress'
  },
  shim: {
    createjs: {
      exports: 'createjs'
    },
    keypress: {
      exports: 'keypress'
    }
  }
};

require.config(config);

requirejs(['createjs', 'modules/abstract/fighterstage', 'modules/abstract/fighter'], function(createjs, FighterStage, Fighter) {
  window.stage = new FighterStage('streetfighterGame');
  window.ryu = new Fighter;
  window.ryu.objContainer.y = 320;
  return window.stage.addFighter(window.ryu);
});
