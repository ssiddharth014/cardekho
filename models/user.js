const mongoose= require('mongoose')

const caruserSchema= new mongoose.Schema({

fname:{type:String,
required:true},
lname:{
	type:String,
	required:true
},
email:{
	type:String,
	required:true,
	unique:true
},
password:{
	type:String,
	required:true
},
age:{
	type:Number,
	required:true
},

})

const caruserModel= mongoose.model('CarUser',caruserSchema);
 module.exports= caruserModel;
