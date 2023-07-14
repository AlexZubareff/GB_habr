import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import axios from '../../axios';



export default function AddComment({
    article_id,
    user_id,
    status
}){
    const navigate = useNavigate();
    const [isLoading, setLoading] = React.useState(false);
    const [text, setText] = React.useState('');


    const onSubmit = async() => {
        try {
            setLoading(true);

            const fields = {
                user_id,
                article_id,
                text,
                status,
            }
            const {data} = await axios.post('/comment/add', fields);

            // const articleId = data.id;

            navigate(`/article/${article_id}`)

        } catch (error) {
            console.warn(error);
            alert('Ошибка при создании комментария!');

        }
    }



    return (
        <>
            <div className="comment-form ">
                <h3 className="title-normal"> Добавить комментарий </h3>
                {/* <p className="mb-4">Your email address will not be published. Required fields are marked *</p> */}
                <form role="form">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea onChange={(e) => setText(e.target.value)} value={text} className="form-control required-field" id="message" placeholder="Messege" rows="8" required></textarea>
                            </div>
                        </div>

                        {/* <div className="col-md-4">
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
 */}
                        <div className="col-md-12">
                            <button className="comments-btn btn btn-primary" onClick={onSubmit} type="submit">Добавить комментарий</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}