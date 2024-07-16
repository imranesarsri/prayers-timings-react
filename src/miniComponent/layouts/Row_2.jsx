
export default function Row_2(params) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 my-10">
            {params.children}
        </section>
    )
}
