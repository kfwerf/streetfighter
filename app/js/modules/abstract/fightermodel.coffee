# Author: Kenneth van der Werf
# Description: Module for Turntable

define [ "require", "jquery", "radio", "modules/abstract/inputcombinator" ], ( require, $, radio, InputCombinator ) ->
	class Fighter
		constructor: () ->
			@strName = "Fighter"
			@strDescription = "A fighter from the pits of hell."
			@strUID = do () ->
				numTotal = 10
				numString = ""
				for i in [0...numTotal] by 1 then numString = numString + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
				numString

			@objDefaultProperties =
				HEALTH: 100
				STAMINA: 100
				SPECIAL: 100
				SPEED: 10

			@objProperties = $.extend {}, @objDefaultProperties # Needs to be not jquery
			
			@objDefenses =
				PHYSICAL: 0

			@strState = "IDLE" # UNCONCIOUS / DEAD / CROUCHING / JUMPING / DEFENDING / ATTACKING / STUNNED / SLOWED
			@boolActive = true

			@objKeyBindings =
				37: "LEFT"
				38: "UP"
				39: "RIGHT"
				40: "DOWN"
				65: "ACTION_ONE"
			@objKeyMapping =
				"MOVE_RIGHT": ["RIGHT"]
				"MOVE_LEFT": ["LEFT"]
				"JUMP": ["UP"]
				"CROUCH": ["DOWN"]

		# --
		# Key handling
		# --
		setNewKey: ( strKey ) ->
			# Pass the new key to the inputcombinator which logically will return a key that can be handled
		
		# --
		# Hit dealing
		# --
		emitDamage: ( numAmount, strType = 'PHYSICAL' ) ->
			# Check if stamina is still available or mana
			# When giving damage, specify amount of damage and the type

			# radio("#{@strUID}.DAMAGE")
		emitState: ( strState, numDuration = 100 ) ->
			# When emitting a state, give state and length in ms
		
		# --
		# Hit taking
		# --
		onDamage: ( numAmount, strType ) ->
		onState: ( strState, numDuration ) ->





