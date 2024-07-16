import MainTitle from "../miniComponent/titles/MainTitle";

export default function Header() {
    return (
        <div className="">
            <MainTitle />
            <div className="flex justify-center">
                <select id="countries" className="bg-gray-50 text-center w-full md:w-1/2 lg:w-1/3  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
        </div>
    )
}
