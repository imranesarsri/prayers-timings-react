import axios from "axios";

export default async function GetCities(setAllCities, country) {

    // Get all cities related to one country
    try {
        const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities',
            { country: country.name })
        setAllCities(response.data.data)
    } catch (error) {
        console.error("Error fetching cities:", error);
    }
}
