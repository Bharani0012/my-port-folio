import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 1400;

function ParticleField() {
  const pointsRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14 - 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02;
      pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;
    }
    mouse.current.x = state.pointer.x;
    mouse.current.y = state.pointer.y;
    state.camera.position.x += (mouse.current.x * 0.8 - state.camera.position.x) * 0.02;
    state.camera.position.y += (mouse.current.y * 0.5 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={PARTICLE_COUNT} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#6c5ce7"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

function DriftingShape({ position, scale, speed, color }) {
  const meshRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.22;
      meshRef.current.position.y = position[1] + Math.sin(t) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function Rig() {
  const { viewport } = useThree();
  return (
    <group>
      <DriftingShape position={[viewport.width * 0.28, 1.4, -3]} scale={0.9} speed={0.6} color="#6c5ce7" />
      <DriftingShape position={[-viewport.width * 0.32, -1.6, -5]} scale={1.3} speed={0.4} color="#22d3ee" />
      <DriftingShape position={[viewport.width * 0.08, -2.4, -6]} scale={0.6} speed={0.8} color="#f7b733" />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="three-bg" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ParticleField />
        <Rig />
      </Canvas>
    </div>
  );
}
