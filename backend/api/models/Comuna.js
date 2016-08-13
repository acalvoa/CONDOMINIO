/**
 * Comuna.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Comuna',
  	attributes: {
  		nombre:{
  			type: 'string',
  			size: 50
  		},
    	ciudad:{
    		model: 'Ciudad'
    	}
  	}
};

