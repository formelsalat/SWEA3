import * as React from 'react';
import NavbarKategorien from './NavbarKategorien'
import Suche from '../Suche/Suche'



export default function NavItems() {
    return (
        <div className="collapse navbar-collapse" id="NavbarToggle">
            <ul className="navbar-nav mr-auto">
                <NavbarKategorien/>
                {/* <Suche/> */}
            </ul>
        </div>
    )
} 