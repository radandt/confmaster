// filename: /assets/js/main.js

require.config({
	baseUrl : '/assets/js/',
	paths : {
		
		/* external basic third-party libs */		
		// inkl. Support IE 6/7/8
		//jquery : '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        // exkl. Support IE 6/7/8
        jquery : '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',   
        
        /* local basic third-party libs */
        underscore : 'vendor/underscore/underscore_1.5.1.min',
        backbone : 'vendor/backbone/backbone_1.1.0.min',
        marionette : 'vendor/backbone/backbone.marionette_1.4.1.min',
        stickit : 'vendor/backbone/backbone.stickit_0.7.0.min',
        handlebars : 'vendor/handlebars/handlebars_1.3.0',
      
        /* parsing-extension to require.js */
        text : 'vendor/require/text',
        //multiTpl : 'libs/require/multiTpl',	// underscore-templates-map
        json : 'vendor/require/json',
        async : 'vendor/require/async',
        hbs : 'vendor/require/hbs',
        
        /* Mixins */
		backboneViewMixins : 'vendor/backbone/viewmixins',
        // ...
        
        /* Polyfills */
       // ...
        
        /* Helper */
        // ...
        
        /* App */
       App : 'modules/app/App',
       Controller : 'modules/app/Controller',
       Router : 'modules/app/Router',
        
        /* Broadcast */
		Broadcast : 'modules/broadcast/Broadcast',
		
		/* Modules */
		user : 'modules/user/view',
		User : 'modules/user/User',
	},
	shim : {
		underscore : {
			exports : "_"
		},
		backbone : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		marionette : {
			deps : ['jquery', 'underscore', 'backbone'],
			exports : 'Marionette'
		},
		stickit : {
            deps : ['backbone', 'underscore', 'jquery'],
            exports : 'stickit'
        },
        handlebars : {
        	exports : 'Handlebars'
       	}        
	},
	
	waitSeconds : 40
});
/*
requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }
    throw err;
};
*/
require(['App'], function(App) {
//console.log(new App);	
	new App;
	//console.dir(arguments);
});
