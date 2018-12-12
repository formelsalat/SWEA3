import * as React from 'react';
import './Navbar.css';

import Categories from '../NavbarItems/NavbarKategorien'
export default function Navbar() {
    return (
        <nav className ="navbar navbar-expand-lg">
            
            <button className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#NavbarToggle" 
                    aria-controls="NavbarToggle" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
            >
             <i className="fas fa-bars" style ={{color: "whitesmoke"}} /> 
            </button>
            
            <a className ="Navbar-brand" 
                href ="home">
                  <i  className="fas fa-home fa-2x "
                      style ={{color: "whitesmoke"}}
                  />
            </a>   
            <div className ="collapse navbar-collapse" id="NavbarToggle"> 
              <ul className ="navbar-nav mr-auto mt-lg-0">   
                 <Categories/>
                <li className="nav-item active"><a className="nav-link" href="#">Wunschbücher</a></li>
                <li className="nav-item active"><a className="nav-link" href="#">Angebote</a></li>
              </ul>
            </div>     
        </nav>    
    )
}

