// filename : modules/user/User.js

define(	
	[ 
		'broadcast',
		'backbone'
	],
	 
	function( Broadcast, Backbone ){
		
		return Backbone.Model.extend({
			defaults : {
				username : 'hra',
				firstName : 'Henrik',
				lastName : 'Radandt',
				roles : ['Admin', 'Developer']				
			},
			
			signIn : function(){},
			signOut : function(){},
			deleteUser : function(){}
			
		});
		
	}
);