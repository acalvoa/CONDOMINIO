/**
 * GastoCondominio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'GastoCondominio',
  	attributes: {
  		// grupoGasto:{
  		// 	model: 'GrupoGasto'
  		// }, = models.ForeignKey(GrupoGasto)
	    tipoGasto:{
	    	model: 'TipoGasto'
	    },
	    condominio:{
	    	model: 'Condominio'
	    },
	    egreso:{
	    	type: 'string',
	    	size: 50
	    },
	    // descripcion:{
	    // 	type: 'text',
	    // 	size: 500
	    // }, = models.TextField(validators=[MaxLengthValidator(500)])
	    fecha:{
	    	type: 'date'
	    }, // Se evalua MES-ANO
	    valor:{
	    	type: 'integer'
	    }
  	}
};

