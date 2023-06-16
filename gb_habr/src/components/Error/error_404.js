import React from "react";
import { Link } from "react-router-dom";

export default function Error_404() {
    return (
        <>
<section >
    <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
                <div className="error-block ">
                    <div className="throw-code">
                        <h2>
                            404
                        </h2>
                    </div>
                    <div className="error-info">
                        <h2 className="mb-2">Статьи не найдены!</h2>
                        {/* <p className="mb-5">The page is you are looking for is not available.</p> */}
                        <Link to="/">back to Home <i className="fa fa-angle-double-right ml-2"></i></Link>
                    </div>
                </div>
            </div>
            {/* <div className="col-lg-6">
                <div className="broken-img mt-5 mt-lg-0">
                    <img src="images/broken.png" alt="" className="img-fluid" />
                </div> 
            </div> */}
        </div>
    </div>
</section>

        </>
      
    )
}