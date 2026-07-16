import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Ring } from '@react-three/drei';

function DistortSphere() {
  const meshRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      const px = state.pointer.x * 0.3;
      const py = state.pointer.y * 0.2;
      meshRef.current.rotation.x += (py - meshRef.current.rotation.x) * 0.04;
      meshRef.current.rotation.z += (px - meshRef.current.rotation.z) * 0.04;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.65}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#6c5ce7"
          attach="material"
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.3}
          emissive="#22d3ee"
          emissiveIntensity={0.12}
        />
      </mesh>
    </Float>
  );
}

function SpinningRing({ radius, tilt, speed, color }) {
  const ref = useRef(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.z = t * speed;
    }
  });
  return (
    <group rotation={[tilt, 0.3, 0]}>
      <Ring ref={ref} args={[radius, radius + 0.02, 64]}>
        <meshBasicMaterial color={color} transparent opacity={0.55} side={2} />
      </Ring>
    </group>
  );
}

export default function HeroOrb() {
  return (
    <div className="hero-orb" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.2} color="#22d3ee" />
        <Suspense fallback={null}>
          <DistortSphere />
          <SpinningRing radius={2.05} tilt={0.4} speed={0.25} color="#22d3ee" />
          <SpinningRing radius={2.35} tilt={-0.6} speed={-0.18} color="#f7b733" />
        </Suspense>
      </Canvas>
    </div>
  );
}
