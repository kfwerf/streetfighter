###
@Author: Kenneth van der Werf
@Name: FighterView class
@Description: View that handles the sprites in combination with CreateJS
###
define ['createjs', 'radio'], ( createjs, radio ) ->
	class FighterView
		constructor: ( @strUID = '' ) ->
			@objContainer = new createjs.Container()
			@objSpritesheet = {}
			@objAnimations = {}			
		
		setSpritesheet: (@objSpritesheet) ->
			@setAnimation 'IDLE'
		
		setAnimation: (strType = 'IDLE') ->
			@objContainer.removeAllChildren()
			@objContainer.addChild new createjs.Sprite @objSpritesheet, strType




