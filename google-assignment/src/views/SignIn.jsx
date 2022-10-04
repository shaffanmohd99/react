import React from "react";
import {useFormik,Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";
import { useState } from "react";
import '../login.css'
import useAuth from "../hooks/useAuth";

const SignIn=()=>{

    const {signup}=useAuth()

    return(
        <div className="outer-cointainer">
            <div style={{width:"400px",height:"500px"}} className="container">
                    <Formik
                        initialValues={{email:"",firstName:"",lastName:"",password:""}}
                    // validate,
                    validationSchema={yup.object({
                        firstName:yup
                        .string()
                        .max(15,"must be 15 character or less")
                        .required("Required"),
                        lastName:yup
                        .string()
                        .max(20,"must be 20 character or less")
                        .required("Required"),
                        email:yup
                        .string()
                        .email("invalid email address")
                        .required("Required"),
                        password:yup
                        .string()
                        .min(8,"must be 8 character or more")
                        .required("Required")
                    })}
                    onSubmit={(values)=>{
                        signup(values)
                    } }
                        >
                        <Form>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                gap:"20px"
                                }}>
                                    
                                    <h1 style={{fontSize:"50px"}}> Sign Up</h1>
                                <div className="inner-container">
                                    <label htmlFor="firstName"> First Name: </label>
                                    <Field name="firstName" type="text"/>
                                    <ErrorMessage name="firstName"/>
                                </div>
                                <div className="inner-container">
                                    <label htmlFor="lastName"> Last Name: </label>
                                    <Field name="lastName" type="text"/>
                                    <ErrorMessage name="lastName"/>
                                </div>
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
                                <button type="submit">Sign Up</button>
                            </div>
                        </Form>
                        </Formik>
                </div>
        </div>

    )
}

export default SignIn