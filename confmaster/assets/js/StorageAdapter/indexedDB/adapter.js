define(	
	function(require){
		'use strict';
			
		var _ = require('underscore'),
			Backbone = require('backbone'),
			C = require('config'),			
			API = require('API'),
			
			repositories = API.getRepositories(),			
			database = {
			    id: C.storageDBName || 'confmaster',
			    description: C.storageDBDescription || 'A database to manage conference-papers and members',
			    migrations : [
			        {
			            version: "1",
			            /*before: function(next) {
			            	// Do magic stuff before the migration. For example, before adding indices, the Chrome implementation requires to set define a value for each of the objects.
			                next();
			            },*/			            
			            migrate: function (transaction, next) {
			            	_.each(repositories, function(repository){
			            		transaction.db.createObjectStore(repository);
			            	});
		                    next();
		                }			            
			        }/*, {
			            version: "1",
			            migrate: function(db, versionRequest, next) {
			            	//var store = db.createObjectStore("users");
			            	
			            	//var store = versionRequest.transaction.objectStore('users');
			            	//store.createIndex("idIndex", "id", { unique: true, autoIncrement: true });
			            	//store.createIndex("nameIndex", "name", { unique: false });
			            		/*
			            	_.each(repositories, function(repository){
			            		var store = versionRequest.transaction.objectStore(repository);
			            		store.createIndex("nameIndex", "name", { unique: false });	
			            	});
			                
			                
			                //store.createIndex("formatIndex", "format", { unique: false}); // Adds an index on the movies formats
			                //store.createIndex("genreIndex", "genre", { unique: false}); // Adds an index on the movies genres
			                
			                console.log(db)
			                
			                next();
			            }
			        }*/
			    ]
			},
			
			// additional constructor-todos to get self-storing models and collections
			persist = function(){
				if (this.store && _.contains(repositories, this.store)){					
					this.database = database;
					this.storeName = this.store;
					
					// TODO: source out, because it's also required in any other storage-behaviour
					this.url = API.getURLfor(this.store);					
				}
			},
			ModelOrigin = Backbone.Model,
			CollectionOrigin = Backbone.Collection;
			
			Backbone.PersistModel = Backbone.Model.extend({
				constructor : function(){
					persist.apply(this);
					ModelOrigin.apply(this, arguments);
				}
			});
			Backbone.Model = Backbone.PersistModel;
			
			Backbone.PersistCollection = Backbone.Collection.extend({
				constructor : function(){					
					persist.apply(this);
					CollectionOrigin.apply(this, arguments);
				}
			});
			Backbone.Collection = Backbone.PersistCollection;					
	}
);