define(
	function(require){
		var _ = require('underscore'),
		
			basePath = '/API/1.0/',
			repositories = {
				users : 'users'				
			};
				
		return {
			getURLfor : function(key){
				if (key && repositories[key]){
					return basePath + repositories[key]; 
				}
				return '';
			},
			getBasePath : function(){
				return basePath;
			},
			getRepositories : function(){
				return _.keys(repositories);
			} 			
		};
	}
);