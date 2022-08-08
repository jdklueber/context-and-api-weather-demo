function Button({label, onClick}) {
    return (
        <button className="m-2 p-2 text-sm text-blue-900 border border-blue-900 rounded-full bg-blue-100"
                onClick={onClick}>{label}</button>
    )
}

export default Button;