const { Schema, model } = require('mongoose');

const schemaVulnerabilidad = new Schema({
    nombre: {
		type: String,
		required: true
	},	
	descripcionCorta: {
		type: String,
		required: true
	},
	descripcionLarga: {
		type: String,
		required: true
	},		
	mitigacion: {
		type: String,
        required: true
	},
	foto: {
		type: String,
	}
});

module.exports = model('vulnerabilidad',schemaVulnerabilidad);