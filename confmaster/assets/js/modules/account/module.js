// filename : modules/account/module.js

define(
	[
		'Broadcast',
		'User'
	], 
	function( Broadcast, User ){
	
		return function( self, app, Backbone, Marionette, $, _ ){			
			self.startWithParent = true;
			
			self.onStart = function(){				
				self.user = new User;
				console.log('module account started', self.user);
				
				/*
				if (self.user.authenticated()){					
					require(
						['UserProfile'],
						function(UserProfile){
							self.user.set('profile', new UserProfile(self.user));
							console.log(self.user.get('profile'));
						});					
				}
				*/
				//this.userProfile = this.user.getProfile();
			};
			
						
		};
	}
);