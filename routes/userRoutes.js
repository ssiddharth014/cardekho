const express = require('express')

const User = require('../models/user.js')

const router = express.Router();
//Register
router.post('/signup',async (req,res)=>{


	try{



		console.log(req.body.values.email)
		console.log(req.body.values)
		const exist=await  User.findOne({email:req.body.values.email})

		if (exist){
			return res.status(400).send({msg:"Email Already exist"})
		}
		else{
			const user= new User({
				email:req.body.values.email,
				fname:req.body.values.fname,
				lname:req.body.values.lname,
				age:req.body.values.age,
				password:req.body.values.password
			})
			const newUser= await user.save()
			if (newUser)
			{

				return res.status(201).send({"msg":"User Created","status":201})
			}
		}

	}
	catch(err){
		console.log(err)
           return res.send({msg:err.msg})
	}
})


//User Details

router.get('/info/:id',async(req,res)=>{
	try{
		const Current= await User.findOne({_id:req.params.id})
		if(Current)
		{




			return res.send({Current})
		}
		else{
			return res.send({"msg":"No such user"})
		}

	}
	catch(err)
	{
		res.send({"err":err.msg})
	}
})


//User Login
router.post('/login',async(req,res)=>{
	try{
		const loginUser = await User.findOne({email:req.body.values.email,
			password:req.body.values.password});
		
		if(loginUser)
		{
			console.log(loginUser)

res.send({
                 	_id:loginUser.id,
                 	fname:loginUser.fname,
                 	lname:loginUser.lname,
                 	email:loginUser.email,
                 	
                 })
		
                 
		}
		else{
			res.status(401).send({msg:'Invalid Email/Password'})
		}

	}
	catch(err){
		res.send({msg:err.msg})

	}
})








module.exports= router;