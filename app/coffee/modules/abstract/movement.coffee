###
title: Movement
description: Movement controller for actor, uses modular moves
dependencies: Event Dispatcher, Actor parent, Moves
author: Kenneth van der Werf
###
define ['createjs', 'keypress', 'underscore', 'modules/movement/forward', 'modules/movement/backward', 'modules/movement/jump'], ( createjs, keypress, _, classMoveForward, classMoveBackward, classMoveJump ) ->
	class classMovement extends createjs.EventDispatcher
		constructor: ( @objContainer ) ->
			super()
			@initialize( @prototype )
			return false unless @objContainer

			@evtUpdate = new createjs.Event 'update'


			# Boundaries

			@objBounds =
				numLeft: 0
				numRight: @objContainer.getStage().canvas.width - @objContainer.numWidth # Might need to change later
				numTop: 0
				numBottom: @objContainer.getStage().canvas.height - @objContainer.numHeight


			# Key bindings for combinations

			@objKeyListener = new keypress.Listener()

			@objKeyBindings =
				'backward': 'left'
				'up': 'up'
				'forward': 'right'
				'down': 'down'
				'action_one': 'a'
				'action_two': 's'


			# Bindings

			@objMoves =
				'MOVE_FORWARD': @setMove 'forward', classMoveForward
				'MOVE_BACKWARD': @setMove 'backward', classMoveBackward
				'JUMP': @setMove 'up', classMoveJump

		
		# Easier factory for creating moves

		setMove: ( strCombination, objMove ) ->

			objModule = new objMove @objContainer, @objBounds
			strName = objModule.strName
			strDescription = objModule.strDescription

			objNewMove =
				'module': objModule
				'name': strName
				'description': strDescription
				
				'keys': @getKeys strCombination
				'prevent_repeat': true
				'on_keydown': -> 
					objModule.playMove()
				'on_keyup': -> objModule.stopMove()
				'this': @

			@objKeyListener.register_combo objNewMove

			objNewMove

		# Util functions

		getKeys: ( strCombination ) ->
			if @objKeyBindings
				arrDecodedCombination = []
				arrCombination = strCombination.split(' ')
				for strKey in arrCombination
					arrDecodedCombination.push @objKeyBindings[strKey]
				arrDecodedCombination.join ' '