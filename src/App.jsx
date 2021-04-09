import React, { useState, useMemo, useCallback } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  
  const [allWeather, setAllWeather] = useState({});
  const [allChartdata, setAllChartData] = useState({});
  const [allForecastItemList, setAllForecastItemList] = useState([]);

  const onSetAllWeather = useCallback( weatherCity => setAllWeather( allWeather => ({...allWeather, ...weatherCity})) , [setAllWeather] )

  const onSetChartData = useCallback(chartdataCity => setAllChartData(chartdata => ({...chartdata, ...chartdataCity})), [setAllChartData]);
  
  const onSetForecastItemList = useCallback(forecastItemListCities => setAllForecastItemList(forecastItemList => ({...forecastItemList, ...forecastItemListCities})), [setAllForecastItemList]);

  const actions = useMemo( () => (
    {
      onSetAllWeather,
      onSetChartData,
      onSetForecastItemList,

    }
  ), [onSetAllWeather, onSetChartData, onSetForecastItemList])

  const data = useMemo( () => (
    {
      allWeather,
      allChartdata,
      allForecastItemList
    }
  ), [allWeather, allChartdata, allForecastItemList])
  
  return (  
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage></WelcomePage>
          </Route>
          <Route path="/main"> 
            <MainPage data={data} actions={actions}></MainPage>
          </Route>
          <Route path="/city/:countryCode/:city">
            <CityPage data={data} actions={actions} />
          </Route>
          <Route>
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </Router>
     
  )
}

export default App
