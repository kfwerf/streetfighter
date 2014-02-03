streetfighter
=============

A WebRTC fighting game, based on the classic streetfighter II


# Thoughts on development

A place to put my thoughts about the development of this game. 
    

## Abstraction and fighters
    
    In order to create a decent fighter class, we need to abstract it. Schematics and ideas for a possible connection.
    
    
    '
            [object Fighter] ->
                Abstract class which controls data flow and visual representation of the fighter. It is spoken to by event emitters that it is subscribed to.
                
                -> [object FighterData]
                    Has the fighter info, hp, mp, str, resistances, moves
                -> [object FighterView]
                    has the visual representation of the fighter and manipulates this
                
                extends [object Actor] ->
                    Fighter extends from Actor. A class connected to the Stage.
            
                
            [object Stage]
                Mediator between objects on the stage, Actors. Distributes information packets to both Actors of current whereabouts, possibilites and others
                
                -> [object ActorObserver]
                    Special class which is only busy with paying attention to the Actors and distributing information between them.
                -> [object Enviroment]
                    Class which creates the surrounding, background and Actors on the stage.
                -> [object GameInfo]
                    Displays score, hp and Actor information on the screen
            
            [object Game]
                
                    
                    
            Scenario: object Stage is created, it creates an enviroment, gameinfo and actorobserver. 

    '