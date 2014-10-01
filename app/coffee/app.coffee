config = 
	baseUrl: 'js'
	paths: 
		jquery: 'vendor/jquery'
		radio: 'vendor/radio'
		createjs: 'vendor/createjs'
		keypress: 'vendor/keypress'
	shim:
		createjs:
			exports: 'createjs'
		keypress:
			exports: 'keypress'

require.config config

requirejs [
	'modules/abstract/game/fightergame'
], ( FighterGame ) ->

	window.streetfighter = new FighterGame

