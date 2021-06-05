const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
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
})

const Transaction = mongoose.model('transaction',transactionSchema);
module.exports = Transaction;