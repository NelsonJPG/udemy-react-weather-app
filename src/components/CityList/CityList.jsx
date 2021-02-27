import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Grid, List, ListItem } from '@material-ui/core';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

// renderCitiesAndCountry se va a convertir en una funcion q retorna otra (HOC)
const renderCitiesAndCountry = eventOnClickCity => {
    
    const renderCitiesAndCountryInternal = (cityAndCountry, weather) => {
        const { city, country} = cityAndCountry;
        //const { temperature, state} = weather;
        return (
            <ListItem button key={city} onClick={eventOnClickCity}>
                <Grid container justify="center" alignItems="center">
                    <Grid item  xs={12} md={9} >
                            <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        {
                            weather?
                            <Weather temperature={weather.temperature} state={weather.state} />
                            : "No hay datos"
                        }
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
    const [allWeather, setAllWeather] = useState({})

    useEffect( () => {
        const setWeather = ( city , country, countryCode ) => {
            const apiKey = 'e5eedc545565283d795914961ea9a7c0', url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`
            axios.get(url).then( response =>  {
                const { data } = response
               
                const temperature = data.main.temp;
                const state = data.weather[0].main.toLowerCase();

                setAllWeather( (allWeather) => {

                    const result  =  {...allWeather,  [`${city}-${country}`] : { temperature, state} };

                    return result;
                }); 
            })
           
        }

        cities.forEach( ({ city, country, countryCode})=> setWeather( city, country, countryCode));
        
    }, [cities]);

    //const weather = { temperature: 13, state: 'sunny'}

    // const funcAux = renderCitiesAndCountry(onClickCity); // modo de simplificar un HOC
    return (
        <List>
            { cities.map( cityAndCountry => renderCitiesAndCountry(onClickCity)(cityAndCountry, allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]) ) }
        </List>
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
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
