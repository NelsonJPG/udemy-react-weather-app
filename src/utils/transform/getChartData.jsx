import moment from 'moment';
import 'moment/locale/es';
import { toCelsius } from "../urls";

const getChartData = (data) => {

    const daysAHead = [0,1,2,3,4,5];
    
    const days = daysAHead.map( d => moment().add(d, 'd'));
    
    const dataAux = days.map( day => {

        const tempObjArray = data.list.filter( item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear();
            return dayOfYear === day.dayOfYear();                    
        });

        const temps = tempObjArray.map( item => item.main.temp );
        
        return ({
            dayHour: day.format('ddd'),
            min: toCelsius(Math.min(...temps)),
            max: toCelsius(Math.max(...temps)),
            hasTemps: temps.length? true : false
        });
    }).filter( item => item.hasTemps);

    return dataAux;
}

export default getChartData