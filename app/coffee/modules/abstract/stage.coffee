###
title: Stage
description: Stage that has actors it observes
dependencies: 
author: Kenneth van der Werf
###
define [ 'createjs' ], ( createjs ) ->
	class Stage
		constructor: ( @strStageName = 'theStage' ) ->
			

			# Core component for the stage

			@objStage = new createjs.Stage @strStageName


			# All actors on the stage

			@objActors = {}


			# Looping the tick

			createjs.Ticker.addEventListener 'tick', @theTick.bind( this )


		theTick: () ->
			@objStage.update()


		# Adding actor classes to the stage

		addActor: ( objActor ) ->
			@objActors[ 'strUid' ] = objActor
			@objStage.addChild @objActors[ 'strUid' ].getActor()