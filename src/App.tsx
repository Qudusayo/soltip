import { useState } from "react";
import { Keypair } from "@solana/web3.js";

import Pay from "./pages/Pay";
import Main from "./pages/Main";
import { IconBack } from "./components/Icons";
import Confirmed from "./pages/Confirmed";
import { Button, Container } from "./components/ui";
import Badge from "./components/Badge";
import Banner from "./components/Banner";

function App({ id }: { id: string }) {
  const [amount, setAmount] = useState(1);
  const [isContainerOpen, setIsContainerOpen] = useState(false);
  const [route, setRoute] = useState<"main" | "pay" | "confirmed">("main");
  const [reference, setReference] = useState(Keypair.generate().publicKey);

  const wrapper: HTMLElement | null = document.getElementById(id);

  const ownerAddress: string = wrapper
    ? ((wrapper as HTMLDivElement).getAttribute("owner-address") as string)
    : "";

  const handleClick = () => {
    setRoute("pay");
  };

  const generateReference = () => {
    setReference(Keypair.generate().publicKey);
  };

  return (
    <>
      <Container open={isContainerOpen}>
        <Banner />
        {route === "main" && (
          <div>
            <Main amount={amount} setAmount={setAmount} />
            <Button onClick={handleClick}>Proceed to tip</Button>
          </div>
        )}
        {route === "pay" && (
          <div>
            <div
              onClick={() => setRoute("main")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                marginBottom: "1rem",
                cursor: "pointer",
                fontFamily: '"Figtree", sans-serif',
              }}
            >
              <IconBack width={20} />
              <span>Go Back</span>
            </div>
            <Pay
              reference={reference}
              amount={amount}
              ownerAddress={
                ownerAddress ?? "zFys86e8C1du5uennzuGEoNYMigAgyj9F1PC6vdZu5U"
              }
              setRoute={setRoute}
            />
          </div>
        )}
        {route === "confirmed" && (
          <Confirmed
            setRoute={() => {
              setRoute("main");
              generateReference();
            }}
          />
        )}
      </Container>
      <Badge
        toggleState={() => setIsContainerOpen((isOpen) => !isOpen)}
        open={isContainerOpen}
      />
    </>
  );
}

export default App;
