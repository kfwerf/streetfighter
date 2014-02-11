var config;

config = {
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery',
    radio: 'vendor/radio',
    createjs: 'vendor/createjs'
  },
  shim: {
    createjs: {
      exports: 'createjs'
    }
  }
};

require.config(config);

requirejs(['createjs', 'modules/abstract/fighterstage', 'modules/abstract/fighter'], function(createjs, FighterStage, Fighter) {
  window.stage = new FighterStage('streetfighterGame');
  window.ryu = new Fighter;
  window.stage.addFighter(window.ryu);
  window.ken = new Fighter;
  return window.stage.addFighter(window.ken);
});
