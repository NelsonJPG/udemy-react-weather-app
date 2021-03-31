import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import ForecastItem from './../ForecastItem'
import {validValues} from './../IconState';

const Forecast = ({ forecastItemList }) => {
    const renderForecastItem = ({ weekDay, hour, temperature, state }) => (
        <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
            <ForecastItem hour={hour} temperature={temperature} state={state} weekDay={weekDay} />
        </Grid>
    )

    return (
        <Grid container justify="space-around" alignItems="center">
            {forecastItemList && forecastItemList.map( forecast => renderForecastItem(forecast))}
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList:PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired, 
        hour: PropTypes.number.isRequired, 
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired
}

export default Forecast
