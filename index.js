const express= require('express')
const cors= require('cors')
const bodyParser= require('body-parser')
const port= process.env.PORT || 7000;
const userRoute= require('./routes/userRoutes')
const carRoute= require('./routes/carRoutes')



const db= require('./config/mongoose.js')
db()


const app=express();
app.use(bodyParser.json());
app.use(cors())
app.use('/user',userRoute )
app.use('/car',carRoute)


app.listen(port,()=>{
	console.log(`server is up and running at ${port}`)
})