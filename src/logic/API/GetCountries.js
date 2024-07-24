import axios from "axios";

export default async function GetCountries(setAllCountries) {
    // Get all countries
    try {
        const response = await axios.get("https://countriesnow.space/api/v0.1/countries/iso");
        setAllCountries(response.data.data);
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}
