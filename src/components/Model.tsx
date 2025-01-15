import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/vercel.svg");

const Model = () => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/vercel.svg");

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
