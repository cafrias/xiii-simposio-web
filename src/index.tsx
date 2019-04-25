import React from "react";
import { render } from "react-snapshot";

import "./index.sass";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

render(<App />, document.getElementById("root"));
registerServiceWorker();
