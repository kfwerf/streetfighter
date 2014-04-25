###
title: Event Dispatcher
description: Dispatches and receives events
dependencies: none
author: Kenneth van der Werf
###
define [], ->
	class classEventDispatcher
		constructor: () ->
			@_objEvents = {}
		bind: ( strEvent, fnCallback ) ->
			@_objEvents = @_objEvents or {}
			@_objEvents[ strEvent ] = @_objEvents[ strEvent ] or []
			@_objEvents[ strEvent ].push fnCallback
		unbind: (event, fnCallback) ->
			@_objEvents = @_objEvents or {}
			if not strEvent in @_objEvents then return

			@_objEvents[ strEvent ].splice @_objEvents[ strEvent ].indexOf( fnCallback ), 1
		trigger: ( strEvent, arrArguments = [] ) ->
			@_objEvents = @_objEvents or {}
			if not strEvent in @_objEvents then return
			for strEvent, fnCallback of @_objEvents[strEvent]
				fnCallback .apply @, arrArguments
			true