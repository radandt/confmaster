// filename: modules/broadcast/Broadcast.js

define(
	[
		'underscore',
		'backbone'
	],
	function( _, Backbone ){
		var that = {};
		
		return function(){
			that.broadcast = that.broadcast || _.clone(Backbone.Events);
			return that.broadcast;
		};
	}
);