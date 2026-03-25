import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import StoveModel from "./StoveModel";
import FloatingParticles from "./FloatingParticles";

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} color="#fff5e6" />
          <directionalLight position={[-3, 3, -3]} intensity={0.3} color="#f97316" />
          <StoveModel />
          <FloatingParticles />
          <Environment preset="night" />
          <fog attach="fog" args={["#111318", 6, 16]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
