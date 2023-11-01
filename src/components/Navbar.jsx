function Navbar({setMainContent}) {

    function handleMainContentChange(event) {
        event.preventDefault();
        setMainContent(event.target.textContent);
      }

    return (
            <nav className="flex justify-start font-bold text-xl">
                <button onClick={handleMainContentChange} className="mr-5">
                    About 
                </button>
                <button onClick={handleMainContentChange} className="mr-5">
                    Projects 
                </button>
            </nav>
    );
};

export default Navbar;