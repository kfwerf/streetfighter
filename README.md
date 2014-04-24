streetfighter
=============

A WebRTC fighting game, based on the classic streetfighter II


# Thoughts on development

A place to put my thoughts about the development of this game. 

    [ Stage ]
        [  ]        
    [ Actor ]




# Brainstorm

Both have to extend from a good EventDispatcher
Stage extens also from a Observer type pattern


[ Stage ]
- Has Actors
- Actors emit actions
- Actors receive events
- Stage keeps hold of time
- Stage keeps hold of which events are transmitted, occur and are received by which party
- Stage decides states, death
- Stage is MainController, it observes, Observer pattern

[ Actor ]
- Has action list it can do
- Can move over the Stage
- Can emit and receive

# Milestones

- Moving actors on the screen, basic movesment
- Setting states to actors, basic states
- Adding, removing actors to a stage, setting stage
- Adding objects that emit damage
