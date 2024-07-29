import axios from "axios";

export default async function GetCapital(setCapital, country) {
    // Get capital
    try {
        const response = await axios.post('https://countriesnow.space/api/v0.1/countries/capital',
            { iso2: country.Iso2 })
        setCapital(response.data.data.capital)
    } catch (error) {
        console.error("Error fetching capital:", error);
    }
}
