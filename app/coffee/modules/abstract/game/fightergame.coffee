###*
 * 
 * @author Kenneth van der Werf
 * @class moves
 * @package abstract/movement/moves
 * @description The base class from which actors are derived.
 * --
 * @param  {Class} createjs Framework for canvas game operations
 * @param  {Class} radio    Event emitter and receiver system
 * @return {Class}          Moves list
###
define [
	'createjs'
	'radio'
	'modules/abstract/game/game'
	'modules/abstract/actors/fighter'
	'modules/abstract/stage/fighterstage'
], ( createjs, radio, Game, Fighter, FighterStage ) ->
	class FighterGame extends Game
		constructor: () ->
			createjs.Ticker.addEventListener 'tick', @onUpdate.bind( this )
			@objStage = new FighterStage 'streetfighterGame'
			@objFighter = new Fighter

			# A new challenger appears!
			@objStage.addFighter @objFighter
			

		onUpdate: ->
			@objStage.update()

			fnActions = @objFighter.getMoves().current().action
			objActions = if typeof fnActions is 'function' then fnActions.call(this) else {}
			if objActions.x
				@objFighter.objContainer.x += objActions.x
				@objFighter.setAnimation 'MOVE_FORWARD'
			
			# First, evaluate what goes first, check timestamps
			# 
			# Second, evaluate if current action is possible
			# 
			# Third, set action up in the queue
			# 
		