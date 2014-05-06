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

			@numGround = @objContainer.y
			@numCeil = @objBounds.numTop

			@numGravity = 2

		doMove: ->			
			@numVelocity += @numGravity
			@objContainer.y += @numVelocity

			if @objContainer.y > @numGround
				@boolActive = false
				@objContainer.y = @numGround

		playMove: ->
			if not @boolActive
				@numVelocity = -20
				@boolActive = true
		
		stopMove: -> false # Disable this from doing the normal move

