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

requirejs ['createjs', 'modules/abstract/stage', 'modules/abstract/fighter'], ( createjs, Stage, Fighter ) ->
	window.stage = new Stage 'streetfighterGame'
	window.ryu = new Fighter
	
	window.stage.addChild window.ryu