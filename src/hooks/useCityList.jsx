import { useState, useEffect } from 'react'
import axios from 'axios';
import getAllWeather from '../utils/transform/getAllWeather';
import { getWeatherUrl} from '../utils/urls';

// CREACION DE UN COMPONENTE CUSTOM
const useCityList = (cities) => {

    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect( () => {
        const setWeather = async ( city, countryCode ) => {
         
            const url = getWeatherUrl(city, countryCode)
            
            try {
        
                const response = await axios.get(url);

                const allWeatherAux = getAllWeather(response, city, countryCode);

                setAllWeather( (allWeather) => {
    
                    const result  =  {...allWeather,  ...allWeatherAux };
    
                    return result;
                });

            } catch (error) {

                if(error.response) // errores regresados por el server 
                {
                    const { data, status } = error.response;
                    console.log(data, status);
                    setError("Ha ocurrido un error en el servidor de clima");
                    
                }else if(error.request) // errores que no llegaron al server pero se hizo la peticion
                {
                    console.log("No se pudo acceder al server (Revisar Internet o No envio la request al server)");
                    setError("Verifique la conexion con su servidor");
                    
                }else{
                    
                    console.log('error imprevisto');
                    setError("Error al cargar datos");

                }
                
            }
            /*
            // EJEMPLO CON PROMESA
            axios.get(url)
                .then( response =>  {
                    const { data } = response
                
                    const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
                    const state = data.weather[0].main.toLowerCase();

                    setAllWeather( (allWeather) => {

                        const result  =  {...allWeather,  [`${city}-${country}`] : { temperature, state} };

                        return result;
                    }); 
                }).catch( error => {

                    if(error.response) // errores regresados por el server 
                    {
                        const { data, status } = error.response;
                        console.log(data, status);
                        setError("Ha ocurrido un error en el servidor de clima");
                        
                    }else if(error.request) // errores que no llegaron al server pero se hizo la peticion
                    {
                        console.log("No se pudo acceder al server (Revisar Internet o No envio la request al server)");
                        setError("Verifique la conexion con su servidor");
                        
                    }else{
                        
                        console.log('error imprevisto');
                        setError("Error al cargar datos");
                    
                    }

                });*/
           
        }

        cities && cities.forEach( ({ city, countryCode}) => setWeather( city, countryCode));
        
    }, [cities]);

    // retorno de valores de un componente custom
    return { allWeather, error, setError }  

}


export default useCityList;