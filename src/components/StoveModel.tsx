import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const StoveModel = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -0.3, 0]}>
        {/* Base cylinder - stove body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.4, 1.8, 32]} />
          <meshStandardMaterial
            color="#2a2a2a"
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>

        {/* Top ring */}
        <mesh position={[0, 1, 0]}>
          <torusGeometry args={[1.1, 0.08, 16, 32]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.6}
            roughness={0.2}
            emissive="#f97316"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Inner glow cylinder */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 0.6, 32]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.8}
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Air vents - small cylinders around the body */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * 1.3,
                -0.2,
                Math.sin(angle) * 1.3,
              ]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
              <meshStandardMaterial
                color="#444"
                metalness={0.9}
                roughness={0.2}
              />
            </mesh>
          );
        })}

        {/* Handle */}
        <mesh position={[1.6, 0.3, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.5, 0.12, 0.12]} />
          <meshStandardMaterial
            color="#666"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Base plate */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
          <meshStandardMaterial
            color="#333"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Flame glow - point light */}
        <pointLight
          position={[0, 0.8, 0]}
          color="#f97316"
          intensity={2}
          distance={4}
        />
      </group>
    </Float>
  );
};

export default StoveModel;
