const express = require('express')

const Cars= require('../models/car.js')

const User = require('../models/user.js')


const router = express.Router();




//All Cars 

router.get(`/all/:id`,async (req,res)=>{
	try{
		const user= await User.findOne({_id:req.params.id})

if(user)
{
	const make= req.query.make
	const makers= await Cars.find({})
	return res.send({"cars":makers})
}
else

{
	return res.send({"msg":"Unauthorized"})
}
	}
	catch(err){return res.send({"msg":err.message})}
	
})


// Specific Car details
router.get(`/details/:id`,async (req,res)=>{
	try{
		const user= await User.findOne({_id:req.params.id})

if(user)
{  
	  if (req.query.make  && req.query.model && req.query.generation && 
	  	req.query.series && req.query.trim && req.query.equipment)
	  {
	  	let filterCar= await Car.find({make:req.query.make,
	  		model:req.query.model,generation:req.query.generation,series:req.query.series,trim:req.query.trim,
	  		equipment:req.query.equipment})
	  	return res.send({"cars":filterCar})

	  }
	  else if (req.query.make  && req.query.model && req.query.generation && 
	  	req.query.series && req.query.trim )
	  {
	  	let filterCar= await Car.find({make:req.query.make,
	  		model:req.query.model,generation:req.query.generation,series:req.query.series,trim:req.query.trim,
	  		})
	  	return res.send({"cars":filterCar})

	  }
	  else if (req.query.make  && req.query.model && req.query.generation && 
	  	req.query.series )
	  {
	  	let filterCar= await Car.find({make:req.query.make,
	  		model:req.query.model,generation:req.query.generation,series:req.query.series})
	  	return res.send({"cars":filterCar})

	  }
	  else if (req.query.make  && req.query.model && req.query.generation)
	  {
	  	let filterCar= await Car.find({make:req.query.make,
	  		model:req.query.model,generation:req.query.generation})
	  	return res.send({"cars":filterCar})

	  }
	  else if (req.query.make  && req.query.model )
	  {
	  	let filterCar= await Car.find({make:req.query.make,
	  		model:req.query.model})
	  	return res.send({"cars":filterCar})

	  }
	  else if(req.query.make)
	  {
	  	let filterCar= await Car.find({make:req.query.make})
	  	return res.send({"cars":filterCar})

	  }
	  else{
	  	return res.send({"msg":'No such cars'})
	  }

	
}
else

{
	return res.send({"msg":"Unauthorized"})
}
	}
	catch(err){return res.send({"msg":err.message})}
	
})

// Add car

router.post('/addcar/:id',async(req,res)=>{
try{
	const user= await User.findOne({_id:req.params.id})
	if (user)
	{
		
		const car = new Car({
		make:req.body.make,
		model:req.body.model,
		generation:req.body.generation,
		trim:req.body.trim,
		series:req.body.series,
		
		equipment:req.body.equipment,
		
	});
	const newCar = await car.save();
	     if(newCar)
	       {
		        return res.status(201).send({message:"New Car created", data:newCar})
	       }
	       else{return res.status(500).send({message:"Error in creating "})}

	
		

	}

	else
	{
		res.send({"status":404,"msg":"Unauthorized"})
	}
}
catch(err){
	return res.send({"msg":err.msg})
}

})

module.exports= Router;