import './App.css';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { SingleArticle } from './pages/SingleArticle';
import {Login} from './pages/Login'
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import { Registration } from './pages/Register';
import { AddArticle } from './pages/AddArticle';
import { UserArticles } from './pages/UserArticles';



function App() {

const dispatch = useDispatch();
const isAuth = useSelector(selectIsAuth);

React.useEffect(() => {
    dispatch(fetchAuthMe());
}, []);

    return (
        <Routes>
            <Route exact path="/" Component={Home} />,
            <Route exact path="/about" Component={About} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/register" Component={Registration} />
            <Route exact path="/user_articles" Component={UserArticles} />
            <Route exact path="/article/:id/edit" Component={AddArticle} />
            <Route exact path="/article/create" Component={AddArticle} />
            <Route exact path="/article/:id" Component={SingleArticle} />
        </Routes>


    );
}

export default App;
