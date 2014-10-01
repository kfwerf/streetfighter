###
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
###
define [
	'radio'
	'keypress'
	'modules/abstract/actors/actor'
	'modules/abstract/movement/moves'
], ( radio, keypress, Actor, Moves ) ->
	class Fighter extends Actor
		constructor: () ->
			super()

			@strName = 'Fighter'
			@strDescription = 'A fighter from the pits of hell.'

			@loadSprites
				'SPRITESHEET_JSON': './data/fighters/ryu.json'
				'SPRITESHEET_IMG': './data/fighters/ryu.png'

			@objMoves = new Moves
				'left': 'left'
				'up': 'up'
				'right': 'right'
				'down': 'down'
				'action_one': 'a'

		getMoves: ->
			@objMoves

		getInstance: ->
			@objContainer



