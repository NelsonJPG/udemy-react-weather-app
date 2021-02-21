import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';
import { Grid } from '@material-ui/core';

const App = props => {
  return (
    <Grid container justify="center" direction="row">
      <Grid item sm={11} md={10} lg={8} xs={12} >
        <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage></WelcomePage>
          </Route>
          <Route path="/main"> 
            <MainPage></MainPage>
          </Route>
          <Route path="/city">
            <CityPage></CityPage>
          </Route>
          <Route>
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </Router>
      </Grid>
    </Grid>
  )
}

export default App
