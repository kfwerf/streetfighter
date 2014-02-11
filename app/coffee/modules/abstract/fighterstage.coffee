###
@Author: Kenneth van der Werf
@Name: Stage class
@Description: Stage that is handling all the actors
###
define [ 'createjs', 'modules/abstract/stage' ], ( createjs, Stage ) ->
	class FighterStage extends Stage
		constructor: ( @strStageName = 'myGameStage' ) ->
			super(@strStageName)

			@objFighters = {}

		addFighter: ( Fighter ) ->
			@objFighters[Fighter.strUID] = Fighter
			@objStage.addChild Fighter.viewFighter.objContainer

