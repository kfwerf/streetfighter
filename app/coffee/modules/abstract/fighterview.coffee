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
			@objKeyBindings =
				37: 'LEFT'
				38: 'UP'
				39: 'RIGHT'
				40: 'DOWN'
				65: 'ACTION_ONE'
			@objKeyMapping =
				'MOVE_RIGHT': ['RIGHT'] 
				'MOVE_LEFT': ['LEFT']
				'JUMP': ['UP']
				'CROUCH': ['DOWN']
				'HADOUKEN': ['ACTION_ONE']

			console.log @objKeyBindings

			radio("#{@strUID}.VIEW.SPRITES_LOADED").subscribe [ @onSpritesLoaded, @ ]

		setSpritesheet: (@objSpritesheet) ->
			# console.log new createjs.Sprite @objSpritesheet, 'idle'
			@objAnimations['IDLE'] = new createjs.Sprite @objSpritesheet, 'IDLE'
			@objAnimations['MOVE_FORWARD'] = new createjs.Sprite @objSpritesheet, 'MOVE_FORWARD'
			@objAnimations['MOVE_BACKWARD'] = new createjs.Sprite @objSpritesheet, 'MOVE_BACKWARD'

			radio("#{@strUID}.VIEW.SPRITES_LOADED").broadcast [ @objAnimations, this ]

		onSpritesLoaded: ( objAnimations ) ->
			@setAnimation 'IDLE'

		setAnimation: (strType = 'IDLE') ->
			@objContainer.removeAllChildren()
			@objContainer.addChild @objAnimations[strType]




