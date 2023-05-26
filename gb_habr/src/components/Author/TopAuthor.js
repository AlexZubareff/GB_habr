import React from "react";
import { Link } from 'react-router-dom';


export function TopAuthor() {
    return (
        <div className="top-author">
            <img src="images/news/author-01.jpg" alt="author-thumb" />
            <div className="info">
                <h4 className="name"><Link to="author.html">Jack Rockshow</Link></h4>
                <ul className="list-unstyled">
                    <li>37 Posts</li>
                </ul>
            </div>
        </div>
    )
}