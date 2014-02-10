###
@Author: Kenneth van der Werf
@Name: Fighter class
@Description: Controller for fighter view and model
###
define ['modules/abstract/actor', 'modules/abstract/fightermodel', 'modules/abstract/fighterview'], ( Actor, FighterModel, FighterView ) ->
	class Fighter extends Actor
		constructor: ( @modelFighter = new FighterModel(), @viewFighter = new FighterView()  ) ->
		    self = @
		    arrManifest = [
                {
                    id: 'SPRITESHEET_JSON'
                    src: './data/fighters/ryu.json'
                } 
                {
                    id: 'SPRITESHEET_IMG'
                    src: './data/fighters/ryu.png'
                }
		        ]
		    
		    @modelFighter.loadManifest arrManifest
		    @modelFighter.onManifestComplete = () -> 
		        self.viewFighter.setSpritesheet self.modelFighter.objSpritesheet

		    

		setMove: ( objMove ) ->
			switch objMove.emit.type.toUpperCase()
				when 'DAMAGE' then console.log 'damage'
				when 'STATE' then console.log 'move is a state'
				when 'MOVING' then console.log 'move is a move'





