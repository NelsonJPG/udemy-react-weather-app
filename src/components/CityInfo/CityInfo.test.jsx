import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo'; // se debe importar el SUT: Subject under Testing (Objeto de Testeo)

test("CityInfo Render", async () => {
    /* debe cumplir con la AAA 
        A = Arrange  => organiza 
        A = Act => actua
        A = Assert => afirma
    */
    const city = "Caracas";
    const country = "Venezuela";
    const { findAllByRole } = render(<CityInfo city={"Caracas"} country={"Venezuela"} />);
    const cityAndCountryComponents = await findAllByRole("heading") // busca todos los heading dentro de los componentes (h1, h2, h3...)

    expect( cityAndCountryComponents[0]).toHaveTextContent(city);
    expect( cityAndCountryComponents[1]).toHaveTextContent(country);
});