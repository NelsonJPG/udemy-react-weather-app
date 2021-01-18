import React from 'react'
import Forecast from './Forecast';
import { render } from '@testing-library/react';

const forecastItemList = [
    { hour: 12, temperature: 30, state: "cloud", weekDay: "Lunes"},
    { hour: 20, temperature: 10, state: "sunny", weekDay: "Martes"},
    { hour: 3, temperature: 20, state: "rain", weekDay: "Miercoles"},
]

test("Forecast render", async () => {   

    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />);

    const forecastItems = await findAllByTestId("forecast-item-container");

    expect(forecastItems).toHaveLength(3);

});