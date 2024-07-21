import { useContext } from "react";
import TableRow from "../miniComponent/component/TableRow";
import { ApiPrayersContext } from "../miniComponent/logic/ApiPrayers";

export default function TimingAllPrayers() {
    const { timings } = useContext(ApiPrayersContext);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-tertiary dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Image</th>
                        <th scope="col" className="px-6 py-3">Prayer</th>
                        <th scope="col" className="px-6 py-3">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(timings).map(([key, value]) => (
                        <TableRow key={key} title={key} time={value} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
