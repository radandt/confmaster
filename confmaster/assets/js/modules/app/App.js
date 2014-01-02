// Filename: app.js

define(
	[
		'underscore',		
		'backbone',		
		'marionette',		
		'Broadcast',
		'Controller',
		'Router',
	],
	function( _, Backbone, Marionette, Broadcast, Controller, Router ){
		
		var app,
			
			initApp = function(){								
				app = new Marionette.Application({});
				
				_.each(document.querySelectorAll("[data-module]"), function(module){
					var region = {};
						region[module.dataset.module] = new Marionette.Region({ el : module }); 
						app.addRegions(region);
				});
				
				app
					.on('initialize:after', function(){
						renderRegions.apply(this);
					})
					.addInitializer(function(){
						new Router({ controller : new Controller });
						//this.listenTo(controller, 'router:invoked', this.renderViewToRegion);
						Backbone.history.start();										
					});
				
				app.start();
			},
			renderRegions = function(){
				_.each(
					this._regionManager._regions || [], 
					function(region, ident){
						var split = ident.split('::'),
							moduleName = split[0],
							state = split[1];
							
						require(
							[moduleName], 
							function(Renderable){
								var renderable;								
								if (_.isFunction(Renderable)) {
									renderable = new Renderable({ state : state });
console.log(renderable, _.isFunction(renderable.render), region)									
									if (_.isFunction(renderable.render)){
										region.show(renderable);			
									}
								}							
							}
						);
					}
				);
			};
		
		return function(){
			return app || initApp();
		};
	}
);