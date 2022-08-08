function LabeledInput({type, label, value, onChange}) {
    return (
        <div>
            {label}: <input className="mt-2 mb-2 p-1 border border-blue-300 focus:bg-blue-100 rounded-md"
                            type={type} value={value} onChange={onChange} />
        </div>
    )
}

export default LabeledInput;