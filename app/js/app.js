require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery',
    radio: 'vendor/radio',
    createjs: 'vendor/createjs',
    keypress: 'vendor/keypress',
    rsvp: 'vendor/rsvp'
  },
  shim: {
    createjs: {
      exports: 'createjs'
    },
    keypress: {
      exports: 'keypress'
    }
  }
});

requirejs(['modules/abstract/actor', 'modules/abstract/stage'], function(Actor, Stage) {
  window.stage = new Stage('theStage');
  window.actor = new Actor();
  return window.stage.addChild(window.actor);
});
