###
@Author: Kenneth van der Werf
@Name: FighterModel class
@Description: Data for a fighter character
###
define [], (  ) ->
	class FighterModel
		constructor: ( @arrManifest ) ->
			@strName = 'Fighter'
			@strDescription = 'A fighter from the pits of hell.'
			@strUID = do () ->
				numTotal = 10
				numString = ''
				for i in [0...numTotal] by 1 then numString = numString + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
				numString

			@loadQueue = new createjs.LoadQueue true

			@numHealth = 100
			@numStamina = 100
			@numSpecial = 1000
			@numSpeed = 10
			
			@objDefenses =
				PHYSICAL: 0

			@strState = 'IDLE' # UNCONCIOUS / DEAD / CROUCHING / JUMPING / DEFENDING / ATTACKING / STUNNED / SLOWED
			@boolActive = true

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

			@loadQueue.on 'complete', @onManifestLoaded, this

		# --
		# Loading
		# --
		loadManifest: ( arrManifest ) ->
			@loadQueue.loadManifest arrManifest
		onManifestLoaded: () ->
			# console.log this
			@objSpritesheet = new createjs.SpriteSheet(@loadQueue.getResult 'SPRITESHEET_JSON')
			console.log 'done'

		# --
		# Key handling
		# --
		setNewKey: ( strKey ) ->
			# Pass the new key to the inputcombinator which logically will return a key that can be handled

		# --
		# Movin
		# --
		emitMove: (numX = 0, numY = 0) ->

		
		# --
		# Hit dealing
		# --
		emitDamage: ( numAmount, strType = 'PHYSICAL' ) ->
			# Check if stamina is still available or mana
			# When giving damage, specify amount of damage and the type

			# radio('#{@strUID}.DAMAGE')
		emitState: ( strState, numDuration = 100 ) ->
			# When emitting a state, give state and length in ms
		
		# --
		# Hit taking
		# --
		onDamage: ( numAmount, strType ) ->
		onState: ( strState, numDuration ) ->





