import { Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { IconContext } from 'react-icons'
import WelcomeScreen from './../components/WelcomeScreen'
import {WiDaySunny} from 'react-icons/wi'
import { Link as RouterLink} from 'react-router-dom'


const WelcomePage = () => {
    return (
        <WelcomeScreen>
            <Grid className="full" container direction="column" justify="center">
                <div className="highlight">
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Grid item>
                            <IconContext.Provider value={{size: "6em"}}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Grid>
                        <Grid item container direction="column" justify="center" alignItems="center">
                            <Typography variant="h4">Weather APP</Typography>
                            <Link color="inherit" aria-label="menu" component={RouterLink} to="/main">Ingresar</Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}

export default WelcomePage
