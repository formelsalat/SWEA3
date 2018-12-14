import * as React from 'react';
import './Navbar.css'

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg">

      <a className ="Navbar-brand" 
                href ="home">
                  <i  className="fas fa-home fa-2x "
                      style ={{color: "whitesmoke"}}
                  />
            </a>   

       <button  className="navbar-toggler"
                type="button"   
                data-toggle="collapse" 
                data-target="#NavbarLayout" 
                aria-controls="NavbarLayout" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
        >
        <i className="fas fa-bars fa-2x" style ={{color: "whitesmoke"}} /> 
        </button>
      
         
      <div className="collapse navbar-collapse" id="NavbarLayout">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li><i className="fas fa-shopping-cart fa-2x mr-sm-2 mr-auto"/></li>  
          <li className="nav-item active">
            <a className="nav-link" href="#">Kategorien</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Wunschbücher</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Angebote</a>
          </li>
        </ul>
        
      </div>
    </nav>
    )
}

