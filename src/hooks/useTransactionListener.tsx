import { PublicKey } from "@solana/web3.js";
import { useEffect, useRef, useState } from "react";
import { findReference, FindReferenceError } from "@solana/pay";
import { useConnection } from "@solana/wallet-adapter-react";

export default function useTransactionListener(reference: PublicKey) {
  const [confirmed, setConfirmed] = useState(false);
  const { connection } = useConnection();

  const mostRecentNotifiedTransaction = useRef<string | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        // Check if there is any transaction for the reference
        const signatureInfo = await findReference(connection, reference, {
          until: mostRecentNotifiedTransaction.current,
        });
        setConfirmed(true);

        mostRecentNotifiedTransaction.current = signatureInfo.signature;
      } catch (e) {
        if (e instanceof FindReferenceError) {
          // No transaction found yet, ignore this error
          return;
        }
        console.error(e);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [connection, reference]);

  return confirmed;
}
