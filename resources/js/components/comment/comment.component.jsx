import React, { Component,useState,useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../env'
import './comment.styles.css'

const CommentBox=(props)=>
{

    const [comment,setComment]=useState({
        name:'',
        comment:''
    })

    const [success,setSuccess]=useState(false)
    const handleChange=(e)=>
    {
        const {name,value}=e.target
        setComment({...comment,
            [name]:value
        })
    }

    const [comment_error,setCommentError]=useState("")
    const [name_error,setNameError]=useState("")

    const headers = {
        'Content-Type': 'application/json'
    };

    const triggerComment=(e)=>
    {
        e.preventDefault()

        const data=JSON.stringify({
            comment: comment.comment,
            name: comment.name,
            articleID:props.articleID

        })

        if(comment.comment)
        {
            axios.post(BASE_URL+`/comment`,
                {
                    comment: comment.comment,
                    name: comment.name,
                    slug:props.slug
                }
            )
                .then(res=>{
                    if(res.data.status==200)
                    {
                        props.getNewComment(comment)
                        setComment({
                            name:'',
                            comment:''
                        })
                        setSuccess(true)
                        setTimeout(function(){
                            setSuccess(false)
                        },5000)
                    }
                })
        }else
        {
            if(comment.comment=='')
            {
                setCommentError("Please Write Your comment !!")
            }
            if(comment.name=='')
            {
                setNameError("Please Write Your Name !!")
            }
        }
    }

    return(
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h5>Leave a Comment</h5>
                    {success?<span className='text-success'>Your comment has been posted successfully!!</span>:''}
                    <form name="contactForm" onSubmit={triggerComment} id="contactForm" method="post" action="">
                        <fieldset>
                            <div className="group">
                                <label htmlFor="name">Name *{comment_error?<span className="text-danger">{name_error}</span>:""}</label>
                                <input name="name" value={comment.name} className="form-control" onChange={handleChange} type="text" id="cName" size="50" />
                            </div>
                            <div className="message group">
                                <label htmlFor="comment">Comment <span className="required">*</span>{comment_error?<span className="text-danger">{comment_error}</span>:""}</label>
                                <textarea name="comment" id="" onChange={handleChange} className="form-control" value={comment.comment} />
                            </div>
                        </fieldset>
                        <button type="submit" className="btn btn-success mt-10 right-side">Post</button>
                    </form>
            </div>
         </div>

    )
}

export default CommentBox