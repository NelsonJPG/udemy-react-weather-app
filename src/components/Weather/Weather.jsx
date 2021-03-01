import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { IconContext } from "react-icons";
import IconState, {validValues} from '../IconState';
import { Skeleton } from '@material-ui/lab';


const Weather = ({ temperature, state}) => {
    return (
        <Grid container item direction="row" justify="center" alignItems="center" spacing={1}>
            <IconContext.Provider value={{ size: "5em" }}>
                {
                    state?
                    <IconState state={state} />
                    : <Skeleton variant="circle" heigth={80} width={80} />
                }
            </IconContext.Provider>
            {temperature? 
            <Typography display="inline" variant="h2">{ temperature }</Typography>
            :<Skeleton  variant="rect" heigth={80} width={80} />}
        </Grid>
    
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather
