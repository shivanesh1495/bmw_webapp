import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ModelViewer from "./components/ModelViewer";
import UIControls from "./components/UIControls";
import { useState } from "react";

function App() {
  const [doorsOpen, setDoorsOpen] = useState(false); // Corrected State

  return (
    <div 
      style={{ 
        width: "100vw", 
        height: "100vh", 
        backgroundImage: "url('/background.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center"
      }}
    >
      {/* BMW Info at the Top */}
      <div style={{
        position: "absolute", top: "20px", left: "50%",
        transform: "translateX(-50%)", color: "#fff",
        background: "rgba(0, 0, 0, 0.7)", padding: "12px 24px",
        borderRadius: "10px", fontSize: "16px", textAlign: "center",
        maxWidth: "450px", fontWeight: "bold"
      }}>
        <h2>BMW M4 Competition</h2>
        <p>The perfect blend of performance, luxury, and innovation. A true driving experience.</p>
      </div>

      <Canvas shadows camera={{ position: [0, 3, 7], fov: 50 }}>
        
        {/* Lights */}
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
        <directionalLight position={[-5, 5, 5]} intensity={3} castShadow />

        {/* HDR Environment */}
        <Environment preset="city" />

        {/* 3D Model */}
        <ModelViewer doorsOpen={doorsOpen} />

        {/* Camera Controls */}
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>

      {/* UI Controls */}
      <UIControls setDoorsOpen={setDoorsOpen} doorsOpen={doorsOpen} />
    </div>
  );
}

export default App;
