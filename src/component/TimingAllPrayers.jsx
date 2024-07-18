import TableRow from "../miniComponent/component/TableRow";

export default function TimingAllPrayers() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Prayer
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow title="fajr" time="00:00" />
                    <TableRow title="sunrise" time="00:00" />
                    <TableRow title="dhuhr" time="00:00" />
                    <TableRow title="asr" time="00:00" />
                    <TableRow title="sunset" time="00:00" />
                    <TableRow title="maghrib" time="00:00" />
                    <TableRow title="isha" time="00:00" />
                    <TableRow title="imsak" time="00:00" />
                    <TableRow title="midnight" time="00:00" />
                    <TableRow title="firstthird" time="00:00" />
                    <TableRow title="lastthird" time="00:00" />
                </tbody>
            </table>
        </div>

    )
}
