"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Diamond from "@/public/Diamond";

export default function DiamondCanvas() {
  return (
    <Canvas className="diamond-canvas">
      <ambientLight />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        enableRotate={true}
      />
      <Suspense fallback={null}>
        <Diamond />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}
