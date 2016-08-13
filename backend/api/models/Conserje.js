/**
 * Conserje.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Conserje',
	attributes: {
		rut:{
			type: 'string',
			size: 13
		},
	    nombres:{
	    	type: 'string',
	    	size: 100
	    },
	    apellido_paterno:{
	    	type: 'string',
	    	size: 100
	    },
	    apellido_materno:{
	    	type: 'string',
	    	size: 100
	    },
	    genero:{
	    	type: 'string',
	    	size: 1,
	    	enum: ['M', 'F']
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
	    // turno:{
	    // 	type: 'string',
	    // 	size: 1,
	    // 	enum: ['D', 'N']
	    // },
	    condominios:{
	    	collection: 'Condominio',
	    	via: 'conserjes'
	    },
	    activo:{
	    	type: 'boolean',
	    	defaultsTo: true
	    }
	}
};

