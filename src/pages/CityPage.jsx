import { Grid } from '@material-ui/core';
import React from 'react'
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import ForecastChart from '../components/ForecastChart';
import Forecast from '../components/Forecast';

const forecastItemListExample = [
    { hour: 12, temperature: 30, state: "cloud", weekDay: "Lunes"},
    { hour: 20, temperature: 10, state: "sunny", weekDay: "Martes"},
    { hour: 3, temperature: 20, state: "rain", weekDay: "Miercoles"},
];

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]


const CityPage = () => {
    const city = "Caracas", country = "Venezuela", state = "cloudy", temperature = 10, humidity = 10, wind = 10,
    data = dataExample, forecastItemList = forecastItemListExample;

    return (
        <Grid container justify="space-around" direction="column" spacing={2}>
            <Grid item container justify="center"  alignItems="flex-end" xs={12}>
                <CityInfo city={city} country={country} />
            </Grid>
            <Grid  item xs={12}>
                <Weather state={state} temperature={temperature}/>
                <WeatherDetails humidity={humidity} wind={wind} />
            </Grid>
            <Grid item>
                <ForecastChart data={data} />
            </Grid>
            <Grid item>
                <Forecast forecastItemList={forecastItemList} />
            </Grid>
        </Grid>
    )
}

export default CityPage
