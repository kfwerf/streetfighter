###
@Author: Kenneth van der Werf
@Name: FighterView class
@Description: View that handles the sprites in combination with CreateJS
###
define ['createjs'], ( createjs ) ->
	class FighterView
		constructor: ( @objStage ) ->	
			@objSpritesheet = {}
			@objAnimations = {}
			

		setSpritesheet: (@objSpritesheet) ->
			self = @
            # console.log new createjs.Sprite @objSpritesheet, 'idle'
			@objAnimations['IDLE'] = new createjs.Sprite @objSpritesheet, 'idle'

            
        


