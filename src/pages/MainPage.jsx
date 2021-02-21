import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import { Paper } from '@material-ui/core'

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
        <AppFrame>
            <Paper elevation={2}>
                <CityList cities={cities} onClickCity={ onClickHandler }/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
