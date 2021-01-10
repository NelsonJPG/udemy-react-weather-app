
import React from 'react';
import { render } from '@testing-library/react';
import CityList from './CityList'

const cities = [
    { city: "Caracas", country: "Venezuela"}, 
    { city: "Bogotá", country: "Colombia"}, 
    {city: "Santiago", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"}
]
test("CityList renders", async () => {   

    const { findAllByRole } = render(<CityList cities={cities} />);
    const citylist = await findAllByRole("listitem"); // busca todos los heading dentro de los componentes (h1, h2, h3...)
    expect(citylist).toHaveLength(4);
})