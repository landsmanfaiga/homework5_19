import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import MyFavorites from './Pages/MyFavorites';
import { UserContextComponent } from './UserContext';
const App = () => {
    return (
        <UserContextComponent>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/myfavorites' element={<MyFavorites />} />
            </Routes>
            </Layout>
        </UserContextComponent>
    );
}

export default App;