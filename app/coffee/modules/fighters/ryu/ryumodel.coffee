###
@Author: Kenneth van der Werf
@Name: Ryu model fighter class
@Description: Character Ryu model data
###
define ['modules/abstract/fightermodel' ], ( FighterModel ) ->
	class RyuModel extends FighterModel
		constructor: ->
			super()
			@strName = 'Ryu'
			@strDescription = 'A real hero.'
			


