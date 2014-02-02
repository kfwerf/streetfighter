###
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
###
define ['modules/abstract/fightermodel', 'modules/abstract/fighterview'], ( FighterModel, FighterView ) ->
	class Fighter
		constructor: ( @objStage ) ->	
			@modelFighter = new FighterModel()
			@viewFighter = new FighterView()

		setMove: ( objMove ) ->
			switch objMove.emit.type.toUpperCase()
				when 'DAMAGE' then console.log 'damage'
				when 'STATE' then console.log 'move is a state'
				when 'MOVING' then console.log 'move is a move'





