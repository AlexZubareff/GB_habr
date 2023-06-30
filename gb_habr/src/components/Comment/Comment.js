import React from "react";
import { Link } from 'react-router-dom';
import axios from '../../axios';



export default function Comment(
    {
        article_id
    }
) {
    const [data, setData] = React.useState(null);

    const [isLoading, setLoading] = React.useState(true);

    console.log(article_id);

    React.useEffect(() => {
      axios
        .get(`/posts/comment/${article_id}`)
        .then((res) => {
            setData(res.data);
            setLoading(false);
            console.log(data);
        })
    }, [article_id]);

    console.log(data);

    if (isLoading) {
        return "Loading"
    }

    return (
        <>
        { data.map(elem => (
            <div className="comment">
                <img className="commented-person" alt="" src={elem.User.avatar} />
                <div className="comment-body">
                    <div className="meta-data">
                        <span className="commented-person-name">{elem.User.name}</span>
                        <span className="comment-hour d-block"><i className="fa fa-clock-o mr-2"></i>{elem.createdAt.slice(0,10)}</span>
                    </div>
                    <div className="comment-content">
                        <p>
                            {elem.body}
                        </p>
                    </div>
                    <div className="text-left">
                        <Link className="comment-reply" to="#"><i className="fa fa-reply"></i> Reply</Link>
                    </div>
                </div>
            </div>
        ))}
            

        </>
    )
}