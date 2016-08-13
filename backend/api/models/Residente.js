/**
 * Residente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Residente',
	attributes: {
		rut: {
  			type:'string',
  			size: 13
  		},
  		nombre: {
  			type:'string',
  			size: 100
  		},
  		apellido_paterno: {
  			type:'string',
  			size: 100
  		},
  		apellido_materno: {
  			type:'string',
  			size: 100
  		},
  		gender_choice:{
  			type:'string',
  			size:1,
  			enum: ['M', 'F']
  		},
  		fono:{
  			type:'integer'
  		},
  		email:{
  			type: 'email',
  			size: 50
  		},
  		fecha_ingreso:{
  			type: 'date'
  		},
  		activo: {
  			type: 'boolean',
  			defaultsTo: true
  		}
	}
};

