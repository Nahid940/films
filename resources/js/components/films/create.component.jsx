import React,{useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../../env'
const CreateFilm=()=>
{
    const [success,setSuccess]=useState('')
    const [error,setError]=useState('')
    const handleSubmit=(e)=> {
        e.preventDefault();
        const data = new FormData(e.target);
        axios.post(BASE_URL,
            data
        ).then(response => {
            setSuccess("Data Stored Successfully !!")
            document.getElementById("submit-form").reset();
            showSuccessMessage()
        }).catch(error => {
            if(error.response.status==422)
            {
                setError(error.response.data.message)
            }
        })
    }

    const showSuccessMessage=()=>
    {
        setTimeout(function () {
            setSuccess("")
            setError("")
        },2000)
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-white bg-success "><h6>Add New Film</h6></div>
                        <div className="card-body">
                            {success?<div className="alert alert-success">{success}</div>:''}
                            {error?<div className="alert alert-danger">{error}</div>:''}
                            <form onSubmit={handleSubmit} id="submit-form" encType="multipart/form-data">
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text"  name="name" className="form-control" placeholder="Name" required/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="release">Release</label>
                                        <input type="text" name="release"   placeholder="Release" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" name="date" className="form-control" required/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="rating">Rating</label>
                                        <input type="number" name="rating"  className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="ticket">Ticket</label>
                                        <input type="text" name="ticket" className="form-control" required/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="price">Price</label>
                                        <input type="number" name="price" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="country">Country</label>
                                        <select name="country" id="" className="form-control" required>
                                            <option value="">Select Country</option>
                                            <option value="bangladesh">Bangladesh</option>
                                            <option value="dubai">Dubai</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="genre">Genre</label>
                                        <select name="genre_id"  id="" className="form-control" required>
                                            <option value="">Select Genre</option>
                                            <option value="1">Thriller</option>
                                            <option value="2">Drama</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Description
                                    </label>
                                    <textarea name="description" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <div className="custom-file">
                                        <input type="file" name="photo" className="custom-file-input" id="customFile" required/>
                                         <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  CreateFilm