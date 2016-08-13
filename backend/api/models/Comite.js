/**
 * Comite.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Comite',
  	attributes: {
  		cargo:{
  			model: 'CargoComite'
  		},
	    nombre:{
	    	type: 'string',
	    	size: 30
	    },
	    fecha_inicio:{
	    	type: 'datetime'
	    },
	    fecha_termino:{
	    	type: 'datetime'
	    },
	    activo:{
	    	type: 'boolean',
	    	defaultsTo: true
	    },
	    condominio:{
	    	model: 'Condominio'
	    }
  	}
};

