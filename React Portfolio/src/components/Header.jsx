import React from 'react';

const Header = () => {
    return (
        <header className= "header">
           <div className="header_container"> 
            <h1 className="developer_name">Ade Fajemisin </h1>
            <nav className="navigation"> 
                <ul className="nav_list">
                    <li><a href="#about" >About</a></li>
                    <li><a href="#projects" >Projects</a></li>
                    <li><a href="#contact" >Contact</a></li>
                </ul>
            </nav>
             
           </div>
        </header>
    );
};

export default Header;