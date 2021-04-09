import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import { Paper } from '@material-ui/core'
import { getCities } from '../utils/servicesCities'


const MainPage = ({actions, data}) => {

    let history = useHistory();

    const onClickHandler = ( city, countryCode ) => history.push(`/city/${countryCode}/${city}`);

    return (
        <AppFrame>
            <Paper elevation={2}>
                <CityList data={data} cities={getCities()} onClickCity={ onClickHandler } actions={actions} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
