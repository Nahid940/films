import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {BASE_URL} from '../../env'

const Details=(props)=>
{
    const [film,setFilm]=useState({})
    let slug=props.match.params.slug;

    useEffect(()=>{
        axios.get(BASE_URL+`/${slug}`).then(response=>setFilm(response.data))
    },[])

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 ">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Film Details</h2>
                            <h3 className="card-subtitle mb-2 text-danger">Name: {film.name}</h3>
                            <p className="card-text">{film.description}</p>
                            <p>Date: {film.date}</p>
                            <p>Rating: {film.rating}</p>
                            <p>Price: {film.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details