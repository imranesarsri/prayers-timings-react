
export default function Row_2(params) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            {params.children}
        </section>
    )
}
