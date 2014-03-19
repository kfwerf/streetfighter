###
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
###
define ['radio', 'keypress', 'modules/abstract/actor', 'modules/abstract/fightermodel', 'modules/abstract/fighterview'], ( radio, keypress, Actor, FighterModel, FighterView ) ->
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

			@objKeyListener = new keypress.Listener()
			@objKeyBindings =
				'left': 'left'
				'up': 'up'
				'right': 'right'
				'down': 'down'
				'action_one': 'a'
			@objMoves =
				'MOVE_FORWARD':
					'keys': @getDecodedCombination 'left'
					'prevent_repeat': true
					'on_keydown': () ->
						@viewFighter.setAnimation 'MOVE_FORWARD'
						@modelFighter.strState = 'MOVING'
						@modelFighter.objDirection.x = @modelFighter.numSpeed
						
					'on_keyup': () ->
						@viewFighter.setAnimation 'IDLE'
						@modelFighter.strState = 'IDLE'
						@modelFighter.objDirection.x = 0
					'this': @
				'MOVE_BACKWARD':
					'keys': @getDecodedCombination 'right'
					'prevent_repeat': true
					'on_keydown': () ->
						@viewFighter.setAnimation 'MOVE_BACKWARD'
						@modelFighter.strState = 'MOVING'
						@modelFighter.objDirection.x = 0 - @modelFighter.numSpeed
					'on_keyup': () ->
						@viewFighter.setAnimation 'IDLE'
						@modelFighter.strState = 'IDLE'
						@modelFighter.objDirection.x = 0
					'this': @
				'CROUCH':
					'keys': @getDecodedCombination 'down'
					'on_keydown': () ->
						@viewFighter.setAnimation 'CROUCH'
						@modelFighter.strState = 'CROUCHING'
					'on_keyup': () ->
						@viewFighter.setAnimation 'IDLE'
						@modelFighter.strState = 'IDLE'
					'this': @
				'PUNCH':
					'keys': @getDecodedCombination 'action_one'
					'is_counting': true
					'prevent_repeat': true
					'on_keydown': (e, i) ->
						console.log i
						@viewFighter.setAnimation 'PUNCH'
						@modelFighter.strState = 'PUNCHING'
					'on_keyup': () ->
						@viewFighter.setAnimation 'IDLE'
						@modelFighter.strState = 'IDLE'
					'this': @

			@objKeyListener.register_combo @objMoves['MOVE_FORWARD']
			@objKeyListener.register_combo @objMoves['MOVE_BACKWARD']
			@objKeyListener.register_combo @objMoves['PUNCH']

			createjs.Ticker.addEventListener 'tick', @onTick.bind( this )

		onTick: () ->
			if @modelFighter.objDirection.x
				@objContainer.x -= @modelFighter.objDirection.x
			if @modelFighter.objDirection.y
				@objContainer.y += @modelFighter.objDirection.y
			
		getDecodedCombination: (strCombination) ->
			if @objKeyBindings
				arrDecodedCombination = []
				arrCombination = strCombination.split(' ')
				for strKey in arrCombination
					arrDecodedCombination.push @objKeyBindings[strKey]
				console.log arrDecodedCombination.join ' '
				arrDecodedCombination.join ' '


		onManifestLoaded: ( @loadQueue ) ->
			@viewFighter.setSpritesheet @modelFighter.objSpritesheet

		setMove: ( objMove ) ->
			switch objMove.emit.type.toUpperCase()
				when 'DAMAGE' then console.log 'damage'
				when 'STATE' then console.log 'move is a state'
				when 'MOVING' then console.log 'move is a move'





