function Header({children}) {
    return (
        <h2 className="text-lg pl-5 font-bold text-blue-900 border-b w-full border-blue-900 mb-2 pb-1 ">
            {children}
        </h2>
    );
}

export default Header;