import React from "react";
import { BuilderBar } from "@ide/common";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <BuilderBar />
      <div
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Pages</h1>
      </div>
    </div>
  );
};

export default App;
