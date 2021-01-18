import React from 'react'
import ForecastItem from './ForecastItem'


export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const MondaySunnyExample = () => <ForecastItem hour={10} state="sunny" temperature={23} weekDay="Lunes" />