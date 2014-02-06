###
@Author: Kenneth van der Werf
@Name: Actor class
@Description: Actor that is subscribed to the stage
###
define ['createjs'], ( createjs ) ->
	class Actor
	    setStage: ( @strStageName ) ->
	        @objStage = new createjs.Stage @strStageName