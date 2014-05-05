###
title: Actor
description: Actor that is subscribed to the stage for updates
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
###
define ['createjs', 'keypress', 'modules/movement/forward', 'modules/movement/backward'], ( createjs, keypress, classMoveForward, classMoveBackward ) ->
	class classMovement extends createjs.EventDispatcher
		constructor: ( @objContainer ) ->
			super()
			@initialize( @prototype )

			@evtUpdate = new createjs.Event 'update'


			# Move classes

			@objMoveForward = new classMoveForward @objContainer
			@objMoveBackward = new classMoveBackward @objContainer

			# States

			@boolJumping = false
			@boolMoving = false
			@boolCrouching = false


			# Key bindings for combinations

			@objKeyListener = new keypress.Listener()

			@objKeyBindings =
				'backward': 'left'
				'up': 'up'
				'forward': 'right'
				'down': 'down'
				'action_one': 'a'
				'action_two': 's'


			# Moves for any actor

			@numSpeed = 1
			@numGravity = .5
			@numVelocityY = 0
			
			@numCeiling = 0
			@numFloor = 0


			# Bindings

			@objMoves =
				'MOVE_FORWARD':
					'keys': @getKeys 'forward'
					'prevent_repeat': true
					'on_keydown': ->
						@objMoveForward.playMove()
					'on_keyup': ->
						@objMoveForward.stopMove()
					'this': @
				
				'MOVE_BACKWARD':
					'keys': @getKeys 'backward'
					'prevent_repeat': true
					'on_keydown': ->
						@objMoveBackward.playMove()
					'on_keyup': ->
						@objMoveBackward.stopMove()
					'this': @
				'CROUCH':
					'keys': @getKeys 'down'
					'prevent_repeat': true
					'on_keydown': ->
						# @strCurrentState = 'CROUCHING'
					'on_keyup': ->
						# @strCurrentState = 'IDLE'
					'this': @
				'JUMP':
					'keys': @getKeys 'up'
					'prevent_repeat': true
					'on_keydown': ->
						@boolJumping = true
						@numVelocityY = -20
						# @numIncrementY = @
					'on_keyup': ->
						# @boolJumping = false
						# @strCurrentState = 'IDLE'
					'this': @

			for strKey, objProperties of @objMoves			
				@objKeyListener.register_combo @objMoves[strKey]


			# Initiate the tick

			createjs.Ticker.addEventListener 'tick', @theTick.bind(@)
			# createjs.Stage.addEventListener

		# The tick, loops
			
		theTick: ( e ) ->
			@objStage = @objContainer.getStage()

			if @boolJumping
				# Try some jumping
				@numVelocityY += @numGravity
				@objContainer.y += @numVelocityY
				# Determine floor

			# @doMoveLeftRight()
			# @doMoveUp()


		doJump: ( e ) ->
			false unless @objStage and @boolJumping

			@numHeight = @objStage.canvas.numHeight

			numNewY = @objContainer.y + @numIncrementY


		doMoveX: ( e ) ->
			false unless @objStage and @boolMoving

			@numWidth = @objStage.canvas.width

			numNewX = @objContainer.x + @numIncrementX
			if numNewX > 0 and numNewX < @numWidth - @objContainer.numWidth then @objContainer.x = numNewX

		# Util functions

		getKeys: ( strCombination ) ->
			if @objKeyBindings
				arrDecodedCombination = []
				arrCombination = strCombination.split(' ')
				for strKey in arrCombination
					arrDecodedCombination.push @objKeyBindings[strKey]
				arrDecodedCombination.join ' '