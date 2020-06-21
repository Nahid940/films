import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link,withRouter} from 'react-router-dom'
import {BASE_URL} from '../../env'
import './auth.styles.css'


function Register({history}) {

    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        const formData=new FormData(e.target)
        axios.post(BASE_URL+"/register",formData).then(
            response=>history.push("/login")
        )
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-white bg-success ">
                            <h4 className="list-header">Sign Up</h4>
                            <span className="right"><Link to="/" className="btn btn-danger small-button">X</Link></span>
                        </div>
                        <div className="card-body">
                            {success?<div className="alert alert-success">{success}</div>:''}
                            {error?<div className="alert alert-danger">{error}</div>:''}
                            <form onSubmit={handleSubmit} id="submit-form">
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="text"  name="name" className="form-control" placeholder="Name" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="email"  name="email" className="form-control" placeholder="Email" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="release">Password</label>
                                        <input type="password" name="password"   placeholder="Password" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="release">Confirm Password</label>
                                        <input type="password" name="cpassword"   placeholder="Consfirm Pasword" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="right">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Register)