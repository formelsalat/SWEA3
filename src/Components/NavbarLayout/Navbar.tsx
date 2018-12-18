import * as React from 'react';
import './Navbar.css';

import Brand from './NavbarBrand'
import Items from '../NavbarItems/NavbarItems'
import Suche from '../Suche/Suche'

export default function Navbar() {
    return (
        <nav className ="navbar navbar-expand-lg">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarToggle" aria-controls="NavbarToggle" aria-expanded="false" aria-label="Toggle navigation">
             <i className="fas fa-bars fa-1x"  /> 
            </button>
            <div>
            <Brand/>
           
            </div>
           
                   
            <div className ="collapse navbar-collapse" 
                 id="NavbarToggle"
            > 
             
              <ul className ="navbar-nav mr-auto mt-lg-0">   
              
              <Items/>

                <li className="nav-item active">
                    <a className="nav-link" href="#">Wunschbücher</a></li>

                <li className="nav-item active">
                    <a className="nav-link" href="#">Angebote</a></li>
                   
              </ul>
               <Suche/>
                
            </div>  

            <div className ="nav-item active">
           

            <a className="BucketLogo" 
                href="/Warenkorb">
                <i className="fas fa-shopping-cart fa-2x mt-lg-0 mt-1 " />
                </a> 
            
            </div>
           
            
        </nav>    
    )
}

