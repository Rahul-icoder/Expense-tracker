const express = require('express');
const router = express.Router();
const createError = require("http-errors");
const Transaction = require("../models/transactionSchema")

router.post('/add/transaction',async(req,res,next)=>{
	try{
		console.log('api')
		const transaction = new Transaction(req.body);
		if(!transaction)
			next(createError.NotFound())
		const result = await transaction.save()
		res.status(200).send(result)
	}catch(error){
		next(error)
	}
})

router.get('/get/transactions/:userId',async(req,res,next)=>{
	try{
		const transaction = await Transaction.find({userId:req.params.userId});
		if(!transaction)
			createError.NotFound();
		res.status(200).send(transaction);
	}catch(error){
		next(error)
	}
})

router.delete('/delete/transaction/:id',async(req,res,next)=>{
	try{
		Transaction.remove({transactionId:req.params.id},(err)=>{
			if(!err)
				createError('unable to delete')
			res.status(200).send({
				status:"success"
			})
		})
	}catch(error){
		next(error)
	}
})

module.exports = router;