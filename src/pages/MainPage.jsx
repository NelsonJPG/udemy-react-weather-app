import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import { Paper } from '@material-ui/core'

const cities = [
    { city: "Caracas", country: "Venezuela", countryCode: "VE"}, 
    { city: "Bogotá", country: "Colombia", countryCode: "CO"}, 
    { city: "Santiago", country: "Chile", countryCode: "CL"},
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"}
]

const MainPage = props => {
    let history = useHistory();

    const onClickHandler = ( city, countryCode ) => history.push(`/city/${countryCode}/${city}`);


    return (
        <AppFrame>
            <Paper elevation={2}>
                <CityList cities={cities} onClickCity={ onClickHandler }/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
