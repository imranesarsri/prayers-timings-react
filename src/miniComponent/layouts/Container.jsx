
export default function Container(params) {
    return (
        <section className="my-10 p-5 lg:p-10 bg-light-default dark:bg-dark-secondary md:rounded-lg border-b-4 border-b-Blue-secondary dark:border-b-Blue-default">
            {params.children}
        </section>
    )
}
