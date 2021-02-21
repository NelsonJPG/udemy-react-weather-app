import React from 'react'
import {Link} from 'react-router-dom';

const WelcomePage = props => {
    return (
        <div>
            <div>
                <Link to="/main">Ir a Main</Link>
            </div>
            WelcomePage
        </div>
    )
}

export default WelcomePage
