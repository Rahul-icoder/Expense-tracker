const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
	userId:{
		type:String,
	},
	transactionId:{
		type:String,
	},
	title:{
		type:String,
	},
	amount:{
		type:Number,
	},
	date:{
		type:Date
	}
},{ timestamps: true })

const Transaction = mongoose.model('transaction',transactionSchema);
module.exports = Transaction;