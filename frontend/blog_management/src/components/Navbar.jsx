


import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router'; 
import './Navbar.css'; 

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: 'Add Blog', path: 'addblog' },
        { label: 'Add Category', path: 'addcategory' },
        { label: 'My Blogs', path: 'myblog' },
    ];

    const logout = () => {
        window.sessionStorage.removeItem('token')
        navigate('/login');  
    }

    const isActive = (path) => location.pathname.includes(path);

    return (
        <nav className="custom-navbar"> 
            <div className="navbar-container-links">
                <Link className="navbar-brand-custom" to="/home">
                      <h2>BlogSite</h2></Link>
                
                <div className="navbar-nav-custom">
                    {navItems.map((item) => (
                        <Link 
                            key={item.path}
                            to={item.path} 
                            className={`nav-link-custom ${isActive(item.path) ? 'active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button className="nav-link-custom logout-button" onClick={logout} >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
