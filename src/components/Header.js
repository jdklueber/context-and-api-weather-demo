function Header({children}) {
    return (
        <h2 className="text-lg font-bold text-blue-400 border-t border-b w-full border-blue-700 mb-2 mt-5">
            {children}
        </h2>
    );
}

export default Header;