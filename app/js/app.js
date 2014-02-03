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

requirejs(['createjs', 'modules/fighters/ryu/ryu'], function(createjs, Ryu) {
  var objStage;
  objStage = new createjs.Stage('streetfighterGame');
  window.ryu = new Ryu(objStage);
  return console.log('hi friendssss');
});
