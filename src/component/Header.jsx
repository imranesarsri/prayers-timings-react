import MainHeader from "../miniComponent/headers/MainHeader";
import Row_1 from "../miniComponent/layouts/Row_1";
import Row_2 from "../miniComponent/layouts/Row_2";

export default function Header() {
    return (
        <Row_1>
            {/* <MainTitle /> */}
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
                        <select id="countries" className="bg-gray-50 text-center w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Choose a city</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="flex justify-center py-2 md:py-0">
                        <select id="countries" className="bg-gray-50 text-center w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </Row_2>
            </div>
        </Row_1>

    )
}
