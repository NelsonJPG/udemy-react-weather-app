import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { hour: 12, temperature: 30, state: "cloud", weekDay: "Lunes"},
    { hour: 20, temperature: 10, state: "sunny", weekDay: "Martes"},
    { hour: 3, temperature: 20, state: "rain", weekDay: "Miercoles"},
]

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList} />