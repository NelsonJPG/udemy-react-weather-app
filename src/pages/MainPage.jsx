import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import { Paper } from '@material-ui/core'
import { getCities } from '../utils/servicesCities'


const MainPage = props => {

    let history = useHistory();

    const onClickHandler = ( city, countryCode ) => history.push(`/city/${countryCode}/${city}`);

    return (
        <AppFrame>
            <Paper elevation={2}>
                <CityList cities={getCities()} onClickCity={ onClickHandler }/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
