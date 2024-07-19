
export default function Main(params) {
    return (
        <main className="container sm:p-2 md:p-5 lg:p-10">
            {params.children}
        </main>
    )
}
