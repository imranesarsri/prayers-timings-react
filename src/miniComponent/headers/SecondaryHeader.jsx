
export default function SecondaryHeader(params) {
    return (
        <h3 className="text-2xl capitalize font-bold pb-2 text-dark-secondary dark:text-light-tertiary">
            {params.secondaryHeader}
        </h3>
    )
}
