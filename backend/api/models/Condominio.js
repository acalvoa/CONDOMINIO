/**
 * Condominio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Condominio',
	attributes: {
		nombre:{
			type: 'string',
			size:50
		},
	    fono:{
	    	type: 'integer'
	    },
	    direccion:{
	    	type: 'string',
	    	size: 50
	    },
	    reglamento:{
	    	type: 'string',
	    	size: 100
	    },
	    ciudad:{
	    	model: 'Ciudad'
	    },
	    comuna:{
	    	model: 'Comuna'
	    },
	    administradorEdificio:{
	    	model: 'AdministradorEdificio'
	    },
	    conserjes:{
	    	collection: 'Conserje',
	    	via: 'condominios',
	    	dominant: true
	    }
	}
};

