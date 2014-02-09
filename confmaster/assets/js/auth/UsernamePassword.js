define(
	[ 
		'jquery', 
		'CONFIG',
		'Broadcast'
	],
	function( $, CONFIG, Broadcast ){
		return Backbone.Model.extend({
			authenticate : function(){
				if (CONFIG.authBackends && CONFIG.authBackends.UsernamePassword){
					$.ajax({
						type : 'post',
						dataType : 'json',
						url : CONFIG.authBackends.UsernamePassword,
						success : function(data){
							(new Broadcast).trigger('user:authenticated', data);
						}
					});					
				}
				
			}
		});
	}
);