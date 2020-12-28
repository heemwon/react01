import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div>
                        <p>Let’s create something new</p>
                        <h3>Let’s Get In<br />TOUCH</h3>
                        <Link to="/contact" className="contact">contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;