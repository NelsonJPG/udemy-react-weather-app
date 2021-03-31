import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es';
import convertsUnit from 'convert-units';
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import ForecastChart from './../components/ForecastChart';
import Forecast from './../components/Forecast';
import AppFrame from './../components/AppFrame';
/*
const forecastItemListExample = [
    { hour: 12, temperature: 30, state: "clouds", weekDay: "Lunes"},
    { hour: 20, temperature: 10, state: "clear", weekDay: "Martes"},
    { hour: 3, temperature: 20, state: "rain", weekDay: "Miercoles"}
];*/

const CityPage = () => {
    
    const [data, setData] = useState(null);
    const [forecastItemList, setForecastItemList] = useState(null);
    const { city, countryCode } = useParams();

    useEffect( () => {
       
        const getForecast = async () => {

            const apiKey = '30c3bc93dec3c873d219c20b98430f7f', url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`
            
            try {
                
                const { data } = await axios.get(url);

                const toCelsius  = temp => Number(convertsUnit(temp).from("K").to("C").toFixed(0))
                const daysAHead = [0,1,2,3,4,5];
                const days = daysAHead.map( d => moment().add(d, 'd'));
                const dataAux = days.map( day => {

                    const tempObjArray = data.list.filter( item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear();
                        return dayOfYear === day.dayOfYear();                    
                    });

                    const temps = tempObjArray.map( item => item.main.temp );
                    
                    return ({
                        dayHour: day.format('ddd'),
                        min: toCelsius(Math.min(...temps)),
                        max: toCelsius(Math.max(...temps)),
                    });
                })
                
                setData(dataAux);

                const interval = [4, 8, 12, 16, 20, 24];
                const forecastItemListAux = data.list
                .filter( (item, index) => interval.includes(index))
                .map( item => {
                    return ({
                        hour: moment.unix(item.dt).hour(),
                        weekDay: moment.unix(item.dt).format('dddd'),
                        state: item.weather[0].main.toLowerCase(),
                        temperature: toCelsius(item.main.temp)
                    })
                });

                setForecastItemList(forecastItemListAux);
    
            } catch (error) {
                console.log( error )
                
            }
        }

        getForecast();

    }, [city, countryCode])

    const country = "Venezuela", state = "clouds", temperature = 10, humidity = 10, wind = 10;
    //data = dataExample, forecastItemList = forecastItemListExample;

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
                data && 
                <Grid item>
                    <ForecastChart data={data} />
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
