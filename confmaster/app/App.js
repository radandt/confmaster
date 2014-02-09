// Filename: App.js

define(
	[
		'underscore',		
		'backbone',		
		'marionette',		
		'Broadcast',
		'app__Controller',
		'app__Router',
		'app__config'
	],
	function( _, Backbone, Marionette, Broadcast, Controller, Router ){
		
		var app,
			
			initApp = function(){								
				app = new Marionette.Application;
				
				//app.module('Account', Account);
				
				//console.log('app',app)
				
				/*_.each(document.querySelectorAll("[data-module]"), function(module){
					var region = {};
						region[module.dataset.module] = new Marionette.Region({ el : module }); 
						app.addRegions(region);
				});
				*/
				app
					.on('initialize:before', function(){
						//console.log('before');
					})
					.on('initialize:after', function(){
						//console.log('after');
						//renderRegions.apply(this);
					})
					.addInitializer(function(){
						//console.log('at init');
						
						//new Router({ controller : new Controller });
						//Backbone.history.start();
						
						var Users = Backbone.Collection.extend({
							store : 'users'
						});
						var users = new Users();
						
						users.fetch();						
						console.log(users);																
					});
				
				app.start();
			}/*,			
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
			}*/;
		
		return function(){
			return app || initApp();
		};
	}
);