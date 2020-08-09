const mongoose= require('mongoose')

const carSchema= new mongoose.Schema({
make:{type: String,required:true},
model:{type: String,required:true},
generation:{type: String,required:true},
series:{type: String,required:true},
trim:{type: String,required:true},
equipment:{type: String,required:true}

})

const carModel= mongoose.model('Car',carSchema);
 module.exports= carModel;
