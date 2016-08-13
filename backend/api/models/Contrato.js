/**
 * Contrato.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Contrato',
  	attributes: {
  		departamento:{
  			model:'Departamento'
  		},
	    residente:{
	    	model: 'Residente'
	    },
	    fecha_inicio:{
	    	type: 'datetime'
	    },
	    fecha_termino:{
	    	type: 'datetime'
	    },
	    tipo:{
	    	type: 'string',
	    	size: 1,
	    	enum: ['P', 'A']
	    },
	    activo:{
	    	type: 'boolean',
	    	defaultsTo: true
	    }
  	}
};

