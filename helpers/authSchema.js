const joi = require('@hapi/joi');

const authSchema = joi.object({
	email:joi.string().required(),
	username:joi.string().required(),
	password:joi.string().required().min(4)
})

module.exports = authSchema