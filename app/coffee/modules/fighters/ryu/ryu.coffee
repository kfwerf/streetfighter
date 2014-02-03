###
@Author: Kenneth van der Werf
@Name: Ryu fighter class
@Description: Character Ryu modsel and view
###
define ['modules/abstract/fighter', 'modules/fighters/ryu/ryumodel', 'modules/fighters/ryu/ryuview', ], ( Fighter, RyuModel, RyuView ) ->
	class Ryu extends Fighter
		constructor: ( @objStage ) ->
			super()

			arrManifest = [
				{
					id: 'SPRITESHEET_IMG',
					src: './data/fighters/ryu.json'
				} 
				{
					id: 'SPRITESHEET_JSON',
					src: './data/fighters/ryu.png'
				}
			]

			@modelFighter = new RyuModel()
			@viewFighter = new RyuView()

			@modelFighter.loadManifest arrManifest

			# @setName 'Ryu'

			objHadouken =
				name: 'hadouken'
				combination: ['ACTION_ONE']
				emit: 
					type: 'DAMAGE'
					form: 'FIREBALL'
					amount: 5

			@setMove objHadouken

			# @setMoves arrMoves


