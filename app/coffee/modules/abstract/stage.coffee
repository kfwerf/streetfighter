###
title: Stage
description: Stage that has actors it observes
dependencies: 
author: Kenneth van der Werf
###
define [ 'createjs' ], ( createjs ) ->
	class Stage extends createjs.Stage
		constructor: ( @strStageName = 'theStage' ) ->
			@initialize @strStageName

			@objActors = {}



			@objGround = new createjs.Shape()
			@objGround.graphics.beginStroke('black').drawRect( 0, 0, @canvas.width, 1 )
			@addChild @objGround

			@objGround.y = 390

			# Looping the tick

			createjs.Ticker.addEventListener 'tick', @theTick.bind( this )


		theTick: () ->
			@update()


		# Adding actor classes to the stage

		addActor: ( objActor, numX = 0, numY = 0 ) ->
			strUid = objActor.strUid

			@objActors[ strUid ] = objActor
			@addChild @objActors[ strUid ]

			objActor.x = numX
			objActor.y = numY