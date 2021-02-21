
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList'

const cities = [
    { city: "Caracas", country: "Venezuela"}, 
    { city: "Bogotá", country: "Colombia"}, 
    {city: "Santiago", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"}
]
test("CityList renders", async () => {   

    const fnClickOnItem = jest.fn(); // funcion mock = imita a una funcion normal
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />);
    const citylist = await findAllByRole("button"); // busca todos los heading dentro de los componentes (h1, h2, h3...)
    expect(citylist).toHaveLength(4);
})

test("CityList clic on item", async() => {

    const fnClickOnItem = jest.fn(); // funcion mock = imita a una funcion normal

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />);

    const citylist = await findAllByRole("button"); // busca todos los heading dentro de los componentes (h1, h2, h3...)

    fireEvent.click(citylist[0]);

    expect(fnClickOnItem).toHaveBeenCalledTimes(1);

});