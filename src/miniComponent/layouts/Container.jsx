
export default function Container(params) {
    return (
        <section className="my-10 p-10 bg-light-default rounded-lg">
            {params.children}
        </section>
    )
}
