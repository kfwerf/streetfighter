###
@Author: Kenneth van der Werf
@Name: Stage class
@Description: Stage that is handling all the actors
###
define [ 
	'createjs' 
], ( createjs ) ->
	class Stage
		constructor: ( @strStageName = 'myGameStage' ) ->
			@objStage = new createjs.Stage @strStageName
		update: ->
			@objStage.update()

	        

