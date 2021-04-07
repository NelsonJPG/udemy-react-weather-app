import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CityInfo from './../CityInfo';
import Weather from './../Weather';
import useCityList from '../../hooks/useCityList';
import { getCityCode } from './../../utils/utils';


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

const CityList = ({cities, onClickCity, onSetAllWeather, allWeather }) => {
    // inializacion de un componente custom 
    const { error, setError } = useCityList(cities, onSetAllWeather)
    
    // allWeather tendra la siguiente estructura 
    // [Caracas-Venezuela] : { temperature, state}
    // [Bogotá-Colombia] : { temperature, state}
    // [City-Country] : { temperature, state}.... N
    

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
