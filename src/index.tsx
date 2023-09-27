import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Global, css } from "@emotion/react";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

const root = ReactDOM.createRoot(
  document.getElementById("soltip-widget") as HTMLElement
);

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Borel&family=Figtree:wght@300;400&display=swap");

  .wallet-adapter-button,
  .wallet-adapter-dropdown {
    width: 100% !important;
  }

  .wallet-adapter-button {
    align-items: center !important;
    justify-content: center !important;
    font-weight: 400 !important;
    font-family: "Krub", sans-serif !important;
    overflow: hidden !important;
    white-space: nowrap !important;

  }

  .wallet-adapter-dropdown-list {
    top: -350% !important;
  }
`;

const ENDPOINT = clusterApiUrl("devnet");

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

root.render(
  <React.StrictMode>
    <>
      <Global styles={globalStyles} />
      <ConnectionProvider endpoint={ENDPOINT}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <App id="soltip-widget" />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
