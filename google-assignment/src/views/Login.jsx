import React from "react";
import {useFormik,Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";
import { useState } from "react";
import '../login.css'
import useAuth from "../hooks/useAuth";
const Login=()=>{
    

    const {login,email,password}=useAuth();
    const [error,setError]=useState("")

    return(
<div className="outer-cointainer">
    <div  style={{width:"400px",height:"400px"}} className="container">
                    <Formik
                    initialValues={{email:"",firstName:"",lastName:"",password:""}}
                // validate,
    
                validationSchema={yup.object({
                    email:yup
                    .string()
                    .required("Required"),
                    // .oneOf([yup.ref(email), null], 'Passwords and email must match'),
    
                    password:yup
                    .string()
                    .required("Required")
                    // .oneOf([yup.ref("testtest"), null], 'Passwords and email must match')
    
    
                })}
                
                onSubmit={(
                    values
                    )=>{
                    // if (values.email===email && values.password===password){
                    //     setSuccessLogin("flex")
                    //     setLogin("none")
                    // }
                //    signup(values)
                if(values.email===email && values.password===password){
                    login()
                    setError("")
                }
                else{
                    setError("Email and password do not match.")
                }
                  
                        
                } }
                    >
    
    
                    <Form>
                        <div>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                gap:"20px"
                                }}>
                                    <h1 style={{fontSize:"50px"}}>Login</h1>
                                <div className="inner-container">
                                <label htmlFor="email">Email: </label>
                                <Field name="email" type="email"/>
                                <ErrorMessage name="email"/>
                                </div>
                                <div className="inner-container">
                                    <label htmlFor="password"> Password: </label>
                                    <Field name="password" type="password"/>
                                    <ErrorMessage name="password"/>
                                </div>
                                <button type="submit">Login</button>
                                <h3 style={{fontSize:"15px",textAlign:"center"}} >{error}</h3>
                               
                            </div>
                        </div>
                    </Form>
    
                    </Formik>
                    </div>
</div>
    )
}

export default Login