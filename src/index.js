import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MsalAuthenticationTemplate, MsalProvider } from "@azure/msal-react";
import { InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./auth/msalConfig";

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
        <App />
      </MsalAuthenticationTemplate>
    </MsalProvider>
  </React.StrictMode>
);
