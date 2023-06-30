import React from "react";
import { Link } from 'react-router-dom';


export default function RecentArticles({
    id,
    title,
    text,
    tags,
    imageUrl,
    viewsCount,
    created_at,
    updated_at,
    deleted_at,
    category_id,
    user_id,
    commentsCount
}) {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="post-content">
                <div className="post-block-wrapper post-float-half clearfix">
                    <div className="post-thumbnail">
                        <Link to={`/article/${id}`}>
                            <div className="post-overlay-wrapper clearfix">
                                <img className="img-fluid" src={imageUrl} alt={title} />
                             <div className="post-content">
                                    <div className="post-meta white">
                                        <span className="pull-right">
                                            <i class="fa fa-eye"></i>
                                            {/* <i class="fa fa-heart"></i> */}
                                            <Link to="single-post.html#comments">{viewsCount}</Link>
                                            <i className="fa fa-comments"></i>
                                            <Link to="single-post.html#comments">{commentsCount}</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                {
                    tags.split(",").map((tag) => (
                        <Link className="post-category" to="post-category-1.html">{tag}</Link>
                    ))
                }

                <h2 className="post-title mt-3">
                    <Link to="single-post.html">{title}</Link>
                </h2>
                <div className="post-meta">
                    <span className="posted-time">19 hours ago</span>
                    <span className="post-author">by
                        <Link to="author.html">{user_id}</Link>
                    </span>
                </div>
            </div>
        </div>

    )
}