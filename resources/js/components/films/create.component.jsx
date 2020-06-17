import React,{useState} from 'react'

const CreateFilm=()=>
{
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-white bg-success "><h6>Add New Film</h6></div>
                        <div className="card-body">
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" name="name" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="release">Release</label>
                                        <input type="date" name="release" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" name="date" className="form-control"/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="rating">Rating</label>
                                        <input type="number" name="rating" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="ticket">Ticket</label>
                                        <input type="text" name="ticket" className="form-control"/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="price">Price</label>
                                        <input type="number" name="price" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="country">Country</label>
                                        <select name="country" id="" className="form-control">
                                            <option value="">Select Country</option>
                                            <option value="bangladesh">Bangladesh</option>
                                            <option value="dubai">Dubai</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="genre">Genre</label>
                                        <select name="genre" id="" className="form-control">
                                            <option value="">Select Genre</option>
                                            <option value="thriller">Thriller</option>
                                            <option value="drama">Drama</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Description
                                    </label>
                                    <textarea name="description" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <div className="custom-file">
                                        <input type="file" name="photo" className="custom-file-input" id="customFile"/>
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