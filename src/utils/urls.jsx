import convertsUnit from 'convert-units';

const appid = "dfdae05eb72674f05e8f1c83a766d7d3"

export const getForecastUrl = (city, countryCode) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}` 
export const getWeatherUrl = (city, countryCode) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
export const toCelsius  = temp => Number(convertsUnit(temp).from("K").to("C").toFixed(0))