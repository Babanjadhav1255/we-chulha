import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 60;

const FloatingParticles = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, () => ({
      x: (Math.random() - 0.5) * 8,
      y: Math.random() * 6 - 1,
      z: (Math.random() - 0.5) * 8,
      speed: 0.2 + Math.random() * 0.5,
      scale: 0.02 + Math.random() * 0.04,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      const y = ((p.y + p.speed * t * 0.3) % 7) - 1;
      dummy.position.set(
        p.x + Math.sin(t * 0.5 + p.offset) * 0.3,
        y,
        p.z + Math.cos(t * 0.4 + p.offset) * 0.3
      );
      dummy.scale.setScalar(p.scale * (1 + Math.sin(t * 2 + p.offset) * 0.3));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#f97316" transparent opacity={0.7} />
    </instancedMesh>
  );
};

export default FloatingParticles;
