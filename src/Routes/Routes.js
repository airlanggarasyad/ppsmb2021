import React from 'react'
import Galeri from '../pages/Galeri'
import Beranda from '../pages/Beranda'
import {Switch, Route } from "react-router-dom";


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Beranda}/>
            <Route exact path="/galeri" component={Galeri}/>
        </Switch>
    )
}

export default Routes
