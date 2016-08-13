/**
 * LecturaServicio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'LecturaServicio',
  	attributes: {
  		servicio:{
  			model: 'Servicio'
  		},
	    departamento:{
	    	model: 'Departamento'
	    },
	    fecha:{
	    	type: 'datetime'
	    },
	    lectura:{
	    	type: 'integer'
	    }
  	}
};

