"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

function PulsingNodes() {
  const group = useRef<THREE.Group>(null);
  const nodes = new Array(40).fill(0).map((_, i) => ({
    position: new THREE.Vector3((Math.random()-0.5)*6, (Math.random()-0.5)*3, (Math.random()-0.5)*6),
    size: Math.random()*0.12 + 0.04,
  }));
  useFrame(({ clock, mouse }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.1;
    group.current.position.x = mouse.x * 0.2;
    group.current.position.y = -mouse.y * 0.2;
  });
  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.position.toArray()}>
          <sphereGeometry args={[n.size, 24, 24]} />
          <meshStandardMaterial color={i % 3 === 0 ? '#5b7cfa' : i % 3 === 1 ? '#9b5bfa' : '#28d7a0'} emissiveIntensity={0.4} metalness={0.2} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="h-[420px] rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={1.2} />
        <PulsingNodes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}