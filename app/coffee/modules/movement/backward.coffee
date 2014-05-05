###
title: Move Backward
description: Set the character backward on the x axis, depending on facing position
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
###
define ['createjs', 'modules/abstract/move'], ( createjs, classMove ) ->
	class classMoveForward extends classMove
		constructor: ( @objContainer, @numSpeed ) ->
			super( @objContainer, @numSpeed )

		doMove: ->			
			if @boolFacingRight
				@objContainer.x -= @numSpeed
			else 
				@objContainer.x += @numSpeed
