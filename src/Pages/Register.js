import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {

  const [name, setName] = useState("")
  const [email  , setEmail  ] = useState("")
  const [password , setPassword  ] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")

 

  const handleSubmit = (e)=>{
   e.preventDefault();
   const payload ={
    name:name,
    email:email,
    password:password,
    password_confirmation: password_confirmation
   }

    console.log(payload);
    handleRegister(payload);
   
  }
  
  const handleRegister = async(payload)=>{
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, payload)
  }
  

  
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" for="form2Example1">Enter Your Name</label>
              <input type="text" name='name' id="form2Example1" className="form-control" onChange={(e)=>setName(e.target.value)} />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" for="form2Example1">Email address</label>
              <input type="email" name='email' id="form2Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" for="form2Example2">Password</label>
              <input type="password" name='password' id="form2Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" for="form2Example2">Confirm Password</label>
              <input type="password" name='password_confirmation' id="form2Example2" className="form-control" onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>


            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label className="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Submit</button>

            <div className="text-center">
              <p>Already Registered ? <a href="/login">Login Here</a></p>
              <p>or sign up with:</p>
              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Register