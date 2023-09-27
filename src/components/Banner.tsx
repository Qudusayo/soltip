import React from "react";

export default function Banner() {
  return (
    <div
      style={{
        backgroundColor: "#512da8",
        color: "#ffffff",
        textAlign: "center",
        fontFamily: '"Figtree", sans-serif',
        fontSize: "0.875rem",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        borderTopLeftRadius: "0.75rem",
        borderTopRightRadius: "0.75rem",
        padding: "0.5rem",
        maxWidth: "332px",
      }}
    >
      Currently In Testnet Mode
    </div>
  );
}
