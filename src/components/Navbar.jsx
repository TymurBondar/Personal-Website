function Navbar({setMainContent}) {

    function handleMainContentChange(event) {
        event.preventDefault();
        setMainContent(event.target.textContent);
      }

    return (
        <nav>
            <nav className="flex justify-between">
                <a onClick={handleMainContentChange} className="" href="">
                    About
                </a>
                <a onClick={handleMainContentChange} className="" href="">
                    Projects
                </a>
                <a onClick={handleMainContentChange} className="" href="">
                    Contact
                </a>
            </nav>
        </nav>
    );
};

export default Navbar;