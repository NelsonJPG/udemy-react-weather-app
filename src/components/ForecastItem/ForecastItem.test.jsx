import React from 'react'
import ForecastItem from '../ForecastItem';
import { render } from '@testing-library/react';

test("ForecastItem renders", async () => {   
    const { findByText } = render(<ForecastItem hour={10} temperature={21} state="cloud" weekDay="Martes" />);

    const hour = await findByText(/10/); // preparar la busqueda del element 
    const temperature = await findByText(/21/); // preparar la busqueda del element 
    const weekDay = await findByText(/Martes/); // preparar la busqueda del element 

    expect(hour).toHaveTextContent("10");
    expect(temperature).toHaveTextContent("21 °");
    expect(weekDay).toHaveTextContent("Martes");
});