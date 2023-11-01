function Navbar({setMainContent}) {

    function handleMainContentChange(event) {
        event.preventDefault();
        setMainContent(event.target.textContent);
      }

    return (
            <nav className="flex justify-between font-bold text-xl">
                <button onClick={handleMainContentChange}>
                    About
                </button>
                <button onClick={handleMainContentChange}>
                    Projects
                </button>
            </nav>
    );
};

export default Navbar;