import React from "react";
import { Link, Navigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAuth, selectIsAuth } from "../redux/slices/auth";




export function Login() {

    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {register, 
        handleSubmit,
        setError,
        formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: 'Hero@test.ru',
            password: '12345',
        },
        mode: 'onChange',
    })

    const onSubmit = async (values) => {
        // alert(JSON.stringify(values));
        const data = await dispatch(fetchAuth(values));

        if (!data.payload) {
            return alert('Не удалось авторизоваться');
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        }
    }

    if (isAuth) {
        return <Navigate to="/"/>
    }

    return (

            <section className="login-signup section-padding">
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
                                        <button disabled={!isValid} type="submit" className="btn btn-primary">Login</button>

                                        <p className="mt-5 mb-0">Not a member yet? <Link to="signup.html">Register Here</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    )
}

