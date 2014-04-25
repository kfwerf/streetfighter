###
title: Actor
description: Actor that is subscribed to the stage for updates
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
###
define ['createjs', 'keypress'], ( createjs, keypress ) ->
	class classMovement extends createjs.EventDispatcher
		constructor: ( @objContainer ) ->
			super()

			# Key bindings for combinations

			@objKeyListener = new keypress.Listener()

			@objKeyBindings =
				'backward': 'left'
				'up': 'up'
				'forward': 'right'
				'down': 'down'
				'action_one': 'a'


			# Moves for any actor

			@numSpeed = 10
			@numIncrementX = 0
			@numIncrementY = 0

			@objMoves =
				'MOVE_FORWARD':
					'keys': @getKeys 'forward'
					'prevent_repeat': true
					'on_keydown': ->
						@numIncrementX = @numSpeed
					'on_keyup': ->
						@numIncrementX = 0
					'this': @
				
				'MOVE_BACKWARD':
					'keys': @getKeys 'backward'
					'prevent_repeat': true
					'on_keydown': ->
						@numIncrementX = -@numSpeed
					'on_keyup': ->
						@numIncrementX = 0
					'this': @

			for strKey, objProperties of @objMoves			
				@objKeyListener.register_combo @objMoves[strKey]


			# Initiate the tick

			createjs.Ticker.addEventListener 'tick', @theTick.bind(@)


		# The tick, loops
			
		theTick: ( e ) ->
			@objStage = @objContainer.getStage()
			if not @objStage then return false

			@numWidth = @objStage.canvas.width
			@numHeight = @objStage.canvas.height

			numNewX = @objContainer.x + @numIncrementX
			numNewY = @objContainer.x + @numIncrementY

			if numNewX > 0 and numNewX < @numWidth - @objContainer.numWidth then @objContainer.x = numNewX

		# Util functions

		getKeys: ( strCombination ) ->
			if @objKeyBindings
				arrDecodedCombination = []
				arrCombination = strCombination.split(' ')
				for strKey in arrCombination
					arrDecodedCombination.push @objKeyBindings[strKey]
				arrDecodedCombination.join ' '