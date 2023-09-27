import React from "react";
import styled from "@emotion/styled";

// Define a styled component for .quickValue
const QuickValue = styled.span<{ active: boolean }>`
  color: #512da8;
  background-color: #ffffff;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ece3fb;
  cursor: pointer;
  font-family: "Figtree", sans-serif;
  user-select: none;

  &:hover {
    border: 1px solid #512da8c5;
  }

  ${(props) =>
    props.active &&
    `
      border: 1px solid #512da8;
      background-color: #512da8;
      color: #ffffff;
    `};
`;

// Your component using QuickValue
function QuickSelector({
  amount,
  value,
  setAmountHandler,
}: {
  amount: number;
  value: number;
  setAmountHandler: (value: number) => void;
}) {
  return (
    <QuickValue
      className={amount === value ? "active" : ""}
      onClick={() => setAmountHandler(value)}
      active={amount === value}
    >
      {value}
    </QuickValue>
  );
}

export default QuickSelector;
