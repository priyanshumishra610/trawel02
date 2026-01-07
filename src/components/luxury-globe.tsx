"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const dotsRef = useRef<THREE.Points>(null);

  // Create random points for the "globe nodes"
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 200; i++) {
      const phi = Math.acos(-1 + (2 * i) / 200);
      const theta = Math.sqrt(200 * Math.PI) * phi;
      p.push(
        Math.cos(theta) * Math.sin(phi) * 1.5,
        Math.sin(theta) * Math.sin(phi) * 1.5,
        Math.cos(phi) * 1.5
      );
    }
    return new Float32Array(p);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (dotsRef.current) {
      dotsRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Core Glow */}
      <Sphere ref={meshRef} args={[1.45, 64, 64]}>
        <MeshDistortMaterial
          color="#0A1A44"
          speed={2}
          distort={0.1}
          radius={1}
          opacity={0.3}
          transparent
        />
      </Sphere>

      {/* Surface Dots */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#02B8FF"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      
      {/* Atmospheric Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.005, 16, 100]} />
        <meshBasicMaterial color="#02B8FF" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export const LuxuryGlobe = () => {
  return (
    <div className="w-full h-full min-h-[400px] pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#02B8FF" />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Globe />
        </Float>
      </Canvas>
    </div>
  );
};
