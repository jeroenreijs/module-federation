import React from "react";
import { BuilderBar } from "@ide/common";

import "./index.css";

export default function Root() {
  return (
    <div className="flex">
      <div id="sidebar">
        <BuilderBar />
      </div>
      <div id="detail">
        <h1>IDE - Main</h1>
        <p>This is the main container of the IDE</p>
        <p>You can see a dashboard here!</p>
      </div>
    </div>
  );
}
