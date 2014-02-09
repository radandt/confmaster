// filename : modules/user/UserProfile.js

define(	
	[ 
		'broadcast',
		'backbone'		
	],
	 
	function( Broadcast, Backbone ){
		
		return Backbone.Model.extend({
			defaults : {				
				street : '',
				zip : '',
				city : ''				
			},
			initialize : function(){
				
				console.log('profile', this);
			}
		});
		
	}
);