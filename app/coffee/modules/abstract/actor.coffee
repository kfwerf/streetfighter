###
title: Actor
description: Actor that is subscribed to the stage for updates
dependencies: Event Dispatcher
author: Kenneth van der Werf
###
define ['createjs', 'keypress', 'rsvp', 'modules/abstract/eventdispatcher'], ( createjs, keypress, EventDispatcher, Movement ) ->
	class classActor extends EventDispatcher
		constructor: ->
			

			# Describing the actor
			
			@strName = 'John Doe'
			@strDescription = 'An average guy.'
			@strUid = do () ->
				numTotal = 10
				numString = ''
				for i in [0...numTotal] by 1 then numString = numString + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
				numString

			
			# Properties for any actor
			
			@numHealth = 100
			@numStamina = 100
			@numMagic = 100
			@numSpecial = 100
			@numSpeed = 10


			# States for any actor

			@strCurrentState = 'IDLE' # IDLE, MOVING, JUMPING, DEAD. Seperate classes for states and how they affect


			# Connection to the stage

			@objContainer = new createjs.Container()

			
			# Hitpiece

			@numHitWidth = 30
			@numHitHeight = 90
			
			@objHitArea = new createjs.Shape()
			@objHitArea.graphics.beginStroke('red').drawRect( 0, 0, @numHitWidth, @numHitHeight )
			@objContainer.addChild @objHitArea

		getActor: ->
			@objContainer

