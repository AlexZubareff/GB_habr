import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
          <header className="header-navigation d-none d-lg-block">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-xs-12 col-sm-3 col-md-3">
                {/* Logo */}
                <div className="logo">
                    <Link to="index.html">
                        <img src="images/logos/logo.png" alt="" /> {/* Replace Logo Here */}
                    </Link>
                </div>
                {/* End Logo */}
            </div>
            <div className="col-xs-12 col-sm-9 col-md-9">
                <div className="top-ad-banner float-right">
                    <Link to="#">
                        <img src="images/news/ad-pro.png" className="img-fluid" alt="banner-ads" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
</header>

        </>
      
    )
}