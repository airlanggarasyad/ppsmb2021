import React from 'react'
import Galeri from '../pages/Galeri'
import Test1 from '../pages/Test1'
import Test2 from '../pages/Test2'
import Test3 from '../pages/Test3'
import {Switch, Route } from "react-router-dom";


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Galeri}/>
            <Route exact path="/galeri" component={Galeri}/>
            <Route exact path="/faq" component={Galeri}/>
            <Route exact path="/agenda/test1/" component={Test1}/>
            <Route exact path="/agenda/test1/test2" component={Test2}/>
            <Route exact path="/agenda/test1/test2/test3" component={Test3}/>
        </Switch>
    )
}

export default Routes
