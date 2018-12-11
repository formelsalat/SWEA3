import * as React from 'react';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Meine" aria-controls="Meine" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            
          
            <div className="collapse navbar-collapse" id="Meine">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                
                <li className="nav-item active" >
                        <a className ="nav-link" href="#">  <i className="fas fa-home fa-2x mr-sm-2 mr-auto"/>
                        </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  href="#">Kategorien</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href="#">Angebote</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="#">Neue Bücher</a>
                  </li>
                <li className="nav-item">
                  <a className="nav-link "  href="#">Wunschbücher</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li><i className="fas fa-shopping-cart fa-2x mr-sm-2 mr-auto"/></li>  
                <li><input className="form-control mr-sm-2 mr-auto" type="search" placeholder="suche..." aria-label="Search" /></li>
                <button className="btn my-2 my-sm-0 mr-auto" type="submit">Suche</button>
                </ul>
              </form>
            </div>
          </nav>
    )
}