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
            console.log @objAnimations, @
            @objAnimations['idle'] = new createjs.Sprite @objSpritesheet, 'idle'
            
        


