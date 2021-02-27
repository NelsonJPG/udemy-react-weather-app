import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'
import './../../index.css'

const WelcomeScreen = ({ children }) => {
    const [vanta, setVanta] = useState(0)
    const myRefDiv = useRef(null);

    //console.log(myRefDiv.current);
    
    useEffect( () => { 

        if(!vanta){
            setVanta(    
                Clouds({
                    THREE,
                    el: myRefDiv.current
                    
                })
            );
            //console.log("useEffect", myRefDiv.current);
        }

        // desmontaje
        return () => {

            if (vanta) {
                vanta.destroy();
            }
        }

    }, [vanta]);

    return (
        <div className="full" ref={myRefDiv}>
           {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen
