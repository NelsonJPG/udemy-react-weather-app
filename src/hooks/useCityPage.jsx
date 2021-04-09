import { useEffect, useDebugValue } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getForecastUrl } from '../utils/urls';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';
import { getCityCode } from '../utils/utils';

const useCityPage = ( allChartdata, allForecastItemList, onSetChartData, onSetForecastItemList) =>{

    //const [chartdata, setChartData] = useState(null);
    //const [forecastItemList, setForecastItemList] = useState(null);
    const { city, countryCode } = useParams();

    useDebugValue( `useCityPage ${ city }`)
    useEffect( () => {
    
        const getForecast = async () => {

            const url = getForecastUrl(city, countryCode)

            const cityCode = getCityCode( city, countryCode)

            try {
                
                const { data } = await axios.get(url);
               
                const dataAux = getChartData( data );
                
               // console.log({[cityCode]:dataAux})
                onSetChartData({ [cityCode]:dataAux });

                const forecastItemListAux = getForecastItemList( data );

                onSetForecastItemList({ [cityCode]:forecastItemListAux });

            } catch (error) {
                console.log( error )
                
            }
        }

        const cityCode =  getCityCode( city, countryCode)

        if(allChartdata && allForecastItemList && !allChartdata[cityCode] && !allForecastItemList[cityCode]){
            getForecast();
        }


    }, [city, countryCode, onSetChartData, onSetForecastItemList, allForecastItemList, allChartdata])

    return { city, countryCode }

}

export default useCityPage;