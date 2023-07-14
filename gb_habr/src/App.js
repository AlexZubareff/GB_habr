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
import { Category } from './pages/Category';
import { UserProfile } from './pages/UserProfile';
import { Admin } from './pages/Admin';
import { AdminUser } from './pages/AdminUser';
import { AdminUserProfile } from './pages/AdminUserProfile';
import { AdminArticle } from './pages/AdminArticle';





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
            <Route exact path="/user/articles" Component={UserArticles} />
            <Route exact path="/article/:id/edit" Component={AddArticle} />
            <Route exact path="/article/create" Component={AddArticle} />
            <Route exact path="/category/:id" Component={Category} />
            <Route exact path="/article/:id" Component={SingleArticle} />
            <Route exact path="/user/profile/:id" Component={UserProfile} />

            
            <Route exact path="/admin" Component={Admin}>
                <Route exact path="/admin/article" Component={AdminArticle} />
                <Route exact path="/admin/user" Component={AdminUser} />
                <Route exact path="/admin/user/profile/:id" Component={AdminUserProfile} />
            </Route>

        </Routes>


    );
}

export default App;
