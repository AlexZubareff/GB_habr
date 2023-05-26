import React from "react";

export default function Footer() {
    return (
        <>
<footer className="footer footer-main ">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12 col-lg-6 text-center">
                <a href="index.html"><img src="images/logos/footer-logo.png" alt="" className="img-fluid" /></a>
                <p className="mt-4">We perfectly balances the simplicity of a clean, eye-catching blog with the flexibility to create unique page layouts.</p>

                <ul className="list-inline footer-social">
                    <li className="li list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="fa fa-facebook"></i></a></li>
                    <li className="li list-inline-item"><a href="https://twitter.com/themefisher"><i className="fa fa-twitter"></i></a></li>
                    <li className="li list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li className="li list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    <li className="li list-inline-item"><a href="#"><i className="fa fa-rss"></i></a></li>
                    <li className="li list-inline-item"><a href="#"><i className="fa fa-youtube"></i></a></li>
                </ul>

                <div className="copyright-text text-center">
                    <p className="mb-0">© All Copyright Reserved to - <a href="https://themefisher.com/" target="_blank">Themefisher</a></p>
                </div>
            </div>

            <div className="scroll-to-top">
                <button className="btn btn-primary" title="Back to Top">
                    <i className="fa fa-angle-up"></i>
                </button>
            </div>
        </div>
    </div>
</footer>

        </>
      
    )
}