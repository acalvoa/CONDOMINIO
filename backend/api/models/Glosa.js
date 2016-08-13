/**
 * Glosa.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Glosa',
  	attributes: {
  		nombre:{
  			type: 'string',
  			size: 100
  		},
	    grupoGasto:{
	    	model: 'GrupoGasto'
	    },
	    condominio:{
	    	model: 'Condominio'
	    },
	    descripcion:{
	    	type: 'text',
	    	maxLength: 500
	    },
	    nombreDocumento:{
	    	type: 'string',
	    	size: 300,
	    	defaultsTo: ''
	    },
	    nombreDocumentoOrig:{
	    	type: 'string',
	    	size: 300,
	    	defaultsTo: ''
	    }, 
	    fecha:{
	    	type: 'date'
	    }, // Se evalua MES-ANO
	    ingreso:{
	    	type: 'integer',
	    	defaultsTo: 0
	    },
	    egreso:{
	    	type: 'integer',
	    	defaultsTo: 0
	    }
  	}
};

