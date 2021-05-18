import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {useLocation} from 'react-router'

function Breadcrumbs() {

    const location = useLocation();
    console.log(location);

    return (
        <div>
            <p>{location.pathname}</p>
        </div>
    )
}

export default Breadcrumbs
