import React from 'react'
import CityList from './CityList'


export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Caracas", country: "Venezuela"}, 
    { city: "Bogotá", country: "Colombia"}, 
    { city: "Santiago", country: "Chile"},
    { city: "Buenos Aires", country: "Argentina"},
]

export const CityListExample = () => <CityList cities={cities} />