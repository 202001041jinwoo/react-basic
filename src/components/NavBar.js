import{Link, NavLink}from 'react-router-dom';
import '../pages/css/NavBar.css';
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="header-container">
                <Link className = "header-school" to = "/">
                    <img src = 'header-name.png'></img>
                </Link>          
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <div style={{ display: 'flex', fontWeight: 'bold' }}>
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            aria-current="page"
                            to="/blogs"
                            style={{ marginRight: '20px' }}>
                            LOGIN
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            aria-current="page"
                            to="/blog-out">
                            LOGOUT
                        </NavLink>
                    </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
    
};
export default NavBar;