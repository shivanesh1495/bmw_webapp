import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function ModelViewer({ doorsOpen }) {
  const modelRef = useRef();
  const { scene } = useGLTF("/bmw_model.glb"); // Ensure correct file name

  useEffect(() => {
    if (scene) {
      scene.scale.set(1, 1, 1); // Adjust Scale
      scene.position.set(0,-1, 0); // Adjust Position

      // Find door meshes
      scene.traverse((child) => {
        if (child.name.toLowerCase().includes("door")) {
          child.userData.isDoor = true; // Mark doors
        }
      });
    }
  }, [scene]);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.userData.isDoor) {
          child.rotation.y = doorsOpen ? Math.PI / 4 : 0; // Open/close doors
        }
      });
    }
  }, [doorsOpen]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Slow Rotation
    }
  });

  return <primitive object={scene} ref={modelRef} />;
}

// Preload model
useGLTF.preload("/bmw_model.glb");
