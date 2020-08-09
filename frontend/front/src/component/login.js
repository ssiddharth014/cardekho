import React from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link, useHistory } from "react-router-dom";

import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 
import axios from 'axios'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';


function LoginPage() {


  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const history = useHistory()
const [id,setid] =React.useState(null)
 const [loading,setloading]= React.useState(false)
React.useEffect(()=>{
      setloading(false)
    },[loading])
   
    

if(loading)

     {
   return (<><Redirect to={`/Dashboard/${id}`} /></>)
}
  
  return (


   
<div style={{"margin-top":"15vh"}}  className="d-flex justify-content-center ">
    
      <ReactNotification/>
    <span className="card col-10 col-lg-5 col-md-7">
    
    <em><h4 className="text-center">Login</h4></em>
    <h6  className="text-center mr-2">or <Link  to='/Signup'> Create an account</Link><br/></h6>

       <div>
       
        <div className="  mt-2 mb-2   " >
         


    
    
       
        
             <Formik
       initialValues={{ email: '', password:'' }}
       validate={values => {
        console.log(values.musicfile)
         const errors = {};
         if (!values.email) {
           errors.email = '**Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = '**Invalid email address';
         }
       
         if(!values.password){
          errors.password='** Required'
         }

         return errors;
       }}
       onSubmit={async (values, { setSubmitting }) => {

        const {data} = await axios.post(" http://localhost:7000/user/login",
         {values})
         console.log(data)
         if(data._id){
          localStorage.setItem("contactId",data._id)
          setid(data._id)
          setloading(true)
         }
         else{




          
store.addNotification({
  title: "Login Error",
  message: data.msg,
  type: "danger",
  insert: "top",
  container: "top-left",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
});


         }

       }}
     >
       {({ isSubmitting }) => (
         <Form>
         <label htmlFor="email"><h4 className="text-info ml-2  mt-2 mr-2"><em>Email :</em></h4></label><br/>
          
           <Field type="email" name="email" className="input ml-2"/><br/>
           <ErrorMessage name="email" className="text-danger" component="div" />
          
         
         

          <label htmlFor="password"><h4 className="text-info ml-2 mt-2"><em>Password :</em></h4></label><br/>
          <Field type="password" name="password"  className="input ml-2"
           />
              <ErrorMessage name="password" className="text-danger" component="div" />
          
           <button type="submit" className="btn btnColor input mt-2 mb-2 input ml-2" disabled={isSubmitting}>
             Login
           </button>
         </Form>
       )}
     </Formik>
      </div>
     
      
    </div>
  </span><button 
          style={{"height":"5vh"}} className="btn btn-danger"onClick={()=>history.goBack()}>
          <CancelRoundedIcon /></button><br/>
</div>



  );
}


export default LoginPage;