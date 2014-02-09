// filename : modules/user/User.js

define(	
	[ 
		'backbone',
		'Broadcast',
		'UserProfile',
		'Config',
		'Api'
	],
	 
	function( Backbone, Broadcast, UserProfile, Config, Api ){
		
		return Backbone.Model.extend({
			//idAttribute : 'username',
			//urlRoot : API.user.authenticate,
			
			initialize : function(){
				var user = this;
				//var broadcast = new Broadcast;
				
				user.on('change:authBackends', this.authenticate, this);
				
				
				if (Config.authBackends){
					require(Config.authBackends, function(){
						var authBackends = [];
						_.each(arguments, function(Backend){
							authBackends.push(new Backend);
						});
						user.set('authBackends', authBackends);
					});
				}
				
				//this.authenticate();
				
				
				/*
				this.listenTo(broadcast, 'user:authenticated', this.authenticate);
				
				this.set('profile', new UserProfile({ user : this }));*/
			},
			
			authenticate : function(){
				console.log(this);
				//this.fetch();
			},			
			authenticated : function(){
				return true;
			},
			signIn : function(){
				this.set('authenticated', true);
			},
			signOut : function(){},
			deleteUser : function(){}
			
		});
		
	}
);