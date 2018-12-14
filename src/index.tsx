import * as React from "react";
import { App } from "./App/App";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from 'react-router-dom'
// render(<App />, document.getElementById("root") as HTMLElement);



// Strict Mode:
// https://medium.com/@baphemot/whats-new-in-react-16-3-d2c9b7b6193b
// https://github.com/ReactTraining/react-router/issues/6060

render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    // siehe index.html
    document.getElementById('root') as HTMLElement,
)
