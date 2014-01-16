# Author: Kenneth van der Werf
# Description: Module for Turntable

define [ "require", "jquery", "radio" ], ( require, $, radio ) ->
	class EventDispatcher
		_eventDispatcher: $("body")
		_dispatchEvent: ( strEventTarget, strEventName, objData = {}, objThis = this  ) ->
			@_eventDispatcher.trigger "#{strEventTarget}.#{strEventName}", [ objThis, objData ]
			"Dispatched: #{strEventTarget}.#{strEventName}"
		_bindEvent: ( strEventTarget, strEventName, funcTo) ->
			@_eventDispatcher.on "#{strEventTarget}.#{strEventName}", funcTo
			"Bound: #{strEventTarget}.#{strEventName}"
