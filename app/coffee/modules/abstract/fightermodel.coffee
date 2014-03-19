###
@Author: Kenneth van der Werf
@Name: FighterModel class
@Description: Data for a fighter character
###
define ['createjs', 'radio'], ( createjs, radio ) ->
	class FighterModel
		constructor: ( @strUID = '' ) ->
			@loadQueue = new createjs.LoadQueue true

			@numHealth = 100
			@numStamina = 100
			@numSpecial = 1000
			@numSpeed = 10

			@objDirection =
				x: 0
				y: 0
			
			@objDefenses =
				PHYSICAL: 0

			@strState = 'IDLE' # UNCONCIOUS / DEAD / CROUCHING / JUMPING / DEFENDING / ATTACKING / STUNNED / SLOWED
			@boolActive = true

			@loadQueue.on 'complete', @onManifestLoaded, this

		# --
		# Loading
		# --
		loadManifest: ( objManifest ) ->
			arrManifest = do () ->
				for strId of objManifest
					id: strId
					src: objManifest[strId]
			@loadQueue.loadManifest arrManifest
		onManifestLoaded: () ->
			@objSpritesheet = new createjs.SpriteSheet @loadQueue.getResult 'SPRITESHEET_JSON'
			radio("#{@strUID}.MODEL.MANIFEST_LOADED").broadcast @loadQueue

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





