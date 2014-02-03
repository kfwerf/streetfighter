config = 
	baseUrl: 'js'
	paths: 
		jquery: 'vendor/jquery'
		radio: 'vendor/radio'
		createjs: 'vendor/createjs'
	shim:
		createjs:
			exports: 'createjs'

require.config config

requirejs ['createjs', 'modules/fighters/ryu/ryu'], ( createjs, Ryu ) ->
	objStage = new createjs.Stage 'streetfighterGame'
	window.ryu = new Ryu objStage
	
	console.log window.ryu