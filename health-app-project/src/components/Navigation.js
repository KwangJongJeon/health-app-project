import React from "react";
import {Link} from "react-router-dom";


// use Link tag when import Link Component
function Navigation() {
    return <div>
        <Link to="/">Home</Link>
        <Link to={{
            pathname:"/about",
            state:{
                fromNavigation: true
            }
        }}>About</Link>
    </div>
}

export default Navigation;