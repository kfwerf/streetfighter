###
title: Move
description: Move that can be executed by user that moves a objContainer over the x or y axis
dependencies: Event Dispatcher, Actor parent
author: Kenneth van der Werf
###
define ['createjs'], ( createjs ) ->
	class classMove extends createjs.EventDispatcher
		constructor: ( @objContainer, @numSpeed = 5 ) ->
			return false unless @objContainer
			
			@boolActive = false
			@numSpeed = 5
			@boolFacingRight = true
			createjs.Ticker.addEventListener 'tick', @theTick.bind(@)
		
		theTick: ->
			@objStage = @objContainer.getStage()
			return false unless @boolActive and @objStage

			if not @boolDebug
				@boolDebug = true
				console.debug @objContainer, @objStage
			@doMove.call @

		doMove: -> true
		playMove: -> @boolActive = true
		stopMove: -> @boolActive = false