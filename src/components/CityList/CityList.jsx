import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem } from '@material-ui/core';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

// renderCitiesAndCountry se va a convertir en una funcion q retorna otra (HOC)
const renderCitiesAndCountry = eventOnClickCity => {
    
    const renderCitiesAndCountryInternal = cityAndCountry => {
        const { city, country} = cityAndCountry;
        return (
            <ListItem button key={city} onClick={eventOnClickCity}>
                <Grid container justify="center" alignItems="center">
                    <Grid item  xs={12} md={8} >
                            <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                            <Weather temperature={10} state="sunny" />
                    </Grid>
                </Grid> 
            </ListItem>
        )
    }
    return renderCitiesAndCountryInternal
}


const CityList = ({cities, onClickCity }) => {
    const funcAux = renderCitiesAndCountry(onClickCity);
    return (
        <List>
            { cities.map( cityAndCountry => funcAux(cityAndCountry) ) }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
