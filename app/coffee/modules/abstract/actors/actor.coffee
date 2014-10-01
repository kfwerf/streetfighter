###*
 * Base class for usage on the stage
 * @author Kenneth van der Werf
 * @class actor
 * @package abstract/actors
 * @description The base class from which actors are derived.
 * --
 * @param  {Class} createjs Framework for canvas game operations
 * @param  {Class} radio    Event emitter and receiver system
 * @return {Class}          Actor Base Class. Usage as a base to create actors on the stage with.
###
define [
	'createjs'
], ( createjs, radio ) ->
	class Actor
		constructor: ->
			@strName = 'Actor'
			@strDescription = 'A Actor on the stage.'
			@strUID = do () ->
				numTotal = 10
				numString = ''
				for i in [0...numTotal] by 1 then numString = numString + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
				numString

			@objContainer = new createjs.Container()

			@objSpritesLoader = new createjs.LoadQueue true
			@objSpritesLoader.on 'complete', @onSpritesLoaded, this

		loadSprites: ( objManifest ) ->
			arrManifest = do () ->
				for strId of objManifest
					id: strId
					src: objManifest[strId]
			
			@objSpritesLoader.loadManifest arrManifest

		onSpritesLoaded: ->
			@objSpritesheet = new createjs.SpriteSheet @objSpritesLoader.getResult 'SPRITESHEET_JSON'
			@setAnimation 'IDLE'
		
		setAnimation: (strType = 'IDLE') ->
			if @objSpritesheet
				@objContainer.removeAllChildren()
				@objContainer.addChild new createjs.Sprite @objSpritesheet, strType
