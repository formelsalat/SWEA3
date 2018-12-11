import * as React from "react";
import { App } from "./App/App";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

render(<App />, document.getElementById("root") as HTMLElement);
