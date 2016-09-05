/**
 * Administradores.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'AdministradorEdificio',
	attributes: {
		nombreEmpresa: {
			type: 'string',
			size: 50
		},
	    rutEmpresa:{
	    	type: 'string',
	    	size:13
	    },
	    razonSocial:{
	    	type: 'string',
	    	size: 50
	    },
	    fono:{
	    	type: 'integer'
	    },
	    email:{
	    	type: 'email',
	    	size: 50
	    },
	    direccion:{
	    	type: 'string',
	    	size: 50
	    },
	    ciudad:{
	    	model: 'Ciudad'
	    },
	    comuna:{
	    	model: 'Comuna'
	    },
	    url:{
	    	type: 'string',
	    	size: 100
	    }
	}
};

