###*
 * 
 * @author Kenneth van der Werf
 * @class moves
 * @package abstract/movement/moves
 * @description The base class from which actors are derived.
 * --
 * @param  {Class} createjs Framework for canvas game operations
 * @param  {Class} radio    Event emitter and receiver system
 * @return {Class}          Moves list
###
define [
	'keypress'
], ( keypress ) ->
	class Moves
		constructor: ( @objKeyBindings ) ->
			@strCurrentMove = 'IDLE'
			@strCurrentState = 'IDLE'
			@objKeyListener = new keypress.Listener()
			@objMoves =
				'MOVE_LEFT':
					'keys': @getCombination 'left'
					'prevent_repeat': true
					'on_keydown': -> @setMove 'MOVE_LEFT', 'MOVING'
					'on_keyup': -> @setMove 'IDLE', 'IDLE'
					'this': @
				'MOVE_RIGHT':
					'keys': @getCombination 'right'
					'prevent_repeat': true
					'on_keydown': -> @setMove 'MOVE_RIGHT', 'MOVING'
					'on_keyup': -> @setMove 'IDLE', 'IDLE'
					'this': @
				'JUMP':
					'keys': @getCombination 'up'
					'on_keydown': -> @setMove 'JUMP', 'JUMPING'
					'on_keyup': -> @setMove 'IDLE', 'IDLE'
					'this': @
				'CROUCH':
					'keys': @getCombination 'down'
					'on_keydown': -> @setMove 'CROUCH', 'CROUCHING'
					'on_keyup': -> @setMove 'IDLE', 'IDLE'
					'this': @
				'PUNCH':
					'keys': @getCombination 'action_one'
					'is_counting': true
					'prevent_repeat': true
					'on_keydown': -> @setMove 'PUNCH', 'PUNCHING'
					'on_keyup': -> @setMove 'IDLE', 'IDLE'
					'this': @

			for strKey, objValue of @objMoves
				@objKeyListener.register_combo @objMoves[strKey]
		setMove: ( @strCurrentMove, @strCurrentState ) ->
		getCombination: ( strCombination ) ->
			console.log strCombination
			if @objKeyBindings
				arrDecodedCombination = []
				arrCombination = strCombination.split(' ')
				for strKey in arrCombination
					arrDecodedCombination.push @objKeyBindings[strKey]
				arrDecodedCombination.join ' '
		current: ->
			action: @[@strCurrentMove]
			move: @strCurrentMove
			state: @strCurrentState
		MOVE_LEFT: ->
			x: 5
			y: 0
		MOVE_RIGHT: ->
		CROUCH: ->
		PUNCH: ->
		