const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const createError = require("http-errors");
const authSchema = require("../helpers/authSchema");
const {loginSchema,updateSchema} = require("../helpers/loginSchema");
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

router.post("/register", async (req, res, next) => {
	try {
		const result = await authSchema.validateAsync(req.body);
		const doesExits = await User.findOne({ username: result.username });
		if (doesExits) throw createError.Conflict(`${result.username} already exits`);
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(result.password, salt);
		const user =  new User({
			email:result.email,
			username:result.username,
			password:hashedPassword
		});
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (error) {
		next(error)
	}
});

router.post("/login", async (req, res, next) => {
	try{
		const result = await loginSchema.validateAsync(req.body);
		const user = await User.findOne({username:result.username});
		if(!user){
			throw createError(400, 'invalid crentials')
		}
		const verifyPassword = await bcrypt.compare(result.password,user.password);

		if(!verifyPassword){
			throw createError(400, 'invalid crentials')
		}

		const token = JWT.sign({_id:user._id},process.env.TOKEN_SECRET);
		res.cookie('jwt',token,{
			httpOnly:true,
			maxAge: 24*60*60*1000 // 1 day
		})

		res.send({
			message: 'success'
		})
	}catch(error){
		next(error)
	}
});

router.get("/user", async(req, res, next) => {
	try{
		const token = req.cookies['jwt'];
		const claims = JWT.verify(token,process.env.TOKEN_SECRET);
		if(!claims){
			throw createError(401, 'unauthorized')
		}

		const user = await User.findOne({_id:claims._id});
		const {password,...data} = await user.toJSON();
		res.send(data);
	}catch(error){
		next(error)
	}
});

router.post("/logout", (req, res, next) => {
	try{
		res.cookie('jwt',{maxAge:0});
		// res.clearCookie('jwt')
		res.send({
			message:'success'
		})
	}catch(error){
		next(error);
	}
});

router.post("/forgetpassword",async(req,res,next)=>{
	try{
		const user = await User.findOne({email:req.body.email})
		if(user === null){
			createError(403,"provide valid email username")
		}
		// const token =  await crypto.randomBytes(20).toString('hex')
		const token = await JWT.sign({username: user.username}, process.env.FORGET_SECRET, { expiresIn: '1h' });
		const transporter = nodemailer.createTransport({
		  host: "smtp.gmail.com",
		  port: 587,
		  secure: false,
		  auth: {
		    user: process.env.EMAIL,
		    pass: process.env.PASSWORD
		  }
		});

		let info = await transporter.sendMail({
		    from: `"Team 👻" ${process.env.EMAIL}`,
		    to: `${user.email}`, 
		    subject: "Reset Password😎",
		    text: "Do not share this link to any one its confidential.\n\n"
		    	+ 'Click on link or paste on browser to complete the process within one hour of receiving it: \n\n'
		    	+ `http://localhost:3000/reset/${token}`
		});
		res.status(200).send({
			status:'success',
			message:'email send successfully'
		})

	}catch(error){
		next(error)
	}
})

router.get('/reset/:token',async(req,res,next)=>{
	try{
		const claims = await JWT.verify(req.params.token, process.env.FORGET_SECRET);
		console.log(claims)
		if(!claims){
			res.send('reset link is not valid or has expired')
			return
		}
		res.send({
			username:claims.username,
			message:'password reset link is okay'
		})
	}catch(error){
		next(error)
	}
})

router.patch('/updatepasswordviaemail',async(req,res,next)=>{
	try{
		const result = await updateSchema.validateAsync(req.body);
		const user = await User.findOne({username:result.username})
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(result.password, salt);
		const updatedResult = await user.update({
			password:hashedPassword,
		})
		res.status(200).send({
			status:'success',
			message:'password updated'
		})
	}catch(error){
		next(error)
	}
})

module.exports = router;
