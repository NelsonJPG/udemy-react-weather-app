import { Grid, LinearProgress } from '@material-ui/core';
import React, { useMemo } from 'react'
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import ForecastChart from './../components/ForecastChart';
import Forecast from './../components/Forecast';
import AppFrame from './../components/AppFrame';
import useCityPage from '../hooks/useCityPage';
import useCityList from '../hooks/useCityList';
import { getCityCode } from '../utils/utils';
import { getCountryNameByCountryCode } from '../utils/servicesCities';


const CityPage = ({ allWeather, onSetAllWeather}) => {
    
    const { city, countryCode, chartdata, forecastItemList } = useCityPage();

    const cities = useMemo(() => ([{ city, countryCode}]), [city, countryCode])

    useCityList(cities, onSetAllWeather)

    const weather = allWeather[ getCityCode( city, countryCode)];

    const country = countryCode && getCountryNameByCountryCode(countryCode), state = weather && weather.state, temperature = weather && weather.temperature, humidity = weather && weather.humidity, wind = weather && weather.wind;
  
    return (
        <AppFrame>
           
            <Grid container justify="space-around" direction="column" spacing={2}>
                <Grid item container justify="center"  alignItems="flex-end" xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid  item xs={12}>
                    <Weather state={state} temperature={temperature}/>
                    {
                        wind && humidity && <WeatherDetails humidity={humidity} wind={wind} />
                    }
                </Grid>
                <Grid item>
                    {
                        !chartdata && !forecastItemList && <LinearProgress />
                    }
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
