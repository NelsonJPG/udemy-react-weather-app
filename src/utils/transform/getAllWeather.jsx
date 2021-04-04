import { toCelsius } from "../urls";
import { getCityCode } from "../utils"
import { validValues } from "../../components/IconState"

const getAllWeather = (response, city, countryCode) => {
 
    const { data } = response
        
    const temperature = toCelsius(data.main.temp);
    
    const wind = data.main.speed

    const humidity = data.main.humidity

    const stateFromServer = data.weather[0].main.toLowerCase();

    const state =  validValues.includes(stateFromServer)? stateFromServer : null;

    const propKeys = getCityCode( city, countryCode)
    
    const propValues = { temperature, state, wind, humidity } 

    return ({ [propKeys]: propValues })
}

export default getAllWeather;
