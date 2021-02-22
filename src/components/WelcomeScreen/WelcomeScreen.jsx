import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    const [vanta, setVanta] = useState(0)
    const myRefDiv = useRef(null);

    console.log(myRefDiv.current);
    
    useEffect( () => { 

        if(!vanta){
            setVanta(1);

            Clouds({
                THREE,
                el: myRefDiv.current
            })
            //console.log("useEffect", myRefDiv.current);
        }

        // desmontaje
        return () => {

            if(vanta){
                vanta.destroy();
            }
        }

    }, [vanta]);

    return (
        <div ref={myRefDiv}>
            <h2>Welcome Screen </h2>
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen
