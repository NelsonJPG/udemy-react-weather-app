import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // otros matcher

test("Weather render", async () => {

    const { findByRole } = render(<Weather temperature={10} state="sunny" />) // paso 1 rederizar el componente

    const temp = await findByRole("heading"); // preparar la busqueda del element 

    expect(temp).toHaveTextContent("10"); // verificar el contenido

});