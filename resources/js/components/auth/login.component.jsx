import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {BASE_URL} from '../../env'
import './auth.styles.css'
import {connect} from 'react-redux'
import {setCurrentUser} from '../../redux/user/user.actions'


function Login({setCurrentUser,history}) {

    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        const formdata=new FormData(e.target)
        axios.post(BASE_URL+`/login`,formdata)
            .then(response=>
            {
                setCurrentUser(response.data.success)
                history.push("/")
            }
            ).catch(error).then(response=>console.log(response))
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-white bg-success ">
                            <h4 className="list-header">Login</h4>
                            <span className="right"><Link to="/" className="btn btn-danger small-button">X</Link></span>
                        </div>
                        <div className="card-body">
                            {success?<div className="alert alert-success">{success}</div>:''}
                            {error?<div className="alert alert-danger">{error}</div>:''}
                            <form onSubmit={handleSubmit} id="submit-form">
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
                                <div className="right">
                                    <Link to="/register" className="btn btn-info">Register</Link>
                                    <button type="submit" className="btn btn-primary ml-2">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>
({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(Login)