/**
 * Cobranza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Cobranza',
  	attributes: {
  		torre:{
  			model: 'Edificio'
  		},
	    departamento:{
	    	model:'Departamento'
	    },
	    porcentajeDominio:{
	    	type: 'float',
	    	max: 1,
	    	min: 0
	    },
	    gastosComunes:{
	    	type: 'integer'
	    },
	    fondoDeReserva:{
	    	type: 'integer'
	    },
	    lecturaAnterior:{
	    	type: 'integer'
	    },
	    lecturaActual:{
	    	type: 'integer'
	    },
	    aguaCalienteM3:{
	    	type: 'integer'
	    },
	    aguaCalienteCosto:{
	    	type: 'integer'
	    },
	    multasEIntereses:{
	    	type: 'integer'
	    },
	    morosidad:{
	    	type: 'integer'
	    },
	    diferenciaAFavor:{
	    	type: 'integer'
	    },
	    cobroTransbank:{
	    	type: 'integer'
	    },
	    totalACobrar:{
	    	type: 'integer'
	    },
	    observaciones:{
	    	type: 'string',
	    	size: 200
	    }
  	}
};

