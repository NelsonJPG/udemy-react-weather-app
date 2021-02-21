import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'

const cities = [
    { city: "Caracas", country: "Venezuela"}, 
    { city: "Bogotá", country: "Colombia"}, 
    { city: "Santiago", country: "Chile"},
    { city: "Buenos Aires", country: "Argentina"},
]

const MainPage = props => {
    let history = useHistory();

    const onClickHandler = () => history.push('/city');


    return (
        <div>
            <h2>Lista de Ciudades</h2>
            <CityList cities={cities} onClickCity={ onClickHandler }/>
        </div>
    )
}

export default MainPage
