/**
 * Estacionamiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Estacionamiento',
  	attributes: {
  		numero:{
  			type: 'integer'
  		},
	    departamento:{
	    	model: 'Departamento'
	    },
	    porcentajeDominio:{
	    	type: 'float',
	    	max: 1,
	    	min: 0
	    }
  	}
};

