// filename : 'modules/user/user.js

define(
	[ 
		'marionette',
		'User',
		'hbs!/assets/js/modules/user/stats'
	],
	function( Marionette, User, tpl_stats ){
		
		var layouts = {
				stats : Marionette.ItemView.extend({
					template : tpl_stats
				})
			};
		
		return function(){			
			var args = Array.prototype.slice.apply(arguments)[0];
			
	
			if (args.state && layouts[args.state]){		
				return new layouts[args.state]({ model : new User });
			}
			
			return {
				render : function(){
					console.log('no matching renderable found for user::', args.state);
				}  
			};			
		};		
	}
);