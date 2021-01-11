
import { render } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';

test("WeatherDetails render",async () => {

    const { findByText } = render(<WeatherDetails humidity={10} wind={9} />) // paso 1 rederizar el componente

    const wind = await findByText(/10/); // preparar la busqueda del element 
    const humidity = await findByText(/9/); // preparar la busqueda del element 

    expect(wind).toHaveTextContent("Humedad: 10%"); // verificar el contenido
    expect(humidity).toHaveTextContent("Viento: 9 km/h"); // verificar el contenido

});