import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Grid, List, ListItem } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import convertUnits from 'convert-units';
import CityInfo from './../CityInfo';
import Weather from './../Weather';


const getCityCode = (city, countryCode) =>  `${city}-${countryCode}`
// renderCitiesAndCountry se va a convertir en una funcion q retorna otra (HOC)
const renderCitiesAndCountry = eventOnClickCity => {
    
    const renderCitiesAndCountryInternal = (cityAndCountry, weather) => {
        const { city, country, countryCode} = cityAndCountry;
        //const { temperature, state} = weather;
        return (
            <ListItem button key={getCityCode(city, countryCode)} onClick={ () => eventOnClickCity(city, countryCode) }>
                <Grid container justify="center" alignItems="center">
                    <Grid item  xs={12} md={9} >
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Weather temperature={weather && weather.temperature} state={weather && weather.state} />
                    </Grid>
                </Grid> 
            </ListItem>
        )
    }
    return renderCitiesAndCountryInternal
}


const CityList = ({cities, onClickCity }) => {

    // allWeather tendra la siguiente estructura 
    // [Caracas-Venezuela] : { temperature, state}
    // [Bogotá-Colombia] : { temperature, state}
    // [City-Country] : { temperature, state}.... N
    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect( () => {
        const setWeather = async ( city, countryCode ) => {
            const apiKey = '30c3bc93dec3c873d219c20b98430f7f', url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`
            
            try {
                
                const response = await axios.get(url);
    
                const { data } = response
                    
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
                
                const state = data.weather[0].main.toLowerCase();

                const propKeys = getCityCode( city, countryCode)
                
                const propValues = { temperature, state } 
    
                setAllWeather( (allWeather) => {
    
                    const result  =  {...allWeather,  [propKeys] : propValues};
    
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

        cities.forEach( ({ city, countryCode})=> setWeather( city, countryCode));
        
    }, [cities]);

    //const weather = { temperature: 13, state: 'sunny'}

    // const funcAux = renderCitiesAndCountry(onClickCity); // modo de simplificar un HOC
    return (
        <div>
            {
                error && <Alert onClose={ () => setError(null) } severity="error">{error}</Alert>
            }
        <List>
            { cities.map( cityAndCountry => renderCitiesAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]) ) }
        </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
