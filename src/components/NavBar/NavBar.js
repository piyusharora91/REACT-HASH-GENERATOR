import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>Hash Converter</h1>
            <nav className="contact-container">
                <div className="nav-links" id="profile-pic">
                    <img src="https://avatars.githubusercontent.com/u/41067454?v=4" alt="Developer Profile Pic"
                        id="profile-pic" draggable="false" />
                </div>
                <div className="nav-links" id="portfolio">
                    <a href="https://piyush-arora.netlify.app/"
                        rel="noreferrer" title="Portfolio" target="_blank">
                        <i className="fa-solid fa-link social-logo" id="portfolio-link"></i>
                    </a>
                </div>
                <div className="nav-links" id="portfolio">
                    <a href="https://twitter.com/Piyush_Arora91" rel="noreferrer" title="Portfolio" target="_blank">
                        <i className="fa-brands fa-twitter social-logo"></i>
                    </a>
                </div>
                <div className="nav-links" id="linkedin">
                    <a target="_blank" rel="noreferrer"
                        href="https://www.linkedin.com/in/piyush-arora2212/" title="LinkedIn Profile">
                        <i className="fa-brands fa-linkedin social-logo"></i>
                    </a>
                </div>
                <div className="nav-links" id="github">
                    <a target="_blank" rel="noreferrer"
                        href="https://github.com/piyusharora91" title="Github Profile">
                        <i className="fa-brands fa-github social-logo"></i>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;