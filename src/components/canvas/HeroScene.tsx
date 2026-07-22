"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingStones() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-2, 0, 0]} scale={1.5}>
          <meshStandardMaterial
            color="#869a7d"
            roughness={0.2}
            metalness={0.1}
            envMapIntensity={1}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} position={[2, 1, -2]} scale={0.8}>
          <meshStandardMaterial
            color="#b4c2af"
            roughness={0.1}
            metalness={0.2}
            envMapIntensity={1.5}
          />
        </Sphere>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[1, 64, 64]} position={[0, -1.5, 1]} scale={1.2}>
          <meshStandardMaterial
            color="#e3e8e1"
            roughness={0.4}
            metalness={0.1}
            envMapIntensity={0.8}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-multiply dark:mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Environment preset="city" />
        <FloatingStones />
      </Canvas>
    </div>
  );
}
