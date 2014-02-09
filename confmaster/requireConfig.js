// filename: require.js
require.config({
	baseUrl : 'assets/js/',
	paths : {
		
		API : '/API/api_1.0',
		
		/* external basic third-party libs */		
		// exkl. Support IE 6/7/8
        jquery : '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
        
        /* local basic third-party libs */
        underscore : 'vendor/underscore/underscore_1.5.1.min',
        backbone : 'vendor/backbone/backbone_1.1.0.min',
        marionette : 'vendor/backbone/backbone.marionette_1.4.1.min',
        stickit : 'vendor/backbone/backbone.stickit_0.7.0.min',
        handlebars : 'vendor/handlebars/handlebars_1.3.0',
        
        /* storage-adapter, use depends on API */
		storageAdapter__indexedDB : 'StorageAdapter/indexedDb/adapter',
		lib__indexedDB : 'vendor/backbone/backbone-indexeddb',		
      
        /* parsing-extension to require.js */
        text : 'vendor/require/text',
        //multiTpl : 'libs/require/multiTpl',	// underscore-templates-map
        json : 'vendor/require/json',
        async : 'vendor/require/async',
        hbs : 'vendor/require/hbs',	// parsing handlebars-templates
        
        /* Mixins */
		backboneViewMixins : 'vendor/backbone/viewmixins',
        // ...
        
        /* Polyfills */
       // ...
        
        /* Helper */
        // ...
        
        /* Broadcast */
		Broadcast : 'modules/broadcast/Broadcast',
        
        /* App */
		/*App : 'modules/app/App',
		Controller : 'modules/app/Controller',
		Router : 'modules/app/Router',*/
		//Config : 'config/config',
		
		//API : '/API/api',
		
		
       
       	/* Auth-Backends */
		//UsernamePassword : 'auth/UsernamePassword',
      
        
        
		
		/* Modules */
		/*
		account : 'modules/account/module',
		user : 'modules/user/view',
		User : 'modules/user/User',
		UserProfile : 'modules/user/UserProfile',
		*/
	},
	shim : {
		underscore : {
			exports : "_"
		},
		backbone : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		storageAdapter__indexedDB : {
			deps : ['lib__indexedDB'],
			//exports : 'Backbone'
		},
		lib__indexedDB : {
			deps : ['backbone'],
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

