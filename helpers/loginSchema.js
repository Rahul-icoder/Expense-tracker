const joi = require('@hapi/joi');

const loginSchema = joi.object({
	username:joi.string().required(),
	password:joi.string().required().min(4)
})

const updateSchema = joi.object({
	username:joi.string().required(),
	password:joi.string().required().min(4)
})

module.exports = {loginSchema,updateSchema}