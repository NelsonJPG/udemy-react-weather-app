import convertsUnit from 'convert-units';

const appid = "30c3bc93dec3c873d219c20b98430f7f"

export const getForecastUrl = (city, countryCode) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}` 
export const getWeatherUrl = (city, countryCode) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
export const toCelsius  = temp => Number(convertsUnit(temp).from("K").to("C").toFixed(0))