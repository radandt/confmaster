// Filename: modules/app/router.js

define(
	[
		'underscore',
		'marionette'
	],
	function(_, Marionette){
		
		return Marionette.AppRouter.extend({
			appRoutes : {
				//'conference/show' : 'showConf',
				//'signin' : 'signin',
				//'signout' : 'signout',
				//':page(/*action)' : 'invokeRoute',
				//'' : 'showHome',
			},
			initialize : function(){
				console.log('router init', arguments);
				//this.controller = new Controller;
				
				
				
				// inject available routes by section-collection
				/*_.each(sections.models, function(section){
					that.appRoutes[':' + section.get('route') + '(/*action)'] = 'invokeRoute'; 
				});
				
				//console.log(this.appRoutes);
				
				that.appRoutes['*actions'] = 'showHome';
				
				this.listenTo(this.controller, 'app:goHome', function(){ this.navigate('', { trigger : true }); });
				*/
				//this.listenTo(this.controller, 'user:not_authenticated', function(){ this.navigate('signin', { trigger : true }); });
			}
		});
	}
);