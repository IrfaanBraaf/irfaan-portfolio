/* eslint-disable */
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function MainPage() {
  

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar

      />

      <div style={{ flex: 1, padding: "40px" }}>
        <h1>About Me</h1>

      </div>
    </div>
  );
}