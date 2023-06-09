import React from "react";
import { Link, Navigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { fetchRegister, selectIsAuth } from "../redux/slices/auth";




export function Registration() {

    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {register, 
        handleSubmit,
        setError,
        formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: 'Nike',
            email: 'nike@test.ru',
            password: '12345',
        },
        mode: 'onChange',
    })

    const onSubmit = async (values) => {
        // alert(JSON.stringify(values));
        const data = await dispatch(fetchRegister(values));

        if (!data.payload) {
            return alert('Не удалось зарегистрироваться');
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        }
    }

    if (isAuth) {
        return <Navigate to="/"/>
    }

    return (
        <>
<section className="login-signup section-padding">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
                <div className="signup">
                    <div className="text-center"><Link href="index.html"><img src="images/logos/logo.png" alt="" className="img-fluid" /></Link></div>
                    <h3 className="mt-4">Sign Up Here</h3>
                    <p className="mb-5">Join with us and feel better</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="signup-form row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="f-name">Full Name</label>
                                <input {...register('name', {required: 'Укажите полное имя'})} type="text" className="form-control" id="f-name" name="name" placeholder="Full Name" />
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="l-name">Last Name</label>
                                <input type="text" id="l-name" name="l-name" className="form-control" placeholder="Last Name" />
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="email-address">Email</label>
                                <input {...register('email', {required: 'Укажите почту'})} type="email" className="form-control" name="email" id="email-address" placeholder="Enter a valid mail" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="password-s">Password</label>
                                <input {...register('password', {required: 'Укажите пароль'})} type="password" className="form-control" id="password-s" name="password" placeholder="A strong password" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button disabled={!isValid} className="btn btn-primary" type="submit">Sign Up</button>
                            <p className="mt-5 mb-0">Already a member? <a href="account.html">Log in</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

</>

            /* <section className="login-signup section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7">
                            <div className="login">
                                <div className="text-center"><Link to="index.html"><img src="images/logos/logo.png" alt="" className="img-fluid" /></Link></div>

                                <h3 className="mt-4">Login Here</h3>
                                <p className="mb-5">Enter your valid mail & password</p>
                                <form onSubmit={handleSubmit(onSubmit)} className="login-form row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="loginemail">Email</label>
                                            <input {...register('email', {required: 'Укажите почту'})}  type="text" id="loginemail" className="form-control" name="email" placeholder="Enter mail" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="loginPassword">Password</label>
                                            <input {...register('password', {required: 'Укажите пароль'})} type="password" id="loginPassword" className="form-control" name="password" placeholder="Password" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary">Login</button>

                                        <p className="mt-5 mb-0">Not a member yet? <Link to="signup.html">Register Here</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */







    )


}







