config = 
	baseUrl: "js"
	paths: 
		jquery: "vendor/jquery"
		radio: "vendor/radio"

require.config config

requirejs ["jquery", "modules/abstract/fighter"], ( $, Fighter ) ->
	window.f = new Fighter()
	window.ff = new Fighter()