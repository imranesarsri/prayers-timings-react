
export default function Row_2(params) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
            {params.children}
        </div>
    )
}
