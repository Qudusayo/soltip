import React from "react";

import { Title, Input, Frame } from "../components/ui";
import { IconX, USDC } from "../components/Icons";
import QuickSelector from "../components/QuickSelector";

export default function Main({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: (value: number) => void;
}) {
  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let manualAmount = e.currentTarget.value;
    manualAmount === "" ? setAmount(1) : setAmount(parseInt(manualAmount));
  };

  return (
    <div>
      <Title>Send some tip</Title>
      <Frame>
        <USDC width="35" height="35" />
        <IconX width="20" height="20" />
        <QuickSelector
          amount={amount}
          value={1}
          setAmountHandler={() => setAmount(1)}
        />
        <QuickSelector
          amount={amount}
          value={3}
          setAmountHandler={() => setAmount(3)}
        />
        <QuickSelector
          amount={amount}
          value={5}
          setAmountHandler={() => setAmount(5)}
        />
        <Input
          type="number"
          min="0"
          placeholder="1"
          value={amount}
          onChange={inputChangeHandler}
        />
      </Frame>
    </div>
  );
}
