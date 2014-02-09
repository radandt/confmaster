// filename: /app/require.js

define(
	[
		'requireConfig'	// load a base-set of libs
	], 
	function(){	
		return require.config({
			paths : {
				'app__Controller' : '/app/Controller',
				'app__Router' : '/app/Router',
				'app__config' : '/app/config'	
			}
		});
	}
);