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
	window.ryu = new Fighter 'streetfighterGame'
	
	console.log window.ryu