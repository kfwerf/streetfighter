###
@Author: Kenneth van der Werf
@Name: Actor class
@Description: Actor that is subscribed to the stage
###
define ['createjs', 'radio'], ( createjs, radio ) ->
	class Actor
		constructor: () ->
			@strName = 'Actor'
			@strDescription = 'A Actor on the stage.'
			@strUID = do () ->
				numTotal = 10
				numString = ''
				for i in [0...numTotal] by 1 then numString = numString + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
				numString

			@objContainer = new createjs.Container()