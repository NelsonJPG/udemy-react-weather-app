
const cities = [
    { city: "Caracas", country: "Venezuela", countryCode: "VE"}, 
    { city: "Bogotá", country: "Colombia", countryCode: "CO"}, 
    { city: "Santiago", country: "Chile", countryCode: "CL"},
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"}
]

export const getCities = () =>  (cities);

export const getCountryNameByCountryCode = countryCode => cities.find( city => city.countryCode === countryCode).country;
