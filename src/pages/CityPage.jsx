import { Grid } from '@material-ui/core';
import React from 'react'
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import ForecastChart from './../components/ForecastChart';
import Forecast from './../components/Forecast';
import AppFrame from './../components/AppFrame';
import useCityPage from '../hooks/useCityPage';


const CityPage = () => {
    
    const { city, chartdata, forecastItemList} = useCityPage();
    const country = "Venezuela", state = "clouds", temperature = 10, humidity = 10, wind = 10;
  
    return (
        <AppFrame>
           
            <Grid container justify="space-around" direction="column" spacing={2}>
                <Grid item container justify="center"  alignItems="flex-end" xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid  item xs={12}>
                    <Weather state={state} temperature={temperature}/>
                    <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
                {
                chartdata && 
                <Grid item>
                    <ForecastChart data={chartdata} />
                </Grid>
                }
                {
                forecastItemList && 
                <Grid item>
                    <Forecast forecastItemList={forecastItemList} />
                </Grid>
                }

            </Grid>
        </AppFrame>
    )
}

export default CityPage
