import React from "react";
import {useFormik,Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";
import Welcome from '../components/Welcome'
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate()
const click=()=>{
    navigate('/register')

}
    return(
        <div style={{
            display:"flex",
            gap:"50px"
        }}> 
          <Welcome title={"Do not have an account yet?"} desc1={""} button={"Sign Up"} desc2={"now"} margin={"80px"} click={click}/>
            <div style={{
                width: "350px",
                height: "450px",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px",
                background: "#ecf0f3",
            
            
            }}>
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
                                // .oneOf([yup.ref("testtest"), null], 'Passwords and email must match')or more")
                                 .required("Required")
                        })}
                        onSubmit={(values)=>{
                            console.log(values)
                        } }
                            >
                            <Form>
                                <div style={{
                                    display:"flex",
                                    flexDirection:"column",
                                    gap:"20px"
                                    }}>
            
                                        <h1
                                        style={{
                                            fontSize:"40px",
                                            marginTop: "5px",
                                            fontWeight: "900",
                                            letterSpacing: "1px",
                                    }}
                                    > Login</h1>
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
                                    {/* <h3 style={{fontSize:"15px",textAlign:"center"}} >{error}</h3> */}
                                </div>
                            </Form>
                            </Formik>
                    </div>
        </div>
    )
}

export default Login