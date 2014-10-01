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
	'createjs'
	'radio'
], ( createjs, radio ) ->
	class Game
		constructor: () ->

		