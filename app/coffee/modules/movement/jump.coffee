###
title: Move Jump
description: Set the character forward on the y axis, based on gravity and velocity
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
###
define ['createjs', 'modules/abstract/move'], ( createjs, classMove ) ->
	class classMoveJump extends classMove
		constructor: ( @objContainer, @numSpeed ) ->
			super( @objContainer, @numSpeed )

			@numGravity = 3

		doMove: ->			
			@numVelocity += @numGravity
			@objContainer.y += @numVelocity

		playMove: ->
			@numVelocity = -20
			@boolActive = true
