import React from "react";

export function SignUp() {
    return (
        <>
            <section className="login-signup section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7">
                            <div className="signup">
                                <div className="text-center"><a href="index.html"><img src="images/logos/logo.png" alt="" className="img-fluid" /></a></div>
                                <h3 className="mt-4">Sign Up Here</h3>
                                <p className="mb-5">Join with us and feel better</p>
                                <form action="#" className="signup-form row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="f-name">First Name</label>
                                            <input type="text" className="form-control" id="f-name" name="f-name" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="l-name">Last Name</label>
                                            <input type="text" id="l-name" name="l-name" className="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="email-address">Email</label>
                                            <input type="email" className="form-control" name="email-address" id="email-address" placeholder="Enter a valid mail" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="password-s">Password</label>
                                            <input type="password" className="form-control" id="password-s" name="password-s" placeholder="A strong password" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" type="submit">Sign Up</button>
                                        <p className="mt-5 mb-0">Already a member? <a href="account.html">Log in</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}