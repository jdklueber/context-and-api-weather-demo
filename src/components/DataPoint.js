function DataPoint({label, data}) {
    return (
        <div className="text-sm mt-1">
            <span className="underline">{label}</span>: {data}
        </div>
    );
}

export default DataPoint;