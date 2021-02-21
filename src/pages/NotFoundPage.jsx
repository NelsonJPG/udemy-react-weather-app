import React from 'react'
import {Link} from 'react-router-dom';

const NotFoundPage = props => {
    return (
        <div>
            <div>
                <Link to="/main">Ir a Main</Link>
            </div>
            Not Found            
        </div>
    )
}

export default NotFoundPage
