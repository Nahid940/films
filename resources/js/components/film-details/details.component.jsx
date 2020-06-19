import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {BASE_URL} from '../../env'
import CommentBox from '../comment/comment.component'
import './details.styles.css'

const Details=(props)=>
{
    const [film,setFilm]=useState({})
    const [comments,setComments]=useState([])
    let slug=props.match.params.slug;

    useEffect(()=>{
        axios.get(BASE_URL+`/${slug}`).then(response=>
        {   setFilm(response.data);
            setComments(response.data.comments)
        }
        )
    },[])

    const getNewComment=(comment)=>
    {
        setComments([...comments,comment])
        // console.log(comment)
    }

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

                        <div className="card-body">
                            <h4>Comments</h4>
                            <hr/>
                                {comments?comments.map((comment,index)=>(
                                    <div className="media" key={index}>
                                        <div className="media-body">
                                            <div className="comment-user">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" alt="Image"/>
                                                <h6 className="media-heading user_name text-primary">{comment.name}</h6>
                                            </div>
                                            <p className="comment">{comment.comment}</p>
                                        </div>
                                    </div>
                                )) : 'No Comments Posted Yet !!'}

                        </div>


                        <div className="card-body">
                            <CommentBox slug={slug} getNewComment={getNewComment}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details