import * as React from 'react';
import NavbarKategorien from './NavbarKategorien'

export default function NavItems() {
    return (
        <div className="collapse navbar-collapse" id="NavbarCollapse">
            <ul className="navbar-nav mr-auto">
                <NavbarKategorien/>
            </ul>
        </div>
    )
} 