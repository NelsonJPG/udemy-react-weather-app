
import { useRef, useEffect, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
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

    return myRefDiv;
}

export default useVanta;