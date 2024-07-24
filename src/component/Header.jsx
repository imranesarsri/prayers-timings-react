import { useContext } from "react";
import MainHeader from "../miniComponent/headers/MainHeader";
import Row_1 from "../miniComponent/layouts/Row_1";
import Row_2 from "../miniComponent/layouts/Row_2";
import { ApiPrayersContext } from "../logic/ApiPrayers";

export default function Header() {
    const { allCountries, allCities, country, setCountry, city, setCity, capital } = useContext(ApiPrayersContext);

    return (
        <Row_1>
            <div className="text-center capitalize pb-5">
                <MainHeader mainHeader="Prayer Times" />
            </div>
            <div className="text-center pb-5">
                <p className="text-xl md:text-3xl">
                    Select your country and city to get accurate prayer times.
                </p>
            </div>
            <div className="w-full lg:w-4/5 m-auto">

                <Row_2>
                    <div className="flex justify-center py-2 md:py-0">
                        <select id="countries" value={country} onChange={(event) => { setCountry(event.target.value) }} className="bg-gray-50 text-center w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {allCountries.map((country) => (
                                <option key={country.Iso2} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-center py-2 md:py-0">
                        <select id="countries" value={city} onChange={(event) => { setCity(event.target.value) }} className="bg-gray-50 text-center w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value={capital}>{capital}</option>
                            {allCities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </Row_2>
            </div>
        </Row_1>

    )
}
