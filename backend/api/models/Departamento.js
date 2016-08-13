/**
 * Departamento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Departamento',
  	attributes: {
  		numero:{
  			type: 'integer'
  		},
	    metrosCuadrados:{
	    	type: 'string',
	    	size: 100
	    },
	    cantidadBanos:{
	    	type: 'integer',
	    	defaultsTo: 1
	    },
	    cantidadPiezas:{
	    	type: 'integer',
	    	defaultsTo: 1
	    },
	    walkInCloset:{
	    	type: 'boolean',
	    	defaultsTo: true
	    },
	    edificio:{
	    	model: 'Edificio'
	    },
	    porcentajeDominio:{
	    	type: 'float',
	    	max: 1,
	    	min: 0
	    }
  	}
};

