import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.css";

import { App } from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-fbz30sd7.us.auth0.com"
    clientId="2HZvgIpjuQbHo0IMvCuFzIx280WfExc4"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById("root"),
);
