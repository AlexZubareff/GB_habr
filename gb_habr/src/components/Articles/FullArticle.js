import React from "react";
import { Link } from 'react-router-dom';
import LoadingFullArticle from "../Loading/loadingFullArticle";


export default function Single({
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
    isLoading
}) {
    if (isLoading) {
        return <LoadingFullArticle />

      }

    return (
        <div className="single-post">
        <div className="post-header mb-5">
                {
                    tags.split(",").map((tag) => (
                        <Link className="post-category" to="post-category-1.html">{tag}</Link>
                    ))
                }

            
            <h2 className="post-title">
                {title}
            </h2>
        </div>
        <div className="post-body">
            <div className="post-featured-image">
                <img src={imageUrl} className="img-fluid" alt="featured-image" />
            </div>
            <div className="entry-content">
                <p>
                    {text}
                </p>
                {/* <h2>Perfect design & code delivered to you</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat sapiente neque iusto praesentium adipisci itaque error, commodi laborum doloremque. Esse?
                </p>
                <div className="media mb-4 single-media">
                    <img src="images/news/img-1.jpg" alt="post-ads" className="img-fluid mr-4" />
                        <div className="media-body">
                            <p>
                                Oblique facilisi vix ei, quo ignota appetere lucilius at. Apeirian voluptatibus ius ei, an periculis imperdiet consequat sea. His ea everti placerat. Ad mea utroque convenire, an quo reque aperiam, has et unum cibo adipiscing. Brute instructior te vix, consequat definitiones conclusionemque et usu, et per idque quaerendum. Id pro ridens appareat, vim in verear pertinacia.
                            </p>
                        </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum delectus exercitationem
                    natus quidem enim error suscipit. Iure cupiditate nobis quaerat consectetur! Vero aliquam,
                    amet ipsum ullam reiciendis nostrum voluptate accusantium provident ut blanditiis incidunt.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ab ratione animi nobis in et consequatur
                    earum modi repellendus, qui, non debitis pariatur tempora consequuntur!
                </p> */}
            </div>

            <div className="share-block  d-flex justify-content-between align-items-center border-top border-bottom mt-5">
                <div className="post-tags">
                    <span>Tags</span>
                    {
                        tags.split(",").map((tag) => (

                            <Link to="post-category-2.html">{tag}</Link>
        
                        ))
                    }
                </div>

                <ul className="share-icons list-unstyled ">
                    <li className="facebook">
                        <Link to="#">
                            <i className="fa fa-facebook"></i>
                        </Link>
                    </li>
                    <li className="twitter">
                        <Link to="#">
                            <i className="fa fa-twitter"></i>
                        </Link>
                    </li>
                    <li className="gplus">
                        <Link to="#">
                            <i className="fa fa-google-plus"></i>
                        </Link>
                    </li>
                    <li className="pinterest">
                        <Link to="#">
                            <i className="fa fa-pinterest"></i>
                        </Link>
                    </li>
                    <li className="reddit">
                        <Link to="#">
                            <i className="fa fa-reddit-alien"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    )
}