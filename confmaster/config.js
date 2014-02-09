// filename: config.js 

define(
	function(){	
		return {			
			AppModule : '/app/App.js',
			AppRequireConfig : '/app/require.js',
			
			StorageAdapter : 'storageAdapter__indexedDB',
			storageDBName : 'confmaster2014'			
		};	
	}
);