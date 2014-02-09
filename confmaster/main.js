// filename: main.js
/*
requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }
    throw err;
};
*/
require(
	['config'],
	function(C){
		require(
			[C.AppRequireConfig], 
			function(){
				if (C.AppModule) {
					require([C.AppModule, C.StorageAdapter], function(App){
						new App;
					});
				}
			}
		);				
	}
);