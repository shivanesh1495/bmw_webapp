import React from "react";

export default function UIControls({ doorsOpen, setDoorsOpen }) {
  return (
    <div style={{
      position: "absolute", bottom: "20px", left: "50%",
      transform: "translateX(-50%)", display: "flex", gap: "10px"
    }}>
      <button 
        onClick={() => setDoorsOpen(!doorsOpen)} 
        style={{
          padding: "10px 20px", borderRadius: "5px",
          background: "#000", color: "#fff", cursor: "pointer"
        }}
      >
        {doorsOpen ? "Close Doors" : "Open Doors"}
      </button>
    </div>
  );
}
