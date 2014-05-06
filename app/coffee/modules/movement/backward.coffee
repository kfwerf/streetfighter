###
title: Move Backward
description: Set the character backward on the x axis, depending on facing position
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
###
define ['createjs', 'modules/abstract/move'], ( createjs, classMove ) ->
	class classMoveForward extends classMove
		constructor: ( @objContainer, @objBounds, @numSpeed = 10 ) ->
			super( @objContainer, @objBounds, @numSpeed )

		doMove: ->			
			numNewAmount = if @boolFacingRight then @objContainer.x - @numSpeed else @objContainer.x + @numSpeed

			if numNewAmount < @objBounds.numRight and numNewAmount > @objBounds.numLeft then @objContainer.x = numNewAmount
