###
title: Stage
description: Stage that has actors it observes
dependencies: 
author: Kenneth van der Werf
###
define [ 'createjs' ], ( createjs ) ->
	class Stage extends createjs.Stage
		constructor: ( @strStageName = 'theStage' ) ->
			@initialize @strStageName


			# Looping the tick

			createjs.Ticker.addEventListener 'tick', @theTick.bind( this )


		theTick: () ->
			@update()


		# Adding actor classes to the stage

		addActor: ( objActor ) ->
			@objActors[ 'strUid' ] = objActor
			@objStage.addChild @objActors[ 'strUid' ].getActor()