import React from 'react';
import './homepage.styles.scss';

const Homepage = () => (
    <div className = "homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content"> 
                    <h1 className = "title">Jackets</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content"> 
                    <h1 className = "title">Hats</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content"> 
                    <h1 className = "title">Shirts</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content"> 
                    <h1 className = "title">Jeans</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content"> 
                    <h1 className = "title">Hoodies</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;