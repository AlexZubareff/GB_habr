import React from "react";
import { Link } from "react-router-dom";

export function AuthorBlock(
    {
        avatar,
        name,
    }
) {
    return (
        <>
            <div className="author-block">
                <div className="author-thumb">
                    <img src={avatar} alt="author-image" />
                </div>
                <div className="author-content">
                    <h3><Link to="author.html">{name}</Link></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quod molestias delectus illum quisquam.
                        Quasi iure perferendis suscipit officiis dicta!
                    </p>

                    <div className="authors-social">
                        <Link to="#">
                            <i className="fa fa-facebook"></i>
                        </Link>
                        <Link to="#">
                            <i className="fa fa-twitter"></i>
                        </Link>
                        <Link to="#">
                            <i className="fa fa-google-plus"></i>
                        </Link>
                        <Link to="#">
                            <i className="fa fa-pinterest-p"></i>
                        </Link>
                        <Link to="#">
                            <i className="fa fa-dribbble"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}