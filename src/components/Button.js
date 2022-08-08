function Button({label, onClick}) {
    return (
        <button className="m-2 p-2 text-sm border border-black rounded-full bg-slate-50"
                onClick={onClick}>{label}</button>
    )
}

export default Button;