###
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
###
define ['radio', 'modules/abstract/actor', 'modules/abstract/fightermodel', 'modules/abstract/fighterview'], ( radio, Actor, FighterModel, FighterView ) ->
	class Fighter extends Actor
		constructor: () ->
			super()
			
			@strName = 'Fighter'
			@strDescription = 'A fighter from the pits of hell.'

			radio("#{@strUID}.MODEL.MANIFEST_LOADED").subscribe [ @onManifestLoaded, @ ]

			@modelFighter = new FighterModel @strUID
			@viewFighter = new FighterView @strUID

			@objContainer = @viewFighter.objContainer

			objManifest =
				'SPRITESHEET_JSON': './data/fighters/ryu.json'
				'SPRITESHEET_IMG': './data/fighters/ryu.png'

			@modelFighter.loadManifest objManifest

		onManifestLoaded: ( @loadQueue ) ->
			@viewFighter.setSpritesheet @modelFighter.objSpritesheet

		setMove: ( objMove ) ->
			switch objMove.emit.type.toUpperCase()
				when 'DAMAGE' then console.log 'damage'
				when 'STATE' then console.log 'move is a state'
				when 'MOVING' then console.log 'move is a move'





