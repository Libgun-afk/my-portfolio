"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";

const Test = () => {
  return (
    <Canvas>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <Model />
    </Canvas>
  );
};

export default Test;
