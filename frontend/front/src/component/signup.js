import React, {useEffect} from 'react';

import {NavLink} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 


import { BrowserRouter, Route, Switch, Redirect, Link, useHistory } from "react-router-dom";


import CancelRoundedIcon from '@material-ui/icons/CancelRounded';


import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

import axios from 'axios'

function SignupUser() {

  const[loading,setloading] =React.useState(false)
const history =useHistory()

React.useState(()=>{
  setloading(false)
},[loading])
if(loading)

     {
   return (<><Redirect to={`/login`} /></>)
}
  
  return (
    
   
<div style={{"margin-top":"15vh"}}  className="d-flex justify-content-center ">
    
      <ReactNotification />
    <span className="card ">
    
    <em><h3 className="text-center">Become a Member</h3></em>
    <h6  className="text-center mr-2">Already have an account? <Link  to='/login'> Login as User</Link><br/>
    </h6>
       <div>
       
        <div className="  mt-2 mb-2   " >
          
         <Formik
       initialValues={{ email: '',fname:'',lname:'',age:0, password:'' }}
       validate={values => {
       
         const errors = {};
         if (!values.email) {
           errors.email = '**Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = '**Invalid email address';
         }
         if(!values.fname)
         {
          errors.fname='**Required'
         }
         else if(
          values.fname.length<2
          ){errors.fname='**First name too small'}



         if(!values.lname)
         {
          errors.lname='**Required'
         }else if(values.lname.length<2){errors.lname='**Last name too small'}
         if(!values.age)
         {
          errors.age='**Required'
         }else if(values.age<18){errors.age='**Too young too access the site'}
         if(!values.password){
          errors.password='** Required'
         }

         return errors;
       }}
       onSubmit={async (values, { setSubmitting }) => {
         const {data} = await axios.post(" http://localhost:7000/user/signup",
         {values})
         console.log(data)
         if(data.status===201)
         {
          setloading(true)
         }
         else
         {
          store.addNotification({
  title: data.msg,
  message: "Error",
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
          
         
          <label htmlFor="name"><h4 className="text-info ml-2 mt-2"><em>First Name :</em></h4></label><br/>
          <Field type="text" name="fname" placeholder="Name" className="input ml-2"
           />
            <ErrorMessage name="fname" className="text-danger" component="div" />
          

          <label htmlFor="lname"><h4 className="text-info ml-2 mt-2"><em>Last Name :</em></h4></label><br/>
          <Field type="text" name="lname" placeholder="Name" className="input ml-2"
           />
              <ErrorMessage name="lname" className="text-danger" component="div" />


          <label htmlFor="age"><h4 className="text-info ml-2 mt-2"><em>Age :</em></h4></label><br/>
          <Field type="number" name="age"  className="input ml-2"
           />
              <ErrorMessage name="age" className="text-danger" component="div" />

          <label htmlFor="password"><h4 className="text-info ml-2 mt-2"><em>Password :</em></h4></label><br/>
          <Field type="password" name="password"  className="input ml-2"
           />
              <ErrorMessage name="password" className="text-danger" component="div" />
          
           <button type="submit" className="btn btnColor input mt-2 mb-2 input ml-2" disabled={isSubmitting}>
             Sign up
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

export default SignupUser;
