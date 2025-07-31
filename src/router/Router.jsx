import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import Collection from '../pages/Collection'
import Description from '../pages/Description'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import { nav_item } from '../config'

const Router = () => {
    
    return (
        <Routes>
            <Route path={nav_item[0].path} element={<Home />} />
            <Route path={nav_item[1].path} element={<About />} />
            <Route path={nav_item[2].path} element={<Shop />} />
            <Route path={nav_item[3].path} element={<Collection />} />
            <Route path='/' element={<Description />} />
            <Route path='/' element={<NotFound />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default Router