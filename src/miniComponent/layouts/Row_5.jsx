export default function Row_5(params) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 sm:gap-4">
            {params.children}
        </div>
    );
}
