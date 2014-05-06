require.config
	baseUrl: 'js'
	paths: 
		jquery: 'vendor/jquery'
		radio: 'vendor/radio'
		createjs: 'vendor/createjs'
		keypress: 'vendor/keypress'
		rsvp: 'vendor/rsvp'
		underscore: 'vendor/underscore'
	shim:
		createjs:
			exports: 'createjs'
		keypress:
			exports: 'keypress'

requirejs ['modules/abstract/actor', 'modules/abstract/stage'], ( Actor, Stage ) ->
	
	window.stage = new Stage( 'theStage' )
	window.actor = new Actor @

	window.stage.addActor window.actor

	window.actor.initializeActor 0, 300

	# actor.y = 300

	
