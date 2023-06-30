import React from "react";
import { Link } from 'react-router-dom';
import axios from '../../axios';


export default function addComment(){


    return (
        <>
            <div className="comment-form ">
                <h3 className="title-normal">Leave a Reply </h3>
                <p className="mb-4">Your email address will not be published. Required fields are marked *</p>
                <form role="form">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea className="form-control required-field" id="message" placeholder="Messege" rows="8" required></textarea>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <input className="form-control" name="name" id="name" placeholder="Name" type="text" required />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input className="form-control" name="email" id="email" placeholder="Email" type="email" required />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Website" required />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <button className="comments-btn btn btn-primary " type="submit">Post Comment</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}