import React, { useState } from "react";
import { Buffer } from "buffer";
import { createQR, encodeURL, TransactionRequestURLFields } from "@solana/pay";
import { useEffect, useRef } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey, Transaction } from "@solana/web3.js";
import { Button, Title } from "../components/ui";
import useTransactionListener from "../hooks/useTransactionListener";

export default function Pay({
  reference,
  ownerAddress,
  amount,
  setRoute,
}: {
  reference: PublicKey;
  ownerAddress: string;
  amount: number;
  setRoute: (route: "main" | "pay" | "confirmed") => void;
}) {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const baseUrl = process.env.REACT_APP_SERVER_URL;

  const mintQrRef = useRef<HTMLDivElement>(null);
  const confirmed = useTransactionListener(reference);

  const [payingWithButton, setPayingWithButton] = useState(false);

  useEffect(() => {
    if (confirmed) setRoute("confirmed");
  }, [confirmed]);

  useEffect(() => {
    const apiUrl = `${baseUrl}/${reference}/${ownerAddress}/${amount}`;
    const mintUrlFields: TransactionRequestURLFields = {
      link: new URL(apiUrl),
    };

    const mintUrl = encodeURL(mintUrlFields);
    const mintQr = createQR(mintUrl, 300, "transparent", "#512da8");

    if (mintQrRef.current) {
      mintQrRef.current.innerHTML = "";
      mintQr.append(mintQrRef.current);
    }
  }, []);

  async function sendTip(e: React.MouseEvent) {
    e.preventDefault();
    setPayingWithButton(true);

    try {
      if (publicKey) {
        const response = await fetch(
          `${baseUrl}/${reference}/${ownerAddress}/${amount}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ account: publicKey.toBase58() }),
          }
        );

        const responseBody = await response.json();

        if ("error" in responseBody) {
          const error = responseBody.error;
          console.error(error);
          return;
        }

        // We receive the transaction serialized to base64, deserialize it to send
        const transaction = Transaction.from(
          Buffer.from(responseBody.transaction, "base64")
        );
        await sendTransaction(transaction, connection);
      }
    } catch (error) {
      console.error(error);
      setPayingWithButton(false);
      console.log(`Error sending transaction: ${error}`);
    }
  }

  return (
    <div>
      <div>
        <Title>Scan QR to send tip</Title>
        <div
          style={{
            border: "2px solid",
            borderRadius: "0.75rem",
            borderColor: "#512da8c5",
          }}
          ref={mintQrRef}
        />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h3
          style={{
            fontFamily: '"Borel", cursive',
            margin: 0,
            color: "#512da8",
          }}
        >
          Or send tip using wallet
        </h3>
        <div
          style={{
            gap: ".5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            <WalletMultiButton />
          </div>
          {publicKey && (
            <Button
              type="button"
              disabled={!publicKey || payingWithButton}
              onClick={sendTip}
              style={{
                marginTop: 0,
                fontSize: "1rem",
                padding: "0.875rem",
                flex: 3,
              }}
            >
              {payingWithButton ? "Sending..." : "Send Tip"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
