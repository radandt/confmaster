// filename: modules/app/Controller.js

define(
	[
		'marionette',
		'User'
	],
	function( Marionette, User ){
		
		var that = {},
			Controller = Marionette.Controller.extend({
				initialize : function(){
					this.user = new User;
console.log('user', this.user);					
				},
				/*signin : function(){
					if (this.user.isAuthenticated()){
						return this.trigger('app:goHome');
					}
					return this.getRenderable('users', 'signin');					
				}, 
				signout : function(){
					this.user.signout();
					return this.trigger('app:goHome');
				},
				showHome : function(){
					this.getRenderable('conference', 'about');
				},
				showConf : function(){
					this.getRenderable('conference', 'about');
				},  
				invokeRoute : function(){
					this.user.isAuthenticated()
						? this.getRenderable(arguments[0], arguments[1])
						: this.trigger('user:not_authenticated');
				},
				getRenderable : function(page, action){
					var that = this;
					
					if (page && action) {
						require(
							['views/' + page + '/' + action],
							function(Renderable){
								console.log('Required view:', page, action);
								that.trigger('router:invoked', Renderable);
							}
						);
					}
				}*/
			});
				
		return function(){
			that.controller || (that.controller = new Controller);
			return that.controller;
		};
	}
);